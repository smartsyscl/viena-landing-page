import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concesión de cafetería escolar en Chile",
  description:
    "Solución institucional para colegios: concesión de cafetería escolar con sistema inteligente de compra y control operativo.",
  alternates: {
    canonical: "/",
  },
};

const whatsappUrl =
  "https://wa.me/56976543210?text=Hola%2C%20quiero%20coordinar%20una%20reuni%C3%B3n%20sobre%20concesi%C3%B3n%20de%20cafeter%C3%ADa%20escolar.";

export default function HomePage() {
  return (
    <>
      <section className="hero section" id="inicio" aria-labelledby="hero-title" data-animate>
        <div className="container stack-md">
          <p className="eyebrow">Solución institucional para colegios en Chile</p>
          <h1 id="hero-title">
            Profesionalizamos la cafetería escolar con una operación integral y trazable.
          </h1>
          <p className="lead">
            Concesiones Viena & Co. integra servicio de concesión y tecnología para que
            sostenedores y equipos directivos gestionen la alimentación escolar con más
            control, eficiencia y estándares modernos.
          </p>
          <a className="cta" href="#contacto">
            Solicitar reunión institucional
          </a>
        </div>
      </section>

      <section className="section" id="problema" aria-labelledby="problema-title" data-animate>
        <div className="container stack-sm">
          <h2 id="problema-title">El desafío actual en cafeterías escolares</h2>
          <p>
            En muchos establecimientos persisten procesos manuales, poca visibilidad de los
            consumos, tiempos de atención extensos y dificultad para controlar la operación
            diaria. Esto limita la toma de decisiones y afecta la experiencia de la comunidad.
          </p>
        </div>
      </section>

      <section className="section surface" id="solucion" aria-labelledby="solucion-title" data-animate>
        <div className="container stack-sm">
          <h2 id="solucion-title">Nuestra solución integral</h2>
          <p>
            Combinamos concesión profesional de cafetería escolar con un sistema digital de
            compra con pulsera para ordenar flujos, mejorar trazabilidad y entregar reportes
            útiles para la gestión del colegio.
          </p>
        </div>
      </section>

      <section className="section" id="funcionamiento" aria-labelledby="funcionamiento-title" data-animate>
        <div className="container">
          <h2 id="funcionamiento-title">Cómo funciona</h2>
          <ol className="steps">
            <li>
              <h3>1. Diagnóstico institucional</h3>
              <p>Analizamos operación, objetivos y requerimientos del establecimiento.</p>
            </li>
            <li>
              <h3>2. Implementación del modelo de concesión</h3>
              <p>Operamos la cafetería con procesos, protocolos y seguimiento continuo.</p>
            </li>
            <li>
              <h3>3. Activación del sistema digital</h3>
              <p>
                Habilitamos compras con pulsera y panel de control para trazabilidad y
                visibilidad administrativa.
              </p>
            </li>
            <li>
              <h3>4. Mejora continua</h3>
              <p>Entregamos soporte y métricas para optimizar el servicio en el tiempo.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section surface" id="beneficios" aria-labelledby="beneficios-title" data-animate>
        <div className="container">
          <h2 id="beneficios-title">Beneficios para el colegio y sostenedor</h2>
          <div className="cards">
            <article className="card">
              <h3>Gestión con datos</h3>
              <p>Información clara para decisiones estratégicas y seguimiento operativo.</p>
            </article>
            <article className="card">
              <h3>Operación eficiente</h3>
              <p>Flujos más ordenados, menor fricción y mayor continuidad del servicio.</p>
            </article>
            <article className="card">
              <h3>Propuesta institucional moderna</h3>
              <p>
                Un modelo alineado con estándares actuales de administración escolar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="servicios" aria-labelledby="servicios-title" data-animate>
        <div className="container">
          <h2 id="servicios-title">Servicios</h2>
          <div className="cards">
            <article className="card">
              <h3>Concesión integral de cafetería</h3>
              <p>Administración operativa del servicio bajo estándares definidos.</p>
            </article>
            <article className="card">
              <h3>Sistema inteligente de compra</h3>
              <p>Compra con pulsera y herramientas de control para el establecimiento.</p>
            </article>
            <article className="card">
              <h3>Soporte y mejora de gestión</h3>
              <p>Monitoreo, análisis y acompañamiento para sostener resultados.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section surface" id="empresa" aria-labelledby="empresa-title" data-animate>
        <div className="container stack-sm">
          <h2 id="empresa-title">Sobre Concesiones Viena & Co.</h2>
          <p>
            Somos una empresa chilena con enfoque B2B institucional. Diseñamos soluciones
            para colegios y sostenedores que buscan una cafetería escolar profesional,
            medible y alineada con una gestión moderna.
          </p>
        </div>
      </section>

      <section className="section" id="testimonios" aria-labelledby="testimonios-title" data-animate>
        <div className="container">
          <h2 id="testimonios-title">Testimonios</h2>
          <div className="cards testimonials">
            <blockquote className="card">
              <p>
                “Hoy contamos con indicadores de operación y trazabilidad semanal para
                reuniones de gestión con el sostenedor.”
              </p>
              <cite>Dirección Administrativa, colegio particular subvencionado</cite>
            </blockquote>
            <blockquote className="card">
              <p>
                “La implementación fue ordenada y fortaleció nuestra propuesta institucional
                de alimentación escolar.”
              </p>
              <cite>Rectoría, establecimiento educacional en la RM</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section cta-band" id="contacto" aria-labelledby="contacto-title" data-animate>
        <div className="container stack-sm">
          <h2 id="contacto-title">Conversemos sobre la cafetería de tu establecimiento</h2>
          <p>
            Coordina una reunión para evaluar un modelo de concesión integral y conocer cómo
            digitalizar la gestión del servicio.
          </p>
          <a className="cta whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
