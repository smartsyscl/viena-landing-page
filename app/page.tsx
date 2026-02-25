import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Viena Co ayuda a empresas a escalar con estrategia, transformación digital y ejecución orientada a resultados.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="hero container" id="nosotros">
        <p className="eyebrow">Consultoría corporativa</p>
        <h1>Impulsamos el crecimiento estratégico de tu organización.</h1>
        <p>
          En Viena Co diseñamos e implementamos soluciones de negocio para empresas
          que buscan eficiencia operativa, innovación y resultados medibles.
        </p>
        <a className="cta" href="#contacto">
          Solicitar diagnóstico
        </a>
      </section>

      <section className="container section" id="servicios" aria-labelledby="servicios-title">
        <h2 id="servicios-title">Servicios clave</h2>
        <div className="cards">
          <article className="card">
            <h3>Estrategia de crecimiento</h3>
            <p>Definimos hojas de ruta para expandir mercados y mejorar rentabilidad.</p>
          </article>
          <article className="card">
            <h3>Transformación digital</h3>
            <p>Optimizamos procesos y operaciones con tecnología de alto rendimiento.</p>
          </article>
          <article className="card">
            <h3>Gestión ejecutiva</h3>
            <p>Alineamos liderazgo, métricas y ejecución para decisiones más efectivas.</p>
          </article>
        </div>
      </section>
    </>
  );
}
