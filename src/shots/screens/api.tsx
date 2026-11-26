import { Building2, CircleCheck, Globe, Landmark, MessageCircle, Radio, type LucideIcon } from "lucide-react";

import { Float, Pill, Scene, type Tone } from "../kit";

/** Where the event lines leave the Ashwa card, and the left edge of the destinations. */
const OUT = { x: 448, y: 272 };
const IN_X = 760;

const DESTS: { icon: LucideIcon; name: string; note: string; kind: string; event: string; tile: string; tone: Tone; t: number }[] = [
  { icon: Building2, name: "Your ERP", note: "Trips and distance for billing", kind: "REST API", event: "trip.completed", tile: "bg-violet-600", tone: "violet", t: 0.7 },
  { icon: Globe, name: "Customer portal", note: "Live location and arrival time", kind: "Live link", event: "position.updated", tile: "bg-sky-500", tone: "blue", t: 0.7 },
  { icon: Landmark, name: "Government portal", note: "Location feed in the required format", kind: "Data feed", event: "position.updated", tile: "bg-amber-500", tone: "amber", t: 0.7 },
  { icon: MessageCircle, name: "Phone alerts", note: "Messages to owners and drivers", kind: "Message", event: "geofence.exit", tile: "bg-emerald-500", tone: "green", t: 0.7 },
];

const destY = (i: number) => 148 + i * 130 + 57;
const MID = (OUT.x + IN_X) / 2;
const curve = (y: number) => `M${OUT.x} ${OUT.y} C${MID} ${OUT.y} ${MID} ${y} ${IN_X} ${y}`;

/** A point on the same curve, for the event tag that rides on it. */
function on(y: number, t: number) {
  const u = 1 - t;
  return {
    left: u ** 3 * OUT.x + 3 * u * t * MID + t ** 3 * IN_X,
    top: OUT.y + (y - OUT.y) * (3 * t * t - 2 * t ** 3),
  };
}

const STREAM = [
  ["09:12:04", "geofence.exit", "CG 07 CN 4409"],
  ["09:11:40", "trip.started", "CG 04 MF 2218"],
  ["09:10:15", "overspeed", "CG 07 BK 9031"],
  ["09:08:52", "ignition.on", "CG 10 AH 5567"],
];

const K = ({ children }: { children: string }) => <span className="text-sky-300">&quot;{children}&quot;</span>;
const S = ({ children }: { children: string }) => <span className="text-emerald-300">&quot;{children}&quot;</span>;
const N = ({ children }: { children: string }) => <span className="text-amber-300">{children}</span>;

/** Integrations: events leave Ashwa and land in the systems the customer already uses. */
export default function Api() {
  return (
    <Scene tint="sky">
      <header className="absolute left-[48px] top-[44px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-700">Integrations</p>
        <h1 className="mt-1.5 font-sans text-[26px] font-semibold leading-none tracking-tight">
          Your data, where you need it
        </h1>
        <p className="mt-2 text-[13px] text-zinc-500">
          Every trip, stop and alert can flow into the systems you already use.
        </p>
      </header>
      <span className="absolute right-[48px] top-[82px] flex items-center gap-2">
        <Pill tone="violet">REST API</Pill>
        <Pill tone="violet">Webhooks</Pill>
        <Pill tone="green" dot>
          4 connected
        </Pill>
      </span>

      <svg viewBox="0 0 1120 700" className="pointer-events-none absolute inset-0 size-full">
        <defs>
          <linearGradient id="api-flow" gradientUnits="userSpaceOnUse" x1={OUT.x} x2={IN_X} y1="0" y2="0">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        {DESTS.map((d, i) => (
          <g key={d.name}>
            <path d={curve(destY(i))} fill="none" stroke="url(#api-flow)" strokeOpacity="0.16" strokeWidth="9" strokeLinecap="round" />
            <path d={curve(destY(i))} fill="none" stroke="url(#api-flow)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
            <path
              d={`M${IN_X - 16} ${destY(i) - 5.5} l5.5 5.5 l-5.5 5.5`}
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}
        {/* The highlighted event drops into the payload card below. */}
        <line x1="248" x2="248" y1="396" y2="420" stroke="#7c3aed" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
      </svg>

      {/* The source */}
      <Float className="left-[48px] top-[148px] h-[248px] w-[400px] overflow-hidden">
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3.5">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-[0_8px_16px_-6px_rgb(124_58_237/0.7)]">
            <Radio className="size-5" />
          </span>
          <span className="flex-1">
            <span className="block font-sans text-[16px] font-semibold leading-tight tracking-tight">Ashwa</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Live events from your fleet</span>
          </span>
          <Pill tone="green" dot>
            Streaming
          </Pill>
        </div>
        <ul className="px-2 pt-2">
          {STREAM.map(([at, event, plate], i) => (
            <li
              key={at}
              className={`flex h-[30px] items-center gap-3 rounded-lg px-2 font-mono text-[11.5px] ${i === 0 ? "bg-violet-50 text-violet-900" : "text-zinc-600"}`}
            >
              <span className="text-zinc-400">{at}</span>
              <span className="flex-1 font-medium">{event}</span>
              <span>{plate}</span>
            </li>
          ))}
        </ul>
        <p className="absolute inset-x-0 bottom-0 flex justify-between border-t border-zinc-100 px-4 py-2.5 text-[11.5px] text-zinc-500">
          <span>
            <b className="font-semibold text-zinc-900">1,284</b> events today
          </span>
          <span>24 vehicles</span>
        </p>
      </Float>

      {/* The payload */}
      <Float className="left-[48px] top-[420px] h-[232px] w-[400px] overflow-hidden border-zinc-800 bg-zinc-900 text-white">
        <div className="flex h-[42px] items-center gap-2 border-b border-zinc-800 px-4">
          <span className="rounded bg-violet-500/20 px-1.5 py-0.5 font-mono text-[10.5px] font-semibold text-violet-300">POST</span>
          <span className="flex-1 font-mono text-[11.5px] text-zinc-400">/webhooks/ashwa</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-1 text-[11px] font-medium leading-none text-emerald-400">
            <CircleCheck className="size-3" />
            Delivered 200 OK
          </span>
        </div>
        <pre className="px-4 pt-3.5 font-mono text-[12px] leading-[1.85] text-zinc-500">
          {"{\n  "}
          <K>event</K>: <S>geofence.exit</S>,{"\n  "}
          <K>vehicle</K>: <S>CG 07 CN 4409</S>,{"\n  "}
          <K>zone</K>: <S>Depot</S>,{"\n  "}
          <K>at</K>: <S>09:12:04</S>,{"\n  "}
          <K>position</K>: [<N>21.2514</N>, <N>81.6296</N>]{"\n}"}
        </pre>
      </Float>

      {/* The destinations */}
      {DESTS.map((d, i) => (
        <div key={d.name} className="absolute right-[48px] h-[114px] w-[312px]" style={{ top: 148 + i * 130 }}>
          <Float className="inset-0 px-4 pt-3.5">
            <div className="flex items-center gap-3">
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl text-white ${d.tile}`}>
                <d.icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold leading-tight tracking-tight">{d.name}</span>
                <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{d.note}</span>
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2.5">
              <Pill tone={d.tone}>{d.kind}</Pill>
              <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-zinc-500">
                <i className="size-1.5 rounded-full bg-emerald-500" />
                received 2 s ago
              </span>
            </div>
          </Float>
        </div>
      ))}

      {/* Event tags riding the lines, and the ports the lines plug into. */}
      {DESTS.map((d, i) => (
        <span
          key={d.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-violet-200 bg-white px-2 py-1 font-mono text-[10.5px] font-medium leading-none text-violet-800 shadow-sm"
          style={on(destY(i), d.t)}
        >
          {d.event}
        </span>
      ))}
      <svg viewBox="0 0 1120 700" className="pointer-events-none absolute inset-0 size-full">
        <circle cx={OUT.x} cy={OUT.y} r="6" fill="#fff" stroke="#7c3aed" strokeWidth="2.5" />
        {DESTS.map((d, i) => (
          <circle key={d.name} cx={IN_X} cy={destY(i)} r="5" fill="#fff" stroke="#0ea5e9" strokeWidth="2.5" />
        ))}
        <circle cx="248" cy="396" r="4.5" fill="#fff" stroke="#7c3aed" strokeWidth="2.5" />
        <circle cx="248" cy="420" r="4.5" fill="#fff" stroke="#7c3aed" strokeWidth="2.5" />
      </svg>
    </Scene>
  );
}
