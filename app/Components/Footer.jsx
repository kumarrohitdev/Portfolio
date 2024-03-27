"use client"
import { FeedbackFish } from "@feedback-fish/react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Quick = ["Home", "Project", "Shorts", "About"];

export default function Footer() {
  return (
    <div className="mt-20 border-t-2 dark:border-gray-200 dark:border-t-[1px]">
      {/* //quick menue */}

      <div className="flex gap-8 justify-center">
        {Quick.map((item, index) => (
          <Link
            href={`#${item}`}
            className="hover:text-blue-400 cursor-pointer"
            key={index}
          >
            {item}
          </Link>
        ))}
      </div>
      <h1 className="font-bold pl-4 text-center mt-4 ">Reach me out</h1>

      <div className="flex justify-center mt-3 font-semibold">
        <SocialIcons />
      </div>

      <div className="flex justify-center mt-5">
        <span>©️ Made with ❣️ by Rohit Kumar. </span>
        <FeedbackFish projectId="d090e581fada49">
          <button className="text-amber-500 text-xs underline-offset-4 underline-white">
            &nbsp;&nbsp;&nbsp;Send feedback ?
          </button>
        </FeedbackFish>
      </div>
    </div>
  );
}
