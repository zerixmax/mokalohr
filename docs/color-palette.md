# Mrgudić Bura Vina — Color Palette

## Pregled

Brand paleta bazirana na zemljanim i zlatnim nijansama koje odražavaju tradiciju vinogradarstva na Pelješcu.

## Paleta

### Tamne Nijanse (Pozadine)

| Ime | HEX | Usage |
|-----|-----|-------|
| `--color-bura-dark-900` | `#242021` | Glavna pozadina, body |
| `--color-bura-dark-800` | `#413E3D` | Kartice, sekcije |

### Zemljane/Brončane

| Ime | HEX | Usage |
|-----|-----|-------|
| `--color-bura-brown` | `#65584D` | Obrubi, dividers |

### Zlatni Naglasci

| Ime | HEX | Usage |
|-----|-----|-------|
| `--color-bura-gold-700` | `#887050` | Hover stanja |
| `--color-bura-gold-500` | `#A18E68` | **Primarna** - naslovi, gumbi |
| `--color-bura-gold-300` | `#BBAA80` | Naglašeni tekst |

### Svijetle Nijanse

| Ime | HEX | Usage |
|-----|-----|-------|
| `--color-bura-light` | `#E3E1D4` | Glavni tekst |

## Legacy Kompatibilnost

| Legacy | Novo |
|--------|------|
| `bg-dark` | `bg-bura-dark-900` |
| `text-gold` | `text-bura-gold-500` |
| `text-text-light` | `text-bura-light` |
| `text-text-muted` | `text-bura-light/70` |
| `border-gold/30` | `border-bura-brown` |

## Korištenje u HTML/Astro

```html
<!-- Pozadina stranice -->
<div class="bg-bura-dark-900">

<!-- Kartica vina -->
<div class="bg-bura-dark-800 border-bura-brown">

<!-- Naslov vina -->
<h2 class="text-bura-gold-500">Bura</h2>

<!-- Tekst -->
<p class="text-bura-light">Opis vina...</p>

<!-- Suptilan tekst -->
<p class="text-bura-light/70">Muted tekst...</p>

<!-- Gumb -->
<button class="bg-bura-gold-500 hover:bg-bura-gold-700 text-bura-dark-900">
  Kupi
</button>
```

## Tailwind Klase

```css
/* Automatski dostupno */
bg-bura-dark-900
bg-bura-dark-800
bg-bura-brown
bg-bura-gold-700
bg-bura-gold-500
bg-bura-gold-300
bg-bura-light

text-bura-dark-900
text-bura-dark-800
text-bura-brown
text-bura-gold-700
text-bura-gold-500
text-bura-gold-300
text-bura-light

border-bura-dark-900
border-bura-dark-800
border-bura-brown
border-bura-gold-700
border-bura-gold-500
border-bura-gold-300
border-bura-light
```

## Primjer - WineCard

```html
<article class="bg-bura-dark-800 border border-bura-brown rounded-lg">
  <h2 class="text-bura-gold-500 font-playfair text-4xl">
    {wine.data.name}
  </h2>
  <p class="text-bura-light/70">{wine.data.description}</p>
</article>
```
