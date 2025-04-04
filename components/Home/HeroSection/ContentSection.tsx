import React from "react";
import { ArrowIcon } from "./Icons";

export const ContentSection: React.FC = () => {
  return (
    <div className="flex absolute flex-col gap-8 items-center left-[304px] top-[30px] w-[713px] max-md:relative max-md:top-0 max-md:left-0 max-md:mx-auto max-md:my-10 max-md:w-[90%]">
      <div className="flex flex-col gap-5 items-center w-full">
        <header className="flex flex-col items-center">
          <h1 className="text-7xl text-center text-white leading-[86.4px] max-md:text-5xl max-sm:text-4xl">
            Work, Grow, and Thrive
            <br />
            in Global Healthcare
          </h1>
        </header>
        <p className="text-lg leading-7 text-center text-white max-sm:text-base">
          The world needs healthcare professionals, and you have the skills.
        </p>
      </div>
      <button className="flex gap-2 justify-center items-center px-5 py-2 bg-blue-500 rounded-xl cursor-pointer">
        <span className="text-base font-medium leading-6 text-white">
          Get Started
        </span>
        <ArrowIcon />
      </button>
    </div>
  );
};
