"use client";

import Link from "next/link";
import { useQuestionsPage } from "./use-question-generation";
import { QuestionItem, QuestionLoading } from "./question-item";
import { Button } from "@/components/ui/button";

const QuestionsPage = () => {
  const { questions, isLoading, selectedQuestion, handleQuestionSelect } =
    useQuestionsPage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-14 p-6 font-gt-super-text bg-white max-w-screen-md mx-auto">
      <h1 className=" text-emerald-950 text-4xl font-gt-super-display my-5 max-w-96 md:max-w-full">
        Select a question for your journal
      </h1>
      <form className="w-full space-y-10 " onSubmit={() => alert("We did it!")}>
        <div className="grid md:grid-cols-3 gap-10 justify-items-center">
          {questions.slice(0, 3).map((question, index) => {
            const key = `${question}-${index}`;
            return isLoading ? (
              <QuestionLoading key={key} />
            ) : (
              <QuestionItem
                question={question}
                key={key}
                index={index}
                selectedQuestion={selectedQuestion}
                handleQuestionSelect={handleQuestionSelect}
              />
            );
          })}
        </div>

        <textarea className="border w-full h-32 rounded-lg focus:border-[#068089] focus:outline-none" />

        <div className="mt-7 flex justify-center md:justify-start w-full px-5 md:px-0 space-x-5">
          <Button type="submit">Submit</Button>
          <Link href="/">
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default QuestionsPage;
