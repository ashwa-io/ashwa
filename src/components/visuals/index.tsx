import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

import type { VisualKey } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Product visuals: designed Ashwa screens, captured from /shots into
 * public/images/product (see scripts/capture-shots.mjs). Web visuals carry
 * their own backdrop; phone screens sit in a phone.
 */

/**
 * The image for a screen in a given sample world ("school", "rental"...), when
 * that variant has been rendered; the general one otherwise. Checked at build time.
 */
const shot = (file: string, context?: string) => {
  const variant = context && context !== "fleet" ? `${file}--${context}` : file;
  return existsSync(join(process.cwd(), "public", "images", "product", `${variant}.jpg`)) ? variant : file;
};

/** A designed web visual from /shots, 2240x1400. */
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
  | "assets"
  | "device"
  | "api";

/** A designed phone screen from /shots, 900x1800. */
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
  device: "How Ashwa works: from the GPS device over the network to the platform and your screens",
  api: "Ashwa integrations: events flowing to your ERP, portals and alerts, with a sample payload",
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
function Browser({ screen, className, context }: { screen: Web; className?: string; context?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-foreground/10 shadow-float md:rounded-3xl",
        className,
      )}
    >
      <Image
        src={`/images/product/${shot(screen, context)}.jpg`}
        alt={WEB_ALT[screen]}
        width={2240}
        height={1400}
        // These run up to the full content width on product pages: ask for that, or they blur.
        sizes="(min-width: 1100px) 1024px, 100vw"
        quality={90}
        className="block h-auto w-full"
      />
    </div>
  );
}
function Phone({ screen, className, context }: { screen: Mobile; className?: string; context?: string }) {
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
            src={`/images/product/${shot(`m-${screen}`, context)}.jpg`}
            alt={MOBILE_ALT[screen]}
            width={900}
            height={1800}
            sizes="(min-width: 1024px) 280px, 45vw"
            quality={90}
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
function Duo({ web, mobile, context }: { web: Web; mobile: Mobile; context?: string }) {
  return (
    <div className="relative pb-[7%] pr-[6%]">
      <Browser screen={web} context={context} />
      <Phone screen={mobile} context={context} className="absolute bottom-0 right-0 w-[21%]" />
    </div>
  );
}

function Phones({ left, right, context }: { left: Mobile; right: Mobile; context?: string }) {
  return (
    <div className="flex items-start justify-center gap-[6%] px-[6%]">
      <Phone screen={left} context={context} className="w-[34%] max-w-56" />
      <Phone screen={right} context={context} className="mt-[10%] w-[34%] max-w-56" />
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

/** The landscape picture that best stands for each visual key: used for share images and the sitemap. */
const KEY_IMAGE: Record<VisualKey, Web> = {
  "live-map": "tracking",
  "trip-playback": "playback",
  geofence: "geofences",
  alerts: "alerts",
  reports: "reports",
  drivers: "drivers",
  vehicles: "vehicles",
  routes: "routes",
  rental: "rental",
  "school-bus": "school",
  "parent-app": "school",
  enterprise: "enterprise",
  assets: "assets",
  trips: "trips",
  maintenance: "maintenance",
  coverage: "coverage",
  branding: "branding",
  "mobile-app": "overview",
  device: "device",
  api: "api",
};

export const visualImage = (name: VisualKey, context?: string) => ({
  url: `/images/product/${shot(KEY_IMAGE[name], context)}.jpg`,
  width: 2240,
  height: 1400,
  alt: WEB_ALT[KEY_IMAGE[name]],
});

/** Each visual key, rendered for the page's sample world when one is given. */
const VISUALS: Record<VisualKey, (c?: string) => React.ReactNode> = {
  "live-map": (c) => <Duo web="tracking" mobile="live" context={c} />,
  "trip-playback": (c) => <Browser screen="playback" context={c} />,
  geofence: (c) => <Browser screen="geofences" context={c} />,
  alerts: (c) => <Browser screen="alerts" context={c} />,
  reports: (c) => <Browser screen="reports" context={c} />,
  drivers: (c) => <Browser screen="drivers" context={c} />,
  vehicles: (c) => <Browser screen="vehicles" context={c} />,
  routes: (c) => <Browser screen="routes" context={c} />,
  rental: () => <Browser screen="rental" />,
  "school-bus": () => <Browser screen="school" />,
  "parent-app": () => <Phones left="parent" right="alerts" context="school" />,
  enterprise: () => <Browser screen="enterprise" />,
  assets: () => <Browser screen="assets" />,
  trips: (c) => <Browser screen="trips" context={c} />,
  maintenance: (c) => <Browser screen="maintenance" context={c} />,
  coverage: () => <Browser screen="coverage" />,
  branding: () => <Browser screen="branding" />,
  "mobile-app": (c) => <Phones left="fleet" right="driver" context={c} />,
  device: () => <Browser screen="device" />,
  api: () => <Browser screen="api" />,
};

export function Visual({
  name,
  className,
  context,
}: {
  name: VisualKey;
  className?: string;
  /** The page's sample world, so a school page shows buses and a rental page shows cars. */
  context?: string;
}) {
  return <div className={className}>{VISUALS[name](context)}</div>;
}