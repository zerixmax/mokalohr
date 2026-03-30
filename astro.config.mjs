import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://mokalo.hr',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.mokalo.hr',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    // Povezujemo TOČAN stari link s TOČNIM novim linkom
    '/QRvina/buraplavac.html': '/hr/vina/bura-plavac-2024',
    '/QRvina/RukatacBura.html': '/hr/vina/bura-rukatac-2024',

    // Isto i za engleski (da i strancima radi scan)
    '/en/QRvina/buraplavac.html': '/en/vina/bura-plavac-2024',
    '/en/QRvina/RukatacBura.html': '/en/vina/bura-rukatac-2024',
  },
  i18n: {
    defaultLocale: 'hr',
    locales: ['hr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mrgudić Bura Vina',
        short_name: 'Bura Vina',
        description: 'Digitalne etikete vrhunskih peljeških vina',
        theme_color: '#f7f3e9',
        background_color: '#f7f3e9',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp}'],
      },
    }),
  ],
});