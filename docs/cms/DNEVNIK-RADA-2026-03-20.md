# Dnevnik Rada: Payload CMS Setup
**Datum:** 20. ožujka 2026.
**Verzija:** 1.0
**Lead Architect:** z3r1x

---

## 📋 Sažetak Dana

Dana 20. ožujka 2026. postavljen je Payload CMS za upravljanje vinima.

---

## 🔧 Postavljanje Payload CMS

### Arhitektura

```
mrgudic-cms/
├── src/
│   ├── collections/     # Kolekcije (Vina, Media, Users)
│   ├── globals/         # Globalni config
│   └── payload.config.ts
├── payload.db          # SQLite baza
└── package.json
```

### Kolekcija Vina

```typescript
slug: 'vina'
fields:
  - naziv (text)
  - slug (text)
  - lot (text)
  - category_title (text, localized)
  - sort (text)
  - year (number)
  - alcohol (number)
  - aromas (array)
  - character (textarea, localized)
  - profile (group) - fruitiness, acidity, floral, spices, tannins
  - serving (group) - type, temp, glass
  - pairings (array)
  - nutricija (group) - energija, ugljikohidrati, seceri
  - analiza (group) - suhi_ekstrakt, reducirajuci_seceri, itd.
  - ingredients (text)
  - allergens (text)
  - visual_theme (group)
  - slika (upload - media)
```

---

## 🚀 Status

| Komponenta | Status |
|-----------|--------|
| Payload CMS | ✅ |
| SQLite DB | ✅ |
| Kolekcija Vina | ✅ |
| Admin UI | ✅ |

---

**Lead Architect:** z3r1x
**Završeno:** 20.03.2026
