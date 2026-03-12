export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand">Concesiones Viena & Co.</p>
          <p>
            Solución moderna para colegios y sostenedores: concesión de cafetería escolar
            con operación profesional y sistema de compra inteligente.
          </p>
        </div>
        <div>
          <p className="footer-title">Contacto comercial</p>
          <a href="mailto:contacto@concesionesviena.cl">contacto@concesionesviena.cl</a>
          <a href="tel:+56976543210">+56 9 7654 3210</a>
          <a href="#servicios">Servicios</a>
          <a href="#faq">Preguntas frecuentes</a>
        </div>
      </div>
      <p className="container footer-legal">
        © {year} Concesiones Viena & Co. Todos los derechos reservados.
      </p>
    </footer>
  );
}
