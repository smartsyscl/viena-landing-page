import type { Metadata } from "next";
import {
  Star,
  UtensilsCrossed,
  Smartphone,
  BarChart3,
  Boxes,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import ServiceGallery, { GalleryImage } from "../components/ui/ServiceGallery";
import TestimonialsCarousel from "../components/ui/TestimonialsCarousel";

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

  const serviceItems = [
    {
      title: "Concesión integral",
      description: "Operación del casino escolar con estándares claros y seguimiento continuo.",
      icon: UtensilsCrossed,
    },
    {
      title: "Compra inteligente",
      description: "Pulsera y flujo digital para agilizar atención y orden operativo.",
      icon: Smartphone,
    },
    {
      title: "Reportes y trazabilidad",
      description: "Indicadores clave para decisiones de dirección y sostenedor.",
      icon: BarChart3,
    },
    {
      title: "Control de inventario",
      description: "Visibilidad de stock y reposición para sostener continuidad.",
      icon: Boxes,
    },
    {
      title: "Protocolos y cumplimiento",
      description: "Procesos estandarizados para mantener calidad y orden diario.",
      icon: ShieldCheck,
    },
    {
      title: "Mejora continua",
      description: "Acompañamiento del equipo para optimizar resultados del servicio.",
      icon: Handshake,
    },
  ];

  const testimonials = [
    {
      quote:
        "Hoy contamos con indicadores de operación y trazabilidad semanal para reuniones de gestión con el sostenedor.",
      author: "Dirección Administrativa, colegio particular subvencionado",
    },
    {
      quote:
        "La implementación fue ordenada y fortaleció nuestra propuesta institucional de alimentación escolar.",
      author: "Rectoría, establecimiento educacional en la RM",
    },
  ];

  const solutionItems = [
    {
      id: "01",
      title: "Compra digital sin fricción",
      description: "Implementación por etapas para modernizar el servicio sin detener la operación.",
    },
    {
      id: "02",
      title: "Visibilidad para la gestión",
      description: "Métricas en tiempo real para dirección, administración y sostenedor.",
    },
    {
      id: "03",
      title: "Control operativo continuo",
      description: "Inventario, menús y protocolos integrados en un flujo más claro y confiable.",
    },
  ];

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

      <section className="section surface" id="about" aria-labelledby="about-title" data-animate>
        <div className="container">
          <div className="about-content">
            <h2 id="about-title" className="about-title">Quiénes Somos</h2>
            <p className="about-highlight">
              Somos Concesiones Viena & Co., empresa chilena especializada en concesión de cafetería y
              casino escolar para colegios y sostenedores.
            </p>
            <p className="about-body">
              Integramos operación profesional, tecnología de compra y trazabilidad para transformar la
              gestión de alimentación escolar en un servicio más moderno, medible y sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Desafío + Solución */}
      <section className="section challenge-solution" id="solucion" aria-labelledby="solucion-title" data-animate>
        <div className="container stack-sm">
          <h2 id="solucion-title">Del desafío al control operativo</h2>
          <div className="challenge-solution-shell">
            <article className="challenge-card challenge-card-solution">
              <p className="challenge-kicker">Respuesta Viena &amp; Co.</p>
              <h3>Una solución integral, simple y medible</h3>
              <p>
                Frente a procesos manuales, baja visibilidad de consumos y tiempos de atención
                extensos, integramos operación profesional y tecnología en un solo modelo de
                gestión para ordenar la cafetería escolar sin complejizar la adopción.
              </p>

              <div className="solution-points-desktop" aria-label="Pilares de la solución">
                {solutionItems.map((item) => (
                  <article key={item.id} className="solution-point-card">
                    <span className="solution-point-index">{item.id}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="solution-points-mobile" aria-label="Pilares de la solución en móvil">
                {solutionItems.map((item) => (
                  <details key={item.id} className="solution-accordion">
                    <summary>
                      <span className="solution-point-index">{item.id}</span>
                      <span className="solution-accordion-title">{item.title}</span>
                    </summary>
                    <div className="solution-accordion-body">
                      <div className="solution-accordion-content">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section services-showcase" id="servicios" aria-labelledby="servicios-title" data-animate>
        <div className="container">
          <div className="services-split">
            <div className="services-intro">
              <p className="services-kicker">Servicios institucionales</p>
              <h2 id="servicios-title" className="services-headline">
                Profesionaliza tu <span className="services-highlight">cafetería escolar</span> con gestión y control.
              </h2>
              <p className="services-copy">
                Implementamos un modelo integral con operación, control y soporte continuo.
              </p>
            </div>

            <div className="services-grid" aria-label="Listado de servicios">
              {serviceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="service-item">
                    <span className="service-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="services-cta">
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
          <h2 id="testimonios-title">Testimonios</h2>
          <div className="testimonials-desktop" aria-label="Testimonios institucionales">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p className="testimonial-quote">“{item.quote}”</p>
                <div className="rating" aria-label="Calificación de 5 estrellas">
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </div>
                <cite>{item.author}</cite>
              </blockquote>
            ))}
          </div>

          <div className="testimonials-mobile">
            <TestimonialsCarousel items={testimonials} />
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
