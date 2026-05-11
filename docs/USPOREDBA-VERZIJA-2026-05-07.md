# Usporedba Verzija: v2.7.7 (Live) vs v2.9.0 (Lokalno)

**Datum:** 07.05.2026
**Autor:** Gemini AI (Senior)
**Svrha:** Dokumentirati razlike između produkcije i lokalne verzije za budući deploy

---

## 1. Pregled Verzija

| Verzija | Commit | Status |
|---------|--------|--------|
| **v2.7.7** | `83c0834` | ✅ LIVE na webu (mokalo.hr) |
| **v2.8.0** | `04e4f7b` | ⬜ Lokalno — non-priority fixes |
| **v2.9.0** | `785bea5` | ⬜ Lokalno — ePodrum + EU nutricija |

Ukupno: **4 commita** između produkcije i lokalne verzije.

---

## 2. Detaljne Razlike po Komponentama

### CMS (mrgudic-cms repo)
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| Tab "ePodrum" | ❌ Nema | ✅ Prvi tab, brzi unos |
| `godiste` field | ❌ Nema | ✅ Select 2024-2028 |
| `year` auto-hook | ❌ Nema | ✅ beforeValidate |
| `objavljeno` vs `featured` | ❌ Jedan status | ✅ Dva nezavisna |
| Proširena `nutricija` | ❌ 3 polja | ✅ 7 polja (EU 1169/2011) |

### Frontend - WineCard
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| Nutricija | 3 retka | 7 redaka (EU redoslijed) |
| Lab analiza | ❌ Nema | ✅ suhi_ekstrakt, kiselost, SO2 |
| EU allergen badge | ❌ Nema | ✅ ⚠️ crveni border |
| i18n | Ternariji | `t()` funkcija |
| Null guardovi | ❌ Nema | ✅ `?? 0` fallbackovi |

### Frontend - WineNutrition
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| Redovi | 3 | 7 |
| Polja | energija, carbs, sugars | +masti, zasićene, proteini, sol |
| Vizualna hijerarhija | ❌ | ✅ indent za podnutrijente |

### Frontend - Index Stranica
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| File struktura | `/hr/index.astro` + `/en/index.astro` | `/[lang]/index.astro` |
| Sortiranje | Nije definirano | Po `godiste` (desc) + `naziv` (alpha) |
| Filter carousel | Nema | `objavljeno !== false` |
| SSR mode | Implicitan | `prerender = false` |

### Frontend - Ostalo
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| RichText komponenta | ❌ Nema | ✅ Lexical JSON renderer |
| `wineApi.ts` timeout | ❌ Nema | ✅ 5s AbortController |
| `trailingSlash` | ❌ Nije postavljen | ✅ `trailingSlash: 'never'` (UKLONJENO rollbackom!) |
| sitemap.xml | `astro:content` | Payload CMS API + lastmod + hreflang |
| RSS XML | Bez escaping | `escapeXml()` + sve vina + `pubDate` |

### Tipovi i Sheme
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| `wine.ts` | Stari interface | Novih +104 linija (analiza, nutricija, godiste) |
| Zod schema | Osnovna | Proširena (optional + default: 0) |
| Mock data | ~7 vina | 8 vina s punim nutricija/analiza |
| i18n UI | Manje ključeva | +22 nova ključa (wine.fat, protein, salt...) |

### Scriptovi i Config
| Komponenta | 2.7.7 | 2.9.0 |
|------------|-------|-------|
| Bulk seed | ❌ Nema | ✅ `scripts/seed-new-wines.mjs` |
| `.env.example` | Osnovni | +CMS_ADMIN_EMAIL, CMS_ADMIN_PASSWORD |
| `tsconfig.json` | `**/*` | `src/**/*` (brži TS) |

---

## 3. Brojke

| Metrika | 2.7.7 | 2.9.0 | Promjena |
|---------|-------|-------|----------|
| Git diff | — | — | +1861 linija, -654 linija |
| Izmijenjene datoteke | — | — | 44 datoteke |
| TypeScript errors | 0 | 0 | ✅ |
| Nova vina u mock | ~7 | 8 | +1 |
| Novi npm scriptovi | — | `seed:wines` | +1 |

---

## 4. Što NIJE na Produkciji (Deploy Checklist)

- [ ] CMS: ePodrum tab (mrgudic-cms repo)
- [ ] CMS: godiste, year hook, objavljeno/featured
- [ ] CMS: proširena nutricija (7 polja)
- [ ] Frontend: WineCard s EU nutrijentima
- [ ] Frontend: WineNutrition 7 redaka
- [ ] Frontend: RichText komponenta
- [ ] Frontend: Konsolidirani `/[lang]/index.astro`
- [ ] Frontend: wineApi.ts timeout
- [ ] Frontend: sitemap.xml rewrite
- [ ] Frontend: RSS XML escaping
- [ ] Frontend: TS tipovi + Zod schema
- [ ] Frontend: Bulk seed skripta
- [ ] Frontend: `.env.example` update
- [ ] Frontend: `tsconfig.json` fix

---

## 5. Što je UKLONJENO Rollbackom (treba ponovno dodati)

| Komponenta | Status | Napomena |
|------------|--------|----------|
| `trailingSlash: 'never'` | ❌ Uklonjeno | Bilo u v2.9.1, rollback vratilo |
| Mock fallback u `[...slug].astro` | ❌ Uklonjeno | Bilo u v2.9.1 |
| `[lang]/404.astro` | ❌ Uklonjeno | Vraćeno na root `/404` |
| Lang-prefixed redirectovi | ❌ Uklonjeno | Vraćeno na `/404` |

---

## 6. Zaključci i Preporuke za Sljedeći Dan

### Što Funkcionira (v2.7.7 na produkciji)
- QR kodovi rade
- Osnovni prikaz vina
- i18n routing
- PWA offline

### Što Treba Deployati (v2.9.0)
1. **Prvo CMS repo** (mrgudic-cms) — ePodrum tab, nova polja
2. **Zatim frontend** (mrgudic-bura-vina) — prilagođen novim CMS poljima
3. **Testirati** QR kodove nakon deploya

### Što Izbjegavati
- ❌ Ne dodavati admin panel u frontend
- ❌ Ne mijenjati slugove postojećih vina
- ❌ Ne miješati headless principe

### Prioriteti za Sutra
1. ✅ `trailingSlash: 'never'` — vratiti u astro.config.mjs
2. ✅ Mock fallback u `[...slug].astro` — vratiti za CMS down
3. ✅ CMS deploy — ePodrum tab + nova polja
4. ✅ Frontend deploy — v2.9.0 (sve osim admin panela)

---

**Napomena:** Admin panel (v3.0.0) je trajno uklonjen. Upravljanje vinima se vrši isključivo kroz Payload CMS sučelje.
