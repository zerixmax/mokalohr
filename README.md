# Mrgudić Bura Vina — QR Landing Sustav

![Mrgudić Bura Vina](public/favicon.svg)

Digitalna prisutnost vinarije i pametni QR sustav izgrađen na modernoj i brzoj tehnologiji za ugodno iskustvo čak i pod najslabijim mobilnim signalom.

## 🚀 Tehnološki Stack
- **Framework:** [Astro 4.x](https://astro.build/) - Mobile-first Static Site Generation (SSG).
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/) - Potpuno novi mehanizam s ugrađenom @theme podrškom.
- **Podaci (DB):** Zod-bazirane Markdown kolekcije za svaki artikl.
- **Višejezičnost (i18n):** Ugrađeni hr/en prevodi i rutiranje.

## 📂 Pisanje Novih Vina (Sadržaja)

Zahvaljujući Astro Content Collections i Zod shemama, dodavanje novih vina je sigurno i jednostavno.

1. Otvorite repozitorij (`src/content/vina/hr/` za hrvatski, `src/content/vina/en/` za engleski).
2. Napravite novu `.md` datoteku s imenom vina (npr. `bura.md`).
3. Zalijepite potrebne podatke koristeći istu strukturu kao i za `marica.md`:

```yaml
---
name: Bura
tagline: Moćan Dingač
description: ...
image: ../../../assets/slika-boce.webp
alcohol: 14.5%
grape: Plavac Mali 100%
tastingNotes:
  - Snažan karakter
  - Note zrelih trešanja
pairing: Crveno meso sa žara.
---
```
*Napomena:* Zod shema osigurava da će `npm run build` prijaviti grešku ako fali neki od obaveznih podataka.

## 💻 Razvoj (Lokalno)

Za rad na lokalnom računalu s Node v20.x:

1. **Instalacija ovisnosti:**
   ```bash
   npm install
   ```

2. **Pokretanje razvojnog servera:**
   ```bash
   npm run dev
   ```
   *Otvorite `http://localhost:4321` u pregledniku. Ažuriranja će se vršiti u stvarnom vremenu.*

## 🏗️ Produkcija i Build

Prije nego što kod ide "live", odnosno na vaš Docker/Nginx server:

1. **Testiranje Builda:**
   ```bash
   npm run build
   ```
   *Ova komanda generira sve statične `.html` datoteke, optimizira slike (WebP) i provjerava vaš Markdown kod na greške unutar direktorija `dist/`.*

## 🌍 O projektu
- Više na službenoj web stranici: [mokalo.hr](https://mokalo.hr)
- Dizajnirano za Mobile-First QR očitavanje direktno iz vinograda/restorana.
