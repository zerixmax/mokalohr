# Mrgudić Bura Vina — Release Notes v1.1.1

**Verzija:** 1.1.1  
**Datum:** 18.03.2026  
**Status:** ✅ Released

---

## Što je novo

### 🔧 Popravci i optimizacije

| Feature | Opis |
|---------|------|
| Unificirane boje | Svi CSS klase sada koriste `bura-*` prefiks (bura-dark-900, bura-gold-500, itd.) |
| Site URL | Dodan u astro.config.mjs za ispravan canonical URL |
| robots.txt | Dodan u public/ folder |
| Footer boje | Ažurirane na novi color naming |
| Kontakt email | Promijenjen na `boris@mokalo.hr` |

### 📦 Vina i batchevi

Sva vina sada imaju batch `25/b1` (generirani QR kodovi):
- Bura Dingač
- Bura Galerija
- Bura Plavac
- Bura Rukatac
- Bura Sivi Plavac
- Mare
- Marica

---

## Promjene u kodu

### global.css
```css
@theme {
  --color-bura-dark-900: #1a1718;
  --color-bura-dark-800: #242021;
  --color-bura-gold-500: #a18e68;
  /* itd. */
}
```

### astro.config.mjs
```javascript
export default defineConfig({
  site: 'https://mokalo.hr',
  // ...
});
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://mokalo.hr/sitemap.xml
```

---

## Build

```
npm run build
→ 20 stranica
```

## Deploy

```bash
docker build -t mrgudic-bura .
docker run -p 80:80 mrgudic-bura
```

---

## Popis vina (v1.1.1)

| Vino | Batch | QR kod |
|------|-------|--------|
| Marica | 25/b1 | 25-b1_marica.webp |
| Mare | 25/b1 | 25-b1_mare.webp |
| Bura Plavac | 25/b1 | 25-b1_bura-plavac.webp |
| Bura Dingač | 25/b1 | 25-b1_bura-dingac.webp |
| Bura Galerija | 25/b1 | 25-b1_bura-galerija.webp |
| Bura Sivi Plavac | 25/b1 | 25-b1_bura-sivi-plavac.webp |
| Bura Rukatac | 25/b1 | 25-b1_bura-rukatac.webp |

---

## Bugfixes

- Nekonzistentne boje između komponenti (WineCard vs [...slug].astro)
- Footer nije koristio bura-* prefiks
- F alijao site URL u konfiguraciji

---

## Sljedeće verzije (TODO)

- [ ] EN verzije vina (trenutno samo HR)
- [ ] SEO optimizacije za QR stranice
- [ ] Admin panel za upravljanje vinima