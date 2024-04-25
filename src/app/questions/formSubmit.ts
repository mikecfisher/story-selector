"use server";

import { FormSchema, schema } from "../personalization-form/formSchema";
import { generateQuestions } from "./llm-question-generator";

type QuestionResponse = string[];

export async function onSubmitAction(
  data: FormSchema
): Promise<QuestionResponse | undefined> {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  const flatPlaces =
    parsed.data?.placesLived
      .map((place) => place.value)
      .filter((place) => place?.trim() !== "")
      .join(", ") ?? "";

  const flatInterests = Object.entries(parsed.data?.topics ?? {})
    .filter(([topic, isSelected]) => isSelected)
    .map(([topic, isSelected]) => topic)
    .join(", ");

  const response = await generateQuestions({
    placesLived: flatPlaces,
    interests: flatInterests,
  });

  if (!response || typeof response === "string") {
    throw new Error("Unexpected response from question generator");
  }

  return response;
}
