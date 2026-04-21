/* ──────────────────────────────────────────────────────────────
   Productos y Tabla Nutricional — Viena & Co.
   Archivo centralizado para gestionar todos los productos.
   Para agregar un producto, simplemente agrega un nuevo objeto
   al array de la categoría correspondiente.
   ────────────────────────────────────────────────────────────── */

export type NutritionInfo = {
  porcion: string;            // descripción de la porción, p.ej. "1 unidad (129 g)"
  calorias: number;           // kcal
  proteinas: number;          // g
  grasasTotales: number;      // g
  grasasSaturadas: number;    // g
  grasasMonoinsaturadas: number; // g
  grasasPoliinsaturadas: number; // g
  grasasTrans: number;        // g
  colesterol: number;         // mg
  carbohidratos: number;      // g
  fibra: number;              // g
  azucares: number;           // g
  sodio: number;              // mg
};

export type Product = {
  id: string;
  nombre: string;
  descripcion: string;
  nutricion: NutritionInfo;
};

export type CategoryKey = "salados" | "colaciones";

export type Category = {
  key: CategoryKey;
  label: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    key: "salados",
    label: "Salados",
    products: [
      {
        id: "sal-001",
        nombre: "Chaparrita Horneada",
        descripcion: "Chaparrita horneada, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (129 g)",
          calorias: 362,
          proteinas: 15.3,
          grasasTotales: 13.5,
          grasasSaturadas: 5.85,
          grasasMonoinsaturadas: 0.12,
          grasasPoliinsaturadas: 5.37,
          grasasTrans: 1.43,
          colesterol: 24.2,
          carbohidratos: 44.2,
          fibra: 0,
          azucares: 1.39,
          sodio: 494,
        },
      },
      {
        id: "sal-002",
        nombre: "Pizza en Pan Pita",
        descripcion: "Pizza en pan pita, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (156 g)",
          calorias: 215,
          proteinas: 11.8,
          grasasTotales: 6.32,
          grasasSaturadas: 1.02,
          grasasMonoinsaturadas: 0.23,
          grasasPoliinsaturadas: 1.59,
          grasasTrans: 0.38,
          colesterol: 24.2,
          carbohidratos: 21.6,
          fibra: 0,
          azucares: 2.61,
          sodio: 412,
        },
      },
      {
        id: "sal-003",
        nombre: "Fajita de Ave",
        descripcion: "Fajita de ave, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (295 g)",
          calorias: 323,
          proteinas: 16.86,
          grasasTotales: 20.06,
          grasasSaturadas: 4.29,
          grasasMonoinsaturadas: 0,
          grasasPoliinsaturadas: 10.9,
          grasasTrans: 3.47,
          colesterol: 47,
          carbohidratos: 22.8,
          fibra: 0,
          azucares: 1.33,
          sodio: 215.8,
        },
      },
      {
        id: "sal-004",
        nombre: "Churrasco Palta",
        descripcion: "Churrasco con palta, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (190 g)",
          calorias: 417,
          proteinas: 20.5,
          grasasTotales: 10.5,
          grasasSaturadas: 2.36,
          grasasMonoinsaturadas: 0,
          grasasPoliinsaturadas: 5.6,
          grasasTrans: 1.53,
          colesterol: 3,
          carbohidratos: 60.5,
          fibra: 0,
          azucares: 0.76,
          sodio: 630,
        },
      },
      {
        id: "sal-005",
        nombre: "Pan de Molde con Huevo",
        descripcion: "Pan de molde con huevo, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (120 g)",
          calorias: 239,
          proteinas: 14.7,
          grasasTotales: 8.9,
          grasasSaturadas: 2.2,
          grasasMonoinsaturadas: 3.3,
          grasasPoliinsaturadas: 1.5,
          grasasTrans: 0,
          colesterol: 238.6,
          carbohidratos: 24.8,
          fibra: 0,
          azucares: 1.9,
          sodio: 312,
        },
      },
      {
        id: "sal-006",
        nombre: "Hamburguesa de Ave",
        descripcion: "Hamburguesa de ave, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (267 g)",
          calorias: 388,
          proteinas: 18.5,
          grasasTotales: 19.6,
          grasasSaturadas: 5.72,
          grasasMonoinsaturadas: 0.12,
          grasasPoliinsaturadas: 5.45,
          grasasTrans: 1.85,
          colesterol: 43.5,
          carbohidratos: 35.9,
          fibra: 0,
          azucares: 4.76,
          sodio: 682,
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
        nombre: "Rollos de Canela",
        descripcion: "Rollos de canela, libres de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (35 g)",
          calorias: 123,
          proteinas: 2.8,
          grasasTotales: 2.5,
          grasasSaturadas: 0.5,
          grasasMonoinsaturadas: 1.12,
          grasasPoliinsaturadas: 0.7,
          grasasTrans: 0,
          colesterol: 0,
          carbohidratos: 21,
          fibra: 0.8,
          azucares: 6.1,
          sodio: 69,
        },
      },
      {
        id: "col-002",
        nombre: "Queque de Naranja",
        descripcion: "Queque de naranja, libre de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (40 g)",
          calorias: 150,
          proteinas: 3.6,
          grasasTotales: 4.2,
          grasasSaturadas: 0.7,
          grasasMonoinsaturadas: 2.2,
          grasasPoliinsaturadas: 1.4,
          grasasTrans: 0,
          colesterol: 0,
          carbohidratos: 17,
          fibra: 1.5,
          azucares: 8.4,
          sodio: 88,
        },
      },
      {
        id: "col-003",
        nombre: "Galletas de Avena y Manzana",
        descripcion: "Galletas de avena y manzana, libres de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (40 g)",
          calorias: 124,
          proteinas: 7.5,
          grasasTotales: 7.7,
          grasasSaturadas: 1.9,
          grasasMonoinsaturadas: 3.3,
          grasasPoliinsaturadas: 1.9,
          grasasTrans: 0,
          colesterol: 0,
          carbohidratos: 7,
          fibra: 0.62,
          azucares: 3.9,
          sodio: 90,
        },
      },
      {
        id: "col-004",
        nombre: "Galletas de Avena, Chía y Linaza",
        descripcion: "Galletas de avena con chía y linaza, libres de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (40 g)",
          calorias: 174,
          proteinas: 7.5,
          grasasTotales: 8.4,
          grasasSaturadas: 2.2,
          grasasMonoinsaturadas: 3.3,
          grasasPoliinsaturadas: 2.9,
          grasasTrans: 0,
          colesterol: 0,
          carbohidratos: 7.5,
          fibra: 1.53,
          azucares: 3.6,
          sodio: 91,
        },
      },
      {
        id: "col-005",
        nombre: "Panqueques Light",
        descripcion: "Panqueques light, libres de sellos. Porción: 1 unidad.",
        nutricion: {
          porcion: "1 unidad (40 g)",
          calorias: 194,
          proteinas: 2.2,
          grasasTotales: 11,
          grasasSaturadas: 5.1,
          grasasMonoinsaturadas: 3.8,
          grasasPoliinsaturadas: 1.3,
          grasasTrans: 0,
          colesterol: 0,
          carbohidratos: 19,
          fibra: 0.9,
          azucares: 7.8,
          sodio: 80,
        },
      },
      {
        id: "col-006",
        nombre: "Ensalada de Frutas",
        descripcion: "Ensalada de frutas frescas, libre de sellos. Porción: 1 porción.",
        nutricion: {
          porcion: "1 porción (290 g)",
          calorias: 167,
          proteinas: 1.8,
          grasasTotales: 0.9,
          grasasSaturadas: 0,
          grasasMonoinsaturadas: 0.1,
          grasasPoliinsaturadas: 0.2,
          grasasTrans: 0,
          colesterol: 0,
          carbohidratos: 32.7,
          fibra: 7.3,
          azucares: 28.3,
          sodio: 6,
        },
      },
    ],
  },
];
