import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Breadcrumbs, CtaBand, JsonLd, SectionHeader } from "@/components/site/ui";
import { Visual } from "@/components/visuals";
import { DOCS, KIND_META, KINDS } from "@/content";
import type { PageKind } from "@/content/types";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return KINDS.map((kind) => ({ kind }));
}

type Props = { params: Promise<{ kind: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kind } = await params;
  const meta = KIND_META[kind as PageKind];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${kind}` },
    openGraph: { title: meta.title, description: meta.description, url: `/${kind}` },
  };
}

export default async function IndexPage({ params }: Props) {
  const { kind: raw } = await params;
  const kind = raw as PageKind;
  const meta = KIND_META[kind];
  if (!meta) notFound();
  const docs = DOCS[kind];

  return (
    <main>
      <section className="grid-lines pt-28 md:pt-36">
        <div className="wrap pb-14 md:pb-20">
          <Breadcrumbs items={[{ name: meta.label, href: `/${kind}` }]} />
          <SectionHeader as="h1" className="mt-10 max-w-4xl" eyebrow={meta.label} title={meta.title} lede={meta.lede} />
        </div>
      </section>

      <section aria-label={`All ${meta.label.toLowerCase()}`} className="border-t border-border">
        <ol>
          {docs.map((d, i) => (
            <li key={d.slug} className="border-b border-border">
              <Link
                href={`/${kind}/${d.slug}`}
                className="group wrap grid items-center gap-8 py-10 transition-colors hover:bg-card md:py-14 lg:grid-cols-[4rem_1fr_1.1fr]"
              >
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="display-2 block">{d.name}</span>
                  <span className="lede mt-4 block max-w-xl">{d.hero.lede}</span>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium">
                    Explore {d.name.toLowerCase()}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </span>
                <Reveal className={cn("hidden lg:block", i % 2 === 1 && "lg:pl-10")}>
                  <Visual name={d.hero.visual} />
                </Reveal>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: meta.title,
          itemListElement: docs.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: d.name,
            url: `${SITE_URL}/${kind}/${d.slug}`,
          })),
        }}
      />
    </main>
  );
}
