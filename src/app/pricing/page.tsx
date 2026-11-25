import type { Metadata } from "next";

import { PageHero, pageMeta } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ButtonLink, CtaBand, FaqList, SectionHeader } from "@/components/site/ui";
import { DOCS } from "@/content";
import { siteFaqs } from "@/content/faqs";

export const metadata: Metadata = pageMeta(
  "/pricing",
  "Ashwa pricing: GPS tracking and fleet management quote",
  "How Ashwa pricing works: a one-time device cost, a prepaid tracking recharge per vehicle, and add-on modules you choose. Request an itemised quote for your fleet.",
);

const PARTS = [
  {
    title: "The device",
    when: "One time, per vehicle",
    body: "A GPS tracker and its installation. The model depends on the vehicle: wired for trucks and buses, OBD for cars, battery-powered for trailers and equipment.",
    points: ["Fitted by a technician", "Use your existing compatible trackers", "Wired, OBD and battery-powered options"],
  },
  {
    title: "Tracking",
    when: "Prepaid recharge, per vehicle",
    body: "Live tracking, history and playback, the web platform and the mobile app for every vehicle on the plan. You recharge ahead, and the platform reminds you before it ends.",
    points: ["Live map and vehicle list", "Route history and replay", "Web and mobile access for your team"],
  },
  {
    title: "Add-on modules",
    when: "Billed separately, only what you switch on",
    body: "Trips, maintenance, routes, school transport, rentals and the rest. Add a module when the operation needs it, for the vehicles that need it.",
    points: ["Chosen per organisation", "Add or remove as you grow", "Custom work quoted separately"],
  },
];

const FACTORS = [
  ["How many vehicles", "Larger fleets and longer recharges bring the per-vehicle cost down."],
  ["Which devices", "A basic wired tracker costs less than one with sensors or a long-life battery."],
  ["Which modules", "Tracking alone is the base. Each module you add is priced on top."],
  ["How much is custom", "Portal integrations, custom dashboards and white-label setup are scoped with you."],
];

export default function PricingPage() {
  const pricingFaqs = siteFaqs.find((g) => g.group.toLowerCase().includes("pricing"))?.items ?? [];
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Pricing", href: "/pricing" }]}
        eyebrow="Pricing"
        title="Pay for the vehicles and modules you use"
        lede="There is no single price list because no two fleets take the same set. Here is exactly how a quote is built, so nothing in it surprises you."
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/demo">Get an itemised quote</ButtonLink>
          <ButtonLink href="/products" variant="secondary">
            See the {DOCS.products.length} modules
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-labelledby="parts-title" className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeader eyebrow="Three parts" title={<span id="parts-title">What a quote is made of</span>} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PARTS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className={
                  i === 1
                    ? "on-ink grid-lines flex flex-col rounded-2xl p-8"
                    : "flex flex-col rounded-2xl border border-border bg-card p-8"
                }
              >
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-3 mt-6">{p.title}</h3>
                <p className={i === 1 ? "eyebrow mt-2 text-ink-muted" : "eyebrow mt-2 text-muted-foreground"}>
                  {p.when}
                </p>
                <p className={i === 1 ? "mt-5 leading-relaxed text-ink-muted" : "mt-5 leading-relaxed text-muted-foreground"}>
                  {p.body}
                </p>
                <ul className={i === 1 ? "mt-6 space-y-2.5 border-t border-ink-line pt-5" : "mt-6 space-y-2.5 border-t border-border pt-5"}>
                  {p.points.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="factors-title" className="border-y border-border bg-card py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="What moves the number"
            title={<span id="factors-title">Four things decide your price</span>}
          />
          <ul className="divide-y divide-border border-y border-border">
            {FACTORS.map(([t, b]) => (
              <li key={t} className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <h3 className="font-display text-xl font-semibold tracking-tight">{t}</h3>
                <p className="leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {pricingFaqs.length ? (
        <section aria-labelledby="pricing-faq-title" className="py-20 md:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow="Questions" title={<span id="pricing-faq-title">Pricing questions</span>} />
            <FaqList faqs={pricingFaqs} />
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Get a quote you can read line by line"
        body="Send your vehicle count and what you run. We reply with devices, recharge and modules itemised."
      />
    </main>
  );
}
