export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contacto">
      <div className="container footer-grid">
        <div>
          <p className="brand">Viena Co</p>
          <p>Consultoría corporativa enfocada en crecimiento sostenible.</p>
        </div>
        <div>
          <p className="footer-title">Contacto</p>
          <a href="mailto:contacto@vienaco.com">contacto@vienaco.com</a>
        </div>
      </div>
      <p className="container footer-legal">© {year} Viena Co. Todos los derechos reservados.</p>
    </footer>
  );
}
