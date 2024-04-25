import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type LLMQuestionData = {
  placesLived: string;
  interests: string;
};

export async function generateQuestions(questionData: LLMQuestionData) {
  try {
    const systemPrompt = `Based on the following details about the user, 
    generate 3 insightful questions to aid in writing an emotional and heartfelt autobiography. 
    The user has lived in ${questionData.placesLived}. They are interested in discussing topics such as ${questionData.interests}. 
    Note: The places lived and interests may not be directly related. 
    Avoid simple or direct associations like assuming educational events based on the location unless specified by the user.
    Keep question length to 250 characters or less
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: "please generate some questions for me.",
        },
      ],
    });

    return response.choices[0].message.content
      ?.split("\n")
      .filter((item) => item.trim() !== "");
  } catch (error) {
    console.error(error);
    return null;
  }
}
