import Link from "next/link";

const navigation = [
  { name: "Problema", href: "/#problema" },
  { name: "Solución", href: "/#solucion" },
  { name: "Beneficios", href: "/#beneficios" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Contacto", href: "/#contacto" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container row-between">
        <Link className="brand" href="/" aria-label="Ir a la página principal de Concesiones Viena y Co">
          <span className="logo-placeholder" aria-hidden="true">
            LOGO
          </span>
          <span>Concesiones Viena & Co.</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
