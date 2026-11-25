import { Search, SlidersHorizontal } from "lucide-react";

import { MShell, Pill, VehicleTile } from "../kit";

const FLEET: { plate: string; model: string; kind: "truck" | "bus" | "car"; hue: number; speed: number }[] = [
  { plate: "HR 26 AS 1024", model: "Tata Signa 4825", kind: "truck", hue: 262, speed: 61 },
  { plate: "HR 39 BK 7741", model: "Ashok Leyland Dost", kind: "truck", hue: 150, speed: 46 },
  { plate: "HR 51 DE 9025", model: "Eicher Pro 2049", kind: "truck", hue: 28, speed: 38 },
  { plate: "HR 12 FA 6610", model: "Tata Starbus", kind: "bus", hue: 340, speed: 27 },
  { plate: "HR 20 CM 3308", model: "Mahindra Bolero", kind: "car", hue: 205, speed: 54 },
  { plate: "HR 26 BR 7302", model: "Toyota Innova Crysta", kind: "car", hue: 180, speed: 72 },
  { plate: "HR 55 GT 4186", model: "BharatBenz 2823", kind: "truck", hue: 48, speed: 49 },
];

/** Phone: the vehicle list. */
export default function MobileFleet() {
  return (
    <MShell tab="tracking">
      <div className="flex h-full flex-col px-5 pt-[56px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-bold leading-none tracking-tight">Tracking</h1>
          <span className="grid size-10 place-items-center rounded-full border border-zinc-200 bg-white">
            <SlidersHorizontal className="size-[18px]" />
          </span>
        </div>
        <div className="mt-4 flex h-11 items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-3.5 text-[14px] text-zinc-400">
          <Search className="size-[18px]" />
          Search plate or model
        </div>
        <p className="mt-3.5 text-[12.5px] text-zinc-500">
          <b className="font-semibold text-zinc-900">24 vehicles</b>, 18 live right now
        </p>
        <ul className="mt-1.5">
          {FLEET.map((v) => (
            <li key={v.plate} className="flex h-[70px] items-center gap-3 border-b border-zinc-200/70 last:border-b-0">
              <VehicleTile kind={v.kind} hue={v.hue} size={44} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold leading-tight">{v.plate}</span>
                <span className="mt-0.5 block truncate text-[12.5px] leading-tight text-zinc-500">{v.model}</span>
              </span>
              <span className="text-right">
                <Pill tone="green" dot>
                  Live
                </Pill>
                <span className="mt-1.5 block font-mono text-[12px] text-zinc-600">{v.speed} km/h</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </MShell>
  );
}
