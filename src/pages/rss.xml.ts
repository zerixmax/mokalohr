import { getCollection } from 'astro:content';

export const prerender = true;

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, c => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  }[c]!));
}

export async function GET() {
  const vina = await getCollection('vina');
  const baseUrl = 'https://mokalo.hr';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Mrgudić Bura Vina</title>
  <link>${baseUrl}</link>
  <description>Vina s Pelješca - Premium hrvatska vina</description>
  <language>hr</language>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${vina.map(wine => {
    const slug = wine.id.startsWith('hr/') || wine.id.startsWith('en/')
      ? wine.id.split('/').slice(1).join('/')
      : wine.slug;
    const lang = wine.id.startsWith('en/') ? 'en' : 'hr';
    const pubDate = (wine.data as any).updatedAt || new Date().toISOString();
    return `  <item>
    <title>${escapeXml(wine.data.name)}</title>
    <link>${baseUrl}/${lang}/vina/${slug}</link>
    <description>${escapeXml(wine.data.producer)} - ${escapeXml(wine.data.category_title || '')}, ${wine.data.year}${wine.data.alcohol ? `, ${wine.data.alcohol}% vol` : ''}</description>
    <pubDate>${new Date(pubDate).toUTCString()}</pubDate>
  </item>`;
  }).join('\n')}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
