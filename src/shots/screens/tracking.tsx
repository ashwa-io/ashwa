import { Gauge, Navigation } from "lucide-react";

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

const FLEET: { plate: string; model: string; kind: "truck" | "bus" | "car"; hue: number; speed: string; state: "Moving" | "Stopped" | "Idle" }[] = [
  { plate: "HR 26 AS 1024", model: "Tata Signa 4825", kind: "truck", hue: 262, speed: "61 km/h", state: "Moving" },
  { plate: "HR 39 BK 7741", model: "Ashok Leyland Dost", kind: "truck", hue: 150, speed: "46 km/h", state: "Moving" },
  { plate: "HR 20 CM 3308", model: "Mahindra Bolero", kind: "car", hue: 205, speed: "0 km/h", state: "Idle" },
  { plate: "HR 51 DE 9025", model: "Eicher Pro 2049", kind: "truck", hue: 28, speed: "38 km/h", state: "Moving" },
  { plate: "HR 12 FA 6610", model: "Tata Starbus", kind: "bus", hue: 340, speed: "0 km/h", state: "Stopped" },
];

const TONE = { Moving: "green", Stopped: "zinc", Idle: "amber" } as const;

/** Live tracking: the fleet on a map, the vehicle list, and one vehicle in focus. */
export default function Tracking() {
  return (
    <Scene>
      <Panel
        title="Live tracking"
        subtitle="24 vehicles, updated 3 seconds ago"
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
          <MapPin x={640} y={112} label="Nagpur depot" />
          <MapVehicle x={404} y={208} angle={-24} label="HR 26 AS 1024" />
          <MapVehicle x={360} y={292} angle={32} kind="suv" />
          <MapVehicle x={150} y={332} angle={-18} kind="car" />
          <MapVehicle x={610} y={282} angle={-40} kind="pickup" />
          <MapVehicle x={300} y={470} angle={110} kind="sports" />
        </MapArt>
      </Panel>

      <Float className="right-[52px] top-[86px] w-[340px] overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-zinc-100 p-3.5">
          <SearchField placeholder="Search plate or model" />
          <Button>All groups</Button>
        </div>
        <ul>
          {FLEET.map((v, i) => (
            <li
              key={v.plate}
              className={`flex items-center gap-3 border-b border-zinc-100 px-3.5 py-2.5 last:border-b-0 ${i === 0 ? "bg-violet-50/70" : ""}`}
            >
              <VehicleTile kind={v.kind} hue={v.hue} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold leading-tight">{v.plate}</span>
                <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{v.model}</span>
              </span>
              <span className="text-right">
                <Pill tone={TONE[v.state]} dot>
                  {v.state}
                </Pill>
                <span className="mt-1 block font-mono text-[11px] text-zinc-500">{v.speed}</span>
              </span>
            </li>
          ))}
        </ul>
      </Float>

      <Float className="bottom-[44px] left-[96px] w-[360px] p-4">
        <div className="flex items-center gap-3">
          <VehicleTile kind="truck" hue={262} size={38} />
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-semibold leading-tight">HR 26 AS 1024</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Raipur to Nagpur</span>
          </span>
          <Pill tone="green" dot>
            On trip
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
          <Avatar name="Rakesh Yadav" hue={24} size={24} />
          <span className="flex-1 text-[12px] font-medium">Rakesh Yadav</span>
          <span className="text-[11.5px] text-zinc-500">168 of 290 km</span>
        </div>
      </Float>
    </Scene>
  );
}
