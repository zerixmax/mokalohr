# Mrgudić Bura Vina — Premium QR Landing System
[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01.svg)](https://astro.build)
[![Payload CMS](https://img.shields.io/badge/Payload-3.0-000000.svg)](https://payloadcms.com)
[![Version](https://img.shields.io/badge/Version-2.2.0-800000.svg)](./src/data/versions.json)

Digitalni ekosustav za vrhunska pelješka vina vinarije **Mrgudić-Bura**. Ovaj sustav služi kao interaktivna, višejezična e-etiketa dostupna putem QR kodova na bocama.

---

## 🖋️ Vizija: "Label-First" Identity
Projekt je dizajniran s ciljem da preslika fizički doživljaj držanja vrhunske vinske boce u digitalni format.
- **Autentična podloga:** Tekstura toplog pergamenta i tintni ispis.
- **Premium Tipografija:** *Playfair Display* (Serif) i *Inter* (Sans).
- **Dinamičko bojanje:** Sučelje se automatski prilagođava vrsti vina (Marica-Red, Rukatac-Blue, Amare-Gold).

## 🚀 Tehnološki Stack
- **Frontend:** [Astro 4.x](https://astro.build) — Munjevito brz statički generator.
- **Backend:** [Payload CMS 3.0](https://payloadcms.com) — Headless sustav za upravljanje sadržajem.
- **Baza Podataka:** [SQLite](https://sqlite.org) — Zero-maintenance, visoke performanse čitanja.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) — Moderni, utility-first dizajn.
- **Interaktivnost:** View Transitions API (glatke animacije) i PWA (Offline rad u podrumima).

## ✨ Ključne Značajke
- **Radar Chart (Pauk Grafikon):** Vizualni profil vina (Voćnost, Kiselina, Floralnost, Začini, Tanini).
- **Multi-Lot Support:** Praćenje različitih serija vina s jedinstvenim laboratorijskim nalazima.
- **SEO i i18n:** Strateško mapiranje ruta (`/hr/vina/` vs `/en/wine/`).
- **EU Compliance:** Potpuna podrška za nutritivne tablice i sastojke prema EU regulativi.
- **Hybrid Navigation:** Interaktivni full-screen mobilni meni s vizualnim prikazom boca.

## 🛠️ Razvojni Setup

### Astro Frontend (`/mrgudic-bura-vina`)
```bash
npm install
npm run dev
```

### Payload Backend (`/mrgudic-cms`)
```bash
npm install
npm run dev
```

## 🏁 Milestone & Dokumentacija
- [Finalni Izvještaj Razvoja (Ožujak 2026)](./docs/FINAL-SUMMARY-2026-03-19.md)
- [Dokumentacija Redizajna](./docs/REDIZAJN-2026.md)
- [Arhitektura Baze (SQLite Decision)](./docs/VERSION-2.2-CMS-READY.md)

---
**Lead Architect:** z3r1x  
**Full Stack Execution:** Gemini AI (Senior)  
© 2026 OPG Mrgudić-Bura. Sva prava pridržana.
