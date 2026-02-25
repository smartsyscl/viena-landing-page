import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concesión de cafetería escolar en Chile",
  description:
    "Landing corporativa para captar colegios: concesión de cafetería escolar y sistema inteligente de compra con pulsera para una gestión más eficiente.",
  alternates: {
    canonical: "/",
  },
};

const whatsappUrl =
  "https://wa.me/56976543210?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20concesi%C3%B3n%20de%20cafeter%C3%ADa%20escolar.";

export default function HomePage() {
  return (
    <>
      <section className="hero section" id="inicio" aria-labelledby="hero-title">
        <div className="container stack-md">
          <p className="eyebrow">Concesión de cafetería escolar para colegios en Chile</p>
          <h1 id="hero-title">
            Modernizamos la cafetería de tu colegio con operación profesional y compra con
            pulsera.
          </h1>
          <p className="lead">
            En Concesiones Viena & Co. ayudamos a sostenedores y directivos a mejorar la
            experiencia alimentaria, ordenar la operación y obtener trazabilidad en cada
            compra.
          </p>
          <a className="cta" href="#contacto">
            Solicitar reunión comercial
          </a>
        </div>
      </section>

      <section className="section" id="problema" aria-labelledby="problema-title">
        <div className="container stack-sm">
          <h2 id="problema-title">El problema actual en cafeterías escolares</h2>
          <p>
            Muchos colegios enfrentan filas extensas, baja trazabilidad en compras, cobros
            manuales y poca visibilidad para la gestión. Esto afecta la operación diaria,
            la convivencia escolar y el control administrativo.
          </p>
        </div>
      </section>

      <section className="section surface" id="solucion" aria-labelledby="solucion-title">
        <div className="container stack-sm">
          <h2 id="solucion-title">Nuestra solución integral</h2>
          <p>
            Integramos concesión de cafetería escolar con un sistema digital de compra por
            pulsera. El colegio obtiene servicio alimentario confiable y una plataforma
            inteligente para controlar consumos y optimizar la gestión.
          </p>
        </div>
      </section>

      <section className="section" id="funcionamiento" aria-labelledby="funcionamiento-title">
        <div className="container">
          <h2 id="funcionamiento-title">Cómo funciona</h2>
          <ol className="steps">
            <li>
              <h3>1. Diagnóstico del establecimiento</h3>
              <p>Levantamos flujos operativos, capacidad y objetivos del colegio.</p>
            </li>
            <li>
              <h3>2. Implementación de la concesión</h3>
              <p>Operamos la cafetería con estándares de servicio y control definidos.</p>
            </li>
            <li>
              <h3>3. Activación del sistema con pulsera</h3>
              <p>
                Habilitamos la compra digital para trazabilidad, rapidez en atención y
                reportes de gestión.
              </p>
            </li>
            <li>
              <h3>4. Seguimiento continuo</h3>
              <p>
                Entregamos soporte, métricas y mejoras para asegurar un servicio sostenible.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section surface" id="beneficios" aria-labelledby="beneficios-title">
        <div className="container">
          <h2 id="beneficios-title">Beneficios para el colegio</h2>
          <div className="cards">
            <article className="card">
              <h3>Control y trazabilidad</h3>
              <p>Reportes claros para directivos y sostenedores en tiempo real.</p>
            </article>
            <article className="card">
              <h3>Eficiencia operativa</h3>
              <p>Menos filas, atención más rápida y procesos ordenados.</p>
            </article>
            <article className="card">
              <h3>Experiencia moderna</h3>
              <p>
                Tecnología de compra con pulsera alineada con los estándares actuales.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="servicios" aria-labelledby="servicios-title">
        <div className="container">
          <h2 id="servicios-title">Servicios</h2>
          <div className="cards">
            <article className="card">
              <h3>Concesión integral de cafetería</h3>
              <p>Operación completa, supervisión y mejora continua del servicio.</p>
            </article>
            <article className="card">
              <h3>Sistema inteligente de compra</h3>
              <p>
                Plataforma digital con pulsera para pagos y control administrativo.
              </p>
            </article>
            <article className="card">
              <h3>Soporte y analítica</h3>
              <p>Indicadores para tomar decisiones con datos reales del servicio.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section surface" id="empresa" aria-labelledby="empresa-title">
        <div className="container stack-sm">
          <h2 id="empresa-title">Sobre Concesiones Viena & Co.</h2>
          <p>
            Somos una empresa chilena enfocada en resolver la alimentación escolar desde
            una mirada operativa y tecnológica. Combinamos experiencia en concesiones con
            herramientas digitales para apoyar a colegios y sostenedores.
          </p>
        </div>
      </section>

      <section className="section" id="testimonios" aria-labelledby="testimonios-title">
        <div className="container">
          <h2 id="testimonios-title">Testimonios</h2>
          <div className="cards testimonials">
            <blockquote className="card">
              <p>
                “Mejoramos nuestros tiempos de atención y ahora contamos con trazabilidad
                diaria para la gestión del casino.”
              </p>
              <cite>Dirección Administrativa, colegio particular subvencionado</cite>
            </blockquote>
            <blockquote className="card">
              <p>
                “El sistema con pulsera nos permitió ordenar el proceso y profesionalizar el
                servicio sin complejidad para el equipo.”
              </p>
              <cite>Sostenedor, red de establecimientos educacionales</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section cta-band" id="contacto" aria-labelledby="contacto-title">
        <div className="container stack-sm">
          <h2 id="contacto-title">Conversemos sobre la cafetería de tu colegio</h2>
          <p>
            Agenda una reunión comercial y conoce cómo implementar una solución integral,
            moderna y escalable en tu establecimiento.
          </p>
          <a className="cta whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
