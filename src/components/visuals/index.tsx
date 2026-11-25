import type { ReactNode } from "react";

import type { VisualKey } from "@/content/types";
import { cn } from "@/lib/utils";

import { Bars, Chip, Dot, MapCanvas, Phone, Pin, Route, Row, Vehicle, Window, Zone } from "./kit";

/**
 * Concept visuals. Sample data is fictional and the layouts are illustrative,
 * not screenshots of the Ashwa apps.
 */

function Stage({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("relative aspect-[4/3] w-full", className)}>{children}</div>;
}

function MapWindow({
  title,
  label,
  children,
  overlay,
  side,
}: {
  title: string;
  label: string;
  children: ReactNode;
  overlay?: ReactNode;
  side?: ReactNode;
}) {
  return (
    <Window title={title} className="absolute inset-0 flex flex-col">
      <div className="flex min-h-0 flex-1">
        {side ? (
          <ul className="hidden w-[38%] shrink-0 overflow-hidden border-r border-border sm:block">
            {side}
          </ul>
        ) : null}
        <div className="relative min-w-0 flex-1">
          <MapCanvas label={label}>{children}</MapCanvas>
          {overlay}
        </div>
      </div>
    </Window>
  );
}

function LiveMap() {
  return (
    <Stage>
      <MapWindow
        title="Live fleet"
        label="Concept map with vehicles moving along city roads"
        side={
          <>
            <Row tone="moving" title="CG 04 MX 2217" meta="Ring Road, heading north" value="46 km/h" />
            <Row tone="moving" title="CG 07 AT 9031" meta="Depot to Bhilai yard" value="58 km/h" />
            <Row tone="idle" title="CG 04 KL 5540" meta="Idling at loading bay" value="12 min" />
            <Row tone="stopped" title="CG 10 BB 1182" meta="Parked, ignition off" value="2 h" />
            <Row tone="moving" title="CG 04 PZ 7765" meta="Route 3, stop 5 of 9" value="33 km/h" />
            <Row tone="alert" title="CG 07 CN 4409" meta="Left geofence: Depot" value="now" />
          </>
        }
        overlay={
          <>
            <Chip tone="moving" className="absolute left-[12%] top-[14%]">
              4 moving
            </Chip>
            <Chip tone="idle" className="absolute left-[12%] top-[26%]">
              1 idle
            </Chip>
            <Chip className="absolute bottom-[8%] right-[6%]">Updated 3 s ago</Chip>
          </>
        }
      >
        <Route road="ring" />
        <Route road="east" tone="moving" />
        <Zone x={330} y={170} r={46} />
        <Vehicle road="ring" seconds={22} />
        <Vehicle road="cross" seconds={28} delay={-9} tone="moving" />
        <Vehicle road="east" seconds={14} delay={-4} tone="moving" />
        <Vehicle road="spur" seconds={24} delay={-12} reverse tone="idle" />
        <Pin x={640} y={220} tone="stopped" />
      </MapWindow>
    </Stage>
  );
}

function TripPlayback() {
  const stops = ["06:40 Depot", "07:25 Stop 1", "08:10 Stop 2", "09:05 Arrived"];
  return (
    <Stage>
      <MapWindow
        title="Trip playback"
        label="Concept map replaying one vehicle's route with stops"
        overlay={
          <div className="absolute inset-x-[5%] bottom-[6%] rounded-xl border border-border bg-card/95 p-3 shadow-lift backdrop-blur">
            <div className="flex items-center justify-between font-mono text-[0.68rem] text-muted-foreground">
              <span>06:40</span>
              <span className="text-foreground">Playing at 8x</span>
              <span>09:05</span>
            </div>
            <div className="relative mt-2 h-1.5 rounded-full bg-foreground/10">
              <span className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-primary" />
              <span className="absolute left-[62%] top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-primary" />
            </div>
            <ol className="mt-2 hidden justify-between gap-2 font-mono text-[0.64rem] text-muted-foreground sm:flex">
              {stops.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        }
      >
        <Route road="cross" planned tone="stopped" />
        <Route road="cross" />
        <Pin x={90} y={60} tone="stopped" />
        <Pin x={300} y={235} tone="idle" />
        <Pin x={420} y={300} tone="idle" />
        <Pin x={770} y={470} pulse />
        <Vehicle road="cross" seconds={12} />
      </MapWindow>
    </Stage>
  );
}

function Geofence() {
  return (
    <Stage>
      <MapWindow
        title="Geofences"
        label="Concept map with two geofence zones and entry and exit events"
        overlay={
          <>
            <Chip className="absolute left-[30%] top-[18%]">Depot zone</Chip>
            <Chip className="absolute left-[62%] top-[58%]">Customer yard</Chip>
            <ul className="absolute right-[4%] top-[8%] hidden w-[40%] rounded-xl border border-border bg-card/95 shadow-lift backdrop-blur sm:block">
              <Row tone="alert" title="Exited Depot zone" meta="CG 07 CN 4409" value="09:12" />
              <Row tone="moving" title="Entered Customer yard" meta="CG 04 MX 2217" value="09:40" />
              <Row tone="idle" title="Dwell over 30 min" meta="CG 04 KL 5540" value="10:02" />
            </ul>
          </>
        }
      >
        <Zone x={330} y={170} r={70} />
        <Zone x={560} y={360} r={84} tone="moving" />
        <Route road="cross" tone="moving" />
        <Vehicle road="cross" seconds={20} tone="moving" />
        <Vehicle road="ring" seconds={26} delay={-8} />
      </MapWindow>
    </Stage>
  );
}

function Alerts() {
  const items: [Parameters<typeof Row>[0]["tone"], string, string, string][] = [
    ["alert", "Overspeed: 92 km/h in a 60 zone", "CG 07 AT 9031 on NH 53", "now"],
    ["alert", "Left geofence: Depot", "CG 07 CN 4409", "2 min"],
    ["idle", "Idling for 18 minutes", "CG 04 KL 5540 at loading bay", "6 min"],
    ["moving", "Ignition on", "CG 10 BB 1182", "14 min"],
    ["stopped", "Device power disconnected", "CG 04 PZ 7765", "31 min"],
  ];
  return (
    <Stage className="grid place-items-center">
      <div className="grid w-full gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
        <Window title="Alerts">
          <ul>
            {items.map(([tone, title, meta, value]) => (
              <Row key={title} tone={tone} title={title} meta={meta} value={value} />
            ))}
          </ul>
        </Window>
        <div className="hidden justify-center sm:flex">
          <Phone>
            <div className="bg-ink px-4 pb-6 pt-10 text-[#f4efe4]">
              <p className="eyebrow text-ink-muted">Notification</p>
              <p className="mt-3 text-sm font-medium leading-snug">
                Overspeed: CG 07 AT 9031 is at 92 km/h in a 60 zone.
              </p>
              <p className="mt-2 font-mono text-[0.68rem] text-ink-muted">NH 53, 09:42</p>
            </div>
            <ul className="bg-card">
              <Row tone="alert" title="Left geofence: Depot" meta="CG 07 CN 4409" value="2 min" />
              <Row tone="idle" title="Idling 18 min" meta="CG 04 KL 5540" value="6 min" />
            </ul>
          </Phone>
        </div>
      </div>
    </Stage>
  );
}

function Reports() {
  return (
    <Stage className="grid place-items-center">
      <Window title="Reports" className="w-full">
        <div className="grid gap-px bg-border sm:grid-cols-3">
          {[
            ["Distance, this week", "4,812 km"],
            ["Running time", "163 h"],
            ["Idle time", "21 h"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-4">
              <p className="text-[0.7rem] text-muted-foreground">{k}</p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight">{v}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-px border-t border-border bg-border sm:grid-cols-[1.4fr_1fr]">
          <div className="bg-card p-4">
            <p className="eyebrow text-muted-foreground">Distance per day</p>
            <div className="mt-4">
              <Bars values={[52, 68, 44, 80, 96, 61, 38]} highlight={4} />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[0.64rem] text-muted-foreground">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>
          </div>
          <ul className="bg-card">
            <Row title="CG 04 MX 2217" meta="Most distance" value="1,204 km" />
            <Row title="CG 04 KL 5540" meta="Most idle time" value="7 h" />
            <Row title="CG 07 AT 9031" meta="Overspeed events" value="14" />
            <Row title="CG 10 BB 1182" meta="Least used" value="96 km" />
          </ul>
        </div>
      </Window>
    </Stage>
  );
}

function Drivers() {
  const people: [string, string, string][] = [
    ["Ramesh K.", "CG 04 MX 2217", "On trip"],
    ["Sunita V.", "CG 04 PZ 7765", "On trip"],
    ["Imran S.", "Unassigned", "Available"],
    ["Deepak T.", "CG 07 AT 9031", "Rest"],
  ];
  return (
    <Stage className="grid place-items-center">
      <Window title="Drivers" className="w-full">
        <ul className="grid gap-px bg-border sm:grid-cols-2">
          {people.map(([name, vehicle, state]) => (
            <li key={name} className="flex items-center gap-3 bg-card p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-semibold">
                {name[0]}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">{name}</span>
                <span className="block truncate font-mono text-[0.68rem] text-muted-foreground">
                  {vehicle}
                </span>
              </span>
              <Chip tone={state === "On trip" ? "moving" : state === "Rest" ? "stopped" : "idle"}>
                {state}
              </Chip>
            </li>
          ))}
        </ul>
        <div className="border-t border-border p-4">
          <p className="eyebrow text-muted-foreground">Assign driver to vehicle</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <Chip>Imran S.</Chip>
            <span aria-hidden="true" className="text-muted-foreground">
              to
            </span>
            <Chip>CG 10 BB 1182</Chip>
            <span className="ml-auto rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Assign
            </span>
          </div>
        </div>
      </Window>
    </Stage>
  );
}

function Vehicles() {
  return (
    <Stage className="grid place-items-center">
      <Window title="Vehicles" className="w-full">
        <div className="grid sm:grid-cols-[1fr_1.1fr]">
          <ul className="border-b border-border sm:border-b-0 sm:border-r">
            <Row tone="moving" title="CG 04 MX 2217" meta="Tata 1109, truck" value="On trip" />
            <Row tone="idle" title="CG 04 KL 5540" meta="Eicher Pro, truck" value="Idle" />
            <Row tone="stopped" title="CG 10 BB 1182" meta="Bolero, pickup" value="Parked" />
            <Row tone="moving" title="CG 04 PZ 7765" meta="Starbus, 40 seat" value="Route 3" />
          </ul>
          <div className="p-4">
            <p className="eyebrow text-muted-foreground">CG 04 MX 2217</p>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Odometer", "1,48,220 km"],
                ["Today", "186 km"],
                ["Driver", "Ramesh K."],
                ["Group", "Raipur depot"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.7rem] text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip tone="moving">Device online</Chip>
              <Chip>Ignition on</Chip>
            </div>
          </div>
        </div>
      </Window>
    </Stage>
  );
}

function Routes() {
  const stops: [string, string, boolean][] = [
    ["Shankar Nagar", "07:05", true],
    ["Telibandha", "07:14", true],
    ["Avanti Vihar", "07:22", false],
    ["VIP Road", "07:31", false],
    ["School gate", "07:45", false],
  ];
  return (
    <Stage>
      <MapWindow
        title="Route 3, morning"
        label="Concept map of a bus route with ordered stops"
        side={
          <ol className="p-4">
            {stops.map(([name, time, done], i) => (
              <li key={name} className="relative flex gap-3 pb-4 last:pb-0">
                {i < stops.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-[5px] top-3 h-full w-px",
                      done ? "bg-primary" : "bg-border",
                    )}
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative mt-1 size-[11px] shrink-0 rounded-full border-2",
                    done ? "border-primary bg-primary" : "border-input bg-card",
                  )}
                />
                <span className="min-w-0 flex-1 text-[0.8rem] leading-tight">
                  <span className="block font-medium">{name}</span>
                  <span className="font-mono text-[0.68rem] text-muted-foreground">{time}</span>
                </span>
              </li>
            ))}
          </ol>
        }
        overlay={
          <Chip tone="moving" className="absolute left-[40%] top-[30%]">
            Next stop in 4 min
          </Chip>
        }
      >
        <Route road="ring" planned tone="stopped" />
        <Route road="ring" />
        <Pin x={150} y={300} tone="stopped" />
        <Pin x={250} y={205} tone="stopped" />
        <Pin x={330} y={170} pulse />
        <Pin x={560} y={110} tone="idle" />
        <Pin x={760} y={70} tone="idle" />
        <Vehicle road="ring" seconds={24} />
      </MapWindow>
    </Stage>
  );
}

function Rental() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const rows: [string, [number, number, string][]][] = [
    ["Swift Dzire", [[0, 3, "Booked"], [4, 2, "Booked"]]],
    ["Innova Crysta", [[1, 4, "On trip"]]],
    ["Ertiga", [[0, 1, "Returned"], [3, 3, "Booked"]]],
    ["Thar", [[2, 2, "On trip"], [5, 2, "Booked"]]],
  ];
  return (
    <Stage className="grid place-items-center">
      <Window title="Rental calendar" className="w-full">
        <div className="grid grid-cols-[5.5rem_repeat(7,1fr)] border-b border-border bg-muted/40 font-mono text-[0.64rem] text-muted-foreground">
          <span className="p-2" />
          {days.map((d) => (
            <span key={d} className="border-l border-border p-2">
              {d}
            </span>
          ))}
        </div>
        {rows.map(([car, spans]) => (
          <div
            key={car}
            className="grid grid-cols-[5.5rem_repeat(7,1fr)] items-center border-b border-border last:border-b-0"
          >
            <span className="truncate p-2 text-[0.74rem] font-medium">{car}</span>
            {spans.map(([start, len, label]) => (
              <span
                key={`${start}-${label}`}
                style={{ gridColumn: `${start + 2} / span ${len}` }}
                className={cn(
                  "m-1 truncate rounded-md px-2 py-1.5 text-[0.66rem] font-medium",
                  label === "On trip"
                    ? "bg-primary text-primary-foreground"
                    : label === "Returned"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-foreground/10",
                )}
              >
                {label}
              </span>
            ))}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-2 border-t border-border p-3">
          <Chip tone="moving">2 on trip</Chip>
          <Chip>4 bookings this week</Chip>
          <Chip tone="alert" className="ml-auto">
            Share live trip link
          </Chip>
        </div>
      </Window>
    </Stage>
  );
}

function PhoneMap({ road, chip }: { road: "ring" | "cross"; chip: string }) {
  return (
    <div className="relative h-44">
      <MapCanvas label="Concept phone map with a bus on its route">
        <Route road={road} />
        <Pin x={330} y={170} pulse />
        <Vehicle road={road} seconds={18} />
      </MapCanvas>
      <Chip tone="moving" className="absolute bottom-2 left-2">
        {chip}
      </Chip>
    </div>
  );
}

function SchoolBus() {
  return (
    <Stage className="grid place-items-center">
      <div className="grid w-full items-center gap-5 sm:grid-cols-[1.25fr_auto]">
        <Window title="Transport desk">
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {[
              ["Buses on route", "12 of 14"],
              ["Students on board", "318"],
              ["Running late", "1 bus"],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-3">
                <p className="text-[0.68rem] text-muted-foreground">{k}</p>
                <p className="mt-1 font-display text-xl font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <ul className="border-t border-border">
            <Row tone="moving" title="Bus 3, Route North" meta="Stop 5 of 9, 26 on board" value="On time" />
            <Row tone="alert" title="Bus 7, Route East" meta="Stop 2 of 8, 14 on board" value="+9 min" />
            <Row tone="moving" title="Bus 11, Route South" meta="Stop 6 of 7, 31 on board" value="On time" />
          </ul>
        </Window>
        <div className="hidden justify-center sm:flex">
          <Phone>
            <div className="px-4 pb-3 pt-10">
              <p className="eyebrow text-muted-foreground">Bus 3</p>
              <p className="font-display text-lg font-semibold leading-tight">Arriving in 6 min</p>
            </div>
            <PhoneMap road="ring" chip="2 stops away" />
            <ul>
              <Row tone="moving" title="Picked up at 07:14" meta="Telibandha stop" />
            </ul>
          </Phone>
        </div>
      </div>
    </Stage>
  );
}

function ParentApp() {
  return (
    <Stage className="grid place-items-center">
      <div className="flex w-full items-end justify-center gap-4 sm:gap-8">
        <Phone>
          <div className="px-4 pb-3 pt-10">
            <p className="eyebrow text-muted-foreground">Aarav, Class 4</p>
            <p className="font-display text-lg font-semibold leading-tight">Bus is 2 stops away</p>
          </div>
          <PhoneMap road="ring" chip="ETA 07:22" />
          <ul>
            <Row tone="moving" title="Left school gate" meta="Bus 3, Route North" value="14:05" />
            <Row tone="idle" title="Your stop is next" meta="Avanti Vihar" value="14:31" />
          </ul>
        </Phone>
        <Phone className="hidden translate-y-6 sm:block">
          <div className="bg-ink px-4 pb-5 pt-10 text-[#f4efe4]">
            <p className="eyebrow text-ink-muted">Today</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["07:14", "Boarded the bus"],
                ["07:45", "Reached school"],
                ["14:05", "Left school"],
                ["14:33", "Dropped at stop"],
              ].map(([t, e]) => (
                <li key={t} className="flex gap-3">
                  <span className="font-mono text-[0.7rem] text-ink-muted">{t}</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <p className="text-[0.74rem] text-muted-foreground">Driver</p>
            <p className="text-sm font-medium">Sunita V. and one attendant</p>
          </div>
        </Phone>
      </div>
    </Stage>
  );
}

function Enterprise() {
  const roles = ["Owner", "Manager", "Dispatcher", "Viewer"];
  const perms: [string, boolean[]][] = [
    ["Live tracking", [true, true, true, true]],
    ["Edit geofences", [true, true, false, false]],
    ["Reports", [true, true, true, false]],
    ["Manage users", [true, false, false, false]],
  ];
  return (
    <Stage className="grid place-items-center">
      <Window title="Organisations and roles" className="w-full">
        <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
          <ul className="border-b border-border p-4 text-sm sm:border-b-0 sm:border-r">
            <li className="font-medium">Head office</li>
            {["Raipur depot", "Bhilai depot", "Nagpur branch"].map((b) => (
              <li key={b} className="ml-3 mt-2 border-l border-border pl-3 text-muted-foreground">
                {b}
              </li>
            ))}
            <li className="mt-4 font-medium">Dealer account</li>
            <li className="ml-3 mt-2 border-l border-border pl-3 text-muted-foreground">
              18 customer fleets
            </li>
          </ul>
          <table className="w-full text-[0.72rem]">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th scope="col" className="p-2.5 font-normal">
                  Permission
                </th>
                {roles.map((r) => (
                  <th key={r} scope="col" className="p-2.5 font-normal">
                    {r}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {perms.map(([name, row]) => (
                <tr key={name} className="border-b border-border last:border-b-0">
                  <th scope="row" className="p-2.5 text-left font-medium">
                    {name}
                  </th>
                  {row.map((on, i) => (
                    <td key={i} className="p-2.5">
                      <span className="sr-only">{on ? "Allowed" : "Not allowed"}</span>
                      <Dot tone={on ? "moving" : "stopped"} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Window>
    </Stage>
  );
}

function Assets() {
  return (
    <Stage>
      <MapWindow
        title="Assets"
        label="Concept map of equipment locations on a work site"
        side={
          <>
            <Row tone="moving" title="Excavator 02" meta="Site A, engine on" value="6.4 h" />
            <Row tone="stopped" title="Genset 11" meta="Yard, engine off" value="0 h" />
            <Row tone="idle" title="Transit mixer 5" meta="Site B, idling" value="2.1 h" />
            <Row tone="alert" title="Trailer 19" meta="Moved outside work hours" value="now" />
          </>
        }
        overlay={<Chip className="absolute left-[8%] top-[10%]">Site A boundary</Chip>}
      >
        <Zone x={300} y={220} r={120} />
        <Pin x={250} y={205} tone="moving" pulse />
        <Pin x={330} y={280} tone="idle" />
        <Pin x={640} y={220} tone="stopped" />
        <Pin x={560} y={400} pulse />
      </MapWindow>
    </Stage>
  );
}

function Device() {
  return (
    <Stage className="grid place-items-center">
      <svg
        viewBox="0 0 640 480"
        role="img"
        aria-label="Concept drawing of a GPS tracking device sending location to the cloud and to apps"
        className="size-full"
      >
        <g fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 8">
          <path d="M320 250 C320 170 320 150 320 100" className="animate-dash" stroke="var(--primary)" />
          <path d="M360 300 C460 300 470 230 540 200" />
          <path d="M280 300 C180 300 170 230 100 200" />
        </g>
        <g transform="translate(320 300)">
          <path d="M-110 -10 L0 -60 L110 -10 L0 40 Z" fill="var(--ink-2)" />
          <path d="M-110 -10 L0 40 L0 90 L-110 40 Z" fill="var(--ink)" />
          <path d="M110 -10 L0 40 L0 90 L110 40 Z" fill="#2a251d" />
          <circle cx="-56" cy="34" r="5" fill="var(--moving)" />
          <circle cx="-38" cy="42" r="5" fill="var(--primary)" />
          <circle cx="-20" cy="50" r="5" fill="var(--idle)" />
          <path d="M-30 -12 L0 -26 L30 -12 L0 2 Z" fill="#3a342a" />
        </g>
        {[
          [320, 70, "Satellites"],
          [100, 180, "Mobile network"],
          [540, 180, "Ashwa cloud"],
        ].map(([x, y, label]) => (
          <g key={label as string} transform={`translate(${x} ${y})`}>
            <circle r="34" fill="var(--card)" stroke="var(--border)" strokeWidth="2" />
            <circle r="6" fill="var(--primary)" />
            <text
              y="58"
              textAnchor="middle"
              fontSize="15"
              fill="var(--muted-foreground)"
              fontFamily="var(--ff-mono), monospace"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </Stage>
  );
}

function Api() {
  const code = `POST /webhooks/your-system
{
  "event": "geofence.exit",
  "vehicle": "CG 07 CN 4409",
  "zone": "Depot",
  "at": "2026-11-25T09:12:04+05:30",
  "position": { "lat": 21.2514, "lng": 81.6296 }
}`;
  return (
    <Stage className="grid place-items-center">
      <div className="w-full overflow-hidden rounded-2xl border border-ink-line bg-ink shadow-float">
        <div className="flex items-center gap-2 border-b border-ink-line px-4 py-2.5">
          <span className="eyebrow text-ink-muted">Event payload, illustrative</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[0.74rem] leading-relaxed text-[#f4efe4]">
          <code>{code}</code>
        </pre>
        <div className="flex flex-wrap gap-2 border-t border-ink-line p-4">
          {["Positions", "Trips", "Alerts", "Geofence events"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-line px-2.5 py-1 font-mono text-[0.68rem] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Stage>
  );
}

function Trips() {
  const columns: [string, [string, string, string][]][] = [
    ["Planned", [["Raipur to Nagpur", "CG 04 MX 2217", "Loads 06:00"]]],
    [
      "On the road",
      [
        ["Bhilai to Vizag", "CG 07 AT 9031", "312 km left"],
        ["Raipur to Indore", "CG 04 KL 5540", "Reached stop 1"],
      ],
    ],
    ["Delivered", [["Durg to Kolkata", "CG 10 BB 1182", "Dues pending"]]],
  ];
  return (
    <Stage className="grid place-items-center">
      <Window title="Trip board" className="w-full">
        <div className="grid gap-px bg-border sm:grid-cols-3">
          {columns.map(([stage, trips]) => (
            <div key={stage} className="bg-card p-3">
              <p className="eyebrow flex items-center justify-between text-muted-foreground">
                {stage}
                <span>{trips.length}</span>
              </p>
              <ul className="mt-3 space-y-2">
                {trips.map(([route, vehicle, note]) => (
                  <li key={route} className="rounded-xl border border-border bg-background p-3">
                    <p className="text-[0.8rem] font-medium leading-tight">{route}</p>
                    <p className="mt-1 font-mono text-[0.66rem] text-muted-foreground">{vehicle}</p>
                    <p className="mt-2 text-[0.7rem] text-muted-foreground">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <dl className="grid grid-cols-3 gap-px border-t border-border bg-border">
          {[
            ["Freight", "₹ 86,000"],
            ["Trip cost", "₹ 61,400"],
            ["Profit per km", "₹ 21.4"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-3">
              <dt className="text-[0.68rem] text-muted-foreground">{k}</dt>
              <dd className="mt-0.5 font-display text-lg font-semibold tracking-tight">{v}</dd>
            </div>
          ))}
        </dl>
      </Window>
    </Stage>
  );
}

function Maintenance() {
  return (
    <Stage className="grid place-items-center">
      <Window title="Maintenance" className="w-full">
        <div className="grid sm:grid-cols-2">
          <div className="border-b border-border p-4 sm:border-b-0 sm:border-r">
            <p className="eyebrow text-muted-foreground">Due soon</p>
            <ul className="mt-3 space-y-2.5">
              {[
                ["Insurance", "CG 04 MX 2217", "in 6 days", "alert"],
                ["PUC", "CG 07 AT 9031", "in 12 days", "idle"],
                ["Service at 1,50,000 km", "CG 04 KL 5540", "1,780 km left", "idle"],
                ["National permit", "CG 10 BB 1182", "in 41 days", "moving"],
              ].map(([what, vehicle, when, tone]) => (
                <li key={what} className="flex items-center gap-3">
                  <Dot tone={tone as "alert" | "idle" | "moving"} />
                  <span className="min-w-0 flex-1 text-[0.8rem] leading-tight">
                    <span className="block font-medium">{what}</span>
                    <span className="font-mono text-[0.66rem] text-muted-foreground">{vehicle}</span>
                  </span>
                  <span className="font-mono text-[0.68rem] text-muted-foreground">{when}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <p className="eyebrow text-muted-foreground">Fuel, this month</p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-tight">2,140 L</p>
            <div className="mt-3">
              <Bars values={[40, 72, 55, 90, 62, 48, 80, 66]} highlight={3} />
            </div>
            <ul className="mt-3 border-t border-border">
              <Row title="Diesel, 180 L" meta="HP pump, Tatibandh" value="₹ 16,470" />
            </ul>
          </div>
        </div>
      </Window>
    </Stage>
  );
}

function Coverage() {
  return (
    <Stage>
      <MapWindow
        title="Ward coverage, today"
        label="Concept map of a waste collection route with covered and pending lanes"
        side={
          <>
            <Row tone="moving" title="Ward 12" meta="Vehicle 4, 212 of 240 households" value="88%" />
            <Row tone="moving" title="Ward 13" meta="Vehicle 7, 190 of 198 households" value="96%" />
            <Row tone="idle" title="Ward 14" meta="Vehicle 2, 64 of 221 households" value="29%" />
            <Row tone="alert" title="Ward 15" meta="Not started" value="0%" />
          </>
        }
        overlay={
          <>
            <Chip tone="moving" className="absolute left-[8%] top-[10%]">
              Lane covered
            </Chip>
            <Chip tone="alert" className="absolute left-[8%] top-[22%]">
              Lane pending
            </Chip>
            <Chip className="absolute bottom-[8%] right-[6%]">Sent to state portal</Chip>
          </>
        }
      >
        <Route road="ring" tone="moving" />
        <Route road="north" tone="moving" />
        <Route road="spur" planned />
        <Vehicle road="ring" seconds={30} tone="moving" />
        {[
          [120, 318],
          [190, 250],
          [262, 196],
          [330, 170],
          [430, 142],
          [540, 114],
        ].map(([x, y]) => (
          <Pin key={x} x={x} y={y} tone="moving" />
        ))}
        <Pin x={340} y={300} />
        <Pin x={300} y={420} />
      </MapWindow>
    </Stage>
  );
}

function Branding() {
  return (
    <Stage className="grid place-items-center">
      <div className="grid w-full items-center gap-4 sm:grid-cols-[0.85fr_1.15fr]">
        <Window title="track.yourbrand.in">
          <div className="p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-moving font-display text-lg font-semibold text-white">
              Y
            </span>
            <p className="mt-4 font-display text-lg font-semibold leading-tight">Your brand tracking</p>
            <p className="mt-1 text-[0.74rem] text-muted-foreground">Sign in to your fleet</p>
            <div className="mt-4 space-y-2">
              <div className="h-9 rounded-lg border border-border bg-background" />
              <div className="h-9 rounded-lg border border-border bg-background" />
              <div className="grid h-9 place-items-center rounded-lg bg-moving text-xs font-medium text-white">
                Sign in
              </div>
            </div>
          </div>
        </Window>
        <Window title="Dealer panel">
          <dl className="grid grid-cols-3 gap-px bg-border">
            {[
              ["Customers", "18"],
              ["Devices in stock", "64"],
              ["Recharges due", "9"],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-3">
                <dt className="text-[0.66rem] text-muted-foreground">{k}</dt>
                <dd className="mt-0.5 font-display text-xl font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="border-t border-border">
            <Row tone="moving" title="Shree Roadlines" meta="24 vehicles, paid till March" value="Active" />
            <Row tone="idle" title="City Public School" meta="9 buses, recharge in 5 days" value="Due" />
            <Row tone="moving" title="Om Travels" meta="12 cars, paid till June" value="Active" />
          </ul>
        </Window>
      </div>
    </Stage>
  );
}

function MobileApp() {
  return (
    <Stage className="grid place-items-center">
      <div className="flex w-full items-end justify-center gap-4 sm:gap-8">
        <Phone>
          <div className="px-4 pb-3 pt-10">
            <p className="eyebrow text-muted-foreground">My fleet</p>
            <p className="font-display text-lg font-semibold leading-tight">4 moving, 2 stopped</p>
          </div>
          <PhoneMap road="cross" chip="CG 04 MX 2217" />
          <ul>
            <Row tone="moving" title="CG 04 MX 2217" meta="Ring Road" value="46 km/h" />
            <Row tone="stopped" title="CG 10 BB 1182" meta="Parked at depot" value="2 h" />
          </ul>
        </Phone>
        <Phone className="hidden translate-y-6 sm:block">
          <div className="bg-ink px-4 pb-5 pt-10 text-[#f4efe4]">
            <p className="eyebrow text-ink-muted">Driver app</p>
            <p className="mt-3 font-display text-lg font-semibold leading-tight">
              Raipur to Nagpur
            </p>
            <p className="mt-1 font-mono text-[0.68rem] text-ink-muted">Stop 1 of 3, loading</p>
          </div>
          <ul>
            <Row tone="moving" title="Start trip" meta="Odometer 1,48,220 km" />
            <Row tone="idle" title="Add diesel" meta="Photo of the bill" />
            <Row tone="idle" title="Add expense" meta="Toll, loading, food" />
          </ul>
          <div className="p-4">
            <div className="grid h-10 place-items-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              Mark as reached
            </div>
          </div>
        </Phone>
      </div>
    </Stage>
  );
}

const VISUALS: Record<VisualKey, () => ReactNode> = {
  trips: Trips,
  maintenance: Maintenance,
  coverage: Coverage,
  branding: Branding,
  "mobile-app": MobileApp,
  "live-map": LiveMap,
  "trip-playback": TripPlayback,
  geofence: Geofence,
  alerts: Alerts,
  reports: Reports,
  drivers: Drivers,
  vehicles: Vehicles,
  routes: Routes,
  rental: Rental,
  "school-bus": SchoolBus,
  "parent-app": ParentApp,
  enterprise: Enterprise,
  assets: Assets,
  device: Device,
  api: Api,
};

export function Visual({ name, className }: { name: VisualKey; className?: string }) {
  const Component = VISUALS[name];
  return (
    <div className={className}>
      <Component />
    </div>
  );
}
