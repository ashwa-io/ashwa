import { Plus } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { Avatar, Button, Float, Panel, Pill, Scene, SearchField } from "../kit";

type Status = "On trip" | "Free" | "On leave";

/** Seven rows over ctx.people (five names): the last two reuse a name with their own details. */
const DRIVERS: { hue: number; since: string; phone: string; licence: string; balance: string; status: Status }[] = [
  { hue: 24, since: "With you since 2019", phone: "98xxx xx210", licence: "CG04 20140041823", balance: "₹ 12,400", status: "On trip" },
  { hue: 205, since: "With you since 2021", phone: "97xxx xx684", licence: "HR26 20170018456", balance: "₹ 8,750", status: "On trip" },
  { hue: 150, since: "With you since 2018", phone: "99xxx xx032", licence: "MH31 20120067310", balance: "₹ 21,300", status: "On trip" },
  { hue: 340, since: "With you since 2016", phone: "98xxx xx577", licence: "PB10 20090022094", balance: "₹ 0", status: "Free" },
  { hue: 262, since: "With you since 2022", phone: "96xxx xx149", licence: "CG07 20180035627", balance: "₹ 4,200", status: "Free" },
  { hue: 48, since: "With you since 2020", phone: "70xxx xx865", licence: "MP09 20150049781", balance: "₹ 15,900", status: "On trip" },
  { hue: 180, since: "With you since 2023", phone: "88xxx xx403", licence: "CG13 20190012268", balance: "₹ 0", status: "On leave" },
];

const TONE = { "On trip": "green", Free: "blue", "On leave": "amber" } as const;

const COLS = "grid grid-cols-[176px_104px_134px_114px_84px_94px] items-center pl-5 pr-16";

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const plural = (s: string) => (/bus$/i.test(s) ? `${s}es` : `${s}s`);

/** Drivers: the roster, and what each driver is holding in cash. */
export default function Drivers({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const n = ctx.noun;
  const lines = [
    { date: "24 Nov", what: "Advance for TR 4821", amount: "+ ₹ 15,000", plus: true },
    { date: "24 Nov", what: `Diesel, ${ctx.from}`, amount: "- ₹ 9,800" },
    { date: "23 Nov", what: "Toll, NH 53", amount: "- ₹ 1,240" },
    { date: "21 Nov", what: "Settled in cash", amount: "- ₹ 6,000" },
    { date: "20 Nov", what: "Advance for TR 4809", amount: "+ ₹ 25,000", plus: true },
  ];
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title={cap(plural(n.driver))}
        subtitle={`18 ${plural(n.driver)}, 11 on ${n.trip}`}
        className="left-[48px] top-[44px] h-[612px] w-[790px]"
        flush
        actions={
          <>
            <SearchField placeholder="Search name or phone" />
            <Button primary>
              <Plus className="size-3.5" />
              Add {n.driver}
            </Button>
          </>
        }
      >
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span>{cap(n.driver)}</span>
          <span>Phone</span>
          <span>Licence</span>
          <span>{cap(n.vehicle)}</span>
          <span className="text-right">Ledger</span>
          <span className="text-right">Status</span>
        </div>
        {DRIVERS.map((d, i) => {
          const name = ctx.people[i % ctx.people.length];
          const v = ctx.vehicles[i];
          return (
            <div key={i} className={`${COLS} h-[72px] border-b border-zinc-100 text-[12.5px] ${i === 0 ? "bg-violet-50/60" : ""}`}>
              <span className="flex min-w-0 items-center gap-2.5 pr-2">
                <Avatar name={name} hue={d.hue} size={34} />
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold leading-tight">{name}</span>
                  <span className="mt-0.5 block truncate text-[11px] leading-tight text-zinc-500">{d.since}</span>
                </span>
              </span>
              <span className="font-mono text-[11.5px] text-zinc-700">{d.phone}</span>
              <span className="font-mono text-[11.5px] text-zinc-700">{d.licence}</span>
              <span className={v ? "truncate font-mono text-[11.5px] text-zinc-700" : "text-[12px] text-zinc-400"}>{v ? v.plate : "Not assigned"}</span>
              <span className={`text-right font-semibold ${d.balance === "₹ 0" ? "text-zinc-400" : ""}`}>{d.balance}</span>
              <span className="text-right">
                <Pill tone={TONE[d.status]} dot>
                  {/* A rental's "drivers" are its customers, who do not take leave. */}
                  {d.status === "On trip" ? `On ${n.trip}` : d.status === "On leave" && n.driver === n.customer ? "Inactive" : d.status}
                </Pill>
              </span>
            </div>
          );
        })}
      </Panel>

      <Float className="right-[48px] top-[120px] w-[290px] p-4">
        <div className="flex items-center gap-3">
          <Avatar name={ctx.people[0]} hue={24} size={38} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-semibold leading-tight">{ctx.people[0]}</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Cash ledger, November</span>
          </span>
        </div>
        <div className="mt-4 rounded-xl bg-violet-50 px-3.5 py-3">
          <p className="text-[11.5px] text-violet-700">Balance with {n.driver}</p>
          <p className="mt-1 text-[24px] font-semibold leading-none tracking-tight text-violet-900">₹ 12,400</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Advances", "₹ 40,000"],
            ["Expenses", "₹ 21,600"],
            ["Settled", "₹ 6,000"],
          ].map(([l, v]) => (
            <span key={l}>
              <span className="block text-[11px] text-zinc-500">{l}</span>
              <span className="mt-0.5 block text-[12.5px] font-semibold leading-tight">{v}</span>
            </span>
          ))}
        </div>
        <ul className="mt-3.5 divide-y divide-zinc-100 border-y border-zinc-100">
          {lines.map((l) => (
            <li key={l.what} className="flex items-center gap-2.5 py-2 text-[12px]">
              <span className="w-[42px] shrink-0 text-[11px] text-zinc-500">{l.date}</span>
              <span className="min-w-0 flex-1 truncate">{l.what}</span>
              <span className={`whitespace-nowrap font-semibold ${l.plus ? "text-emerald-600" : "text-zinc-700"}`}>{l.amount}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3.5 flex items-center justify-between">
          <span className="text-[11.5px] text-zinc-500">Last settled 21 Nov</span>
          <Button primary>Settle now</Button>
        </div>
      </Float>
    </Scene>
  );
}
