import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type LLMQuestionData = {
  placesLived: string;
  interests: string;
};

export async function generateQuestion(questionData: LLMQuestionData) {
  const prompt = `I have lived in ${questionData.placesLived} and I am interested in talking about ${questionData.interests}.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content: `You are a master writer of autobiographies, 
        the user is going to list a few places where they have lived 
        and a few topics they are interested in talking about. Use these locations and topics to generate
        3 to 5 questions that will help the user write about themselves.

        Please keep the length of the questions to no more than 250 characters
        `,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  console.log("ai response", response);

  const questions = response.choices[0].message;

  return {
    message: "Form submitted successfully",
    fields: questions,
  };
}
// prevState: FormState,
