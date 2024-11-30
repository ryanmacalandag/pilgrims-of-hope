import Link from "next/link";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
export const statesAU = ["act", "nsw", "nt", "vic", "sa", "tas", "qld", "wa"];

export default function StatesFilter({ selected }: { selected: string }) {
  return (
    <section className="w-full max-w-screen-xl mx-auto flex flex-row flex-wrap justify-center items-center gap-2 px-6 md:px-12 py-6 lg:py-10 mt-8">
      <Link
        href={"/sites/"}
        aria-label="view all featured"
        className={
          (selected == "featured"
            ? "text-stone-100 bg-green-700 font-bold "
            : "text-stone-700 bg-stone-300/60 ") +
          "w-fit flex justify-center hover:text-white hover:bg-green-700 rounded-full px-3 sm:px-3 py-[6px] sm:py-[9px] transition duration-300 text-sm font-sans uppercase tracking-wider"
        }
      >
        <BiSolidStar></BiSolidStar>
      </Link>
      <Link
        href={"/all/"}
        aria-label="view all sites"
        className={
          (selected == "all"
            ? "text-stone-100 bg-green-700 font-bold "
            : "bg-stone-500 text-stone-100 ") +
          "w-fit h-full flex justify-center hover:text-white hover:bg-green-700 rounded-full px-3 sm:px-5 py-1 sm:py-2 transition duration-300 text-xs font-sans uppercase tracking-wider"
        }
      >
        All
      </Link>
      {statesAU.map((state, key) => {
        return (
          <Link
            href={"/states/" + state}
            aria-label={state}
            key={key}
            className={
              (selected == state
                ? "text-stone-100 bg-green-700 font-bold "
                : "text-stone-700 bg-stone-300/60 ") +
              "w-fit h-full flex justify-center hover:text-white hover:bg-green-700 rounded-full px-3 sm:px-5 py-1 sm:py-2 transition duration-300 text-xs font-sans uppercase tracking-wider"
            }
          >
            {state}
          </Link>
        );
      })}
    </section>
  );
}
