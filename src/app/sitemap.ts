import { MetadataRoute } from "next";

const lastModified = new Date("2026-07-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ashwa.in",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ashwa.in/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
