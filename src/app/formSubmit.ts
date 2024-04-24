"use server";

import { schema } from "./formSchema";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSubmitAction(data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data);

  formData.placesLived = JSON.parse(formData.placesLived as string);
  formData.topics = JSON.parse(formData.topics as string);

  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const flatPlaces = parsed.data.placesLived
    .map((place) => place.value)
    .filter((place) => place?.trim() !== "")
    .join(", ");

  const flatInterests = Object.entries(parsed.data.topics)
    .filter(([topic, isSelected]) => isSelected)
    .map(([topic, isSelected]) => topic)
    .join(", ");

  console.log("flatdata", flatPlaces, flatInterests);

  return { message: "User registered" };
}
