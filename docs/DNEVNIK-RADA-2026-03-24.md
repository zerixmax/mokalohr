# Dnevnik Rada: Mrgudić-Bura Vina - CMS API & Dark Theme Revizija
**Datum:** 24. ožujka 2026.
**Verzija:** 2.6.0
**Lead Architect:** z3r1x
**AI Assistant:** Antigravity

---

## 📋 Sažetak Dana

Dana 24. ožujka 2026. izvršena je kompletna revizija CMS API integracije, implementiran Wine Carousel, provedena tamna tema revizija cijele stranice, te ispravljen prikaz Boris LOT-a.

---

## 🔧 Detalji Promjena

### 1. CMS API Integracija

#### Problem
- Vino "Mare" nedostajalo u navigaciji (koristila lokalni content umjesto CMS API)
- Navigacija i stranica koristile različite izvore podataka

#### Rješenje
- Kreiran `src/utils/wineApi.ts` utility sa CMS API fetch-om
- Kreiran `src/data/vina-mock.json` za offline razvoj (fallback)
- Navigacija sada koristi `getWina()` umjesto `getCollection()`

---

### 2. Wine Carousel Komponenta

**Novi fajl:** `src/components/WineCarousel.astro`

Karakteristike:
- Automatska rotacija (5 sekundi)
- Navigacijske strelice (← →)
- Točkice indikator (●●●●○○○○)
- Pauzira na hover
- Touch podrška za mobilne
- Dinamičke boje ovisno o kategoriji vina

---

### 3. Dark & Gold Tema Revizija

#### global.css
- Dodane Tailwind varijable za gold paletu:
  - `--color-bura-gold-500: #b8860b`
  - `--color-bura-gold-400: #d4a017`
  - `--color-bura-gold-600: #8b6508`

#### Navigacija (Navigation.astro)
- Logo zamijenjen tekstom "MRGUDIĆ BURA" (zlatna boja)
- Pozadina: `bg-bura-dark-bg/95`
- Border: `border-bura-gold-500/20`
- Linkovi: bijeli sa zlatnim hover efektom
- Mobilni meni: pojednostavljen dropdown ispod headera
- Amare Gold skriven iz navigacije (`hiddenSlugs`)
- LanguagePicker: vidljiviji na tamnoj pozadini (zlatni border)

#### Početna Stranica (hr/index.astro, en/index.astro)
- Hero sekcija: tamna pozadina sa zlatnim elementima
- Horizontalne linije između sekcija (`via-bura-gold-500/50`)
- Wine Grid kartice: `bg-bura-dark-paper` sa zlatnim borderom

#### Footer (Footer.astro)
- Logo uklonjen
- Tamna pozadina (`bg-bura-dark-bg`)
- Brand tekst: "MRGUDIĆ BURA" (zlatna boja)
- Copyright: "Mokalo d.o.o."
- Svi tekstovi prilagođeni tamnoj temi

#### BackToTop Gumb
- Zlatna boja sa glow efektom
- Animacije: float-up i pulse-glow
- Vidljiviji na tamnoj pozadini

#### Stranica Vina ([...slug].astro)
- Kompletna tamna tema (`bg-bura-dark-bg`)
- Info kartica: tamna pozadina sa zlatnim borderom
- Svi tekstovi: bijeli na tamnoj pozadini
- Logotipovi zamijenjeni tekstom "MRGUDIĆ BURA"
- Uklonjena svijetla pozadina (natural-paper tekstura)

#### WineNutrition Komponenta
- Tamna pozadina (`bg-bura-dark-bg/80`)
- Svi tekstovi prilagođeni tamnoj temi

---

### 4. Boris LOT Prikaz

#### Problem
- Prikazivao se LOT iz URL-a (`25-b1`) umjesto Borisovog LOT-a

#### Rješenje
```javascript
// PRIJE
const batch = batchFromUrl || (data as any).batches?.[0] || null;

// POSLIJE
const batch = ((data as any).boris_lot || batchFromUrl || null);
```

**Prioritet prikaza:**
1. `boris_lot` iz CMS-a (ako Boris upiše)
2. `batchFromUrl` iz URL-a (fallback)
3. Prazno (ako nema ništa)

**Prikaz na stranici:**
- Label: "LOT - Oznaka serije (Boris LOT)"
- Vrijednost: npr. "LOT04022025"

---

### 5. URL Struktura

| Jezik | URL format | Primjer |
|-------|------------|---------|
| HR | `/hr/vina/[slug]` | `/hr/vina/mare` |
| EN | `/en/wine/[slug]` | `/en/wine/mare` |

---

## 📁 Izmjenjeni/Novi Fajlovi

| Fajl | Akcija |
|------|--------|
| `src/data/vina-mock.json` | **NOVI** |
| `src/utils/wineApi.ts` | **NOVI** |
| `src/types/wine.ts` | **NOVI** |
| `src/components/WineCarousel.astro` | **NOVI** |
| `src/components/Navigation.astro` | **UREĐEN** |
| `src/components/Footer.astro` | **UREĐEN** |
| `src/components/BackToTop.astro` | **UREĐEN** |
| `src/components/LanguagePicker.astro` | **UREĐEN** |
| `src/components/wine/WineNutrition.astro` | **UREĐEN** |
| `src/pages/hr/index.astro` | **UREĐEN** |
| `src/pages/en/index.astro` | **UREĐEN** |
| `src/pages/[lang]/vina/[...slug].astro` | **UREĐEN** |
| `src/styles/global.css` | **UREĐEN** |

---

## 🚀 Status Okruženja

| Komponenta | Verzija | Status |
|------------|---------|--------|
| Astro | 4.16.15 | 🟢 SSR + Mock Ready |
| Node Adapter | 8.x | 🟢 RUNNING |
| Payload CMS API | - | 🟢 CONNECTED |
| Mock Fallback | Active | 🟢 READY |
| Wine Carousel | v1.0 | 🟢 ACTIVE |
| Dark Theme | v2.0 | 🟢 COMPLETE |

---

## ✅ Izvršeni Zadaci

| Zadatak | Status |
|---------|--------|
| Kreirati vina-mock.json | ✅ |
| Kreirati wineApi.ts utility | ✅ |
| Ažurirati Navigation.astro za CMS API | ✅ |
| Kreirati WineCarousel komponentu | ✅ |
| Integrirati carousel u hr/index.astro | ✅ |
| Integrirati carousel u en/index.astro | ✅ |
| Popraviti tamnu temu kao default | ✅ |
| Dodati horizontalne crte između sekcija | ✅ |
| Ukloniti logo iz navigacije | ✅ |
| Ukloniti logo iz footera | ✅ |
| Pojednostavniti mobilni meni | ✅ |
| Promijeniti EN URL: /vina/ → /wine/ | ✅ |
| Sakriti Amare Gold iz navigacije | ✅ |
| Spojiti dokumentaciju | ✅ |
| Ispraviti Boris LOT prikaz | ✅ |
| Tamna tema za stranice vina | ✅ |
| Poboljšati BackToTop animacije | ✅ |
| Poboljšati LanguagePicker vidljivost | ✅ |
| Copyright: Mokalo d.o.o. | ✅ |

---

**Lead Architect Signature:** z3r1x
**AI Assistant:** Antigravity
**Završeno:** 24.03.2026 u 11:52

---

## 🔄 Nastavak Rada

1. **Deploy na server:** Push na GitHub, deploy na cPanel
2. **Logo:** Kreirati novi logo za brand
3. **Amare Gold:** Aktivirati kad vino bude spremno
4. **Dodatne sekcije:** Winery, About, Contact

---

# Dnevnik Rada: Mrgudić-Bura Vina - Verzija 2.7.0
**Datum:** 25. ožujka 2026.
**Verzija:** 2.7.0
**Lead Architect:** z3r1x
**AI Assistant:** Antigravity

---

## 📋 Sažetak Dana

Dana 25. ožujka 2026. izvršene su finalne UI revizije WineNutrition komponente, uklonjeni duplicirani elementi, te dorada hero sekcije na stranici vina.

---

## 🔧 Detalji Promjena

### 1. WineNutrition Komponenta Revizija

#### Problem
- Sekcije (sastojci, alergeni, analiza) nisu bile konzistentne sa ostalim karticama
- Proizvođač nije bio odvojen

#### Rješenje
- Svaka sekcija ima svoj zasebni kvadrat (`bg-bura-dark-bg/60` pozadina)
- Stil usklađen sa Tehnikalije i Sljubljivanje karticama
- Zlatne linije između sekcija
- Proizvođač na dnu, pune širine

**Struktura:**
```
┌─────────────────┐ ┌─────────────────┐
│   Sastojci      │ │   Alergeni      │
│   (badgeovi)    │ │   ⚠️ Sulfiti    │
└─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐
│ Nutritivna      │ │ Laboratorijska  │
│ Vrijednost      │ │ Analiza         │
└─────────────────┘ └─────────────────┘
┌─────────────────────────────────────┐
│          Proizvođač                 │
│     OPG Mrgudić-Bura                │
└─────────────────────────────────────┘
```

### 2. MultiWineSelector - Uklanjanje Duplikata

#### Problem
- Prikazivao se category_title ispod imena vina (duplikat)

#### Rješenje
- Uklonjen `p` tag sa `category_title` (linija 47)
- Ostavljeno samo `h2` sa imenom vina

### 3. Hero Sekcija - Čišćenje

#### Uklonjeni elementi:
- ❌ Crveni kvadrat sa tekstom "VINARIJA MRGUDIĆ-BURA"
- ❌ Category_title iznad imena vina
- ❌ Horizontalna crta

#### Zadržani elementi:
- ✅ Ime vina (h2) - veliki font
- ✅ Sorta (podnaslov)
- ✅ Strelice za scroll

---

## 📁 Izmjenjeni Fajlovi

| Fajl | Akcija |
|------|--------|
| `src/components/wine/WineNutrition.astro` | **UREĐEN** |
| `src/components/wine/MultiWineSelector.astro` | **UREĐEN** |
| `src/pages/[lang]/vina/[...slug].astro` | **UREĐEN** |
| `docs/DNEVNIK-RADA-2026-03-24.md` | **AŽURIRAN** |

---

## ✅ Izvršeni Zadaci

| Zadatak | Status |
|---------|--------|
| WineNutrition - svaki sastojak u zasebnom kvadratu | ✅ |
| WineNutrition - laboratorijska analiza uključena | ✅ |
| WineNutrition - proizvođač odvojen zlatnom linijom | ✅ |
| WineNutrition - sulfiti bijelim fontom | ✅ |
| MultiWineSelector - uklonjen duplikat category_title | ✅ |
| Hero sekcija - uklonjen crveni kvadrat | ✅ |
| Hero sekcija - uklonjen category_title iznad imena | ✅ |
| Hero sekcija - uklonjena horizontalna crta | ✅ |
| Dokumentacija ažurirana | ✅ |
| Verzija podignuta na 2.7.0 | ✅ |

---

## 🚀 Status Okruženja

| Komponenta | Verzija | Status |
|------------|---------|--------|
| Astro | 4.16.15 | 🟢 SSR + Mock Ready |
| Node Adapter | 8.x | 🟢 RUNNING |
| Payload CMS API | - | 🟢 CONNECTED |
| Dark Theme | v2.7 | 🟢 COMPLETE |

---

**Lead Architect Signature:** z3r1x
**AI Assistant:** Antigravity
**Završeno:** 25.03.2026 u 14:37

---

## 🔄 Sljedeći Koraci

1. **Testiranje:** Pokrenuti `npm run preview` za vizualni pregled
2. **Deploy:** Push na GitHub, deploy na cPanel
3. **Final QA:** Provjeriti sve stranice vina na mobilnom i desktopu

---

# Dnevnik Rada: Mrgudić-Bura Vina - Verzija 2.8.0
**Datum:** 30. ožujka 2026.
**Verzija:** 2.8.0
**Lead Architect:** z3r1x

---

## 📋 Sažetak Dana

Dana 30. ožujka 2026. dodane su redirekcije za stare QR kodove kako bi se osiguralo da postojeći QR kodovi na bocama ne "pucaju".

---

## 🔧 Detalji Promjena

### 1. Redirekcije u astro.config.mjs

**Fajl:** `astro.config.mjs` (ažuriran)

Redirekcije za stare QR URL-ove (HR + EN):

```javascript
redirects: {
  '/QRvina/buraplavac.html': '/hr/vina/bura-plavac',
  '/QRvina/burarukatac.html': '/hr/vina/rukatac',
  '/en/QRvina/buraplavac.html': '/en/wine/bura-plavac',
  '/en/QRvina/burarukatac.html': '/en/wine/rukatac',
},
```

**Napomena:** Samo 2 vina imaju stare QR kodove - Bura Plavac i Bura Rukatac. Ostala vina nemaju stare QR-ove.

---

## 📁 Izmjenjeni Fajlovi

| Fajl | Akcija |
|------|--------|
| `astro.config.mjs` | **UREĐEN** |

---

## ✅ Izvršeni Zadaci

| Zadatak | Status |
|---------|--------|
| Dodati redirects za sva vina | ✅ |
| Testirati build | ✅ |
| Dokumentirati promjene | ✅ |

---

## 🚀 Status Okruženja

| Komponenta | Verzija | Status |
|------------|---------|--------|
| Astro | 4.16.15 | 🟢 SSR |
| Build | 2.8.0 | 🟢 SUCCESS |
| Redirekcije | v1.0 | 🟢 ACTIVE |

---

**Lead Architect Signature:** z3r1x
**Završeno:** 30.03.2026 u 11:40

---

### 2. Dodavanje polja "Regija/Vinogorje" u CMS

**Fajl:** `mrgudic-cms/src/collections/Vina.ts`

Dodano novo obavezno polje u tab "Laboratorij (EU)":

```typescript
{
  name: 'region',
  type: 'text',
  required: true,
  localized: true,
  label: 'Regija / Vinogorje',
  admin: {
    placeholder: 'npr. Srednja i Južna Dalmacija, Pelješac',
  },
},
```

**Napomena:** Region je obavezan EU podatak za e-etikete.

---

## 🔄 Planirano za idući krug

| Zadatak | Prioritet | Status |
|---------|-----------|--------|
| Prikazati region u frontend-u | Visok | ✅ GOTOVO |
| SEO meta tagovi iz CMS-a | Srednji | ⏳ |
| Optimizacija slika (sharp) | Nizak | ⏳ |

---

## 🔄 Sljedeći Koraci

1. **Deploy:** Push na GitHub, deploy na server
2. **Testiranje:** Provjeriti redirekcije putem starog QR koda

---

# Dnevnik Rada: Mrgudić-Bura Vina - Verzija 2.8.0 (Nastavak)
**Datum:** 30. ožujka 2026. (Popodne)
**Verzija:** 2.8.0
**Lead Architect:** z3r1x

---

## 📋 Sažetak

Dana 30. ožujka 2026. popodne izvršene su finalne izmjene prije deploya.

---

## 🔧 Detalji Promjena

### 1. Ispravljeni stari QR URL-ovi

**Fajl:** `astro.config.mjs`

```javascript
redirects: {
  // Povezujemo TOČAN stari link s TOČNIM novim linkom
  '/QRvina/buraplavac.html': '/hr/vina/bura-plavac-2024',
  '/QRvina/RukatacBura.html': '/hr/vina/bura-rukatac-2024',

  // Isto i za engleski (da i strancima radi scan)
  '/en/QRvina/buraplavac.html': '/en/vina/bura-plavac-2024',
  '/en/QRvina/RukatacBura.html': '/en/vina/bura-rukatac-2024',
},
```

---

### 2. Poboljšana vidljivost verzije u footeru

**Fajl:** `src/components/Footer.astro`

```html
<!-- PRIJE -->
<p class="text-[10px] text-bura-gold-500/40 font-mono...">v{currentVersion}</p>

<!-- POSLIJE -->
<p class="text-[10px] text-white/50 font-mono...">v{currentVersion}</p>
```

---

### 3. Fiksni prikaz regije (bez CMS polja)

**Fajl:** `src/pages/[lang]/vina/[...slug].astro`

```javascript
// Fiksni prijevod regije (ne ovisi o CMS-u)
const regionValue = isHR ? 'Srednja i Južna Dalmacija' : 'Central and South Dalmatia';
```

**Napomena:** Odlučeno je koristiti fiksne vrijednosti umjesto CMS polja jer je regija uvijek ista za sva vina.

---

### 4. Verzija ažurirana

**Fajl:** `src/data/versions.json`
- Verzija: `2.7.5` → `2.7.6`

---

### 5. CMS Cleanup

**Fajl:** `mrgudic-cms/src/collections/Vina.ts`

Uklonjeno polje `region` jer se koriste fiksne vrijednosti u frontend-u.

---

## 📁 Izmjenjeni Fajlovi

| Fajl | Akcija |
|------|--------|
| `astro.config.mjs` | **UREĐEN** - redirekcije |
| `src/components/Footer.astro` | **UREĊEN** - vidljivost verzije |
| `src/pages/[lang]/vina/[...slug].astro` | **UREĐEN** - fiksna regija |
| `src/data/versions.json` | **UREĐEN** - verzija 2.7.6 |
| `mrgudic-cms/src/collections/Vina.ts` | **UREĐEN** - uklonjen region |

---

## ✅ Izvršeni Zadaci

| Zadatak | Status |
|---------|--------|
| Ispraviti stari URL format (buraplavac.html, RukatacBura.html) | ✅ |
| Dodati EN redirekcije | ✅ |
| Poboljšati vidljivost verzije u footeru | ✅ |
| Implementirati fiksni prikaz regije | ✅ |
| Build test | ✅ |
| Dokumentacija ažurirana | ✅ |

---

## 🚀 Status Okruženja

| Komponenta | Verzija | Status |
|------------|---------|--------|
| Astro | 4.16.15 | 🟢 SSR |
| Build | 2.7.6 | 🟢 SUCCESS |
| Redirekcije | v2.0 | 🟢 ACTIVE |

---

**Lead Architect Signature:** z3r1x
**Završeno:** 30.03.2026 u 16:55

---

## 🔄 Sljedeći Koraci

1. **Deploy frontend:** Push na GitHub, deploy na server
2. **Testiranje:** Provjeriti redirekcije putem starog QR koda
   - `/QRvina/buraplavac.html` → `/hr/vina/bura-plavac-2024`
   - `/QRvina/RukatacBura.html` → `/hr/vina/bura-rukatac-2024`
