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
    participants: z.array(
      z.object({
        Participant: z.string(),
        Distance: z.string(),
        Time: z.string(),
        Pace: z.string(),
        Elevation: z.string(),
        Points: z.string(),
        Country: z.object({
          abbreviation: z.string(),
          name: z.string(),
        }),
      })
    ),
  }),
});

export const collections = {
  challenges: challengeCollection,
};
