"use client";
import React from "react";
import { topicOptions } from "./formSchema";
import Image from "next/image";
import { usePersonalizationForm } from "./use-personalization-form";
import { Button } from "@/components/ui/button";
import Topic from "./topic";

const PersonalizationForm: React.FC = () => {
  const { register, handleSubmit, errors, fields, onSubmit, handleAddField } =
    usePersonalizationForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" text-emerald-950 text-4xl font-gt-super-display my-5 max-w-96 md:max-w-full">
          Tell us about yourself so we can personalize your experience
        </h1>
        <div className="mt-4 w-full flex flex-col items-center md:items-start">
          <p className="leading-tight text-emerald-900 mb-2">
            List the places you&apos;ve lived
          </p>
          <div className="space-y-3">
            {fields.map((field, index) => (
              <input
                key={field.id}
                {...register(`placesLived.${index}.value`)}
                className="sr-only w-full md:max-w-96 px-2 py-3 border border-gray-400 rounded-lg focus:border-[#068089] focus:outline-none "
                placeholder="Where have you lived?"
              />
            ))}
            <p className="text-red-400">{errors.placesLived?.root?.message}</p>
          </div>
          <Button
            variant="text"
            size="text"
            type="button"
            onClick={handleAddField}
            className="mt-4"
          >
            <Image
              src="/plus-circle.svg"
              className="mr-1"
              alt="plus icon"
              width={24}
              height={24}
            />{" "}
            ADD A NEW PLACE
          </Button>
        </div>
        <div className="mt-12 w-full">
          <p className="font-gt-super-text leading-tight mb-2 text-green-900">
            Select topics below that you’re interested in exploring
          </p>
          <div className="grid md:grid-cols-2 gap-y-4 w-full">
            {topicOptions.map((topic) => (
              <Topic key={topic.name} topic={topic} register={register} />
            ))}
            <p className="text-red-400">
              {errors.topics?.root?.message as string}
            </p>
          </div>
        </div>
        <div className="mt-7 flex justify-center md:justify-start w-full px-5 md:px-0">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalizationForm;
