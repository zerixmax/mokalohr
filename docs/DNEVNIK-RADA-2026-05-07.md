# DNEVNIK RADA - 2026-05-07

## 🚀 Pregled obavljenog posla
Dan posvećen kompletnoj nadogradnji RichText renderera, usklađivanju TypeScript tipova s CMS strukturom, pripremi bulk seed skripte za nova vina, non-priority code review fixovima, implementaciji ePodrum CMS sučelja i pune EU nutritivne tablice.

### Sažetak po verzijama:
- **v2.8.0** — Non-priority code review fixovi, sitemap rewrite, a11y improvements, TypeScript cleanup (0 errors)
- **v2.9.0** — ePodrum CMS tab, puna EU nutritivna tablica (7 redaka), godiste/year fallback, objavljeno/featured statusi (0 errors)

### 1. Payload CMS: Pojednostavljenje sučelja (Tabs & Groups)
Glavni cilj bio je smanjiti vizualni nered u kolekciji `Vina`.
- **Implementirani Tabovi:** Polja su sada podijeljena u 5 logičkih cjelina:
    - **Osnove:** Osnovni podaci o vinu (Naziv, Slug, Godište, Slika).
    - **Opis i Karakteristike:** Dodano novo polje `opis` (RichText) za detaljne opise i preimenovano `character` u `karakter` (textarea).
    - **Profil & Serviranje:** Pauk graf (radar chart) i detalji o temperaturi i čašama.
    - **Laboratorij & Nutricija:**
        - Polje `alcohol` je preimenovano u `alkohol` i premješteno unutar grupe `analiza`.
        - Dodano novo polje `ph` za precizniju laboratorijsku analizu.
    - **Postavke:** Boris LOT, datum punjenja i odabir vizualne teme.
- **Prednost:** Administratori sada vide samo relevantna polja za određeni aspekt vina, što ubrzava unos podataka.

### 2. Frontend: Adaptacija na novu strukturu
Kako bi web stranica nastavila raditi s novim nazivima polja, ažuriran je Astro frontend.
- **[...slug].astro:** Ažurirano mapiranje podataka. Dodana logika koja provjerava nova polja (`analiza.alkohol`, `karakter`), ali zadržava fallback na stara polja (`alcohol`, `character`) kako bi markdown datoteke i dalje radile.
- **WineCard.astro:** Ažuriran prikaz alkohola na karticama vina.
- **Validacija:** Pokrenut `npx astro check` i `npm run lint` u oba projekta. Sve je čisto (0 errors).

### 3. TypeScript: Ažuriranje globalnih tipova
- **src/types/wine.ts:** Potpuno prepisan interface `Wine` — strukturiran po CMS tabovima (Osnove, Opis i Karakter, Profil & Serviranje, Laboratorij & Nutricija, Postavke).
- **Dodana polja:** `analiza` (objekt), `nutricija` (objekt), `karakter`, `opis` (RichText), `ph`, `boris_lot`, `datum_punjenja`, `_status`, `createdAt`, `updatedAt`.
- **Svi polja u `analiza` grupi:** `alkohol`, `ph`, `suhi_ekstrakt`, `reducirajuci_seceri`, `ukupna_kiselost`, `ukupni_so2` — sva optional.
- **Svi polja u `nutricija` grupi:** `energija`, `ugljikohidrati`, `seceri` — sva optional.
- **Kompatibilnost:** Interface zadržava legacy polja (`alcohol`, `character`, `name`, `category_title`) za Markdown content collections.
- **WineCarousel fix:** `getThemeColor()` prilagođen na optional `category_title`.
- **Validacija:** `npx astro check` potvrđuje 0 errors.

### 4. RichText Renderer — Kompletna Nadogradnja
- **src/components/wine/RichText.astro:** Potpuno prepisan renderer s punom podrškom za Payload Lexical JSON format.
- **Podržani nodeovi:**
    - `text` — bold, italic, underline, strikethrough, code, sub, sup, highlight (svi formati)
    - `paragraph`, `heading` (h1-h4), `linebreak`
    - `list` (ordered/unordered), `listitem`, `check` (checkbox)
    - `quote` (blockquote s gold border-left)
    - `link` (s opcionalnim `target="_blank"`)
    - `horizontalrule`, `code` (pre/code blok)
    - `upload` (figure sa slikom + caption)
    - `indent`
- **Stilovi:** Kompletni globalni CSS za sve tipove elemenata — Playfair Display za naslove, gold akcenti, prozirne pozadine.
- **Dodan `className` prop** za fleksibilnost pri korištenju komponente.
- **Integracija:** `[...slug].astro` prikazuje sekciju "O Vinu" ako je `opis` popunjen.

### 5. Migracija Markdown sadržaja
- **Standardizacija:** Svi `.md` podaci u `src/content/vina` su migrirani na novu strukturu.
    - `character` → `karakter`
    - `alcohol` → `analiza.alkohol`
- **Konfiguracija:** Ažuriran `src/content/config.ts` (Zod schema) kako bi podržavao novu hijerarhiju i RichText polje.
- **Mapping:** Pojednostavljena logika mapiranja u `[...slug].astro` jer su sada CMS i Markdown podaci gotovo identični po strukturi.

### 6. RichText Bug Fix
- **Problem:** `Fragment` import iz `astro:components` nije dostupan u Astro 4.x.
- **Rješenje:** Zamijenjen `Fragment` s običnim `div` koji koristi `set:html={html}` — standardni Astro pattern za raw HTML injection.
- **Validacija:** `npx astro check` potvrđuje 0 errors.

### 7. Bulk Seed Skripta za Nova Vina
- **Cilj:** Automatski unos 6 novih vina u CMS bez ručnog unosa kroz sučelje.
- **Kreirano:** `scripts/seed-new-wines.mjs` + npm script `npm run seed:wines`
- **Vina:** NU Pošip, NU Plavac Mali, Basina Rukatac, Basina Plavac, MONA Rosé, MONA Tribidrag
- **Podaci:** Svako vino ima kompletne HR i EN prijevode (naziv, karakter, arome, tehnikalije, serviranje, pairingi, nutrijenti, analiza, ingredients, allergens).
- **Status:** Vina su `published`, `featured: false` (ne gužvaju naslovnicu).
- **Env konfiguracija:** Kreiran `.env.example` s potrebnim varijablama (`CMS_URL`, `CMS_ADMIN_EMAIL`, `CMS_ADMIN_PASSWORD`).
- **package.json:** Dodan `"seed:wines": "node scripts/seed-new-wines.mjs"` script.

### 8. Dokumentacija
- **TODO.md:** Ažuriran s novim taskovima (RichText fix, Bulk Seed, nova vina, bilješke za Borisa o env konfiguraciji).
- **DNEVNIK RADA:** Dopunjen s današnjim aktivnostima.
- **.env.example:** Kreiran template za environment varijable.

### 9. Region Polje — B Opcija Fix
- **Problem:** TypeScript error `region does not exist in type` — polje `region` nije definirano u Payload CMS kolekciji `Vina.ts`.
- **Odluka (Opcija B):** `region` se ne šalje kroz API jer je već hardkodiran u frontendu (`src/pages/[lang]/vina/[...slug].astro` — "Srednja i Južna Dalmacija" / "Central and South Dalmatia").
- **Rješenje:** U `mrgudic-cms` repo-u, ukloniti `region` iz svih `payload.create()` i `payload.update()` poziva za kolekciju `vina`.

### 10. Senior Code Review — Priority Fixovi
Nakon detaljne analize projekta (31 file, 22 issues identificirano), krenuli smo s fixovima po prioritetu.

#### 🔴 P1: WineCard.astro — Pogrešna nutritivna vrijednost
- **Problem:** Label "Masti/Fat" ali se prikazuje `nutrition.carbs` (ugljikohidrati)
- **Rješenje:** Kompletno prepisana komponenta s ispravnim mappingom:
    - Nutritivna tablica koristi `nutricija.ugljikohidrati` i `nutricija.seceri` (umjesto starih `nutrition.carbs`, `nutrition.sugars`)
    - Dodana laboratorijska analiza (`analiza` grupa: suhi_ekstrakt, ukupna_kiselost, ukupni_so2)
    - Alergeni sada imaju crveni border i ⚠️ ikonu (EU compliance)
    - Null guardovi na `allergens` i `ingredients`
    - `aromas` prikaz umjesto starog `tastingNotes`
    - `pairings` array umjesto starog `pairing` stringa

#### 🔴 P5: WineCard.astro — useTranslations umjesto hardkodiranih stringova
- **Problem:** `t` funkcija importirana ali nikad korištena — svi tekstovi hardkodirani s ternary operatorima
- **Rješenje:** Svi translatable stringovi koriste `t('key')`:
    - `t('wine.producer')`, `t('wine.alcohol')`, `t('wine.grape')`
    - `t('wine.nutrition')`, `t('wine.energy')`, `t('wine.carbs')`, `t('wine.sugars')`
    - `t('wine.analysis')`, `t('wine.extract')`, `t('wine.acidity')`, `t('wine.so2')`
    - `t('wine.ingredients')`, `t('wine.allergens')`, `t('wine.pairing')`
- **Dodano:** Novi ključevi u `src/i18n/ui.ts` (`wine.producer`)

#### 🔴 P10: WineCard.astro — ?? umjesto || za alkohol
- **Problem:** `wine.data.analiza?.alkohol || wine.data.alcohol` — ako je alkohol `0`, fallback na staro polje
- **Rješenje:** `analysis?.alkohol ?? wine.data.alcohol` — nullish coalescing ispravno tretira `0` kao validnu vrijednost

#### 🔴 P2: index.astro — Maknuti prerender = true
- **Problem:** `export const prerender = true` kontradiktoran s `output: 'server'` (SSR mode)
- **Rješenje:** Uklonjen `prerender` iz `src/pages/index.astro`

#### 🔴 P6: Fix as any cast na Image src
- **Problem:** `(wine.slika?.url || placeholder) as any` — TypeScript ne može validirati tip
- **Uzrok:** `Image` komponenta zahtijeva `string` za remote slike (s width/height) ili `ImageMetadata` za lokalne (bez width/height)
- **Rješenje:** Conditional rendering — CMS slike s width/height, lokalni placeholderi bez:
    ```astro
    {wine.slika?.url ? (
      <Image src={wine.slika.url} width={...} height={...} />
    ) : (
      <Image src={placeholderBottle} />
    )}
    ```

#### 🟡 Bonus: Array sort fix
- **Problem:** `vina.sort()` mutira originalni array
- **Rješenje:** `[...vina].sort()` — non-mutating sort u oba index file-a

#### 🟡 Bonus: aria-hidden na dekorativne SVG-ove
- **Dodano:** `aria-hidden="true"` na sve dekorativne SVG ikone u `hr/index.astro` i `en/index.astro`

#### 🟡 Bonus: EN index — missing transition:name
- **Problem:** `en/index.astro` nije imao `transition:name` na `<Image>` i `<h3>` elementima
- **Rješenje:** Dodani `transition:name={`bottle-${wine.slug}`}` i `transition:name={`title-${wine.slug}`}`

#### 🔴 P4: rss.xml.ts — XML escaping
- **Problem:** Nema escaping za `&`, `<`, `>` — invalid RSS feed ako vino ima specijalne karaktere
- **Rješenje:** Dodana `escapeXml()` funkcija koja zamjenjuje `<`, `>`, `&`, `'`, `"`
- **Bonus:** RSS sada uključuje SVA vina (HR + EN), ne samo HR
- **Bonus:** `pubDate` koristi stvarni `updatedAt` timestamp umjesto `new Date()`

### 11. Senior Code Review — Nastavak (P3, P7, P8, P9)

#### 🔴 P3: Konsolidacija index stranica
- **Problem:** `hr/index.astro` i `en/index.astro` — ~250 linija dupliciranog koda, teško održavanje
- **Rješenje:** Kreiran jedinstveni `/[lang]/index.astro` koji:
    - Koristi `useTranslations` za sve tekstove
    - Validira `lang` parametar (`hr` ili `en`)
    - Dodani novi prijevodi u `ui.ts` (`hero.tradition`, `hero.description`, `home.carousel`, `home.swipe`, `home.collection`, `home.discover`)
    - Stari `hr/index.astro` i `en/index.astro` obrisani

#### 🟡 P7: CMS_URL u env varijable
- **Problem:** Hardkodiran `CMS_URL` u `wineApi.ts` i `[...slug].astro`
- **Rješenje:** 
    - `wineApi.ts` koristi `import.meta.env.CMS_URL` s fallbackom na `'https://cms.mokalo.hr/api/vina'`
    - `[...slug].astro` koristi `import.meta.env.CMS_URL` s fallbackom na `'https://cms.mokalo.hr'`
    - `.env.example` ažuriran s `CMS_URL` varijablom

#### 🟡 P8: Fetch timeout na CMS pozive
- **Problem:** Ako CMS ne odgovara, stranica visi beskonačno
- **Rješenje:** 
    - `wineApi.ts`: Dodana `fetchWithTimeout()` funkcija s 5s timeoutom (`AbortController`)
    - `[...slug].astro`: Dodana `cmsFetch()` helper funkcija s 5s timeoutom

#### 🟡 P9: lang validacija u [...slug].astro
- **Problem:** `/fr/vina/test` prolazi kroz bez validacije, šalje `locale=fr` CMS-u
- **Rješenje:** Dodan validacijski blok koji redirecta na `/404` za nepoznate jezike

---

## 📍 Gdje smo stali
Senior code review fixovi su **10/10 završeni**. Non-priority issues su također riješeni. ePodrum + EU Nutricija v2.9.0 je implementiran. `npx astro check` potvrđuje `0 errors, 0 warnings, 0 hints`.

**Frontend repo** (`mrgudic-bura-vina`): Commit `785bea5` pushan na `origin/main`, v2.9.0.

**CMS repo** (`mrgudic-cms`): Commit `edd01d6` lokalno — push na GitHub nije izvršen (repo upstream nije postavljen / nije public).

---

### 12. Non-Priority Review Fixovi (07.05.2026)

#### WineNutrition.astro — Unused `data.producer` prop
- **Problem:** `data.producer` definiran u Props interface ali nije korišten u templateu — hardcoded "OPG Mrgudić-Bura"
- **Rješenje:** Producer sekcija sada koristi `{data.producer || 'OPG Mrgudić-Bura'}`

#### WineNutrition.astro — Unused `themeColor` prop
- **Problem:** `themeColor` deklariran ali nikad korišten
- **Rješenje:** Uklonjen iz Props interface i destrukturiranja

#### ThemeToggle.astro — Missing aria-label
- **Problem:** Toggle switch nema `aria-label` za screen readere
- **Rješenje:** Dodan `aria-label="Toggle dark mode"` na `<label>` element

#### sitemap.xml.ts — Rewrite za Payload CMS
- **Problem:** Koristio `astro:content` kolekciju koja ne postoji (projekt koristi Payload CMS)
- **Rješenje:** 
    - Prebačen na `getWina()` iz `wineApi.ts` (Payload CMS API)
    - Dodan `lastmod` za svaki URL (koristi `updatedAt` iz CMS-a)
    - Dodani `hreflang` alternate linkovi za HR/EN verzije vina
    - Dodan `xmlns:xhtml` namespace
    - Dodan `charset=utf-8` u Content-Type header
    - Uklonjena neiskorištena `escapeXml()` funkcija

#### Welcome.astro — Brisanje starter komponente
- **Problem:** Default Astro "Welcome" komponenta s tutorijalom — nije dio projekta
- **Rješenje:** Obrisana `src/components/Welcome.astro` + unused asseti (`astro.svg`, `background.svg`)

#### TypeScript Cleanup — Unused imports/variables
- `MultiWineSelector.astro` — uklonjen unused `Image` import
- `RichText.astro` — `className` prefixan s `_` za unused warning suppression
- `WineRadarChart.astro` — `_p` umjesto `p` u map callbackovima
- `Layout.astro` — uklonjeni unused `Image` i `logo` importi
- `[lang]/index.astro` — uklonjeni unused `getLangFromUrl` i `heroRoute`
- `[lang]/vina/[...slug].astro` — uklonjen unused `VALID_LANGS`, uklonjen `themeColor` prop s WineNutrition komponente
- `Navigation.astro` — uklonjeni `as Node` castovi (nisu podržani u inline `<script>`)
- `WineCarousel.astro` — touch event type fixes (`Event` cast, `HTMLElement` za style)

---

### 13. Finalni git i tsconfig fixovi (07.05.2026 - popodne)
- **Git Commit**: Napravljeni commitovi za sve današnje promjene u oba repozitorija (`mrgudic-bura-vina` i `mrgudic-cms`).
- **tsconfig.json Optimization**:
    - Riješeni "File not found" errori za obrisane datoteke (`Welcome.astro`, `en/index.astro`, `hr/index.astro`).
    - `include` pattern promijenjen iz `**/*` u `src/**/*` radi sprječavanja uključivanja nepotrebnih datoteka iz korijena i bržeg rada TypeScripta.
- **Validacija**: Ponovni `npm run build` potvrđuje da je projekt stabilan i da su svi tipovi ispravno regenerirani nakon refaktoriranja ruta.

---

**Status:** ✅ CMS UI Refactor | ✅ Frontend Fallback | ✅ TypeScript Types Updated | ✅ RichText Full Lexical | ✅ Markdown Migration | ✅ RichText Bug Fixed | ✅ Bulk Seed | ✅ Env Konfiguracija | ✅ Region Fix | ✅ WineCard Nutrition | ✅ WineCard i18n | ✅ WineCard ?? operator | ✅ index prerender fix | ✅ Image src type safety | ✅ Array sort fix | ✅ aria-hidden SVGs | ✅ EN transition:name | ✅ RSS XML escaping | ✅ RSS all wines | ✅ RSS pubDate | ✅ P3 Unified Index | ✅ P7 CMS_URL env | ✅ P8 Fetch timeout | ✅ P9 lang validation | ✅ Non-priority fixes | ✅ tsconfig cleanup | ✅ ePodrum tab | ✅ EU nutrition 7-row | ✅ godiste/year fallback | ✅ objavljeno/featured | ✅ 0 errors 0 warnings 0 hints

---

### 14. ePodrum + Puna EU Nutricija — v2.9.0 — Senior Review Notes (07.05.2026)

#### Arhitektonski Kontekst
Ova iteracija rješava tri zahtjeva: (1) pojednostaviti CMS unos za krajnjeg korisnika (Boris), (2) uskladiti nutritivne tablice s EU Uredbom 1169/2011, (3) razdvojiti koncepte "vidljivosti" i "istaknutosti" vina.

#### CMS Schema Promjene (mrgudic-cms repo)

**Novi tab: "ePodrum (Brzi unos)"**
- Pozicioniran kao **prvi tab** u Vina.ts — Borisovo primarno radno okruženje
- Sadrži esencijalna polja za brzi unos: `naziv`, `godiste` (select), `year` (auto-hook), `slika`, `opis`
- `godiste`: select s opcijama 2024-2028, default "2025". String tip umjesto number jer je godina primarno label, ne brojčani podatak
- `year` hook: `beforeValidate` parsira `godiste` u number — omogućuje sortiranje i fallback compat s postojećim kodom koji koristi `wine.year`
- `naziv_puni` hook: ažuriran iz `${data.year}` na `${data.godiste || data.year}`

**Tab deduplikacija:**
- `opis`, `category_title`, `sort` prebačeni iz "Opis i Karakteristike" u "ePodrum"/"Osnove"
- "Opis i Karakteristike" sada sadrži samo: `karakter`, `aromas`, `technicals`

**`objavljeno` vs `featured` — dva nezavisna koncepta:**
| Polje | Svrha | Default | Pozicija |
|-------|-------|---------|----------|
| `objavljeno` | Vidljivost na webu (wine detail page accessible) | `false` | sidebar |
| `featured` | Pojavljivanje na homepage carouselu | `false` | sidebar |

Ova dva polja su nezavisna. Vino može biti:
- Vidljivo ali ne istaknuto (`objavljeno: true, featured: false`) — standardno stanje
- Istaknuto i vidljivo (`objavljeno: true, featured: true`) — za homepage hero
- Nevidljivo (`objavljeno: false`) — draft/test vino, ne prikazuje se nigdje

**Proširena `nutricija` grupa:**
```typescript
nutricija: {
  energija: 'text',           // "350 kJ / 84 kcal" — ručni unos
  masti: 'number',            // default: 0
  zasicene_masti: 'number',   // default: 0
  ugljikohidrati: 'number',
  seceri: 'number',
  proteini: 'number',         // default: 0
  sol: 'number',              // default: 0
}
```
Redoslijed polja prati EU Uredbu 1169/2011, Annex XV.

#### Frontend Promjene (mrgudic-bura-vina repo)

**`src/types/wine.ts`:**
- Dodan `godiste?: string` — primarni identifier za godište
- `year` postao optional (`year?: number`) — popunjava se automatski iz CMS hooka
- Dodan `objavljeno?: boolean` u POSTAVKE sekciju
- Proširena `nutricija` grupa sa 4 nova polja

**`src/components/wine/WineNutrition.astro`:**
- Nutritivna tablica proširena s 3 na 7 redaka
- Vizualna hijerarhija: glavni nutrijenti (bold, white), podnutrijenti (pl-6 indent, white/80)
- Svi numericni prikazi koriste `?? 0` fallback — nula je validna vrijednost za vino
- Energija koristi `|| '-'` jer je string i može biti prazan

**`src/components/WineCard.astro`:**
- Ista struktura kao WineNutrition — 7 redaka, EU redoslijed
- Indentacija za podnutrijente (`pl-4 italic`) — vizualno grupiranje
- Svi `?? 0` fallbackovi konzistentni

**`src/pages/[lang]/index.astro`:**
- Dodan `export const prerender = false` — eksplicitni SSR mode za live CMS update
- Sortiranje: prvo po `godiste` (desc), zatim po `naziv` (alpha)
- `getYear()` helper: `w.godiste ? parseInt(w.godiste, 10) : (w.year ?? 2025)`
- Filter: `objavljeno !== false && featured !== false` — samo objavljeni i istaknuti u carouselu
- Prikaz godine: `wine.godiste || wine.year` — string prioritet

**`src/components/WineCarousel.astro`:**
- Filter: `objavljeno !== false` — neobjavljena vina ne ulaze u carousel
- Prikaz godine: `wine.godiste || wine.year`

**`src/pages/[lang]/vina/[...slug].astro`:**
- Data mapping:
  ```typescript
  year: vino.godiste ? parseInt(vino.godiste, 10) : (vino.year ?? 2025),
  godiste: vino.godiste || (vino.year ? String(vino.year) : '2025'),
  objavljeno: vino.objavljeno ?? vino.featured ?? true,
  ```
- Fallback lanac osigurava da stari CMS podaci (bez godiste) i dalje rade

**`src/content/config.ts`:**
- Zod schema proširena s novim nutricija poljima (optional + default: 0)

**`src/i18n/ui.ts`:**
- HR: `wine.fat` → "Masti", `wine.saturated_fat` → "Od kojih zasićene", `wine.protein` → "Proteini", `wine.salt` → "Sol"
- EN: `wine.fat` → "Fat", `wine.saturated_fat` → "Of which saturates", `wine.protein` → "Protein", `wine.salt` → "Salt"

**`src/data/vina-mock.json`:**
- Sva 8 vina imaju: `godiste: "2025"`, `objavljeno: true`, `featured: true/false`, punu `nutricija` i `analiza`
- Realistični laboratorijski podaci za svako vino

#### Backward Compatibility
| Stari koncept | Novi koncept | Fallback |
|---------------|--------------|----------|
| `wine.year` (number) | `wine.godiste` (string) | `parseInt(godiste) \|\| year` |
| `featured` (jedan status) | `objavljeno` + `featured` | `objavljeno ?? featured ?? true` |
| 3 nutricija polja | 7 nutricija polja | `?? 0` za sva nova |
| `year` required | `year` optional (CMS hook) | `year ?? 2025` |

#### Validacija
- `npx astro check`: **0 errors, 0 warnings, 0 hints** (27 files)
- TypeScript strict mode: svi novi tipovi propisno definirani
- Zod schema: optional + default za sva nova nutricija polja
- CMS hook: `beforeValidate` za godiste → year konverziju

#### CMS Repo Status
- Commit `edd01d6` lokalno (`mrgudic-cms` repo)
- Push na GitHub nije izvršen (repo nije public/upstream nije postavljen)
- Git diff: `+119 -20` linija u `src/collections/Vina.ts`

#### Frontend Repo Status
- Commit `785bea5` pushan na `origin/main`
- Verzija: **2.9.0**
- Git diff: `+340 -42` linija (13 datoteka)
