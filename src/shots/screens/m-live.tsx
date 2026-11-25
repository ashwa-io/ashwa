import { ChevronLeft, Gauge, History, Phone, Share2 } from "lucide-react";

import { Avatar, Bar, MapArt, MapPin, MapRoute, MapVehicle, MShell, Pill, VehicleTile } from "../kit";

/** Phone: one vehicle live on the map, with its trip card. */
export default function MobileLive() {
  return (
    <MShell tab="tracking">
      <div className="relative h-full">
        <div className="absolute inset-0">
          <MapArt>
            <MapRoute road="ring" done={0.52} />
            <MapPin x={96} y={0} />
            <MapPin x={540} y={372} label="Customer yard" />
            <MapVehicle x={316} y={268} angle={28} label="HR 26 AS 1024" />
          </MapArt>
        </div>

        <div className="absolute inset-x-4 top-14 flex items-center justify-between">
          <span className="grid size-10 place-items-center rounded-full bg-white shadow-md">
            <ChevronLeft className="size-5" />
          </span>
          <span className="rounded-full bg-white px-3.5 py-2 text-[12.5px] font-semibold shadow-md">Today</span>
          <span className="grid size-10 place-items-center rounded-full bg-white shadow-md">
            <Share2 className="size-[18px]" />
          </span>
        </div>

        <div className="absolute inset-x-3 bottom-3 rounded-3xl bg-white p-4 shadow-[0_18px_40px_-12px_rgb(24_24_27/0.35)]">
          <div className="flex items-center gap-3">
            <VehicleTile kind="truck" hue={262} size={44} />
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] font-semibold leading-tight">HR 26 AS 1024</span>
              <span className="block text-[12.5px] leading-tight text-zinc-500">Tata Signa 4825</span>
            </span>
            <Pill tone="green" dot>
              Live
            </Pill>
          </div>
          <div className="mt-4 flex items-center justify-between text-[12.5px]">
            <span className="font-semibold">Raipur</span>
            <span className="flex items-center gap-1.5 text-zinc-500">
              <Gauge className="size-4 text-violet-600" />
              <b className="font-semibold text-zinc-900">61 km/h</b>
            </span>
            <span className="font-semibold">Nagpur</span>
          </div>
          <div className="mt-2">
            <Bar value={58} />
          </div>
          <p className="mt-2 text-[12px] text-zinc-500">168 of 290 km, arrives 14:20</p>
          <div className="mt-3.5 flex items-center gap-2.5 border-t border-zinc-100 pt-3.5">
            <Avatar name="Rakesh Yadav" hue={24} size={34} />
            <span className="min-w-0 flex-1">
              <span className="block text-[13.5px] font-semibold leading-tight">Rakesh Yadav</span>
              <span className="block text-[12px] leading-tight text-zinc-500">Driver</span>
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-violet-50 text-violet-700">
              <History className="size-[18px]" />
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-violet-600 text-white">
              <Phone className="size-[18px]" />
            </span>
          </div>
        </div>
      </div>
    </MShell>
  );
}
