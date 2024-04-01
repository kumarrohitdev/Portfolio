// Import necessary modules and components
import React from "react";
import { FaFile, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Wave from "@/app/Components/Hello";
import Link from "next/link";

// Hero component
const Hero = () => {
  return (
    <div className="lg:pt-32 z-10 md:pt-32 pt-[100px] bg-gradient-to-l dark:via-[#0a0a0a] from-[#f5f5f5] to-[#e0e0e0] dark:from-[#292929] dark:to-[#1f1f1f] bg-cover pb-32">
      

      <div className="border lg:w-[70%] md:w-[75%] w-[90%] text-center backdrop-blur shadow-xl ml-auto mr-auto rounded-md pl-2 pr-2 pb-6 pt-12 dark:bg-gray-900 dark:border-0 dark:shadow-md dark:shadow-white bg-white">
        <Wave />
        <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4 mt-6">
          I&apos;m{" "}
          <span className="bg-yellow-400 p-2 rounded-lg text-white font-bold">
            Rohit Kumar
          </span>
        </h1>
        <h1 className="lg:text-xl md:text-xl text-sm font-bold">
          21 years Full-Stack Developer from Delhi, IN
        </h1>

        <p className="text-gray-600 lg:text-sm md:text-[10px] pt-1 pb-1">
          I build and work at the intersection of technology and innovation.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="#About">
            <button className="bg-blue-500 border rounded text-white ml-auto mr-auto p-2 font-semibold hover:transform hover:scale-95 hover:transition-all lg:text-xl md:text-sm text-xs">
              Read About me
            </button>
          </Link>

          <Link href="#Project">
            <button className="bg-blue-500 border rounded text-white ml-auto mr-auto p-2 pl-2 pr-2 font-semibold hover:transform hover:scale-95 hover:transition-all lg:text-xl md:text-sm text-xs">
              My projects
            </button>
          </Link>
        </div>

        <div className="flex gap-3 justify-center mt-4">
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/kumarrohitdev/"}
            className="cursor-pointer hover:transform hover:scale-105 hover:transition-transform hover:brightness-90 lg:text-xl md:text-sm text-xs"
          >
            <FaLinkedin className="inline" /> Rohit Kumar
          </Link>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1pUBCQdI-rnvB5-bbiJOVWQ6DVGplIQsF/view?usp=sharing"
            }
            className="cursor-pointer hover:transform hover:scale-105 hover:transition-transform hover:brightness-90 lg:text-xl md:text-sm text-xs"
          >
            <FaFile className="inline" /> My Resume
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/kumarrohitdev"}
            className="cursor-pointer hover:transform hover:scale-105 hover:transition-transform hover:brightness-90 lg:text-xl md:text-sm text-xs"
          >
            <FaGithub className="inline" /> Rohit Kumar
          </Link>
          <Link
            target="_blank"
            href={"https://twitter.com/RohitKumar6435"}
            className="cursor-pointer hover:transform hover:scale-105 hover:transition-transform hover:brightness-90 lg:text-xl md:text-sm text-xs"
          >
            <FaTwitter className="inline" /> Rohit Kumar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
