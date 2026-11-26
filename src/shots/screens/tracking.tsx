import { Gauge, Navigation } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import {
  Avatar,
  Bar,
  Button,
  Float,
  MapArt,
  MapPin,
  MapRoute,
  MapVehicle,
  Panel,
  Pill,
  Scene,
  SearchField,
  VehicleTile,
} from "../kit";

const STATE = [
  { speed: "61 km/h", state: "Moving" },
  { speed: "46 km/h", state: "Moving" },
  { speed: "0 km/h", state: "Idle" },
  { speed: "38 km/h", state: "Moving" },
  { speed: "0 km/h", state: "Stopped" },
] as const;

const TONE = { Moving: "green", Stopped: "zinc", Idle: "amber" } as const;

/** Where the five vehicles sit on the map, and which way each one points. */
const SPOTS = [
  { x: 404, y: 208, angle: -24 },
  { x: 360, y: 292, angle: 32 },
  { x: 150, y: 332, angle: -18 },
  { x: 610, y: 282, angle: -40 },
  { x: 300, y: 470, angle: 110 },
];

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

/**
 * Live tracking: the fleet on a map, the vehicle list, and one vehicle in focus.
 * Every vehicle, person and place comes from `ctx`, so the same screen renders
 * as trucks, school buses, rental cars and so on.
 */
export default function Tracking({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const [focus] = ctx.vehicles;
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title="Live tracking"
        subtitle={ctx.summary}
        className="left-[56px] top-[46px] h-[608px] w-[720px]"
        flush
        actions={
          <>
            <Pill tone="green" dot>
              18 moving
            </Pill>
            <Pill tone="amber" dot>
              2 idle
            </Pill>
            <Pill tone="zinc" dot>
              4 stopped
            </Pill>
          </>
        }
      >
        <MapArt>
          <MapRoute road="highway" done={0.58} />
          <MapRoute road="ring" color="#059669" done={0.4} />
          <MapPin x={640} y={112} label={ctx.to} />
          {SPOTS.map((s, i) => (
            <MapVehicle
              key={ctx.vehicles[i].plate}
              {...s}
              kind={ctx.vehicles[i].marker}
              label={i === 0 ? focus.plate : undefined}
            />
          ))}
        </MapArt>
      </Panel>

      <Float className="right-[52px] top-[86px] w-[340px] overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-zinc-100 p-3.5">
          <SearchField placeholder={`Search ${ctx.noun.vehicle}`} />
          <Button>All groups</Button>
        </div>
        <ul>
          {STATE.map((st, i) => {
            const v = ctx.vehicles[i];
            return (
              <li
                key={v.plate}
                className={`flex items-center gap-3 border-b border-zinc-100 px-3.5 py-2.5 last:border-b-0 ${i === 0 ? "bg-violet-50/70" : ""}`}
              >
                <VehicleTile kind={v.tile} marker={v.marker} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold leading-tight">{v.plate}</span>
                  <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{v.model}</span>
                </span>
                <span className="text-right">
                  <Pill tone={TONE[st.state]} dot>
                    {st.state}
                  </Pill>
                  <span className="mt-1 block font-mono text-[11px] text-zinc-500">{st.speed}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Float>

      <Float className="bottom-[44px] left-[96px] w-[360px] p-4">
        <div className="flex items-center gap-3">
          <VehicleTile kind={focus.tile} marker={focus.marker} size={38} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-semibold leading-tight">{focus.plate}</span>
            <span className="block truncate text-[11.5px] leading-tight text-zinc-500">
              {ctx.from} to {ctx.to}
            </span>
          </span>
          <Pill tone="green" dot>
            On {ctx.noun.trip}
          </Pill>
        </div>
        <div className="mt-3.5 grid grid-cols-3 gap-2 text-[11.5px] text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Gauge className="size-3.5 text-violet-600" />
            <b className="font-semibold text-zinc-900">61 km/h</b>
          </span>
          <span className="flex items-center gap-1.5">
            <Navigation className="size-3.5 text-violet-600" />
            <b className="font-semibold text-zinc-900">North east</b>
          </span>
          <span className="text-right">
            ETA <b className="font-semibold text-zinc-900">14:20</b>
          </span>
        </div>
        <div className="mt-3">
          <Bar value={58} />
        </div>
        <div className="mt-3 flex items-center gap-2 border-t border-zinc-100 pt-3">
          <Avatar name={ctx.people[0]} size={24} />
          <span className="flex-1 truncate text-[12px] font-medium">{ctx.people[0]}</span>
          <span className="text-[11.5px] text-zinc-500">{cap(ctx.noun.driver)}</span>
        </div>
      </Float>
    </Scene>
  );
}
