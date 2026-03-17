# Mrgudić Bura Vina — Release Notes v1.1.0

**Verzija:** 1.1.0  
**Datum:** 17.03.2025  
**Status:** ✅ Released

---

## Što je novo

### 🚀 EU E-etiketa
Potpuna usklađenost s EU zakonima o informacijama o hrani za vino:

| Feature | Opis |
|---------|------|
| Nutritivna tablica | Energija, masti, šećeri, bjelančevine, sol (na 100ml) |
| Alergeni | Obavezno isticanje (Sulfiti) |
| Sastojci | Popis sastojaka (Grožđe, Sulfiti) |
| Info o recikliranju | Poruka o zbrinjavanju boce |

### 📦 Batch podrška
Praćenje serija vina preko URL-a:
```
/hr/vina/marica?batch=17/b1
```

### 🎨 Nova Color Palette
Ažurirana paleta s luksuznim izgledom:

| Boja | HEX | Usage |
|------|-----|-------|
| Dark | `#242021` | Pozadina |
| Gold | `#A18E68` | Naslovi |
| Muted Gold | `#65584D` | Obrubi |
| Text Light | `#E3E1D4` | Tekst |

---

## Promjene u kodu

### src/content/config.ts
```typescript
{
  name: string,
  producer: string,
  bottler: string,
  region: string,
  category: string,
  year: string,
  alcohol: string,
  ingredients: string,
  allergens: string,
  nutrition: { energy, carbs, sugars, protein, salt },
  recycling: string,
  batches: string[]
}
```

### src/components/WineCard.astro
- EU nutritivna tablica
- Batch prikaz
- Nove Bura boje (`bg-bura-dark-800`, `text-bura-gold-500`, itd.)

### src/pages/[lang]/vina/[...slug].astro
- Catch-all ruta
- Batch preko query params

---

## Build

```
npm run build
→ 16 stranica
```

## Deploy

```bash
docker build -t mrgudic-bura .
docker run -p 80:80 mrgudic-bura
```

---

## Popis vina

| Vino | Batchevi |
|------|----------|
| Marica | 17/b1, 17/b2 |
| Mare | 17/b1 |
| Bura | 17/b1 |
| Dingač | 17/b1 |
| Galerija | 17/b1 |

---

## Bugfixes

- Uklonjen neiskorišteni import u 404 stranici
- Popravljen RSS feed za nove fieldove

---

## Sljedeće verzije (TODO)

- [ ] Generiranje QR kodova
- [ ] Blockchain integracija (Algorand)
- [ ] Admin panel za upravljanje vinima
