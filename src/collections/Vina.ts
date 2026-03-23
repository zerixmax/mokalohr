// src/collections/Vina.ts
// Napomena: Ovo je Payload CMS konfiguracija kolekcije.
// Ovaj fajl bi se trebao nalaziti u mrgudic-cms repozitoriju, 
// ali je ovdje dodan kao referenca prema zahtjevu.

export const Vina = {
  slug: 'vina',
  fields: [
    {
      name: 'naziv',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text', // Koristi 'text' umjesto 'slug' da lakše podnese '/'
      required: true,
      unique: true, // Sada kad si obrisao duple na serveru, ovo mora biti true!
      admin: { position: 'sidebar' }
    },
    {
      name: 'boris_lot',
      type: 'text',
      label: 'Borisov LOT',
      admin: { position: 'sidebar' }
    },
    {
      name: 'datum_punjenja',
      type: 'date',
      label: 'Datum punjenja',
      admin: { position: 'sidebar' }
    },
    // ... ostala polja (year, alcohol, sort, aromas, character, technicals, etc.)
  ],
};
