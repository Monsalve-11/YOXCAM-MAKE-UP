// components/ProductGridAll.tsx
import React, { useMemo, useState } from "react";
import Background from "./background";

type Category =
  | "Labios"
  | "Ojos"
  | "Rostro"
  | "Sombras"
  | "Brochas"
  | "Accesorios"
  | "Cuidado Facial";
type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  imageUrl?: string;
  badge?: string;
  note?: string;
};

const products: Product[] = [
  // ===== LABIOS =====
  {
    id: "fat-oil",
    name: "Fat Oil",
    price: 8000,
    category: "Labios",
    imageUrl: "images/labios/fat-oil.jpg",
  },
  {
    id: "lip-oil-purpure",
    name: "Lip Oil PURPURE",
    price: 16500,
    category: "Labios",
    imageUrl: "images/labios/Lip-oil-purpure.jpg",
  },
  {
    id: "lip-tint",
    name: "Lip Tint",
    price: 7000,
    category: "Labios",
    imageUrl: "images/labios/lip-tint.jpg",
  },
  {
    id: "mascara-reparadora-labios",
    name: "Máscara Reparadora de Labios",
    price: 12000,
    category: "Labios",
    imageUrl: "images/labios/mascara-reparadora-labios.jpg",
  },
  {
    id: "butter-lip-balm-purpure",
    name: "Butter Lip Balm PURPURE",
    price: 17000,
    category: "Labios",
    imageUrl: "images/labios/Butter-lip-balm-purpure.jpg",
  },
  {
    id: "delineador-labios-trendy",
    name: "Delineador de Labios Trendy",
    price: 10000,
    category: "Labios",
    imageUrl: "images/labios/Delineador-de-labios-trendy.jpg",
  },
  {
    id: "lip-balm-love",
    name: "Lip Balm Love",
    price: 7000,
    category: "Labios",
    imageUrl: "images/labios/lip-balm-love.jpg",
  },
  {
    id: "tinta-cherry",
    name: "Tinta Cherry",
    price: 6700,
    category: "Labios",
    imageUrl: "images/labios/tinta-cherry.jpg",
  },
  {
    id: "bloom-lip-bloomshell",
    name: "Bloom Lip Bloomshell",
    price: 17500,
    category: "Labios",
    imageUrl: "images/labios/BLOOM-LIP-DE-BLOOMSHELL.jpg",
  },
  {
    id: "click-tint-bloomshell",
    name: "Click Tint Bloomshell",
    price: 18900,
    category: "Labios",
    imageUrl: "images/labios/CLINK-TINT-BLOOMSHELL.jpg",
  },
  {
    id: "delineador-labios-bloomshell",
    name: "Delineador de Labios Bloomshell",
    price: 12000,
    category: "Labios",
    imageUrl: "images/labios/delineador-labios-bloomshell.jpg",
  },
  {
    id: "lip-gloss-anik",
    name: "Lip Gloss ANIK",
    price: 21000,
    category: "Labios",
    imageUrl: "images/labios/LIP-GLOSS-ANIKA.jpg",
  },
  {
    id: "balsamo-hidratante-fresa",
    name: "Bálsamo Hidratante de Fresa",
    price: 5000,
    category: "Labios",
    imageUrl: "images/labios/balsamo-hidratante-fresa.jpg",
  },
  {
    id: "tinta-labios-kuromi",
    name: "Tinta de Labios Kuromi",
    price: 6000,
    category: "Labios",
    imageUrl: "images/labios/Tinta-de-labios-kuromi.jpg",
  },
  {
    id: "color-bloom-glow",
    name: "Color Bloom Glow Bloomshell",
    price: 18000,
    category: "Labios",
    imageUrl: "images/labios/color-bloom-glow.jpg",
  },
  {
    id: "balsamo-bioaqua",
    name: "balsamo bioaqua",
    price: 8000,
    category: "Labios",
    imageUrl: "images/labios/balsamo bioaqua.jpg",
  },
  {
    id: "lit-tint-alissha",
    name: "Lit Tint Alissha",
    price: 9500,
    category: "Labios",
    imageUrl: "images/labios/lit-tint-alissha.jpg",
  },
  {
    id: "tinta-paleta",
    name: "Tinta Paleta",
    price: 5000,
    category: "Labios",
    imageUrl: "images/labios/Tinta-paleta.jpg",
  },

  // ===== OJOS =====
  {
    id: "set-cejas-lula",
    name: "Set de Cejas LULA",
    price: 10000,
    category: "Ojos",
    imageUrl: "images/ojos/Set-de-cejas-lula.jpg",
  },
  {
    id: "pestanina-prosa",
    name: "Pestañina PROSA Negra",
    price: 20000,
    category: "Ojos",
    imageUrl: "images/ojos/Pestañina-prosa.jpg",
  },
  {
    id: "set-pestanas-alma",
    name: "Set x3 de Pestañas Alma Beauty",
    price: 15000,
    category: "Ojos",
    imageUrl: "images/ojos/Set-X3-de-pestañas-alma-Beauty.jpg",
  },
  {
    id: "lapiz-ceja-doble",
    name: "Lápiz de Ceja Doble",
    price: 12500,
    category: "Ojos",
    imageUrl: "images/ojos/Lapiz-de-cejas-doble.jpg",
  },
  {
    id: "pestanina-transparente-fruit",
    name: "Pestañina Transparente Fruit",
    price: 6500,
    category: "Ojos",
    imageUrl: "images/ojos/Pestañina-transparente-fruit.jpg",
  },
  {
    id: "jabon-cejas-kuromi-g33",
    name: "Jabón de Cejas Kuromi G33",
    price: 6000,
    category: "Ojos",
    imageUrl: "images/ojos/jabon-cejas-kuromi-g33.jpg",
  },
  {
    id: "gel-cejas-g02",
    name: "Gel de Cejas G02",
    price: 28000,
    category: "Ojos",
    imageUrl: "images/ojos/Gel-de-cejas-got2.jpg",
  },
  {
    id: "delineador-plumon-kiss",
    name: "Delineador Plumón KISS",
    price: 10000,
    category: "Ojos",
    imageUrl: "images/ojos/Delineador-plumon-kiss.jpg",
  },
  {
    id: "set-cejas-alissha",
    name: "Set de Cejas Alissha",
    price: 16500,
    category: "Ojos",
    imageUrl: "images/ojos/Set-de-cejas-alissha.jpg",
  },
  {
    id: "tratamiento-cejas-pestanas-bioaqua",
    name: "Tratamiento de Cejas y Pestañas Bioaqua",
    price: 8500,
    category: "Ojos",
    imageUrl: "images/ojos/Tratamiento-de-cejas-pestañas-BIOAQUA.jpg",
  },
  {
    id: "gel-cejas-melu",
    name: "Gel de Cejas MELU",
    price: 19800,
    category: "Ojos",
    imageUrl: "images/ojos/Gel-de-cejas-Melu.jpg",
  },
  {
    id: "pestanina-dolce-bella",
    name: "Pestañina Dolce Bella",
    price: 17300,
    category: "Ojos",
    imageUrl: "images/ojos/Pestañina-dolce-bella.jpg",
  },
  {
    id: "lapiz-ojos-montoc",
    name: "Lápiz de Ojos MONTOC",
    price: 15500,
    category: "Ojos",
    imageUrl: "images/ojos/Lapiz-de-ojos-montoc.jpg",
  },
  {
    id: "kit-cejas-anik",
    name: "Kit de Cejas ANIK",
    price: 19000,
    category: "Ojos",
    imageUrl: "images/ojos/Kit-de-cejas-Ani-k.jpg",
  },
  {
    id: "delineado-gatito",
    name: "Delineado de Gatito",
    price: 8500,
    category: "Ojos",
    imageUrl: "images/ojos/Delineador-de-gatito.jpg",
  },

  // ===== ROSTRO =====
  {
    id: "polvo-suelto-raquel",
    name: "Polvo Suelto RAQUEL",
    price: 25000,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-suelto-Raquel.jpg",
  },
  {
    id: "polvo-base-girl-boss-2-en-1-purpure",
    name: "Polvo Base Girl Boss 2 en 1 PURPURE",
    price: 24500,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-base-girl-boss-2-en-1-purpure.jpg",
  },
  {
    id: "base-de-maquillaje-purpure",
    name: "Base de maquillaje purpure",
    price: 32000,
    category: "Rostro",
    imageUrl: "images/rostro/base-de-maquillaje-purpure.jpg",
  },
  {
    id: "Iluminador",
    name: "Iluminador",
    price: 8000,
    category: "Rostro",
    imageUrl: "images/rostro/iluminador.jpg",
  },
  {
    id: "Rubor-bloomshell-love",
    name: "Rubor Bloomshell Love",
    price: 18500,
    category: "Rostro",
    imageUrl: "images/rostro/Rubor-bloomshell-love.jpg",
  },
  {
    id: "corrector-alissha",
    name: "Corrector ALISSHA",
    price: 17000,
    category: "Rostro",
    imageUrl: "images/rostro/corrector-alissha.jpg",
  },
  {
    id: "corrector-chica-purpure",
    name: "Corrector Chica PURPURE",
    price: 19500,
    category: "Rostro",
    imageUrl: "images/rostro/Corrector-chica-purpure.jpg",
  },
  {
    id: "polvo-suelto-paulis",
    name: "Polvo Suelto PAULIS",
    price: 15000,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-suelto-paulis.jpg",
  },
  {
    id: "rubor-kuromi",
    name: "Rubor Kuromi",
    price: 8000,
    category: "Rostro",
    imageUrl: "images/rostro/rubor-kuromi.jpg",
  },
  {
    id: "fijador-star-karite",
    name: "Fijador Star Karité",
    price: 17000,
    category: "Rostro",
    imageUrl: "images/rostro/Fijador-star-karite.jpg",
  },
  {
    id: "fijador-mini-purpure",
    name: "Fijador Mini PURPURE",
    price: 17000,
    category: "Rostro",
    imageUrl: "images/rostro/Fijador-mini-purpure.jpg",
  },
  {
    id: "corrector-bloomshell-10ml",
    name: "Corrector Bloomshell 10ml",
    price: 19500,
    category: "Rostro",
    imageUrl: "images/rostro/Corrector-bloomshell-de-10ml.jpg",
  },
  {
    id: "Rubor-bloomshell",
    name: "Rubor Bloomshell",
    price: 18500,
    category: "Rostro",
    imageUrl: "images/rostro/Rubor-bloomshell.jpg",
  },
  {
    id: "corrector-bloomshell-20ml",
    name: "Corrector Bloomshell 20ml",
    price: 27500,
    category: "Rostro",
    imageUrl: "images/rostro/Corrector-bloomshell-de-20ml.jpg",
  },
  {
    id: "corrector-Lula",
    name: "Corrector Lula",
    price: 17500,
    category: "Rostro",
    imageUrl: "images/rostro/corrector-Lula.jpg",
  },
  {
    id: "base-bloomshell-2en1",
    name: "Base Bloomshell 2 en 1",
    price: 30000,
    category: "Rostro",
    imageUrl: "images/rostro/Base-bloomshell-2en1.jpg",
  },
  {
    id: "polvo-pauli-2en1",
    name: "Polvo Pauli 2 en 1",
    price: 13500,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-paulis-2en1.jpg",
  },
  {
    id: "base-mate-lula",
    name: "Base Mate Lula",
    price: 24500,
    category: "Rostro",
    imageUrl: "images/rostro/base-mate-lula.jpg",
  },
  {
    id: "polvo-nailen",
    name: "Polvo NAILEN",
    price: 15000,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-nailen.jpg",
  },
  {
    id: "corrector-grande-trendy",
    name: "Corrector Grande Trendy",
    price: 26000,
    category: "Rostro",
    imageUrl: "images/rostro/Corrector-grande-de-trendy.jpg",
  },
  {
    id: "base-matte-alissha",
    name: "Base Matte ALISSHA",
    price: 22500,
    category: "Rostro",
    imageUrl: "images/rostro/Base-mate-alissha.jpg",
  },
  {
    id: "polvo-compacto-myk",
    name: "Polvo Compacto MYK",
    price: 14000,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-compacto-myk.jpg",
  },
  {
    id: "paleta-rubores-atenea",
    name: "Paleta De Rubores Atenea",
    price: 11000,
    category: "Rostro",
    imageUrl: "images/rostro/paleta-rubores-atenea.jpg",
  },
  {
    id: "rubor-compacto",
    name: "Rubor Compacto",
    price: 11000,
    category: "Rostro",
    imageUrl: "images/rostro/Ruborcompacto.jpg",
  },
  {
    id: "rubor-ani-k",
    name: "Rubor ANI-K",
    price: 18500,
    category: "Rostro",
    imageUrl: "images/rostro/Rubor-Ani-k.jpg",
  },
  {
    id: "base-alissha",
    name: "Base Alissha",
    price: 19500,
    category: "Rostro",
    imageUrl: "images/rostro/Base-alis-sha.jpg",
  },
  {
    id: "polvo-suelto-girly-mini",
    name: "Polvo Suelto GIRLY (Mini)",
    price: 21000,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-suelto-girly-mini.jpg",
  },
  {
    id: "polvo-suelto-girly-grande",
    name: "Polvo Suelto GIRLY (Grande)",
    price: 30000,
    category: "Rostro",
    imageUrl: "images/rostro/Polvo-suelto-girly-grande.jpg",
  },

  // ===== SOMBRAS =====
  {
    id: "paleta-sombras-atenea-65k",
    name: "Paleta de Sombras Atenea",
    price: 65500,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombra-Atenea.jpg",
  },
  {
    id: "paleta-sombras-atenea-78k",
    name: "Paleta de Sombras Atenea",
    price: 78500,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombra-Atenea-78k.jpg",
  },
  {
    id: "paleta-alissha",
    name: "Paleta Alissha",
    price: 22000,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombra-alissha.jpg",
  },
  {
    id: "paleta-sombra-artica",
    name: "Paleta de Sombra Ártica",
    price: 62000,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombra-artica.jpg",
  },
  {
    id: "paleta-alissha",
    name: "Paleta de Sombra ALISSHA",
    price: 22500,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombras-alissha.jpg",
  },
  {
    id: "paleta-nude-18",
    name: "Paleta Nude x18 tonos",
    price: 17000,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-nude-x18-tonos.jpg",
  },
  {
    id: "paleta-de-sombra-x9-tonos",
    name: "Paleta de sombra x9 tonos",
    price: 14000,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombra-x9-tonos.jpg",
  },
  {
    id: "paleta-54",
    name: "Paleta de Sombras x54 tonos",
    price: 32000,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombra-x54-tonos.jpg",
  },
  {
    id: "paleta-24",
    name: "Paleta de Sombra x24 tonos",
    price: 17000,
    category: "Sombras",
    imageUrl: "images/sombras/Paleta-de-sombras-x24-tonos.jpg",
  },

  // ===== BROCHAS =====
  {
    id: "brocha-base",
    name: "Brocha de Base",
    price: 17900,
    category: "Brochas",
    imageUrl: "images/brochas/Brocha-de-base.jpg",
  },
  {
    id: "brocha-rubor",
    name: "Brocha de Rubor",
    price: 17500,
    category: "Brochas",
    imageUrl: "images/brochas/Brocha-de-rubor.jpg",
  },
  {
    id: "brocha-doble-trendy",
    name: "Brocha Doble Trendy",
    price: 18000,
    category: "Brochas",
    imageUrl: "images/brochas/Brocha-trendy-doble.jpg",
  },
  {
    id: "brocha-corrector",
    name: "Brocha Corrector",
    price: 14000,
    category: "Brochas",
    imageUrl: "images/brochas/Brocha-de-corrector.jpg",
  },
  {
    id: "brocha-cejas-doble",
    name: "Brocha de Cejas Dobles",
    price: 16900,
    category: "Brochas",
    imageUrl: "images/brochas/Brocha-de-cejas-doble.jpg",
  },
  {
    id: "kit-brocha-5-trendy",
    name: "Kit Brocha x5 Trendy",
    price: 16500,
    category: "Brochas",
    imageUrl: "images/brochas/Kit-de-brocha-X5-de-trendy.jpg",
  },
  {
    id: "kit-brocha-10",
    name: "Kit Brocha x10",
    price: 23500,
    category: "Brochas",
    imageUrl: "images/brochas/Kit-de-brocha-x10.jpg",
  },
  {
    id: "kit-brocha-6",
    name: "Kit Brocha x6",
    price: 16500,
    category: "Brochas",
    imageUrl: "images/brochas/Kit-de-brochas-x6.jpg",
  },

  // ===== ACCESORIOS =====
  {
    id: "molde-hielo-masajeador",
    name: "Molde de Hielo + Masajeador",
    price: 22500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Molde-de-hielo-+-masajeador.jpg",
  },
  {
    id: "cepillo-masajeador",
    name: "Cepillo Masajeador",
    price: 13500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Cepillo-masajeador.jpg",
  },
  {
    id: "cepillo-pulidor",
    name: "Cepillo Pulidor",
    price: 5500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Cepillo-pulidor.jpg",
  },
  {
    id: "borla-corazon",
    name: "Borla de Corazón",
    price: 5000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Borla-de-corazon.jpg",
  },
  {
    id: "sacapunta-bloomshell",
    name: "Sacapunta Bloomshell",
    price: 6000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Sacapunta-bloomshell.jpg",
  },
  {
    id: "repuesto-encrespador",
    name: "Set de Repuesto de Encrespador",
    price: 6000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Set-de-repuestos-de-Encrespador.jpg",
  },
  {
    id: "set-borlas-12",
    name: "Set de Borlas x12",
    price: 15000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Set-de-borlas-x12.jpg",
  },
  {
    id: "encrespados-alissha",
    name: "Encrespados Alissha",
    price: 15000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Encrespador aliSsha.jpg",
  },
  {
    id: "cepillo-engol",
    name: "Cepillo ENGOL",
    price: 16500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Cepillo-ENGOL.jpg",
  },
  {
    id: "caiman-flor-hawaino",
    name: "Caimán de Flor Hawaino",
    price: 5000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Caiman-de-flor-hawaino.jpg",
  },
  {
    id: "diadema-nube-muneca",
    name: "Diadema Nube + Muñequera",
    price: 15500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Diadema-de-nube-muñequera.jpg",
  },
  {
    id: "set-pinzas-monitas",
    name: "Set de Pinzas + Moñitas",
    price: 6000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Set-de-pinzas-moñitas.jpg",
  },
  {
    id: "set-monitas",
    name: "Set de Moñitas",
    price: 5000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Set-de-moñas.jpg",
  },
  {
    id: "caiman-flor-hawaino-mini",
    name: "Caimán de Flor Hawaino (Mini)",
    price: 6000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Caiman-de-flor-hawaino-mini.jpg",
  },
  {
    id: "beauty-blender",
    name: "Beauty Blender",
    price: 3500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Beauty-blender.jpg",
  },
  {
    id: "set-beauty-blender-4",
    name: "Set de Beauty Blender x4",
    price: 10000,
    category: "Accesorios",
    imageUrl: "images/accesorios/Set-de-beauty-blender-X4.jpg",
  },
  {
    id: "encrespador-bloomshell",
    name: "encrespador bloomshell",
    price: 15500,
    category: "Accesorios",
    imageUrl: "images/accesorios/Encrespador-de-bloomshell.jpg",
  },

  // ===== CUIDADO FACIAL =====
  {
    id: "serum-ceramidas-ah",
    name: "Serum Ceramidas + Ácido Hialurónico",
    price: 10000,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Serum-Ceramide-ácido-hialurónico.jpg",
  },
  {
    id: "serum-de-arroz-bioaqua",
    name: "serum de arroz bioaqua",
    price: 14500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/serum-de-arroz-bioaqua.jpg",
  },
  {
    id: "kit-niacinamida-og-x3",
    name: "Kit de Niacinamida OG x3",
    price: 75500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Kit-de-NIACIMIDA-OG-x3.jpg",
  },
  {
    id: "mascarilla-retinal",
    name: "Mascarilla de Retinol",
    price: 4500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Mascarilla-de-retinol.jpg",
  },
  {
    id: "mascarilla-ah",
    name: "Mascarilla ácido hialurónico",
    price: 4500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Mascarilla-ácido-hialurónico.jpg",
  },
  {
    id: "kit-x3-bioaqua-sueros",
    name: "Kit x3 de Bioaqua (Sueros Faciales)",
    price: 25500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Kit-X3-de-serum-faciales-BIOAQUA.jpg",
  },
  {
    id: "kit-arroz-bioaqua",
    name: "Kit de Arroz Bioaqua",
    price: 65600,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Kit-de-arroz-BIOAQUA.jpg",
  },
  {
    id: "jabon-facial-arroz-bioaqua",
    name: "Jabón Facial de Arroz Bioaqua",
    price: 15500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Jabón-facial-de-arroz-BIOAQUA.jpg",
  },
  {
    id: "protector-solar-aqua-waves-atenea",
    name: "Protector Solar Aqua Waves Atenea",
    price: 55500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Protector-solar-aqua-waves-atenea.jpg",
  },
  {
    id: "protector-solar",
    name: "Protector Solar",
    price: 13000,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Protector-solar.jpg",
  },
  {
    id: "parches-anti-acne-alissha",
    name: "Parches Anti Acné Alissha",
    price: 11000,
    category: "Cuidado Facial",
  },
  {
    id: "sticker-anti-acne-engol",
    name: "Sticker Anti Acné (Engol)",
    price: 16900,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Sticker-anti-acné-engol.jpg",
  },
  {
    id: "contorno-ojos-rosa-ah",
    name: "Contorno de Ojos (Rosa y Ácido Hialurónico)",
    price: 9500,
    category: "Cuidado Facial",
    imageUrl:
      "images/cuidadofacial/Contorno-de-ojeras-rosas-ácido-hialurónico.jpg",
  },
  {
    id: "contorno-ojos-arroz-bioaqua",
    name: "Contorno de Ojos (Arroz Bioaqua)",
    price: 9500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Contorno-de-ojos-arroz-BIOAQUA.jpg",
  },
  {
    id: "crema-hidratante-bloqueador-solar",
    name: "Crema Hidratante Bloqueador Solar",
    price: 22900,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Crema-hidratante-bloqueador-solar.jpg",
  },
  {
    id: "serum-ceramide-bioaqua",
    name: "Serum Ceramide Bioaqua",
    price: 10000,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Serum-Ceramide-BIOAQUA.jpg",
  },
  {
    id: "protector-solar-en-spray-bioaqua",
    name: "Protector Solar en Spray Bioaqua",
    price: 15000,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Protector-solar-en-spray-BIOAQUA.jpg",
  },
  {
    id: "crema-hidratante-bioaqua",
    name: "Crema Hidratante Bioaqua",
    price: 15500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Crema-hidratante-BIOAQUA.jpg",
  },
  {
    id: "kit-bioaqua-rosas",
    name: "Kit Bioaqua Rosas",
    price: 65500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Kit-bioaqua-rosas.jpg",
  },
  {
    id: "kit-centella-asiatica",
    name: "Kit Centella Asiática",
    price: 65500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Kit-de-centella-asiática.jpg",
  },
  {
    id: "kit-bioaqua-retinol",
    name: "Kit Bioaqua Retinol",
    price: 65500,
    category: "Cuidado Facial",
    imageUrl: "images/cuidadofacial/Kit-de-retinol.jpg",
  },
];

const badgeColors: Record<Category, string> = {
  Labios: "from-pink-500 to-fuchsia-500",
  Ojos: "from-sky-500 to-indigo-500",
  Rostro: "from-amber-500 to-orange-500",
  Sombras: "from-violet-500 to-purple-600",
  Brochas: "from-emerald-500 to-teal-500",
  Accesorios: "from-rose-500 to-red-500",
  "Cuidado Facial": "from-lime-500 to-green-600",
};

function currencyCOP(value: number) {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}

// Normaliza texto: minúsculas y sin acentos
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const ProductCard: React.FC<{
  p: Product;
  isSelected: boolean;
  onToggleSelection: (id: string) => void;
}> = ({ p, isSelected, onToggleSelection }) => {
  const phoneNumber = "573052709376";
  const message = `Hola Yoxcam__Makeup! 
Vi tu catálogo y me interesa saber más sobre ${p.name}.`;

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURI(message)}`;
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Moñito decorativo en esquina superior izquierda */}
      <div className="absolute left-2 top-2 z-10">
        <img
          src="/fondo.png"
          alt="Moño decorativo"
          className="h-8 w-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Imagen */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
        {p.imageUrl ? (
          <img
            src={p.imageUrl}
            alt={p.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-gray-400">
            (Coloca tu imagen)
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-base leading-tight font-semibold text-gray-900">
            {p.name}
          </h3>

          <span
            className={`shrink-0 rounded-full bg-gradient-to-r px-2.5 py-1 text-[10px] font-semibold text-white ${
              badgeColors[p.category]
            } shadow-sm ring-1 ring-black/5`}
            title={p.category}
          >
            {p.category}
          </span>
        </div>

        <p className="text-xl font-bold text-gray-900">
          {currencyCOP(p.price)}
        </p>

        {p.note && (
          <p className="mt-1 text-xs font-medium text-rose-600">
            {p.note.toUpperCase()}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#70268c] px-3.5 py-2 text-sm font-semibold text-white shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70268c] focus-visible:ring-offset-2"
          >
            Comprar
          </a>
          <button
            onClick={() => onToggleSelection(p.id)}
            className={`inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-sm font-semibold shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#70268c] focus-visible:ring-offset-2 ${
              isSelected
                ? "bg-green-500 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
          >
            {isSelected ? "Seleccionado" : "Seleccionar"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGridAll: React.FC = () => {
  const [q, setQ] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(
    new Set()
  );

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const getSelectedProductsMessage = () => {
    if (selectedProducts.size === 0) return "";
    const selectedItems = products
      .filter((p) => selectedProducts.has(p.id))
      .map((p) => `• ${p.name} - ${currencyCOP(p.price)}`)
      .join("\n");

    return `Hola Yoxcam__Makeup! \n\nMe interesan estos productos:\n\n${selectedItems}\n\n¿Podrías darme más información?`;
  };

  const getWhatsAppUrl = () => {
    const phoneNumber = "573052709376";
    const message = getSelectedProductsMessage();
    return message
      ? `https://wa.me/${phoneNumber}?text=${encodeURI(message)}`
      : "#";
  };

  // Filtrar por nombre
  const filteredProducts = useMemo(() => {
    const term = q.trim();
    if (!term) return products;
    const nt = normalize(term);
    return products.filter((p) => normalize(p.name).includes(nt));
  }, [q]);

  const totalResults = filteredProducts.length;
  const categories: Category[] = [
    "Labios",
    "Ojos",
    "Rostro",
    "Sombras",
    "Brochas",
    "Accesorios",
    "Cuidado Facial",
  ];

  return (
    <Background>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="flex w-full items-center gap-3 lg:w-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Catálogo completo
            </h2>
            {q && (
              <span className="rounded-full bg-gray-900/5 px-2 py-0.5 text-xs font-medium text-gray-600">
                {totalResults} resultados
              </span>
            )}
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
            {/* 🔎 Buscador por nombre */}
            <div className="relative flex-1 sm:w-72">
              <input
                aria-label="Buscar producto por nombre"
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && setQ("")}
                placeholder="Buscar por nombre…"
                className="w-full rounded-2xl border border-gray-200 bg-white/90 px-10 py-2.5 text-sm text-gray-800 shadow-sm outline-none backdrop-blur
                     placeholder:text-gray-500 hover:border-gray-300
                     focus:border-transparent focus:ring-2 focus:ring-[#70268c]/40"
              />
              {/* Icono */}
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
              </svg>
              {/* Limpiar */}
              {q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-1.5 text-gray-500 hover:bg-gray-100"
                  aria-label="Limpiar búsqueda"
                  title="Limpiar"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Selector de categoría */}
            <label className="sr-only" htmlFor="cat-select">
              Ir a categoría
            </label>
            <div className="relative sm:w-56">
              <select
                id="cat-select"
                disabled={!!q}
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-white/90 py-2.5 pr-10 pl-4 text-sm text-gray-800 shadow-sm outline-none backdrop-blur
                     hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-60
                     focus:border-transparent focus:ring-2 focus:ring-[#70268c]/40"
                onChange={(e) => {
                  const val = e.target.value;
                  const el = document.getElementById(val);
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <option className="bg-white text-gray-600" value="">
                  Ir a categoría…
                </option>
                {categories.map((c) => (
                  <option
                    key={c}
                    value={`cat-${c}`}
                    className="bg-white text-gray-800"
                  >
                    {c}
                  </option>
                ))}
              </select>
              {/* chevron */}
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </header>

        {categories.map((cat) => {
          const items = filteredProducts.filter((p) => p.category === cat);
          if (!items.length) return null;

          return (
            <div key={cat} id={`cat-${cat}`} className="mb-14 scroll-mt-28">
              <h3 className="mb-5 text-2xl font-bold text-gray-900">{cat}</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard
                    key={p.id}
                    p={p}
                    isSelected={selectedProducts.has(p.id)}
                    onToggleSelection={toggleProductSelection}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {!totalResults && q && (
          <p className="mt-10 text-center text-sm text-gray-500">
            No hay productos que coincidan con “{q}”.
          </p>
        )}

        {/* Botón flotante para comprar productos seleccionados */}
        {selectedProducts.size > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.758-.867-2.908-1.502-4.062-3.405-.309-.508.309-.472.88-1.574.098-.198.049-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="font-semibold">
                Comprar ({selectedProducts.size})
              </span>
            </a>
          </div>
        )}
      </section>
    </Background>
  );
};

export default ProductGridAll;
