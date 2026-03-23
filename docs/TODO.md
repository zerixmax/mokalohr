# TODO Dokumentacija: Mrgudić Bura Vina (Faza 1 - E-etikete)

**Cilj Faze 1:** Postaviti super-brzu, višejezičnu web infrastrukturu usklađenu s EU zakonima o e-etiketama za vina, spremnu za ispis QR kodova s praćenjem serija (batcheva).

## ✅ ZAVRŠENO (Temelji su postavljeni)
- [x] **Inicijalizacija Projekta:** Postavljen Astro JS (v4.16+) s Node.js (v22+) okruženjem.
- [x] **Tailwind CSS v4 Integracija:** Konfiguriran najmoderniji Vite plugin za Tailwind za ekstremne performanse.
- [x] **Infrastruktura (Docker):** Napisan *multi-stage* `Dockerfile` (koristeći brzi `oven/bun`) i optimizirani `nginx.conf` za predmemoriranje statičkih datoteka.
- [x] **Višejezičnost (i18n):** U `astro.config.mjs` definirano odvojeno rutiranje (default HR bez prefiksa, EN s `/en/` prefiksom).
- [x] **Dizajn Sustav:** Definirana premium "Dark & Gold" paleta boja u `src/styles/global.css` koristeći nove `@theme` varijable.
- [x] **Payload CMS Integracija (v2.4.0):** Konfigurirane kolekcije (`Vina.ts`) s podrškom za kose crte u slugovima, `boris_lot` i `datum_punjenja`.
- [x] **Astro Catch-all Ruta (`src/pages/[lang]/vina/[...slug].astro`):**
  - Implementirana "pametna" logika koja prepoznaje pune QR putanje s batchevima.
  - Implementiran fallback mehanizam za stabilnost URL-ova.
  - Dodan vizualni prikaz laboratorijskih detalja (batch info).
- [x] **Vina:** Dodano 5 vina (Marica, Mare, Bura, Dingač, Galerija)
- [x] **SEO:** sitemap.xml, RSS feed
- [x] **Verzije:** Brojač verzija u footeru

## 🌍 Usklađivanje EN verzije s HR verzijom (Hitno)
- [x] **Standardizacija Slugova (EN = HR):**
  - [x] Preimenovati EN `mrgudic-dingac.md` u `bura-dingac.md` (i ažurirati slug u CMS-u).
  - [x] Preimenovati EN `rukatac.md` u `bura-rukatac.md` (i ažurirati slug u CMS-u).
- [x] **Dodavanje nedostajućih EN vina:**
  - [x] Kreirati i prevesti `bura-galerija.md` (engleski).
  - [x] Kreirati i prevesti `bura-plavac.md` (engleski).
  - [x] Kreirati i prevesti `bura-sivi-plavac.md` (engleski).
- [ ] **Sinkronizacija CMS polja:**
  - [ ] Provjeriti da sva EN vina imaju usklađena polja `boris_lot` i `datum_punjenja` s HR verzijama.
  - [ ] Prevesti nova EU polja (sastojci, alergeni, nutritivna tablica) na engleski u CMS-u.

### 3. Dizajn QR Landing Stranica (E-etiketa UX)
- [x] Izraditi prikaz imena, proizvođača i kategorije.
- [x] Implementirati vizualno isticanje alergena (po EU zakonu).
- [ ] Iscrtati tablicu nutritivnih vrijednosti. (Dovršiti finese prikaza)
- [ ] Ukloniti sve trackere (osigurati `<meta name="robots" content="noindex, nofollow">`).

### 4. Lansiranje
- [ ] Izgenerirati testne QR kodove u SVG formatu (koji vode na `mokalo.hr/vina/marica/24/b1`).
- [ ] Testirati skeniranje putem mobilnog uređaja (Dark Mode, brzina učitavanja).
- [ ] Pokrenuti `docker-compose up -d --build` na produkcijskom poslužitelju.
