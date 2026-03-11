import type { Metadata } from "next";
import { Award, CheckCircle, Star, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: "Concesión de Cafetería Escolar en Chile | Viena & Co.",
  description:
    "Concesión integral de cafetería y casino escolar para colegios en Chile: operación profesional, sistema inteligente de compra y trazabilidad para sostenedores.",
  keywords: [
    "concesión cafetería escolar",
    "casino escolar",
    "cafetería para colegios",
    "servicio alimentación escolar chile",
    "sistema de compra escolar",
    "gestión cafetería escolar",
  ],
  alternates: {
    canonical: "/",
  },
};

const whatsappUrl =
  "https://wa.me/56976543210?text=Hola%2C%20quiero%20coordinar%20una%20reuni%C3%B3n%20sobre%20concesi%C3%B3n%20de%20cafeter%C3%ADa%20escolar.";

import ServiceGallery, { GalleryImage } from "../components/ui/ServiceGallery";

const siteUrl = "https://www.concesionesviena.cl";

const faqs = [
  {
    question: "¿Qué incluye la concesión de cafetería escolar?",
    answer:
      "Incluye diagnóstico, operación diaria, protocolos de servicio, control de inventario y soporte continuo con indicadores para la dirección del establecimiento.",
  },
  {
    question: "¿Pueden implementar el sistema digital sin detener la operación?",
    answer:
      "Sí. La implementación se planifica por etapas para mantener continuidad operacional y reducir fricción para estudiantes, apoderados y equipo administrativo.",
  },
  {
    question: "¿Trabajan con colegios particulares y subvencionados?",
    answer:
      "Sí. Nuestro modelo B2B institucional se adapta al tamaño, contexto y objetivos de cada colegio o sostenedor.",
  },
  {
    question: "¿Qué métricas entregan para gestión?",
    answer:
      "Entregamos reportes de consumo, trazabilidad de compras, comportamiento de demanda y desempeño operativo para apoyar decisiones estratégicas.",
  },
];

export default function HomePage() {
  const galleryImages: GalleryImage[] = [
    // Next.js serves files in `public` at the root path – don’t include "/public" in the URL
    { src: "/gallery/servicio1.jpg", alt: "Equipo trabajando en cafetería escolar", width: 1200, height: 800 },
    { src: "/gallery/servicio1.jpg", alt: "Vista interior de cafetería moderna", width: 1200, height: 800 },
    { src: "/gallery/servicio1.jpg", alt: "Alimentos frescos y saludables sobre barra", width: 1200, height: 800 },
  ];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Concesiones Viena & Co.",
    url: siteUrl,
    inLanguage: "es-CL",
    description:
      "Concesión integral de cafetería escolar para colegios en Chile.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Concesión integral de cafetería y casino escolar",
    provider: {
      "@type": "Organization",
      name: "Concesiones Viena & Co.",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    description:
      "Operación profesional de cafetería escolar, sistema inteligente de compra y trazabilidad para colegios y sostenedores.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="hero section" id="inicio" aria-labelledby="hero-title" data-animate>
        <div className="container stack-md">
          <h1 id="hero-title">
            Concesión de cafetería escolar en Chile con operación profesional y trazabilidad.
          </h1>
          <p className="hero-subtitle">
            Ayudamos a colegios y sostenedores a modernizar su casino escolar con una solución integral:
            operación, sistema inteligente de compra y métricas para gestión.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#contacto">
              Solicitar diagnóstico
            </a>
            <a className="cta cta-secondary" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section className="section surface" id="about" aria-labelledby="about-title" data-animate>
        <div className="container">
          <div className="about-content">
            <h2 id="about-title" className="about-title">Sobre Concesiones Viena & Co.</h2>
            <p className="about-highlight">
              Somos una empresa chilena con enfoque B2B institucional especializada en transformar
              cafeterías escolares en operaciones modernas, medibles y sostenibles.
            </p>
            <p className="about-body">
              Diseñamos soluciones integrales para colegios y sostenedores que buscan profesionalizar
              su gestión de alimentación escolar, mejorando la trazabilidad, eficiencia operativa
              y experiencia de la comunidad educativa.
            </p>

            <div className="stats-grid" aria-label="Indicadores de valor del servicio">
              <article className="stat-card">
                <h3>+10 años</h3>
                <p>Experiencia acumulada en operación de servicios alimentarios.</p>
              </article>
              <article className="stat-card">
                <h3>100% trazable</h3>
                <p>Registro de compras y consumo con visibilidad para administración.</p>
              </article>
              <article className="stat-card">
                <h3>Soporte continuo</h3>
                <p>Acompañamiento operativo y mejora del servicio durante todo el año escolar.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío Section */}
      <section className="section" id="challenge" aria-labelledby="challenge-title" data-animate>
        <div className="container stack-sm">
          <h2 id="challenge-title">El desafío actual en cafeterías escolares</h2>
          <p>
            En muchos establecimientos persisten procesos manuales, poca visibilidad de los
            consumos, tiempos de atención extensos y dificultad para controlar la operación
            diaria. Esto limita la toma de decisiones y afecta la experiencia de la comunidad.
          </p>
        </div>
      </section>

      {/* Nuestra Solución Section */}
      <section className="section surface" id="solucion" aria-labelledby="solucion-title" data-animate>
        <div className="container stack-sm">
          <h2 id="solucion-title">
            <Award className="inline-icon" /> Nuestra solución integral
          </h2>
          <p>
            Combinamos concesión profesional de cafetería escolar con un sistema digital de
            compra con pulsera para ordenar flujos, mejorar trazabilidad y entregar reportes
            útiles para la gestión del colegio. Nuestra plataforma permite estadísticas en
            tiempo real, control de inventarios y configuración de menús.
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
              <h3><CheckCircle className="inline-icon" /> Gestión con datos</h3>
              <p>Información clara para decisiones estratégicas y seguimiento operativo.</p>
            </article>
            <article className="card">
              <h3><CheckCircle className="inline-icon" /> Operación eficiente</h3>
              <p>Flujos más ordenados, menor fricción y mayor continuidad del servicio.</p>
            </article>
            <article className="card">
              <h3><CheckCircle className="inline-icon" /> Propuesta institucional moderna</h3>
              <p>
                Un modelo alineado con estándares actuales de administración escolar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="servicios" aria-labelledby="servicios-title" data-animate>
        <div className="container">
          <h2 id="servicios-title"><Settings className="inline-icon" /> Servicios</h2>
          <div className="cards">
            <article className="card">
              <h3><CheckCircle className="inline-icon" /> Concesión integral de cafetería</h3>
              <p>Administración operativa del servicio bajo estándares definidos.</p>
            </article>
            <article className="card">
              <h3><CheckCircle className="inline-icon" /> Sistema inteligente de compra</h3>
              <p>Compra con pulsera y herramientas de control para el establecimiento.</p>
            </article>
            <article className="card">
              <h3><CheckCircle className="inline-icon" /> Soporte y mejora de gestión</h3>
              <p>Monitoreo, análisis y acompañamiento para sostener resultados.</p>
            </article>
          </div>

          <div className="section-cta">
            <p>
              Si buscas una empresa para concesión de cafetería escolar con foco en continuidad operacional y control,
              conversemos.
            </p>
            <a className="cta" href="#contacto">
              Hablar con el equipo comercial
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-black text-white py-24" id="galeria" aria-labelledby="gallery-title" data-animate>
        <div className="container max-w-6xl">
          <h2 id="gallery-title" className="text-center">Galería de cafetería y casino escolar</h2>
          <p className="text-center text-white/60 mb-8">
            Imágenes referenciales de operación, servicio y experiencia en cafetería escolar.
          </p>
          <ServiceGallery images={galleryImages} />
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="section" id="testimonios" aria-labelledby="testimonios-title" data-animate>
        <div className="container">
          <h2 id="testimonios-title">Testimonios de colegios</h2>
          <div className="cards testimonials">
            <blockquote className="card">
              <p>
                “Hoy contamos con indicadores de operación y trazabilidad semanal para
                reuniones de gestión con el sostenedor.”
              </p>
              <div className="rating">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
              <cite>Dirección Administrativa, colegio particular subvencionado</cite>
            </blockquote>
            <blockquote className="card">
              <p>
                “La implementación fue ordenada y fortaleció nuestra propuesta institucional
                de alimentación escolar.”
              </p>
              <div className="rating">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
              <cite>Rectoría, establecimiento educacional en la RM</cite>
            </blockquote>
          </div>

          <div className="section-cta">
            <p>
              ¿Quieres evaluar una propuesta para tu establecimiento?
            </p>
            <a className="cta" href="#contacto">
              Agendar reunión
            </a>
          </div>
        </div>
      </section>

      <section className="section surface" id="faq" aria-labelledby="faq-title" data-animate>
        <div className="container stack-sm">
          <h2 id="faq-title">Preguntas frecuentes sobre concesión de cafetería escolar</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="legal" aria-labelledby="legal-title" data-animate>
        <div className="container stack-sm">
          <h2 id="legal-title">Información comercial y privacidad</h2>
          <p>
            Concesiones Viena & Co. atiende solicitudes comerciales de colegios y sostenedores en Chile.
            El contacto se realiza vía correo o WhatsApp para coordinación de reuniones y envío de propuestas.
          </p>
          <p>
            Si necesitas información sobre tratamiento de datos de contacto, puedes solicitarla al correo comercial
            indicado en el pie de página.
          </p>
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
