/* ──────────────────────────────────────────────────────────────
   Productos y Tabla Nutricional — Viena & Co.
   Archivo centralizado para gestionar todos los productos.
   Para agregar un producto, simplemente agrega un nuevo objeto
   al array de la categoría correspondiente.
   ────────────────────────────────────────────────────────────── */

export type NutritionInfo = {
  calorias: number;       // kcal
  proteinas: number;      // g
  grasasTotales: number;  // g
  grasasSaturadas: number;// g
  carbohidratos: number;  // g
  azucares: number;       // g
  fibra: number;          // g
  sodio: number;          // mg
};

export type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  nutricion: NutritionInfo;
};

export type CategoryKey = "casino" | "almuerzos" | "colaciones" | "comida-rapida";

export type Category = {
  key: CategoryKey;
  label: string;
  products: Product[];
};

/* ── Datos de ejemplo (reemplazar con productos reales) ────── */

export const categories: Category[] = [
  {
    key: "casino",
    label: "Casino",
    products: [
      {
        id: "cas-001",
        nombre: "Sandwich Mechada",
        descripcion: "Pan amasado con carne mechada, tomate y mayonesa casera.",
        nutricion: {
          calorias: 480,
          proteinas: 28,
          grasasTotales: 18,
          grasasSaturadas: 6,
          carbohidratos: 48,
          azucares: 5,
          fibra: 3,
          sodio: 620,
        },
      },
      {
        id: "cas-002",
        nombre: "Empanada de Pino",
        descripcion: "Empanada horneada rellena de pino con carne, cebolla, huevo y aceituna.",
        nutricion: {
          calorias: 320,
          proteinas: 14,
          grasasTotales: 15,
          grasasSaturadas: 5,
          carbohidratos: 34,
          azucares: 3,
          fibra: 2,
          sodio: 480,
        },
      },
      {
        id: "cas-003",
        nombre: "Jugo Natural de Fruta",
        descripcion: "Jugo de temporada preparado al momento, sin azúcar añadida.",
        nutricion: {
          calorias: 90,
          proteinas: 1,
          grasasTotales: 0,
          grasasSaturadas: 0,
          carbohidratos: 22,
          azucares: 18,
          fibra: 1,
          sodio: 5,
        },
      },
    ],
  },
  {
    key: "almuerzos",
    label: "Almuerzos",
    products: [
      {
        id: "alm-001",
        nombre: "Pollo Asado con Arroz y Ensalada",
        descripcion: "Trutro de pollo al horno con arroz graneado y ensalada fresca del día.",
        nutricion: {
          calorias: 560,
          proteinas: 38,
          grasasTotales: 16,
          grasasSaturadas: 4,
          carbohidratos: 62,
          azucares: 4,
          fibra: 5,
          sodio: 580,
        },
      },
      {
        id: "alm-002",
        nombre: "Pastel de Choclo",
        descripcion: "Preparación tradicional con base de pino y cubierta de choclo molido.",
        nutricion: {
          calorias: 490,
          proteinas: 22,
          grasasTotales: 20,
          grasasSaturadas: 7,
          carbohidratos: 52,
          azucares: 8,
          fibra: 4,
          sodio: 530,
        },
      },
      {
        id: "alm-003",
        nombre: "Legumbres con Arroz",
        descripcion: "Guiso de lentejas o porotos con arroz, acompañado de ensalada.",
        nutricion: {
          calorias: 410,
          proteinas: 20,
          grasasTotales: 8,
          grasasSaturadas: 2,
          carbohidratos: 64,
          azucares: 6,
          fibra: 12,
          sodio: 450,
        },
      },
    ],
  },
  {
    key: "colaciones",
    label: "Colaciones",
    products: [
      {
        id: "col-001",
        nombre: "Barra de Cereal",
        descripcion: "Barra de avena y frutos secos, sin colorantes artificiales.",
        nutricion: {
          calorias: 140,
          proteinas: 3,
          grasasTotales: 5,
          grasasSaturadas: 1,
          carbohidratos: 22,
          azucares: 8,
          fibra: 2,
          sodio: 65,
        },
      },
      {
        id: "col-002",
        nombre: "Yogurt con Granola",
        descripcion: "Yogurt natural semidescremado con granola artesanal y miel.",
        nutricion: {
          calorias: 195,
          proteinas: 8,
          grasasTotales: 6,
          grasasSaturadas: 2,
          carbohidratos: 28,
          azucares: 16,
          fibra: 2,
          sodio: 85,
        },
      },
      {
        id: "col-003",
        nombre: "Fruta Fresca de Temporada",
        descripcion: "Porción individual de fruta fresca según disponibilidad.",
        nutricion: {
          calorias: 80,
          proteinas: 1,
          grasasTotales: 0,
          grasasSaturadas: 0,
          carbohidratos: 20,
          azucares: 15,
          fibra: 3,
          sodio: 2,
        },
      },
    ],
  },
  {
    key: "comida-rapida",
    label: "Comida Rápida",
    products: [
      {
        id: "rap-001",
        nombre: "Completo Italiano",
        descripcion: "Vienesa en pan de hot dog con tomate, palta y mayonesa.",
        nutricion: {
          calorias: 420,
          proteinas: 14,
          grasasTotales: 22,
          grasasSaturadas: 6,
          carbohidratos: 42,
          azucares: 5,
          fibra: 3,
          sodio: 780,
        },
      },
      {
        id: "rap-002",
        nombre: "Papas Fritas Porción",
        descripcion: "Porción individual de papas fritas crocantes.",
        nutricion: {
          calorias: 310,
          proteinas: 4,
          grasasTotales: 16,
          grasasSaturadas: 3,
          carbohidratos: 38,
          azucares: 1,
          fibra: 3,
          sodio: 340,
        },
      },
      {
        id: "rap-003",
        nombre: "Hamburguesa Clásica",
        descripcion: "Hamburguesa de vacuno con lechuga, tomate y salsa especial.",
        nutricion: {
          calorias: 510,
          proteinas: 26,
          grasasTotales: 24,
          grasasSaturadas: 9,
          carbohidratos: 46,
          azucares: 7,
          fibra: 2,
          sodio: 720,
        },
      },
    ],
  },
];
