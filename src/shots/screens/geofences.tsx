import { Ban, Building2, LogIn, LogOut, Plus, Timer, TriangleAlert, Warehouse } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { Button, Float, MapArt, MapVehicle, MapZone, Panel, Pill, Scene } from "../kit";

const plural = (s: string) => (s === "bus" ? "buses" : `${s}s`);

/** An empty name stands for the world's destination. */
const ZONES = [
  { name: "Depot", type: "Home base, 400 m radius", inside: 2, icon: Warehouse, tile: "bg-violet-50 text-violet-600" },
  { name: "", type: "Destination, 350 m radius", inside: 2, icon: Building2, tile: "bg-emerald-50 text-emerald-600" },
  { name: "No-go area", type: "Restricted, 300 m radius", inside: 0, icon: Ban, tile: "bg-red-50 text-red-600" },
];

const EVENTS = [
  { what: "Entered {to}", v: 1, time: "11:42", icon: LogIn, tile: "bg-emerald-50 text-emerald-600" },
  { what: "Exited Depot", v: 0, time: "11:18", icon: LogOut, tile: "bg-violet-50 text-violet-600" },
  { what: "Dwell over 30 min, {to}", v: 2, time: "10:56", icon: Timer, tile: "bg-amber-50 text-amber-600" },
  { what: "Entered No-go area", v: 3, time: "09:31", icon: TriangleAlert, tile: "bg-red-50 text-red-600" },
];

/** Geofences: zones drawn on the map, who is inside each, and what crossed a boundary today. */
export default function Geofences({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const vs = ctx.vehicles;
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title="Geofences"
        subtitle={`3 zones, 14 ${plural(ctx.noun.vehicle)} watched`}
        className="left-[48px] top-[44px] h-[540px] w-[690px]"
        flush
        actions={
          <Button primary>
            <Plus className="size-3.5" />
            New zone
          </Button>
        }
      >
        <MapArt>
          <MapZone x={415} y={212} r={66} label="Depot" />
          <MapZone x={520} y={364} r={60} color="#059669" label={ctx.to} />
          <MapZone x={200} y={385} r={46} color="#dc2626" label="No-go area" />
          <MapVehicle x={385} y={215} angle={-25} kind={vs[1].marker} />
          <MapVehicle x={452} y={217} angle={51} kind={vs[2].marker} />
          <MapVehicle x={494} y={352} angle={22} kind={vs[3].marker} />
          <MapVehicle x={548} y={376} angle={24} kind={vs[4].marker} />
          <MapVehicle x={170} y={156} angle={54} kind={vs[5].marker} />
          <MapVehicle x={562} y={139} angle={-21} kind={vs[0].marker} label={vs[0].plate} />
        </MapArt>
      </Panel>

      <Float className="right-[48px] top-[112px] w-[372px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Zones</span>
          <span className="text-[11.5px] text-zinc-500">3 active</span>
        </div>
        <ul>
          {ZONES.map((z) => (
            <li key={z.type} className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0">
              <span className={`grid size-8 shrink-0 place-items-center rounded-lg ${z.tile}`}>
                <z.icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold leading-tight">{z.name || ctx.to}</span>
                <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{z.type}</span>
              </span>
              <Pill tone={z.inside ? "violet" : "zinc"}>
                {z.inside} inside
              </Pill>
            </li>
          ))}
        </ul>
      </Float>

      <Float className="bottom-[44px] right-[84px] w-[400px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Zone events</span>
          <span className="text-[11.5px] text-zinc-500">Today</span>
        </div>
        <ul>
          {EVENTS.map((e) => (
            <li key={e.v} className="flex items-center gap-3 border-b border-zinc-100 px-4 py-2.5 last:border-b-0">
              <span className={`grid size-7 shrink-0 place-items-center rounded-full ${e.tile}`}>
                <e.icon className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-semibold leading-tight">{e.what.replace("{to}", ctx.to)}</span>
                <span className="mt-0.5 block truncate font-mono text-[11px] leading-tight text-zinc-500">{vs[e.v].plate}</span>
              </span>
              <span className="font-mono text-[11.5px] text-zinc-500">{e.time}</span>
            </li>
          ))}
        </ul>
      </Float>
    </Scene>
  );
}
