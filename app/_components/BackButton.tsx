import React from "react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";

export const BackButton = () => {
  return (
    <div className="pl-8">
      <div className="group relative w-full h-8 border-b-4 border-dotted border-orange-400/60 hover:border-stone-800/40 mb-8">
        <Link href="/sites/" aria-label="Go back a page">
          <BiHome
            size={36}
            className="absolute bottom-0 left-0 translate-y-1/2 text-white bg-orange-500 group-hover:bg-stone-800 group-hover:-translate-x-2 rounded-full p-2 transition duration-300"
          ></BiHome>
        </Link>
      </div>
    </div>
  );
};
