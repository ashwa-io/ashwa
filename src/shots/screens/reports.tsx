import { Download, Trophy } from "lucide-react";

import { Avatar, Bar, Button, Card, Columns, Float, Panel, Pill, Scene, Stat, VehicleTile } from "../kit";

const WEEKS = [42, 55, 48, 61, 38, 66, 72, 58, 79, 92, 70, 84];

const ROWS: { plate: string; kind: "truck" | "bus" | "car"; hue: number; trips: string; km: string; cpk: string; profit: string }[] = [
  { plate: "HR 26 AS 1024", kind: "truck", hue: 262, trips: "21", km: "18,460", cpk: "₹ 36.40", profit: "₹ 1,18,400" },
  { plate: "CG 04 MX 2217", kind: "truck", hue: 150, trips: "18", km: "16,920", cpk: "₹ 38.10", profit: "₹ 96,200" },
  { plate: "HR 39 BK 7741", kind: "truck", hue: 28, trips: "17", km: "15,300", cpk: "₹ 41.80", profit: "₹ 81,700" },
  { plate: "CG 07 BQ 5530", kind: "truck", hue: 205, trips: "14", km: "12,180", cpk: "₹ 43.60", profit: "₹ 64,900" },
  { plate: "HR 51 DE 9025", kind: "truck", hue: 340, trips: "12", km: "9,740", cpk: "₹ 47.20", profit: "₹ 38,300" },
];

const COLS = "grid grid-cols-[230px_90px_120px_120px_152px] items-center";

const USE = [
  { label: "Trucks", value: 82, tone: "violet" },
  { label: "Trailers", value: 74, tone: "violet" },
  { label: "Tippers", value: 61, tone: "amber" },
  { label: "Buses", value: 48, tone: "red" },
] as const;

/** Reports: what the fleet earned, week by week and vehicle by vehicle. */
export default function Reports() {
  return (
    <Scene tint="emerald">
      <Panel
        title="Reports"
        subtitle="1 Aug to 31 Oct, all vehicles"
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
              <Stat label="Trips closed" value="148" note="11 more than last quarter" tone="green" />
              <Stat label="Revenue" value="₹ 38,60,000" note="₹ 26,080 per trip" />
              <Stat label="Cost per km" value="₹ 41.20" note="Down ₹ 1.80" tone="green" />
            </div>
          </div>

          <div className={`${COLS} mt-3 h-[30px] border-b border-zinc-100 text-[11px] font-medium text-zinc-500`}>
            <span>Vehicle</span>
            <span>Trips</span>
            <span>Km run</span>
            <span>Cost per km</span>
            <span className="text-right">Profit</span>
          </div>
          {ROWS.map((r) => (
            <div key={r.plate} className={`${COLS} h-[40px] border-b border-zinc-100 text-[12.5px] last:border-b-0`}>
              <span className="flex items-center gap-2.5">
                <VehicleTile kind={r.kind} hue={r.hue} size={26} />
                <span className="font-semibold">{r.plate}</span>
              </span>
              <span className="text-zinc-700">{r.trips}</span>
              <span className="text-zinc-700">{r.km}</span>
              <span className="text-zinc-700">{r.cpk}</span>
              <span className="text-right font-semibold text-emerald-600">{r.profit}</span>
            </div>
          ))}
        </div>
      </Panel>

      <Float className="right-[48px] top-[124px] w-[276px] p-4">
        <p className="flex items-center gap-1.5 text-[11.5px] font-medium text-amber-600">
          <Trophy className="size-3.5" />
          Best vehicle this quarter
        </p>
        <div className="mt-3 flex items-center gap-3">
          <VehicleTile kind="truck" hue={262} size={38} />
          <span>
            <span className="block text-[14px] font-semibold leading-tight">HR 26 AS 1024</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Tata Signa 4825</span>
          </span>
        </div>
        <div className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-zinc-100 py-3">
          {[
            ["Profit", "₹ 1,18,400"],
            ["Trips", "21"],
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
          <Avatar name="Harpreet Singh" hue={340} size={24} />
          <span className="flex-1 text-[12px] font-medium">Harpreet Singh</span>
          <span className="text-[11.5px] text-zinc-500">Driver</span>
        </div>
      </Float>

      <Float className="bottom-[44px] right-[48px] w-[276px] p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-[12.5px] font-semibold">Utilisation</p>
          <p className="text-[11.5px] text-zinc-500">Days on road</p>
        </div>
        <div className="mt-3 space-y-3">
          {USE.map((u) => (
            <div key={u.label}>
              <div className="mb-1.5 flex justify-between text-[12px]">
                <span className="text-zinc-700">{u.label}</span>
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
