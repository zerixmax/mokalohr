# Release 2.3.0 - Lab Analysis & Nutrition Expansion
**Datum:** 20. ožujka 2026.
**Status:** Implementirano & Spremno za testiranje

## Pregled promjena
Glavni fokus današnjeg zadatka bio je proširenje sustava za unos i prikaz detaljnih laboratorijskih i nutritivnih podataka o vinima, u skladu s EU regulativama i "Oliver Winery" estetikom.

### 1. Payload CMS Proširenje (Backend)
- **Kolekcija `Vina.ts`**:
    - Dodana grupa **Nutritivne Vrijednosti (na 100ml)** (`nutricija`): `energija`, `ugljikohidrati`, `seceri`.
    - Dodana grupa **Laboratorijska Analiza** (`analiza`): `suhi_ekstrakt`, `reducirajuci_seceri`, `ukupna_kiselost`, `ukupni_so2`.
    - Tipovi podataka: Sva numerička polja prebačena su na `number` radi preciznosti.
    - Refaktorirano polje `berba` u `year`.

### 2. Frontend Ažuriranja (Astro + Tailwind)
- **Nova komponenta prikaza**: Podaci su prikazani u dvije kolone (Nutricija | Analiza) na desktopu, a u jednoj na mobitelu.
- **Dizajn**:
    - Korišten **Inter** font za brojčane vrijednosti.
    - Implementiran "zebra-striping" dizajn.
    - Fiksni sufiksi (`g/l`, `mg/L`, `%vol`) hardkodirani u komponentu.
- **i18n**: Potpuna podrška za hrvatski i engleski jezik.

### 4. UI Polish & Brand Identity
- **Header Logo**: Povećana visina logotipa s `h-10` na `h-14` radi bolje vidljivosti brenda.
- **Navigacijski Font**: Unaprijeđen stil glavnog izbornika:
    - Font size povećan na `text-[11px]`.
    - Težina fonta postavljena na `font-extrabold` radi boljeg kontrasta na kremastoj pozadini.
- **Mobile Dropdown Fix**: Implementiran `astro:page-load` listener i `transition:persist` za stabilan rad hamburger izbornika tijekom ViewTransitions prijelaza.

## Napomena za Borisa (Korisničke upute)
Pri unosu novih vina:
1. **Alkohol**: Unositi samo broj (npr. `12.7`), sustav sam dodaje `%vol`.
2. **Laboratorij**: Vrijednosti poput kiselosti i ekstrakta unositi kao brojeve (npr. `4.5`), sustav dodaje `g/l`.
3. **Nutritivno**: Energija se unosi kao tekst (npr. `324/77 kJ/kcal`), ostalo su brojevi.

## Provjera (Check-list)
- [x] Polja u Payloadu su tipa `number`.
- [x] Jedinice se prikazuju elegantno (manji font/svjetlija boja).
- [x] Prijevodi rade na oba jezika.
- [x] PWA (Podrum Mode) kompatibilnost očuvana.
