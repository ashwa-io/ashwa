import { BellRing, CheckCheck } from "lucide-react";

import { Avatar, Bar, Float, Panel, Pill, Scene, VehicleTile } from "../kit";

const BUSES: { bus: string; route: string; driver: string; hue: number; stop: number; of: number; next: string; students: number; late?: number }[] = [
  { bus: "Bus 3", route: "Route North", driver: "Rakesh Yadav", hue: 205, stop: 5, of: 9, next: "Telibandha", students: 31 },
  { bus: "Bus 7", route: "Route East", driver: "Mahesh Sahu", hue: 28, stop: 3, of: 8, next: "Pachpedi Naka", students: 18, late: 9 },
  { bus: "Bus 1", route: "Route Central", driver: "Imran Sheikh", hue: 150, stop: 7, of: 8, next: "Jaistambh Chowk", students: 42 },
  { bus: "Bus 5", route: "Route South", driver: "Dinesh Tiwari", hue: 262, stop: 4, of: 10, next: "Santoshi Nagar", students: 24 },
  { bus: "Bus 9", route: "Route West", driver: "Suresh Nishad", hue: 340, stop: 2, of: 7, next: "Tatibandh", students: 11, late: 6 },
  { bus: "Bus 2", route: "Route Ring Road", driver: "Anil Dewangan", hue: 180, stop: 6, of: 9, next: "Shankar Nagar", students: 36 },
  { bus: "Bus 6", route: "Route Airport", driver: "Vijay Thakur", hue: 48, stop: 8, of: 9, next: "School gate", students: 39 },
];

const COLS = "grid grid-cols-[150px_150px_170px_70px_1fr] items-center gap-x-4 pl-5 pr-8";

/** School transport desk: every bus on its morning run, and what a parent sees. */
export default function School() {
  return (
    <Scene tint="sky">
      <Panel
        title="Morning run"
        subtitle="Greenfield Public School, Wednesday 18 June"
        className="left-[48px] top-[112px] h-[544px] w-[760px]"
        flush
      >
        <div className={`${COLS} h-9 border-b border-zinc-100 text-[11.5px] font-medium text-zinc-500`}>
          <span>Bus</span>
          <span>Driver</span>
          <span>Progress</span>
          <span>On board</span>
          <span className="text-right">Status</span>
        </div>
        {BUSES.map((b) => (
          <div key={b.bus} className={`${COLS} h-[64px] border-b border-zinc-100 last:border-b-0`}>
            <span className="flex items-center gap-3">
              <VehicleTile kind="bus" hue={b.hue} size={34} />
              <span>
                <span className="block text-[13px] font-semibold leading-tight">{b.bus}</span>
                <span className="block text-[11.5px] leading-tight text-zinc-500">{b.route}</span>
              </span>
            </span>
            <span className="flex items-center gap-2">
              <Avatar name={b.driver} hue={b.hue} size={24} />
              <span className="truncate text-[12.5px]">{b.driver}</span>
            </span>
            <span>
              <span className="mb-1.5 flex items-baseline justify-between gap-2">
                <span className="text-[12px] font-semibold">
                  Stop {b.stop} of {b.of}
                </span>
                <span className="truncate text-[11px] text-zinc-500">{b.next}</span>
              </span>
              <Bar value={(b.stop / b.of) * 100} tone={b.late ? "amber" : "blue"} />
            </span>
            <span className="text-[13px] font-semibold">
              {b.students} <span className="text-[11px] font-normal text-zinc-500">students</span>
            </span>
            <span className="text-right">
              {b.late ? (
                <Pill tone="amber" dot>
                  +{b.late} min
                </Pill>
              ) : (
                <Pill tone="green" dot>
                  On time
                </Pill>
              )}
            </span>
          </div>
        ))}
      </Panel>

      <Float className="right-[48px] top-[44px] grid w-[470px] grid-cols-3 divide-x divide-zinc-100 py-3.5">
        {[
          ["Buses on route", "8", "of 9 today", "text-zinc-500"],
          ["Students on board", "214", "of 312 expected", "text-sky-600"],
          ["Running late", "2", "Bus 7 and Bus 9", "text-amber-600"],
        ].map(([label, value, note, tone]) => (
          <div key={label} className="px-4">
            <p className="text-[11.5px] text-zinc-500">{label}</p>
            <p className="mt-1 text-[24px] font-semibold leading-none tracking-tight">{value}</p>
            <p className={`mt-1.5 text-[11px] font-medium ${tone}`}>{note}</p>
          </div>
        ))}
      </Float>

      <Float className="right-[48px] top-[196px] w-[290px] p-4">
        <div className="flex items-center gap-2 text-[11.5px] font-medium text-zinc-500">
          <BellRing className="size-3.5 text-sky-600" />
          Parent notification
          <span className="ml-auto font-normal">07:28</span>
        </div>
        <div className="mt-3 rounded-xl bg-zinc-900 p-3.5 text-white">
          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <VehicleTile kind="bus" hue={205} size={22} />
            Greenfield Public School
            <span className="ml-auto">now</span>
          </div>
          <p className="mt-2.5 text-[14px] font-semibold leading-snug">Bus 3 reaches Telibandha stop in 4 min</p>
          <p className="mt-1 text-[12px] leading-snug text-zinc-300">Please be at the stop by 07:32. Aarav boards here.</p>
        </div>
        <p className="mt-4 text-[11.5px] font-medium text-zinc-500">Stops ahead on Route North</p>
        <ul className="mt-2 space-y-2.5">
          {[
            ["Telibandha", "07:32", true],
            ["Shankar Nagar", "07:38", false],
            ["Civil Lines", "07:44", false],
            ["School gate", "07:52", false],
          ].map(([name, time, next]) => (
            <li key={name as string} className="flex items-center gap-2.5 text-[12.5px]">
              <i className={`size-2 rounded-full ${next ? "bg-sky-500 ring-4 ring-sky-100" : "bg-zinc-300"}`} />
              <span className={next ? "font-semibold" : ""}>{name}</span>
              <span className="ml-auto font-mono text-[11.5px] text-zinc-500">{time}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-1.5 border-t border-zinc-100 pt-3 text-[11.5px] text-zinc-500">
          <CheckCheck className="size-3.5 text-emerald-600" />
          Sent to 6 parents at this stop
        </div>
      </Float>
    </Scene>
  );
}
