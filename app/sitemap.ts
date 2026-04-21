import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/nutricion`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}