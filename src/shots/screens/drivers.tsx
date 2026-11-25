import { Plus } from "lucide-react";

import { Avatar, Button, Float, Panel, Pill, Scene, SearchField } from "../kit";

type Status = "On trip" | "Free" | "On leave";

const DRIVERS: { name: string; hue: number; since: string; phone: string; licence: string; plate: string; balance: string; status: Status }[] = [
  { name: "Rakesh Yadav", hue: 24, since: "With you since 2019", phone: "98xxx xx210", licence: "CG04 20140041823", plate: "HR 26 AS 1024", balance: "₹ 12,400", status: "On trip" },
  { name: "Sunil Kumar", hue: 205, since: "With you since 2021", phone: "97xxx xx684", licence: "HR26 20170018456", plate: "CG 04 MX 2217", balance: "₹ 8,750", status: "On trip" },
  { name: "Imran Qureshi", hue: 150, since: "With you since 2018", phone: "99xxx xx032", licence: "MH31 20120067310", plate: "CG 07 BQ 5530", balance: "₹ 21,300", status: "On trip" },
  { name: "Harpreet Singh", hue: 340, since: "With you since 2016", phone: "98xxx xx577", licence: "PB10 20090022094", plate: "HR 39 BK 7741", balance: "₹ 0", status: "Free" },
  { name: "Dinesh Sahu", hue: 262, since: "With you since 2022", phone: "96xxx xx149", licence: "CG07 20180035627", plate: "HR 51 DE 9025", balance: "₹ 4,200", status: "Free" },
  { name: "Manoj Verma", hue: 48, since: "With you since 2020", phone: "70xxx xx865", licence: "MP09 20150049781", plate: "CG 10 AR 4406", balance: "₹ 15,900", status: "On trip" },
  { name: "Arif Khan", hue: 180, since: "With you since 2023", phone: "88xxx xx403", licence: "CG13 20190012268", plate: "Not assigned", balance: "₹ 0", status: "On leave" },
];

const TONE = { "On trip": "green", Free: "blue", "On leave": "amber" } as const;

const COLS = "grid grid-cols-[176px_104px_134px_114px_84px_94px] items-center pl-5 pr-16";

const LINES = [
  { date: "24 Nov", what: "Advance for TR 4821", amount: "+ ₹ 15,000", plus: true },
  { date: "24 Nov", what: "Diesel, Rajnandgaon", amount: "- ₹ 9,800" },
  { date: "23 Nov", what: "Toll, NH 53", amount: "- ₹ 1,240" },
  { date: "21 Nov", what: "Settled in cash", amount: "- ₹ 6,000" },
  { date: "20 Nov", what: "Advance for TR 4809", amount: "+ ₹ 25,000", plus: true },
];

/** Drivers: the roster, and what each driver is holding in cash. */
export default function Drivers() {
  return (
    <Scene tint="sky">
      <Panel
        title="Drivers"
        subtitle="18 drivers, 11 on trip"
        className="left-[48px] top-[44px] h-[612px] w-[790px]"
        flush
        actions={
          <>
            <SearchField placeholder="Search name or phone" />
            <Button primary>
              <Plus className="size-3.5" />
              Add driver
            </Button>
          </>
        }
      >
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium text-zinc-500`}>
          <span>Driver</span>
          <span>Phone</span>
          <span>Licence</span>
          <span>Vehicle</span>
          <span className="text-right">Ledger</span>
          <span className="text-right">Status</span>
        </div>
        {DRIVERS.map((d, i) => (
          <div key={d.name} className={`${COLS} h-[72px] border-b border-zinc-100 text-[12.5px] ${i === 0 ? "bg-violet-50/60" : ""}`}>
            <span className="flex items-center gap-2.5">
              <Avatar name={d.name} hue={d.hue} size={34} />
              <span>
                <span className="block text-[13px] font-semibold leading-tight">{d.name}</span>
                <span className="mt-0.5 block text-[11px] leading-tight text-zinc-500">{d.since}</span>
              </span>
            </span>
            <span className="font-mono text-[11.5px] text-zinc-700">{d.phone}</span>
            <span className="font-mono text-[11.5px] text-zinc-700">{d.licence}</span>
            <span className={d.plate === "Not assigned" ? "text-[12px] text-zinc-400" : "font-mono text-[11.5px] text-zinc-700"}>{d.plate}</span>
            <span className={`text-right font-semibold ${d.balance === "₹ 0" ? "text-zinc-400" : ""}`}>{d.balance}</span>
            <span className="text-right">
              <Pill tone={TONE[d.status]} dot>
                {d.status}
              </Pill>
            </span>
          </div>
        ))}
      </Panel>

      <Float className="right-[48px] top-[120px] w-[290px] p-4">
        <div className="flex items-center gap-3">
          <Avatar name="Rakesh Yadav" hue={24} size={38} />
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-semibold leading-tight">Rakesh Yadav</span>
            <span className="block text-[11.5px] leading-tight text-zinc-500">Cash ledger, November</span>
          </span>
        </div>
        <div className="mt-4 rounded-xl bg-violet-50 px-3.5 py-3">
          <p className="text-[11.5px] text-violet-700">Balance with driver</p>
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
          {LINES.map((l) => (
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
