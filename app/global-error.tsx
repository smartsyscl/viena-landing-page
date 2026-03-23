"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportError } from "@/lib/telemetry";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    reportError(error, { source: "global-error" });
  }, [error]);

  return (
    <html lang="es-CL">
      <body>
        <section className="section surface" aria-labelledby="global-error-title">
          <div className="container stack-sm error-shell">
            <p className="error-kicker">Fallo global</p>
            <h1 id="global-error-title">Ocurrió un problema al cargar el sitio.</h1>
            <p>
              Puedes reintentar la carga. Si el problema persiste, conviene revisar el despliegue o el servicio de hosting.
            </p>
            <div className="error-actions">
              <button type="button" className="cta" onClick={reset}>
                Reintentar
              </button>
              <Link className="cta cta-secondary" href="/">
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}