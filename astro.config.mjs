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
    }
  }
});
