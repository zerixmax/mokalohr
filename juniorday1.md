# Junior Dev - Izvještaj: Dan 1 🚀

Danas sam započeo rad na portfelju vinarije Mrgudić Bura Vina. Fokus je bio na rješavanju kritičnih bugova, uspostavi robusne višejezične strukture i implementaciji novog vizualnog identiteta (Bura Brand Palette).

## ✅ Odrađeni Zadaci (🚨 HIGH PRIORITY)

1.  **Dinamički Jezik (Layout.astro):**
    - Ispravljen je hardkodirani `lang="hr"`. Layout sada prihvaća `lang` prop, što omogućava preglednicima i tražilicama da ispravno prepoznaju jezik stranice (HR ili EN).
2.  **English Index Page:**
    - Kreirana je `src/pages/en/index.astro`. Sada posjetitelji na `/en` mogu vidjeti popis svih vina na engleskom jeziku.
3.  **LanguagePicker Logic:**
    - Potpuno je prepisana logika prebacivanja jezika. Sada sustav inteligentno prepoznaje putanju i ispravno mijenja lokaciju (npr. s `/hr/vina/marica` direktno na `/en/vina/marica`), bez gubljenja konteksta.

## ⚡ Medium Priority & Arhitektura

-   **Konsolidacija Ruta:** Sjedinio sam duplicirane `hr/vina/[slug].astro` i `en/vina/[slug].astro` rute u jednu dinamičku rutu: `src/pages/[lang]/vina/[slug].astro`. To drastično smanjuje količinu koda kojeg moramo održavati.
-   **SEO Optimizacija:**
    - Dodani su OpenGraph i Twitter Cards meta tagovi.
    - Implementiran je Canonical URL za svaku stranicu.
    - `og:image` sada dinamički povlači sliku boce iz Content Collectiona, što je idealno za dijeljenje na društvenim mrežama.
-   **Novi Brand Identity:** Implementirao sam novu "Bura" paletu boja u `global.css` (zlatne, zemljane i tamne nijanse). Stranica sada odiše premium osjećajem.

## 🍷 Sadržaj (Content Collections)
Provjerio sam bazu vina. Trenutno su u sustavu:
-   **Marica** (Hrvatski i Engleski)
-   **Mare** (Hrvatski i Engleski)
-   **Bura**, **Dingač**, **Galerija** (Markdown datoteke su kreirane, potrebno je provjeriti prijevode za EN).

## 💡 Što sam naučio?
-   Kako koristiti Astro Content Collections za *type-safe* upravljanje Markdown podacima.
-   Razliku između Astro i18n rutiranja i ručnog upravljanja jezicima.
-   Važnost `@theme` direktive u novom Tailwindu 4 za centralizirano upravljanje bojama brenda.

## 📋 Plan za sutra (Low Priority & Polish)
-   Implementacija Dockerfile-a za produkciju.
-   Izrada prilagođene 404 stranice koja prati dizajn brenda.
-   Provjera svih QR linkova s mobilnih uređaja.

---
*Vrijeme provedeno:* 1 radni dan
*Status Builda:* Prolazi bez grešaka (`npm run build`).
