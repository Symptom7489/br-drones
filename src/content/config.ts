import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content', 
  // We remove the ({ image }) helper because we are using direct string paths for simplicity
  schema: z.object({
    title: z.string(),
    client: z.string(),
    publishDate: z.coerce.date(),
    industry: z.string(),
    // Change image() to z.string() so it accepts your "/assets/image.jpg" path
    thumbnail: z.string(), 
    // Add these new optional fields so the site doesn't crash when you use them
    accuracy: z.string().optional(),
    sensor: z.string().optional(),
    videoID: z.string().optional(),
    pdfUrl: z.string().optional(),
    // Keep deliverables but make it optional so old files don't break
    deliverables: z.array(z.string()).optional(),
  }),
});

export const collections = { portfolio };