import { defineCollection, z } from "astro:content";

export const collections = {
  project: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      productLink: z.string().optional(),
      productLinkText: z.string().optional(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
