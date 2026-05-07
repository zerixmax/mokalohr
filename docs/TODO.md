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
- [x] **CMS UI Refactor (2026-05-07):** Pojednostavljeno sučelje pomoću tabova i grupa (Osnove, Karakter, Profil, Laboratorij, Postavke).
- [x] **RichText Bug Fix (07.05.2026):** Popravljen `Fragment` import u RichText.astro komponenti.
- [x] **Bulk Seed Skripta (07.05.2026):** `scripts/seed-new-wines.mjs` - automatski unos 6 novih vina s HR+EN podacima.
- [x] **WineCard.astro — Fix nutritivne vrijednosti (07.05.2026):** Ispravljen bug "Masti≠Carbs", dodana laboratorijska analiza, null guardovi, EU allergen badge.
- [x] **WineCard.astro — useTranslations (07.05.2026):** Svi tekstovi koriste `t()` umjesto hardkodiranih ternary operatora.
- [x] **WineCard.astro — ?? operator (07.05.2026):** Nullish coalescing za alkohol fallback umjesto `||`.
- [x] **index.astro — prerender fix (07.05.2026):** Uklonjen `prerender = true` iz SSR root redirecta.
- [x] **Image src — type safety (07.05.2026):** Uklonjeni `as any` castovi, conditional rendering za CMS vs lokalne slike.
- [x] **Array sort fix (07.05.2026):** `[...vina].sort()` umjesto mutirajućeg `vina.sort()`.
- [x] **EN index — transition:name (07.05.2026):** Dodani View Transitions atributi na `<Image>` i `<h3>`.
- [x] **aria-hidden na SVG-ove (07.05.2026):** Dekoratívne ikone sada imaju `aria-hidden="true"`.
- [x] **RSS XML escaping (07.05.2026):** Dodana `escapeXml()` funkcija, RSS uključuje sva vina, `pubDate` koristi `updatedAt`.
- [x] **Non-Priority Fixes (07.05.2026):**
    - `WineNutrition.astro` — iskorišten `data.producer` prop, uklonjen unused `themeColor`
    - `ThemeToggle.astro` — dodan `aria-label="Toggle dark mode"`
    - `sitemap.xml.ts` — rewrite za Payload CMS API, dodani `lastmod` + `hreflang` alternate linkovi
    - `Welcome.astro` — obrisana + unused asseti (`astro.svg`, `background.svg`)
    - TypeScript cleanup — 10+ unused imports/variables uklonjeno
    - `npx astro check`: **0 errors, 0 warnings, 0 hints**
- [x] **ePodrum + EU Nutrition v2.9.0 (07.05.2026):**
    - Payload CMS: novi "ePodrum (Brzi unos)" tab s `godiste` select, `objavljeno` checkbox
    - Puna EU nutritivna tablica (7 redaka): energija, masti, zasićene, ugljikohidrati, šećeri, proteini, sol
    - `godiste` (string select) s `year` auto-hook i fallback logikom
    - `objavljeno` (vidljivost) i `featured` (carousel) — dva nezavisna statusa
    - `prerender = false` za live CMS update
    - Sortiranje po `godiste` (desc) s fallback na `year`
    - Mock data: sva 8 vina imaju nove fieldove
    - `npx astro check`: **0 errors, 0 warnings, 0 hints**

### 📊 Senior Code Review — Status (07.05.2026)
| # | Status | Opis |
|---|--------|------|
| P1 | ✅ Done | WineCard.astro — Fix pogrešnu nutritivnu vrijednost |
| P2 | ✅ Done | index.astro — Maknuti prerender = true |
| P3 | ✅ Done | Konsolidacija en/index.astro + hr/index.astro → /[lang]/index.astro |
| P7 | ✅ Done | CMS_URL u env varijable |
| P8 | ✅ Done | Fetch timeout na CMS pozive (5s AbortController) |
| P9 | ✅ Done | lang validacija u [...slug].astro |
| P10 | ✅ Done | ?? umjesto || za alkohol fallback |

### 📊 Non-Priority Fixes — Status (07.05.2026)
| # | Status | Opis |
|---|--------|------|
| NP1 | ✅ Done | WineNutrition.astro — iskorišten `data.producer` prop |
| NP2 | ✅ Done | WineNutrition.astro — uklonjen unused `themeColor` |
| NP3 | ✅ Done | ThemeToggle.astro — dodan `aria-label` |
| NP4 | ✅ Done | sitemap.xml.ts — Payload CMS API + lastmod + hreflang |
| NP5 | ✅ Done | Welcome.astro — obrisana + unused asseti |
| NP6 | ✅ Done | TypeScript cleanup — 10+ unused imports/variables |

### 📊 ePodrum + EU Nutrition — Status (07.05.2026)
| # | Status | Opis |
|---|--------|------|
| E1 | ✅ Done | CMS "ePodrum (Brzi unos)" tab s `godiste` select |
| E2 | ✅ Done | `objavljeno` + `featured` — dva nezavisna statusa |
| E3 | ✅ Done | Puna EU nutricija (7 redaka) — WineNutrition + WineCard |
| E4 | ✅ Done | `godiste` → `year` auto-hook za backward compat |
| E5 | ✅ Done | `prerender = false` za live CMS update |
| E6 | ✅ Done | Sortiranje po godiste (desc) s year fallback |
| E7 | ✅ Done | Mock data + types + i18n ažurirani |

## 🎨 Faza 2 - UI & UX Optimizacija (U tijeku)
- [x] **Pojednostavljenje Payload CMS-a:** Grupiranje polja u tabove za bolju preglednost.
- [x] **Frontend Fallback:** Osigurana kompatibilnost s novim nazivima polja (`alkohol`, `karakter`) uz podršku za stare markdown ključeve.
- [ ] **RichText Renderiranje:** Implementirati prikaz novog polja `opis` (Lexical) na frontendu. *(komponenta postoji, testirati na produkciji)*
- [ ] **Migracija Markdown u CMS:** Postupno prebacivanje svih opisa iz `.md` datoteka direktno u Payload `opis` polje.
- [ ] **PH Vrijednost:** Popuniti novo polje `ph` u laboratorijskoj analizi za sva vina.

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

---

## 🔄 Planirano za idući krug "glancanja"

### CMS Polja (Vina.ts)
- [ ] **SEO Meta Tagovi:** Provjeriti povlače li se opisi iz Payload-a u Layout.astro za bolji Google rang.
- [ ] **Optimizacija slika:** Implementirati automatsko smanjivanje slika (sharp) pri uploadu u Payload.

### Frontend
- [x] **Regija/Vinogorje:** Implementiran fiksni prikaz regije (ne ovisi o CMS-u).
- [ ] Dodati SEO meta tagove iz CMS-a (description, og:image).

### Nova Vina (Boris)
- [x] **Seed skripta:** NU Pošip, NU Plavac Mali, Basina Rukatac, Basina Plavac, MONA Rosé, MONA Tribidrag
- [ ] **Pokrenuti seed na produkciji:** `npm run seed:wines`
- [ ] **Upload slika boca** za nova vina

---

## 📝 Bilješke za Borisa (Korisničke upute)

### 30.03.2026 - Redirekcije za stare QR kodove
Stari QR kodovi sada vode na nove stranice:
- `/QRvina/buraplavac.html` → `/hr/vina/bura-plavac-2024`
- `/QRvina/RukatacBura.html` → `/hr/vina/bura-rukatac-2024`
- I engleske verzije za oba vina.

### 30.03.2026 - Regija
Regija je sada fiksno postavljena u kodu:
- HR: "Srednja i Južna Dalmacija"
- EN: "Central and South Dalmatia"
(Nije potrebno unositi u CMS)

### 07.05.2026 - Env konfiguracija
Za pokretanje seed skripte, potrebne su env varijable. Kopiraj `.env.example` u `.env` i ispuni:
```bash
cp .env.example .env
```
Zatim uredi `.env` i upiši CMS kredencijale.

### 07.05.2026 - Pokretanje Bulk Seed-a
Nakon što postaviš `.env` datoteku, pokreni:
```bash
npm run seed:wines
```
Ovo će automatski kreirati 6 novih vina (NU Pošip, NU Plavac Mali, Basina Rukatac, Basina Plavac, MONA Rosé, MONA Tribidrag) s HR i EN prijevodima. Vina su odmah **published** ali **nisu featured** (ne pojavljuju se na naslovnici).
