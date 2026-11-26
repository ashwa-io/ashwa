import { Download, Trophy } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { Avatar, Bar, Button, Card, Columns, Float, Panel, Pill, Scene, Stat, VehicleTile } from "../kit";

const WEEKS = [42, 55, 48, 61, 38, 66, 72, 58, 79, 92, 70, 84];

const ROWS = [
  { trips: "21", km: "18,460", cpk: "₹ 36.40", profit: "₹ 1,18,400" },
  { trips: "18", km: "16,920", cpk: "₹ 38.10", profit: "₹ 96,200" },
  { trips: "17", km: "15,300", cpk: "₹ 41.80", profit: "₹ 81,700" },
  { trips: "14", km: "12,180", cpk: "₹ 43.60", profit: "₹ 64,900" },
  { trips: "12", km: "9,740", cpk: "₹ 47.20", profit: "₹ 38,300" },
];

const COLS = "grid grid-cols-[230px_90px_120px_120px_152px] items-center";

const USE = [
  { value: 82, tone: "violet" },
  { value: 74, tone: "violet" },
  { value: 61, tone: "amber" },
  { value: 48, tone: "red" },
] as const;

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const plural = (s: string) => (/bus$/i.test(s) ? `${s}es` : `${s}s`);

/** Reports: what the fleet earned, week by week and vehicle by vehicle. */
export default function Reports({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const n = ctx.noun;
  const [best] = ctx.vehicles;
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title="Reports"
        subtitle={`1 Aug to 31 Oct, all ${plural(n.vehicle)}`}
        className="left-[48px] top-[44px] h-[612px] w-[780px]"
        flush
        actions={
          <>
            <Button>This quarter</Button>
            <Button>
              <Download className="size-3.5" />
              Export
            </Button>
          </>
        }
      >
        <div className="py-4 pl-5 pr-12">
          <div className="flex h-[284px] gap-3.5">
            <Card className="flex min-w-0 flex-1 flex-col p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11.5px] text-zinc-500">Profit per week</p>
                  <p className="mt-1 text-[22px] font-semibold leading-none tracking-tight">₹ 4,82,000</p>
                </div>
                <Pill tone="green">Up 12% on last quarter</Pill>
              </div>
              <div className="mt-auto">
                <Columns values={WEEKS} labels={WEEKS.map((_, i) => `W${i + 1}`)} highlight={9} />
              </div>
            </Card>
            <div className="flex w-[220px] flex-col justify-between">
              <Stat label={`${cap(plural(n.trip))} closed`} value="148" note="11 more than last quarter" tone="green" />
              <Stat label="Revenue" value="₹ 38,60,000" note={`₹ 26,080 per ${n.trip}`} />
              <Stat label="Cost per km" value="₹ 41.20" note="Down ₹ 1.80" tone="green" />
            </div>
          </div>

          <div className={`${COLS} mt-3 h-[30px] border-b border-zinc-100 text-[11px] font-medium text-zinc-500`}>
            <span>{cap(n.vehicle)}</span>
            <span>{cap(plural(n.trip))}</span>
            <span>Km run</span>
            <span>Cost per km</span>
            <span className="text-right">Profit</span>
          </div>
          {ROWS.map((r, i) => {
            const v = ctx.vehicles[i];
            return (
              <div key={v.plate} className={`${COLS} h-[40px] border-b border-zinc-100 text-[12.5px] last:border-b-0`}>
                <span className="flex min-w-0 items-center gap-2.5 pr-3">
                  <VehicleTile kind={v.tile} marker={v.marker} size={26} />
                  <span className="min-w-0 truncate font-semibold">{v.plate}</span>
                </span>
                <span className="text-zinc-700">{r.trips}</span>
                <span className="text-zinc-700">{r.km}</span>
                <span className="text-zinc-700">{r.cpk}</span>
                <span className="text-right font-semibold text-emerald-600">{r.profit}</span>
              </div>
            );
          })}
        </div>
      </Panel>

      <Float className="right-[48px] top-[124px] w-[276px] p-4">
        <p className="flex items-center gap-1.5 text-[11.5px] font-medium text-amber-600">
          <Trophy className="size-3.5" />
          Best {n.vehicle} this quarter
        </p>
        <div className="mt-3 flex items-center gap-3">
          <VehicleTile kind={best.tile} marker={best.marker} size={38} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-semibold leading-tight">{best.plate}</span>
            <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{best.model}</span>
          </span>
        </div>
        <div className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-zinc-100 py-3">
          {[
            ["Profit", "₹ 1,18,400"],
            [cap(plural(n.trip)), "21"],
            ["Cost per km", "₹ 36.40"],
            ["Days on road", "79 of 92"],
          ].map(([l, v]) => (
            <span key={l}>
              <span className="block text-[11px] text-zinc-500">{l}</span>
              <span className="mt-0.5 block text-[14px] font-semibold leading-tight">{v}</span>
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Avatar name={ctx.people[0]} hue={340} size={24} />
          <span className="min-w-0 flex-1 truncate text-[12px] font-medium">{ctx.people[0]}</span>
          <span className="text-[11.5px] text-zinc-500">{cap(n.driver)}</span>
        </div>
      </Float>

      <Float className="bottom-[44px] right-[48px] w-[276px] p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-[12.5px] font-semibold">Utilisation</p>
          <p className="text-[11.5px] text-zinc-500">Days on road</p>
        </div>
        <div className="mt-3 space-y-3">
          {USE.map((u, i) => (
            <div key={i}>
              <div className="mb-1.5 flex justify-between gap-3 text-[12px]">
                <span className="min-w-0 truncate text-zinc-700">{ctx.vehicles[i].plate}</span>
                <span className="font-semibold">{u.value}%</span>
              </div>
              <Bar value={u.value} tone={u.tone} />
            </div>
          ))}
        </div>
      </Float>
    </Scene>
  );
}
