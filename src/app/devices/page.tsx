import type { Metadata } from "next";

import { PageHero, pageMeta } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ButtonLink, CtaBand, SectionHeader } from "@/components/site/ui";
import { Visual } from "@/components/visuals";

export const metadata: Metadata = pageMeta(
  "/devices",
  "GPS tracking devices compatible with Ashwa",
  "Ashwa works with widely used GPS trackers: Concox GT06-protocol, JT/T 808 and Teltonika FMB and FMC families. Wired, OBD and battery-powered options for every vehicle.",
);

const TYPES = [
  {
    title: "Wired trackers",
    fits: "Trucks, buses, tippers, vans",
    body: "Connected to the vehicle's power behind the dashboard. Reports continuously, cannot be unplugged by accident and has a small backup battery for power cuts.",
  },
  {
    title: "OBD trackers",
    fits: "Cars, rental fleets, company vehicles",
    body: "Plugs into the diagnostic port in seconds, with no wiring. Easy to move between vehicles, which suits fleets that change often.",
  },
  {
    title: "Battery-powered trackers",
    fits: "Trailers, containers, gensets, equipment",
    body: "No vehicle power needed. Reports at set intervals to make a battery last for months, for assets that have no engine or no driver.",
  },
];

const FAMILIES = [
  ["Concox GT06 protocol", "The most common tracker protocol in India, used by many wired and OBD models."],
  ["JT/T 808", "The standard used by a wide range of commercial vehicle trackers."],
  ["Teltonika FMB and FMC", "Professional trackers with inputs for sensors and accessories."],
  ["Your existing devices", "If your trackers speak one of these protocols, they can usually move to Ashwa without new hardware."],
  ["A model we do not support yet", "Send us the model and protocol document. New devices are onboarded on request."],
];

export default function DevicesPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Devices", href: "/devices" }]}
        title="GPS devices that work with Ashwa"
        lede="The tracker is the part you never look at again, so it has to be right for the vehicle. Here is what goes where, and what Ashwa can read."
      />

      <section aria-labelledby="types-title" className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader title={<span id="types-title">Match the tracker to the vehicle</span>} />
            <Reveal className="mt-10">
              <Visual name="device" />
            </Reveal>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {TYPES.map((t) => (
              <li key={t.title} className="py-8">
                <h3 className="display-3">{t.title}</h3>
                <p className="eyebrow mt-2 text-muted-foreground">{t.fits}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="families-title" className="on-ink py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="families-title" className="display-2">
              Tracker families Ashwa reads
            </h2>
            <ButtonLink href="/contact" variant="inverse" className="mt-8">
              Check your device
            </ButtonLink>
          </div>
          <ul className="divide-y divide-ink-line border-y border-ink-line">
            {FAMILIES.map(([t, b]) => (
              <li key={t} className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <h3 className="font-display text-xl font-semibold tracking-tight">{t}</h3>
                <p className="leading-relaxed text-ink-muted">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="install-title" className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeader
            title={<span id="install-title">Fitted, tested and live before the technician leaves</span>}
            lede="A technician fits the device out of sight, checks that it reports, and the vehicle appears on your map before they leave."
          />
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Before the visit", "We confirm vehicle types and where each one will be, so the technician brings the right devices."],
              ["During the visit", "Each tracker is wired, concealed and tested. The registration number is linked to the device."],
              ["After the visit", "Your team gets logins. If a device goes quiet later, we see it and tell you."],
            ].map(([t, b]) => (
              <li key={t} className="border-t border-foreground/15 pt-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure which device you need?" body="Tell us the vehicles. We will recommend a tracker for each and include it in the quote." />
    </main>
  );
}
