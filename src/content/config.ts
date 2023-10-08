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
    pot: z.number().nullable(),
    participants: z
      .array(
        z.object({
          Participant: z.string(),
          Distance: z.string(),
          Time: z.string(),
          Pace: z.string(),
          Elevation: z.string(),
          Points: z.string(),
          Country: z.string(),
        })
      )
      .nullable(),
  }),
});

export const collections = {
  "active-challenges": challengeCollection,
  "completed-challenges": challengeCollection,
};
