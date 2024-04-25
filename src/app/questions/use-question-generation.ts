import { useEffect, useState } from "react";
import { onSubmitAction } from "./formSubmit";
import { useRouter, useSearchParams } from "next/navigation";
import { FormSchema } from "../personalization-form/formSchema";

export function useQuestionsGenerator() {
  const router = useRouter();
  const [questions, setQuestions] = useState<string[]>(["", "", ""]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState<number>();
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const info = searchParams.get("info");

      if (!info) {
        router.push("/");
        return;
      }

      const formDataEntries: FormSchema = JSON.parse(
        searchParams.get("info") || ""
      );

      try {
        const returnedQuestions = await onSubmitAction(formDataEntries);

        if (returnedQuestions) {
          setQuestions(returnedQuestions);
          setIsLoading(false);
        } else {
          setError("Failed to fetch questions");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchQuestions();
  }, []);

  const handleQuestionSelect = (index: number) => {
    setSelectedQuestion(index);
  };

  return {
    error,
    questions,
    isLoading,
    selectedQuestion,
    handleQuestionSelect,
  };
}
