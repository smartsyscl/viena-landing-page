"use client";

import { useEffect } from "react";
import { reportError } from "@/lib/telemetry";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    reportError(error, { source: "app-error" });
  }, [error]);

  return (
    <section className="section surface" aria-labelledby="error-title">
      <div className="container stack-sm error-shell">
        <p className="error-kicker">Error inesperado</p>
        <h1 id="error-title">No pudimos cargar esta parte del sitio.</h1>
        <p>
          El problema ya quedó registrado. Puedes volver a intentarlo o continuar desde el inicio.
        </p>
        <div className="error-actions">
          <button type="button" className="cta" onClick={reset}>
            Reintentar
          </button>
          <a className="cta cta-secondary" href="/#inicio">
            Ir al inicio
          </a>
        </div>
      </div>
    </section>
  );
}