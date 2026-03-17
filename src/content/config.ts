import { defineCollection, z } from 'astro:content';

const vinaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: image(), // Astro's built in image path resolver for assets
    alcohol: z.string().optional(),
    grape: z.string(),
    tastingNotes: z.array(z.string()).optional(),
    pairing: z.string().optional(),
  })
});

export const collections = {
  'vina': vinaCollection,
};
