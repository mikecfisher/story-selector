"use client";

import { useEffect, useState } from "react";
import { onSubmitAction } from "../formSubmit";
import { useSearchParams, useRouter } from "next/navigation";
import { FormSchema } from "../formSchema";

const QuestionsPage = () => {
  // const [questions, setQuestions] = useState<string[]>([
  //   "How did the cities you've lived in shape your approach to travel and adventure? ",
  //   "Reflect on how your experiences with love differed in each place; was there a location that stands out? ",
  //   "Describe a college event or epiphany that has had a lasting impact on you. ",
  //   "In what ways has your pursuit of adventure been influenced by your academic journey? ",
  //   "Can you share a particularly memorable adventure or travel story from one of these locations?",
  // ]);

  const [questions, setQuestions] = useState<string[]>([]);

  const [selectedQuestion, setSelectedQuestion] = useState<number>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const formDataEntries: FormSchema = JSON.parse(
        searchParams.get("info") || ""
      );

      const returnedQuestions = await onSubmitAction(formDataEntries);

      if (returnedQuestions) {
        setQuestions(returnedQuestions);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-14 p-6 font-gt-super-text bg-white max-w-screen-md mx-auto">
      <h1 className=" text-emerald-950 text-4xl font-gt-super-display my-5 max-w-96 md:max-w-full">
        Select a question for your journal
      </h1>
      <form className="w-full space-y-10 ">
        <div className="grid md:grid-cols-3 gap-5 justify-items-center grid-auto-rows: 1fr">
          {questions.map((question, index) => (
            <div
              className={`border rounded-md p-5 cursor-pointer ${
                selectedQuestion === index ? " border-[#068089]" : ""
              }`}
              key={index}
              onClick={() => setSelectedQuestion(index)}
            >
              <p>{question}</p>
            </div>
          ))}
        </div>

        <textarea className="border w-full h-32 rounded-lg focus:border-[#068089] focus:outline-none" />

        <div className="mt-7 flex justify-center md:justify-start w-full px-5 md:px-0">
          <button
            type="submit"
            className="font-gt-america max-w-96 uppercase bg-[#068089] rounded-3xl text-white px-12 py-3 text-center md:text-left w-full md:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default QuestionsPage;
