import Image from "next/image";

import type { VisualKey } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Product visuals: real Ashwa screens (public/images/product) set in a browser
 * window and a phone, so every page shows the product itself.
 */

/** A web screen, cropped to 1600px wide. */
type Web =
  | "tracking"
  | "tracking-dark"
  | "tracking-vehicle"
  | "notifications"
  | "trips"
  | "trips-dark"
  | "trip-detail"
  | "trip-reports"
  | "trip-customers"
  | "maintenance"
  | "maintenance-dark"
  | "renewals"
  | "fuel"
  | "drivers"
  | "driver-profile"
  | "vehicles"
  | "vehicle-profile"
  | "roles"
  | "staff"
  | "service-history";

/** A mobile screen, 600px wide at the app's own 5:11 proportion. */
type Mobile = "list-tall" | "list-search" | "map-live" | "map-playback" | "map-plate";

const WEB_ALT: Record<Web, string> = {
  tracking: "Ashwa live tracking: vehicle list beside a map of the fleet",
  "tracking-dark": "Ashwa live tracking in dark mode with vehicles across the map",
  "tracking-vehicle": "Ashwa route playback for one vehicle with its path on the map",
  notifications: "Ashwa live map with the notifications panel open",
  trips: "Ashwa trips board with running trips, customers, drivers and freight",
  "trips-dark": "Ashwa trips board in dark mode",
  "trip-detail": "Ashwa trip detail with stages, money and the route map",
  "trip-reports": "Ashwa trip reports with profit, cost and profit per kilometre",
  "trip-customers": "Ashwa customers list with billed, received and due amounts",
  maintenance: "Ashwa maintenance overview with documents, services and fuel spend",
  "maintenance-dark": "Ashwa maintenance overview in dark mode",
  renewals: "Ashwa document renewals grid for insurance, PUC, fitness and permits",
  fuel: "Ashwa fuel log with quantity, amount, odometer and mileage",
  drivers: "Ashwa drivers list with phone, licence and ledger balance",
  "driver-profile": "Ashwa driver profile with the cash ledger",
  vehicles: "Ashwa vehicles list with types and status",
  "vehicle-profile": "Ashwa vehicle profile with live location, maintenance and fuel",
  roles: "Ashwa roles and permissions with members per role",
  staff: "Ashwa staff list with roles",
  "service-history": "Ashwa service history with garages, odometer and cost",
};

const MOBILE_ALT: Record<Mobile, string> = {
  "list-tall": "Ashwa mobile app: tracking list with live vehicles and speeds",
  "list-search": "Ashwa mobile app: searching the vehicle list",
  "map-live": "Ashwa mobile app: a vehicle live on the map",
  "map-playback": "Ashwa mobile app: route history playback",
  "map-plate": "Ashwa mobile app: vehicle on the map with its route",
};

function Browser({ screen, className }: { screen: Web; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-foreground/10 bg-card shadow-float md:rounded-2xl",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-foreground/10 bg-[#efeae0] px-3 py-2 md:px-4 md:py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="size-2.5 rounded-full bg-[#e0786a]" />
          <i className="size-2.5 rounded-full bg-[#e3bd59]" />
          <i className="size-2.5 rounded-full bg-[#7fbf7a]" />
        </span>
        <span className="mx-auto flex h-6 w-1/2 max-w-64 items-center justify-center rounded-md bg-card font-mono text-[0.66rem] text-foreground/55">
          app.ashwa.io
        </span>
        <span className="w-11" aria-hidden="true" />
      </div>
      <Image
        src={`/images/product/${screen}.jpg`}
        alt={WEB_ALT[screen]}
        width={1600}
        height={1000}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

function Phone({ screen, className }: { screen: Mobile; className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-[13%/6%] bg-ink p-[3.2%] shadow-float ring-1 ring-white/10",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[2.6%] z-10 h-[2.6%] w-[28%] -translate-x-1/2 rounded-full bg-ink"
      />
      <Image
        src={`/images/product/m-${screen}.jpg`}
        alt={MOBILE_ALT[screen]}
        width={600}
        height={1320}
        sizes="(min-width: 1024px) 260px, 45vw"
        className="block h-auto w-full rounded-[10.5%/4.8%]"
      />
    </div>
  );
}

/** A web screen with the mobile app in front of it, at true relative scale. */
function Duo({ web, mobile }: { web: Web; mobile: Mobile }) {
  return (
    <div className="relative pb-[9%] pr-[5%]">
      <Browser screen={web} />
      <Phone screen={mobile} className="absolute bottom-0 right-0 w-[23%]" />
    </div>
  );
}

function Phones({ left, right }: { left: Mobile; right: Mobile }) {
  return (
    <div className="flex items-start justify-center gap-[6%] px-[6%]">
      <Phone screen={left} className="w-[36%] max-w-60" />
      <Phone screen={right} className="mt-[12%] w-[36%] max-w-60" />
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
  "live-map": () => <Duo web="tracking" mobile="map-live" />,
  "trip-playback": () => <Duo web="tracking-vehicle" mobile="map-playback" />,
  geofence: () => <Browser screen="tracking-dark" />,
  alerts: () => <Browser screen="notifications" />,
  reports: () => <Browser screen="trip-reports" />,
  drivers: () => <Browser screen="drivers" />,
  vehicles: () => <Browser screen="vehicles" />,
  routes: () => <Browser screen="trip-detail" />,
  rental: () => <Browser screen="trip-customers" />,
  "school-bus": () => <Duo web="tracking" mobile="map-plate" />,
  "parent-app": () => <Phones left="map-live" right="list-search" />,
  enterprise: () => <Browser screen="roles" />,
  assets: () => <Browser screen="vehicle-profile" />,
  trips: () => <Browser screen="trips" />,
  maintenance: () => <Browser screen="maintenance" />,
  coverage: () => <Browser screen="service-history" />,
  branding: () => <Browser screen="trips-dark" />,
  "mobile-app": () => <Phones left="list-tall" right="map-playback" />,
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
