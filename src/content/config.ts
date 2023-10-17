import { z, defineCollection } from "astro:content";

const challengeCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    lang: z.string(),
    showOnHomePage: z.boolean(),
    activityType: z.string(),
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    entryFee: z.number(),
    pot: z.number().optional(),
    participants: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          countryCode: z.string(),
          country: z.string(),
          duration: z.number(),
          distance: z.number(),
          speed: z.number(),
          pace: z.number(),
          elevation: z.number(),
          totalPoints: z.number(),
          isCompleted: z.boolean(),
        })
      )
      .nullable()
      .optional(),
  }),
});

export const collections = {
  "active-challenges": challengeCollection,
  "completed-challenges": challengeCollection,
};
