import type { Metadata } from "next";

import { PageHero, pageMeta } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ButtonLink, CtaBand, SectionHeader } from "@/components/site/ui";
import { Visual } from "@/components/visuals";

export const metadata: Metadata = pageMeta(
  "/integrations",
  "Ashwa integrations and API for GPS tracking data",
  "Connect Ashwa to your ERP, customer portals and government systems. API access, event webhooks and custom integrations for positions, trips and alerts.",
);

const WAYS = [
  {
    title: "API access",
    body: "Read vehicles, live positions, route history and trips from your own software, with keys you control.",
  },
  {
    title: "Event webhooks",
    body: "Have Ashwa call your system when something happens: a trip starts, a vehicle enters a zone, a document falls due.",
  },
  {
    title: "Portal feeds",
    body: "Send vehicle positions to a government or customer portal in the format it demands, as we do for municipal waste collection.",
  },
  {
    title: "Custom integrations",
    body: "Transport ERPs, billing software, school management systems. Where no standard connector fits, we build one with you.",
  },
];

const DATA = [
  ["Positions", "Latitude, longitude, speed, heading and time for every vehicle."],
  ["Trips", "Stages, stops, expenses and payments from the Trips module."],
  ["Events", "Geofence entries and exits, overspeed, power cut, renewal due."],
  ["Master data", "Vehicles, drivers, groups and organisations."],
];

export default function IntegrationsPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Integrations and API", href: "/integrations" }]}
        title="Your tracking data, wherever your business needs it"
        lede="A vehicle's position is most useful inside the system where the work is planned and billed. Ashwa sends it there."
      />

      <section aria-labelledby="ways-title" className="py-20 md:py-28">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader title={<span id="ways-title">Pick the one that fits your system</span>} />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {WAYS.map((w) => (
                <li key={w.title} className="py-6">
                  <span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{w.body}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="lg:sticky lg:top-28">
            <Visual name="api" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="data-title" className="border-y border-border bg-card py-20 md:py-28">
        <div className="wrap">
          <SectionHeader title={<span id="data-title">The data behind every screen</span>} />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.map(([t, b]) => (
              <li key={t} className="border-t border-foreground/15 pt-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request API access</ButtonLink>
            <ButtonLink href="/solutions/enterprise" variant="secondary">
              Enterprise setups
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand title="Have a system we should talk to?" body="Tell us what it is and what it needs. We will say plainly how the connection would work." />
    </main>
  );
}
