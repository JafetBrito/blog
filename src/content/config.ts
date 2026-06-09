import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags:        z.array(z.string()).default([]),
    author:        z.string().default('Jafet Brito'),
    draft:         z.boolean().default(false),
    heroImage:     z.string().optional(),
    lang:          z.enum(['es', 'en']).default('es'),
    translationOf: z.string().optional(), // slug of the primary-language version
  }),
});

export const collections = { posts };
