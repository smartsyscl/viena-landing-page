"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import {
  ChevronDown,
  Search,
  Printer,
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Clock3,
  Radio,
  AlertTriangle,
  Salad,
  Lightbulb,
  LifeBuoy,
  Store,
} from "lucide-react";

type GuideSection = {
  title: string;
  iconKey?: string;
  points: string[];
  note?: string;
};

type LunchGuideProps = {
  sections: GuideSection[];
  whatsappUrl: string;
};

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const iconByKey = {
  pedido: ShoppingCart,
  pago: CreditCard,
  entrega: Clock3,
  nfc: Radio,
  alertas: AlertTriangle,
  salad: Salad,
  recomendaciones: Lightbulb,
  soporte: LifeBuoy,
  presencial: Store,
} as const;

export default function LunchGuide({ sections, whatsappUrl }: LunchGuideProps) {
  const indexedSections = useMemo(
    () => sections.map((section, idx) => ({ ...section, id: `${idx + 1}-${normalize(section.title)}`, index: idx + 1 })),
    [sections],
  );

  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(indexedSections[0]?.id ?? null);

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return indexedSections;

    return indexedSections.filter((section) => {
      const haystack = [section.title, ...section.points, section.note ?? ""].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [indexedSections, query]);

  const activeOpenId =
    openId && filteredSections.some((section) => section.id === openId)
      ? openId
      : (filteredSections[0]?.id ?? null);

  const openSection = (id: string) => {
    setOpenId((current) => {
      const normalizedCurrent =
        current && filteredSections.some((section) => section.id === current)
          ? current
          : (filteredSections[0]?.id ?? null);
      return normalizedCurrent === id ? null : id;
    });
  };

  const highlightText = (text: string): ReactNode => {
    const term = query.trim();
    if (!term) return text;

    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const matcher = new RegExp(`(${escaped})`, "gi");
    const parts = text.split(matcher);

    return parts.map((part, idx) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={`${part}-${idx}`} className="guide-highlight">
          {part}
        </mark>
      ) : (
        <span key={`${part}-${idx}`}>{part}</span>
      ),
    );
  };

  const jumpToSection = (id: string) => {
    setOpenId(id);
    const node = document.getElementById(`guide-${id}`);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const visualHighlights = [
    {
      title: "Pide en la app",
      description: "Selecciona dia, menu y confirma en pocos pasos.",
      Icon: ShoppingCart,
    },
    {
      title: "Paga con saldo",
      description: "El descuento se realiza automaticamente al confirmar.",
      Icon: CreditCard,
    },
    {
      title: "Retiro mas rapido",
      description: "Usa nombre o pulsera NFC para agilizar la entrega.",
      Icon: Radio,
    },
  ];

  return (
    <div className="container lunch-guide-shell">
      <header className="lunch-guide-header">
        <p className="services-kicker">Instructivo Sistema de Pedidos de Almuerzos</p>
        <h2 id="servicios-title" className="lunch-guide-title">
          Guia de uso para estudiantes y apoderados
        </h2>
        <p className="lunch-guide-lead">
          Viena &amp; Co. implementa este sistema digital para mejorar la organizacion, tiempos de entrega y experiencia de retiro.
        </p>
      </header>

      <section className="guide-visual-strip" aria-label="Resumen visual del sistema de pedidos">
        {visualHighlights.map(({ title, description, Icon }, idx) => (
          <article key={title} className={`guide-visual-card guide-visual-tone-${idx + 1}`}>
            <span className="guide-visual-icon" aria-hidden="true">
              <Icon />
            </span>
            <div className="guide-visual-copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="lunch-guide-content">
        <section className="lunch-guide-main" aria-label="Instructivo de pedidos de almuerzos">
          <div className="guide-toolbar">
            <label className="guide-search" htmlFor="guide-search-input">
              <Search aria-hidden="true" />
              <input
                id="guide-search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar: NFC, saldo, alergias, pedidos..."
                aria-label="Buscar en el instructivo"
              />
            </label>
            <p className="guide-count">{filteredSections.length} secciones visibles</p>
          </div>

          <div className="lunch-guide-accordion">
            {filteredSections.map((section) => {
              const isOpen = activeOpenId === section.id;
              const Icon = iconByKey[section.iconKey as keyof typeof iconByKey] ?? FileTextFallback;
              const toneClass = section.iconKey ? `guide-tone-${section.iconKey}` : "guide-tone-default";
              return (
                <article
                  key={section.id}
                  id={`guide-${section.id}`}
                  className={`guide-item ${toneClass}${isOpen ? " is-open" : ""}`}
                  style={{ "--guide-delay": `${section.index * 0.05}s` } as CSSProperties}
                >
                  <button
                    type="button"
                    className="guide-trigger"
                    onClick={() => openSection(section.id)}
                    aria-expanded={isOpen}
                    aria-controls={`guide-panel-${section.id}`}
                  >
                    <span className="guide-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="guide-index">{section.index}</span>
                    <span className="guide-title">{highlightText(section.title)}</span>
                    <ChevronDown className="guide-chevron" aria-hidden="true" />
                  </button>

                  <div
                    id={`guide-panel-${section.id}`}
                    className={`guide-body-shell${isOpen ? " is-open" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="guide-body">
                      <ul>
                        {section.points.map((point) => (
                          <li key={point}>{highlightText(point)}</li>
                        ))}
                      </ul>
                      {section.note ? <p className="guide-note">{highlightText(section.note)}</p> : null}
                    </div>
                  </div>
                </article>
              );
            })}
            {filteredSections.length === 0 ? (
              <p className="guide-empty">No encontramos coincidencias. Prueba con otra palabra clave.</p>
            ) : null}
          </div>
        </section>

        <aside className="lunch-guide-support" aria-label="Canales de soporte y acciones rápidas">
          <h3>Soporte rapido</h3>
          <p>Ante dudas o inconvenientes, comunicate por WhatsApp o acude a atencion directa en el establecimiento.</p>

          <div className="guide-quick-links">
            {indexedSections.slice(0, 5).map((section) => (
              <button key={section.id} type="button" className="guide-chip" onClick={() => jumpToSection(section.id)}>
                {highlightText(section.title)}
              </button>
            ))}
          </div>

          <a className="cta whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            Contactar por WhatsApp
          </a>

          <button type="button" className="guide-print" onClick={() => window.print()}>
            <Printer aria-hidden="true" />
            Imprimir instructivo
          </button>

          <a className="guide-secondary-link" href="#contacto">
            Ver canal de contacto institucional
          </a>
        </aside>
      </div>
    </div>
  );
}

function FileTextFallback() {
  return <span className="guide-fallback-dot" aria-hidden="true" />;
}
