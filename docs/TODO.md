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
