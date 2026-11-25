import { Plus, ShieldCheck } from "lucide-react";

import { Avatar, Bar, Button, Float, Panel, Pill, Scene, SearchField, VehicleTile } from "../kit";

type Status = "Moving" | "Idle" | "Stopped" | "In workshop";

const VEHICLES: { plate: string; driver: string; kind: "truck" | "bus" | "car"; hue: number; model: string; type: string; group: string; odo: string; status: Status }[] = [
  { plate: "HR 26 AS 1024", driver: "Rakesh Yadav", kind: "truck", hue: 262, model: "Tata Signa 4825", type: "Trailer", group: "Long haul", odo: "1,84,620 km", status: "Moving" },
  { plate: "CG 04 MX 2217", driver: "Sunil Kumar", kind: "truck", hue: 150, model: "Ashok Leyland 2820", type: "Truck", group: "Long haul", odo: "84,510 km", status: "Moving" },
  { plate: "CG 07 BQ 5530", driver: "Imran Qureshi", kind: "truck", hue: 28, model: "Eicher Pro 2049", type: "Truck", group: "Raipur local", odo: "62,380 km", status: "Idle" },
  { plate: "HR 39 BK 7741", driver: "Harpreet Singh", kind: "truck", hue: 205, model: "Tata Prima 2830", type: "Tipper", group: "Korba mines", odo: "1,12,940 km", status: "Stopped" },
  { plate: "HR 12 FA 6610", driver: "Manoj Verma", kind: "bus", hue: 340, model: "Tata Starbus", type: "Bus", group: "Staff", odo: "96,275 km", status: "Moving" },
  { plate: "HR 51 DE 9025", driver: "No driver", kind: "truck", hue: 48, model: "Ashok Leyland Dost", type: "Pickup", group: "Raipur local", odo: "41,860 km", status: "In workshop" },
  { plate: "HR 20 CM 3308", driver: "Dinesh Sahu", kind: "car", hue: 180, model: "Mahindra Bolero", type: "Car", group: "Staff", odo: "58,130 km", status: "Stopped" },
];

const TONE = { Moving: "green", Idle: "amber", Stopped: "zinc", "In workshop": "red" } as const;

const COLS = "grid grid-cols-[176px_150px_76px_104px_100px_100px] items-center pl-16 pr-5";

const TYPES = [
  { label: "Trucks", n: 11, color: "bg-violet-600" },
  { label: "Trailers", n: 5, color: "bg-sky-500" },
  { label: "Tippers", n: 4, color: "bg-emerald-500" },
  { label: "Buses", n: 2, color: "bg-amber-500" },
  { label: "Cars and pickups", n: 2, color: "bg-zinc-400" },
];

/** Vehicles: the whole fleet in one list, with one vehicle's profile alongside. */
export default function Vehicles() {
  return (
    <Scene tint="emerald">
      <Panel
        title="Vehicles"
        subtitle="24 vehicles in 4 groups"
        className="right-[48px] top-[44px] h-[612px] w-[790px]"
        flush
        actions={
          <>
            <SearchField placeholder="Search plate or model" />
            <Button primary>
              <Plus className="size-3.5" />
              Add vehicle
            </Button>
          </>
        }
      >
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span>Vehicle</span>
          <span>Model</span>
          <span>Type</span>
          <span>Group</span>
          <span>Odometer</span>
          <span className="text-right">Status</span>
        </div>
        {VEHICLES.map((v, i) => (
          <div key={v.plate} className={`${COLS} h-[72px] border-b border-zinc-100 text-[12.5px] ${i === 0 ? "bg-violet-50/60" : ""}`}>
            <span className="flex items-center gap-2.5">
              <VehicleTile kind={v.kind} hue={v.hue} size={34} />
              <span>
                <span className="block text-[13px] font-semibold leading-tight">{v.plate}</span>
                <span className="mt-0.5 block text-[11px] leading-tight text-zinc-500">{v.driver}</span>
              </span>
            </span>
            <span className="text-zinc-700">{v.model}</span>
            <span className="text-zinc-700">{v.type}</span>
            <span className="text-zinc-700">{v.group}</span>
            <span className="font-mono text-[11.5px] text-zinc-700">{v.odo}</span>
            <span className="text-right">
              <Pill tone={TONE[v.status]} dot>
                {v.status}
              </Pill>
            </span>
          </div>
        ))}
      </Panel>

      <Float className="left-[48px] top-[120px] w-[290px] p-4">
        <div className="flex items-center gap-3">
          <VehicleTile kind="truck" hue={262} size={40} />
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-semibold leading-tight">HR 26 AS 1024</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Tata Signa 4825</span>
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
          <Avatar name="Rakesh Yadav" hue={24} size={24} />
          <span className="flex-1 text-[12px] font-medium">Rakesh Yadav</span>
          <span className="text-[11.5px] text-zinc-500">Driver</span>
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
          <p className="text-[11.5px] text-zinc-500">24 vehicles</p>
        </div>
        <div className="mt-3 flex h-2 gap-0.5 overflow-hidden rounded-full">
          {TYPES.map((t) => (
            <i key={t.label} className={t.color} style={{ flex: t.n }} />
          ))}
        </div>
        <ul className="mt-3 space-y-1.5 text-[12px]">
          {TYPES.map((t) => (
            <li key={t.label} className="flex items-center gap-2">
              <i className={`size-2 rounded-full ${t.color}`} />
              <span className="flex-1 text-zinc-700">{t.label}</span>
              <span className="font-semibold">{t.n}</span>
            </li>
          ))}
        </ul>
      </Float>
    </Scene>
  );
}
