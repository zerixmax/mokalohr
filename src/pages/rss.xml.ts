import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const vina = await getCollection('vina');
  const baseUrl = 'https://mokalo.hr';

  const hrVina = vina.filter(v => v.id.startsWith('hr/'));
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Mrgudić Bura Vina</title>
  <link>${baseUrl}</link>
  <description>Vina s Pelješca - Premium hrvatska vina</description>
  <language>hr</language>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${hrVina.map(wine => `  <item>
    <title>${wine.data.name}</title>
    <link>${baseUrl}/hr/vina/${wine.slug.replace('hr/', '')}</link>
    <description>${wine.data.producer} - ${wine.data.category}, ${wine.data.year}, ${wine.data.alcohol}</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>`).join('\n')}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
