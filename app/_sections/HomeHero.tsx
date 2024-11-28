import React from "react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-12 gap-4 px-6 sm:px-12 pt-8 md:pt-12 xl:pt-12">
        <div className="col-span-12 md:col-span-12 flex flex-col gap-4">
          <h1 className="w-full lg:max-w-screen-md mx-auto text-3xl md:text-4xl xl:text-4.5xl font-serif text-balance text-center tracking-tight mt-12">
            Welcome to the Jubilee 2025 Guide
          </h1>
          <p className="text-center">
            Here is your guide to navigating the Jubilee Year 2025 in Australia.
          </p>
          <div className="w-full flex flex-wrap gap-3 justify-center items-center mt-6">
            <Link
              href="#primer"
              aria-label="Download printable PDF"
              className="w-fit whitespace-nowrap uppercase text-sm font-bold tracking-widest border border-green-800 hover:border-green-800 bg-green-800 hover:bg-green-700 text-white px-8 py-4 transition duration-300"
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
