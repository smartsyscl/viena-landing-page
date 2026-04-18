import type { Metadata } from "next";
import NutritionBrowser from "@/components/ui/NutritionBrowser";
import { categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Información Nutricional",
  description:
    "Consulta la tabla nutricional de todos los productos de Viena & Co.: almuerzos, colaciones, casino y comida rápida.",
  alternates: {
    canonical: "/nutricion",
  },
};

export default function NutricionPage() {
  return (
    <section className="section nutricion-hero" aria-labelledby="nutricion-title">
      <div className="container nutricion-container">
        <header className="nutricion-header">
          <h1 id="nutricion-title">Información Nutricional</h1>
          <p className="nutricion-subtitle">
            Consulta la tabla nutricional de nuestros productos. Selecciona una categoría y busca por nombre.
          </p>
        </header>

        <NutritionBrowser categories={categories} />
      </div>
    </section>
  );
}
