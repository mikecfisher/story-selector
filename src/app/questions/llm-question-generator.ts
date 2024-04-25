import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type LLMQuestionData = {
  placesLived: string;
  interests: string;
};

export async function generateQuestions(questionData: LLMQuestionData) {
  try {
    const prompt = `I have lived in ${questionData.placesLived} and I am interested in talking about ${questionData.interests}.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Act as a master writer of biographies, 
        You are helping someone write an emotional and heartfelt autobiography.
        The user is going to list a few places where they have lived 
        and a few topics they are interested in talking about. Interests and places they have lived are not always related to each other. Use these locations and topics to generate
        3 to 5 questions that will help the user write about themselves. Again The Topics and Locations may not directly relate to each other.
        Example: Just because someone wants to talk about college and they have lived in NYC doesn't mean they went to college in NYC

        Please keep the length of the questions to no more than 250 characters.
        Do not number questions, Format questions like this: What was it like living in NYC?`,
        },
        {
          role: "user",
          content: prompt,
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
