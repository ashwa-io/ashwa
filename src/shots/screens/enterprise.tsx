import { Building2, Check, ChevronsUpDown, Crown, Eye, Minus, Radio, UserCog, Warehouse } from "lucide-react";

import { Avatar, Bar, Card, Float, Panel, Pill, Scene } from "../kit";

const BRANCHES = [
  { name: "Head office", city: "Raipur", icon: Building2, hue: 262, vehicles: 32, trip: 14, alerts: 2, manager: "Sunita Verma" },
  { name: "Raipur depot", city: "Transport Nagar", icon: Warehouse, hue: 150, vehicles: 24, trip: 11, alerts: 0, manager: "Rakesh Yadav" },
  { name: "Bhilai depot", city: "Bhilai", icon: Warehouse, hue: 28, vehicles: 18, trip: 4, alerts: 4, manager: "Aarav Mehta" },
  { name: "Nagpur branch", city: "Nagpur", icon: Building2, hue: 205, vehicles: 12, trip: 2, alerts: 1, manager: "Pooja Nair" },
];

const CAN = ["See live map", "Assign trips", "Add vehicles", "Billing"];

const ROLES = [
  { name: "Owner", icon: Crown, people: "1 person", can: [true, true, true, true] },
  { name: "Manager", icon: UserCog, people: "4 people", can: [true, true, true, false] },
  { name: "Dispatcher", icon: Radio, people: "9 people", can: [true, true, false, false] },
  { name: "Viewer", icon: Eye, people: "6 people", can: [true, false, false, false] },
];

const ORGS = [
  { name: "Shree Balaji Logistics", note: "4 branches, 86 vehicles", hue: 262, current: true },
  { name: "Balaji Cold Chain", note: "2 branches, 21 vehicles", hue: 190 },
  { name: "Balaji Car Rentals", note: "1 branch, 12 cars", hue: 28 },
];

/** One company, many branches: each branch at a glance, who can do what, and switching companies. */
export default function Enterprise() {
  return (
    <Scene>
      <Panel
        title="Branches"
        subtitle="Shree Balaji Logistics: 86 vehicles, 31 on trip now"
        className="left-[48px] top-[60px] h-[580px] w-[720px]"
      >
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 pr-[26px]">
          {BRANCHES.map((b) => (
            <Card key={b.name} className="flex flex-col justify-between p-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-xl"
                  style={{ background: `hsl(${b.hue} 78% 92%)`, color: `hsl(${b.hue} 60% 42%)` }}
                >
                  <b.icon className="size-5" strokeWidth={1.9} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold leading-tight">{b.name}</span>
                  <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{b.city}</span>
                </span>
                {b.alerts ? <Pill tone={b.alerts > 2 ? "red" : "amber"}>{b.alerts === 1 ? "1 alert" : `${b.alerts} alerts`}</Pill> : <Pill tone="green">All clear</Pill>}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Vehicles", b.vehicles],
                  ["On trip now", b.trip],
                  ["Alerts open", b.alerts],
                ].map(([k, v]) => (
                  <span key={k}>
                    <span className="block text-[24px] font-semibold leading-none tracking-tight">{v}</span>
                    <span className="mt-1.5 block text-[11px] text-zinc-500">{k}</span>
                  </span>
                ))}
              </div>
              <Bar value={(b.trip / b.vehicles) * 100} />
              <div className="flex items-center gap-2 border-t border-zinc-100 pt-3">
                <Avatar name={b.manager} hue={b.hue} size={26} />
                <span className="flex-1 text-[12.5px] font-medium">{b.manager}</span>
                <span className="text-[11.5px] text-zinc-500">Manager</span>
              </div>
            </Card>
          ))}
        </div>
      </Panel>

      <Float className="right-[48px] top-[44px] w-[330px] p-2">
        {ORGS.map((o) => (
          <div key={o.name} className={`flex items-center gap-3 rounded-xl px-2.5 py-2 ${o.current ? "bg-violet-50" : ""}`}>
            <span
              className="grid size-8 shrink-0 place-items-center rounded-lg text-[12px] font-bold"
              style={{ background: `hsl(${o.hue} 70% 45%)`, color: "#fff" }}
            >
              {o.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold leading-tight">{o.name}</span>
              <span className="block truncate text-[11px] leading-tight text-zinc-500">{o.note}</span>
            </span>
            {o.current ? <ChevronsUpDown className="size-4 text-violet-600" /> : null}
          </div>
        ))}
      </Float>

      <Float className="right-[48px] top-[236px] w-[330px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <h2 className="text-[13px] font-semibold">Roles</h2>
          <span className="text-[11.5px] text-zinc-500">20 people across 4 branches</span>
        </div>
        {ROLES.map((r) => (
          <div key={r.name} className="border-b border-zinc-100 px-4 py-3 last:border-b-0">
            <div className="flex items-center gap-2">
              <r.icon className="size-4 text-violet-600" />
              <span className="flex-1 text-[13px] font-semibold">{r.name}</span>
              <span className="text-[11px] text-zinc-500">{r.people}</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
              {CAN.map((c, i) => (
                <span key={c} className={`flex items-center gap-1.5 text-[11.5px] ${r.can[i] ? "text-zinc-700" : "text-zinc-400"}`}>
                  {r.can[i] ? <Check className="size-3.5 text-emerald-600" strokeWidth={2.6} /> : <Minus className="size-3.5" />}
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Float>
    </Scene>
  );
}
