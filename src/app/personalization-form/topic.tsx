import { UseFormRegister } from "react-hook-form";

interface TopicProps {
  topic: { name: string };
  register: UseFormRegister<any>;
}

const Topic: React.FC<TopicProps> = ({ topic, register }) => (
  <div className="md:max-w-[338px] space-x-2  border flex-grow  border-gray-400 rounded-lg py-2 px-4 flex items-center">
    <input
      id={topic.name}
      className="size-5 rounded-sm border accent-cyan-700"
      type="checkbox"
      {...register(`topics.${topic.name}`)}
    />
    <label
      className="font-gt-super-text leading-7 text-xl text-emerald-950"
      htmlFor={topic.name}
    >
      {topic.name}
    </label>
  </div>
);

export default Topic;
