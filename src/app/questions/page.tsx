"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useQuestionsPage } from "./use-question-generation";

const QuestionsPage = () => {
  const { questions, isLoading, selectedQuestion, handleQuestionSelect } =
    useQuestionsPage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-14 p-6 font-gt-super-text bg-white max-w-screen-md mx-auto">
      <h1 className=" text-emerald-950 text-4xl font-gt-super-display my-5 max-w-96 md:max-w-full">
        Select a question for your journal
      </h1>
      <form
        className="w-full space-y-10 "
        onSubmit={() => alert("Thanks for playing!")}
      >
        <div className="grid md:grid-cols-3 gap-10 justify-items-center">
          {questions.slice(0, 3).map((question, index) => {
            if (isLoading) {
              return (
                <div
                  className={`border rounded-md p-5 h-56 w-52 flex justify-center items-center`}
                  key={index}
                >
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="h-24 w-44 rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-44" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                className={`border rounded-md p-5 h-56 w-52 cursor-pointer overflow-hidden 
                  ${selectedQuestion === index ? " border-[#068089]" : ""}
                }`}
                key={index}
                onClick={() => handleQuestionSelect(index)}
              >
                <p>{question}</p>
              </div>
            );
          })}
        </div>

        <textarea className="border w-full h-32 rounded-lg focus:border-[#068089] focus:outline-none" />

        <div className="mt-7 flex justify-center md:justify-start w-full px-5 md:px-0 space-x-5">
          <button
            type="submit"
            className="font-gt-america max-w-96 uppercase bg-[#068089] rounded-3xl text-white px-12 py-3 text-center md:text-left w-full md:w-auto"
          >
            Submit
          </button>
          <Link
            href="/"
            className="font-gt-america max-w-96 uppercase border border-[#068089] rounded-3xl text-gray-500 px-12 py-3 text-center md:text-left w-full md:w-auto"
          >
            Back
          </Link>
        </div>
      </form>
    </main>
  );
};

export default QuestionsPage;
