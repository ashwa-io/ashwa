import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

const lastModified = new Date("2026-07-16");
const legalModified = new Date("2026-10-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["/support", "/privacy", "/terms", "/delete-account"].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: legalModified,
      changeFrequency: "yearly" as const,
      priority: path === "/support" ? 0.5 : 0.3,
    })),
  ];
}
