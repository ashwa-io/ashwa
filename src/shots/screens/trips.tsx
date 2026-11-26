import { Bus, Car, Copy, IndianRupee, Link2, Send, Truck, Wallet } from "lucide-react";

import { CONTEXTS, type Context, type ContextKey } from "../contexts";
import { Avatar, Button, Float, MapArt, MapPin, MapRoute, MapVehicle, Panel, Pill, Scene } from "../kit";

type Stage = "Planned" | "Started" | "Reached" | "Delivered";

/** `note` is [what a freight fleet shows, what every other world shows]. */
const TRIPS: { id: string; note: [string, string]; hue: number; stage: Stage; freight: string }[] = [
  { id: "TR 4821", note: ["290 km, ETA 14:20", "ETA 14:20"], hue: 24, stage: "Started", freight: "₹ 86,000" },
  { id: "TR 4820", note: ["742 km, ETA Thu 09:00", "ETA 15:05"], hue: 205, stage: "Started", freight: "₹ 1,24,000" },
  { id: "TR 4818", note: ["684 km, at gate", "Arrived 12:10"], hue: 150, stage: "Reached", freight: "₹ 1,08,500" },
  { id: "TR 4817", note: ["802 km, POD pending", "Sign off pending"], hue: 340, stage: "Delivered", freight: "₹ 1,42,000" },
  { id: "TR 4823", note: ["1,060 km, loads 16:00", "Starts 16:00"], hue: 262, stage: "Planned", freight: "₹ 1,68,000" },
  { id: "TR 4815", note: ["612 km, unloading", "Arrived 11:30"], hue: 48, stage: "Reached", freight: "₹ 94,500" },
  { id: "TR 4824", note: ["448 km, loads tomorrow", "Starts tomorrow"], hue: 180, stage: "Planned", freight: "₹ 72,000" },
];

/** Rows after the first run between these pairs of ctx.stops. */
const LEGS = [
  [1, 3],
  [0, 2],
  [2, 3],
  [0, 1],
  [1, 2],
  [3, 0],
];

const TONE = { Planned: "zinc", Started: "violet", Reached: "blue", Delivered: "green" } as const;

const COLS = "grid grid-cols-[62px_146px_112px_108px_136px_84px_76px] items-center pl-5 pr-14";

/** What the money on a trip is called in each world. */
export const EARNS: Record<ContextKey, string> = {
  fleet: "Freight",
  school: "Fees",
  rental: "Rent",
  delivery: "Order value",
  construction: "Hire",
  corporate: "Billing",
  waste: "Billing",
  transit: "Fares",
  service: "Billing",
};

const TILE_ICON = { truck: Truck, bus: Bus, car: Car };

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const plural = (s: string) => (/bus$/i.test(s) ? `${s}es` : `${s}s`);

/** Trips board: every running trip in one table, the money that matters, and a link to share. */
export default function Trips({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const n = ctx.noun;
  const fleet = ctx.key === "fleet";
  // In a rental the person driving is the customer, so that column shows the handover place instead.
  const same = n.driver === n.customer;
  const goods = fleet || ctx.key === "delivery";
  const [focus] = ctx.vehicles;
  const figures = [
    { icon: TILE_ICON[focus.tile], label: `${cap(plural(n.vehicle))} free`, value: "6 of 24", note: `3 waiting ${fleet ? "in" : "at"} ${ctx.from}`, tone: "text-emerald-600" },
    { icon: IndianRupee, label: fleet ? "Due from customers" : "Payments due", value: "₹ 8,42,000", note: "5 bills past 30 days", tone: "text-amber-600" },
    { icon: Wallet, label: same ? "Deposits held" : `Cash with ${plural(n.driver)}`, value: "₹ 1,36,500", note: `Across 11 ${plural(n.driver)}`, tone: "text-zinc-500" },
  ];
  return (
    <Scene tint={ctx.tint}>
      <Panel title={cap(plural(n.trip))} subtitle="23 running, 4 to close today" className="bottom-[44px] left-[48px] h-[548px] w-[800px]" flush>
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span className="truncate">{cap(n.trip)}</span>
          <span>{n.trip === "route" || n.customer === "route" ? "From and to" : "Route"}</span>
          <span className="truncate">{cap(same ? n.stop : n.customer)}</span>
          <span className="truncate">{cap(n.vehicle)}</span>
          <span className="truncate">{cap(n.driver)}</span>
          <span>Stage</span>
          <span className="whitespace-nowrap text-right">{EARNS[ctx.key]}</span>
        </div>
        {TRIPS.map((t, i) => {
          const driver = ctx.people[i % ctx.people.length];
          const leg = LEGS[i - 1];
          return (
            <div key={t.id} className={`${COLS} h-[60px] border-b border-zinc-100 text-[12.5px] ${i === 0 ? "bg-violet-50/60" : ""}`}>
              <span className="font-mono text-[11.5px] text-zinc-500">{t.id}</span>
              <span className="min-w-0 pr-2">
                <span className="block truncate font-semibold leading-tight">
                  {leg ? `${ctx.stops[leg[0]]} to ${ctx.stops[leg[1]]}` : `${ctx.from} to ${ctx.to}`}
                </span>
                <span className="mt-0.5 block truncate text-[11px] leading-tight text-zinc-500">{t.note[fleet ? 0 : 1]}</span>
              </span>
              <span className="truncate pr-2 text-zinc-700">{(same ? ctx.stops : ctx.customers)[i % 4]}</span>
              <span className="truncate pr-2 font-mono text-[11.5px] text-zinc-700">{ctx.vehicles[i % ctx.vehicles.length].plate}</span>
              <span className="flex min-w-0 items-center gap-2 pr-2">
                <Avatar name={driver} hue={t.hue} size={24} />
                <span className="min-w-0 truncate font-medium">{driver}</span>
              </span>
              <span>
                <Pill tone={TONE[t.stage]} dot>
                  {t.stage === "Delivered" && !goods ? "Done" : t.stage}
                </Pill>
              </span>
              <span className="text-right font-semibold">{t.freight}</span>
            </div>
          );
        })}
        <div className="flex h-[40px] items-center pl-5 text-[11.5px] text-zinc-500">Showing 7 of 23 {plural(n.trip)}</div>
      </Panel>

      <Float className="right-[48px] top-[44px] grid w-[560px] grid-cols-3 divide-x divide-zinc-100">
        {figures.map((f) => (
          <div key={f.label} className="min-w-0 px-4 py-3.5">
            <p className="flex items-center gap-1.5 text-[11.5px] text-zinc-500">
              <f.icon className="size-3.5 shrink-0 text-violet-600" />
              <span className="truncate">{f.label}</span>
            </p>
            <p className="mt-1.5 text-[20px] font-semibold leading-none tracking-tight">{f.value}</p>
            <p className={`mt-1.5 truncate text-[11px] font-medium ${f.tone}`}>{f.note}</p>
          </div>
        ))}
      </Float>

      <Float className="right-[48px] top-[224px] w-[264px] overflow-hidden">
        <div className="relative h-[104px] overflow-hidden border-b border-zinc-100">
          <div className="absolute left-[-135px] top-[-81px] h-[330px] w-[528px]">
            <MapArt>
              <MapRoute road="highway" done={0.58} />
              <MapPin x={640} y={112} />
              <MapVehicle x={404} y={208} angle={-24} kind={focus.marker} />
            </MapArt>
          </div>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1.5 text-[13px] font-semibold">
            <Link2 className="size-4 text-violet-600" />
            Share live link
          </p>
          <p className="mt-0.5 truncate text-[11.5px] text-zinc-500">
            TR 4821, {ctx.from} to {ctx.to}
          </p>
          <div className="mt-3 flex h-9 items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-2.5">
            <span className="font-mono text-[11.5px] text-zinc-700">ashwa.in/t/k7Qx2m</span>
            <Copy className="size-3.5 text-zinc-400" />
          </div>
          <p className="mt-2.5 text-[11.5px] leading-snug text-zinc-500">
            {fleet ? ctx.customers[0] : "Anyone with the link"} can follow the {n.vehicle} without logging in.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Button primary>
              <Send className="size-3.5" />
              Send by SMS
            </Button>
            <Button>Copy link</Button>
          </div>
          <p className="mt-3 border-t border-zinc-100 pt-2.5 text-[11px] text-zinc-500">Opened 4 times, last at 11:42</p>
        </div>
      </Float>
    </Scene>
  );
}
