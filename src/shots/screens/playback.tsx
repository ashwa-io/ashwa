import { CalendarDays, Play, SkipBack, SkipForward } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { Button, Float, MapArt, MapRoute, MapVehicle, Panel, Pill, Scene, VehicleTile } from "../kit";

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const plural = (s: string) => (s === "bus" ? "buses" : `${s}s`);

/** Halts on the highway route. `at` is the share of the 06:40 to 12:24 window, in percent. */
const HALTS = [
  { x: 118, y: 333, time: "07:05", mins: 18, at: 7 },
  { x: 239, y: 282, time: "08:02", mins: 6, at: 24 },
  { x: 359, y: 227, time: "08:48", mins: 24, at: 37 },
  { x: 440, y: 190, time: "09:36", mins: 12, at: 51 },
];

/** A numbered halt marker, with its caption below the road. */
function Halt({ x, y, n, label }: { x: number; y: number; n: number; label: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="10" fill="#18181b" stroke="#fff" strokeWidth="2.5" />
      <text y="3.8" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="var(--ff-body), sans-serif">
        {n}
      </text>
      <text x="6" y="26" fontSize="11" fontWeight="600" fill="#18181b" fontFamily="var(--ff-body), sans-serif" stroke="#fff" strokeWidth="3" paintOrder="stroke">
        {label}
      </text>
    </g>
  );
}

/** Route playback: one vehicle's day replayed on the map, with its halts and a scrubber. */
export default function Playback({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const [v] = ctx.vehicles;
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title="Route playback"
        subtitle={`${v.plate}, ${ctx.from} to ${ctx.to}, 06:40 to 12:24`}
        className="right-[48px] top-[44px] h-[560px] w-[760px]"
        flush
        actions={
          <>
            <Pill tone="violet">148 km</Pill>
            <Button>
              <CalendarDays className="size-3.5" />
              Thu 26 Nov
            </Button>
          </>
        }
      >
        <MapArt>
          <MapRoute road="highway" done={0.62} />
          {HALTS.map((h, i) => (
            <Halt key={h.at} x={h.x} y={h.y} n={i + 1} label={`${h.time}, ${h.mins} min`} />
          ))}
          <MapVehicle x={497} y={165} angle={-23} kind={v.marker} label="54 km/h" />
        </MapArt>
      </Panel>

      <Float className="left-[48px] top-[124px] w-[312px] overflow-hidden">
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
          <VehicleTile kind={v.tile} marker={v.marker} size={34} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13.5px] font-semibold leading-tight">{cap(plural(ctx.noun.stop))} today</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">4 halts, 1 h halted</span>
          </span>
          <Pill tone="green" dot>
            On {ctx.noun.trip}
          </Pill>
        </div>
        <ul>
          {HALTS.map((h, i) => (
            <li key={h.at} className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-zinc-900 text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-semibold leading-tight">{ctx.stops[i]}</span>
                <span className="mt-0.5 block font-mono text-[11px] leading-tight text-zinc-500">Halted at {h.time}</span>
              </span>
              <Pill tone={h.mins > 20 ? "amber" : "zinc"}>{h.mins} min</Pill>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-2 bg-zinc-50/70 px-4 py-3 text-[11px] text-zinc-500">
          <span>
            <b className="block text-[13px] font-semibold text-zinc-900">91 km</b>so far
          </span>
          <span>
            <b className="block text-[13px] font-semibold text-zinc-900">2 h 32 min</b>moving
          </span>
          <span>
            <b className="block text-[13px] font-semibold text-zinc-900">58 km/h</b>average
          </span>
        </div>
      </Float>

      <Float className="bottom-[44px] left-[416px] w-[588px] px-5 pb-6 pt-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-600 text-white">
            <Play className="size-4 translate-x-px fill-current" />
          </span>
          <span className="flex items-center gap-1 text-zinc-400">
            <SkipBack className="size-4" />
            <SkipForward className="size-4" />
          </span>
          <span className="ml-1 min-w-0 flex-1">
            <span className="block font-mono text-[17px] font-semibold leading-none tracking-tight">10:12</span>
            <span className="mt-1 block truncate text-[11px] leading-none text-zinc-500">Thu 26 Nov, near {ctx.stops[3]}</span>
          </span>
          <span className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1">
            {["1x", "2x", "5x", "10x"].map((s) => (
              <span
                key={s}
                className={`rounded-md px-2.5 py-1 font-mono text-[11.5px] font-medium leading-none ${
                  s === "5x" ? "bg-white text-violet-700 shadow-sm" : "text-zinc-500"
                }`}
              >
                {s}
              </span>
            ))}
          </span>
        </div>
        <div className="mt-5 flex items-center gap-3 font-mono text-[11px] text-zinc-500">
          06:40
          <span className="relative h-1.5 flex-1 rounded-full bg-zinc-100">
            <span className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-violet-600" />
            {HALTS.map((h) => (
              <i key={h.at} className="absolute top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-600 bg-white" style={{ left: `${h.at}%` }} />
            ))}
            <i className="absolute left-[62%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-violet-600 bg-white shadow" />
          </span>
          12:24
        </div>
      </Float>
    </Scene>
  );
}
