"use client";

import { useEffect, useRef, useState } from "react";

import { Visual } from "@/components/visuals";
import { cn } from "@/lib/utils";

/**
 * The homepage diorama: a low-poly map tile with vehicles driving their routes
 * and leaving live trails. Plain three.js, loaded on the client only, so the
 * hero copy is server-rendered and three never reaches the server bundle.
 */

type Kind = "truck" | "bus" | "car";

interface VehicleSpec {
  route: number;
  kind: Kind;
  start: number;
  /** Fraction of the route covered per second. */
  speed: number;
  trail: string;
  label?: [string, string];
}

const ROUTES: [number, number][][] = [
  [[-19, 6.5], [-10, 3.2], [-3, -1], [4, -2.2], [10, -6], [19, -8.5]],
  [[-12.5, -13], [-8.5, -5], [-3, -1], [0.5, 4], [2.5, 13]],
  [[19, 5.5], [11.5, 3], [6, 4.2], [0.5, 4], [-6, 8], [-10.5, 13]],
];

const VEHICLES: VehicleSpec[] = [
  { route: 0, kind: "truck", start: 0.12, speed: 0.034, trail: "#e73b24", label: ["CG 04 MX 2217", "46 km/h"] },
  { route: 0, kind: "truck", start: 0.62, speed: 0.03, trail: "#e73b24" },
  { route: 1, kind: "bus", start: 0.3, speed: 0.04, trail: "#d98a00", label: ["Bus 3, Route North", "Stop 5 of 9"] },
  { route: 2, kind: "car", start: 0.05, speed: 0.052, trail: "#1f9d6b", label: ["Rental, Ertiga", "On trip"] },
  { route: 2, kind: "truck", start: 0.55, speed: 0.036, trail: "#1f9d6b" },
];

const TRAIL = 0.2;

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
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.25 : 1.75));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.shadowMap.enabled = !small;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.domElement.setAttribute("aria-hidden", "true");
        host.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(28, 1, 1, 200);
        const world = new THREE.Group();
        scene.add(world);

        scene.add(new THREE.HemisphereLight("#fff8ea", "#cfc3aa", 1.25));
        const sun = new THREE.DirectionalLight("#fff1d6", 2.1);
        sun.position.set(-14, 22, 10);
        sun.castShadow = !small;
        sun.shadow.mapSize.set(1536, 1536);
        sun.shadow.camera.left = -24;
        sun.shadow.camera.right = 24;
        sun.shadow.camera.top = 18;
        sun.shadow.camera.bottom = -18;
        sun.shadow.camera.far = 70;
        sun.shadow.bias = -0.0006;
        scene.add(sun);

        const mat = (color: string) => new THREE.MeshStandardMaterial({ color, roughness: 0.92 });
        const flat = (color: string, opacity = 1) =>
          new THREE.MeshBasicMaterial({
            color,
            transparent: opacity < 1,
            opacity,
            side: THREE.DoubleSide,
            depthWrite: opacity === 1,
          });

        // Ground tile with visible thickness, so it reads as a model on a table.
        const slab = new THREE.Mesh(new THREE.BoxGeometry(38, 1.2, 26), mat("#e9e1d1"));
        slab.position.y = -0.6;
        slab.receiveShadow = true;
        world.add(slab);

        const patch = (w: number, d: number, x: number, z: number, color: string) => {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, d), mat(color));
          m.position.set(x, 0.02, z);
          m.receiveShadow = true;
          world.add(m);
        };
        patch(7, 5, 13.5, 9, "#d5e0c1");
        patch(5, 4, -15, -9.5, "#d5e0c1");
        patch(9, 3.2, 12.5, -11, "#c9dde0");

        const curves = ROUTES.map(
          (pts) =>
            new THREE.CatmullRomCurve3(
              pts.map(([x, z]) => new THREE.Vector3(x, 0, z)),
              false,
              "catmullrom",
              0.5,
            ),
        );

        const ribbon = (curve: InstanceType<typeof THREE.CatmullRomCurve3>, width: number, y: number) => {
          const segments = 160;
          const pos: number[] = [];
          const uv: number[] = [];
          const idx: number[] = [];
          for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const p = curve.getPointAt(t);
            const tan = curve.getTangentAt(t);
            const nx = -tan.z;
            const nz = tan.x;
            const len = Math.hypot(nx, nz) || 1;
            const ox = (nx / len) * (width / 2);
            const oz = (nz / len) * (width / 2);
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

        const roadSamples: InstanceType<typeof THREE.Vector3>[] = [];
        curves.forEach((curve) => {
          const road = new THREE.Mesh(ribbon(curve, 1.5, 0.05), flat("#fffdf9"));
          world.add(road);
          const centre = new THREE.Mesh(ribbon(curve, 0.06, 0.06), flat("#d8cfbd"));
          world.add(centre);
          for (let i = 0; i <= 60; i++) roadSamples.push(curve.getPointAt(i / 60));
        });

        // City blocks: instanced boxes, taller toward the centre, clear of roads.
        const rand = seeded(7);
        const blocks: { x: number; z: number; w: number; d: number; h: number; c: string }[] = [];
        const tones = ["#fbf7ee", "#efe7d6", "#e2d8c3", "#d6cab2"];
        for (let gx = -17; gx <= 17; gx += 2.3) {
          for (let gz = -11; gz <= 11; gz += 2.3) {
            const x = gx + (rand() - 0.5) * 0.7;
            const z = gz + (rand() - 0.5) * 0.7;
            const keep = rand();
            const near = roadSamples.some((p) => Math.hypot(p.x - x, p.z - z) < 1.75);
            const inPatch =
              (x > 9.5 && z > 6) || (x < -12 && z < -7) || (x > 7.5 && z < -9);
            if (near || inPatch || keep < 0.22) continue;
            const centre = Math.max(0, 1 - Math.hypot(x - 5, z - 1) / 13);
            blocks.push({
              x,
              z,
              w: 1 + rand() * 0.9,
              d: 1 + rand() * 0.9,
              h: 0.5 + rand() * 0.9 + centre * centre * 4.2 * rand(),
              c: tones[Math.floor(rand() * tones.length)],
            });
          }
        }
        const city = new THREE.InstancedMesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshStandardMaterial({ roughness: 0.9 }),
          blocks.length,
        );
        const dummy = new THREE.Object3D();
        const colour = new THREE.Color();
        blocks.forEach((b, i) => {
          dummy.position.set(b.x, b.h / 2, b.z);
          dummy.scale.set(b.w, b.h, b.d);
          dummy.updateMatrix();
          city.setMatrixAt(i, dummy.matrix);
          city.setColorAt(i, colour.set(b.c));
        });
        city.castShadow = true;
        city.receiveShadow = true;
        world.add(city);

        // A geofence around the junction where two routes meet.
        const fence = new THREE.Group();
        fence.position.set(-3, 0.08, -1);
        const ring = new THREE.Mesh(new THREE.RingGeometry(2.9, 3.05, 64), flat("#e73b24"));
        const disc = new THREE.Mesh(new THREE.CircleGeometry(2.9, 64), flat("#e73b24", 0.09));
        ring.rotation.x = disc.rotation.x = -Math.PI / 2;
        fence.add(ring, disc);
        world.add(fence);

        const pin = (x: number, z: number) => {
          const g = new THREE.Group();
          const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.6), mat("#17130e"));
          stem.position.y = 0.8;
          const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 14), mat("#e73b24"));
          head.position.y = 1.75;
          g.add(stem, head);
          g.position.set(x, 0, z);
          world.add(g);
        };
        pin(17, -7.8);
        pin(2.2, 11);

        const box = (w: number, h: number, d: number, color: string, x: number, y: number) => {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
          m.position.set(x, y, 0);
          m.castShadow = true;
          return m;
        };
        // Models face +X. Wheels are one dark slab under the body.
        const build = (kind: Kind) => {
          const g = new THREE.Group();
          if (kind === "truck") {
            g.add(box(1.5, 0.78, 0.66, "#fffdf9", -0.3, 0.72));
            g.add(box(1.5, 0.12, 0.67, "#e73b24", -0.3, 0.44));
            g.add(box(0.55, 0.6, 0.62, "#17130e", 0.78, 0.6));
            g.add(box(1.9, 0.2, 0.56, "#2a251d", 0.05, 0.2));
          } else if (kind === "bus") {
            g.add(box(1.9, 0.62, 0.64, "#e8a317", 0, 0.62));
            g.add(box(1.7, 0.2, 0.65, "#17130e", 0, 0.74));
            g.add(box(1.7, 0.2, 0.54, "#2a251d", 0, 0.2));
          } else {
            g.add(box(1.05, 0.3, 0.52, "#17130e", 0, 0.36));
            g.add(box(0.55, 0.24, 0.46, "#3a342a", -0.05, 0.62));
            g.add(box(0.9, 0.16, 0.48, "#2a251d", 0, 0.16));
          }
          return g;
        };

        const trailTexture = (color: string) => {
          const c = document.createElement("canvas");
          c.width = 256;
          c.height = 4;
          const ctx = c.getContext("2d");
          if (ctx) {
            const grad = ctx.createLinearGradient(0, 0, 256, 0);
            grad.addColorStop(0, "rgba(255,255,255,0)");
            grad.addColorStop(0.96, color);
            grad.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 256, 4);
          }
          const tex = new THREE.CanvasTexture(c);
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.repeat.x = 1 / TRAIL;
          return tex;
        };

        const fleet = VEHICLES.map((spec) => {
          const curve = curves[spec.route];
          const model = build(spec.kind);
          world.add(model);
          const tex = trailTexture(spec.trail);
          const trail = new THREE.Mesh(
            ribbon(curve, 0.34, 0.09),
            new THREE.MeshBasicMaterial({
              map: tex,
              transparent: true,
              depthWrite: false,
              side: THREE.DoubleSide,
            }),
          );
          world.add(trail);
          return { spec, curve, model, tex, t: spec.start };
        });

        const place = (v: (typeof fleet)[number]) => {
          const p = v.curve.getPointAt(v.t);
          const tan = v.curve.getTangentAt(v.t);
          v.model.position.set(p.x, 0.05, p.z);
          v.model.rotation.y = Math.atan2(-tan.z, tan.x);
          // Slide the gradient so it ends at the vehicle: a trail behind it.
          v.tex.offset.x = -(v.t - TRAIL) / TRAIL;
          // Fade in and out at the tile edges instead of popping.
          const edge = Math.min(v.t, 1 - v.t) / 0.06;
          v.model.scale.setScalar(Math.max(0.001, Math.min(1, edge)));
        };

        const labelled = fleet.filter((v) => v.spec.label);
        const projected = new THREE.Vector3();
        let width = 1;
        let height = 1;
        const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

        const frame = (elapsed: number) => {
          pointer.x += (pointer.tx - pointer.x) * 0.04;
          pointer.y += (pointer.ty - pointer.y) * 0.04;
          const sway = reduced ? 0 : Math.sin(elapsed * 0.12) * 0.1;
          const yaw = -0.62 + sway + pointer.x * 0.12;
          const dist = width / height < 1 ? 74 : 52;
          const lift = 0.62 + pointer.y * 0.04;
          camera.position.set(
            Math.sin(yaw) * Math.cos(lift) * dist,
            Math.sin(lift) * dist,
            Math.cos(yaw) * Math.cos(lift) * dist,
          );
          camera.lookAt(0, 0.5, 0);
          fence.scale.setScalar(1 + Math.sin(elapsed * 1.6) * 0.035);
          renderer.render(scene, camera);
          labelled.forEach((v, i) => {
            const el = labelRefs.current[i];
            if (!el) return;
            projected.copy(v.model.position);
            projected.y += 1.9;
            projected.project(camera);
            const x = (projected.x * 0.5 + 0.5) * width;
            const y = (-projected.y * 0.5 + 0.5) * height;
            el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
            el.style.opacity = String(Math.max(0, Math.min(1, Math.min(v.t, 1 - v.t) / 0.08)));
          });
        };

        const resize = () => {
          width = host.clientWidth || 1;
          height = host.clientHeight || 1;
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          frame(0);
        };

        fleet.forEach(place);
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
        const onPointer = (e: PointerEvent) => {
          pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
          pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
        };
        document.addEventListener("visibilitychange", onVisibility);
        if (!small && !reduced) window.addEventListener("pointermove", onPointer, { passive: true });
        run();

        cleanup = () => {
          cancelAnimationFrame(raf);
          sizes.disconnect();
          seen.disconnect();
          document.removeEventListener("visibilitychange", onVisibility);
          window.removeEventListener("pointermove", onPointer);
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
                <i className="size-1.5 rounded-full" style={{ background: v.trail }} />
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
