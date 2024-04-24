import { z } from "zod";

export const topicOptions = [
  { name: "Travel & Adventure" },
  { name: "Love" },
  { name: "College" },
  { name: "Friendships" },
  { name: "Parenthood" },
  { name: "Work life" },
  { name: "Hobbies" },
  { name: "Spirituality & faith" },
  { name: "Childhood" },
  { name: "Challenges" },
];

const topicSchema = topicOptions.reduce((acc, topic) => {
  acc[topic.name] = z.boolean().optional();
  return acc;
}, {} as { [key: string]: z.ZodTypeAny });

export const schema = z.object({
  placesLived: z
    .array(z.object({ value: z.string().optional() }))
    .refine(
      (data) => data.some((place) => place.value && place.value.length >= 3),
      {
        message: "Please enter at least one place you have lived",
        path: [], // apply error at root of the array
      }
    ),

  topics: z
    .object(topicSchema)
    .refine((data) => Object.values(data).some((value) => value === true), {
      message: "Please select at least one topic",
      path: [],
    }),
});

export type FormSchema = z.infer<typeof schema>;
