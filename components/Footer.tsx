import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand">{siteConfig.companyName}</p>
          <p>
            Solución moderna para colegios y sostenedores: concesión de cafetería escolar
            con operación profesional y sistema de compra inteligente.
          </p>
        </div>
        <div>
          <p className="footer-title">Contacto comercial</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
          <a href="#servicios">Servicios</a>
        </div>
      </div>
      <p className="container footer-legal">
        © {year} {siteConfig.companyName} Todos los derechos reservados.
      </p>
    </footer>
  );
}
