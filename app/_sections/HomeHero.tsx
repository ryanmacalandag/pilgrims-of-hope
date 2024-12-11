import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative w-full">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-12 gap-4 px-8 sm:px-12 pt-12 md:pt-12 xl:pt-20">
        <div className="col-span-12 md:col-span-8 flex flex-col gap-2 md:gap-4 pl-0 sm:pl-8 md:pl-12 lg:pl-16">
          <div className="w-full lg:max-w-screen-lg mx-auto text-xxs md:text-xs lg:text-sm uppercase font-semibold tracking-wide text-green-700 text-left sm:text-left mt-4">
            Jubilee 2025 Resources
          </div>
          <h1 className="w-full lg:max-w-screen-lg mx-auto text-3xl md:text-4xl xl:text-4.5xl font-serif text-balance text-left sm:text-left tracking-tight">
            Pilgrims of Hope in Australia
          </h1>
          <p className="w-full lg:max-w-screen-lg mx-auto text-left sm:text-left text-base sm:text-md text-balance">
            &quot;Brothers and sisters. May the Lord, risen from the dead and
            ascended into heaven, grant us the grace to rediscover hope, to
            proclaim hope and to build hope.&quot;
          </p>
          <div className="w-full lg:max-w-screen-lg mx-auto flex flex-wrap gap-3 justify-start sm:justify-start items-center mt-6">
            <Link
              href="#primer"
              aria-label="Download printable PDF"
              className="w-fit whitespace-nowrap uppercase text-sm font-bold tracking-widest border border-green-800 hover:border-green-800 bg-green-800 hover:bg-green-700 text-white px-4 lg:px-8 py-4 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/sites/"
              aria-label="Download printable PDF"
              className="w-fit whitespace-nowrap uppercase text-sm font-bold tracking-widest border border-stone-800 hover:bg-stone-700 hover:text-stone-100 px-4 lg:px-8 py-4 transition duration-300"
            >
              View Pilgrimage Sites ⇢
            </Link>
          </div>
        </div>
        <div className="group col-span-12 md:col-span-4 hidden md:flex justify-start items-end pr-8 md:pr-12 lg:pr-16">
          <Image
            src="/jubilee/jubilee-logo-1280.png"
            alt="Jubilee 2025 Icon"
            width={300}
            height={300}
            className="w-[300] h-auto group-hover:saturate-150 group-hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
