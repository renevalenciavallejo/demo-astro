import { z, defineCollection } from "astro:content";

const challengeCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    lang: z.string(),
    showOnHomePage: z.boolean(),
    activityType: z.string(),
    title: z.string(),
    description: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    entryFee: z.number(),
    pot: z.number().nullable(),
  }),
});

export const collections = {
  challenges: challengeCollection,
};
