import Link from "next/link";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { pilgrimageSites } from "../_data/pilgrimagesite";

export default function PilgrimageDioceses() {
  const allSites = pilgrimageSites.sort((a, b) => a.name.localeCompare(b.name));
  const allDioceses = allSites.map((s) => {
    return s.diocese;
  });
  const dioceseSet = new Set(allDioceses);
  const allUniqueDioceses = [...dioceseSet];

  return (
    <div id="sites-featured" className="flex flex-col gap-4 lg:gap-6">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1 px-8 md:px-12 lg:px-16">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiSolidStar></BiSolidStar>
          All Participating Dioceses
        </h3>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 space-4 px-6 sm:px-8 lg:px-20 py-2 sm:py-3">
        {allUniqueDioceses &&
          allUniqueDioceses
            .sort((a, b) => a.localeCompare(b))
            .map((diocese, key) => {
              return (
                <Link
                  href={
                    "/dioceses/" + diocese.toLowerCase().split(" ").join("-")
                  }
                  key={key}
                >
                  <p className="flex gap-4 break-inside-avoid-column mb-3">
                    <span className="w-10 flex flex-shrink-0 justify-end">
                      {key + 1}.
                    </span>
                    <span className="flex underline underline-offset-[5px] decoration-dotted decoration-stone-400/60 hover:decoration-green-600/30 hover:text-green-800 transition duration-300">
                      {diocese}
                    </span>
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
