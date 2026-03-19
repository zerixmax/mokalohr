import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mokalo.hr',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
    // i18n Mapiranje rute
    // Napomena: u Astro v4.x, ovo se radi pomoću 'locales' konfiguracije
    // gdje svaki locale može imati svoj 'path' (pre-mapping)
  }
});