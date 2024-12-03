import Link from "next/link";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import Image from "next/image";

export default function JubileeFeaturedPilgrimageSitesGridOnly() {
  const allFeaturedSites = pilgrimageSites.filter((s) => s.featured);

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1 px-6 md:px-12 lg:px-16">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiSolidStar></BiSolidStar>
          Featured Pilgrimage Sites
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="grid grid-cols-12">
            {allFeaturedSites.slice(0, 10).map((site, key) => {
              return (
                <Link
                  href={"/sites/" + site.slug}
                  title={site.name}
                  key={key}
                  className="relative group col-span-6 sm:col-span-4 lg:col-span-3 [&:nth-child(5n+1)]:row-span-2 aspect-video [&:nth-child(5n+1)]:aspect-auto flex flex-col justify-between items-center overflow-hidden bg-stone-100 hover:bg-stone-200/50 hover:shadow-xl hover:ring-4 ring-green-500/50 transition duration-300"
                >
                  <div className="absolute z-20 top-1/2 translate-y-60 group-hover:-translate-y-1/2 left-1/12 w-fit flex items-center gap-1 text-xs uppercase font-bold tracking-wider font-sans text-center text-white bg-green-700 px-3 py-2 rounded-full transition duration-300">
                    <BiSolidStar></BiSolidStar>
                    {site.state}
                  </div>
                  <Image
                    src={site.image}
                    alt={site.name}
                    width={296}
                    height={485}
                    className="object-cover object-center w-full h-full group-hover:scale-105 group-hover:brightness-50 transition duration-300"
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
