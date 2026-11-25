import type { ReactNode } from "react";

import { Breadcrumbs, SectionHeader, type Crumb } from "./ui";

/** Opening block shared by the company, resource and conversion pages. */
export function PageHero({
  crumbs,
  title,
  lede,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border pt-28 md:pt-40">
      <div className="wrap pb-14 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <SectionHeader as="h1" className="mt-10 max-w-4xl" title={title} lede={lede} />
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
