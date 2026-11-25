import type { Metadata } from "next";
import type { ReactNode } from "react";

import { pageMeta } from "@/components/site/page-hero";
import { JsonLd } from "@/components/site/ui";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/about",
  "About Ashwa: the team behind the tracking platform",
  "Ashwa is a GPS tracking and fleet management platform built in Raipur, India. Meet the team and the ideas behind a platform made of modules you combine.",
);

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
          mainEntity: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      {children}
    </>
  );
}
