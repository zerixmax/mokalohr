# Mrgudić Bura Vina - Projektna Dokumentacija

## Pregled Projekta
Ovaj projekt je "Coming Soon" (Uskoro) web stranica za **Mrgudić Bura Vina**. Stranica služi kao elegantna, privremena destinacija (landing page) dok se razvija puna web stranica.

## Tehnički Stack
- **Framework:** [Astro](https://astro.build/) (verzija 4.x - kompatibilnost s Node.js v20)
- **Styling:** Vanilla CSS (klasični CSS bez vanjskih biblioteka, fokus na performanse i specifičan dizajn)
- **Tipografija:** Google Fonts
  - *Playfair Display* (za elegantne naslove i izdvajanje brenda)
  - *Inter* (za moderan i čist osnovni tekst te opise)

## Struktura Projekta
Glavne komponente projekta:
- `src/pages/index.astro`: Glavna i jedina stranica koja sadrži strukturu i CSS stilove.
- `src/assets/`: Sadrži medijske datoteke, uključujući pozadinsku sliku vinograda (`20170303_Mrgudic-Bura-2017_1198.webp`).

## Dizajn i UX
- **Tema:** Tamna (Dark theme) sa zlatnim naglascima (gold accents), odražava premium kvalitetu i prirodu luksuznog vina.
- **Animacije:** Postepeno otkrivanje elemenata po učitavanju stranice (Image fade-in, slide-up teksta, animirane razdjelne linije) za premium osjećaj.
- **Responzivnost:** Stranica je u potpunosti prilagođena mobilnim i desktop uređajima pomoću media queryja funkcija, kao i CSS `clamp()` metoda za veličine slova.

## Lokalni Rad i Pokretanje (Development)

Za pokretanje projekta na lokalnom računalu:

1. Otvorite repozitorij/direktorij u terminalu:
   ```bash
   cd /home/z3r1x/Dokumenti/Mokalo26/mrgudic-bura-vina
   ```
2. Instalirajte ovisnosti (ako već nisu):
   ```bash
   npm install
   ```
3. Pokrenite razvojni lokalni server:
   ```bash
   npm run dev
   ```

## Build (Produkcija)

Za generiranje statičnih datoteka za objavu (production build):
```bash
npm run build
```
Ovo će kompilirati sve Astro komponente, optimizirati slike i generirati `dist/` direktorij koji je spreman za postavljanje na hosting.
