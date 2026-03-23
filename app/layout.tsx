import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimator } from "./ScrollAnimator";
import { Analytics } from "@/components/analytics/Analytics";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Concesiones Viena & Co.",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    title: "Concesiones Viena & Co. | Solución institucional para cafeterías escolares",
    description: siteConfig.ogDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Concesiones Viena & Co. - solución institucional para cafeterías escolares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concesiones Viena & Co. | Solución institucional para cafeterías escolares",
    description: siteConfig.ogDescription,
    images: [siteConfig.twitterImage],
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  description:
    "Empresa chilena especializada en concesión de cafeterías escolares y sistemas inteligentes de gestión para colegios.",
  areaServed: "CL",
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className={inter.variable}>
      <body data-scrolled="false">
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollAnimator />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
