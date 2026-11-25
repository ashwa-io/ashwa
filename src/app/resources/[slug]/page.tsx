import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs, CardLink, CtaBand, FaqList, JsonLd } from "@/components/site/ui";
import { KIND_META, articles, getArticle, resolveRef } from "@/content";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const path = `/resources/${slug}`;
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: a.title,
      description: a.description,
      url: path,
      type: "article",
      publishedTime: a.published,
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description },
  };
}

const anchor = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = a.related.map(resolveRef).filter((r) => r !== undefined);
  const published = new Date(a.published).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      <article>
        <header className="border-b border-border pt-28 md:pt-36">
          <div className="wrap pb-14 md:pb-20">
            <Breadcrumbs
              items={[
                { name: "Resources", href: "/resources" },
                { name: a.title, href: `/resources/${a.slug}` },
              ]}
            />
            <p className="eyebrow mt-10 text-primary">{a.category}</p>
            <h1 className="display-2 mt-5 max-w-4xl">{a.title}</h1>
            <p className="mt-6 font-mono text-[0.78rem] text-muted-foreground">
              <time dateTime={a.published}>{published}</time> · {a.readMinutes} min read · By the Ashwa team
            </p>
          </div>
        </header>

        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[16rem_minmax(0,44rem)] lg:gap-20">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow text-muted-foreground">On this page</p>
              <ol className="mt-4 space-y-2.5 border-l border-border">
                {a.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${anchor(s.heading)}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.92rem] leading-snug text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div>
            <p className="text-[1.3rem] leading-relaxed">{a.intro}</p>
            {a.sections.map((s) => (
              <section key={s.heading} id={anchor(s.heading)} className="mt-12 scroll-mt-28">
                <h2 className="display-3">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-5 text-[1.08rem] leading-[1.75] text-foreground/85">
                    {p}
                  </p>
                ))}
                {s.list ? (
                  <ul className="mt-5 space-y-2.5 text-[1.08rem] leading-relaxed text-foreground/85">
                    {s.list.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-primary" />
                        {x}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {a.faqs.length ? (
              <section className="mt-16">
                <h2 className="display-3 mb-6">Quick answers</h2>
                <FaqList faqs={a.faqs} />
              </section>
            ) : null}
          </div>
        </div>
      </article>

      {related.length ? (
        <section aria-labelledby="related-title" className="border-t border-border py-16 md:py-24">
          <div className="wrap">
            <h2 id="related-title" className="display-3">
              Related on Ashwa
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
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.published,
          dateModified: a.published,
          author: { "@type": "Organization", name: "Ashwa", url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/resources/${a.slug}`,
          image: `${SITE_URL}/og-image.png`,
        }}
      />
    </main>
  );
}
