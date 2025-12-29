import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  // Use the standard internal loader for Astro
  type: 'content', 
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string(),
    publishDate: z.coerce.date(),
    industry: z.string(),
    thumbnail: image(), 
    deliverables: z.array(z.string()),
  }),
});

export const collections = { portfolio };