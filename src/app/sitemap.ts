import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ashwa.in",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ashwa.in/about",
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
