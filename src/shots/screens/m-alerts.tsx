import { BatteryWarning, Fuel, Gauge, MapPinned, Power, Timer, TriangleAlert, type LucideIcon } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { MShell } from "../kit";

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

type Alert = { icon: LucideIcon; tone: string; title: string; v: number; note: string; time: string; unread?: boolean };

const GROUPS: [string, Alert[]][] = [
  [
    "Today",
    [
      { icon: Gauge, tone: "bg-red-50 text-red-600", title: "Overspeed: 92 km/h", v: 0, note: "Near {stop1}", time: "11:42", unread: true },
      { icon: MapPinned, tone: "bg-violet-50 text-violet-700", title: "Left {from}", v: 1, note: "Geofence exit", time: "10:15", unread: true },
      { icon: Timer, tone: "bg-amber-50 text-amber-700", title: "Idling for 25 min", v: 2, note: "Engine on, not moving", time: "09:30", unread: true },
      { icon: Power, tone: "bg-emerald-50 text-emerald-700", title: "Ignition on", v: 3, note: "{Trip} started", time: "06:10" },
    ],
  ],
  [
    "Yesterday",
    [
      { icon: Fuel, tone: "bg-red-50 text-red-600", title: "Fuel dropped 38 L", v: 4, note: "Parked at {stop0}", time: "22:48" },
      { icon: TriangleAlert, tone: "bg-amber-50 text-amber-700", title: "Harsh braking", v: 5, note: "Ring Road East", time: "17:05" },
      { icon: BatteryWarning, tone: "bg-sky-50 text-sky-700", title: "Tracker battery low", v: 0, note: "12% left", time: "14:20" },
    ],
  ],
];

/** Phone: the notifications list. */
export default function MobileAlerts({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const fill = (s: string) =>
    s
      .replace("{from}", ctx.from)
      .replace("{stop0}", ctx.stops[0])
      .replace("{stop1}", ctx.stops[1])
      .replace("{Trip}", cap(ctx.noun.trip));
  return (
    <MShell tab="alerts">
      <div className="flex h-full flex-col px-5 pt-[56px]">
        <div className="flex items-end justify-between">
          <h1 className="text-[28px] font-bold leading-none tracking-tight">Alerts</h1>
          <span className="text-[13px] font-semibold text-violet-700">Mark all read</span>
        </div>
        {GROUPS.map(([day, alerts]) => (
          <section key={day}>
            <h2 className="mb-1 mt-5 flex items-center gap-2 text-[12.5px] font-semibold text-zinc-500">
              {day}
              {day === "Today" ? <span className="rounded-full bg-violet-600 px-1.5 py-px text-[10.5px] text-white">3 new</span> : null}
            </h2>
            <ul>
              {alerts.map((a) => (
                <li key={a.title} className="flex h-[68px] items-center gap-3 border-b border-zinc-200/70 last:border-b-0">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${a.tone}`}>
                    <a.icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block truncate text-[15px] leading-tight ${a.unread ? "font-bold" : "font-semibold"}`}>{fill(a.title)}</span>
                    <span className="mt-1 block truncate text-[12px] leading-tight text-zinc-500">
                      <span className="font-mono text-zinc-700">{ctx.vehicles[a.v].plate}</span> · {fill(a.note)}
                    </span>
                  </span>
                  <span className="flex flex-col items-end gap-2">
                    <span className="font-mono text-[12px] text-zinc-500">{a.time}</span>
                    <i className={`size-2.5 rounded-full ${a.unread ? "bg-violet-600" : "bg-transparent"}`} />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </MShell>
  );
}
