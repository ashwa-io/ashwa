import type { ReactNode } from "react";
import Image from "next/image";
import { BellRing, Check, Clock, Cpu, RadioTower, Zap } from "lucide-react";

import { Bar, Float, MapArt, MapPin, MapRoute, MapVehicle, Pill, Scene } from "../kit";

/** Every connector runs along this line; the four cards are centred on it. */
const FLOW_Y = 372;

/** Card edges on the 1120 canvas: [left, width, top, height]. */
const BOX = [
  [48, 236, 152, 440],
  [336, 192, 214, 316],
  [580, 216, 182, 380],
  [848, 224, 152, 440],
] as const;

const STEPS = ["Device", "Network", "Platform", "Your screens"];

const box = (i: number) => ({ left: BOX[i][0], width: BOX[i][1], top: BOX[i][2], height: BOX[i][3] });

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center gap-1.5 whitespace-nowrap rounded-md border border-zinc-200 bg-zinc-50 px-2 text-[11px] font-medium text-zinc-700">
      {children}
    </span>
  );
}

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between py-[5px] text-[11.5px]">
      <span className="text-zinc-500">{label}</span>
      <span className="font-medium text-zinc-800">{value}</span>
    </div>
  );
}

/** Dots that grow and darken toward an arrowhead, so the line reads as moving right. */
function Connector({ from, to }: { from: number; to: number }) {
  const dots = [0, 1, 2, 3];
  return (
    <g>
      <line x1={from} x2={to} y1={FLOW_Y} y2={FLOW_Y} stroke="#a78bfa" strokeOpacity="0.3" strokeWidth="9" strokeLinecap="round" />
      {dots.map((d) => (
        <circle key={d} cx={from + 12 + d * 7.5} cy={FLOW_Y} r={1.4 + d * 0.4} fill="#7c3aed" fillOpacity={0.3 + d * 0.22} />
      ))}
      <path
        d={`M${to - 15} ${FLOW_Y - 5.5} l5.5 5.5 l-5.5 5.5`}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={from} cy={FLOW_Y} r="5" fill="#fff" stroke="#7c3aed" strokeWidth="2.5" />
      <circle cx={to} cy={FLOW_Y} r="5" fill="#fff" stroke="#7c3aed" strokeWidth="2.5" />
    </g>
  );
}

/** How a position travels from the tracker in the vehicle to the team's screens. */
export default function Device() {
  return (
    <Scene>
      <header className="absolute left-[48px] right-[48px] top-[44px] flex items-end justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-700">How it works</p>
          <h1 className="mt-1.5 font-sans text-[26px] font-semibold leading-none tracking-tight">
            From the vehicle to your screen
          </h1>
          <p className="mt-2 text-[13px] text-zinc-500">
            One small device, and every position reaches your team in seconds.
          </p>
        </div>
        <span className="flex items-center gap-2">
          <Pill tone="violet">
            <Clock className="size-3" />
            Every 5 seconds
          </Pill>
          <Pill tone="green" dot>
            Live
          </Pill>
        </span>
      </header>

      {/* A soft beam behind the cards, visible in the gaps. */}
      <div
        className="absolute left-[48px] right-[48px] h-[120px] rounded-full bg-gradient-to-r from-violet-300/0 via-violet-300/45 to-violet-300/0 blur-2xl"
        style={{ top: FLOW_Y - 60 }}
      />

      {/* 1. The device */}
      <div className="absolute" style={box(0)}>
        <Float className="inset-0 overflow-hidden">
          <div className="relative h-[214px]">
            <Image
              src="/images/site/gps-install.jpg"
              alt=""
              width={2400}
              height={1340}
              unoptimized
              className="size-full object-cover"
              style={{ objectPosition: "30% 45%" }}
            />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/75 px-2 py-1 text-[10.5px] font-medium leading-none text-white backdrop-blur">
              <i className="size-1.5 rounded-full bg-emerald-400" />
              Hidden behind the dashboard
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-sans text-[15px] font-semibold leading-tight tracking-tight">Wired tracker</h2>
              <Pill tone="green" dot>
                Online
              </Pill>
            </div>
            <p className="mt-0.5 font-mono text-[11px] text-zinc-500">CG 07 CN 4409</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Chip>
                <span className="flex items-end gap-[2px]">
                  {[4, 6, 8, 10].map((h) => (
                    <i key={h} className="w-[2.5px] rounded-sm bg-emerald-500" style={{ height: h }} />
                  ))}
                </span>
                4G
              </Chip>
              <Chip>
                <Zap className="size-3 text-amber-500" />
                12.4 V
              </Chip>
              <Chip>
                <i className="size-1.5 rounded-full bg-violet-600" />
                GPS fix: 11 satellites
              </Chip>
            </div>
            <div className="mt-3 border-t border-zinc-100 pt-2">
              <Row label="Ignition" value="On" />
              <Row label="Backup battery" value="100%" />
              <Row label="Last update" value="2 s ago" />
            </div>
          </div>
        </Float>
      </div>

      {/* 2. Satellites and mobile network */}
      <div className="absolute" style={box(1)}>
        <Float className="inset-0 flex flex-col items-center overflow-hidden px-4 pb-4 pt-3.5">
          <p className="self-start text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-400">Position fix</p>
          <svg viewBox="0 0 160 124" className="mt-1 h-[124px] w-[160px]">
            <defs>
              <radialGradient id="dv-earth" cx="35%" cy="30%">
                <stop offset="0" stopColor="#c4b5fd" />
                <stop offset="1" stopColor="#7c3aed" />
              </radialGradient>
            </defs>
            <circle cx="80" cy="66" r="52" fill="#7c3aed" fillOpacity="0.05" />
            <circle cx="80" cy="66" r="34" fill="#7c3aed" fillOpacity="0.07" />
            <ellipse cx="80" cy="66" rx="70" ry="26" fill="none" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="3 4" transform="rotate(-22 80 66)" />
            <ellipse cx="80" cy="66" rx="62" ry="40" fill="none" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="3 4" transform="rotate(28 80 66)" />
            {[
              [20, 86],
              [142, 44],
              [46, 20],
              [122, 108],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <line x1={x} y1={y} x2="80" y2="66" stroke="#7c3aed" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="1 4" strokeLinecap="round" />
                <rect x={x - 9} y={y - 2.5} width="18" height="5" rx="1.5" fill="#38bdf8" />
                <rect x={x - 4} y={y - 4} width="8" height="8" rx="2" fill="#18181b" />
              </g>
            ))}
            <circle cx="80" cy="66" r="15" fill="url(#dv-earth)" />
            <circle cx="80" cy="66" r="4.5" fill="#fff" />
            <circle cx="80" cy="66" r="2" fill="#7c3aed" />
          </svg>
          <p className="mt-1.5 font-mono text-[15px] font-semibold tracking-tight">21.2514, 81.6296</p>
          <p className="mt-0.5 text-[11px] text-zinc-500">Latitude, longitude</p>
          <div className="mt-auto w-full space-y-2 border-t border-zinc-100 pt-3 text-[12px]">
            <p className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-md bg-violet-50 text-violet-700">
                <Clock className="size-3.5" />
              </span>
              <span className="font-medium">every 5 seconds</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-md bg-sky-50 text-sky-700">
                <RadioTower className="size-3.5" />
              </span>
              <span className="font-medium">sent over 4G</span>
            </p>
          </div>
        </Float>
      </div>

      {/* 3. The platform */}
      <div className="absolute" style={box(2)}>
        <Float className="inset-0 flex flex-col overflow-hidden border-zinc-800 bg-zinc-900 p-4 text-white">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-violet-700">
              <Cpu className="size-4" />
            </span>
            <span>
              <span className="block font-sans text-[14px] font-semibold leading-tight">Ashwa platform</span>
              <span className="block text-[11px] leading-tight text-zinc-400">Turns points into trips</span>
            </span>
          </div>
          <div className="mt-3.5 rounded-lg border border-zinc-800 bg-zinc-950/60 px-2 pb-1.5 pt-2">
            <svg viewBox="0 0 168 56" className="h-[56px] w-full">
              <polyline
                points="6,44 20,34 32,46 46,30 58,38 72,22 86,32 100,16 114,26 128,12 142,20 160,8"
                fill="none"
                stroke="#52525b"
                strokeWidth="1"
              />
              {[
                [6, 44], [20, 34], [32, 46], [46, 30], [58, 38], [72, 22], [86, 32], [100, 16], [114, 26], [128, 12], [142, 20], [160, 8],
              ].map(([x, y]) => (
                <circle key={x} cx={x} cy={y} r="2" fill="#71717a" />
              ))}
              <path d="M6 42 C50 38 70 26 100 20 S140 14 160 9" fill="none" stroke="#8b5cf6" strokeOpacity="0.35" strokeWidth="7" strokeLinecap="round" />
              <path d="M6 42 C50 38 70 26 100 20 S140 14 160 9" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="flex justify-between font-mono text-[9.5px] text-zinc-500">
              <span>raw points</span>
              <span className="text-violet-300">clean route</span>
            </div>
          </div>
          <ul className="mt-3 space-y-2.5">
            {[
              ["Route cleaned", "Snapped to roads"],
              ["Stops detected", "2 stops, 14 min in all"],
              ["Trip matched", "Raipur to Bhilai"],
            ].map(([title, note]) => (
              <li key={title} className="flex items-center gap-2.5">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span>
                  <span className="block text-[12px] font-medium leading-tight">{title}</span>
                  <span className="block text-[10.5px] leading-tight text-zinc-400">{note}</span>
                </span>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <span className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-violet-400/30 border-t-violet-400" />
              <span className="flex-1">
                <span className="block text-[12px] font-medium leading-tight">Alerts checked</span>
                <span className="mt-1.5 block opacity-90">
                  <Bar value={72} />
                </span>
              </span>
            </li>
          </ul>
          <p className="mt-auto flex justify-between border-t border-zinc-800 pt-2.5 font-mono text-[10.5px] text-zinc-500">
            <span>1,284 points today</span>
            <span className="text-emerald-400">in sync</span>
          </p>
        </Float>
      </div>

      {/* 4. The team's screens */}
      <div className="absolute" style={box(3)}>
        <Float className="inset-0 overflow-hidden">
          <div className="flex h-[46px] items-center justify-between px-4">
            <h2 className="font-sans text-[14px] font-semibold tracking-tight">Live map</h2>
            <Pill tone="green" dot>
              Moving
            </Pill>
          </div>
          <div className="relative h-[180px] overflow-hidden border-y border-zinc-100">
            {/* The kit map drawn large and cropped around the vehicle, so the marker stays readable. */}
            <div className="absolute h-[350px] w-[560px]" style={{ left: -165, top: -62 }}>
              <MapArt>
                <MapRoute road="highway" done={0.58} />
                <MapPin x={318} y={246} />
                <MapVehicle x={404} y={208} angle={-24} label="CG 07 CN 4409" />
              </MapArt>
            </div>
          </div>
          <div className="relative h-[214px] bg-gradient-to-b from-violet-50/70 to-white">
            <div className="absolute left-1/2 top-[18px] h-[230px] w-[172px] -translate-x-1/2 rounded-t-[26px] border-[5px] border-b-0 border-zinc-900 bg-zinc-100 shadow-[0_18px_30px_-14px_rgb(24_24_27/0.5)]">
              <span className="absolute left-1/2 top-[6px] h-[11px] w-[46px] -translate-x-1/2 rounded-full bg-zinc-900" />
              <div className="flex items-center justify-between px-3.5 pt-[5px] text-[9.5px] font-semibold">
                <span>9:41</span>
                <span>4G</span>
              </div>
              <div className="mx-2 mt-3 rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="grid size-5 place-items-center rounded-md bg-violet-600 text-white">
                    <BellRing className="size-3" />
                  </span>
                  <span className="flex-1 text-[10.5px] font-semibold">Ashwa</span>
                  <span className="text-[9.5px] text-zinc-400">now</span>
                </div>
                <p className="mt-1.5 text-[11px] font-medium leading-snug">CG 07 CN 4409 is 12 min from Bhilai depot</p>
              </div>
              <div className="mx-2 mt-2 rounded-xl border border-zinc-200 bg-white p-2.5">
                <div className="flex items-center justify-between text-[10.5px]">
                  <span className="text-zinc-500">Speed</span>
                  <span className="font-mono font-semibold">61 km/h</span>
                </div>
                <div className="mt-2">
                  <Bar value={58} />
                </div>
              </div>
            </div>
          </div>
        </Float>
      </div>

      <svg viewBox="0 0 1120 700" className="pointer-events-none absolute inset-0 size-full">
        {[0, 1, 2].map((i) => (
          <Connector key={i} from={BOX[i][0] + BOX[i][1]} to={BOX[i + 1][0]} />
        ))}
      </svg>

      {/* Numbered caption row, each label centred under its card. */}
      <div className="absolute left-[166px] right-[160px] top-[628px] border-t border-dashed border-violet-300" />
      {STEPS.map((s, i) => (
        <span
          key={s}
          className="absolute top-[614px] flex h-7 -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-zinc-200 bg-white pl-1 pr-3 text-[12px] font-semibold shadow-sm"
          style={{ left: BOX[i][0] + BOX[i][1] / 2 }}
        >
          <i className="grid size-5 place-items-center rounded-full bg-violet-600 font-mono text-[10.5px] not-italic text-white">
            {i + 1}
          </i>
          {s}
        </span>
      ))}
    </Scene>
  );
}
