import Link from "next/link";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import Image from "next/image";

export default function JubileeFeaturedPilgrimageSitesGridOnly() {
  const allFeaturedSites = pilgrimageSites
    .filter((s) => s.featured)
    .sort((a, b) => a.name.localeCompare(b.name));

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
                  title={site.name.replace(/&#39;/g, "'")}
                  key={key}
                  className="relative group col-span-6 sm:col-span-4 lg:col-span-3 [&:nth-child(5n+1)]:row-span-2 aspect-video [&:nth-child(5n+1)]:aspect-auto flex flex-col justify-between items-center overflow-hidden bg-stone-100 hover:bg-stone-200/50 hover:shadow-xl hover:ring-4 ring-green-500/50 transition duration-300"
                >
                  <div
                    title="featured"
                    className="absolute z-20 top-0 right-0 translate-y-1/2 -translate-x-1/2 w-fit flex items-center gap-1 text-xs uppercase font-bold tracking-wider font-sans text-center text-green-700 group-hover:text-white/90 bg-white/60 group-hover:bg-green-700 px-3 py-2 rounded-full transition duration-300"
                  >
                    <BiSolidStar></BiSolidStar>
                  </div>
                  <div className="absolute z-50 bottom-0 left-0 translate-y-full group-hover:translate-y-0 w-full text-white text-xxs sm:text-xs text-balance px-2 sm:px-4 pb-2 sm:pb-4 pt-6 sm:pt-8 bg-gradient-to-t from-black/60 via-black/60 to-transparent transition duration-300">
                    <span>{site.name.replace(/&#39;/g, "'")}</span>
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
