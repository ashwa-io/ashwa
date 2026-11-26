import { CalendarDays, ChevronLeft, Play, SkipBack, SkipForward } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { MapArt, MapPin, MapRoute, MapVehicle, MShell, VehicleTile } from "../kit";

const SPEEDS = ["1x", "2x", "4x", "8x"];

/** Phone: a day's route replayed on the map. */
export default function MobilePlayback({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const [v] = ctx.vehicles;
  return (
    <MShell tab="tracking">
      <div className="relative h-full">
        <div className="absolute inset-0">
          <MapArt>
            <MapRoute road="highway" done={0.6} />
            <MapPin x={318} y={246} label="Halt 38 min" />
            <MapVehicle x={436} y={192} angle={-25} kind={v.marker} label="11:42" />
          </MapArt>
        </div>

        <div className="absolute inset-x-4 top-14 flex items-center justify-between">
          <span className="grid size-10 place-items-center rounded-full bg-white shadow-md">
            <ChevronLeft className="size-5" />
          </span>
          <span className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[12.5px] font-semibold shadow-md">
            <CalendarDays className="size-4 text-violet-600" />
            Tue, 17 Jun
          </span>
          <span className="size-10" />
        </div>

        <div className="absolute inset-x-3 bottom-3 rounded-3xl bg-white p-4 shadow-[0_18px_40px_-12px_rgb(24_24_27/0.35)]">
          <div className="flex items-center gap-3">
            <VehicleTile kind={v.tile} marker={v.marker} size={44} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[16px] font-semibold leading-tight">{v.plate}</span>
              <span className="block text-[12.5px] leading-tight text-zinc-500">312 km, 3 halts, top 78 km/h</span>
            </span>
          </div>

          <div className="relative mt-5 h-5">
            <span className="absolute inset-x-0 top-[7px] h-1.5 rounded-full bg-zinc-100" />
            <span className="absolute left-0 top-[7px] h-1.5 w-[48%] rounded-full bg-violet-600" />
            {[22, 61, 83].map((p) => (
              <i key={p} className="absolute top-[5px] h-2.5 w-[3px] rounded-full bg-amber-500" style={{ left: `${p}%` }} />
            ))}
            <span className="absolute left-[48%] top-0 size-5 -translate-x-1/2 rounded-full border-[3px] border-violet-600 bg-white shadow" />
          </div>
          <div className="mt-1.5 flex items-center justify-between font-mono text-[12px] text-zinc-500">
            <span>06:10</span>
            <b className="rounded-md bg-violet-50 px-2 py-0.5 font-semibold text-violet-700">11:42</b>
            <span>17:35</span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-zinc-100 text-zinc-700">
              <SkipBack className="size-[18px]" />
            </span>
            <span className="grid size-14 place-items-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/30">
              <Play className="ml-0.5 size-6 fill-current" />
            </span>
            <span className="grid size-11 place-items-center rounded-full bg-zinc-100 text-zinc-700">
              <SkipForward className="size-[18px]" />
            </span>
            <span className="ml-auto flex gap-1 rounded-full bg-zinc-100 p-1">
              {SPEEDS.map((s) => (
                <span
                  key={s}
                  className={`grid h-8 w-9 place-items-center rounded-full text-[12.5px] font-semibold ${s === "2x" ? "bg-white text-violet-700 shadow-sm" : "text-zinc-500"}`}
                >
                  {s}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </MShell>
  );
}
