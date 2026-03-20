const DEV_URL = 'http://localhost:3000';
const PROD_URL = 'https://cms.mokalo.hr'; // TODO: Confirm with Boris

const isProd = import.meta.env.PROD;
const PAYLOAD_URL = isProd ? PROD_URL : DEV_URL;

export async function getVina(lang: string = 'hr') {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/vina?locale=${lang}&depth=1&limit=100`);
    const data = await res.json();
    return data.docs;
  } catch (error) {
    console.error('Error fetching vina from Payload:', error);
    return [];
  }
}

export async function getVinoBySlug(slug: string, lang: string = 'hr') {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/vina?locale=${lang}&where[slug][equals]=${slug}&depth=1`);
    const data = await res.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error(`Error fetching vino ${slug}:`, error);
    return null;
  }
}

export function getMediaUrl(media: any) {
  if (!media) return null;
  if (typeof media === 'string') return media;
  return `${PAYLOAD_URL}${media.url}`;
}