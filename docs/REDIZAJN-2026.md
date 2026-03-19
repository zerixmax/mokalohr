# Dokumentacija Redizajna: Mrgudić Bura Vina (Ožujak 2026)

## 1. Pregled Promjena
Današnji fokus bio je na potpunoj transformaciji digitalnog iskustva iz generičkog "dark" predloška u premium **"Label-First"** sustav koji vjerno preslikava fizičke etikete vina u digitalni format.

## 2. Vizualni Identitet (UI/UX)
- **Tema:** Prelazak s tamne teme na **svijetlu papirnatu teksturu** (boja pergamenta `#f7f3e9`).
- **Tipografija:** 
    - Naslovi: *Playfair Display* (Serif) u boji vina.
    - Tekst: *Inter* (Sans-serif) za maksimalnu čitljivost.
- **Dinamičko Bojanje:** Implementiran sustav koji automatski mijenja naglasne boje ovisno o vrsti vina:
    - `Marica-Red`: Bordo crvena (`#800000`)
    - `Rukatac-Blue`: Mornarsko plava (`#004080`)
    - `Amare-Gold`: Zlatno-brončana (`#b8860b`)
- **Header:** Sticky navigacija s prozirnošću i kružnim `LanguagePicker` selektorom (HR/EN).
- **Footer:** Implementiran "Triple-Logo" sustav (Mrgudić, Bura, Dingač) za jačanje autoriteta brenda.

## 3. Tehnička Implementacija (Astro & i18n)
- **i18n Routing:**
    - Hrvatska ruta: `/hr/vina/[slug]`
    - Engleska ruta: `/en/wine/[slug]` (SEO optimizirano za strano tržište).
- **Stroga Validacija (Zod):** Ažurirana `src/content/config.ts` shema sa strogim pravilima za lab nalaze (alkohol, nutritivne vrijednosti) i marketing polja.
- **Content Matrix:** Standardiziran format Markdown datoteka koji uključuje:
    - `profile`: Pauk grafikon (0-100) s 5 točaka (Voćnost, Kiselina, Floralnost, Začini, Tanini).
    - `aromas`: Niz tagova za mirise.
    - `serving`: Podaci o temperaturi i preporučenoj čaši.
    - `pairings`: Niz objekata s ikonama i opisima hrane.

## 4. Komponente i Interaktivnost
- **Spider Graph (Radar Chart):** Potpuno prilagođen SVG grafikon koji se dinamički iscrtava na temelju `profile` podataka iz Markdowna.
- **Serving Module:** Kartica s vizualnim informacijama o serviranju.
- **Pairing Module:** Interaktivni blokovi za sljubljivanje hrane s ikonama.
- **Sticky Mobilna Navigacija:** Implementiran fiksni header s `backdrop-blur` efektom za premium mobilno iskustvo.
- **Hamburger Meni:** Razvijen interaktivni sustav za brzi skok na ostala vina iz portfelja, uključujući slike boca u samom izborniku.
- **Language Switcher:** Redizajniran u kružni "zastavica" format (EN/HR) integriran izravno u header.

## 5. Hero Sekcija i Vizualni Sustav
- **Bottle-First Hero:** Redizajniran vrh stranice gdje dominira velika slika boce (`h-[50vh]`) s dinamičnim naslovima.
- **Watermark Tipografija:** Uvođenje masivnih, suptilnih naslova u pozadini koji pojačavaju autoritet brenda.
- **Scroll Indicator:** Vizualni poziv na akciju za mobilne korisnike.

## 6. Social & Kontakt Integracija
- **Social Icons:** U footer dodane kružne ikone za Facebook i Instagram s brendiranim hover efektima.
- **Puni Kontakt:** Ažurirani podaci koji uključuju naziv vinarije i točnu lokaciju (Potomje, Pelješac) u meniju i footeru.

## 7. Verzija i Changelog
- Verzija podignuta na **1.2.0**.
- Ažuriran `src/data/versions.json` s detaljnim opisom promjena za povijest razvoja.

---
**Status:** Implementirano i spremno za produkciju.
**Tim:**
- **Lead Architect & Brand Strategy:** z3r1x (Vizija, Content Matrix, UX smjernice)
- **Full Stack Execution:** Gemini AI (Senior)
**Datum:** 19. ožujka 2026.
**Verzija:** 1.2.1
