# Finalni Izvještaj Razvoja: Mrgudić Bura Vina
**Datum:** 19. ožujka 2026.  
**Verzija:** 1.2.1  
**Lead Architect:** z3r1x  
**Full Stack Execution:** Gemini AI (Senior)

---

## 🖋️ 1. Vizualna Strategija: "Label-First"
Glavni cilj bio je preslikati fizički doživljav vinske boce u digitalni format.
- **Podloga:** Uvedena tekstura toplog pergamenta (`#f7f3e9`) s tintnim ispisom.
- **Tipografija:** Kombinacija luksuznog serifa (*Playfair Display*) i funkcionalnog sans-serifa (*Inter*).
- **Dinamičke Teme:** Sustav automatski prepoznaje tip vina i mijenja akcentne boje:
    - **Marica-Red:** Bordo crvena (`#800000`)
    - **Rukatac-Blue:** Mornarsko plava (`#004080`)
    - **Amare-Gold:** Zlatno-brončana (`#b8860b`)

## 🛠️ 2. Tehnička Arhitektura
- **Framework:** Astro 4.x s Tailwind CSS v4.
- **SEO & i18n:**
    - HR rute: `/hr/vina/[slug]`
    - EN rute: `/en/wine/[slug]` (Strateško mapiranje za globalno tržište).
- **Stroga Validacija (Zod):** Svi laboratorijski nalazi (alkohol, nutritivne vrijednosti) prolaze regex provjeru prije builda.
- **Content Matrix:** Standardiziran Markdown format s podrškom za lokalizirana polja, arome, tehnikalije i kompleksno sljubljivanje hrane.

## 📱 3. UI/UX Komponente (Mobile-App Experience)
- **Hybrid Navigation:** 
    - *Desktop:* Horizontalni linkovi s "Naša kolekcija" dropdown izbornikom.
    - *Mobile:* Full-screen overlay meni s velikim "likovima" (bocama vina).
- **Theme Slider:** Persistent Dark/Light switcher (Svijetli papir / Tamni Charcoal).
- **Language Flags:** Kružne SVG zastavice (HR/UK) s hover efektima i tooltipovima.
- **Hero Bottle Section:** Dominantna slika boce s "watermark" tipografijom u pozadini.
- **Back to Top:** Animirana ikona s CSS bounce efektom na visini `bottom-24`.

## 📊 4. Analitika i Marketing
- **SVG Spider Graph:** Dinamički radar chart (0-100 skala) za vizualizaciju 5 parametara: Voćnost, Kiselina, Floralnost, Začini, Tanini.
- **Serving Module:** Specifični podaci o idealnoj temperaturi i vrsti čaše.
- **Social Integration:** Ažurirani linkovi na Facebook i Instagram (`buramrgudic`) s brendiranim ikonama u footeru i meniju.

## ⚙️ 5. Payload CMS Integracija (Phase 2)
Uveden je profesionalni sustav za upravljanje sadržajem kako bi se olakšalo održavanje kataloga vina.
- **Backend:** Payload CMS 3.0 (Next.js baziran) - **STATUS: ACTIVE 🟢**
- **Arhitektura Baze Podataka:** **SQLite** (preko `@payloadcms/db-sqlite`) - **STATUS: INITIALIZED 🟢**

### 🏛️ Zašto SQLite? (Strateška Odluka)
Nakon analize potreba vinarije, Lead Architect **z3r1x** donio je odluku o korištenju SQLite-a umjesto kompleksnijih sustava (MySQL/MongoDB) iz sljedećih razloga:
1. **Zero Maintenance:** Baza je jedna `.db` datoteka unutar Docker volumena. Nema potrebe za zasebnim serverom, administracijom korisnika baze ili cPanel dozvolama.
2. **Read Performance:** S obzirom na to da se vinski katalog mijenja rijetko (npr. jednom godišnje pri novoj berbi), SQLite-ova brzina čitanja je idealna za Astro frontend.
3. **Docker-Friendly:** Pojednostavljen `docker-compose.yml` bez dodatnih servisa za bazu podataka smanjuje potrošnju resursa (RAM/CPU) na serveru.
4. **Offline Resilience:** Sve je unutar kontejnera, što eliminira mrežna kašnjenja (latency) prema vanjskim bazama.

## 🏁 Milestone: Payload "Go-Live"
- **Admin Dashboard:** Uspješno konfiguriran na `localhost:3000/admin`.
- **API Ready:** Sustav spreman za isporuku JSON podataka prema Astro frontend-u.
- **Schema Synced:** Zod sheme iz frontenda uspješno preslikane u Payload kolekcije.

## 🚀 6. Status i Build
- **Build Status:** 🟢 SUCCESS (17 statičkih ruta generirano).
- **Performance:** Slike su optimizirane putem `astro:assets` (WebP format).
- **Persistence:** Odabir teme se pohranjuje u `localStorage`, dok se vinski podaci sele u CMS.

---
**Lead Architect Signature:** z3r1x  
**Project Note:** Sustav je spreman za "QR launch" i produkciju.
