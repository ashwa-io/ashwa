import { Check, Package, Shuffle } from "lucide-react";

import { Avatar, Bar, Button, Float, MapArt, MapVehicle, Panel, Pill, ROADS, type RoadKey, Scene, VehicleTile } from "../kit";

const STOPS: { x: number; y: number; name: string; plan: string; actual: string; state: "On time" | "Late"; done: boolean }[] = [
  { x: 371, y: 417, name: "Ring Road East hub", plan: "09:00", actual: "09:00", state: "On time", done: true },
  { x: 364, y: 336, name: "Telibandha market", plan: "09:25", actual: "09:27", state: "On time", done: true },
  { x: 359, y: 227, name: "Shankar Nagar", plan: "09:50", actual: "10:04", state: "Late", done: true },
  { x: 514, y: 158, name: "Civil Lines stores", plan: "10:20", actual: "10:31", state: "Late", done: false },
  { x: 597, y: 127, name: "Pandri cloth market", plan: "11:00", actual: "10:58", state: "On time", done: false },
];

/** Part of a named road, from share `from` to share `to` of its length. */
function Leg({ road, from, to, faint }: { road: RoadKey; from: number; to: number; faint?: boolean }) {
  return (
    <path
      d={ROADS[road]}
      fill="none"
      stroke="#7c3aed"
      strokeOpacity={faint ? 0.3 : 1}
      strokeWidth="5"
      strokeLinecap="round"
      pathLength={1}
      strokeDasharray={`${to - from} 1`}
      strokeDashoffset={-from}
    />
  );
}

function StopPin({ x, y, n, done }: { x: number; y: number; n: number; done: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="11" fill={done ? "#059669" : "#fff"} stroke={done ? "#fff" : "#7c3aed"} strokeWidth="2.5" />
      <text y="4" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={done ? "#fff" : "#6d28d9"} fontFamily="var(--ff-body), sans-serif">
        {n}
      </text>
    </g>
  );
}

/** Routes: a planned run with ordered stops, how it is going against plan, and who is on it. */
export default function Routes() {
  return (
    <Scene tint="sky">
      <Panel
        title="Route 14, city delivery run"
        subtitle="5 stops, 42 km, started 09:00"
        className="left-[236px] top-[44px] h-[612px] w-[660px]"
        flush
        actions={
          <Button>
            <Shuffle className="size-3.5" />
            Optimise order
          </Button>
        }
      >
        <MapArt>
          <Leg road="avenue" from={0} to={0.6} />
          <Leg road="highway" from={0.4} to={0.54} />
          <Leg road="highway" from={0.54} to={0.74} faint />
          {STOPS.map((s, i) => (
            <StopPin key={s.name} x={s.x} y={s.y} n={i + 1} done={s.done} />
          ))}
          <MapVehicle x={432} y={193} angle={-24} />
        </MapArt>
      </Panel>

      <Float className="left-[48px] top-[136px] w-[304px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Stops</span>
          <span className="text-[11.5px] text-zinc-500">Planned and actual</span>
        </div>
        <ol className="px-4 py-2">
          {STOPS.map((s, i) => (
            <li key={s.name} className="relative flex gap-3 pb-4 pt-2 last:pb-2">
              {i < STOPS.length - 1 ? (
                <i className={`absolute bottom-[-8px] left-[11px] top-[34px] w-0.5 rounded-full ${s.done ? "bg-emerald-500" : "bg-zinc-200"}`} />
              ) : null}
              <span
                className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                  s.done ? "bg-emerald-600 text-white" : "border-2 border-violet-600 bg-white text-violet-700"
                }`}
              >
                {s.done ? <Check className="size-3.5" strokeWidth={3} /> : i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-semibold leading-tight">{s.name}</span>
                <span className="mt-1 block font-mono text-[11px] leading-tight text-zinc-500">
                  Plan {s.plan}, {s.done ? "actual" : "ETA"} <b className="font-semibold text-zinc-800">{s.actual}</b>
                </span>
              </span>
              <span className="pt-0.5">
                <Pill tone={s.state === "Late" ? "amber" : "green"}>{s.state}</Pill>
              </span>
            </li>
          ))}
        </ol>
      </Float>

      <Float className="right-[48px] top-[92px] w-[280px] p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[11.5px] text-zinc-500">Route progress</span>
          <Pill tone="amber" dot>
            11 min behind
          </Pill>
        </div>
        <p className="mt-1.5 text-[22px] font-semibold leading-none tracking-tight">
          3 of 5 <span className="text-[12px] font-medium text-zinc-500">stops done</span>
        </p>
        <div className="mt-3">
          <Bar value={55} />
        </div>
        <p className="mt-2 flex justify-between text-[11.5px] text-zinc-500">
          <span>23 of 42 km</span>
          <span>Ends about 11:20</span>
        </p>
      </Float>

      <Float className="bottom-[44px] right-[48px] w-[308px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Allocation</span>
          <span className="text-[11.5px] font-medium text-violet-700">Reassign</span>
        </div>
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
          <VehicleTile kind="truck" hue={262} size={34} />
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-[12.5px] font-semibold leading-tight">CG 04 MX 2217</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Eicher Pro 2049, 9 tonne</span>
          </span>
          <Pill tone="green" dot>
            On trip
          </Pill>
        </div>
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
          <Avatar name="Rakesh Yadav" hue={24} size={34} />
          <span className="min-w-0 flex-1">
            <span className="block text-[12.5px] font-semibold leading-tight">Rakesh Yadav</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Driver, on duty since 08:30</span>
          </span>
        </div>
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
          <Avatar name="Sunil Kumar" hue={205} size={34} />
          <span className="min-w-0 flex-1">
            <span className="block text-[12.5px] font-semibold leading-tight">Sunil Kumar</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Helper</span>
          </span>
        </div>
        <div className="px-4 py-3">
          <p className="mb-2 flex items-center justify-between text-[11.5px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Package className="size-3.5 text-violet-600" />
              Load on board
            </span>
            <b className="font-semibold text-zinc-900">3.6 of 9 tonne</b>
          </p>
          <Bar value={40} />
        </div>
      </Float>
    </Scene>
  );
}
