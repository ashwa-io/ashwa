import { Bus, Car, Check, Truck } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { Bar, Float, MapArt, MapPin, MapRoute, MapVehicle, Panel, Pill, Scene } from "../kit";
import { EARNS } from "./trips";

const CURRENT = 1;

/** A freight trip loads, fuels and delivers; every other world just counts its stops. */
const STOPS = [
  { kind: "Load", stop: 0, time: "07:45", note: ["Loaded 22 tonnes", "Left on time"], state: "done" },
  { kind: "Fuel", stop: 1, time: "09:30", note: ["Halted 18 minutes", "Halted 18 minutes"], state: "done" },
  { kind: "Deliver", stop: 3, time: "14:20", note: ["122 km to go", "122 km to go"], state: "next" },
];

const TILE_ICON = { truck: Truck, bus: Bus, car: Car };

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const plural = (s: string) => (/bus$/i.test(s) ? `${s}es` : `${s}s`);

/** One trip: where it stands, where the vehicle is, and what it earns. */
export default function TripDetail({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const n = ctx.noun;
  const fleet = ctx.key === "fleet";
  const goods = fleet || ctx.key === "delivery";
  const [focus] = ctx.vehicles;
  const Icon = TILE_ICON[focus.tile];
  const stages = [
    { name: "Planned", time: "12 Nov, 06:10" },
    { name: "Started", time: "12 Nov, 07:45" },
    { name: "Reached", time: "Expected 14:20" },
    { name: goods ? "Delivered" : "Done", time: "By 16:00" },
    { name: "Closed", time: fleet ? "After proof" : "After sign off" },
  ];
  const money = [
    { label: EARNS[ctx.key], value: "₹ 86,000" },
    { label: `${cap(n.trip)} cost`, value: "₹ 59,200" },
    { label: "Profit", value: "₹ 26,800", strong: true },
    { label: "Profit per km", value: "₹ 92" },
  ];
  const detail = fleet ? "22 tonnes of TMT bars" : n.driver === n.customer ? focus.model : `${n.driver} ${ctx.people[0]}`;
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title={`TR 4821, ${ctx.from} to ${ctx.to}`}
        subtitle={`${ctx.customers[0]}, ${detail}`}
        className="right-[48px] top-[44px] h-[576px] w-[900px]"
        flush
        actions={
          <>
            <span className="whitespace-nowrap font-mono text-[11.5px] text-zinc-500">{focus.plate}</span>
            <Pill tone="green" dot>
              On time
            </Pill>
          </>
        }
      >
        <div className="flex h-full flex-col">
          <ol className="flex shrink-0 items-start border-b border-zinc-100 px-6 pb-3.5 pt-4">
            {stages.map((s, i) => (
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
                    {i < CURRENT ? <Check className="size-3.5" strokeWidth={3} /> : i === CURRENT ? <Icon className="size-3.5" /> : i + 1}
                  </span>
                  <span className={`mt-2 text-[12px] font-semibold leading-tight ${i === CURRENT ? "text-violet-700" : i < CURRENT ? "text-zinc-900" : "text-zinc-400"}`}>
                    {s.name}
                  </span>
                  <span className="mt-0.5 text-[10.5px] leading-tight text-zinc-500">{s.time}</span>
                </div>
                {i < stages.length - 1 ? (
                  <span className={`-mx-6 mt-[11px] h-0.5 flex-1 rounded-full ${i < CURRENT ? "bg-violet-600" : "bg-zinc-200"}`} />
                ) : null}
              </li>
            ))}
          </ol>
          <div className="min-h-0 flex-1">
            <MapArt>
              <MapRoute road="highway" done={0.58} />
              <MapPin x={224} y={289} color="#7c3aed" label={fleet ? `Load, ${ctx.stops[0]}` : ctx.from} />
              <MapPin x={318} y={246} color="#71717a" />
              <MapPin x={640} y={112} label={fleet ? `Deliver, ${ctx.to}` : ctx.to} />
              <MapVehicle x={404} y={208} angle={-24} kind={focus.marker} label={focus.plate} />
            </MapArt>
          </div>
        </div>
      </Panel>

      <Float className="left-[48px] top-[214px] w-[320px] p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11.5px] text-zinc-500">Profit on this {n.trip}</p>
          <Pill tone="green">31% margin</Pill>
        </div>
        <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-tight">₹ 26,800</p>
        <dl className="mt-4 divide-y divide-zinc-100 border-y border-zinc-100 text-[12.5px]">
          {money.map((m) => (
            <div key={m.label} className="flex items-center justify-between py-2">
              <dt className="text-zinc-500">{m.label}</dt>
              <dd className={m.strong ? "font-semibold text-emerald-600" : "font-semibold"}>{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-3 flex items-center justify-between text-[12.5px]">
          <span className="text-zinc-500">{fleet ? "Dues from customer" : "Payment due"}</span>
          <span className="font-semibold text-amber-600">₹ 36,000</span>
        </div>
        <div className="mt-2">
          <Bar value={58} tone="amber" />
        </div>
        <p className="mt-2 text-[11px] text-zinc-500">₹ 50,000 received of ₹ 86,000</p>
      </Float>

      <Float className="bottom-[44px] right-[96px] w-[330px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <p className="text-[12.5px] font-semibold">{cap(plural(n.stop))}</p>
          <p className="text-[11.5px] text-zinc-500">168 of 290 km</p>
        </div>
        <ul className="px-4 py-2">
          {STOPS.map((s, i) => (
            <li key={s.kind} className="relative flex items-start gap-3 py-2.5">
              {i < STOPS.length - 1 ? <i className="absolute left-[6px] top-[22px] h-[calc(100%-8px)] w-0.5 bg-zinc-200" /> : null}
              <i
                className={`relative mt-0.5 size-3.5 shrink-0 rounded-full border-[3px] ${s.state === "done" ? "border-violet-600 bg-violet-600" : "border-violet-600 bg-white"}`}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-semibold leading-tight">
                  <span className="font-medium text-zinc-500">{fleet ? s.kind : `${cap(n.stop)} ${i + 1}`}:</span>{" "}
                  {ctx.stops[fleet ? s.stop : i]}
                </span>
                <span className="mt-0.5 block text-[11px] leading-tight text-zinc-500">{s.note[fleet ? 0 : 1]}</span>
              </span>
              <span className="whitespace-nowrap text-right font-mono text-[11.5px] text-zinc-700">
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
