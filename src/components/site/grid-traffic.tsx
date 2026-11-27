"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const CELL = 64; // must match .grid-lines background-size
const MAX_SPEED = 1.1; // grid cells a second (about 70px), whatever the section speed
const KINDS =["car", "truck", "suv", "pickup", "jeep", "sports"] as const;
// Body fills of each drawing and how much darker than the chosen colour each is painted.
// Same table as ashwa_web's vehicleMarker.ts; glass, tyres and lights keep their own colour.
const TINT: Record<(typeof KINDS)[number], Record<string, number>> = {
  car: { "#549edb": 0, "#4495cc": 0.08 },
  truck: { "#08af2f": 0, "#00891a": 0.22 },
  suv: { "#c4c6cc": 0, "#bfc0c4": 0.03, "#a1a1a1": 0.18 },
  pickup: { "#ff4842": 0, "#f74141": 0.04, "#b52c26": 0.3, "#a22521": 0.37 },
  jeep: { "#4a4a4a": 0, "#454545": 0.06, "#383838": 0.24 },
  sports: { "#e2273c": 0, "#d82540": 0.05 },
};
const COLORS = ["#e73b24", "#2f6fde", "#f2a51a", "#1f9d55", "#f4efe4", "#3a3a3a", "#159a9c", "#7a4fd6"];
const darken = (hex: string, amount: number) =>
  "#" + [1, 3, 5].map((s) => Math.round(parseInt(hex.slice(s, s + 2), 16) * (1 - amount)).toString(16).padStart(2, "0")).join("");
const DIRS = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
]; // N E S W. The drawings point north.

/** Vehicles driving along the lines of a `.grid-lines` parent. The parent must be `relative`. */
/** `speed` scales the whole section; each vehicle also gets its own pace and colour. */
export function GridTraffic({ count = 4, speed = 1, className = "inset-0" }: { count?: number; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rand = (n: number) => Math.floor(Math.random() * n);
    const size = () => [Math.ceil(el.clientWidth / CELL), Math.ceil(el.clientHeight / CELL)];
    // i, j: grid node last passed. q: quarter turns clockwise from north. p: progress to the next node.
    const cars = Array.from(el.children, (node) => {
      const [cols, rows] = size();
      const q = rand(4);
      return { node: node as HTMLElement, i: rand(cols + 1), j: rand(rows + 1), q, p: Math.random(), angle: q * 90, speed: Math.min(MAX_SPEED, speed * (0.45 + Math.random() * 1.1)) };
    });

    // Repaint each drawing in a random colour.
    let alive = true;
    cars.forEach(async ({ node }, k) => {
      const img = node as HTMLImageElement;
      const color = COLORS[rand(COLORS.length)];
      let svg = await fetch(img.src).then((r) => r.text()).catch(() => "");
      if (!alive || !svg) return;
      for (const [fill, amount] of Object.entries(TINT[KINDS[k % KINDS.length]]))
        svg = svg.replace(new RegExp(`fill="${fill}"`, "gi"), `fill="${darken(color, amount)}"`);
      img.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    });

    let raf = 0;
    let last = 0;
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const [cols, rows] = size();
      for (const c of cars) {
        let [dx, dy] = DIRS[((c.q % 4) + 4) % 4];
        c.p += c.speed * dt;
        if (c.p >= 1) {
          c.p -= 1;
          c.i += dx;
          c.j += dy;
          if (c.i < -1 || c.i > cols + 1 || c.j < -1 || c.j > rows + 1) {
            // Drove off: come back in from a random edge, heading inward.
            c.q = rand(4);
            [dx, dy] = DIRS[c.q];
            c.i = dx ? (dx > 0 ? -1 : cols + 1) : rand(cols + 1);
            c.j = dy ? (dy > 0 ? -1 : rows + 1) : rand(rows + 1);
            c.angle = c.q * 90;
          } else {
            const r = Math.random();
            c.q += r < 0.2 ? -1 : r < 0.4 ? 1 : 0;
            [dx, dy] = DIRS[((c.q % 4) + 4) % 4];
          }
        }
        c.angle += (c.q * 90 - c.angle) * Math.min(1, dt * 8);
        c.node.style.opacity = "1";
        c.node.style.transform = `translate(${(c.i + dx * c.p) * CELL}px,${(c.j + dy * c.p) * CELL}px) translate(-50%,-50%) rotate(${c.angle}deg)`;
      }
      raf = requestAnimationFrame(frame);
    };

    // Only animate while on screen.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(el);
    return () => {
      alive = false;
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} aria-hidden="true" className={cn("pointer-events-none absolute overflow-hidden", className)}>
      {Array.from({ length: count }, (_, k) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={k}
          src={`/images/vehicles/${KINDS[k % KINDS.length]}.svg`}
          alt=""
          className="absolute left-0 top-0 h-8 w-auto opacity-0 will-change-transform"
        />
      ))}
    </div>
  );
}
