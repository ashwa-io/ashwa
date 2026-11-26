import { Search, SlidersHorizontal } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { MShell, Pill, VehicleTile } from "../kit";

const plural = (s: string) => (s === "bus" ? "buses" : `${s}s`);

/** Seven rows; a world has six vehicles, so the last row reuses the first. */
const SPEEDS = [61, 46, 38, 27, 54, 72, 49];

/** Phone: the vehicle list. */
export default function MobileFleet({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
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
          <b className="font-semibold text-zinc-900">24 {plural(ctx.noun.vehicle)}</b>, 18 live right now
        </p>
        <ul className="mt-1.5">
          {SPEEDS.map((speed, i) => {
            const v = ctx.vehicles[i % ctx.vehicles.length];
            return (
            <li key={i} className="flex h-[70px] items-center gap-3 border-b border-zinc-200/70 last:border-b-0">
              <VehicleTile kind={v.tile} marker={v.marker} size={44} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold leading-tight">{v.plate}</span>
                <span className="mt-0.5 block truncate text-[12.5px] leading-tight text-zinc-500">{v.model}</span>
              </span>
              <span className="text-right">
                <Pill tone="green" dot>
                  Live
                </Pill>
                <span className="mt-1.5 block font-mono text-[12px] text-zinc-600">{speed} km/h</span>
              </span>
            </li>
            );
          })}
        </ul>
      </div>
    </MShell>
  );
}
