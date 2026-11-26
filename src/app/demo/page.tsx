import type { Metadata } from "next";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero, pageMeta } from "@/components/site/page-hero";
import { ArrowUpRight } from "lucide-react";

import { CAL_URL, CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/demo",
  "Book a demo of Ashwa GPS tracking and fleet management",
  "See Ashwa on a call built around your fleet: live tracking, trips, maintenance, school transport or rentals. Tell us what you run and we will show the right modules.",
);

const STEPS = [
  ["You tell us what you run", "Vehicle count, the kind of operation and any trackers you already have."],
  ["We show the modules that fit", "A walkthrough on a call, using scenarios from your kind of fleet, not a generic tour."],
  ["You get a clear quote", "Device cost, the tracking recharge per vehicle and any add-on modules, itemised."],
  ["Devices are fitted and you go live", "A technician installs the trackers. Your team gets logins the same day."],
];

export default function DemoPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Book a demo", href: "/demo" }]}
        title="See Ashwa with your own fleet in mind"
        lede="A short call, built around how you run vehicles. No slide deck: we open the platform and walk through your day."
      />
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="display-3">Pick a time for a call</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                30 minutes on video. Evenings on weekdays, afternoons and evenings on weekends (India time).
              </p>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition-[background-color,transform] duration-200 hover:bg-[#cf2f1a] active:scale-[0.98]"
              >
                Schedule a call
                <ArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only">(opens the booking page in a new tab)</span>
              </a>
            </div>
            <p className="mb-6 mt-12 font-display text-xl font-semibold tracking-tight">Or send us your details</p>
            <LeadForm email={CONTACT.email} intent="demo" />
          </div>
          <div>
            <h2 className="display-3">What happens next</h2>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {STEPS.map(([title, body], i) => (
                <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-6">
                  <span className="font-display text-2xl font-semibold text-primary">{i + 1}</span>
                  <span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">{body}</p>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Prefer to talk now? Call{" "}
              <a href={CONTACT.phoneHref} className="font-medium text-foreground underline underline-offset-4">
                {CONTACT.phone}
              </a>{" "}
              or write to{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
