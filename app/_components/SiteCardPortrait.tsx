import React from "react";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";

export default function SiteCardPortrait({
  site,
}: {
  site: PilgrimageSiteType;
}) {
  return (
    <>
      {/* Site Card */}
      <div className="relative group col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 bg-white transition duration-300">
        <div className="aspect-portrait overflow-hidden">
          <Link
            href={"/sites/" + site.slug}
            aria-label={site.name.replace(/&#39;/g, "'")}
          >
            <div className="absolute z-40 bottom-0 left-0 w-full flex flex-col gap-2 text-white pl-4 sm:pl-6 pr-6 pt-6 pb-6 md:pb-8">
              <h3 className="text-base sm:text-lg md:text-2xl font-serif leading-tight group-hover:text-orange-300">
                {site.name.replace(/&#39;/g, "'")}
              </h3>
              <div className="w-fit text-xxs font-bold tracking-widest px-[6px] py-1 leading-4 text-white bg-green-700">
                {site.state}
              </div>
              <div className="relative max-w-[90%] w-[80px] sm:w-[180px] group-hover:w-[550px] h-4 md:h-8 border-b-2 border-dotted group-hover:orange-500 border-orange-300 mb-2 transition-max-w duration-500">
                <div>
                  <BiRightArrowAlt className="absolute bottom-0 right-0 translate-y-1/2 size-6 md:size-8 text-stone-800 group-hover:text-white group-hover:bg-orange-500 bg-orange-300 rounded-full p-1 transition duration-200"></BiRightArrowAlt>
                </div>
              </div>
            </div>
            <Image
              src={site!.image}
              alt={site!.name}
              width={285}
              height={475}
              className="absolute top-0 left-0 z-10 w-full h-full object-cover hover:scale-105 transition duration-300"
            />
            <div className="absolute z-10 bottom-0 w-full h-2/3 bg-gradient-to-t from-black/70 via-black/70 to-transparent"></div>
          </Link>
        </div>
      </div>
    </>
  );
}
