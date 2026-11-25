import type { Metadata } from "next";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero, pageMeta } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ButtonLink, SectionHeader } from "@/components/site/ui";
import { Visual } from "@/components/visuals";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/partners",
  "Become an Ashwa partner: GPS dealers and installers",
  "Run your own GPS tracking business on Ashwa. Your brand and subdomain, a dealer panel for customers, devices and technicians, and billing with recharges and GST.",
);

const BENEFITS = [
  ["Your brand, not ours", "Customers sign in on your subdomain, with your logo and colours on every screen."],
  ["A panel for the whole business", "Customer organisations, vehicles, device stock and technicians in one place."],
  ["Billing that matches the trade", "Prepaid recharges, payment tracking, statements and GST invoices."],
  ["More to sell than a dot", "Offer trips, maintenance, school transport and rentals to customers who outgrow basic tracking."],
];

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Partners", href: "/partners" }]}
        eyebrow="Partners"
        title="Sell tracking under your own name"
        lede="For GPS dealers, installers and resellers who want a platform they can brand, bill from and grow with, without building software."
      >
        <div className="mt-9">
          <ButtonLink href="/solutions/white-label-gps-platform" variant="secondary">
            How white-label works
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-labelledby="benefits-title" className="py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Visual name="branding" />
          </Reveal>
          <div>
            <SectionHeader eyebrow="Why partner" title={<span id="benefits-title">What you get as a dealer</span>} />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {BENEFITS.map(([t, b]) => (
                <li key={t} className="py-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="apply-title" className="border-t border-border bg-card py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeader
            eyebrow="Get started"
            title={<span id="apply-title">Tell us about your business</span>}
            lede="Where you operate, how many vehicles you manage today and which devices you sell. We will set up a panel for you to try."
          />
          <LeadForm email={CONTACT.email} intent="partner" />
        </div>
      </section>
    </main>
  );
}
