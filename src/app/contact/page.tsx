import type { Metadata } from "next";
import Link from "next/link";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero, pageMeta } from "@/components/site/page-hero";
import { JsonLd } from "@/components/site/ui";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/contact",
  "Contact Ashwa: sales and support",
  "Talk to Ashwa about GPS vehicle tracking, fleet management, school bus tracking or becoming a dealer. Reach sales and support by phone or email.",
);

export default function ContactPage() {
  const routes = [
    ["Sales", "Pricing, modules and demos for your fleet.", `mailto:${CONTACT.email}`, CONTACT.email],
    ["Phone", "Speak to someone about your requirement.", CONTACT.phoneHref, CONTACT.phone],
  ];
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title="Tell us what you are trying to track"
        lede="Sales, support, partnerships: one team answers. The more you tell us about your vehicles, the more useful our first reply will be."
      />
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <LeadForm email={CONTACT.email} intent="contact" />
          <div>
            <ul className="divide-y divide-border border-y border-border">
              {routes.map(([title, body, href, label]) => (
                <li key={title} className="py-6">
                  <h2 className="eyebrow text-muted-foreground">{title}</h2>
                  <a href={href} className="display-3 mt-2 block underline-offset-4 hover:underline">
                    {label}
                  </a>
                  <p className="mt-2 text-muted-foreground">{body}</p>
                </li>
              ))}
              <li className="py-6">
                <h2 className="eyebrow text-muted-foreground">Office</h2>
                <address className="display-3 mt-2 not-italic">{CONTACT.address}</address>
              </li>
            </ul>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Already a customer and need help with the app? The{" "}
              <Link href="/support" className="font-medium text-foreground underline underline-offset-4">
                support page
              </Link>{" "}
              is the fastest route.
            </p>
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
          about: { "@id": `${SITE_URL}/#organization` },
        }}
      />
    </main>
  );
}
