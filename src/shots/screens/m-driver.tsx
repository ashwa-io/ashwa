import { Check, CircleCheckBig, Fuel, MapPin, Navigation, Receipt } from "lucide-react";

import { MShell, Pill } from "../kit";

const STAGES = ["Loaded", "On the way", "Reached", "Delivered"];
const AT = 1;

/** Phone: what the driver sees during a trip. */
export default function MobileDriver() {
  return (
    <MShell tab="trips">
      <div className="flex h-full flex-col px-5 pb-4 pt-[56px]">
        <div className="flex items-start justify-between">
          <span>
            <span className="block text-[12.5px] font-medium text-zinc-500">Trip 2291, HR 26 AS 1024</span>
            <h1 className="mt-1 text-[26px] font-bold leading-none tracking-tight">Raipur to Nagpur</h1>
          </span>
          <Pill tone="green" dot>
            On trip
          </Pill>
        </div>

        <div className="mt-7 flex">
          {STAGES.map((s, i) => (
            <div key={s} className="relative flex flex-1 flex-col items-center">
              {i > 0 ? (
                <i className={`absolute right-1/2 top-[13px] h-[3px] w-full ${i <= AT ? "bg-violet-600" : "bg-zinc-200"}`} />
              ) : null}
              <span
                className={`relative z-10 grid size-7 place-items-center rounded-full text-[12px] font-semibold ${
                  i < AT
                    ? "bg-violet-600 text-white"
                    : i === AT
                      ? "bg-white text-violet-700 ring-[3px] ring-inset ring-violet-600"
                      : "bg-zinc-200 text-zinc-500"
                }`}
              >
                {i < AT ? <Check className="size-4" strokeWidth={3} /> : i + 1}
              </span>
              <span className={`mt-2 text-[11.5px] ${i === AT ? "font-semibold text-zinc-900" : "text-zinc-500"}`}>{s}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between text-[12px] font-medium text-zinc-500">
            Next stop
            <span>Stop 2 of 3</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-700">
              <MapPin className="size-[22px]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[16px] font-semibold leading-tight">Sharda Steel yard</span>
              <span className="mt-0.5 block truncate text-[12.5px] leading-tight text-zinc-500">Hingna Road, Nagpur</span>
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-zinc-900 text-white">
              <Navigation className="size-[18px]" />
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 border-t border-zinc-100 pt-3.5">
            {[
              ["122 km", "left"],
              ["14:20", "expected"],
              ["18 tonnes", "TMT bars"],
            ].map(([v, k]) => (
              <span key={k}>
                <span className="block text-[15px] font-semibold leading-tight">{v}</span>
                <span className="block text-[12px] text-zinc-500">{k}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex h-[58px] items-center justify-center gap-2.5 rounded-2xl bg-violet-600 text-[17px] font-semibold text-white shadow-lg shadow-violet-600/30">
          <CircleCheckBig className="size-[22px]" />
          Mark as reached
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {(
            [
              [Fuel, "Add diesel", "Last fill 180 L", "bg-amber-50 text-amber-700"],
              [Receipt, "Add expense", "Toll, food, repair", "bg-sky-50 text-sky-700"],
            ] as const
          ).map(([Icon, title, note, tone]) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-3.5">
              <span className={`grid size-10 place-items-center rounded-xl ${tone}`}>
                <Icon className="size-5" />
              </span>
              <span className="mt-3 block text-[15px] font-semibold leading-tight">{title}</span>
              <span className="mt-0.5 block text-[12px] text-zinc-500">{note}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between rounded-2xl bg-zinc-100 px-4 py-3 text-[12.5px] text-zinc-600">
          <span>
            Advance <b className="font-semibold text-zinc-900">₹12,000</b>
          </span>
          <span>
            Spent <b className="font-semibold text-zinc-900">₹7,450</b>
          </span>
          <span>
            Left <b className="font-semibold text-emerald-700">₹4,550</b>
          </span>
        </div>
      </div>
    </MShell>
  );
}
