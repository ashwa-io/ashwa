"use client";

import { useEffect, useRef, useState } from "react";

import { Visual } from "@/components/visuals";
import { cn } from "@/lib/utils";

/**
 * The homepage map: a dense city seen from above, with vehicles tracing their
 * routes. Fixed orthographic camera, so it reads as a map and not a toy model.
 * Plain three.js, loaded on the client only: the hero copy is server-rendered.
 */

type Kind = "truck" | "bus" | "suv" | "sports";

/** The live card that follows a vehicle. Sample data, not real people. */
interface Card {
  name: string;
  role: string;
  /** Portrait file in public/images/site, shown when it exists; initials otherwise. */
  avatar: string;
  vehicle: string;
  /** Left and right ends of the progress line, e.g. two places or two stops. */
  from: string;
  to: string;
  progress: number;
  stat: string;
  note: string;
}

interface VehicleSpec {
  route: number;
  kind: Kind;
  start: number;
  /** Fraction of the route covered per second. */
  speed: number;
  card?: Card;
}

/** Distance between street centre lines. A block is PITCH minus one street. */
const PITCH = 4;
const STREET = 0.95;
const COLS = 11;
const ROWS = 8;

const ROUTE_COLOURS = ["#e73b24", "#d98a00", "#1f9d6b"];

/** Routes as street intersections (column, row); each leg runs along one street. */
const ROUTES: [number, number][][] = [
  [[-9, 2], [-2, 2], [-2, -1], [3, -1], [3, -4], [9, -4]],
  [[-9, -3], [0, -3], [0, 1], [4, 1], [4, 4], [9, 4]],
  [[9, 0], [2, 0], [2, 3], [-4, 3], [-4, 0], [-9, 0]],
];

const VEHICLES: VehicleSpec[] = [
  {
    route: 0,
    kind: "truck",
    start: 0.3,
    speed: 0.022,
    card: {
      name: "Ramesh Kumar",
      role: "Driver",
      avatar: "avatar-driver",
      vehicle: "CG 04 MX 2217",
      from: "Raipur",
      to: "Nagpur",
      progress: 62,
      stat: "46 km/h",
      note: "Arrives 14:20",
    },
  },
  { route: 0, kind: "sports", start: 0.74, speed: 0.034 },
  {
    route: 1,
    kind: "bus",
    start: 0.44,
    speed: 0.024,
    card: {
      name: "Sunita Verma",
      role: "Bus driver",
      avatar: "avatar-bus-driver",
      vehicle: "Bus 3, Route North",
      from: "Stop 5",
      to: "School",
      progress: 55,
      stat: "26 on board",
      note: "Next stop 4 min",
    },
  },
  { route: 1, kind: "suv", start: 0.1, speed: 0.03 },
  {
    route: 2,
    kind: "suv",
    start: 0.36,
    speed: 0.032,
    card: {
      name: "Aarav Mehta",
      role: "Rental customer",
      avatar: "avatar-customer",
      vehicle: "Ertiga, CG 07 AT 9031",
      from: "Day 2",
      to: "Day 3",
      progress: 48,
      stat: "38 km/h",
      note: "Returns tomorrow",
    },
  },
  { route: 2, kind: "truck", start: 0.78, speed: 0.021 },
];

const TRAIL = 0.16;

/** Deterministic pseudo-random so the city is identical on every visit. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function FleetScene({
  className,
  portraits = [],
}: {
  className?: string;
  /** Avatar file names that exist in public/images/site. */
  portraits?: string[];
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let cleanup = () => {};

    import("three")
      .then((THREE) => {
        if (disposed) return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const small = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.shadowMap.enabled = !small;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // Buildings never move, so their shadows are rendered once.
        renderer.shadowMap.autoUpdate = false;
        renderer.domElement.setAttribute("aria-hidden", "true");
        host.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 300);
        // High, slightly turned view: enough tilt to read building height, flat enough to stay a map.
        const elevation = (70 * Math.PI) / 180;
        const azimuth = (28 * Math.PI) / 180;
        camera.position.set(
          Math.sin(azimuth) * Math.cos(elevation) * 120,
          Math.sin(elevation) * 120,
          Math.cos(azimuth) * Math.cos(elevation) * 120,
        );
        camera.lookAt(0, 0, 0);

        scene.add(new THREE.HemisphereLight("#ffffff", "#ddd5c4", 1.55));
        const sun = new THREE.DirectionalLight("#fff4de", 1.45);
        sun.position.set(-30, 46, 18);
        sun.castShadow = !small;
        sun.shadow.mapSize.set(2048, 2048);
        sun.shadow.camera.left = -52;
        sun.shadow.camera.right = 52;
        sun.shadow.camera.top = 40;
        sun.shadow.camera.bottom = -40;
        sun.shadow.camera.far = 140;
        sun.shadow.bias = -0.0004;
        sun.shadow.radius = 3;
        scene.add(sun);

        const lit = (color: string) => new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
        const flat = (color: string, opacity = 1) =>
          new THREE.MeshBasicMaterial({
            color,
            transparent: opacity < 1,
            opacity,
            side: THREE.DoubleSide,
            depthWrite: opacity === 1,
          });

        // Streets are the bare ground; each block is a slightly raised pad on top of it.
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(240, 200), lit("#fbf8f1"));
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        const rand = seeded(11);
        const tones = ["#fdfbf6", "#f4efe4", "#ebe4d5", "#e2d9c7"];
        const BLOCK = PITCH - STREET;
        const pads: { x: number; z: number; c: string }[] = [];
        const lots: { x: number; z: number; w: number; d: number; h: number; c: string }[] = [];

        for (let i = -COLS; i <= COLS; i++) {
          for (let j = -ROWS; j <= ROWS; j++) {
            const x = i * PITCH;
            const z = j * PITCH;
            const roll = rand();
            const water = i >= 5 && i <= 8 && j <= -6;
            const park = !water && (roll < 0.07 || (i === -1 && j === 0) || (i === 5 && j === 2));
            pads.push({ x, z, c: water ? "#cfdfe3" : park ? "#d6e0c2" : "#ece5d6" });
            if (water || park) continue;

            // Split the block into lots; the centre of the map is taller, like a downtown.
            const nx = 1 + Math.floor(rand() * 3);
            const nz = 1 + Math.floor(rand() * 2);
            const downtown = Math.max(0, 1 - Math.hypot(x - 4, z + 2) / 30);
            for (let a = 0; a < nx; a++) {
              for (let b = 0; b < nz; b++) {
                if (rand() < 0.12) continue;
                const w = BLOCK / nx - 0.22;
                const d = BLOCK / nz - 0.22;
                lots.push({
                  x: x - BLOCK / 2 + (a + 0.5) * (BLOCK / nx),
                  z: z - BLOCK / 2 + (b + 0.5) * (BLOCK / nz),
                  w: w * (0.78 + rand() * 0.22),
                  d: d * (0.78 + rand() * 0.22),
                  h: 0.25 + Math.pow(rand(), 2.4) * 1.1 + downtown * downtown * rand() * 1.9,
                  c: tones[Math.floor(rand() * tones.length)],
                });
              }
            }
          }
        }

        const dummy = new THREE.Object3D();
        const colour = new THREE.Color();
        const instanced = (
          count: number,
          material: InstanceType<typeof THREE.MeshStandardMaterial>,
          place: (i: number) => string,
        ) => {
          const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), material, count);
          for (let i = 0; i < count; i++) {
            const c = place(i);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
            mesh.setColorAt(i, colour.set(c));
          }
          mesh.receiveShadow = true;
          scene.add(mesh);
          return mesh;
        };

        instanced(pads.length, new THREE.MeshStandardMaterial({ roughness: 1 }), (i) => {
          const p = pads[i];
          dummy.position.set(p.x, 0.02, p.z);
          dummy.scale.set(BLOCK, 0.04, BLOCK);
          return p.c;
        });
        const city = instanced(lots.length, new THREE.MeshStandardMaterial({ roughness: 0.9 }), (i) => {
          const l = lots[i];
          dummy.position.set(l.x, 0.04 + l.h / 2, l.z);
          dummy.scale.set(l.w, l.h, l.d);
          return l.c;
        });
        city.castShadow = true;

        // Street path with tightly rounded corners, so vehicles turn instead of snapping.
        const streetCurve = (nodes: [number, number][]) => {
          const pts: InstanceType<typeof THREE.Vector3>[] = [];
          const at = ([c, r]: [number, number]) =>
            new THREE.Vector3((c + 0.5) * PITCH, 0, (r + 0.5) * PITCH);
          nodes.forEach((node, k) => {
            const p = at(node);
            if (k === 0 || k === nodes.length - 1) {
              pts.push(p);
              return;
            }
            const before = at(nodes[k - 1]).sub(p).normalize().multiplyScalar(0.7);
            const after = at(nodes[k + 1]).sub(p).normalize().multiplyScalar(0.7);
            pts.push(p.clone().add(before), p.clone().add(after));
          });
          return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.02);
        };

        const ribbon = (curve: InstanceType<typeof THREE.CatmullRomCurve3>, width: number, y: number) => {
          const segments = 420;
          const pos: number[] = [];
          const uv: number[] = [];
          const idx: number[] = [];
          for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const p = curve.getPointAt(t);
            const tan = curve.getTangentAt(t);
            const len = Math.hypot(tan.x, tan.z) || 1;
            const ox = (-tan.z / len) * (width / 2);
            const oz = (tan.x / len) * (width / 2);
            pos.push(p.x + ox, y, p.z + oz, p.x - ox, y, p.z - oz);
            uv.push(t, 0, t, 1);
            if (i < segments) {
              const a = i * 2;
              idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
            }
          }
          const g = new THREE.BufferGeometry();
          g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
          g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
          g.setIndex(idx);
          return g;
        };

        const curves = ROUTES.map(streetCurve);
        // The planned route: a quiet line under the bright trail each vehicle lays down.
        curves.forEach((curve, i) => {
          scene.add(new THREE.Mesh(ribbon(curve, 0.3, 0.05), flat(ROUTE_COLOURS[i], 0.3)));
        });

        // A geofence around one block.
        const fence = new THREE.Group();
        fence.position.set(2 * PITCH, 0.07, -1 * PITCH);
        const ring = new THREE.Mesh(new THREE.RingGeometry(3.45, 3.6, 96), flat("#e73b24"));
        const disc = new THREE.Mesh(new THREE.CircleGeometry(3.45, 96), flat("#e73b24", 0.08));
        ring.rotation.x = disc.rotation.x = -Math.PI / 2;
        fence.add(ring, disc);
        scene.add(fence);

        const trailTexture = (color: string) => {
          const c = document.createElement("canvas");
          c.width = 256;
          c.height = 4;
          const ctx = c.getContext("2d");
          if (ctx) {
            const grad = ctx.createLinearGradient(0, 0, 256, 0);
            grad.addColorStop(0, "rgba(255,255,255,0)");
            grad.addColorStop(0.97, color);
            grad.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 256, 4);
          }
          const tex = new THREE.CanvasTexture(c);
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.repeat.x = 1 / TRAIL;
          return tex;
        };

        const part = (
          w: number,
          h: number,
          d: number,
          color: string,
          x: number,
          y: number,
          z = 0,
        ) => {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), lit(color));
          m.position.set(x, y, z);
          return m;
        };
        const GLASS = "#1c2226";
        const TYRE = "#16130f";
        /** Wheels sit just outside the body so they read from above. */
        const wheels = (xs: number[], half: number, r = 0.085) =>
          xs.flatMap((x) =>
            [half, -half].map((z) => {
              const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.07, 14), lit(TYRE));
              m.rotation.x = Math.PI / 2;
              m.position.set(x, r, z);
              return m;
            }),
          );
        const lamps = (x: number, y: number, half: number, color: string) =>
          [half, -half].map((z) => part(0.03, 0.04, 0.08, color, x, y, z));

        // Every model faces +X and is built from a handful of boxes: body, glass, roof, wheels, lamps.
        const build = (kind: Kind): InstanceType<typeof THREE.Mesh>[] => {
          if (kind === "truck") {
            return [
              part(1.02, 0.44, 0.5, "#fdfbf6", -0.22, 0.4),
              part(1.02, 0.03, 0.46, "#ece5d6", -0.22, 0.635),
              part(1.04, 0.07, 0.52, "#e73b24", -0.22, 0.2),
              part(0.34, 0.3, 0.48, "#17130e", 0.5, 0.31),
              part(0.05, 0.14, 0.42, GLASS, 0.665, 0.36),
              part(0.26, 0.03, 0.4, "#2a251d", 0.48, 0.475),
              part(1.3, 0.08, 0.4, "#2a251d", -0.05, 0.13),
              ...wheels([0.48, -0.32, -0.56], 0.25),
              ...lamps(0.68, 0.2, 0.17, "#fff6d8"),
            ];
          }
          if (kind === "bus") {
            return [
              part(1.36, 0.36, 0.48, "#e8a317", 0, 0.34),
              part(1.26, 0.13, 0.5, GLASS, 0, 0.4),
              part(1.32, 0.04, 0.44, "#f3b93a", 0, 0.54),
              part(0.3, 0.05, 0.24, "#d8d2c4", -0.3, 0.585),
              part(0.3, 0.05, 0.24, "#d8d2c4", 0.25, 0.585),
              part(0.04, 0.16, 0.42, GLASS, 0.685, 0.4),
              ...wheels([0.44, -0.44], 0.25),
              ...lamps(0.69, 0.22, 0.18, "#fff6d8"),
            ];
          }
          if (kind === "sports") {
            return [
              part(0.98, 0.13, 0.46, "#e73b24", 0, 0.16),
              part(0.3, 0.1, 0.4, "#e73b24", 0.42, 0.145),
              part(0.4, 0.11, 0.36, GLASS, -0.08, 0.27),
              part(0.22, 0.02, 0.3, "#c42d18", -0.1, 0.335),
              part(0.05, 0.03, 0.46, "#17130e", -0.47, 0.27),
              part(0.03, 0.06, 0.04, "#17130e", -0.47, 0.235, 0.18),
              part(0.03, 0.06, 0.04, "#17130e", -0.47, 0.235, -0.18),
              ...wheels([0.33, -0.33], 0.235, 0.09),
              ...lamps(0.565, 0.16, 0.15, "#fff6d8"),
              ...lamps(-0.495, 0.17, 0.17, "#7a130a"),
            ];
          }
          return [
            part(0.92, 0.2, 0.44, "#fdfbf6", 0, 0.22),
            part(0.52, 0.15, 0.4, GLASS, -0.06, 0.39),
            part(0.44, 0.03, 0.36, "#fdfbf6", -0.06, 0.48),
            part(0.36, 0.015, 0.03, "#8a8474", -0.06, 0.5, 0.13),
            part(0.36, 0.015, 0.03, "#8a8474", -0.06, 0.5, -0.13),
            ...wheels([0.3, -0.3], 0.225, 0.09),
            ...lamps(0.465, 0.24, 0.15, "#fff6d8"),
            ...lamps(-0.465, 0.26, 0.16, "#7a130a"),
          ];
        };

        // Vehicle models: Kenney Car Kit, CC0 (public/models/vehicles). They face +Z, the scene uses +X.
        let redraw = () => {};
        const models = import("three/examples/jsm/loaders/GLTFLoader.js").then(async ({ GLTFLoader }) => {
          const loader = new GLTFLoader();
          const kinds: Kind[] = ["truck", "bus", "suv", "sports"];
          const loaded = await Promise.all(
            kinds.map(async (kind) => {
              const gltf = await loader.loadAsync(`/models/vehicles/${kind}.glb`);
              const holder = new THREE.Group();
              gltf.scene.rotation.y = Math.PI / 2;
              gltf.scene.scale.setScalar(kind === "truck" || kind === "bus" ? 0.4 : 0.36);
              holder.add(gltf.scene);
              return [kind, holder] as const;
            }),
          );
          return Object.fromEntries(loaded) as Record<Kind, InstanceType<typeof THREE.Group>>;
        });

        const fleet = VEHICLES.map((spec) => {
          const curve = curves[spec.route];
          const tint = ROUTE_COLOURS[spec.route];
          const model = new THREE.Group();
          const reach = spec.kind === "truck" || spec.kind === "bus" ? 0.98 : 0.8;
          const halo = new THREE.Mesh(new THREE.RingGeometry(reach, reach + 0.08, 64), flat(tint, 0.85));
          halo.rotation.x = -Math.PI / 2;
          halo.position.y = 0.012;
          const glow = new THREE.Mesh(new THREE.CircleGeometry(reach, 64), flat(tint, 0.14));
          glow.rotation.x = -Math.PI / 2;
          glow.position.y = 0.01;
          // Shadows are baked for the static city, so each vehicle carries its own soft one.
          const shade = new THREE.Mesh(new THREE.CircleGeometry(0.5, 32), flat("#17130e", 0.2));
          shade.rotation.x = -Math.PI / 2;
          shade.scale.set(reach * 1.5, 0.62, 1);
          shade.position.set(-0.06, 0.014, 0.08);
          model.add(glow, halo, shade);
          // Simple box model first; the downloaded model replaces it as soon as it has loaded.
          const fallback = build(spec.kind);
          model.add(...fallback);
          models
            .then((library) => {
              if (disposed) return;
              fallback.forEach((m) => model.remove(m));
              model.add(library[spec.kind].clone(true));
              redraw();
            })
            .catch(() => {});
          // Drawn larger than life: at map scale a true-size vehicle would be a speck.
          model.scale.setScalar(2.3);
          scene.add(model);

          const tex = trailTexture(tint);
          scene.add(
            new THREE.Mesh(
              ribbon(curve, 0.5, 0.06),
              new THREE.MeshBasicMaterial({
                map: tex,
                transparent: true,
                depthWrite: false,
                side: THREE.DoubleSide,
              }),
            ),
          );
          return { spec, curve, model, halo, tex, t: spec.start };
        });

        const place = (v: (typeof fleet)[number]) => {
          const p = v.curve.getPointAt(v.t);
          const tan = v.curve.getTangentAt(v.t);
          v.model.position.set(p.x, 0, p.z);
          v.model.rotation.y = Math.atan2(-tan.z, tan.x);
          // Slide the gradient so it ends at the vehicle: a trail behind it.
          v.tex.offset.x = -(v.t - TRAIL) / TRAIL;
        };

        const labelled = fleet.filter((v) => v.spec.card);
        const projected = new THREE.Vector3();
        let width = 1;
        let height = 1;

        const frame = (elapsed: number) => {
          const pulse = 1 + Math.sin(elapsed * 2.2) * 0.12;
          fleet.forEach((v) => v.halo.scale.setScalar(pulse));
          fence.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.02);
          renderer.render(scene, camera);
          labelled.forEach((v, i) => {
            const el = labelRefs.current[i];
            if (!el) return;
            projected.copy(v.model.position);
            projected.y += 3;
            projected.project(camera);
            // Keep the whole card inside the frame, even when its vehicle is near an edge.
            const halfW = el.offsetWidth / 2 + 8;
            const x = Math.min(width - halfW, Math.max(halfW, (projected.x * 0.5 + 0.5) * width));
            const y = Math.max(el.offsetHeight + 16, (-projected.y * 0.5 + 0.5) * height);
            el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
            el.style.opacity = String(Math.max(0, Math.min(1, Math.min(v.t, 1 - v.t) / 0.06)));
          });
        };

        const resize = () => {
          width = host.clientWidth || 1;
          height = host.clientHeight || 1;
          renderer.setSize(width, height, false);
          // Fixed world height in view: the map keeps its scale and only crops with the box.
          const view = width / height < 1 ? 44 : 38;
          camera.top = view / 2;
          camera.bottom = -view / 2;
          camera.right = (view * (width / height)) / 2;
          camera.left = -camera.right;
          camera.updateProjectionMatrix();
          frame(0);
        };

        fleet.forEach(place);
        redraw = () => frame(0);
        renderer.shadowMap.needsUpdate = true;
        const sizes = new ResizeObserver(resize);
        sizes.observe(host);
        resize();
        setState("ready");

        let raf = 0;
        let visible = true;
        let last = performance.now();
        const start = last;
        const tick = (now: number) => {
          raf = 0;
          if (!visible || document.hidden) return;
          const dt = Math.min(0.05, (now - last) / 1000);
          last = now;
          fleet.forEach((v) => {
            v.t += v.spec.speed * dt;
            if (v.t >= 1) v.t -= 1;
            place(v);
          });
          frame((now - start) / 1000);
          raf = requestAnimationFrame(tick);
        };
        const run = () => {
          if (reduced || raf) return;
          last = performance.now();
          raf = requestAnimationFrame(tick);
        };
        const seen = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible) run();
        });
        seen.observe(host);
        const onVisibility = () => run();
        document.addEventListener("visibilitychange", onVisibility);
        run();

        cleanup = () => {
          cancelAnimationFrame(raf);
          sizes.disconnect();
          seen.disconnect();
          document.removeEventListener("visibilitychange", onVisibility);
          scene.traverse((o) => {
            const mesh = o as InstanceType<typeof THREE.Mesh>;
            mesh.geometry?.dispose();
            const m = mesh.material;
            (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => x.dispose());
          });
          fleet.forEach((v) => v.tex.dispose());
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {
        if (!disposed) setState("failed");
      });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  const cards = VEHICLES.filter((v) => v.card);

  return (
    <div className={cn("relative", className)}>
      {state === "failed" ? (
        <div className="grid size-full place-items-center p-6">
          <Visual name="live-map" className="w-full max-w-3xl" />
        </div>
      ) : (
        <div
          ref={hostRef}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 [&>canvas]:block [&>canvas]:size-full",
            state === "ready" ? "opacity-100" : "opacity-0",
          )}
        />
      )}
      {state === "ready"
        ? cards.map((v, i) => {
            const card = v.card;
            if (!card) return null;
            const tint = ROUTE_COLOURS[v.route];
            return (
              <div
                key={card.vehicle}
                ref={(el) => {
                  labelRefs.current[i] = el;
                }}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 hidden w-[14.75rem] rounded-2xl border border-border bg-card/95 p-2.5 shadow-float backdrop-blur-md will-change-transform sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative shrink-0">
                    {portraits.includes(card.avatar) ? (
                      // eslint-disable-next-line @next/next/no-img-element -- 40px decorative portrait inside an aria-hidden card
                      <img
                        src={`/images/site/${card.avatar}.jpg`}
                        alt=""
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        className="grid size-9 place-items-center rounded-full font-display text-[0.8rem] font-semibold text-white"
                        style={{ background: tint }}
                      >
                        {card.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    )}
                    <i className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-card bg-moving" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.84rem] font-semibold leading-tight">{card.name}</span>
                    <span className="block truncate text-[0.7rem] leading-tight text-muted-foreground">
                      {card.role}
                    </span>
                  </span>
                  <span
                    className="shrink-0 rounded-full px-2 py-1 font-mono text-[0.62rem] font-medium leading-none text-white"
                    style={{ background: tint }}
                  >
                    {card.stat}
                  </span>
                </div>
                <p className="mt-2.5 truncate font-mono text-[0.68rem] leading-none text-muted-foreground">
                  {card.vehicle}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[0.68rem] font-medium leading-none">
                  <span className="shrink-0">{card.from}</span>
                  <span className="relative h-1 flex-1 rounded-full bg-foreground/10">
                    <span
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ width: `${card.progress}%`, background: tint }}
                    />
                    <span
                      className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card"
                      style={{ left: `${card.progress}%`, background: tint }}
                    />
                  </span>
                  <span className="shrink-0">{card.to}</span>
                </div>
                <p className="mt-2 text-[0.68rem] leading-none text-muted-foreground">{card.note}</p>
                {/* The tail points the card at its vehicle. */}
                <span className="absolute left-1/2 top-full size-3 -translate-x-1/2 -translate-y-1.5 rotate-45 border-b border-r border-border bg-card/95" />
              </div>
            );
          })
        : null}
    </div>
  );
}