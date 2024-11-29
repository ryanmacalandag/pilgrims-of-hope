import React from "react";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";

type SiteCardPropType = {
  site: PilgrimageSiteType;
};

export default function SiteCard({ site }: SiteCardPropType) {
  return (
    <>
      {/* Site Card */}
      <div className="group col-span-12 xs:col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-3 grid grid-cols-12 grid-rows-none md:grid-rows-2 place-items-stretch p-4 gap-4 sm:gap-0 overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 bg-white rounded-lg hover:ring-4 ring-green-500/50 transition duration-300">
        <div className="row-span-1 col-span-4 sm:col-span-12 aspect-square sm:aspect-video rounded overflow-hidden">
          <Link
            href={"/sites/" + site.slug}
            aria-label={site.name.replace(/&#39;/g, "'")}
          >
            <Image
              src={site!.image}
              alt={site!.name}
              width={250}
              height={250}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </Link>
        </div>
        <div className="row-span-1 h-full col-span-8 sm:col-span-12 flex flex-col justify-between gap-2 pt-0 sm:pt-4 pb-2 md:pb-4 pr-4 sm:pr-6">
          <div className="flex flex-col justify-start gap-2 ">
            <Link href={"/sites/" + site.slug} aria-label={site.name}>
              <h3 className="text-lg md:text-xl font-serif leading-tight hover:text-teal-950/80">
                {site.name.replace(/&#39;/g, "'")}
              </h3>
            </Link>
            <Link
              href={
                "/dioceses/" + site.diocese.toLowerCase().split(" ").join("-")
              }
              aria-label={site.diocese}
            >
              <p className="font-sans text-base text-stone-600 leading-5 hover:text-orange-700/50">
                {site.diocese}
              </p>
            </Link>
          </div>
          <div className="relative w-full h-4 md:h-8 border-b-2 border-dotted border-orange-400/60 group-hover:border-stone-800/40">
            <Link href={"/sites/" + site.slug} aria-label="view details">
              <BiRightArrowAlt
                size={32}
                className="group-hover:translate-x-2 absolute bottom-0 right-0 translate-y-1/2 text-white bg-orange-500 group-hover:bg-stone-800 rounded-full p-1 transition duration-300"
              ></BiRightArrowAlt>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
