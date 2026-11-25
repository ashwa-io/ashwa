import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Building blocks for the concept UI shown across the site.
 * Everything here is illustrative: it is drawn in code so it never goes stale
 * when the real app's screens change with modules.
 */

export type Tone = "moving" | "idle" | "stopped" | "alert";

const TONE_VAR: Record<Tone, string> = {
  moving: "var(--moving)",
  idle: "var(--idle)",
  stopped: "var(--stopped)",
  alert: "var(--primary)",
};

/** Road network shared by every map, in a 800x520 box. */
export const ROADS = {
  ring: "M40 380 C150 300 210 200 330 170 S560 110 760 70",
  cross: "M90 60 C190 150 300 260 420 300 S640 400 770 470",
  spur: "M330 170 C360 250 380 320 300 420 S180 480 60 500",
  east: "M420 300 C500 250 560 210 640 220 S740 260 790 240",
  north: "M250 20 C270 90 300 140 330 170",
} as const;

export type RoadKey = keyof typeof ROADS;

const BLOCKS: [number, number, number, number][] = [
  [60, 90, 96, 60],
  [180, 40, 70, 52],
  [392, 40, 110, 70],
  [528, 150, 84, 52],
  [650, 110, 90, 64],
  [470, 340, 110, 66],
  [610, 300, 96, 56],
  [120, 250, 96, 70],
  [40, 420, 90, 50],
  [380, 420, 120, 60],
  [560, 440, 130, 50],
  [230, 300, 60, 60],
];

interface MapCanvasProps {
  children?: ReactNode;
  className?: string;
  /** Dark maps sit on ink bands. */
  dark?: boolean;
  label: string;
}

export function MapCanvas({ children, className, dark, label }: MapCanvasProps) {
  const land = dark ? "#1b1813" : "var(--map-land)";
  const block = dark ? "#25211a" : "var(--map-block)";
  const road = dark ? "#33302a" : "var(--map-road)";
  const water = dark ? "#16252a" : "var(--map-water)";
  const park = dark ? "#1d2a1c" : "var(--map-park)";
  return (
    <svg
      viewBox="0 0 800 520"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
      className={cn("block size-full", className)}
    >
      <rect width="800" height="520" fill={land} />
      <path
        d="M-20 150 C120 190 170 110 300 120 S470 60 560 10 L560 -20 L-20 -20 Z"
        fill={water}
        opacity="0.9"
      />
      <path d="M690 330 q60 -30 130 10 v120 h-130 Z" fill={park} />
      <circle cx="170" cy="350" r="34" fill={park} />
      {BLOCKS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="8" fill={block} />
      ))}
      {Object.values(ROADS).map((d) => (
        <path key={d} d={d} fill="none" stroke={road} strokeWidth="13" strokeLinecap="round" />
      ))}
      {children}
    </svg>
  );
}

interface RouteProps {
  road: RoadKey;
  tone?: Tone;
  /** Solid for a travelled trail, dashed for a planned route. */
  planned?: boolean;
}

export function Route({ road, tone = "alert", planned }: RouteProps) {
  return (
    <path
      d={ROADS[road]}
      fill="none"
      stroke={TONE_VAR[tone]}
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray={planned ? "2 10" : "12 12"}
      className={planned ? undefined : "animate-dash"}
      opacity={planned ? 0.7 : 0.95}
    />
  );
}

interface VehicleProps {
  road: RoadKey;
  tone?: Tone;
  seconds?: number;
  /** Negative delay starts the vehicle part-way along the road. */
  delay?: number;
  reverse?: boolean;
}

/** A marker that drives along a road using CSS offset-path. */
export function Vehicle({ road, tone = "moving", seconds = 16, delay = 0, reverse }: VehicleProps) {
  const style = {
    offsetPath: `path('${ROADS[road]}')`,
    offsetRotate: "auto",
    animationDelay: `${delay}s`,
    animationDirection: reverse ? "reverse" : "normal",
    "--travel-time": `${seconds}s`,
  } as CSSProperties;
  return (
    <g className="animate-travel" style={style}>
      <circle r="15" fill={TONE_VAR[tone]} opacity="0.18" />
      <circle r="9" fill="#fff" />
      <circle r="6.5" fill={TONE_VAR[tone]} />
      <path d="M-2.5 -3 L3.5 0 L-2.5 3 Z" fill="#fff" />
    </g>
  );
}

interface PinProps {
  x: number;
  y: number;
  tone?: Tone;
  pulse?: boolean;
}

export function Pin({ x, y, tone = "alert", pulse }: PinProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {pulse ? (
        <circle
          r="10"
          fill={TONE_VAR[tone]}
          className="animate-ping-soft"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ) : null}
      <circle r="8" fill="#fff" />
      <circle r="5" fill={TONE_VAR[tone]} />
    </g>
  );
}

interface ZoneProps {
  x: number;
  y: number;
  r: number;
  tone?: Tone;
}

export function Zone({ x, y, r, tone = "alert" }: ZoneProps) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={TONE_VAR[tone]}
      fillOpacity="0.1"
      stroke={TONE_VAR[tone]}
      strokeWidth="2"
      strokeDasharray="6 6"
    />
  );
}

/** App window chrome for dashboard concepts. */
export function Window({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-float",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="size-2.5 rounded-full bg-border" />
          <i className="size-2.5 rounded-full bg-border" />
          <i className="size-2.5 rounded-full bg-border" />
        </span>
        <span className="eyebrow text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  );
}

/** Phone body for mobile app concepts. */
export function Phone({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[min(100%,17rem)] rounded-[2.4rem] border-[7px] border-ink bg-card text-foreground shadow-float",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
      />
      <div className="overflow-hidden rounded-[1.9rem]">{children}</div>
    </div>
  );
}

export function Dot({ tone }: { tone: Tone }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-2 shrink-0 rounded-full"
      style={{ background: TONE_VAR[tone] }}
    />
  );
}

/** Small floating label used on top of maps. */
export function Chip({
  children,
  className,
  tone,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  style?: CSSProperties;
}) {
  return (
    <span
      style={style}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/95 px-2.5 py-1 font-mono text-[0.68rem] leading-none text-foreground shadow-lift backdrop-blur",
        className,
      )}
    >
      {tone ? <Dot tone={tone} /> : null}
      {children}
    </span>
  );
}

/** One row of a vehicle, driver or event list. */
export function Row({
  title,
  meta,
  tone,
  value,
}: {
  title: string;
  meta: string;
  tone?: Tone;
  value?: string;
}) {
  return (
    <li className="flex items-center gap-3 border-b border-border/70 px-4 py-2.5 last:border-b-0">
      {tone ? <Dot tone={tone} /> : null}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[0.8rem] font-medium leading-tight">{title}</span>
        <span className="block truncate text-[0.7rem] leading-tight text-muted-foreground">
          {meta}
        </span>
      </span>
      {value ? <span className="font-mono text-[0.7rem] text-muted-foreground">{value}</span> : null}
    </li>
  );
}

/** Bars for report concepts. Heights are 0 to 100. */
export function Bars({ values, highlight }: { values: number[]; highlight?: number }) {
  return (
    <div className="flex h-28 items-end gap-1.5" aria-hidden="true">
      {values.map((v, i) => (
        <span
          key={i}
          className={cn("flex-1 rounded-t-sm", i === highlight ? "bg-primary" : "bg-foreground/15")}
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}
