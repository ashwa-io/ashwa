import { Caravan, Construction, Truck, TriangleAlert, Zap } from "lucide-react";

import { Button, Float, MapArt, MapZone, Panel, Pill, ROADS, type RoadKey, Scene } from "../kit";

const ON = "#059669";
const OFF = "#71717a";
const RED = "#dc2626";

const ASSETS = [
  { name: "Excavator 02", site: "Flyover site", icon: Construction, engine: true, hours: "6.4 h", x: 630, y: 342, color: ON },
  { name: "Transit mixer 5", site: "Flyover site", icon: Truck, engine: true, hours: "4.1 h", x: 623, y: 273, color: ON },
  { name: "Genset 11", site: "Pipeline site", icon: Zap, engine: false, hours: "2.8 h", x: 287, y: 147, color: OFF },
  { name: "Trailer 19", site: "Outside Flyover site", icon: Caravan, engine: false, hours: "0.0 h", x: 433, y: 327, color: RED },
];

/** A machine on the map: a filled dot in its status colour, with its name beside it. */
function Machine({ x, y, color, label }: { x: number; y: number; color: string; label: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {color === RED ? <circle r="15" fill={color} opacity="0.18" /> : null}
      <circle r="8" fill={color} stroke="#fff" strokeWidth="2.5" />
      <text x="13" y="4" fontSize="11" fontWeight="600" fill="#18181b" fontFamily="var(--ff-body), sans-serif" stroke="#fff" strokeWidth="3" paintOrder="stroke">
        {label}
      </text>
    </g>
  );
}

/** Part of a named road, from share `from` to share `to` of its length. */
function Trail({ road, from, to }: { road: RoadKey; from: number; to: number }) {
  return (
    <path d={ROADS[road]} fill="none" stroke={RED} strokeOpacity="0.75" strokeWidth="3.5" strokeLinecap="round" pathLength={1} strokeDasharray={`${to - from} 1`} strokeDashoffset={-from} />
  );
}

/** Assets: machines on work sites, which engines are running, and one that left when it should not have. */
export default function Assets() {
  return (
    <Scene tint="amber">
      <Panel
        title="Site equipment"
        subtitle="2 sites, 18 assets, updated 1 minute ago"
        className="right-[48px] top-[44px] h-[530px] w-[922px]"
        flush
        actions={
          <>
            <Pill tone="green" dot>
              11 engines on
            </Pill>
            <Pill tone="zinc" dot>
              6 off
            </Pill>
            <Pill tone="red" dot>
              1 alert
            </Pill>
          </>
        }
      >
        <MapArt>
          <MapZone x={630} y={292} r={104} color="#d97706" label="Flyover site" />
          <MapZone x={305} y={140} r={60} color="#d97706" label="Pipeline site" />
          <Trail road="east" from={0} to={0.32} />
          <Trail road="ring" from={0.55} to={0.675} />
          {ASSETS.map((a) => (
            <Machine key={a.name} x={a.x} y={a.y} color={a.color} label={a.name} />
          ))}
        </MapArt>
      </Panel>

      <Float className="bottom-[44px] left-[48px] w-[384px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Assets</span>
          <span className="text-[11.5px] text-zinc-500">Hours today</span>
        </div>
        <ul>
          {ASSETS.map((a) => (
            <li key={a.name} className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0">
              <span className={`grid size-8 shrink-0 place-items-center rounded-lg ${a.color === RED ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}>
                <a.icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold leading-tight">{a.name}</span>
                <span className={`block text-[11.5px] leading-tight ${a.color === RED ? "text-red-600" : "text-zinc-500"}`}>{a.site}</span>
              </span>
              <Pill tone={a.engine ? "green" : "zinc"} dot>
                {a.engine ? "Engine on" : "Engine off"}
              </Pill>
              <span className="w-10 text-right font-mono text-[12px] font-medium">{a.hours}</span>
            </li>
          ))}
        </ul>
      </Float>

      <Float className="bottom-[44px] right-[84px] w-[348px] p-4">
        <div className="flex gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-red-50 text-red-600">
            <TriangleAlert className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-semibold leading-tight">Trailer 19 moved outside work hours</span>
            <span className="mt-1 block text-[11.5px] leading-snug text-zinc-500">
              Left Flyover site at 23:14, now 1.2 km away on Ring Road East.
            </span>
          </span>
        </div>
        <div className="mt-3.5 flex gap-2">
          <Button primary>View trail</Button>
          <Button>Acknowledge</Button>
        </div>
      </Float>
    </Scene>
  );
}
