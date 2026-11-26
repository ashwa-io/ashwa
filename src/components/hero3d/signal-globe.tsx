"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * A dotted globe with glowing vehicle points over India. Each time a point
 * "pings", circular waves spread from it. Nothing else: no box, no lines.
 * Plain three.js, loaded only when the section scrolls near the viewport.
 * `fallback` (the designed still picture) shows for reduced motion or no WebGL.
 */

/** Sample places. [lat, lon] in degrees. */
const CITIES: [string, number, number][] = [
  ["Raipur", 21.25, 81.63],
  ["Delhi", 28.61, 77.21],
  ["Mumbai", 19.08, 72.88],
  ["Bengaluru", 12.97, 77.59],
  ["Kolkata", 22.57, 88.36],
  ["Chennai", 13.08, 80.27],
  ["Hyderabad", 17.39, 78.49],
  ["Ahmedabad", 23.02, 72.57],
  ["Nagpur", 21.15, 79.09],
  ["Lucknow", 26.85, 80.95],
  ["Jaipur", 26.91, 75.79],
  ["Bhubaneswar", 20.3, 85.82],
];

const FOCUS = [21, 79.5]; // centre of the view: central India
const PING = 1.1; // seconds between pings
const WAVE = 2.2; // seconds a wave takes to fade out
const WAVES = 3; // rings per ping

export function SignalGlobe({ fallback, className }: { fallback: ReactNode; className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const [failed, setFailed] = useState(false);
  const [city, setCity] = useState(0);

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
          const onGlobe = (lat: number, lon: number, r = 1) => {
            const phi = ((90 - lat) * Math.PI) / 180;
            const theta = ((lon + 180) * Math.PI) / 180;
            return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
          };

          // tilt (latitude) > spin (longitude) > everything fixed to the earth
          const tilt = new THREE.Group();
          const spin = new THREE.Group();
          tilt.rotation.x = (FOCUS[0] * Math.PI) / 180;
          const f = onGlobe(FOCUS[0], FOCUS[1]);
          const facing = -Math.atan2(f.x, f.z);
          tilt.add(spin);
          scene.add(tilt);

          // The core is the page colour: invisible, it only hides the far side of the globe.
          const paper = getComputedStyle(el.closest("section") ?? document.body).backgroundColor;
          spin.add(new THREE.Mesh(new THREE.SphereGeometry(0.992, 64, 48), new THREE.MeshBasicMaterial({ color: paper })));

          // Land as evenly spread dots (Fibonacci sphere), kept where the mask says land.
          const N = 34000;
          const pts: number[] = [];
          for (let i = 0; i < N; i++) {
            const y = 1 - (2 * (i + 0.5)) / N;
            const lon = ((i * 137.50776405) % 360) - 180;
            const lat = (Math.asin(y) * 180) / Math.PI;
            if (land(lat, lon)) pts.push(...onGlobe(lat, lon).toArray());
          }
          const dots = new THREE.BufferGeometry();
          dots.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
          spin.add(new THREE.Points(dots, new THREE.PointsMaterial({ color: "#17130e", size: 0.0105, transparent: true, opacity: 0.5 })));

          // Soft red halo for the vehicle points.
          const haloCanvas = document.createElement("canvas");
          haloCanvas.width = haloCanvas.height = 64;
          const hc = haloCanvas.getContext("2d")!;
          const grad = hc.createRadialGradient(32, 32, 0, 32, 32, 32);
          grad.addColorStop(0, "rgba(231,59,36,0.6)");
          grad.addColorStop(1, "rgba(231,59,36,0)");
          hc.fillStyle = grad;
          hc.fillRect(0, 0, 64, 64);
          const haloTex = new THREE.CanvasTexture(haloCanvas);

          const RED = "#e73b24";
          const ringGeo = new THREE.RingGeometry(0.93, 1, 64);
          const outward = new THREE.Vector3(0, 0, 1);
          const points = CITIES.map(([, lat, lon]) => {
            const at = onGlobe(lat, lon, 1.004);
            const dot = new THREE.Mesh(new THREE.SphereGeometry(0.011, 12, 12), new THREE.MeshBasicMaterial({ color: RED }));
            dot.position.copy(at);
            const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false }));
            halo.position.copy(at).multiplyScalar(1.01);
            // Rings lie flat on the surface, facing straight out.
            const rings = Array.from({ length: WAVES }, () => {
              const ring = new THREE.Mesh(
                ringGeo,
                new THREE.MeshBasicMaterial({ color: RED, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
              );
              ring.position.copy(at);
              ring.quaternion.setFromUnitVectors(outward, at.clone().normalize());
              return ring;
            });
            spin.add(dot, halo, ...rings);
            return { at, halo, rings, pinged: -Infinity };
          });

          const resize = () => {
            const { clientWidth: w, clientHeight: h } = el;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          };

          const tmp = new THREE.Vector3();
          let raf = 0;
          let visible = false;
          let t0 = 0;
          let count = -1;
          let latest = 0;

          const tick = (now: number) => {
            if (disposed || !visible) return;
            if (!t0) t0 = now;
            const t = (now - t0) / 1000;

            // One point pings at a time, in a shuffled-looking order (5 is coprime with 12).
            const n = Math.floor(t / PING);
            if (n !== count) {
              count = n;
              latest = (n * 5) % points.length;
              points[latest].pinged = t;
              setCity(latest);
            }

            // Zoom in on arrival, then a slow sway that keeps India in view.
            const zoom = 1 - Math.pow(1 - Math.min(t / 2.2, 1), 3);
            const wide = camera.aspect > 1.25;
            camera.position.set(0, 0, (wide ? 3.5 : 3.7) + (1 - zoom) * 3.2);
            spin.rotation.y = facing + (1 - zoom) * -1.6 + Math.sin(t * 0.2) * 0.32;

            points.forEach((p) => {
              const age = t - p.pinged;
              const fresh = Math.max(1 - age / WAVE, 0);
              p.halo.scale.setScalar(0.09 + fresh * 0.16);
              p.rings.forEach((ring, i) => {
                // Each ring starts a beat after the one before it.
                const k = (age - i * 0.35) / WAVE;
                const on = k > 0 && k < 1;
                ring.scale.setScalar(on ? 0.02 + k * 0.2 : 0.001);
                ring.material.opacity = on ? (1 - k) * 0.8 : 0;
              });
            });

            scene.updateMatrixWorld();
            if (label.current) {
              const s = tmp.copy(points[latest].at).applyMatrix4(spin.matrixWorld).project(camera);
              label.current.style.transform = `translate(${((s.x + 1) / 2) * el.clientWidth + 14}px, ${((1 - s.y) / 2) * el.clientHeight + 8}px)`;
            }
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

  return (
    <div
      ref={host}
      role="img"
      aria-label="Animated globe: vehicle positions across India light up as each one reports in."
      className={cn("relative aspect-square sm:aspect-[16/11]", className)}
    >
      <span
        ref={label}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 whitespace-nowrap text-sm font-medium"
      >
        {CITIES[city][0]}
      </span>
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
