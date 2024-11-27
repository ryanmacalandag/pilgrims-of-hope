import Link from "next/link";
import React from "react";
import { BiGridAlt, BiHome } from "react-icons/bi";

export const MainMenu = () => {
  return (
    <div className="">
      <div className="flex flex-row">
        <Link
          href="/"
          aria-label="view gallery"
          className="h-full flex items-center gap-2 text-2xl md:text-sm font-bold tracking-widest uppercase hover:bg-orange-200/40 px-4 pb-4 pt-12 md:pt-16 transition duration-300"
        >
          <BiHome></BiHome>
          <span className="hidden md:flex">Home</span>
        </Link>
        <Link
          href="/sites"
          aria-label="view gallery"
          className="h-full flex items-center gap-2 text-2xl md:text-sm font-bold tracking-widest uppercase text-orange-200 hover:text-stone-900 md:text-stone-900 bg-stone-800 md:bg-transparent hover:bg-orange-200/40 px-6 md:px-4 pb-4 pt-12 md:pt-16 transition duration-300"
        >
          <BiGridAlt></BiGridAlt>
          <span className="hidden md:flex">Pilgrimage Sites</span>
        </Link>
      </div>
    </div>
  );
};
