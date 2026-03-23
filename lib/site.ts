const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.concesionesviena.cl";
const publicEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@concesionesviena.cl";
const publicPhoneRaw = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+56976543210";
const publicPhoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "+56 9 7654 3210";
const publicWhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56976543210";

export const siteConfig = {
  name: "Concesiones Viena & Co.",
  shortName: "Viena & Co.",
  companyName: "Concesiones Viena & Co.",
  siteUrl: publicSiteUrl,
  locale: "es_CL",
  language: "es-CL",
  title: "Viena & Co. | Cafetería - Casino",
  description:
    "Concesiones Viena & Co. moderniza cafeterías escolares en Chile con concesión integral y sistema inteligente de compra para colegios y sostenedores.",
  ogDescription:
    "Servicio B2B para colegios y sostenedores: operación de cafetería, digitalización y trazabilidad para una gestión moderna.",
  email: publicEmail,
  phoneRaw: publicPhoneRaw,
  phoneDisplay: publicPhoneDisplay,
  whatsappNumber: publicWhatsappNumber,
  whatsappMessage:
    "Hola, quiero coordinar una reunión sobre concesión de cafetería escolar.",
  favicon: "/favicon/favicon_v.ico",
  logo: "/logos/vv_logo_web-10.svg",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;