import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://www.vienaco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Viena Co | Soluciones corporativas estratégicas",
    template: "%s | Viena Co",
  },
  description:
    "Viena Co impulsa empresas con consultoría estratégica, transformación digital y soluciones corporativas de alto impacto.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Viena Co",
    title: "Viena Co | Soluciones corporativas estratégicas",
    description:
      "Consultoría corporativa y transformación digital para organizaciones que buscan resultados medibles y sostenibles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Viena Co",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Firma corporativa especializada en estrategia, crecimiento y transformación digital.",
  sameAs: [
    "https://www.linkedin.com/company/vienaco",
    "https://x.com/vienaco",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contacto@vienaco.com",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
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
