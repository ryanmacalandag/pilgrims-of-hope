import React from "react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full shadow-sm bg-gradient-to-b from-stone-100/20 via-strone-100/20 to-transparent">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-12 gap-4 px-6 sm:px-12 py-16 md:py-12 xl:py-20">
        <div className="col-span-12 md:col-span-12 flex flex-col gap-4">
          <h1 className="w-full lg:max-w-screen-md mx-auto text-3xl md:text-4xl xl:text-4.5xl font-serif text-balance text-center mt-4">
            Here is your guide to navigating the Jubilee Year 2025 in Australia
          </h1>
          <p></p>
          <div className="w-full flex flex-wrap gap-3 justify-center items-center">
            <Link
              href="#primer"
              aria-label="Download printable PDF"
              className="w-fit whitespace-nowrap uppercase text-sm font-bold tracking-widest border border-stone-800 hover:bg-stone-700 hover:text-stone-100 px-8 py-4 transition duration-300"
            >
              Jubilee 2025 Primer
            </Link>
            <Link
              href="/sites/"
              aria-label="Download printable PDF"
              className="w-fit whitespace-nowrap uppercase text-sm font-bold tracking-widest border border-stone-800 hover:bg-stone-700 hover:text-stone-100 px-8 py-4 transition duration-300"
            >
              View Pilgrimage Sites ⇢
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6"></div>
      </div>
    </section>
  );
}
