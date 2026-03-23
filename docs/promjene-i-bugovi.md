# Promjene i Ispravci Bugova (v2.4.0)

Ovaj dokument prati najnovije izmjene, optimizacije i ispravke napravljene na sustavu.

## 🚀 Payload CMS Integracija (2026-03-23)

### 📂 Kolekcija Vina (Vina.ts)
- **Problem**: Stara struktura sluga nije dopuštala kose crte (`/`), što je otežavalo mapiranje QR kodova s batchevima.
- **Rješenje**: 
    - Promijenjen tip polja `slug` iz `slug` u `text` kako bi podržao formate poput `bura-rukatac/25/b1`.
    - Dodana nova polja za bolju sljedivost: **Borisov LOT** (`boris_lot`) i **Datum punjenja** (`datum_punjenja`).
    - Postavljeno `unique: true` za slug nakon čišćenja duplikata na serveru.

### 🧠 Pametno Rutiranje ([...slug].astro)
- **Unaprjeđenje**: Frontend sada koristi puni slug iz URL-a za precizno dohvaćanje podataka iz CMS-a.
- **Fallback Mehanizam**: Ako točan podudarni slug ne postoji, sustav automatski pokušava pronaći bazično vino (npr. `bura-rukatac`) kako bi osigurao da korisnik nikada ne završi na 404 stranici ako je batch URL krivo upisan.
- **Prikaz Podataka**: Dodan vizualni prikaz datuma punjenja i Borisovog LOT-a u sekciji s informacijama o seriji (batch).
- **i18n Fix**: Ispravljen problem s 404 greškama na engleskom jeziku prisilnim korištenjem `/vina/` rute umjesto `/wine/`, čime je postignuta unifikacija putanja za sve jezike.

## 🇪🇺 EU Compliance & i18n Sync (v2.5.0 - 2026-03-23)

### 🍷 Potpuna Sinkronizacija Engleskog Jezika
- **Standardizacija Slugova**: Svi engleski slugovi su usklađeni s hrvatskima (npr. `mrgudic-dingac` -> `bura-dingac`). Ovo omogućuje besprijekoran rad prebacivanja jezika i QR kodova.
- **Novi Sadržaj**: Generirani engleski prijevodi za preostala vina: **Bura Galerija**, **Bura Plavac**, i **Bura Sivi Plavac**.

### ⚠️ Sigurnost i Regulativa
- **Isticanje Alergena**: Implementirana uočljiva "Allergen Badge" s ikonom upozorenja i specifičnim bojama, čime je postignuta 100% usklađenost s EU regulativom o e-etiketama.
- **Podaci o Proizvođaču**: Dodana eksplicitna sekcija s punim nazivom i adresom OPG Mrgudić-Bura na dnu svake e-etikete.

### 🌑 Dizajn i UI (Dark & Gold Restore)
- **Default Dark Theme**: Sustav je sada postavljen tako da je tamna tema zadana (default) pri prvom posjetu, uz automatsko forsiranje ako je korisnik ranije bio na svijetloj temi.
- **UI Refinement**: Poboljšana vidljivost "Radar Charta" u tamnom načinu rada i optimizirane sjene na bocama za premium dojam.

---

## 🎨 Vizualne Izmjene i Imovina (Assets)

### 🍷 Plavac Bura
- Ažurirana slika za vino **Plavac Bura** s novom, visoko-kvalitetnom verzijom `Plavac-bura.webp`.

### 🛡️ Standardizacija Logotipa
- Ujednačen logotip na cijeloj stranici koristeći moderniju verziju `mrgudic-bura-logo-web.webp`.
- Uklonjene sve reference na stari logotip (`mrgudic -bura-logo.webp`).

### 🧴 Dinamički "Placeholders"
- Implementirana logika za automatski prikaz odgovarajuće boce ako slika vina nedostaje:
    - **Crna vina** (tema `Marica-Red`): `boca-vina-mrgudic-placeholder.webp`
    - **Bijela i desertna vina** (teme `Rukatac-Blue` i `Amare-Gold`): `mrgudic-bura-bijelovino-placeholder.webp`

---

## 🐞 Ispravci Bugova (Bug Fixes)

### 🏗️ Strukturni Ispravci (HTML/Astro)
- **Problem**: Nedostajao je završni `</div>` tag u `[...slug].astro`, što je uzrokovalo probleme u renderiranju donjeg dijela stranice.
- **Rješenje**: Dodan nedostajući tag i provjerena ravnoteža svih HTML elemenata.

### 🏷️ Mapiranje Svojstava (Properties)
- **Problem**: Korišteni su krivi nazivi polja u `index.astro` (`wine.data.category` umjesto `wine.data.category_title`).
- **Rješenje**: Ažurirano mapiranje kako bi odgovaralo stvarnim podacima iz kolekcije.

---

## 💻 Tehničke Optimizacije

### 🛠️ Shema Sadržaja (Schema Update)
- Ažurirana Zod shema u `src/content/config.ts` s novim poljima `year` i `region`.
- Time je postignuta puna podrška za TypeScript i uklonjene su pogreške pri prikazu godišta vina.

### 💨 Tailwind 4.x Optimizacija
- Primijenjene moderne Tailwind kratice za bolju čitljivost i performanse:
    - `flex-grow` -> `grow`
    - `aspect-[3/4]` -> `aspect-3/4`
    - `bg-gradient-to-t` -> `bg-linear-to-t`
    - `bg-black/[0.03]` -> `bg-black/3`

### ⚡ Performanse Slika
- Zamijenjen zastarjeli `priority` prop na `Image` komponenti s modernijim `loading="eager"` za kritične elemente.
