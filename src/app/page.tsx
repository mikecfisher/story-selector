import Image from "next/image";
import PersonalizationForm from "./personalization-form/personalization-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 font-gt-super-text bg-white max-w-screen-md mx-auto">
      <Image
        src="/storyworth-logo.png"
        alt="plus icon"
        width={162}
        height={114}
      />{" "}
      <PersonalizationForm />
    </main>
  );
}
