import { FileClock, Gauge, LogOut, MapPin as PinIcon, Plus, Timer, ZapOff } from "lucide-react";

import { CONTEXTS, type Context } from "../contexts";
import { Avatar, Float, MapArt, MapVehicle, Panel, Pill, Scene, SearchField, type Tone } from "../kit";

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

/** An empty note stands for "No trip assigned", in the world's own word for a trip. */
const FEED: { icon: typeof Gauge; tile: string; alert: string; note: string; where: string; when: string; severity: "High" | "Medium" | "Low" }[] = [
  { icon: Gauge, tile: "bg-red-50 text-red-600", alert: "Overspeed: 92 km/h in a 60 zone", note: "Held for 48 seconds", where: "Ring Road East", when: "11:42", severity: "High" },
  { icon: LogOut, tile: "bg-amber-50 text-amber-600", alert: "Geofence exit: left Depot off schedule", note: "", where: "Transport Nagar", when: "11:18", severity: "Medium" },
  { icon: ZapOff, tile: "bg-red-50 text-red-600", alert: "Power cut: tracker unplugged", note: "Running on backup battery", where: "Industrial Area", when: "10:56", severity: "High" },
  { icon: Timer, tile: "bg-amber-50 text-amber-600", alert: "Idling: engine on for 24 min", note: "Parked with engine running", where: "Telibandha", when: "10:31", severity: "Low" },
  { icon: FileClock, tile: "bg-sky-50 text-sky-600", alert: "Renewal due: insurance ends in 6 days", note: "Policy ends 2 Dec 2026", where: "Civil Lines", when: "09:00", severity: "Low" },
];

const SEVERITY: Record<string, Tone> = { High: "red", Medium: "amber", Low: "zinc" };

const RULES = [
  { icon: Gauge, name: "Overspeed", note: "Above the zone limit", on: true },
  { icon: Timer, name: "Idling", note: "Engine on over 10 min", on: true },
  { icon: LogOut, name: "Geofence exit", note: "Depot and yards", on: true },
  { icon: ZapOff, name: "Power cut", note: "Tracker unplugged", on: true },
  { icon: FileClock, name: "Renewal due", note: "30 days before expiry", on: false },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`flex h-[18px] w-8 shrink-0 items-center rounded-full p-0.5 ${on ? "justify-end bg-violet-600" : "bg-zinc-200"}`}>
      <i className="size-3.5 rounded-full bg-white shadow-sm" />
    </span>
  );
}

const COLS = "grid grid-cols-[34px_1fr_190px_170px_80px_84px] items-center gap-4 px-5";

/** Alerts: the feed of what went wrong today, the rules behind it, and where the selected alert fired. */
export default function Alerts({ ctx = CONTEXTS.fleet }: { ctx?: Context }) {
  const [focus] = ctx.vehicles;
  return (
    <Scene tint={ctx.tint}>
      <Panel
        title="Alerts"
        subtitle="31 today, 4 need attention"
        className="left-[48px] top-[44px] h-[462px] w-[1024px]"
        flush
        actions={
          <>
            <Pill tone="red" dot>
              9 high
            </Pill>
            <Pill tone="amber" dot>
              12 medium
            </Pill>
            <Pill tone="zinc" dot>
              10 low
            </Pill>
            <SearchField placeholder="Search alerts" />
          </>
        }
      >
        <div className={`${COLS} h-[34px] border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-medium uppercase tracking-wide text-zinc-400`}>
          <span />
          <span>Alert</span>
          <span>{cap(ctx.noun.vehicle)}</span>
          <span>Where</span>
          <span>When</span>
          <span className="text-right">Severity</span>
        </div>
        {FEED.map((a, i) => (
          <div key={a.when} className={`${COLS} relative h-[60px] border-b border-zinc-100 ${i === 0 ? "bg-amber-50/60" : ""}`}>
            {i === 0 ? <i className="absolute inset-y-0 left-0 w-[3px] bg-amber-500" /> : null}
            <span className={`grid size-[34px] place-items-center rounded-lg ${a.tile}`}>
              <a.icon className="size-[17px]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-semibold leading-tight">{a.alert}</span>
              <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{a.note || `No ${ctx.noun.trip} assigned`}</span>
            </span>
            <span className="flex min-w-0 items-center gap-2.5">
              <Avatar name={ctx.people[i]} hue={ctx.vehicles[i].hue} size={26} />
              <span className="min-w-0">
                <span className="block truncate font-mono text-[12px] font-medium leading-tight">{ctx.vehicles[i].plate}</span>
                <span className="block truncate text-[11.5px] leading-tight text-zinc-500">{ctx.people[i]}</span>
              </span>
            </span>
            <span className="flex items-center gap-1.5 text-[12.5px] text-zinc-700">
              <PinIcon className="size-3.5 text-zinc-400" />
              {a.where}
            </span>
            <span className="font-mono text-[12px] text-zinc-600">{a.when}</span>
            <span className="text-right">
              <Pill tone={SEVERITY[a.severity]} dot>
                {a.severity}
              </Pill>
            </span>
          </div>
        ))}
      </Panel>

      <Float className="bottom-[44px] left-[84px] w-[540px] overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
          <span className="text-[13.5px] font-semibold">Alert rules</span>
          <span className="text-[11.5px] text-zinc-500">4 of 5 on, sent to the app and by SMS</span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 px-4 py-1.5">
          {RULES.map((r) => (
            <div key={r.name} className="flex items-center gap-2.5 py-2">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-zinc-100 text-zinc-600">
                <r.icon className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-semibold leading-tight">{r.name}</span>
                <span className="block truncate text-[11px] leading-tight text-zinc-500">{r.note}</span>
              </span>
              <Toggle on={r.on} />
            </div>
          ))}
          <div className="flex items-center gap-2.5 py-2 text-[12.5px] font-medium text-violet-700">
            <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-dashed border-violet-300">
              <Plus className="size-3.5" />
            </span>
            Add a rule
          </div>
        </div>
      </Float>

      <Float className="bottom-[44px] right-[84px] w-[372px] overflow-hidden">
        <div className="h-[150px] overflow-hidden">
          {/* Zoom the kit map in on the spot where the alert fired. */}
          <div className="h-[500px] w-[800px] origin-top-left" style={{ transform: "translate(-240px, -261px) scale(0.85)" }}>
            <MapArt>
              <MapVehicle x={517} y={362} angle={23} kind={focus.marker} label="92 km/h" />
            </MapArt>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-zinc-100 px-4 py-3">
          <span className="min-w-0 flex-1">
            <span className="block text-[12.5px] font-semibold leading-tight">Overspeed on Ring Road East</span>
            <span className="mt-0.5 block truncate font-mono text-[11px] leading-tight text-zinc-500">{focus.plate} at 11:42</span>
          </span>
          <Pill tone="red" dot>
            High
          </Pill>
        </div>
      </Float>
    </Scene>
  );
}
