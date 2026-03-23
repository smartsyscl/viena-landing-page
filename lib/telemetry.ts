type ErrorContext = {
  source: "app-error" | "global-error" | "window-error" | "unhandled-rejection";
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportError(error: Error | string, context: ErrorContext) {
  const message = typeof error === "string" ? error : error.message;

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "exception", {
      description: `${context.source}: ${message}`,
      fatal: false,
    });
  }

  if (process.env.NODE_ENV !== "production") {
    console.error(`[${context.source}]`, error);
  }
}