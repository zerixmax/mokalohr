# Mrgudić Bura Vina — Color Palette

## Pregled

Brand paleta bazirana na zemljanim i zlatnim nijansama koje odražavaju tradiciju vinogradarstva na Pelješcu.

## Paleta

| Ime | HEX | Usage |
|-----|-----|-------|
| `--color-dark` | `#242021` | Glavna pozadina |
| `--color-muted-gold` | `#65584D` | Obrubi, mutni tekst |
| `--color-gold` | `#A18E68` | **Primarna** - naslovi, gumbi |
| `--color-text-light` | `#E3E1D4` | Glavni tekst |

## Korištenje u HTML/Astro

```html
<!-- Pozadina stranice -->
<div class="bg-dark">

<!-- Kartica vina -->
<div class="bg-dark border border-muted-gold">

<!-- Naslov vina -->
<h2 class="text-gold">Bura</h2>

<!-- Tekst -->
<p class="text-text-light">Opis vina...</p>

<!-- Gumb -->
<button class="bg-gold hover:opacity-90 text-dark">
  Kupi
</button>
```

## Tailwind Klase

```css
/* Dostupne klase */
bg-dark, bg-muted-gold, bg-gold, bg-text-light
text-dark, text-muted-gold, text-gold, text-text-light
border-dark, border-muted-gold, border-gold, border-text-light
```

## Primjer - WineCard

```html
<article class="bg-dark border border-muted-gold rounded-lg">
  <h2 class="text-gold font-playfair text-4xl">
    {wine.data.name}
  </h2>
  <p class="text-text-light">{wine.data.description}</p>
</article>
```
