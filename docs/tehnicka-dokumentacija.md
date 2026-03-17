# Mrgudić Bura Vina — Tehnička Dokumentacija (Senior)

## Pregled

Višejezični Astro web za vinariju s QR landing stranicama za svako vino. Fokus na performanse (Zero-JS), SEO i mobile-first UX.

## Tech Stack

| Sloj | Tehnologija |
|------|-------------|
| Framework | Astro 5.x (Static Site Generation) |
| Styling | Tailwind CSS 4.x |
| Tipografija | Playfair Display + Inter (Google Fonts) |
| Sadržaj | Astro Content Collections (Markdown + Zod) |
| i18n | Native Astro i18n (HR + EN) |
| SEO | sitemap.xml + RSS feed + OG/Twitter Cards |
| Deploy | Docker + Nginx Alpine |

## Struktura Projekta

```
src/
├── components/           # UI komponente
│   ├── WineCard.astro  # Prikaz vina s detaljima
│   ├── LanguagePicker.astro
│   └── Footer.astro
├── content/
│   └── vina/           # Content Collections
│       ├── hr/          # Hrvatski opisi
│       └── en/         # Engleski opisi
├── data/
│   └── versions.json    # Verzije i changelog
├── i18n/
│   ├── ui.ts           # Prijevodi (HR/EN)
│   └── utils.ts        # i18n pomoćne funkcije
├── layouts/
│   └── Layout.astro    # Glavni layout s SEO
├── pages/
│   ├── [lang]/        # Dinamičke rute
│   │   ├── 404.astro  # 404 za oba jezika
│   │   └── vina/
│   │       └── [slug].astro  # Detalji vina
│   ├── hr/index.astro # Popis vina (HR)
│   ├── en/index.astro # Popis vina (EN)
│   ├── sitemap.xml.ts # SEO sitemap
│   ├── rss.xml.ts     # RSS feed
│   └── index.astro   # Redirect na /hr
└── styles/
    └── global.css     # Tailwind 4 theme
```

## Vina (5)

| Vino | Opis |
|------|------|
| Marica | Plavac Mali |
| Mare | Vrhunski Plavac |
| Bura | Premium (Plavac, Rukatac, Sivi Plavac) |
| Dingač | Kraljevsko vino |
| Galerija | Ekskluzivna kolekcija |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build generira statične HTML datoteke u `dist/` direktoriju (16 stranica).

## Docker

```bash
# Build
docker build -t mrgudic-bura .

# Run
docker run -p 80:80 mrgudic-bura
```

## i18n

- **Podržani jezici:** HR (default), EN
- **URL struktura:** `/hr/...`, `/en/...`
- **Preusmjeravanje:** `/` → `/hr`
- **LanguagePicker:** Automatski prebacuje jezik u URL-u

## SEO

- Canonical URL
- OpenGraph (og:image koristi sliku vina)
- Twitter Cards
- Dinamički description
- `/sitemap.xml` - Sve stranice
- `/rss.xml` - Feed vina

## Verzije

Verzije se prate u `src/data/versions.json`:

```json
{
  "currentVersion": "1.0.0",
  "changelog": [
    {
      "version": "1.0.0",
      "date": "2025-01-01",
      "description": { "hr": "...", "en": "..." }
    }
  ]
}
```

Prikazuje se u footelu (`v1.0.0`).

## Content Schema (Zod)

```typescript
{
  name: string,          // Ime vina
  tagline: string,       // Kratki opis
  description: string,  // Detaljan opis
  image: Image(),        // Slika boce
  alcohol?: string,      // Postotak alkohola
  grape: string,        // Sorte grožđa
  tastingNotes?: string[], // Bilješke o kušanju
  pairing?: string       // Uparivanje s hranom
}
```

## Dodavanje Novog Vina

1. Kreiraj `src/content/vina/hr/ime-vina.md`
2. Kreiraj `src/content/vina/en/ime-vina.md`
3. Dodaj sliku u `src/assets/`
4. Ažuriraj `image` putanju u markdownu

```yaml
---
name: Novo Vino
tagline: Kratki opis
description: Detaljan opis vina...
image: ../../../assets/slika.webp
alcohol: 14.5%
grape: Sorta 100%
tastingNotes:
  - Nota 1
  - Nota 2
pairing: Hrana.
---
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
