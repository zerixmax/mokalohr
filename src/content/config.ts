import { defineCollection, z } from 'astro:content';

const vinaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    producer: z.string().default('OPG Mrgudić-Bura'),
    bottler: z.string().default('OPG Mrgudić-Bura'),
    region: z.string(),
    category: z.string(),
    country: z.string().default('Hrvatska'),
    year: z.string(),
    alcohol: z.string(),
    ingredients: z.string().default('Grožđe, Sulfiti'),
    allergens: z.string().default('Sulfiti'),
    nutrition: z.object({
      energy: z.string(),
      carbs: z.string(),
      sugars: z.string(),
      protein: z.string(),
      salt: z.string()
    }).optional(),
    recycling: z.string().optional(),
    batches: z.array(z.string()).optional(),
    
    // Legacy - za kompatibilnost
    grape: z.string().optional(),
    tastingNotes: z.array(z.string()).optional(),
    pairing: z.string().optional(),
    image: image().optional(), 
  })
});

export const collections = {
  'vina': vinaCollection,
};
