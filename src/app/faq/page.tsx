import type { Metadata } from "next";

import { PageHero, pageMeta } from "@/components/site/page-hero";
import { CtaBand, FaqList, JsonLd } from "@/components/site/ui";
import { siteFaqs } from "@/content/faqs";

export const metadata: Metadata = pageMeta(
  "/faq",
  "GPS tracking and fleet management FAQ",
  "Answers about Ashwa: GPS devices and installation, live tracking and data, modules and customisation, pricing and support.",
);

const anchor = (group: string) => group.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "FAQ", href: "/faq" }]}
        eyebrow="Frequently asked questions"
        title="Straight answers before you call us"
        lede="The questions fleet owners, schools and dealers ask us most, grouped by where you are in the decision."
      >
        <nav aria-label="FAQ sections" className="mt-8 flex flex-wrap gap-2">
          {siteFaqs.map((g) => (
            <a
              key={g.group}
              href={`#${anchor(g.group)}`}
              className="inline-flex min-h-11 items-center rounded-full border border-foreground/20 px-4 text-sm font-medium transition-colors hover:border-foreground"
            >
              {g.group}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="py-16 md:py-24">
        {siteFaqs.map((g) => (
          <section
            key={g.group}
            id={anchor(g.group)}
            aria-labelledby={`${anchor(g.group)}-title`}
            className="wrap grid scroll-mt-28 gap-8 pb-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
          >
            <h2 id={`${anchor(g.group)}-title`} className="display-3">
              {g.group}
            </h2>
            <FaqList faqs={g.items} schema={false} />
          </section>
        ))}
      </div>

      <CtaBand title="Still have a question?" body="Ask it directly. A person who knows the product will answer." />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: siteFaqs.flatMap((g) =>
            g.items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          ),
        }}
      />
    </main>
  );
}
