import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero, pageMeta } from "@/components/site/page-hero";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { CardLink, CtaBand } from "@/components/site/ui";
import { articles } from "@/content";
import { RESOURCE_LINKS } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/resources",
  "GPS tracking and fleet management guides",
  "Plain-language guides from Ashwa on GPS vehicle tracking, fleet costs, fuel theft, AIS-140, school bus safety and document renewals for Indian fleets.",
);

const date = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function ResourcesPage() {
  const [lead, ...rest] = articles;
  const more = RESOURCE_LINKS.filter((l) => l.href !== "/resources");
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Resources", href: "/resources" }]}
        eyebrow="Resources"
        title="Guides for people who run vehicles"
        lede="How trackers work, what they cost, where diesel goes missing and which papers lapse when. Written to be useful whether or not you buy from us."
      />

      {lead ? (
        <section aria-label="Latest guide" className="border-b border-border">
          <Link
            href={`/resources/${lead.slug}`}
            className="group wrap grid gap-8 py-14 transition-colors hover:bg-card md:py-20 lg:grid-cols-[0.6fr_1.4fr]"
          >
            <p className="eyebrow text-primary">
              Latest · {lead.category}
              <span className="mt-2 block text-muted-foreground">
                {date(lead.published)} · {lead.readMinutes} min read
              </span>
            </p>
            <span>
              <span className="display-2 block max-w-3xl">{lead.title}</span>
              <span className="lede mt-5 block max-w-2xl">{lead.intro}</span>
              <span className="mt-6 inline-flex items-center gap-2 font-medium">
                Read the guide
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </section>
      ) : null}

      <section aria-labelledby="guides-title" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="guides-title" className="display-3">
            All guides
          </h2>
          <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <RevealItem key={a.slug}>
                <CardLink
                  href={`/resources/${a.slug}`}
                  kicker={`${a.category} · ${a.readMinutes} min read`}
                  title={a.title}
                  body={a.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="more-title" className="border-t border-border bg-card py-16 md:py-24">
        <div className="wrap">
          <h2 id="more-title" className="display-3">
            More to explore
          </h2>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((l) => (
              <li key={l.href} className="border-t border-border">
                <Link href={l.href} className="group block py-5">
                  <span className="flex items-center justify-between font-display text-xl font-semibold tracking-tight">
                    {l.label}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="mt-1 block text-muted-foreground">{l.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
