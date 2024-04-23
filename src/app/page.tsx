"use client";
import Image from "next/image";
import { useState } from "react";

const topicOptions = [
  { name: "Travel & Adventure" },
  { name: "Love" },
  { name: "College" },
  { name: "Friendships" },
  { name: "Parenthood" },
  { name: "Work life" },
  { name: "Hobbies" },
  { name: "Spirituality & faith" },
  { name: "Childhood" },
  { name: "Challenges" },
];

export default function Home() {
  const [places, setPlaces] = useState<string[]>(["", "", ""]);

  const handleAddPlace = () => {
    setPlaces([...places, ""]); // Add a new empty string to the places array
  };

  const handlePlaceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPlaces = [...places];
    newPlaces[index] = event.target.value; // Update the specific place with the new value
    setPlaces(newPlaces);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 font-gt-super-text bg-white max-w-screen-md mx-auto">
      <Image
        src="/storyworth-logo.png"
        alt="plus icon"
        width={162}
        height={114}
      />{" "}
      <h1 className=" text-emerald-950 text-4xl font-gt-super-display my-5 max-w-96 md:max-w-full">
        Tell us about yourself so we can personalize your experience
      </h1>
      <div className="mt-4 w-full flex flex-col items-center md:items-start">
        <p className="leading-tight text-emerald-900 mb-2">
          List the places you&apos;ve lived
        </p>

        <div className="space-y-3">
          {places.map((place, index) => (
            <input
              key={index}
              type="text"
              value={place}
              onChange={(event) => handlePlaceChange(index, event)}
              className="w-full md:max-w-96 px-2 py-3 border border-gray-400 rounded-lg "
            />
          ))}
        </div>

        <button
          onClick={handleAddPlace}
          className="flex py-2 text-teal-700 font-gt-america tracking-widest mt-4"
        >
          <Image
            src="/plus-circle.svg"
            className="mr-1 "
            alt="plus icon"
            width={24}
            height={24}
          />{" "}
          ADD A NEW PLACE
        </button>
      </div>
      <div className="mt-12 w-full">
        <p className="font-gt-super-text leading-tight mb-2 text-green-900">
          Select topics below that you’re interested in exploring
        </p>
        <div className="grid md:grid-cols-2 gap-y-4 w-full">
          {topicOptions.map((topic) => (
            <div
              key={topic.name}
              className="md:max-w-[338px] space-x-2  border flex-grow  border-gray-400 rounded-lg py-2 px-4 flex items-center"
            >
              <input
                className="size-5 rounded-sm border accent-cyan-700"
                type="checkbox"
                name={topic.name}
                id={topic.name}
              />
              <label
                className="font-gt-super-text leading-7 text-xl text-emerald-950"
                htmlFor=""
              >
                {topic.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex justify-center md:justify-start w-full px-5 md:px-0">
        <button className="font-gt-america max-w-96 uppercase bg-[#068089] rounded-3xl text-white px-12 py-3 text-center md:text-left w-full md:w-auto">
          Next
        </button>
      </div>
    </main>
  );
}
