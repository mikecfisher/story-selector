"use client";
import Image from "next/image";
import { useState } from "react";

const topicOptions = [
  { name: "Travel & Adventure" },
  { name: "College" },
  { name: "Parenthood" },
  { name: "Hobbies" },
  { name: "Childhood" },
  { name: "Love" },
  { name: "Friendships" },
  { name: "Work life" },
  { name: "Spirituality & faith" },
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
    <main className="flex min-h-screen flex-col items-center justify-between p-6 font-gt-super-text bg-white">
      <Image
        src="/storyworth-logo.png"
        alt="plus icon"
        width={162}
        height={114}
      />{" "}
      <h1 className=" text-emerald-950 text-4xl font-gt-super-display my-5">
        Tell us about yourself so we can personalize your experience
      </h1>
      <div className="flex flex-col my-6 w-full items-center">
        <p className="leading-tight text-emerald-900">
          List the places you&apos;ve lived
        </p>
        {places.map((place, index) => (
          <input
            key={index}
            type="text"
            value={place}
            onChange={(event) => handlePlaceChange(index, event)}
            className="w-full max-w-96 p-2 border border-gray-400 rounded-lg my-2"
          />
        ))}
        <button
          onClick={handleAddPlace}
          className="flex py-2 text-teal-700 font-gt-america"
        >
          <Image
            src="/plus-circle.svg"
            className="mr-1"
            alt="plus icon"
            width={24}
            height={24}
          />{" "}
          ADD A NEW PLACE
        </button>
      </div>
      <div className="mt-3">
        <p className="font-gt-super-text leading-tight">
          Select topics below that you’re interested in exploring
        </p>
        <div>
          {topicOptions.map((topic) => (
            <div
              key={topic.name}
              className="space-x-2 border max-w-96 border-gray-400 rounded-lg p-2 my-3 flex items-center"
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
      <div>
        <button className=" mt-3 w-full font-gt-america uppercase bg-cyan-700 rounded-3xl text-white px-12 py-3">
          Next
        </button>
      </div>
    </main>
  );
}
