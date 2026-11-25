import type { ReactNode } from "react";

import { Breadcrumbs, SectionHeader, type Crumb } from "./ui";

/** Opening block shared by the company, resource and conversion pages. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="grid-lines border-b border-border pt-28 md:pt-36">
      <div className="wrap pb-14 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <SectionHeader as="h1" className="mt-10 max-w-4xl" eyebrow={eyebrow} title={title} lede={lede} />
        {children}
      </div>
    </section>
  );
}

export function pageMeta(path: string, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}
