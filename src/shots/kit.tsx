import type { ReactNode } from "react";
import Image from "next/image";
import { Bell, MapPinned, Search, UserRound, Waypoints } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Building blocks for the designed product screens under /shots.
 * These pages are rendered once, captured with headless Chrome
 * (scripts/capture-shots.mjs) and saved to public/images/product; the live
 * site shows only the resulting images.
 *
 * Canvas: web visuals are 1120x700 CSS px, phone screens 390x780.
 * Palette: the app's own violet on neutral zinc, not the marketing site's red.
 */

/**
 * The backdrop every web visual sits on: a soft tinted ground with a faint
 * grid. Screens place one main Panel on it and let a few Float cards overlap
 * the panel's edges. No sidebar, no app chrome: only the part worth showing.
 */
export function Scene({ children, tint = "violet" }: { children: ReactNode; tint?: "violet" | "amber" | "emerald" | "sky" }) {
  const wash = {
    violet: "from-violet-100 via-zinc-50 to-violet-50",
    amber: "from-amber-100 via-zinc-50 to-orange-50",
    emerald: "from-emerald-100 via-zinc-50 to-teal-50",
    sky: "from-sky-100 via-zinc-50 to-indigo-50",
  }[tint];
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br font-sans text-[13px] leading-snug text-zinc-900 antialiased",
        wash,
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(24 24 27 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(24 24 27 / 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {children}
    </div>
  );
}

/** The main card of a visual: a titled panel holding a table, a map or a board. Position it with className. */
export function Panel({
  title,
  subtitle,
  actions,
  children,
  className,
  flush,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Body runs edge to edge, for maps and tables. */
  flush?: boolean;
}) {
  return (
    <section
      className={cn(
        "absolute flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_70px_-30px_rgb(24_24_27/0.35),0_2px_6px_rgb(24_24_27/0.06)]",
        className,
      )}
    >
      <header className="flex h-[54px] shrink-0 items-center gap-3 border-b border-zinc-100 px-5">
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-sans text-[15px] font-semibold leading-tight tracking-tight">{title}</h1>
          {subtitle ? <p className="truncate text-[11.5px] leading-tight text-zinc-500">{subtitle}</p> : null}
        </div>
        {actions}
      </header>
      <div className={cn("min-h-0 flex-1 overflow-hidden", !flush && "p-5")}>{children}</div>
    </section>
  );
}

/** A small card floating over the panel, with a deeper shadow. Position it with className. */
export function Float({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "absolute rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_50px_-18px_rgb(24_24_27/0.4),0_2px_6px_rgb(24_24_27/0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A search field, for panel headers. */
export function SearchField({ placeholder = "Search" }: { placeholder?: string }) {
  return (
    <span className="flex h-8 w-44 items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 text-[12px] text-zinc-400">
      <Search className="size-3.5" />
      {placeholder}
    </span>
  );
}
/** The phone app frame: status bar, the screen's content, then the tab bar. */
export function MShell({
  children,
  tab = "tracking",
  dark,
}: {
  children: ReactNode;
  tab?: "tracking" | "trips" | "alerts" | "profile" | "none";
  /** Light status-bar text, for screens that open on a dark or map header. */
  dark?: boolean;
}) {
  const tabs = [
    { key: "tracking", label: "Tracking", icon: MapPinned },
    { key: "trips", label: "Trips", icon: Waypoints },
    { key: "alerts", label: "Alerts", icon: Bell },
    { key: "profile", label: "Profile", icon: UserRound },
  ] as const;
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-zinc-50 font-sans text-[14px] leading-snug text-zinc-900 antialiased">
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7 text-[14px] font-semibold",
          dark ? "text-white" : "text-zinc-900",
        )}
      >
        <span>9:41</span>
        <span className="flex items-end gap-[3px]">
          {[5, 7, 9, 11].map((h) => (
            <i key={h} className="w-[3px] rounded-sm bg-current" style={{ height: h }} />
          ))}
          <i className="ml-1.5 h-[11px] w-[22px] rounded-[3px] border border-current p-px">
            <b className="block h-full w-4/5 rounded-[1.5px] bg-current" />
          </i>
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      {tab === "none" ? null : (
        <nav className="grid shrink-0 grid-cols-4 border-t border-zinc-200 bg-white px-2 pb-6 pt-2">
          {tabs.map((t) => (
            <span
              key={t.key}
              className={cn(
                "flex flex-col items-center gap-1 text-[10.5px] font-medium",
                t.key === tab ? "text-violet-700" : "text-zinc-400",
              )}
            >
              <t.icon className="size-[22px]" />
              {t.label}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-zinc-200 bg-white", className)}>{children}</div>;
}

export function CardTitle({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-2.5">
      <h2 className="font-sans text-[12.5px] font-semibold tracking-tight">{children}</h2>
      {aside ? <span className="text-[11.5px] text-zinc-500">{aside}</span> : null}
    </div>
  );
}

export function Stat({
  label,
  value,
  note,
  tone = "zinc",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "zinc" | "green" | "amber" | "red" | "violet";
}) {
  const noteTone = {
    zinc: "text-zinc-500",
    green: "text-emerald-600",
    amber: "text-amber-600",
    red: "text-red-600",
    violet: "text-violet-600",
  }[tone];
  return (
    <Card className="px-4 py-3">
      <p className="text-[11.5px] text-zinc-500">{label}</p>
      <p className="mt-1 font-sans text-[22px] font-semibold leading-none tracking-tight">{value}</p>
      {note ? <p className={cn("mt-1.5 text-[11px] font-medium", noteTone)}>{note}</p> : null}
    </Card>
  );
}

export type Tone = "green" | "amber" | "red" | "zinc" | "violet" | "blue";

const PILL: Record<Tone, string> = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
  zinc: "bg-zinc-100 text-zinc-600",
  violet: "bg-violet-50 text-violet-700",
  blue: "bg-sky-50 text-sky-700",
};

export function Pill({ tone = "zinc", children, dot }: { tone?: Tone; children: ReactNode; dot?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-[3px] text-[11px] font-medium leading-none",
        PILL[tone],
      )}
    >
      {dot ? <i className="size-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}

const WOMEN = new Set([
  "Sunita", "Priya", "Sneha", "Kavita", "Pooja", "Divya", "Meera", "Anjali", "Neha", "Rekha", "Asha", "Manju", "Seema", "Shreya",
]);

/**
 * A person's photo, picked from the portrait set by name so the same person
 * always gets the same face. `hue` tints the ring.
 */
export function Avatar({ name, hue = 262, size = 28 }: { name: string; hue?: number; size?: number }) {
  const sum = [...name].reduce((n, ch) => n + ch.charCodeAt(0), 0);
  const photo = (WOMEN.has(name.split(" ")[0]) ? 4 : 1) + ((sum * 7 + name.length * 3) % 3);
  return (
    <Image
      src={`/images/people/p${photo}.jpg`}
      alt=""
      width={size * 2}
      height={size * 2}
      unoptimized
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size, boxShadow: `0 0 0 1.5px #fff, 0 0 0 2.5px hsl(${hue} 70% 82%)` }}
    />
  );
}

const TILE_MARKER = { truck: "truck", bus: "bus", car: "car" } as const;

/** The tile that stands for a vehicle in lists: the app's own top-view artwork on a soft colour. */
export function VehicleTile({
  kind = "truck",
  marker,
  size = 30,
}: {
  kind?: keyof typeof TILE_MARKER;
  /** A specific marker (suv, sports, pickup, jeep); defaults to the one for `kind`. */
  marker?: MarkerKind;
  /** Accepted for older callers; the artwork keeps its own colours. */
  hue?: number;
  size?: number;
}) {
  const art = marker ?? TILE_MARKER[kind];
  const long = art === "truck" || art === "bus";
  // The artwork stands on its own, lying nose-right: no box or ring around it.
  return (
    <span className="grid shrink-0 place-items-center" style={{ width: size * 1.25, height: size }}>
      <Image
        src={`/images/markers/${art}.svg`}
        alt=""
        width={64}
        height={64}
        unoptimized
        className="rotate-90 object-contain drop-shadow-[0_1.5px_1.5px_rgb(24_24_27/0.3)]"
        style={{ width: long ? size * 0.42 : size * 1.15, height: size * 1.2 }}
      />
    </span>
  );
}
export function Button({ children, primary }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 text-[12px] font-medium",
        primary ? "bg-violet-600 text-white" : "border border-zinc-200 bg-white text-zinc-700",
      )}
    >
      {children}
    </span>
  );
}

/** A thin progress bar. `value` is 0 to 100. */
export function Bar({ value, tone = "violet" }: { value: number; tone?: Tone }) {
  const fill = {
    green: "bg-emerald-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
    zinc: "bg-zinc-400",
    violet: "bg-violet-600",
    blue: "bg-sky-500",
  }[tone];
  return (
    <span className="block h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
      <span className={cn("block h-full rounded-full", fill)} style={{ width: `${value}%` }} />
    </span>
  );
}

/** Column chart. Values are 0 to 100; `highlight` is the index drawn in the brand colour. */
export function Columns({ values, labels, highlight }: { values: number[]; labels?: string[]; highlight?: number }) {
  return (
    <div>
      <div className="flex h-28 items-end gap-2">
        {values.map((v, i) => (
          <span
            key={i}
            className={cn("flex-1 rounded-t-md", i === highlight ? "bg-violet-600" : "bg-violet-200")}
            style={{ height: `${v}%` }}
          />
        ))}
      </div>
      {labels ? (
        <div className="mt-1.5 flex gap-2 text-center text-[10.5px] text-zinc-400">
          {labels.map((l, i) => (
            <span key={i} className="flex-1">
              {l}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ map -- */

/** Named roads in the map's 800x500 space. Use them for routes so lines follow streets. */
export const ROADS = {
  highway: "M-10 372 C120 340 210 296 318 246 S520 150 640 112 S770 70 812 52",
  ring: "M96 -10 C120 90 168 176 252 236 S420 318 540 372 S700 450 812 478",
  avenue: "M318 246 C352 300 380 352 372 412 S330 480 300 512",
  east: "M540 372 C570 320 604 274 660 256 S760 250 812 232",
  north: "M252 236 C268 170 300 110 360 70 S470 20 520 -10",
  link: "M360 70 C430 96 500 108 640 112",
} as const;

export type RoadKey = keyof typeof ROADS;

const MINOR = [
  "M40 120 L210 60",
  "M150 300 L250 420",
  "M430 190 L520 300",
  "M600 180 L700 330",
  "M420 420 L560 480",
  "M90 430 L210 470",
  "M660 256 L610 400",
  "M470 60 L560 150",
];

const BLOCKS: [number, number, number, number][] = [
  [50, 150, 70, 46],
  [150, 110, 60, 50],
  [60, 240, 70, 44],
  [410, 110, 66, 44],
  [470, 210, 60, 46],
  [560, 190, 50, 40],
  [690, 150, 70, 50],
  [430, 330, 70, 44],
  [600, 420, 80, 44],
  [180, 350, 60, 50],
  [700, 320, 70, 46],
  [290, 130, 50, 40],
];

const PLACES: [number, number, string][] = [
  [84, 96, "Transport Nagar"],
  [404, 96, "Civil Lines"],
  [650, 300, "Industrial Area"],
  [150, 450, "Old Town"],
  [470, 448, "Ring Road East"],
];

/**
 * A clean street map in vector. Children are drawn in the same 800x500 space,
 * so routes, zones and markers line up with the roads.
 */
export function MapArt({ children, className, dark }: { children?: ReactNode; className?: string; dark?: boolean }) {
  const c = dark
    ? { land: "#16161a", block: "#1e1e24", water: "#13212e", park: "#16241b", casing: "#0f0f12", road: "#2c2c35", major: "#3a3a46", label: "#6b6b78" }
    : { land: "#eef1f4", block: "#e4e8ed", water: "#cfe3f6", park: "#d6ecd2", casing: "#dde2e8", road: "#ffffff", major: "#ffe9a6", label: "#8a93a0" };
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className={cn("block size-full", className)}>
      <rect width="800" height="500" fill={c.land} />
      <path d="M-10 -10 L250 -10 C230 40 150 70 90 60 S10 90 -10 110 Z" fill={c.water} />
      <path d="M700 380 q70 -30 120 0 v130 h-120 Z" fill={c.park} />
      <ellipse cx="330" cy="352" rx="46" ry="34" fill={c.park} />
      <ellipse cx="560" cy="60" rx="52" ry="26" fill={c.park} />
      {BLOCKS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="6" fill={c.block} />
      ))}
      {MINOR.map((d) => (
        <path key={d} d={d} fill="none" stroke={c.road} strokeWidth="5" strokeLinecap="round" />
      ))}
      {Object.values(ROADS).map((d) => (
        <path key={`c${d}`} d={d} fill="none" stroke={c.casing} strokeWidth="13" strokeLinecap="round" />
      ))}
      {Object.entries(ROADS).map(([k, d]) => (
        <path
          key={k}
          d={d}
          fill="none"
          stroke={k === "highway" ? c.major : c.road}
          strokeWidth="10"
          strokeLinecap="round"
        />
      ))}
      {PLACES.map(([x, y, name]) => (
        <text key={name} x={x} y={y} fontSize="11" fill={c.label} fontFamily="var(--ff-body), sans-serif" fontWeight="500">
          {name}
        </text>
      ))}
      {children}
    </svg>
  );
}

/** A route drawn along a named road. `done` is the travelled share, 0 to 1. */
export function MapRoute({ road, color = "#7c3aed", done = 1 }: { road: RoadKey; color?: string; done?: number }) {
  return (
    <>
      <path d={ROADS[road]} fill="none" stroke={color} strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
      <path
        d={ROADS[road]}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={`${done} 1`}
      />
    </>
  );
}

/** The product's own top-view vehicle artwork (public/images/markers), drawn nose-up. Size is [width, height] on the map. */
const MARKER = {
  truck: [21, 61],
  bus: [21, 61],
  car: [48, 48],
  suv: [48, 48],
  sports: [48, 48],
  pickup: [48, 48],
  jeep: [48, 48],
  police: [48, 48],
} as const;

export type MarkerKind = keyof typeof MARKER;

/**
 * A vehicle on the map, using the app's top-view vehicle marker.
 * `angle` is the heading in degrees, 0 pointing right (east), as the roads are drawn.
 */
export function MapVehicle({
  x,
  y,
  angle = 0,
  kind = "truck",
  label,
}: {
  x: number;
  y: number;
  angle?: number;
  kind?: MarkerKind;
  /** Kept for callers that tint their label or route; the marker itself keeps its own colours. */
  color?: string;
  label?: string;
}) {
  const [w, h] = MARKER[kind];
  return (
    <g transform={`translate(${x} ${y})`}>
      <image
        href={`/images/markers/${kind}.svg`}
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        transform={`rotate(${angle + 90})`}
        // The shadow gives the pale parts of the artwork an edge against a light map.
        style={{ filter: "drop-shadow(0 1.5px 2px rgb(24 24 27 / 0.45))" }}
      />
      {label ? (
        <g transform="translate(22 -38)">
          <rect width={label.length * 6.4 + 14} height="20" rx="6" fill="#18181b" />
          <text x="7" y="14" fontSize="11" fill="#fff" fontFamily="var(--ff-mono), monospace">
            {label}
          </text>
        </g>
      ) : null}
    </g>
  );
}
/** A stop or place pin. */
export function MapPin({ x, y, color = "#18181b", label }: { x: number; y: number; color?: string; label?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="7" fill="#fff" stroke={color} strokeWidth="2.5" />
      <circle r="2.5" fill={color} />
      {label ? (
        <text x="12" y="4" fontSize="11" fontWeight="600" fill="#18181b" fontFamily="var(--ff-body), sans-serif" stroke="#fff" strokeWidth="3" paintOrder="stroke">
          {label}
        </text>
      ) : null}
    </g>
  );
}

/** A geofence zone. */
export function MapZone({ x, y, r, color = "#7c3aed", label }: { x: number; y: number; r: number; color?: string; label?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeDasharray="6 5" />
      {label ? (
        <text x={x} y={y - r - 7} textAnchor="middle" fontSize="11" fontWeight="600" fill={color} fontFamily="var(--ff-body), sans-serif" stroke="#fff" strokeWidth="3" paintOrder="stroke">
          {label}
        </text>
      ) : null}
    </g>
  );
}
