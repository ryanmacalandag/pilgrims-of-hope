import React from "react";
import { BiGridAlt } from "react-icons/bi";

export default function FilterLabel({
  filterBy,
  filteredTotal,
  max,
  current,
}: {
  filterBy: string;
  filteredTotal: number;
  max: number;
  current: string;
}) {
  return (
    <section>
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 pt-2 md:pt-2">
        <div className="w-full flex flex-row gap-4 justify-between items-center md:items-baseline text-xs text-stone-800 tracking-widest uppercase border-b-2 border-green-500/40 border-dotted pb-1 mb-4">
          <h2 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold leading-[1rem] text-balance text-green-700 uppercase tracking-wider">
            <BiGridAlt></BiGridAlt>
            <span>{filterBy.split("-").join(" ")}</span>
          </h2>
          <p className="text-right text-sm md:text-base font-sans font-bold text-green-700 uppercase tracking-wider">
            {max * Number(current) > filteredTotal
              ? filteredTotal
              : max * Number(current)}
            /{filteredTotal} Site
            {filteredTotal !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
