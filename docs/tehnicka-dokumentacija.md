# Mrgudić Bura Vina — Tehnička Dokumentacija

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
| Deploy | Docker + Nginx Alpine |

## Struktura Projekta

```
src/
├── components/           # UI komponente
│   ├── WineCard.astro    # Prikaz vina s detaljima
│   ├── LanguagePicker.astro
│   └── Footer.astro
├── content/
│   └── vina/            # Content Collections
│       ├── hr/          # Hrvatski opisi
│       └── en/          # Engleski opisi
├── i18n/
│   ├── ui.ts            # Prijevodi (HR/EN)
│   └── utils.ts         # i18n pomoćne funkcije
├── layouts/
│   └── Layout.astro     # Glavni layout s SEO
├── pages/
│   ├── [lang]/
│   │   ├── 404.astro    # Dinamička 404
│   │   └── vina/
│   │       └── [slug].astro  # Detalji vina
│   ├── hr/index.astro   # Popis vina (HR)
│   ├── en/index.astro   # Popis vina (EN)
│   └── index.astro      # Redirect na /hr
└── styles/
    └── global.css       # Tailwind 4 theme
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build generira statične HTML datoteke u `dist/` direktoriju.

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

Dinamički meta tagovi po stranici:
- Canonical URL
- OpenGraph (og:image koristi sliku vina)
- Twitter Cards
- Dinamički description

## Content Schema (Zod)

```typescript
{
  name: string,
  tagline: string,
  description: string,
  image: Image(),
  alcohol?: string,
  grape: string,
  tastingNotes?: string[],
  pairing?: string
}
```

## TODO

- [ ] Dodati vina: Bura, Dingač, Galerija
- [ ] Dodati sitemap.xml
- [ ] Dodati RSS feed
