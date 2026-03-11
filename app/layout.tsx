import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollAnimator } from "./ScrollAnimator";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://www.concesionesviena.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Viena & Co. | Cafetería - Casino",
    template: "%s | Concesiones Viena & Co.",
  },
  description:
    "Concesiones Viena & Co. moderniza cafeterías escolares en Chile con concesión integral y sistema inteligente de compra para colegios y sostenedores.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon/favicon_v.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Concesiones Viena & Co.",
    title: "Concesiones Viena & Co. | Solución institucional para cafeterías escolares",
    description:
      "Servicio B2B para colegios y sostenedores: operación de cafetería, digitalización y trazabilidad para una gestión moderna.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Concesiones Viena & Co.",
  url: siteUrl,
  description:
    "Empresa chilena especializada en concesión de cafeterías escolares y sistemas inteligentes de gestión para colegios.",
  areaServed: "CL",
  email: "contacto@concesionesviena.cl",
  telephone: "+56 9 7654 3210",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <body data-scrolled="false">
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollAnimator />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
