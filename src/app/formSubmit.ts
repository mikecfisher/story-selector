"use server";

import { FormSchema, schema } from "./formSchema";
import { generateQuestions } from "./llm-question-generator";

export type FormState = {
  message?: string | undefined;
  data: string[] | undefined;
};

type QuestionResponse = string[];

export async function onSubmitAction(
  data: FormSchema
): Promise<QuestionResponse | undefined> {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    //error
  }

  const flatPlaces =
    parsed.data?.placesLived
      .map((place) => place.value)
      .filter((place) => place?.trim() !== "")
      .join(", ") || "";

  const flatInterests = Object.entries(parsed.data?.topics || {})
    .filter(([topic, isSelected]) => isSelected)
    .map(([topic, isSelected]) => topic)
    .join(", ");

  const response = await generateQuestions({
    placesLived: flatPlaces,
    interests: flatInterests,
  });

  return response;
}
