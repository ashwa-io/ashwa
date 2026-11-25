import { BellRing, ChevronDown, Link2, SlidersHorizontal } from "lucide-react";

import { CONTEXTS } from "../contexts";
import {
  Avatar,
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

const ctx = CONTEXTS.fleet;

const ROWS: { state: "Moving" | "Idle" | "Stopped"; speed: string; where: string; seen: string }[] = [
  { state: "Moving", speed: "61 km/h", where: "NH 53, near Durg toll", seen: "3 s ago" },
  { state: "Moving", speed: "46 km/h", where: "Ring Road East", seen: "5 s ago" },
  { state: "Idle", speed: "0 km/h", where: "Bhilai yard, loading bay", seen: "12 s ago" },
  { state: "Moving", speed: "38 km/h", where: "Civil Lines", seen: "4 s ago" },
  { state: "Stopped", speed: "0 km/h", where: "Transport Nagar depot", seen: "2 min ago" },
];

const TONE = { Moving: "green", Idle: "amber", Stopped: "zinc" } as const;

function Select({ label, value }: { label: string; value: string }) {
  return (
    <span className="block">
      <span className="text-[11px] text-zinc-500">{label}</span>
      <span className="mt-1 flex h-8 items-center justify-between rounded-lg border border-zinc-200 bg-white px-2.5 text-[12px] font-medium">
        {value}
        <ChevronDown className="size-3.5 text-zinc-400" />
      </span>
    </span>
  );
}

/** The whole live picture in one frame: map, vehicle table, filters and an alert. */
export default function Overview() {
  return (
    <Scene>
      <Panel
        title="Live map"
        subtitle={ctx.summary}
        className="left-[40px] top-[40px] h-[420px] w-[610px]"
        flush
        actions={
          <Pill tone="green" dot>
            Live
          </Pill>
        }
      >
        <MapArt>
          <MapRoute road="highway" done={0.56} />
          <MapRoute road="ring" color="#059669" done={0.42} />
          <MapPin x={640} y={112} label={`${ctx.to} depot`} />
          <MapVehicle x={392} y={212} angle={-24} label={ctx.vehicles[0].plate} />
          <MapVehicle x={150} y={332} angle={-18} kind="car" />
          <MapVehicle x={352} y={286} angle={32} kind="suv" />
          <MapVehicle x={610} y={282} angle={-40} kind="pickup" />
        </MapArt>
      </Panel>

      <Float className="right-[40px] top-[40px] w-[400px] p-4">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-sans text-[13px] font-semibold">
            <SlidersHorizontal className="size-4 text-violet-600" />
            Filter the fleet
          </h2>
          <span className="text-[11.5px] font-medium text-violet-700">Reset</span>
        </div>
        <div className="mt-3">
          <SearchField placeholder="Plate, driver or place" />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[11.5px] font-medium text-white">All 24</span>
          <Pill tone="green" dot>
            Moving 18
          </Pill>
          <Pill tone="amber" dot>
            Idle 2
          </Pill>
          <Pill tone="zinc" dot>
            Stopped 4
          </Pill>
        </div>
        <div className="mt-3.5 grid grid-cols-2 gap-3">
          <Select label="Group" value="Long haul" />
          <Select label="Vehicle type" value="Trucks" />
        </div>
        <div className="mt-3.5 flex items-center justify-between border-t border-zinc-100 pt-3">
          <span className="text-[12px] font-medium">Show trails on the map</span>
          <span className="flex h-5 w-9 items-center justify-end rounded-full bg-violet-600 px-0.5">
            <i className="size-4 rounded-full bg-white" />
          </span>
        </div>
      </Float>

      <Panel
        title="Vehicles"
        subtitle="Sorted by last update"
        className="left-[250px] top-[322px] h-[338px] w-[830px]"
        flush
        actions={
          <>
            <Button>Export</Button>
            <Button primary>
              <Link2 className="size-3.5" />
              Share live link
            </Button>
          </>
        }
      >
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-100 text-[11px] font-medium text-zinc-500">
              <th className="py-2 pl-5 font-medium">Vehicle</th>
              <th className="font-medium">Driver</th>
              <th className="font-medium">Status</th>
              <th className="font-medium">Speed</th>
              <th className="font-medium">Where</th>
              <th className="pr-5 text-right font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => {
              const v = ctx.vehicles[i];
              return (
                <tr key={v.plate} className="border-b border-zinc-100 last:border-b-0">
                  <td className="py-2 pl-5">
                    <span className="flex items-center gap-2.5">
                      <VehicleTile kind={v.tile} marker={v.marker} hue={v.hue} size={26} />
                      <span>
                        <span className="block text-[13px] font-semibold leading-tight">{v.plate}</span>
                        <span className="block text-[11.5px] leading-tight text-zinc-500">{v.model}</span>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="flex items-center gap-2">
                      <Avatar name={ctx.people[i]} hue={v.hue} size={24} />
                      <span className="text-[12.5px] font-medium">{ctx.people[i]}</span>
                    </span>
                  </td>
                  <td>
                    <Pill tone={TONE[r.state]} dot>
                      {r.state}
                    </Pill>
                  </td>
                  <td className="font-mono text-[12px]">{r.speed}</td>
                  <td className="text-[12.5px] text-zinc-600">{r.where}</td>
                  <td className="pr-5 text-right font-mono text-[11.5px] text-zinc-500">{r.seen}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Panel>

      <Float className="bottom-[46px] left-[40px] w-[190px] border-zinc-800 bg-zinc-900 p-3 text-white">
        <span className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-red-500">
            <BellRing className="size-4" />
          </span>
          <span className="text-[12px] font-semibold leading-tight">Overspeed alert</span>
        </span>
        <p className="mt-2 text-[11.5px] leading-snug text-zinc-300">
          {ctx.vehicles[1].plate} at 92 km/h in a 60 zone
        </p>
        <p className="mt-1.5 font-mono text-[10.5px] text-zinc-500">Ring Road East, now</p>
      </Float>
    </Scene>
  );
}
