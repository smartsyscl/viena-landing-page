import Image from "next/image";
import Link from "next/link";
import { Home, Users, Settings, Images, Apple, Mail } from 'lucide-react';

const navLinks = [
  { name: "Inicio",        href: "/#inicio",    icon: Home },
  { name: "Nosotros",       href: "/#about",     icon: Users },
  { name: "Servicios",     href: "/#servicios", icon: Settings },
  { name: "Galería",       href: "/#galeria",   icon: Images },
  { name: "Nutrición",     href: "/nutricion",  icon: Apple },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" href="/" aria-label="Ir a la página principal de Concesiones Viena y Co">
          <Image
            src="/logos/vv_logo_web-10.svg"
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
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">
                    <item.icon className="nav-icon" aria-hidden="true" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/#contacto" className="nav-cta">
              <Mail className="nav-icon" aria-hidden="true" />
              Contáctanos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}