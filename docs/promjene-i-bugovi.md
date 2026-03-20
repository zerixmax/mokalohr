# Promjene i Ispravci Bugova (v2.2.x)

Ovaj dokument prati najnovije izmjene, optimizacije i ispravke napravljene na sustavu.

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
