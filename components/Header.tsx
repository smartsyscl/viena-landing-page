import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Problema", href: "/#problema" },
  { name: "Solución", href: "/#solucion" },
  { name: "Beneficios", href: "/#beneficios" },
  { name: "Servicios", href: "/#servicios" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" href="/" aria-label="Ir a la página principal de Concesiones Viena y Co">
          <Image
            src="/logos/placeholder-logo.svg"
            alt="Concesiones Viena y Co"
            width={220}
            height={44}
            className="brand-logo"
            priority
          />
        </Link>

        <div className="nav-actions">
          <input id="mobile-menu-toggle" className="menu-toggle" type="checkbox" />
          <label className="hamburger" htmlFor="mobile-menu-toggle" aria-label="Abrir menú principal">
            <span />
            <span />
            <span />
          </label>

          <nav className="site-nav" aria-label="Navegación principal">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <Link className="nav-cta" href="/#contacto">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
