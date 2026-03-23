import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #eef7ff 0%, #fffaf0 55%, #f7f7f7 100%)",
          color: "#101010",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          {siteConfig.companyName}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 880 }}>
          <div style={{ fontSize: 72, lineHeight: 1.04, fontWeight: 800 }}>
            Concesión moderna para cafeterías escolares en Chile.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#4b5563" }}>
            Operación profesional, compra inteligente y trazabilidad para colegios y sostenedores.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {[
            "Operación profesional",
            "Compra inteligente",
            "Trazabilidad y control",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(16,16,16,0.08)",
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}