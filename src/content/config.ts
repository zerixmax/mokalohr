import { defineCollection, z } from 'astro:content';

const vinaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // === OSNOVNI PODACI ===
    name: z.string(),
    producer: z.string().default('OPG Mrgudić-Bura'),
    category_title: z.string(), // npr. "The Crown of Production"
    alcohol: z.string().regex(/^\d+(\.\d+)?%$/, "Alkohol mora biti u formatu 'XX.X%'"),
    sort: z.string(), // npr. "Plavac Mali 100%"
    
    // === MARKETING SADRŽAJ (Localized: true) ===
    aromas: z.array(z.string()),
    character: z.string(),
    technicals: z.string(),

    // === PAUK GRAFIKON (Radar Chart 0-100) ===
    profile: z.object({
      fruitiness: z.number().min(0).max(100),
      acidity: z.number().min(0).max(100),
      floral: z.number().min(0).max(100),
      spices: z.number().min(0).max(100),
      tannins: z.number().min(0).max(100),
    }),

    // === SERVIRANJE I SLJUBLJIVANJE ===
    serving: z.object({
      type: z.string(), // npr. "Powerful Red"
      temp: z.string(), // npr. "16 - 20°C"
      glass: z.string(), // npr. "Large, wide wine glass"
    }),

    pairings: z.array(z.object({
      icon: z.string(),
      desc: z.string()
    })),

    // === VIZUALNA TEMA (Za Astrov prikaz) ===
    visual_theme: z.object({
      theme_type: z.enum(['Marica-Red', 'Rukatac-Blue', 'Amare-Gold']),
    }).optional(),

    // === LEGALNI DIO (EU Regulativa) ===
    nutrition: z.object({
      energy: z.string(),
      carbs: z.string(),
      sugars: z.string(),
      protein: z.string(),
      salt: z.string()
    }).optional(),
    ingredients: z.string().default('Grapes, Sulfites'),
    allergens: z.string().default('Sulfites'),
    recycling: z.string().optional(),
    batches: z.array(z.string()).optional(),
    
    // Assets
    image: image().optional(),
    hero_image: image().optional(),
  })
});

export const collections = {
  'vina': vinaCollection,
};