import { defineCollection, z } from 'astro:content';

const vinaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: image(),
    alcohol: z.string().optional(),
    grape: z.string(),
    tastingNotes: z.array(z.string()).optional(),
    pairing: z.string().optional(),
    
    // EU E-etiketa - obavezna polja
    manufacturer: z.string().optional(),
    category: z.string().optional(),
    country: z.string().optional(),
    region: z.string().optional(),
    vintage: z.string().optional(),
    
    // Nutritivne vrijednosti (na 100ml)
    energy: z.string().optional(),
    fat: z.string().optional(),
    saturates: z.string().optional(),
    carbohydrate: z.string().optional(),
    sugars: z.string().optional(),
    protein: z.string().optional(),
    salt: z.string().optional(),
    
    // Alergeni
    allergens: z.array(z.string()).optional(),
    
    // Sastojci
    ingredients: z.string().optional(),
    
    // Praćenje serija (batcheva) za QR kodove
    batches: z.array(z.object({
      code: z.string(),
      date: z.string(),
      description: z.string().optional(),
    })).optional(),
  })
});

export const collections = {
  'vina': vinaCollection,
};
