import { getWina } from '../utils/wineApi';

export const prerender = true;

function toISODate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString().split('T')[0];
  return new Date(dateStr).toISOString().split('T')[0];
}

export async function GET() {
  const baseUrl = 'https://mokalo.hr';

  const [vinaHR, vinaEN] = await Promise.all([
    getWina('hr'),
    getWina('en'),
  ]);

  const staticPages = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/hr', changefreq: 'monthly', priority: 0.9 },
    { url: '/en', changefreq: 'monthly', priority: 0.9 },
  ];

  const wineEntries: string[] = [];

  const hrSlugs = new Set(vinaHR.docs.map(w => w.slug));
  const enSlugs = new Set(vinaEN.docs.map(w => w.slug));
  const allSlugs = new Set([...hrSlugs, ...enSlugs]);

  for (const slug of allSlugs) {
    const hrWine = vinaHR.docs.find(w => w.slug === slug);
    const enWine = vinaEN.docs.find(w => w.slug === slug);
    const updatedAt = hrWine?.updatedAt || enWine?.updatedAt;
    const lastmod = toISODate(updatedAt);

    const hasHR = hrSlugs.has(slug);
    const hasEN = enSlugs.has(slug);

    let hreflangTags = '';
    if (hasHR) {
      hreflangTags += `
        <xhtml:link rel="alternate" hreflang="hr" href="${baseUrl}/hr/vina/${slug}" />`;
    }
    if (hasEN) {
      hreflangTags += `
        <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/vina/${slug}" />`;
    }

    const canonical = hasHR ? `/hr/vina/${slug}` : `/en/vina/${slug}`;

    wineEntries.push(`  <url>
    <loc>${baseUrl}${canonical}</loc>${hreflangTags}
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>${lastmod}</lastmod>
  </url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${wineEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
