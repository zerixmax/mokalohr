# Launch: Payload CMS
**Datum:** 20. ožujka 2026.
**Status:** ✅ LIVE

---

## 🚀 Brzi Početak

```bash
cd mrgudic-cms
npm install
npm run dev
```

Admin: http://localhost:3000/admin

---

## 📦 Kolekcije

### Vina
- **Slug:** `vina`
- **Polja:** naziv, slug, lot, category_title, sort, year, alcohol, itd.
- **Lokalizacija:** HR, EN

### Media
- **Slug:** `media`
- **Upload:** Slike boca, pozadine

### Users
- **Slug:** `users`
- **Auth:** Administratori

---

## 🔗 API

```
GET /api/vina?locale=hr&depth=1
```

---

## 📝 Bilješke

- SQLite baza za razvoj
- Payload.config.ts u src/
- .env sadrži PAYLOAD_SECRET

---

**Lead Architect:** z3r1x
