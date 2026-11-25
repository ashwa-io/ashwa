"use client";

import { useEffect, useRef, useState } from "react";

import { Visual } from "@/components/visuals";
import { cn } from "@/lib/utils";

/**
 * The homepage map: a dense city seen from above, with vehicles tracing their
 * routes. Fixed orthographic camera, so it reads as a map and not a toy model.
 * Plain three.js, loaded on the client only: the hero copy is server-rendered.
 */

type Kind = "truck" | "bus" | "car";

interface VehicleSpec {
  route: number;
  kind: Kind;
  start: number;
  /** Fraction of the route covered per second. */
  speed: number;
  label?: [string, string];
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
  { route: 0, kind: "truck", start: 0.3, speed: 0.022, label: ["CG 04 MX 2217", "46 km/h"] },
  { route: 0, kind: "truck", start: 0.72, speed: 0.02 },
  { route: 1, kind: "bus", start: 0.44, speed: 0.024, label: ["Bus 3, Route North", "Stop 5 of 9"] },
  { route: 1, kind: "car", start: 0.1, speed: 0.03 },
  { route: 2, kind: "car", start: 0.36, speed: 0.032, label: ["Rental, Ertiga", "On trip"] },
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

export function FleetScene({ className }: { className?: string }) {
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

        const SIZE: Record<Kind, [number, number, number]> = {
          truck: [1.05, 0.34, 0.42],
          bus: [1.2, 0.36, 0.44],
          car: [0.7, 0.22, 0.36],
        };

        const fleet = VEHICLES.map((spec) => {
          const curve = curves[spec.route];
          const tint = ROUTE_COLOURS[spec.route];
          const [len, tall, wide] = SIZE[spec.kind];
          const model = new THREE.Group();
          // Facing +X: a dark body, a pale roof, and a soft halo on the road beneath.
          const body = new THREE.Mesh(new THREE.BoxGeometry(len, tall, wide), lit("#17130e"));
          body.position.y = tall / 2 + 0.06;
          const roof = new THREE.Mesh(
            new THREE.BoxGeometry(len * 0.62, 0.05, wide * 0.72),
            lit(spec.kind === "bus" ? "#e8a317" : "#fdfbf6"),
          );
          roof.position.set(-len * 0.1, tall + 0.085, 0);
          const halo = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.74, 48), flat(tint, 0.9));
          halo.rotation.x = -Math.PI / 2;
          halo.position.y = 0.08;
          const glow = new THREE.Mesh(new THREE.CircleGeometry(0.62, 48), flat(tint, 0.16));
          glow.rotation.x = -Math.PI / 2;
          glow.position.y = 0.075;
          model.add(glow, halo, body, roof);
          // Drawn larger than life: at map scale a true-size vehicle would be a speck.
          model.scale.setScalar(1.7);
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

        const labelled = fleet.filter((v) => v.spec.label);
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
            projected.y += 2.2;
            projected.project(camera);
            const x = (projected.x * 0.5 + 0.5) * width;
            const y = (-projected.y * 0.5 + 0.5) * height;
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

  const labels = VEHICLES.filter((v) => v.label);

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
        ? labels.map((v, i) => (
            <div
              key={v.label?.[0]}
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 hidden whitespace-nowrap rounded-lg border border-border bg-card/95 px-2.5 py-1.5 shadow-lift backdrop-blur will-change-transform sm:block"
            >
              <span className="flex items-center gap-1.5 text-[0.72rem] font-medium leading-none">
                <i className="size-1.5 rounded-full" style={{ background: ROUTE_COLOURS[v.route] }} />
                {v.label?.[0]}
              </span>
              <span className="mt-1 block font-mono text-[0.64rem] leading-none text-muted-foreground">
                {v.label?.[1]}
              </span>
            </div>
          ))
        : null}
    </div>
  );
}
