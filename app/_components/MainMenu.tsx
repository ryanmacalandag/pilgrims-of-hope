import Link from "next/link";
import React from "react";
import { BiGridAlt, BiHome } from "react-icons/bi";

export const MainMenu = () => {
  return (
    <div id="top">
      <div className="flex flex-row">
        <Link
          href="/"
          aria-label="view gallery"
          className="h-full flex items-center gap-2 text-2xl md:text-sm font-bold tracking-wider uppercase hover:text-white hover:bg-green-700 px-6 pb-4 pt-12 md:pt-16 transition duration-300"
        >
          <BiHome></BiHome>
          <span className="hidden md:flex">Jubilee 2025 Resources</span>
        </Link>
        <Link
          href="/sites"
          aria-label="view gallery"
          className="h-full flex items-center gap-2 text-2xl md:text-sm font-bold tracking-wider uppercase text-orange-100 md:text-stone-900 bg-stone-800 md:bg-transparent hover:bg-green-700 hover:text-white  px-6 md:px-6 pb-4 pt-12 md:pt-16 transition duration-300"
        >
          <BiGridAlt></BiGridAlt>
          <span className="hidden md:flex">Pilgrimage</span>
        </Link>
      </div>
    </div>
  );
};
