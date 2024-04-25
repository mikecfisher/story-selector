import { Skeleton } from "@/components/ui/skeleton";

type QuestionItemProps = {
  question: string;
  index: number;
  selectedQuestion: number | undefined;
  handleQuestionSelect: (index: number) => void;
};

export const QuestionLoading: React.FC = () => {
  return (
    <div className="border rounded-md p-5 h-56 w-52 flex justify-center items-center">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-24 w-44 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-44" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </div>
  );
};

export const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  index,
  selectedQuestion,
  handleQuestionSelect,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`border rounded-md p-5 h-56 w-52 cursor-pointer overflow-hidden 
        ${selectedQuestion === index ? " border-[#068089]" : ""}
      }`}
      key={index}
      onClick={() => handleQuestionSelect(index)}
    >
      <p>{question}</p>
    </div>
  );
};
