import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container row-between">
        <Link className="brand" href="/" aria-label="Ir a la página de inicio de Viena Co">
          Viena Co
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
