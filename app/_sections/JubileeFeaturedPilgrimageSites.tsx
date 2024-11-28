import Link from "next/link";
import React from "react";
import { BiGridAlt } from "react-icons/bi";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import Image from "next/image";

export default function JubileeFeaturedPilgrimageSites() {
  const allFeaturedSites = pilgrimageSites.filter((s) => s.featured);

  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1 px-6 md:px-12 lg:px-16">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiGridAlt></BiGridAlt>
          Featured Pilgrimage Sites
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 mb-6">
          <div className="flex flex-col gap-4 px-8 md:px-12 lg:px-16 mb-6">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              Australian pilgrimage sites you can visit
            </p>
            <p>
              We&#39;ve listed down all the participating sites in every state
              and diocese.
            </p>
            <div className="w-full flex gap-3 justify-start md:justify-start items-center">
              <Link
                href="/sites/all"
                aria-label="View Jubilee 2025 Calendar"
                className="w-fit uppercase text-sm font-bold tracking-widest border border-stone-800 hover:bg-stone-700 hover:text-stone-100 px-8 py-4 mt-4 transition duration-300"
              >
                View All Sites ⇢
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12">
            {allFeaturedSites.map((site, key) => {
              return (
                <Link
                  href={"/states/" + site.state.toLowerCase()}
                  title={site.name}
                  key={key}
                  className="relative group col-span-4 lg:col-span-3 flex flex-col justify-between items-center overflow-hidden aspect-square bg-stone-100 hover:bg-stone-200/50 hover:shadow-xl hover:ring-4 ring-green-500/50 transition duration-300"
                >
                  <div className="absolute z-20 translate-y-12 group-hover:-translate-y-0 bottom-0 left-0 w-full text-xs uppercase font-bold tracking-wider font-sans text-center text-white bg-stone-700/90 px-4 py-3 transition duration-300">
                    {site.state}
                  </div>
                  <Image
                    src={site.image}
                    alt={site.name}
                    width={140}
                    height={180}
                    className="object-cover object-center w-full h-full group-hover:brightness-125 group-hover:scale-105 transition duration-300"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
