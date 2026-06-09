import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title:          z.string(),
    title_en:       z.string().optional(),       // English title (if translated)
    description:    z.string(),
    description_en: z.string().optional(),       // English description (if translated)
    pubDate:        z.coerce.date(),
    updatedDate:    z.coerce.date().optional(),
    tags:           z.array(z.string()).default([]),
    author:         z.string().default('Jafet Brito'),
    draft:          z.boolean().default(false),
    heroImage:      z.string().optional(),
  }),
});

export const collections = { posts };
