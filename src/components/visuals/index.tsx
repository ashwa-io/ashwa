import Image from "next/image";

import type { VisualKey } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Product visuals: designed Ashwa screens, captured from /shots into
 * public/images/product (see scripts/capture-shots.mjs). Web visuals carry
 * their own backdrop; phone screens sit in a phone.
 */

/** A designed web visual from /shots, 1680x1050. */
type Web =
  | "overview"
  | "tracking"
  | "playback"
  | "geofences"
  | "alerts"
  | "trips"
  | "trip-detail"
  | "reports"
  | "maintenance"
  | "drivers"
  | "vehicles"
  | "routes"
  | "rental"
  | "school"
  | "enterprise"
  | "coverage"
  | "branding"
  | "assets";

/** A designed phone screen from /shots, 600x1200. */
type Mobile = "fleet" | "live" | "playback" | "driver" | "parent" | "alerts";

const WEB_ALT: Record<Web, string> = {
  overview: "Ashwa live tracking: a live map, the vehicle table with drivers, fleet filters and an overspeed alert",
  tracking: "Ashwa live tracking: the fleet on a map with the vehicle list and one vehicle in focus",
  playback: "Ashwa route playback: a vehicle's travelled route with a time scrubber and its stops",
  geofences: "Ashwa geofences: zones on the map with entry, exit and dwell events",
  alerts: "Ashwa alerts: a feed of overspeed, idling and geofence alerts with alert rules",
  trips: "Ashwa trips: running trips with customer, vehicle, driver, stage and freight",
  "trip-detail": "Ashwa trip detail: stage tracker, route map, trip money and stops",
  reports: "Ashwa reports: profit, cost per kilometre and utilisation by vehicle",
  maintenance: "Ashwa maintenance: documents and services due, fuel this month",
  drivers: "Ashwa drivers: driver list with assigned vehicle and cash ledger",
  vehicles: "Ashwa vehicles: vehicle list with one vehicle's profile",
  routes: "Ashwa routes: a planned route with ordered stops and arrival times",
  rental: "Ashwa rental: a week of bookings by car with one booking in focus",
  school: "Ashwa school transport: buses on route, students on board and a parent notification",
  enterprise: "Ashwa for enterprises: branches, roles and switching between organisations",
  coverage: "Ashwa waste collection: ward coverage on a map with households scanned",
  branding: "Ashwa white-label: a dealer's customer list under the dealer's own brand",
  assets: "Ashwa asset tracking: equipment on a work site with engine hours",
};

const MOBILE_ALT: Record<Mobile, string> = {
  fleet: "Ashwa mobile app: the vehicle list with live status and speed",
  live: "Ashwa mobile app: one vehicle live on the map with its trip",
  playback: "Ashwa mobile app: route history playback",
  driver: "Ashwa driver app: the driver's trip with the next stop",
  parent: "Ashwa parent app: the school bus on its way with arrival time",
  alerts: "Ashwa mobile app: alert notifications",
};

/** A web visual. It carries its own backdrop, so it needs no device around it. */
function Browser({ screen, className }: { screen: Web; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-foreground/10 shadow-float md:rounded-3xl",
        className,
      )}
    >
      <Image
        src={`/images/product/${screen}.jpg`}
        alt={WEB_ALT[screen]}
        width={1680}
        height={1050}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="block h-auto w-full"
      />
    </div>
  );
}
function Phone({ screen, className }: { screen: Mobile; className?: string }) {
  return (
    // Every measure inside is in cqw, a share of the phone's own width, so the
    // device keeps its proportions at any size it is placed at.
    <div className={cn("relative [container-type:inline-size]", className)}>
      {/* Side buttons */}
      <span aria-hidden="true" className="absolute left-[-0.8cqw] top-[20cqw] h-[5cqw] w-[1.2cqw] rounded-l-[1cqw] bg-[#2b2721]" />
      <span aria-hidden="true" className="absolute left-[-0.8cqw] top-[30cqw] h-[9cqw] w-[1.2cqw] rounded-l-[1cqw] bg-[#2b2721]" />
      <span aria-hidden="true" className="absolute left-[-0.8cqw] top-[42cqw] h-[9cqw] w-[1.2cqw] rounded-l-[1cqw] bg-[#2b2721]" />
      <span aria-hidden="true" className="absolute right-[-0.8cqw] top-[34cqw] h-[14cqw] w-[1.2cqw] rounded-r-[1cqw] bg-[#2b2721]" />
      {/* Body: a brushed dark frame with a lighter metal edge */}
      <div
        className="relative rounded-[15cqw] p-[2.6cqw]"
        style={{
          background: "linear-gradient(145deg, #45403a 0%, #1a1713 38%, #0c0a08 100%)",
          boxShadow:
            "inset 0 0 0 0.45cqw #5a544b, inset 0 0 0 1.1cqw #0c0a08, 0 8cqw 16cqw -6cqw rgb(23 19 14 / 0.5), 0 1.2cqw 3cqw rgb(23 19 14 / 0.22)",
        }}
      >
        <div className="relative overflow-hidden rounded-[12.6cqw] bg-white">
          <Image
            src={`/images/product/m-${screen}.jpg`}
            alt={MOBILE_ALT[screen]}
            width={600}
            height={1200}
            sizes="(min-width: 1024px) 260px, 45vw"
            className="block h-auto w-full"
          />
          {/* Dynamic island with its camera lens */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[2.8cqw] flex h-[7.4cqw] w-[27cqw] -translate-x-1/2 items-center justify-end rounded-full bg-[#0c0a08] pr-[2.4cqw]"
          >
            <i className="size-[2.4cqw] rounded-full bg-[#1d2430] ring-[0.4cqw] ring-[#15120e]" />
          </span>
          {/* Glass sheen */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(125deg, rgb(255 255 255 / 0.16) 0%, rgb(255 255 255 / 0) 34%)" }}
          />
          {/* Home indicator */}
          <span
            aria-hidden="true"
            className="absolute bottom-[2.2cqw] left-1/2 h-[1.2cqw] w-[34cqw] -translate-x-1/2 rounded-full bg-black/55"
          />
        </div>
      </div>
    </div>
  );
}

/** A web screen with the mobile app in front of it, at true relative scale. */
function Duo({ web, mobile }: { web: Web; mobile: Mobile }) {
  return (
    <div className="relative pb-[7%] pr-[6%]">
      <Browser screen={web} />
      <Phone screen={mobile} className="absolute bottom-0 right-0 w-[21%]" />
    </div>
  );
}

function Phones({ left, right }: { left: Mobile; right: Mobile }) {
  return (
    <div className="flex items-start justify-center gap-[6%] px-[6%]">
      <Phone screen={left} className="w-[34%] max-w-56" />
      <Phone screen={right} className="mt-[10%] w-[34%] max-w-56" />
    </div>
  );
}

/** The homepage's live tracking picture: the full overview with the phone app in front. */
export function LiveShowcase() {
  return <Duo web="overview" mobile="live" />;
}

/** Three phones in a row, the middle one raised: the mobile apps at a readable size. */
export function PhoneTrio() {
  return (
    <div className="flex items-end justify-center gap-[4%]">
      <Phone screen="driver" className="w-[29%] max-w-60" />
      <Phone screen="live" className="mb-[7%] w-[29%] max-w-60" />
      <Phone screen="parent" className="w-[29%] max-w-60" />
    </div>
  );
}

function Device() {
  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="How a GPS tracking device sends location over satellites and the mobile network to the Ashwa cloud"
      className="block h-auto w-full"
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
          <text y="58" textAnchor="middle" fontSize="15" fill="var(--muted-foreground)" fontFamily="var(--ff-mono), monospace">
            {label}
          </text>
        </g>
      ))}
    </svg>
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
  );
}

const VISUALS: Record<VisualKey, () => React.ReactNode> = {
  "live-map": () => <Duo web="tracking" mobile="live" />,
  "trip-playback": () => <Browser screen="playback" />,
  geofence: () => <Browser screen="geofences" />,
  alerts: () => <Browser screen="alerts" />,
  reports: () => <Browser screen="reports" />,
  drivers: () => <Browser screen="drivers" />,
  vehicles: () => <Browser screen="vehicles" />,
  routes: () => <Browser screen="routes" />,
  rental: () => <Browser screen="rental" />,
  "school-bus": () => <Browser screen="school" />,
  "parent-app": () => <Phones left="parent" right="alerts" />,
  enterprise: () => <Browser screen="enterprise" />,
  assets: () => <Browser screen="assets" />,
  trips: () => <Browser screen="trips" />,
  maintenance: () => <Browser screen="maintenance" />,
  coverage: () => <Browser screen="coverage" />,
  branding: () => <Browser screen="branding" />,
  "mobile-app": () => <Phones left="fleet" right="driver" />,
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
