"use client";

import { useEffect, useState } from "react";
import { onSubmitAction } from "../formSubmit";
import { useSearchParams, useRouter } from "next/navigation";
import { FormSchema } from "../formSchema";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState<string[]>([]);
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
  }, [searchParams]);

  return (
    <div>
      {questions.map((question, index) => (
        <p key={index}>{question}</p>
      ))}
    </div>
  );
};

export default QuestionsPage;
