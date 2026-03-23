"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { siteConfig } from "@/lib/site";
import { reportError } from "@/lib/telemetry";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackPageView(url: string) {
  if (!siteConfig.gaId || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", siteConfig.gaId, {
    page_path: url,
    page_location: `${window.location.origin}${url}`,
  });
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      if (event.error instanceof Error) {
        reportError(event.error, { source: "window-error" });
      }
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason instanceof Error ? event.reason : String(event.reason);
      reportError(reason, { source: "unhandled-rejection" });
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  useReportWebVitals((metric) => {
    if (!siteConfig.gaId || typeof window.gtag !== "function") {
      return;
    }

    const value = metric.name === "CLS" ? metric.value * 1000 : metric.value;

    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(value),
      non_interaction: true,
      metric_id: metric.id,
      metric_value: value,
      metric_delta: metric.delta,
    });
  });

  if (!siteConfig.gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${siteConfig.gaId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}