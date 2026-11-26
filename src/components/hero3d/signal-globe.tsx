"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * How a position reaches a screen, drawn on a dotted globe: satellites fix the
 * vehicle, the device sends it, the platform receives it, the card updates.
 * Plain three.js, loaded only when the section scrolls near the viewport.
 * `fallback` (the designed still picture) shows for reduced motion or no WebGL.
 */

/** Sample vehicles, not real ones. [lat, lon] in degrees. */
const CITIES = [
  { name: "Raipur", at: [21.25, 81.63], plate: "CG 04 MX 2217", speed: 46 },
  { name: "Delhi", at: [28.61, 77.21], plate: "DL 01 LA 4410", speed: 38 },
  { name: "Mumbai", at: [19.08, 72.88], plate: "MH 04 KT 7781", speed: 52 },
  { name: "Bengaluru", at: [12.97, 77.59], plate: "KA 05 MN 3306", speed: 31 },
  { name: "Kolkata", at: [22.57, 88.36], plate: "WB 02 AP 9154", speed: 44 },
  { name: "Chennai", at: [13.08, 80.27], plate: "TN 09 CX 2048", speed: 57 },
] as const;

/** Where each stage starts within one cycle (0 to 1). */
const STAGE_AT = [0, 0.4, 0.52, 0.9];
const CYCLE = 3.2;
const FOCUS = [21, 79.5]; // centre of the view: central India

export function SignalGlobe({ fallback, className }: { fallback: ReactNode; className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const cityLabel = useRef<HTMLSpanElement>(null);
  const [failed, setFailed] = useState(false);
  const [city, setCity] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFailed(true);
      return;
    }
    let disposed = false;
    let cleanup = () => {};

    const start = () =>
      Promise.all([import("three"), loadLand()])
        .then(([THREE, land]) => {
          if (disposed) return;
          const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          el.insertBefore(renderer.domElement, el.firstChild);
          renderer.domElement.className = "absolute inset-0 size-full";

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
          const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
          const onGlobe = ([lat, lon]: readonly [number, number] | number[], r = 1) => {
            const phi = ((90 - lat) * Math.PI) / 180;
            const theta = ((lon + 180) * Math.PI) / 180;
            return V(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
          };

          // tilt (latitude) > spin (longitude) > everything fixed to the earth
          const tilt = new THREE.Group();
          const spin = new THREE.Group();
          tilt.rotation.x = (FOCUS[0] * Math.PI) / 180;
          const f = onGlobe(FOCUS);
          const facing = -Math.atan2(f.x, f.z);
          tilt.add(spin);
          scene.add(tilt);

          // Everything is flat ink on paper: solid dots, hairlines, one red.
          const INK = "#17130e";
          const RED = "#e73b24";
          const glow = (colour: string, size: number) => {
            const m = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), new THREE.MeshBasicMaterial({ color: colour, transparent: true }));
            m.scale.setScalar(size);
            return m;
          };
          // The core is the page colour: invisible, it only hides the far side of the globe.
          const paper = getComputedStyle(el.closest("section") ?? document.body).backgroundColor;
          spin.add(new THREE.Mesh(new THREE.SphereGeometry(0.992, 64, 48), new THREE.MeshBasicMaterial({ color: paper })));

          // Soft red halo for the vehicle points.
          const haloCanvas = document.createElement("canvas");
          haloCanvas.width = haloCanvas.height = 64;
          const hc = haloCanvas.getContext("2d")!;
          const grad = hc.createRadialGradient(32, 32, 0, 32, 32, 32);
          grad.addColorStop(0, "rgba(231,59,36,0.55)");
          grad.addColorStop(1, "rgba(231,59,36,0)");
          hc.fillStyle = grad;
          hc.fillRect(0, 0, 64, 64);
          const haloTex = new THREE.CanvasTexture(haloCanvas);
          const halo = (size: number) => {
            const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false }));
            sp.scale.setScalar(size);
            return sp;
          };

          // Land as evenly spread dots (Fibonacci sphere), kept where the mask says land.
          const N = 34000;
          const pts: number[] = [];
          for (let i = 0; i < N; i++) {
            const y = 1 - (2 * (i + 0.5)) / N;
            const lon = ((i * 137.50776405) % 360) - 180;
            const lat = (Math.asin(y) * 180) / Math.PI;
            if (land(lat, lon)) pts.push(...onGlobe([lat, lon]).toArray());
          }
          const dots = new THREE.BufferGeometry();
          dots.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
          spin.add(new THREE.Points(dots, new THREE.PointsMaterial({ color: INK, size: 0.0105, transparent: true, opacity: 0.5 })));

          // Vehicles
          const cityPos = CITIES.map((c) => onGlobe(c.at, 1.004));
          cityPos.forEach((p) => {
            const dot = new THREE.Mesh(new THREE.SphereGeometry(0.011, 12, 12), new THREE.MeshBasicMaterial({ color: RED }));
            const h = halo(0.1);
            dot.position.copy(p);
            h.position.copy(p).multiplyScalar(1.01);
            spin.add(dot, h);
          });
          const beacon = halo(0.24);
          spin.add(beacon);
          const ring = new THREE.Mesh(
            new THREE.RingGeometry(0.9, 1, 48),
            new THREE.MeshBasicMaterial({ color: RED, transparent: true, side: THREE.DoubleSide, depthWrite: false }),
          );
          spin.add(ring);

          // Satellites on three tilted orbits (not tied to the earth's spin).
          const ORBIT = 1.3;
          const sats = [
            { tiltX: 0.5, tiltZ: 0.3, phase: 0.4, speed: 0.16 },
            { tiltX: -0.35, tiltZ: -0.5, phase: 2.6, speed: 0.13 },
            { tiltX: 1.25, tiltZ: 0.1, phase: 4.6, speed: 0.11 },
          ].map((o) => {
            const plane = new THREE.Group();
            plane.rotation.set(o.tiltX, 0, o.tiltZ);
            const loop = new THREE.LineLoop(
              new THREE.BufferGeometry().setFromPoints(
                Array.from({ length: 128 }, (_, i) => V(Math.cos((i / 128) * Math.PI * 2) * ORBIT, 0, Math.sin((i / 128) * Math.PI * 2) * ORBIT)),
              ),
              new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.14 }),
            );
            const body = glow(INK, 0.03);
            plane.add(loop, body);
            scene.add(plane);
            const beam = line(2, INK);
            const pulse = glow(INK, 0.016);
            scene.add(beam.obj, pulse);
            return { ...o, body, beam, pulse, world: V() };
          });

          // The cloud: a fixed node up and to the right, with an arc from every vehicle.
          const cloud = V(1.05, 0.72, 0.5);
          const cloudGlow = glow(RED, 0.03);
          cloudGlow.position.copy(cloud);
          scene.add(cloudGlow);
          const SEG = 28;
          const arcs = CITIES.map(() => {
            const a = line(SEG + 1, RED);
            scene.add(a.obj);
            return a;
          });
          const arcPulse = glow(RED, 0.026);
          scene.add(arcPulse);

          function line(count: number, colour: string) {
            const geo = new THREE.BufferGeometry();
            geo.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(count * 3), 3));
            const mat = new THREE.LineBasicMaterial({ color: colour, transparent: true, opacity: 0.2, depthWrite: false });
            const obj = new THREE.Line(geo, mat);
            obj.frustumCulled = false;
            return { obj, mat, pos: geo.getAttribute("position") };
          }

          const resize = () => {
            const { clientWidth: w, clientHeight: h } = el;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          };
          const place = (label: HTMLElement | null, p: InstanceType<typeof THREE.Vector3>, dx = 0, dy = 0) => {
            if (!label) return;
            const s = p.clone().project(camera);
            const x = Math.min(((s.x + 1) / 2) * el.clientWidth + dx, el.clientWidth - label.offsetWidth - 4);
            const y = Math.max(((1 - s.y) / 2) * el.clientHeight + dy, 4);
            label.style.transform = `translate(${x}px, ${y}px)`;
          };

          const world = cityPos.map(() => V());
          const mid = V();
          const ctrl = V();
          const tmp = V();
          const bez = (a: typeof tmp, b: typeof tmp, c: typeof tmp, t: number, out: typeof tmp) =>
            out.set(0, 0, 0).addScaledVector(a, (1 - t) * (1 - t)).addScaledVector(b, 2 * t * (1 - t)).addScaledVector(c, t * t);

          let raf = 0;
          let visible = false;
          let t0 = 0;
          let last = { city: -1, stage: -1 };

          const tick = (now: number) => {
            if (disposed || !visible) return;
            if (!t0) t0 = now;
            const t = (now - t0) / 1000;
            const active = Math.floor(t / CYCLE) % CITIES.length;
            const p = (t / CYCLE) % 1;
            const st = STAGE_AT.findLastIndex((s) => p >= s);
            if (active !== last.city || st !== last.stage) {
              last = { city: active, stage: st };
              setCity(active);
              setStage(st);
            }

            // Zoom in on arrival, then a slow sway that keeps India in view.
            const zoom = 1 - Math.pow(1 - Math.min(t / 2.2, 1), 3);
            const wide = camera.aspect > 1.25;
            camera.position.set(wide ? 0.4 : 0, wide ? 0 : 0.35, (wide ? 4.2 : 6.2) + (1 - zoom) * 3.2);
            camera.lookAt(wide ? 0.4 : 0, wide ? 0 : 0.35, 0);
            spin.rotation.y = facing + (1 - zoom) * -1.6 + Math.sin(t * 0.2) * 0.32;
            scene.updateMatrixWorld();

            cityPos.forEach((c, i) => world[i].copy(c).applyMatrix4(spin.matrixWorld));
            const here = world[active];

            // Vehicle beacon: steady glow, plus a ring that bursts when the device sends.
            beacon.position.copy(cityPos[active]).multiplyScalar(1.012);
            beacon.scale.setScalar(0.24 + Math.sin(t * 3) * 0.04);
            const burst = Math.min(Math.max((p - STAGE_AT[1]) / 0.3, 0), 1);
            ring.position.copy(cityPos[active]);
            ring.lookAt(tmp.copy(cityPos[active]).multiplyScalar(2).applyMatrix4(spin.matrixWorld));
            ring.scale.setScalar(0.02 + burst * 0.14);
            ring.material.opacity = burst > 0 && burst < 1 ? (1 - burst) * 0.9 : 0;

            // Satellites fix the position: a pulse runs down each beam.
            const down = Math.min(p / STAGE_AT[1], 1);
            sats.forEach((s, i) => {
              const a = s.phase + t * s.speed;
              s.body.position.set(Math.cos(a) * ORBIT, 0, Math.sin(a) * ORBIT);
              s.body.getWorldPosition(s.world);
              s.beam.pos.setXYZ(0, s.world.x, s.world.y, s.world.z);
              s.beam.pos.setXYZ(1, here.x, here.y, here.z);
              s.beam.pos.needsUpdate = true;
              s.beam.mat.opacity = down < 1 ? 0.32 : 0.1;
              const d = Math.min(Math.max(down * 1.3 - i * 0.15, 0), 1);
              s.pulse.position.lerpVectors(s.world, here, d);
              s.pulse.material.opacity = d > 0 && d < 1 ? 1 : 0;
            });

            // The device sends it on: a pulse runs up the active arc to the cloud.
            const up = Math.min(Math.max((p - STAGE_AT[2]) / (STAGE_AT[3] - STAGE_AT[2]), 0), 1);
            arcs.forEach((arc, i) => {
              mid.addVectors(world[i], cloud).multiplyScalar(0.5);
              ctrl.copy(mid).setLength(mid.length() + 0.55);
              for (let k = 0; k <= SEG; k++) {
                bez(world[i], ctrl, cloud, k / SEG, tmp);
                arc.pos.setXYZ(k, tmp.x, tmp.y, tmp.z);
              }
              arc.pos.needsUpdate = true;
              arc.mat.opacity = i === active ? 0.9 : 0.12;
              if (i === active) {
                bez(world[i], ctrl, cloud, up, arcPulse.position);
                arcPulse.material.opacity = up > 0 && up < 1 ? 1 : 0;
              }
            });
            cloudGlow.scale.setScalar(0.03 + (p >= STAGE_AT[3] ? Math.sin(((p - STAGE_AT[3]) / (1 - STAGE_AT[3])) * Math.PI) * 0.02 : 0));

            place(card.current, cloud, 10, -16);
            place(cityLabel.current, here, 12, 6);
            renderer.render(scene, camera);
            raf = requestAnimationFrame(tick);
          };

          const sizes = new ResizeObserver(resize);
          sizes.observe(el);
          resize();
          const seen = new IntersectionObserver(([entry]) => {
            const was = visible;
            visible = entry.isIntersecting;
            if (visible && !was) raf = requestAnimationFrame(tick);
          });
          seen.observe(el);

          cleanup = () => {
            cancelAnimationFrame(raf);
            sizes.disconnect();
            seen.disconnect();
            scene.traverse((o) => {
              const mesh = o as InstanceType<typeof THREE.Mesh>;
              mesh.geometry?.dispose();
              const m = mesh.material;
              (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => x.dispose());
            });
            haloTex.dispose();
            renderer.dispose();
            renderer.domElement.remove();
          };
        })
        .catch(() => setFailed(true));

    // Load three.js only when the section is about to be seen.
    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        near.disconnect();
        start();
      },
      { rootMargin: "600px" },
    );
    near.observe(el);

    return () => {
      disposed = true;
      near.disconnect();
      cleanup();
    };
  }, []);

  if (failed) return <>{fallback}</>;

  const c = CITIES[city];
  return (
    <div
      ref={host}
      role="img"
      aria-label="Animated globe: satellites fix a vehicle's position over India, the device sends it to the Ashwa cloud, and it appears on your screen."
      className={cn("relative aspect-[4/5] sm:aspect-[16/11]", className)}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span ref={cityLabel} className="absolute left-0 top-0 whitespace-nowrap text-sm font-medium">
          {c.name}
        </span>

        {/* What arrives on the screen: same card language as the hero map. */}
        <div
          ref={card}
          className="absolute left-0 top-0 w-44 rounded-2xl bg-background p-3.5 text-foreground shadow-float"
        >
          <p className="flex items-center justify-between text-xs text-muted-foreground">
            Live position
            <span className={cn("size-2 rounded-full transition-colors duration-300", stage === 3 ? "bg-[#1f9d6b]" : "bg-foreground/15")} />
          </p>
          <p key={city} className={cn("mt-1.5 font-display text-lg font-semibold tracking-tight", stage === 3 && "animate-[signal-in_0.45s_ease-out]")}>
            {c.plate}
          </p>
          <p className="mt-2 flex items-baseline justify-between border-t border-border pt-2 text-xs text-muted-foreground">
            {c.at[0].toFixed(2)}° N, {c.at[1].toFixed(2)}° E
            <span className="font-medium text-foreground">{c.speed} km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
/** Loads the land mask (dark = land) and returns a lookup by latitude and longitude. */
function loadLand(): Promise<(lat: number, lon: number) => boolean> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.width;
      c.height = img.height;
      const ctx = c.getContext("2d", { willReadFrequently: true })!;
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, c.width, c.height);
      resolve((lat, lon) => {
        const x = Math.min(c.width - 1, Math.floor(((lon + 180) / 360) * c.width));
        const y = Math.min(c.height - 1, Math.floor(((90 - lat) / 180) * c.height));
        return data[(y * c.width + x) * 4] < 128;
      });
    };
    img.onerror = reject;
    img.src = "/images/site/earth-mask.png";
  });
}
