import { Bell, Bus, Check, Phone } from "lucide-react";

import { Avatar, MapArt, MapPin, MShell } from "../kit";

const ROUTE = "M318 246 C399 208.5 472.1 173.25 554.2 141.9";

const TIMELINE: [string, string, string, boolean][] = [
  ["Boarded", "Telibandha stop", "07:14", true],
  ["Next stop", "Shankar Nagar", "07:38", false],
  ["Reached school", "Expected, on time", "07:45", false],
];

/** Phone: a parent following their child's school bus. */
export default function MobileParent() {
  return (
    <MShell tab="none">
      <div className="flex h-full flex-col px-5 pb-7 pt-[56px]">
        <div className="flex items-center gap-3">
          <Avatar name="Aarav Mehta" hue={205} size={46} />
          <span className="min-w-0 flex-1">
            <span className="block text-[18px] font-bold leading-tight tracking-tight">Aarav Mehta</span>
            <span className="block truncate text-[12.5px] leading-tight text-zinc-500">Class 4 B, Greenfield Public School</span>
          </span>
          <span className="relative grid size-10 place-items-center rounded-full border border-zinc-200 bg-white">
            <Bell className="size-[18px]" />
            <i className="absolute right-2.5 top-2.5 size-2 rounded-full bg-red-500 ring-2 ring-white" />
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <span>
            <span className="block text-[12.5px] font-medium text-emerald-600">On the way to school</span>
            <h1 className="mt-1 text-[26px] font-bold leading-none tracking-tight">Bus is 2 stops away</h1>
          </span>
          <span className="rounded-xl bg-violet-600 px-3 py-1.5 text-center text-white">
            <b className="block text-[18px] font-bold leading-tight">9 min</b>
            <span className="block text-[10.5px] leading-tight text-violet-200">ETA 07:45</span>
          </span>
        </div>

        <div className="relative mt-4 h-[236px] shrink-0 overflow-hidden rounded-2xl border border-zinc-200">
          {/* The map is drawn at full size and shifted, so the card shows a close crop of the route. */}
          <div className="absolute h-[500px] w-[800px]" style={{ left: -262, top: -68 }}>
            <MapArt>
              <path d={ROUTE} fill="none" stroke="#7c3aed" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
              <path d={ROUTE} fill="none" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" pathLength={1} strokeDasharray="0.36 1" />
              <MapPin x={318} y={246} color="#7c3aed" />
              <MapPin x={474} y={174} />
              <MapPin x={554} y={142} label="School" />
              <g transform="translate(404 208)">
                <circle r="24" fill="#7c3aed" opacity="0.16" />
                <circle r="16" fill="#7c3aed" stroke="#fff" strokeWidth="3" />
                <Bus x={-9} y={-9} width={18} height={18} color="#fff" strokeWidth={2.2} />
              </g>
            </MapArt>
          </div>
        </div>

        <ul className="mt-4 rounded-2xl border border-zinc-200 bg-white px-4">
          {TIMELINE.map(([title, note, time, done], i) => (
            <li key={title} className="relative flex items-center gap-3 border-b border-zinc-100 py-3 last:border-b-0">
              {i < TIMELINE.length - 1 ? <i className="absolute left-[11px] top-[38px] h-[30px] w-0.5 bg-zinc-200" /> : null}
              <span
                className={`relative grid size-6 shrink-0 place-items-center rounded-full ${done ? "bg-emerald-500 text-white" : "border-2 border-dashed border-zinc-300 bg-white"}`}
              >
                {done ? <Check className="size-3.5" strokeWidth={3} /> : null}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14.5px] font-semibold leading-tight">{title}</span>
                <span className="block text-[12px] leading-tight text-zinc-500">{note}</span>
              </span>
              <span className={`font-mono text-[13px] ${done ? "font-semibold text-zinc-900" : "text-zinc-500"}`}>{time}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3.5">
          <Avatar name="Rakesh Yadav" hue={24} size={42} />
          <span className="min-w-0 flex-1">
            <span className="block text-[14.5px] font-semibold leading-tight">Rakesh Yadav</span>
            <span className="block truncate text-[12px] leading-tight text-zinc-500">Driver, Bus 3, HR 12 FA 6610</span>
          </span>
          <span className="grid size-11 place-items-center rounded-full bg-violet-600 text-white">
            <Phone className="size-[18px]" />
          </span>
        </div>
      </div>
    </MShell>
  );
}
