import mockVina from '../data/vina-mock.json';

import type { Wine, VinaResponse } from '../types/wine';
export type { Wine, VinaResponse };

const CMS_URL = import.meta.env.CMS_URL || 'https://cms.mokalo.hr/api/vina';
const CMS_TIMEOUT = 5000; // 5 seconds

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CMS_TIMEOUT);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export async function getWina(lang: string = 'hr'): Promise<VinaResponse> {
  try {
    const response = await fetchWithTimeout(`${CMS_URL}?locale=${lang}&depth=1`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        return data as VinaResponse;
      }
    }
  } catch (error) {
    console.warn('[WineAPI] CMS not available, using mock data:', error);
  }

  return mockVina as VinaResponse;
}

export async function getWineBySlug(slug: string, lang: string = 'hr'): Promise<Wine | null> {
  const vina = await getWina(lang);
  return vina.docs.find(w => w.slug === slug) || null;
}
