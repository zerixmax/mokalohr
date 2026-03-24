# Dnevnik Rada: Mrgudić-Bura Vina - CMS API & Dark Theme Revizija
**Datum:** 24. ožujka 2026.
**Verzija:** 2.6.0
**Lead Architect:** z3r1x
**AI Assistant:** Antigravity

---

## 📋 Sažetak Dana

Dana 24. ožujka 2026. izvršena je kompletna revizija CMS API integracije, implementiran Wine Carousel, te provedena temeljita Dark & Gold tema revizija cijele stranice.

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

#### Početna Stranica (hr/index.astro, en/index.astro)
- Hero sekcija: tamna pozadina sa zlatnim elementima
- Horizontalne linije između sekcija (`via-bura-gold-500/50`)
- Wine Grid kartice: `bg-bura-dark-paper` sa zlatnim borderom

#### Footer (Footer.astro)
- Logo uklonjen
- Tamna pozadina (`bg-bura-dark-bg`)
- Brand tekst: "MRGUDIĆ BURA" (zlatna boja)
- Svi tekstovi prilagođeni tamnoj temi

---

### 4. URL Struktura

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
| `src/pages/hr/index.astro` | **UREĐEN** |
| `src/pages/en/index.astro` | **UREĐEN** |
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

---

**Lead Architect Signature:** z3r1x
**AI Assistant:** Antigravity
**Završeno:** 24.03.2026 u 11:00

---

## 🔄 Nastavak Rada

1. **Deploy na server:** Push na GitHub
2. **Logo:** Kreirati novi logo za brand
3. **Amare Gold:** Aktivirati kad vino bude spremno
4. **Dodatne sekcije:** Winery, About, Contact
