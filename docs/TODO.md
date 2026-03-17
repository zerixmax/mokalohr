# TODO Dokumentacija: Mrgudić Bura Vina (Faza 1 - E-etikete)

**Cilj Faze 1:** Postaviti super-brzu, višejezičnu web infrastrukturu usklađenu s EU zakonima o e-etiketama za vina, spremnu za ispis QR kodova s praćenjem serija (batcheva).

## ✅ ZAVRŠENO (Temelji su postavljeni)
- [x] **Inicijalizacija Projekta:** Postavljen Astro JS (v4.16+) s Node.js (v22+) okruženjem.
- [x] **Tailwind CSS v4 Integracija:** Konfiguriran najmoderniji Vite plugin za Tailwind za ekstremne performanse.
- [x] **Infrastruktura (Docker):** Napisan *multi-stage* `Dockerfile` (koristeći brzi `oven/bun`) i optimizirani `nginx.conf` za predmemoriranje statičkih datoteka.
- [x] **Višejezičnost (i18n):** U `astro.config.mjs` definirano odvojeno rutiranje (default HR bez prefiksa, EN s `/en/` prefiksom).
- [x] **Dizajn Sustav:** Definirana premium "Dark & Gold" paleta boja u `src/styles/global.css` koristeći nove `@theme` varijable.
- [x] **Vina:** Dodano 5 vina (Marica, Mare, Bura, Dingač, Galerija)
- [x] **SEO:** sitemap.xml, RSS feed
- [x] **Verzije:** Brojač verzija u footeru

## 🚧 U TIJEKU (Ono što sada radimo)
- [ ] **Ažuriranje Baze Podataka (Zod Schema):** Ažurirati `src/content/config.ts` kako bi uključivao obavezna EU polja (nutritivne vrijednosti, sastojci, alergeni).
  - Dodati `batches: z.array(z.string()).optional()` u shemu za praćenje serija vina na QR kodovima (npr. `24/b1`).

## 🎯 TODO (Sljedeći koraci za programiranje)

### 1. Unošenje Podataka (Markdown Baza)
- [ ] Ažurirati HR i EN `.md` datoteke s EU podacima:
  - Dodati nutritivne vrijednosti
  - Dodati sastojke
  - Dodati alergene
  - Dodati batcheve za praćenje

### 2. Izrada Komponenti i Predložaka
- [ ] **`src/layouts/Layout.astro`:** Učitati Google Fontove (*Playfair Display* za naslove i *Inter* za tekst) i postaviti bazni HTML kostur.
- [ ] **Astro Catch-all Ruta (`src/pages/[lang]/vina/[...slug].astro`):**
  - Implementirati logiku koja automatski prepoznaje jezik i batcheve (`/24/b1`).
  - Iskoristiti Tailwind klase (npr. `bg-bura-dark-900`) za iscrtavanje legalne EU tablice.

### 3. Dizajn QR Landing Stranica (E-etiketa UX)
- [ ] Izraditi prikaz imena, proizvođača i kategorije.
- [ ] Implementirati vizualno isticanje alergena (po EU zakonu).
- [ ] Iscrtati tablicu nutritivnih vrijednosti.
- [ ] Ukloniti sve trackere (osigurati `<meta name="robots" content="noindex, nofollow">`).

### 4. Lansiranje
- [ ] Izgenerirati testne QR kodove u SVG formatu (koji vode na `mokalo.hr/vina/marica/24/b1`).
- [ ] Testirati skeniranje putem mobilnog uređaja (Dark Mode, brzina učitavanja).
- [ ] Pokrenuti `docker-compose up -d --build` na produkcijskom poslužitelju.
