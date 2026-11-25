import { KIND_META, resolveRef } from "@/content";
import type { PageDoc, PageKind } from "@/content/types";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Visual } from "@/components/visuals";

import { PAGE_PHOTOS } from "@/content/photos";

import { Photo } from "./photo";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import {
  Breadcrumbs,
  ButtonLink,
  CardLink,
  CtaBand,
  Eyebrow,
  FaqList,
  JsonLd,
  SectionHeader,
} from "./ui";

function Hero({ kind, doc }: { kind: PageKind; doc: PageDoc }) {
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

  // Products lead with the interface, centred and wide.
  if (kind === "products") {
    return (
      <section className="grid-lines pt-28 md:pt-36">
        <div className="wrap">
          {crumbs}
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <Eyebrow className="justify-center">{doc.hero.eyebrow}</Eyebrow>
            <h1 className="display-page mt-5">{doc.hero.title}</h1>
            <p className="lede mx-auto mt-6 max-w-2xl">{doc.hero.lede}</p>
            <div className="flex justify-center">{actions}</div>
          </div>
          <Reveal className="mx-auto mt-14 max-w-5xl pb-16 md:pb-24">
            <Visual name={doc.hero.visual} />
          </Reveal>
        </div>
      </section>
    );
  }

  // Industries open on ink, the way a trade magazine opens a feature.
  if (kind === "industries") {
    return (
      <section className="on-ink grid-lines pt-28 md:pt-36">
        <div className="wrap grid items-end gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <div className="[&_a]:text-ink-muted [&_nav]:text-ink-muted [&_span[aria-current]]:text-white">
              {crumbs}
            </div>
            <Eyebrow className="mt-10 text-ink-muted">{doc.hero.eyebrow}</Eyebrow>
            <h1 className="display-page mt-5">{doc.hero.title}</h1>
            <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.35vw,1.3rem)] leading-relaxed text-ink-muted">
              {doc.hero.lede}
            </p>
            {actions}
          </div>
          <Reveal>
            <Visual name={doc.hero.visual} />
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="grid-lines pt-28 md:pt-36">
      <div className="wrap grid items-center gap-12 pb-16 lg:grid-cols-[1fr_1.05fr] lg:pb-24">
        <div>
          {crumbs}
          <Eyebrow className="mt-10">{doc.hero.eyebrow}</Eyebrow>
          <h1 className="display-page mt-5">{doc.hero.title}</h1>
          <p className="lede mt-6 max-w-xl">{doc.hero.lede}</p>
          {actions}
        </div>
        <Reveal>
          <Visual name={doc.hero.visual} />
        </Reveal>
      </div>
    </section>
  );
}

export function DocPage({ kind, doc }: { kind: PageKind; doc: PageDoc }) {
  const related = doc.related.map(resolveRef).filter((r) => r !== undefined);
  const url = `${SITE_URL}/${kind}/${doc.slug}`;
  const photo = PAGE_PHOTOS[`${kind}/${doc.slug}`];

  return (
    <main>
      <Hero kind={kind} doc={doc} />

      <section
        aria-label="Who it is for"
        className="border-y border-border bg-card"
      >
        <div className="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-8">
          <p className="eyebrow shrink-0 text-muted-foreground">Built for</p>
          <ul className="flex flex-wrap gap-2">
            {doc.audience.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border px-3.5 py-1.5 text-[0.9rem] font-medium"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {photo ? (
        <div className="wrap pt-10 md:pt-14">
          <Reveal>
            <Photo photo={photo} className="aspect-[16/10] md:aspect-[21/9]" />
          </Reveal>
        </div>
      ) : null}

      <section aria-labelledby="problems-title" className="py-20 md:py-28">
        <div className="wrap">
          <SectionHeader
            eyebrow="The problem"
            title={<span id="problems-title">What goes wrong without it</span>}
          />
          <RevealGroup as="ol" className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {doc.problems.map((p, i) => (
              <RevealItem as="li" key={p.title} className="bg-background p-7 md:p-9">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-3 mt-8">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-label="How Ashwa helps" className="space-y-20 pb-20 md:space-y-32 md:pb-32">
        {doc.showcase.map((s, i) => (
          <div key={s.title} className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <Visual name={s.visual} />
            </Reveal>
            <Reveal delay={0.08}>
              <span className="font-mono text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(doc.showcase.length).padStart(2, "0")}
              </span>
              <h2 className="display-2 mt-4">{s.title}</h2>
              <p className="lede mt-5">{s.body}</p>
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>

      <section aria-labelledby="features-title" className="border-y border-border bg-card py-20 md:py-28">
        <div className="wrap">
          <SectionHeader
              eyebrow="Capabilities"
              title={<span id="features-title">Everything in the module</span>}
              lede="Switch on what you need. Each capability works with the rest of the platform."
            />
          <RevealGroup as="ul" className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {doc.features.map((f) => (
              <RevealItem as="li" key={f.title} className="border-t border-foreground/15 pt-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="how-title" className="on-ink grid-lines py-20 md:py-28">
        <div className="wrap">
          <Eyebrow className="text-ink-muted">How it works</Eyebrow>
          <h2 id="how-title" className="display-2 mt-5 max-w-3xl">
            From device to decision
          </h2>
          <RevealGroup as="ol" className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {doc.how.map((h, i) => (
              <RevealItem as="li" key={h.title} className="border-t border-ink-line pt-6">
                <span className="font-display text-5xl font-semibold tracking-tight text-primary">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{h.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="outcomes-title" className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Outcomes"
            title={<span id="outcomes-title">What changes for the business</span>}
          />
          <RevealGroup as="ul" className="divide-y divide-border border-y border-border">
            {doc.outcomes.map((o) => (
              <RevealItem as="li" key={o.title} className="grid gap-3 py-7 md:grid-cols-[1fr_1.3fr] md:gap-10">
                <h3 className="display-3">{o.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{o.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="cases-title" className="pb-20 md:pb-28">
        <div className="wrap">
          <SectionHeader
            eyebrow="In practice"
            title={<span id="cases-title">Where it earns its keep</span>}
          />
          <RevealGroup as="ul" className="mt-12 grid gap-5 md:grid-cols-3">
            {doc.useCases.map((u, i) => (
              <RevealItem
                as="li"
                key={u.title}
                className={cn(
                  "flex flex-col rounded-2xl p-7",
                  i === 0 ? "bg-primary text-primary-foreground" : "border border-border bg-card",
                )}
              >
                <span className={cn("eyebrow", i === 0 ? "text-white/70" : "text-muted-foreground")}>
                  Scenario {i + 1}
                </span>
                <h3 className="display-3 mt-10">{u.title}</h3>
                <p className={cn("mt-4 leading-relaxed", i === 0 ? "text-white/85" : "text-muted-foreground")}>
                  {u.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="border-t border-border py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Questions"
            title={<span id="faq-title">{doc.name}: common questions</span>}
          />
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
