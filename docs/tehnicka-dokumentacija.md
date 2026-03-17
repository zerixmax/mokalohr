# Mrgudić Bura Vina — Tehnička Dokumentacija (Senior)

## Pregled

Višejezični Astro web za vinariju s QR landing stranicama za svako vino. Fokus na performanse (Zero-JS), SEO i mobile-first UX. Usklađen s EU zakonima o e-etiketama.

## Tech Stack

| Sloj | Tehnologija |
|------|-------------|
| Framework | Astro 5.x (Static Site Generation) |
| Styling | Tailwind CSS 4.x |
| Tipografija | Playfair Display + Inter (Google Fonts) |
| Sadržaj | Astro Content Collections (Markdown + Zod) |
| i18n | Native Astro i18n (HR + EN) |
| SEO | sitemap.xml + RSS feed + OG/Twitter Cards |
| EU Compliance | E-etikete s nutritivnim vrijednostima |
| Deploy | Docker + Nginx Alpine |

## Struktura Projekta

```
src/
├── components/
│   ├── WineCard.astro      # EU E-etiketa + batch podrška
│   ├── LanguagePicker.astro
│   └── Footer.astro
├── content/
│   └── vina/
│       ├── hr/             # Hrvatski opisi
│       └── en/             # Engleski opisi
├── data/
│   └── versions.json       # Verzije i changelog
├── i18n/
│   ├── ui.ts
│   └── utils.ts
├── layouts/
│   └── Layout.astro       # SEO meta tags
├── pages/
│   ├── [lang]/
│   │   ├── 404.astro
│   │   └── vina/
│   │       └── [...slug].astro  # Catch-all + batch
│   ├── hr/index.astro
│   ├── en/index.astro
│   ├── sitemap.xml.ts
│   ├── rss.xml.ts
│   └── index.astro
└── styles/
    └── global.css          # Tailwind 4 + Bura paleta
```

## Vina (5)

| Vino | Batchevi |
|------|----------|
| Marica | 17/b1, 17/b2 |
| Mare | 17/b1 |
| Bura | 17/b1 |
| Dingač | 17/b1 |
| Galerija | 17/b1 |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build generira 16 stranica u `dist/` direktoriju.

## Docker

```bash
docker build -t mrgudic-bura .
docker run -p 80:80 mrgudic-bura
```

## i18n

- **Podržani jezici:** HR (default), EN
- **URL struktura:** `/hr/...`, `/en/...`
- **Preusmjeravanje:** `/` → `/hr`
- **LanguagePicker:** Automatski prebacuje jezik

## SEO

- Canonical URL
- OpenGraph + Twitter Cards
- `/sitemap.xml` - Sve stranice
- `/rss.xml` - Feed vina

## EU E-etiketa

Sve stranica vina uključuju:
- Proizvođač / Punioni
- Regija / Kategorija / Godina
- Nutritivna tablica (na 100ml)
- Alergeni (obavezno)
- Sastojci
- Batch kod (preko URL)

### Batch Podrška

Batch se prenosi preko query parametra:
```
/hr/vina/marica?batch=17/b1
```

## Verzije

Prikazuje se u footelu (`v1.0.0`).

## Content Schema (Zod)

```typescript
{
  name: string,
  producer: string,
  bottler: string,
  region: string,
  category: string,
  country: string,
  year: string,
  alcohol: string,
  ingredients: string,
  allergens: string,
  nutrition: {
    energy: string,
    carbs: string,
    sugars: string,
    protein: string,
    salt: string
  },
  recycling: string,
  batches: string[],        // npr. ["17/b1", "17/b2"]
  // Legacy
  grape: string,
  tastingNotes: string[],
  pairing: string,
  image: Image()
}
```

## Color Palette

```css
--color-dark: #242021;        /* Pozadina */
--color-gold: #A18E68;        /* Naslovi */
--color-muted-gold: #65584D;  /* Obrubi */
--color-text-light: #E3E1D4;  /* Tekst */
```

## Build Output

```
dist/
├── 404.html
├── sitemap.xml
├── rss.xml
├── hr/
│   ├── index.html
│   ├── 404/
│   └── vina/
│       ├── marica/
│       ├── mare/
│       ├── bura/
│       ├── dingac/
│       └── galerija/
└── en/
    ├── index.html
    ├── 404/
    └── vina/
        └── ...
```
