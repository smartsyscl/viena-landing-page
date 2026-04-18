"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import type { Category, Product, NutritionInfo } from "@/lib/products";

/* ── Mapeo de campos para la tabla nutricional ─────────────── */
const nutritionLabels: { key: keyof NutritionInfo; label: string; unit: string }[] = [
  { key: "calorias", label: "Calorías", unit: "kcal" },
  { key: "proteinas", label: "Proteínas", unit: "g" },
  { key: "grasasTotales", label: "Grasas totales", unit: "g" },
  { key: "grasasSaturadas", label: "Grasas saturadas", unit: "g" },
  { key: "carbohidratos", label: "Carbohidratos", unit: "g" },
  { key: "azucares", label: "Azúcares", unit: "g" },
  { key: "fibra", label: "Fibra dietética", unit: "g" },
  { key: "sodio", label: "Sodio", unit: "mg" },
];

/* ── Normaliza texto para búsqueda (sin tildes, minúsculas) ── */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/* ── Componente principal ──────────────────────────────────── */
export default function NutritionBrowser({ categories }: { categories: Category[] }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.key ?? "");
  const [search, setSearch] = useState("");
  const [openProduct, setOpenProduct] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.key === activeTab);

  const filtered = useMemo(() => {
    if (!activeCategory) return [];
    if (!search.trim()) return activeCategory.products;
    const q = normalize(search);
    return activeCategory.products.filter(
      (p) => normalize(p.nombre).includes(q) || normalize(p.descripcion).includes(q)
    );
  }, [activeCategory, search]);

  function toggleProduct(id: string) {
    setOpenProduct((prev) => (prev === id ? null : id));
  }

  return (
    <div className="nb">
      {/* Buscador */}
      <div className="nb-search-wrap">
        <Search className="nb-search-icon" aria-hidden="true" />
        <input
          type="search"
          className="nb-search"
          placeholder="Buscar producto por nombre…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpenProduct(null);
          }}
          aria-label="Buscar producto"
        />
      </div>

      {/* Tabs */}
      <div className="nb-tabs" role="tablist" aria-label="Categorías de productos">
        {categories.map((cat) => (
          <button
            key={cat.key}
            role="tab"
            aria-selected={activeTab === cat.key}
            className={`nb-tab${activeTab === cat.key ? " nb-tab--active" : ""}`}
            onClick={() => {
              setActiveTab(cat.key);
              setSearch("");
              setOpenProduct(null);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Lista de productos */}
      <div className="nb-list" role="tabpanel" aria-label={activeCategory?.label}>
        {filtered.length === 0 && (
          <p className="nb-empty">No se encontraron productos para esta búsqueda.</p>
        )}

        {filtered.map((product) => (
          <ProductAccordion
            key={product.id}
            product={product}
            isOpen={openProduct === product.id}
            onToggle={() => toggleProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Accordion de producto ─────────────────────────────────── */
function ProductAccordion({
  product,
  isOpen,
  onToggle,
}: {
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`nb-item${isOpen ? " nb-item--open" : ""}`}>
      <button
        className="nb-item-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${product.id}`}
      >
        <div className="nb-item-info">
          <span className="nb-item-name">{product.nombre}</span>
          <span className="nb-item-desc">{product.descripcion}</span>
        </div>
        <ChevronDown className="nb-item-chevron" aria-hidden="true" />
      </button>

      <div
        id={`panel-${product.id}`}
        className="nb-item-panel"
        role="region"
        aria-label={`Tabla nutricional de ${product.nombre}`}
        hidden={!isOpen}
      >
        <table className="nb-table">
          <thead>
            <tr>
              <th scope="col">Nutriente</th>
              <th scope="col">Por porción</th>
            </tr>
          </thead>
          <tbody>
            {nutritionLabels.map((row) => (
              <tr key={row.key}>
                <td>{row.label}</td>
                <td>
                  {product.nutricion[row.key]} {row.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
