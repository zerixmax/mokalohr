// src/types/wine.ts
// Ažurirano: 2026-05-07 — Usklađeno s CMS tabovima (Osnove, Opis i Karakter, Profil, Laboratorij, Postavke)

export interface Wine {
  // === OSNOVE (Tab: Osnove) ===
  id: string | number;
  naziv: string;
  naziv_puni?: string;
  slug: string;
  year: number;
  lot?: string;
  category_title?: string;
  sort?: string;
  slika?: {
    id: string | number;
    alt?: string;
    url: string;
    filename?: string;
    width?: number;
    height?: number;
    mimeType?: string;
    fileSize?: number;
  } | null;

  // === OPIS I KARAKTERISTIKE (Tab: Opis i Karakter) ===
  opis?: any; // Payload RichText (Lexical JSON format)
  karakter?: string;
  aromas?: { aroma: string }[];
  technicals?: string;

  // === PROFIL & SERVIRANJE (Tab: Profil & Serviranje) ===
  profile?: {
    fruitiness: number;
    acidity: number;
    floral: number;
    spices: number;
    tannins: number;
  };
  serving?: {
    type?: string;
    temp?: string;
    glass?: string;
  };
  pairings?: {
    icon: string;
    desc: string;
  }[];

  // === LABORATORIJ & NUTRICIJA (Tab: Laboratorij & Nutricija) ===
  analiza?: {
    alkohol?: number;
    ph?: number;
    suhi_ekstrakt?: number;
    reducirajuci_seceri?: number;
    ukupna_kiselost?: number;
    ukupni_so2?: number;
  };
  nutricija?: {
    energija?: string;
    ugljikohidrati?: number;
    seceri?: number;
  };
  ingredients?: string;
  allergens?: string;

  // === POSTAVKE (Tab: Postavke) ===
  visual_theme?: {
    theme_type?: 'Marica-Red' | 'Rukatac-Blue' | 'Amare-Gold';
  };
  boris_lot?: string;
  datum_punjenja?: string;
  featured?: boolean;

  // === CMS META ===
  _status?: 'draft' | 'published';
  createdAt?: string;
  updatedAt?: string;

  // === LEGACY (Za kompatibilnost s Markdown content collections) ===
  alcohol?: number;       // Staro polje, sada u analiza.alkohol
  character?: string;     // Staro polje, sada karakter
  producer?: string;
  region?: string;
  recycling?: string;
  name?: string;          // Markdown varijanta od naziv
  category?: string;
  image?: { src: string };
  hero_image?: { src: string } | string;
}

export interface VinaResponse {
  docs: Wine[];
  totalDocs: number;
  limit?: number;
  totalPages?: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
}
