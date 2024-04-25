import { useEffect, useState } from "react";
import { onSubmitAction } from "./formSubmit";
import { useSearchParams } from "next/navigation";
import { FormSchema } from "../personalization-form/formSchema";

export function useQuestionsPage() {
  const [questions, setQuestions] = useState<string[]>(["", "", ""]);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleQuestionSelect = (index: number) => {
    setSelectedQuestion(index);
  };

  return {
    questions,
    isLoading,
    selectedQuestion,
    handleQuestionSelect,
  };
}
