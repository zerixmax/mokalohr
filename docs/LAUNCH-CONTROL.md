# 🚀 LAUNCH CONTROL: Mrgudić Bura Vina v2.2.0
**Protokol za produkcijski deploy sustava**

Ovaj dokument služi kao finalna provjera i uputa za Lead Architecta (**z3r1x**) prije puštanja sustava u rad.

---

## 🛰️ 1. Backend Deploy (Payload CMS)
**Cilj:** Podići "mozak" sustava na serveru s Dockerom.

1. **Environment:** Provjeriti `.env` datoteku na serveru:
   - `PAYLOAD_SECRET`: Osigurati snažan ključ.
   - `DATABASE_URI`: Postaviti na `file:./storage/payload.db`.
2. **Docker:** Pokrenuti stack putem Portainera ili CLI-ja:
   ```bash
   docker-compose up -d
   ```
3. **Data Check:** Prijaviti se na `https://vaš-cms-url.com/admin` i provjeriti jesu li sva vina iz `VINA ASORTIMAN` vidljiva.

---

## 🌉 2. API Bridge (Frontend Connection)
**Cilj:** Prespojiti Astro s lokalnog na produkcijski CMS.

1. Otvoriti `src/lib/payload.ts` u Astro projektu.
2. Promijeniti URL:
   ```typescript
   // IZ:
   const PAYLOAD_URL = 'http://localhost:3000';
   // U:
   const PAYLOAD_URL = 'https://vaš-cms-url.com';
   ```
3. **Testirati vezu:** Pokrenuti `npm run build` lokalno. Ako build prođe, Astro je uspješno povukao podatke s produkcijskog API-ja.

---

## 🏗️ 3. Frontend Build & Deploy
**Cilj:** Generiranje i postavljanje statičkih datoteka.

1. Pokrenuti finalnu optimizaciju:
   ```bash
   npm run build
   ```
2. **ZIP:** Komprimirati sadržaj mape `/dist`.
3. **Upload:** Prenijeti sadržaj na web hosting (public_html).

---

## 🧪 4. Finalni QA (Checklist)
- [ ] **QR Test:** Skenirati testni QR i provjeriti vodi li na `/vina/marica` ili `/wine/marica`.
- [ ] **PWA Test:** Otvoriti stranicu, ugasiti internet i provjeriti radi li "Podrum Mode".
- [ ] **Visuals:** Provjeriti "View Transitions" (boca "leti" s popisa u hero sekciju).
- [ ] **SEO:** Provjeriti radi li `/en/wine/` ruta bez greške.
- [ ] **Social:** Kliknuti na FB i IG ikonice u footeru.

---

## 🏁 Lansiranje
Nakon što su sve stavke označene, sustav se smatra **OPERATIVNIM**.

**Lead Architect:** z3r1x  
**Deployment Status:** Standby / Ready  
**Potpis:** __________________________  
