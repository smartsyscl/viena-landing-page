
# Concesiones Viena & Co.

Landing en Next.js 16 para concesión de cafetería escolar.

## Variables de entorno

Usa `.env.local` tomando como base `.env.example`.

- `NEXT_PUBLIC_SITE_URL`: URL canónica del sitio en producción.
- `NEXT_PUBLIC_CONTACT_EMAIL`: correo comercial mostrado en footer y metadata.
- `NEXT_PUBLIC_CONTACT_PHONE_RAW`: teléfono en formato linkeable para `tel:`.
- `NEXT_PUBLIC_CONTACT_PHONE_DISPLAY`: teléfono mostrado al usuario.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número para el CTA de WhatsApp.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: token opcional para Search Console.
- `NEXT_PUBLIC_GA_ID`: ID opcional de Google Analytics 4.

## Comandos

- `npm run dev`: entorno local.
- `npm run lint`: validación ESLint.
- `npm run build`: build de producción.
- `npm run start`: servir build localmente.

## Preparación para producción

El proyecto ya incluye:

- metadata Open Graph y Twitter.
- `robots.txt`, `sitemap.xml` y `manifest.webmanifest` generados por App Router.
- imagen social generada por la app.
- headers de seguridad base en Next.js.
- integración opcional con Google Analytics 4.
- manejo de errores para App Router.

Antes de publicar conviene validar en el dominio final:

- Lighthouse en mobile y desktop.
- indexación y verificación en Search Console.
- funcionamiento real de CTA de WhatsApp, teléfono y correo.
- vista previa de enlaces compartidos en WhatsApp, LinkedIn y X.

