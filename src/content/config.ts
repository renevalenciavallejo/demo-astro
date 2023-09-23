import { z, defineCollection } from "astro:content";

const challengeCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    lang: z.string(),
    showOnHomePage: z.boolean(),
    title: z.string(),
    activityType: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    participants: z.number(),
  }),
});

export const collections = {
  challenges: challengeCollection,
};
