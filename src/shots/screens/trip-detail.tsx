import { Check, Truck } from "lucide-react";

import { Bar, Float, MapArt, MapPin, MapRoute, MapVehicle, Panel, Pill, Scene } from "../kit";

const STAGES = [
  { name: "Planned", time: "12 Nov, 06:10" },
  { name: "Started", time: "12 Nov, 07:45" },
  { name: "Reached", time: "Expected 14:20" },
  { name: "Delivered", time: "By 16:00" },
  { name: "Closed", time: "After proof" },
];
const CURRENT = 1;

const MONEY = [
  { label: "Freight", value: "₹ 86,000" },
  { label: "Trip cost", value: "₹ 59,200" },
  { label: "Profit", value: "₹ 26,800", strong: true },
  { label: "Profit per km", value: "₹ 92" },
];

const STOPS = [
  { kind: "Load", place: "Raipur yard, Urla", time: "07:45", note: "Loaded 22 tonnes", state: "done" },
  { kind: "Fuel", place: "Rajnandgaon bypass", time: "09:30", note: "Halted 18 minutes", state: "done" },
  { kind: "Deliver", place: "Meridian Steel, Nagpur", time: "14:20", note: "122 km to go", state: "next" },
];

/** One trip: where it stands, where the truck is, and what it earns. */
export default function TripDetail() {
  return (
    <Scene tint="sky">
      <Panel
        title="TR 4821, Raipur to Nagpur"
        subtitle="Meridian Steel, 22 tonnes of TMT bars"
        className="right-[48px] top-[44px] h-[576px] w-[900px]"
        flush
        actions={
          <>
            <span className="font-mono text-[11.5px] text-zinc-500">HR 26 AS 1024</span>
            <Pill tone="green" dot>
              On time
            </Pill>
          </>
        }
      >
        <div className="flex h-full flex-col">
          <ol className="flex shrink-0 items-start border-b border-zinc-100 px-6 pb-3.5 pt-4">
            {STAGES.map((s, i) => (
              <li key={s.name} className="flex flex-1 items-start last:flex-none">
                <div className="flex w-[96px] flex-col items-center text-center">
                  <span
                    className={
                      i < CURRENT
                        ? "grid size-6 place-items-center rounded-full bg-violet-600 text-white"
                        : i === CURRENT
                          ? "grid size-6 place-items-center rounded-full bg-violet-600 text-white ring-4 ring-violet-100"
                          : "grid size-6 place-items-center rounded-full border-2 border-zinc-200 bg-white text-[10.5px] font-semibold text-zinc-400"
                    }
                  >
                    {i < CURRENT ? <Check className="size-3.5" strokeWidth={3} /> : i === CURRENT ? <Truck className="size-3.5" /> : i + 1}
                  </span>
                  <span className={`mt-2 text-[12px] font-semibold leading-tight ${i === CURRENT ? "text-violet-700" : i < CURRENT ? "text-zinc-900" : "text-zinc-400"}`}>
                    {s.name}
                  </span>
                  <span className="mt-0.5 text-[10.5px] leading-tight text-zinc-500">{s.time}</span>
                </div>
                {i < STAGES.length - 1 ? (
                  <span className={`-mx-6 mt-[11px] h-0.5 flex-1 rounded-full ${i < CURRENT ? "bg-violet-600" : "bg-zinc-200"}`} />
                ) : null}
              </li>
            ))}
          </ol>
          <div className="min-h-0 flex-1">
            <MapArt>
              <MapRoute road="highway" done={0.58} />
              <MapPin x={224} y={289} color="#7c3aed" label="Load, Raipur yard" />
              <MapPin x={318} y={246} color="#71717a" />
              <MapPin x={640} y={112} label="Deliver, Nagpur" />
              <MapVehicle x={404} y={208} angle={-24} label="HR 26 AS 1024" />
            </MapArt>
          </div>
        </div>
      </Panel>

      <Float className="left-[48px] top-[214px] w-[320px] p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11.5px] text-zinc-500">Profit on this trip</p>
          <Pill tone="green">31% margin</Pill>
        </div>
        <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-tight">₹ 26,800</p>
        <dl className="mt-4 divide-y divide-zinc-100 border-y border-zinc-100 text-[12.5px]">
          {MONEY.map((m) => (
            <div key={m.label} className="flex items-center justify-between py-2">
              <dt className="text-zinc-500">{m.label}</dt>
              <dd className={m.strong ? "font-semibold text-emerald-600" : "font-semibold"}>{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-3 flex items-center justify-between text-[12.5px]">
          <span className="text-zinc-500">Dues from customer</span>
          <span className="font-semibold text-amber-600">₹ 36,000</span>
        </div>
        <div className="mt-2">
          <Bar value={58} tone="amber" />
        </div>
        <p className="mt-2 text-[11px] text-zinc-500">₹ 50,000 received of ₹ 86,000</p>
      </Float>

      <Float className="bottom-[44px] right-[96px] w-[330px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <p className="text-[12.5px] font-semibold">Stops</p>
          <p className="text-[11.5px] text-zinc-500">168 of 290 km</p>
        </div>
        <ul className="px-4 py-2">
          {STOPS.map((s, i) => (
            <li key={s.place} className="relative flex items-start gap-3 py-2.5">
              {i < STOPS.length - 1 ? <i className="absolute left-[6px] top-[22px] h-[calc(100%-8px)] w-0.5 bg-zinc-200" /> : null}
              <i
                className={`relative mt-0.5 size-3.5 shrink-0 rounded-full border-[3px] ${s.state === "done" ? "border-violet-600 bg-violet-600" : "border-violet-600 bg-white"}`}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-semibold leading-tight">
                  <span className="font-medium text-zinc-500">{s.kind}:</span> {s.place}
                </span>
                <span className="mt-0.5 block text-[11px] leading-tight text-zinc-500">{s.note}</span>
              </span>
              <span className="text-right font-mono text-[11.5px] text-zinc-700">
                {s.state === "next" ? "ETA " : ""}
                {s.time}
              </span>
            </li>
          ))}
        </ul>
      </Float>
    </Scene>
  );
}
