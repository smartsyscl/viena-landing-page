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

const siteUrl = "https://www.concesionesviena.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Concesiones Viena & Co. | Concesión de cafetería escolar inteligente",
    template: "%s | Concesiones Viena & Co.",
  },
  description:
    "Concesiones Viena & Co. moderniza cafeterías escolares en Chile con concesión integral y sistema inteligente de compra para colegios y sostenedores.",
  alternates: {
    canonical: "/",
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

const scrollScript = `
(() => {
  const onScroll = () => {
    document.body.dataset.scrolled = window.scrollY > 12 ? 'true' : 'false';
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  const bindAnimations = () => {
    document.querySelectorAll('[data-animate]').forEach((element) => {
      observer.observe(element);
    });
  };

  onScroll();
  bindAnimations();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
`;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script dangerouslySetInnerHTML={{ __html: scrollScript }} />
      </body>
    </html>
  );
}
