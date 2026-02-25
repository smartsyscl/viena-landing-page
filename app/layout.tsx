import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = "https://www.concesionesviena.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Concesiones Viena & Co. | Concesión de cafetería escolar inteligente",
    template: "%s | Concesiones Viena & Co.",
  },
  description:
    "Concesiones Viena & Co. ayuda a colegios de Chile a modernizar su cafetería escolar con concesión profesional y sistema inteligente de compra con pulsera.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Concesiones Viena & Co.",
    title: "Concesiones Viena & Co. | Solución moderna para cafeterías escolares",
    description:
      "Servicio integral para colegios y sostenedores: operación de cafetería escolar + plataforma digital de compra con pulsera.",
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
    "Empresa chilena especializada en concesión de cafeterías escolares y sistemas inteligentes de compra para colegios.",
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
    <html lang="es-CL">
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
