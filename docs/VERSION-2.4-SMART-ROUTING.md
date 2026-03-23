# Release Notes v2.4.0: Smart Routing & QR Ready
**Datum:** 23. ožujka 2026.  
**Verzija:** 2.4.0 (Smart Routing)

## 🚀 Pregled
Ova verzija fokusirana je na potpunu podršku za QR kodove koji se tiskaju na boce. Sustav je sada otporan na varijacije u putanjama i omogućuje precizno praćenje serija (lotova).

## ⚙️ Ključne Promjene

### 1. Payload CMS: Fleksibilni Slugovi
- Polje `slug` u kolekciji `Vina` promijenjeno je u tip `text`.
- **Zašto?** Kako bi se omogućilo unošenje sluga s kosim crtama (npr. `bura-rukatac/25/b1`) što standardna Payload `slug` polja ponekad otežavaju.
- Dodana polja: `boris_lot` (interni LOT) i `datum_punjenja` (lab compliance).

### 2. Astro: Inteligentno Pretraživanje
- Predložak `[...slug].astro` više ne pokušava pogoditi bazu, već prvo traži točan podudarni slug iz URL-a.
- **Fallback Mehanizam:** Ako korisnik skenira QR kod koji vodi na specifičnu seriju koja još nije u bazi, sustav će prikazati općenito vino tog naziva umjesto 404 greške.

### 3. UI: Batch Informacije
- Vizualno istaknuta sekcija s Borisovim LOT-om i datumom punjenja unutar kartice "Serija / Batch".
- Automatsko formatiranje datuma prema jeziku (`hr-HR` ili `en-US`).

## ✅ Status
- **CMS Schema:** Ažurirana 🟢
- **Frontend Routing:** Testirano 🟢
- **QR Kompatibilnost:** Spremno 🟢

---
**Lead Architect:** z3r1x  
**Execution:** Gemini AI
