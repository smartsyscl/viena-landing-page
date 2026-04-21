import type { Metadata } from "next";
import {
  Star,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  QrCode,
  ShieldAlert,
  HeartPulse,
  WalletCards,
} from "lucide-react";
import ServiceGallery, { GalleryImage } from "../components/ui/ServiceGallery";
import TestimonialsCarousel from "../components/ui/TestimonialsCarousel";
import LunchGuide from "@/components/ui/LunchGuide";
import PartnerLogosCarousel from "../components/ui/PartnerLogosCarousel";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Concesión de Casino y Cafetería Escolar | Viena & Co.",
  description:
    "Concesión integral de cafetería y casino escolar para colegios: operación profesional, sistema inteligente de compra y trazabilidad para sostenedores.",
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

export default function HomePage() {
  const galleryImages: GalleryImage[] = [
    { src: "/gallery/1__cafeteria.jpeg",   alt: "Interior de cafetería escolar en operación",            width: 1200, height: 800 },
    { src: "/gallery/2__catering.jpeg",    alt: "Servicio de catering para evento institucional",         width: 1200, height: 800 },
    { src: "/gallery/2-2_catering.jpeg",   alt: "Preparación de bandejas en servicio de catering",        width: 1200, height: 800 },
    { src: "/gallery/2_3__catering-c.jpeg",alt: "Mesa de coffee break para reunión corporativa",          width: 1200, height: 800 },
  ];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
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
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    description:
      "Operación profesional de cafetería escolar, sistema inteligente de compra y trazabilidad para colegios y sostenedores.",
  };

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

  const onboardingItems = [
    {
      id: "01",
      title: "Colegio Bajo Molle",
      description: "Guía rápida para activar tu cuenta y comenzar a pedir.",
      pdfFile: "Colegio Bajo Molle_ONBOARDING.pdf",
      email: "psoto@viena-co.cl",
      phoneDisplay: "+56 9 6107 5711",
      phoneRaw: "+56961075711",
    },
    {
      id: "02",
      title: "Colegio Lirima",
      description: "Activación simple para apoderados y alumnos.",
      pdfFile: "Colegio Lirima _ONBOARDING.pdf",
      email: "contacto@viena-co.cl",
      phoneDisplay: "+56 9 4589 6839",
      phoneRaw: "+56945896839",
    },
    {
      id: "03",
      title: "Colegio Hispano Británico",
      description: "Onboarding oficial para empezar en pocos minutos.",
      pdfFile: "Colegio Hispano Británico_ONBOARDING.pdf",
      email: "Lmespinoza@viena-co.cl",
      phoneDisplay: "+56 9 6107 5706",
      phoneRaw: "+56961075706",
    },
  ];

  const generalSupportDocs = [
    {
      title: "Restricciones",
      description: "Lineamientos generales de uso y consideraciones operativas de OrderEat.",
      pdfFile: "od _RESTRICTIONS.pdf",
      icon: ShieldAlert,
    },
    {
      title: "Alergias alimentarias",
      description: "Recomendaciones para registrar y gestionar alergias de forma segura.",
      pdfFile: "od_ALLERGIES.pdf",
      icon: HeartPulse,
    },
    {
      title: "Cómo cargar saldo",
      description: "Guía rápida para agregar saldo y habilitar compras en la app.",
      pdfFile: "od_BALANCE_CHARGE.pdf",
      icon: WalletCards,
    },
  ];

  const lunchGuideSections = [
    {
      title: "Como realizar un pedido",
      iconKey: "pedido",
      points: [
        "Ingresar a la aplicacion de pedidos.",
        "Seleccionar el dia y menu disponible.",
        "Elegir la opcion de almuerzo deseada.",
        "Confirmar el pedido.",
        "El monto se descuenta automaticamente desde el saldo disponible.",
      ],
      note: "Los pedidos deben realizarse con anticipacion, dentro de los horarios establecidos en la app.",
    },
    {
      title: "Metodos de pago",
      iconKey: "pago",
      points: [
        "Recarga de saldo directamente en la aplicacion.",
        "Descuento automatico del valor del almuerzo al confirmar el pedido.",
      ],
      note: "Permite mayor rapidez y evita el uso de efectivo.",
    },
    {
      title: "Entrega y retiro de almuerzos",
      iconKey: "entrega",
      points: [
        "El retiro se organiza en dos filas diferenciadas segun la opcion de menu.",
        "En la fila, el alumno puede indicar su nombre o utilizar pulsera NFC.",
        "Cada almuerzo incluye entrada (salad bar), pan, plato de fondo, jugo y postre.",
      ],
      note: "Mejora la rapidez de atencion, el orden y la autonomia alimentaria de los estudiantes.",
    },
    {
      title: "Uso de pulsera NFC (opcional)",
      iconKey: "nfc",
      points: [
        "Al acercarla al lector, el sistema identifica automaticamente al alumno.",
        "Reduce errores de identificacion y tiempos de espera.",
        "Es personal e intransferible.",
        "En caso de perdida, se puede bloquear y reemplazar.",
      ],
      note: "Su uso es preferente, pero no obligatorio.",
    },
    {
      title: "Consideraciones importantes",
      iconKey: "alertas",
      points: [
        "Ante inconvenientes, se realiza regularizacion a traves de la aplicacion.",
        "Si un pedido no se cancela dentro del horario de cierre, se considera preparado.",
        "Si un alumno no realizo pedido, se entrega alternativa disponible y luego se coordina la regularizacion con el apoderado.",
        "Los menus pueden adaptarse segun preferencias del estudiante, dentro de lo posible.",
      ],
    },
    {
      title: "Salad bar",
      iconKey: "salad",
      points: [
        "Platos de entrada previamente preparados con variedad de ensaladas.",
        "Se fomenta la autonomia alimentaria al permitir elegir vegetales de preferencia.",
      ],
    },
    {
      title: "Recomendaciones",
      iconKey: "recomendaciones",
      points: [
        "Realizar pedidos con anticipacion para asegurar disponibilidad.",
        "Fomentar el uso de pulsera NFC para mayor rapidez.",
        "Revisar periodicamente la app para actualizaciones de menu.",
      ],
    },
    {
      title: "Soporte",
      iconKey: "soporte",
      points: [
        "WhatsApp del casino o kiosco.",
        "Atencion directa en el establecimiento.",
      ],
    },
    {
      title: "Compra presencial de almuerzos",
      iconKey: "presencial",
      points: [
        "Tambien es posible adquirir almuerzos de forma presencial en el casino.",
        "Medios de pago disponibles: efectivo, tarjeta, transferencia y pago mediante aplicacion.",
      ],
      note: "Esta opcion esta sujeta a disponibilidad de stock del dia. Para asegurar almuerzo, se recomienda pedir con anticipacion en la app.",
    },
  ];

  const partnerSchools = [
    { name: "Colegio Bajo Molle", logo: "/logos/1.png" },
    { name: "Colegio aliado", logo: "/logos/2.png" },
    { name: "Colegio Lirima", logo: "/logos/3.png" },
    { name: "Colegio Hispano Britanico", logo: "/logos/4.png" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <section className="hero section" id="inicio" aria-labelledby="hero-title" data-animate>
        <div className="container stack-md">
          <h1 id="hero-title">
            Servicio de alimentación escolar saludable para colegios en Iquique.
          </h1>
          <p className="lead">
            Ofrecemos soluciones de alimentación escolar confiables y profesionales, brindando a alumnos, apoderados y establecimientos una experiencia segura, ordenada y de calidad.
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
              En Viena & Co. somos una concesionaria local de Iquique dedicada a la gestión de cafeterías,
              kioscos y casinos escolares, además de servicios de catering y coffee breaks para eventos institucionales.
            </p>
            <p className="about-body">
              Entregamos un servicio cercano, ordenado y profesional, enfocado en la calidad de los productos,
              la correcta operación diaria y una atención eficiente para toda la comunidad educativa.
            </p>
          </div>
        </div>
      </section>

      <section className="section partners-section" id="colegios" aria-labelledby="colegios-title" data-animate>
        <div className="container partners-shell">
          <p className="partners-kicker">Presencia actual</p>
          <h2 id="colegios-title" className="partners-title">Colegios con los que trabajamos</h2>
          <PartnerLogosCarousel items={partnerSchools} />
        </div>
      </section>

      {/* OrderEat + Onboarding */}
      <section className="section challenge-solution" id="solucion" aria-labelledby="solucion-title" data-animate>
        <div className="container stack-sm">
          <h2 id="solucion-title">Cómo acceder a OrderEat</h2>
          <div className="challenge-solution-shell">
            <article className="challenge-card challenge-card-solution ordereat-experience">
              <header className="ordereat-intro">
                <p className="challenge-kicker">Acceso digital por colegio</p>
                <h3>Activa tu cuenta en menos de 5 minutos</h3>
                <p>
                  Encuentra tu colegio, abre el onboarding y usa los recursos generales para resolver
                  restricciones, alergias y carga de saldo en un solo lugar.
                </p>
                <div className="ordereat-steps" aria-label="Pasos para comenzar en OrderEat">
                  <span>Descarga la app</span>
                  <span>Ingresa tu código</span>
                  <span>Carga saldo y compra</span>
                </div>
              </header>

              <div className="ordereat-layout">
                <div className="onboarding-collection" aria-label="Onboarding por colegio">
                  {onboardingItems.map((item) => (
                    <article key={item.id} className="school-card">
                      <div className="school-head">
                        <div className="school-title-wrap">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                        <span className="school-badge">
                          <QrCode aria-hidden="true" />
                          QR y código único
                        </span>
                      </div>

                      <div className="school-actions">
                        <a
                          className="school-primary-link"
                          href={`/activos/${encodeURIComponent(item.pdfFile)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir PDF de onboarding para ${item.title}`}
                        >
                          <FileText aria-hidden="true" />
                          Abrir onboarding
                          <ExternalLink aria-hidden="true" />
                        </a>

                        <div className="school-contact-grid">
                          <a className="school-contact-link" href={`mailto:${item.email}`}>
                            <Mail aria-hidden="true" />
                            {item.email}
                          </a>
                          <a className="school-contact-link" href={`tel:${item.phoneRaw}`}>
                            <Phone aria-hidden="true" />
                            {item.phoneDisplay}
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <aside className="resource-panel" aria-label="Apoyo general de OrderEat">
                  <div className="resource-panel-head">
                    <p className="resource-kicker">Apoyo General</p>
                    <h4>Recursos clave para uso seguro y continuo</h4>
                    <p>Documentos transversales para toda la comunidad escolar.</p>
                  </div>

                  <div className="resource-list">
                    {generalSupportDocs.map((doc) => {
                      const Icon = doc.icon;
                      return (
                      <article key={doc.title} className="resource-card">
                        <span className="resource-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <div className="resource-content">
                          <h5>{doc.title}</h5>
                          <p>{doc.description}</p>
                          <a
                            className="resource-link"
                            href={`/activos/${encodeURIComponent(doc.pdfFile)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Abrir PDF de ${doc.title}`}
                          >
                            Ver documento
                            <ExternalLink aria-hidden="true" />
                          </a>
                        </div>
                      </article>
                      );
                    })}
                  </div>
                </aside>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section services-showcase" id="servicios" aria-labelledby="servicios-title" data-animate>
        <LunchGuide sections={lunchGuideSections} whatsappUrl={whatsappUrl} />
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
