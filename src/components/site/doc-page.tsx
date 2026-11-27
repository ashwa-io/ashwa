import type { ReactNode } from "react";

import { KIND_META, resolveRef } from "@/content";
import type { PageDoc, PageKind } from "@/content/types";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Visual } from "@/components/visuals";

import { pageContext } from "@/content/contexts";
import { PAGE_PHOTOS } from "@/content/photos";

import { GridTraffic } from "./grid-traffic";
import { Photo } from "./photo";
import { Reveal } from "./reveal";
import { Breadcrumbs, ButtonLink, CardLink, CtaBand, FaqList, JsonLd } from "./ui";

type Block = "problems" | "showcase" | "cases";

/** Headings and running order differ by page kind, so the three kinds do not read as one template. */
const KIND_COPY: Record<PageKind, { problems: string; features: string; cases: string; order: Block[] }> = {
  solutions: {
    problems: "What it looks like before Ashwa",
    features: "What the solution includes",
    cases: "Situations it handles",
    order: ["problems", "showcase"],
  },
  products: {
    problems: "The gaps this module closes",
    features: "What the module does",
    cases: "Where it gets used",
    order: ["showcase", "problems"],
  },
  industries: {
    problems: "What the work throws at you",
    features: "What the setup covers",
    cases: "On an ordinary working day",
    order: ["cases", "problems", "showcase"],
  },
};

function Hero({ kind, doc }: { kind: PageKind; doc: PageDoc }) {
  const context = pageContext(kind, doc.slug);
  const crumbs = (
    <Breadcrumbs
      items={[
        { name: KIND_META[kind].label, href: `/${kind}` },
        { name: doc.name, href: `/${kind}/${doc.slug}` },
      ]}
    />
  );
  const actions = (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
      <ButtonLink href="/demo">Book a demo</ButtonLink>
      <ButtonLink href="/pricing" variant={kind === "industries" ? "inverse" : "secondary"}>
        See pricing
      </ButtonLink>
    </div>
  );

  // Products lead with the interface: headline and lede share a row, the screen runs wide beneath.
  if (kind === "products") {
    return (
      <section className="pt-28 md:pt-36">
        <div className="wrap">
          {crumbs}
          <div className="mt-8 grid gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="display-page">{doc.hero.title}</h1>
            <div>
              <p className="lede max-w-xl">{doc.hero.lede}</p>
              {actions}
            </div>
          </div>
          <Reveal className="mt-14 pb-16 md:pb-24">
            <Visual name={doc.hero.visual} context={context} />
          </Reveal>
        </div>
      </section>
    );
  }

  // Industries open on ink, the way a trade magazine opens a feature.
  if (kind === "industries") {
    return (
      <section className="on-ink grid-lines relative pt-28 md:pt-36">
        <GridTraffic speed={0.8} />
        <div className="wrap relative grid items-end gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <div className="[&_a]:text-ink-muted [&_nav]:text-ink-muted [&_span[aria-current]]:text-white">
              {crumbs}
            </div>
            <h1 className="display-page mt-8">{doc.hero.title}</h1>
            <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.35vw,1.3rem)] leading-relaxed text-ink-muted">
              {doc.hero.lede}
            </p>
            {actions}
          </div>
          <Reveal>
            <Visual name={doc.hero.visual} context={context} />
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-36">
      <div className="wrap grid items-center gap-12 pb-16 lg:grid-cols-[1fr_1.05fr] lg:pb-24">
        <div>
          {crumbs}
          <h1 className="display-page mt-8">{doc.hero.title}</h1>
          <p className="lede mt-6 max-w-xl">{doc.hero.lede}</p>
          {actions}
        </div>
        <Reveal>
          <Visual name={doc.hero.visual} context={context} />
        </Reveal>
      </div>
    </section>
  );
}

export function DocPage({ kind, doc }: { kind: PageKind; doc: PageDoc }) {
  const context = pageContext(kind, doc.slug);
  const related = doc.related.map(resolveRef).filter((r) => r !== undefined);
  const url = `${SITE_URL}/${kind}/${doc.slug}`;
  const photo = PAGE_PHOTOS[`${kind}/${doc.slug}`];
  const copy = KIND_COPY[kind];

  const blocks: Record<Block, ReactNode> = {
    problems: (
      <section key="problems" aria-labelledby="problems-title" className="py-20 md:py-28">
        <div className="wrap">
          <h2 id="problems-title" className="display-2 max-w-3xl">
            {copy.problems}
          </h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {doc.problems.map((p) => (
              <li key={p.title} className="border-t-2 border-foreground pt-6">
                <h3 className="display-3">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ),
    showcase: (
      <section key="showcase" aria-label="How Ashwa helps" className="space-y-20 py-10 md:space-y-32 md:py-16">
        {doc.showcase.map((s, i) => (
          <div
            key={s.title}
            className={cn(
              "wrap grid items-center gap-10 lg:gap-20",
              // The visual takes the wider column, and the sides swap each time.
              i % 2 === 1 ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-[1.15fr_0.85fr]",
            )}
          >
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <Visual name={s.visual} context={context} />
            </Reveal>
            <div>
              <h2 className="display-2">{s.title}</h2>
              <p className="lede mt-5">{s.body}</p>
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    ),
    cases: (
      <section key="cases" aria-labelledby="cases-title" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="cases-title" className="display-3">
            {copy.cases}
          </h2>
          <ul className="mt-8 grid border-t border-foreground/15 md:grid-cols-3 md:border-t-0">
            {doc.useCases.map((u) => (
              <li
                key={u.title}
                className="border-b border-foreground/15 py-7 md:border-b-0 md:border-l md:px-8 md:py-1 md:first:border-l-0 md:first:pl-0"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">{u.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{u.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ),
  };

  return (
    <main>
      <Hero kind={kind} doc={doc} />

      <section aria-label="Who it is for" className="border-y border-border">
        <p className="wrap py-5 leading-relaxed text-muted-foreground">
          Built for{" "}
          <span className="font-medium text-foreground">{doc.audience.join(", ")}</span>
        </p>
      </section>

      {photo ? (
        <div className="wrap pt-10 md:pt-14">
          <Reveal>
            <Photo photo={photo} className="aspect-[16/10] md:aspect-[21/9]" />
          </Reveal>
        </div>
      ) : null}

      {copy.order.map((k) => blocks[k])}

      <section
        aria-labelledby="features-title"
        className="mt-10 border-y border-border bg-card py-20 md:mt-16 md:py-28"
      >
        <div className="wrap">
          <h2 id="features-title" className="display-2 max-w-3xl">
            {copy.features}
          </h2>
          <p className="lede mt-5 max-w-2xl">
            Switch on what you need. Each capability works with the rest of the platform.
          </p>
          <ul className="mt-12 grid gap-x-16 lg:grid-cols-2">
            {doc.features.map((f) => (
              <li
                key={f.title}
                className="grid gap-2 border-t border-border py-6 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6"
              >
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">{f.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-title" className="on-ink py-20 md:py-28">
        <div className="wrap">
          <h2 id="how-title" className="display-2 max-w-3xl">
            How it runs, step by step
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {doc.how.map((h, i) => (
              <li key={h.title} className="border-t border-ink-line pt-6">
                <span className="font-display text-5xl font-semibold tracking-tight text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="outcomes-title" className="py-24 md:py-36">
        <div className="wrap">
          <h2 id="outcomes-title" className="display-2 max-w-3xl">
            What changes once it is running
          </h2>
          <ul className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {doc.outcomes.map((o) => (
              <li key={o.title} className="max-w-xl">
                <h3 className="display-3">{o.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {copy.order.includes("cases") ? null : <div className="border-t border-border">{blocks.cases}</div>}

      <section aria-labelledby="faq-title" className="border-t border-border py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 id="faq-title" className="display-2">
            {doc.name}: common questions
          </h2>
          <FaqList faqs={doc.faqs} />
        </div>
      </section>

      {related.length ? (
        <section aria-labelledby="related-title" className="pb-20 md:pb-28">
          <div className="wrap">
            <h2 id="related-title" className="display-3">
              Goes well with
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <CardLink
                  key={r.href}
                  href={r.href}
                  kicker={KIND_META[r.kind].singular}
                  title={r.doc.name}
                  body={r.doc.blurb}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": kind === "products" ? "SoftwareApplication" : "Service",
          name: `Ashwa ${doc.name}`,
          description: doc.seo.description,
          url,
          provider: { "@id": `${SITE_URL}/#organization` },
          ...(kind === "products"
            ? { applicationCategory: "BusinessApplication", operatingSystem: "Web, Android, iOS" }
            : { serviceType: doc.name, areaServed: "IN" }),
        }}
      />
    </main>
  );
}
