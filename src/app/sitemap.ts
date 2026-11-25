import { MetadataRoute } from "next";

import { DOCS, KINDS, articles } from "@/content";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";

const lastModified = new Date(CONTENT_UPDATED);
const legalModified = new Date("2026-10-23");

type Entry = MetadataRoute.Sitemap[number];

const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly"): Entry => ({
  url: `${SITE_URL}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("", 1, "weekly"),
    ...KINDS.flatMap((kind) => [
      page(`/${kind}`, 0.9),
      ...DOCS[kind].map((d) => page(`/${kind}/${d.slug}`, 0.8)),
    ]),
    page("/pricing", 0.8),
    page("/demo", 0.8),
    page("/resources", 0.7, "weekly"),
    ...articles.map((a) => ({
      ...page(`/resources/${a.slug}`, 0.6),
      lastModified: new Date(a.published),
    })),
    ...["/devices", "/integrations", "/faq", "/about", "/partners", "/contact"].map((p) => page(p, 0.6)),
    ...["/support", "/privacy", "/terms", "/delete-account"].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: legalModified,
      changeFrequency: "yearly" as const,
      priority: path === "/support" ? 0.5 : 0.3,
    })),
  ];
}
