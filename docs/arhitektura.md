# Mrgudić Bura Vina — Digitalna Prisutnost i QR Sustav

<p align="left">
<a href="https://mokalo.hr">
<img src="../src/assets/mrgudic-logo-gold.webp" alt="Mrgudić Bura Vina Logo" width="300">
</a>
</p>

[mokalo.hr](https://mokalo.hr) 
🍷 **Status Projekta**
- **Faza:** V1 - QR Landing Stranice & Višejezični Temelj
- **Produkcija:** Pre-Launch (Docker / Nginx)

---

## 🏗️ Tehnološka Arhitektura

Projekt je izgrađen na modernom *tech stacku* s fokusom na ekstremne performanse (Zero-JS), besprijekoran SEO i robusnu višejezičnu infrastrukturu. Dizajniran je "Mobile-First" kako bi omogućio trenutno učitavanje pri skeniranju QR kodova s vinskih etiketa izravno u vinogradu ili restoranu.

| Sloj | Tehnologija |
|---|---|
| **Framework** | [Astro 5.x](https://astro.build/) — Static Site Generator |
| **Styling** | [Tailwind CSS 4.x](https://tailwindcss.com/) — Next-gen CSS motor |
| **Tipografija** | Playfair Display (Naslovi/Premium dojam) + Inter Variable (Tehnički podaci) |
| **Sadržaj** | Astro Content Collections (Markdown + Zod schema za vina) |
| **i18n** | Native Astro i18n (HR + EN) s pametnim mapiranjem ruta |
| **Infrastruktura** | Docker (Multi-stage build) + Nginx Alpine |

## ✨ Ključne Značajke

### 🍇 QR Landing Sustav (Dynamic Routing)
Optimizirane ulazne stranice prilagođene za sljedeća vina:
- **Marica** (Plavac mali)
- **Mare** (Plavac mali)
- **Bura** (Plavac, Rukatac, Sivi Plavac, Galerija, Dingač)

### 🚀 Performanse i UX
- **Zero-runtime JS:** Minimalni klijentski footprint za rad u uvjetima slabijeg mobilnog signala.
- **Dark & Gold Tema:** Nativna tamna tema sa zlatnim naglascima koja vizualno komunicira luksuz i tradiciju.
- **Fluidna Responzivnost:** Tailwnd konvencije i CSS `clamp()` za savršen prikaz na svim mobilnim uređajima.

### 🔍 Višejezičnost i SEO
- **Struktura Ruta:** `/hr/vina/[slug]` i `/en/vina/[slug]`.
- **Hreflang & Meta:** Dinamičko generiranje alternate tagova, `og:image` (slike boca) i SEO opisa putem Zod frontmatter validacije.

## 📁 Struktura Projekta

```text
src/
├── assets/             ← Optimizirane slike boca i vinograda (.webp)
├── components/         ← Atomski UI (WineCard, LanguagePicker, Footer)
├── content/            
│   └── vina/           ← Markdown baze podataka (Zod validacija)
│       ├── hr/         ← Hrvatski opisi (marica.md, dingac.md...)
│       └── en/         ← Engleski opisi (marica.md, dingac.md...)
├── pages/              
│   ├── index.astro     ← i18n preusmjeravanje
│   ├── hr/             ← Hrvatsko stablo
│   └── en/             ← Englesko stablo
└── styles/             ← global.css (Tailwind 4 kuka, @theme varijable)
```
