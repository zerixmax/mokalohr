# Release Notes v2.2.0: CMS Ready Architecture
**Datum:** 19. ožujka 2026.  
**Tim:** Lead Architect z3r1x & Gemini AI

## 🚀 Pregled
Verzija 2.2.0 označava transformaciju projekta u skalabilnu platformu. Sadržaj se više ne uređuje u kodu, već putem profesionalnog sučelja.

## ⚙️ Tehničke Promjene
- **Backend:** Payload CMS 3.0 integriran.
- **Baza Podataka:** **SQLite** (`payload.db`) - omogućuje zero-maintenance i brzinu.
- **Data Seeding:** Napisana skripta `src/seed.ts` koja je automatski prenijela 100% sadržaja iz Markdown datoteka u bazu.
- **Rebranding Admina:** Kolekcija vina preimenovana u **"VINA ASORTIMAN"** za bolji UX administratora.
- **Multi-Lot Support:** Arhitektura spremna za praćenje različitih serija (lotova) istog vina s jedinstvenim lab nalazima.

## 📁 Struktura Projekta
1. `/mokalohr` (Astro Frontend) - Verzija 2.2.0
2. `/mrgudic-cms` (Payload CMS Backend) - Verzija 1.0.0 (Initial CMS Release)

## ✅ Build & Test status
- **Frontend Build:** 🟢 PASSED
- **CMS Build:** 🟢 PASSED
- **DB Integrity:** 🟢 VERIFIED (Sva vina uspješno uvezena)

---
**Status:** Spreman za produkcijsko spajanje API-ja.
