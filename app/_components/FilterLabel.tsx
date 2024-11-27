import React from "react";

export default function FilterLabel({
  filterBy,
  quantity,
}: {
  filterBy: string;
  quantity: number;
}) {
  return (
    <section>
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 pt-2 md:pt-2">
        <div className="w-full flex flex-row gap-4 justify-between items-baseline text-xs text-stone-800 tracking-widest uppercase border-b-2 border-green-500/40 border-dotted pb-1 mb-4">
          <h2 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
            <span>{filterBy.split("-").join(" ")}</span> Sites
          </h2>
          <p className="text-right">
            Showing {quantity} Site{quantity !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
