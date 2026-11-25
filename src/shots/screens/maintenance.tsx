import { Droplets, FileCheck2, Fuel, Gauge, Plus, ShieldCheck, Wind } from "lucide-react";

import { Bar, Button, Columns, Float, Panel, Pill, Scene, VehicleTile } from "../kit";

type Status = "Overdue" | "Due soon" | "OK";

const ROWS: { plate: string; model: string; kind: "truck" | "bus" | "car"; hue: number; icon: typeof Fuel; due: string; detail: string; when: string; last: string; status: Status }[] = [
  { plate: "HR 26 AS 1024", model: "Tata Signa 4825", kind: "truck", hue: 262, icon: ShieldCheck, due: "Insurance", detail: "Policy renewal", when: "4 days ago", last: "Renewed 22 Nov 2025", status: "Overdue" },
  { plate: "CG 04 MX 2217", model: "Ashok Leyland 2820", kind: "truck", hue: 150, icon: Droplets, due: "Oil change", detail: "Engine oil and filter", when: "310 km ago", last: "Done at 84,200 km", status: "Overdue" },
  { plate: "HR 39 BK 7741", model: "Ashok Leyland Dost", kind: "truck", hue: 28, icon: Wind, due: "PUC", detail: "Pollution certificate", when: "In 6 days", last: "Issued 2 Jun 2026", status: "Due soon" },
  { plate: "HR 12 FA 6610", model: "Tata Starbus", kind: "bus", hue: 340, icon: FileCheck2, due: "Fitness", detail: "Fitness certificate", when: "In 12 days", last: "Passed 8 Dec 2025", status: "Due soon" },
  { plate: "HR 51 DE 9025", model: "Eicher Pro 2049", kind: "truck", hue: 205, icon: Gauge, due: "Tyre rotation", detail: "All six tyres", when: "In 2,800 km", last: "Done at 61,500 km", status: "OK" },
];

const TONE = { Overdue: "red", "Due soon": "amber", OK: "green" } as const;
const WHEN = { Overdue: "text-red-600", "Due soon": "text-amber-600", OK: "text-zinc-700" } as const;

const COLS = "grid grid-cols-[270px_230px_190px_170px_124px] items-center px-5";

const DOCS = [
  { label: "Insurance", valid: 22, tone: "violet" },
  { label: "PUC", valid: 21, tone: "violet" },
  { label: "Fitness", valid: 23, tone: "violet" },
  { label: "Permit", valid: 19, tone: "amber" },
] as const;

/** Maintenance: what is due across the fleet, fuel spend and document cover. */
export default function Maintenance() {
  return (
    <Scene tint="amber">
      <Panel
        title="Needs attention"
        subtitle="5 of 9 items shown, across 24 vehicles"
        className="left-[48px] top-[44px] h-[440px] w-[1024px]"
        flush
        actions={
          <>
            <Pill tone="red" dot>
              2 overdue
            </Pill>
            <Pill tone="amber" dot>
              3 due soon
            </Pill>
            <Button primary>
              <Plus className="size-3.5" />
              Add reminder
            </Button>
          </>
        }
      >
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span>Vehicle</span>
          <span>What is due</span>
          <span>Due</span>
          <span>Last time</span>
          <span className="text-right">Status</span>
        </div>
        {ROWS.map((r) => (
          <div key={r.plate} className={`${COLS} h-[58px] border-b border-zinc-100 text-[12.5px]`}>
            <span className="flex items-center gap-3">
              <VehicleTile kind={r.kind} hue={r.hue} />
              <span>
                <span className="block text-[13px] font-semibold leading-tight">{r.plate}</span>
                <span className="block text-[11.5px] leading-tight text-zinc-500">{r.model}</span>
              </span>
            </span>
            <span className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-lg bg-zinc-100 text-zinc-600">
                <r.icon className="size-3.5" />
              </span>
              <span>
                <span className="block font-semibold leading-tight">{r.due}</span>
                <span className="block text-[11.5px] leading-tight text-zinc-500">{r.detail}</span>
              </span>
            </span>
            <span className={`font-semibold ${WHEN[r.status]}`}>{r.when}</span>
            <span className="text-zinc-500">{r.last}</span>
            <span className="text-right">
              <Pill tone={TONE[r.status]} dot>
                {r.status}
              </Pill>
            </span>
          </div>
        ))}
      </Panel>

      <Float className="bottom-[44px] left-[104px] flex h-[208px] w-[430px] gap-5 p-4">
        <div className="w-[150px] shrink-0">
          <p className="flex items-center gap-1.5 text-[12.5px] font-semibold">
            <Fuel className="size-4 text-violet-600" />
            Fuel this month
          </p>
          <p className="mt-4 text-[24px] font-semibold leading-none tracking-tight">6,480 L</p>
          <p className="mt-2 text-[14px] font-semibold leading-none text-zinc-700">₹ 6,12,400</p>
          <p className="mt-2 text-[11px] text-zinc-500">₹ 94.50 a litre on average</p>
          <div className="mt-3">
            <Pill tone="green">4.1 km per litre</Pill>
          </div>
        </div>
        <div className="min-w-0 flex-1 self-end">
          <Columns values={[46, 58, 52, 70, 64, 88, 61, 74]} labels={["3", "6", "9", "12", "15", "18", "21", "24"]} highlight={5} />
        </div>
      </Float>

      <Float className="bottom-[44px] right-[104px] h-[208px] w-[400px] p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-[12.5px] font-semibold">Documents</p>
          <p className="text-[11.5px] text-zinc-500">Valid, of 24 vehicles</p>
        </div>
        <div className="mt-3 space-y-[13px]">
          {DOCS.map((d) => (
            <div key={d.label} className="flex items-center gap-3 text-[12px]">
              <span className="w-[68px] text-zinc-700">{d.label}</span>
              <span className="flex-1">
                <Bar value={Math.round((d.valid / 24) * 100)} tone={d.tone} />
              </span>
              <span className="w-[52px] text-right font-semibold">{d.valid} of 24</span>
            </div>
          ))}
        </div>
        <p className="mt-3.5 border-t border-zinc-100 pt-2.5 text-[11px] text-zinc-500">5 permits lapse before the end of December</p>
      </Float>
    </Scene>
  );
}
