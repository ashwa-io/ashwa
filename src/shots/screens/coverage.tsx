import { CloudUpload } from "lucide-react";

import { Bar, Float, MapArt, MapPin, MapVehicle, Panel, Pill, ROADS, type RoadKey, Scene, type Tone } from "../kit";

const WARDS: { name: string; scanned: number; total: number }[] = [
  { name: "Ward 12", scanned: 1284, total: 1310 },
  { name: "Ward 13", scanned: 1096, total: 1172 },
  { name: "Ward 14", scanned: 742, total: 1208 },
  { name: "Ward 15", scanned: 318, total: 1146 },
];

/** Points along the collection streets as [x, y, heading]: households sit on both sides of each. */
const COVERED: [number, number, number][] = [
  [152, 128, 58], [170, 156, 54], [200, 191, 46], [233, 221, 39], [270, 248, 33], [309, 272, 28], [350, 292, 25],
  [263, 199, -70], [278, 164, -63], [298, 131, -55], [322, 101, -46], [350, 77, -37], [383, 56, -30],
];
const PENDING: [number, number, number][] = [
  [433, 327, 22], [475, 344, 22], [517, 362, 23],
];

const fmt = (n: number) => n.toLocaleString("en-IN");

/** Part of a named road, from share `from` to share `to` of its length. */
function Leg({ road, from, to, color }: { road: RoadKey; from: number; to: number; color: string }) {
  return (
    <path d={ROADS[road]} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" pathLength={1} strokeDasharray={`${to - from} 1`} strokeDashoffset={-from} />
  );
}

/** Household dots on both sides of a street point, and a second pair a little further along. */
function Homes({ at, scanned }: { at: [number, number, number][]; scanned: boolean }) {
  return (
    <>
      {at.flatMap(([x, y, deg]) => {
        const a = (deg * Math.PI) / 180;
        return [
          [0, 14],
          [0, -14],
          [20, 15],
          [20, -15],
        ].map(([along, side]) => (
          <circle
            key={`${x}-${y}-${along}-${side}`}
            cx={x + Math.cos(a) * along - Math.sin(a) * side}
            cy={y + Math.sin(a) * along + Math.cos(a) * side}
            r="2.8"
            fill={scanned ? "#059669" : "#fff"}
            stroke={scanned ? "#fff" : "#dc2626"}
            strokeWidth="1.2"
          />
        ));
      })}
    </>
  );
}

/** Waste collection coverage: streets done and pending, households scanned, and the report sent on. */
export default function Coverage() {
  return (
    <Scene tint="emerald">
      <Panel
        title="Collection coverage"
        subtitle="Zone 3, morning shift, 3,440 of 4,836 households scanned"
        className="right-[48px] top-[44px] h-[540px] w-[772px]"
        flush
        actions={
          <span className="flex items-center gap-3.5 text-[11.5px] text-zinc-600">
            <span className="flex items-center gap-1.5">
              <i className="h-1 w-4 rounded-full bg-emerald-600" />
              Covered
            </span>
            <span className="flex items-center gap-1.5">
              <i className="h-1 w-4 rounded-full bg-red-600" />
              Pending
            </span>
            <span className="flex items-center gap-1.5">
              <i className="size-2 rounded-full bg-emerald-600" />
              Household scanned
            </span>
          </span>
        }
      >
        <MapArt>
          <Leg road="ring" from={0.5} to={0.7} color="#dc2626" />
          <Leg road="ring" from={0.15} to={0.5} color="#059669" />
          <Leg road="north" from={0} to={0.66} color="#059669" />
          <Homes at={COVERED} scanned />
          <Homes at={PENDING} scanned={false} />
          <MapPin x={559} y={381} color="#dc2626" label="Transfer station" />
          <MapVehicle x={391} y={310} angle={23} label="CG 04 GA 3391" />
        </MapArt>
      </Panel>

      <Float className="left-[48px] top-[132px] w-[316px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Ward coverage</span>
          <span className="text-[11.5px] text-zinc-500">Today, till 10:42</span>
        </div>
        <ul>
          {WARDS.map((w) => {
            const pct = Math.round((w.scanned / w.total) * 100);
            const tone: Tone = pct >= 90 ? "green" : pct >= 50 ? "amber" : "red";
            return (
              <li key={w.name} className="border-b border-zinc-100 px-4 py-3">
                <p className="flex items-baseline justify-between">
                  <span className="text-[13px] font-semibold">{w.name}</span>
                  <span className="font-mono text-[13px] font-semibold">{pct}%</span>
                </p>
                <div className="mt-2">
                  <Bar value={pct} tone={tone} />
                </div>
                <p className="mt-1.5 text-[11.5px] text-zinc-500">
                  {fmt(w.scanned)} of {fmt(w.total)} households scanned
                </p>
              </li>
            );
          })}
        </ul>
        <p className="flex items-center justify-between bg-zinc-50/70 px-4 py-3 text-[11.5px] text-zinc-500">
          Zone 3 overall
          <b className="text-[13px] font-semibold text-zinc-900">71% covered</b>
        </p>
      </Float>

      <Float className="bottom-[44px] right-[84px] w-[356px] p-4">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <CloudUpload className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13.5px] font-semibold leading-tight">Sent to state portal</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Morning shift report, 26 Nov</span>
          </span>
          <Pill tone="green" dot>
            Accepted
          </Pill>
        </div>
        <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-zinc-100 pt-3 text-[11px] text-zinc-500">
          <span>
            <b className="block text-[14px] font-semibold text-zinc-900">3,440</b>records sent
          </span>
          <span>
            <b className="block text-[14px] font-semibold text-zinc-900">0</b>rejected
          </span>
          <span>
            <b className="block text-[14px] font-semibold text-zinc-900">10:42</b>last sync
          </span>
        </div>
      </Float>
    </Scene>
  );
}
