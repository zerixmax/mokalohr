import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const vina = await getCollection('vina');
  const baseUrl = 'https://mokalo.hr';

  const pages = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/hr', changefreq: 'monthly', priority: 0.9 },
    { url: '/en', changefreq: 'monthly', priority: 0.9 },
    ...vina.map(wine => ({
      url: `/${wine.slug}`,
      changefreq: 'monthly',
      priority: 0.8
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
