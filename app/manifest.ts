import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.companyName,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#ffffff",
    lang: siteConfig.language,
    icons: [
      {
        src: siteConfig.logo,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: siteConfig.favicon,
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}