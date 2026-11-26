import { Plus, ShieldCheck } from "lucide-react";

import { CONTEXTS, type Context, type SampleVehicle } from "../contexts";
import { Avatar, Bar, Button, Float, Panel, Pill, Scene, SearchField, VehicleTile } from "../kit";

type Status = "Moving" | "Idle" | "Stopped" | "In workshop";

/** Seven rows over ctx.vehicles (six): the last reuses the first with its own details. */
const ROWS: { odo: string; status: Status }[] = [
  { odo: "1,84,620 km", status: "Moving" },
  { odo: "84,510 km", status: "Moving" },
  { odo: "62,380 km", status: "Idle" },
  { odo: "1,12,940 km", status: "Stopped" },
  { odo: "96,275 km", status: "Moving" },
  { odo: "41,860 km", status: "In workshop" },
  { odo: "58,130 km", status: "Stopped" },
];

const TONE = { Moving: "green", Idle: "amber", Stopped: "zinc", "In workshop": "red" } as const;

const COLS = "grid grid-cols-[176px_150px_76px_104px_100px_100px] items-center pl-16 pr-5";

const FLEET_TYPES = [
  { label: "Trucks", n: 11 },
  { label: "Trailers", n: 5 },
  { label: "Tippers", n: 4 },
  { label: "Buses", n: 2 },
  { label: "Cars and pickups", n: 2 },
];
const COLORS = ["bg-violet-600", "bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-zinc-400"];
/** How 24 vehicles split over one to five types. */
const SPLIT = [[24], [18, 6], [13, 7, 4], [11, 6, 5, 2], [11, 5, 4, 2, 2]];

const KIND = { truck: "Truck", bus: "Bus", car: "Car", suv: "SUV", sports: "Car", pickup: "Pickup", jeep: "Jeep", police: "Car" } as const;

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const plural = (s: string) => (/bus$/i.test(s) ? `${s}es` : `${s}s`);

/** "Excavator 02" is an excavator; a registration plate says nothing, so fall back to the marker. */
const typeOf = (v: SampleVehicle) => {
  const named = /^([A-Za-z ]+) \d+$/.exec(v.plate)?.[1];
  return named && named !== "Vehicle" ? named : KIND[v.marker];
};

/** Vehicles: the whole fleet in one list, with one vehicle's profile alongside. */
export default function Vehicles({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const n = ctx.noun;
  const [focus] = ctx.vehicles;
  // In a rental the customers are people, so cars are grouped by handover place instead.
  const groups = n.driver === n.customer ? ctx.stops : ctx.customers;
  const kinds = [...new Set(ctx.vehicles.map(typeOf))].slice(0, 5);
  const types = ctx.key === "fleet" ? FLEET_TYPES : kinds.map((k, i) => ({ label: plural(k), n: SPLIT[kinds.length - 1][i] }));
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title={cap(plural(n.vehicle))}
        subtitle={`24 ${plural(n.vehicle)} in 4 groups`}
        className="right-[48px] top-[44px] h-[612px] w-[790px]"
        flush
        actions={
          <>
            <SearchField placeholder="Search plate or model" />
            <Button primary>
              <Plus className="size-3.5" />
              Add {n.vehicle}
            </Button>
          </>
        }
      >
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span>{cap(n.vehicle)}</span>
          <span>Model</span>
          <span>Type</span>
          <span>Group</span>
          <span>Odometer</span>
          <span className="text-right">Status</span>
        </div>
        {ROWS.map((r, i) => {
          const v = ctx.vehicles[i % ctx.vehicles.length];
          return (
            <div key={i} className={`${COLS} h-[72px] border-b border-zinc-100 text-[12.5px] ${i === 0 ? "bg-violet-50/60" : ""}`}>
              <span className="flex min-w-0 items-center gap-2.5 pr-2">
                <VehicleTile kind={v.tile} marker={v.marker} size={34} />
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold leading-tight">{v.plate}</span>
                  <span className="mt-0.5 block truncate text-[11px] leading-tight text-zinc-500">
                    {i === 5 ? `No ${n.driver}` : ctx.people[i === 6 ? 1 : i]}
                  </span>
                </span>
              </span>
              <span className="truncate pr-3 text-zinc-700">{v.model}</span>
              <span className="truncate pr-2 text-zinc-700">{typeOf(v)}</span>
              <span className="truncate pr-2 text-zinc-700">{groups[i % 4]}</span>
              <span className="font-mono text-[11.5px] text-zinc-700">{r.odo}</span>
              <span className="text-right">
                <Pill tone={TONE[r.status]} dot>
                  {r.status}
                </Pill>
              </span>
            </div>
          );
        })}
      </Panel>

      <Float className="left-[48px] top-[120px] w-[290px] p-4">
        <div className="flex items-center gap-3">
          <VehicleTile kind={focus.tile} marker={focus.marker} size={40} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-semibold leading-tight">{focus.plate}</span>
            <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{focus.model}</span>
          </span>
          <Pill tone="green" dot>
            Moving
          </Pill>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <span className="rounded-xl bg-zinc-50 px-3 py-2.5">
            <span className="block text-[11px] text-zinc-500">Today</span>
            <span className="mt-0.5 block text-[16px] font-semibold leading-tight">212 km</span>
          </span>
          <span className="rounded-xl bg-zinc-50 px-3 py-2.5">
            <span className="block text-[11px] text-zinc-500">Odometer</span>
            <span className="mt-0.5 block text-[16px] font-semibold leading-tight">1,84,620</span>
          </span>
        </div>
        <div className="mt-3.5 flex items-center gap-2">
          <Avatar name={ctx.people[0]} hue={24} size={24} />
          <span className="min-w-0 flex-1 truncate text-[12px] font-medium">{ctx.people[0]}</span>
          <span className="text-[11.5px] text-zinc-500">{cap(n.driver)}</span>
        </div>
        <div className="mt-3.5 border-t border-zinc-100 pt-3">
          <div className="mb-1.5 flex justify-between text-[12px]">
            <span className="text-zinc-500">Next service</span>
            <span className="font-semibold">In 1,400 km</span>
          </div>
          <Bar value={86} tone="amber" />
        </div>
        <p className="mt-3.5 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-2 text-[11.5px] font-medium text-emerald-700">
          <ShieldCheck className="size-3.5" />
          All 4 documents valid
        </p>
      </Float>

      <Float className="bottom-[44px] left-[48px] w-[290px] p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-[12.5px] font-semibold">By type</p>
          <p className="text-[11.5px] text-zinc-500">24 {plural(n.vehicle)}</p>
        </div>
        <div className="mt-3 flex h-2 gap-0.5 overflow-hidden rounded-full">
          {types.map((t, i) => (
            <i key={t.label} className={COLORS[i]} style={{ flex: t.n }} />
          ))}
        </div>
        <ul className="mt-3 space-y-1.5 text-[12px]">
          {types.map((t, i) => (
            <li key={t.label} className="flex items-center gap-2">
              <i className={`size-2 rounded-full ${COLORS[i]}`} />
              <span className="flex-1 text-zinc-700">{t.label}</span>
              <span className="font-semibold">{t.n}</span>
            </li>
          ))}
        </ul>
      </Float>
    </Scene>
  );
}
