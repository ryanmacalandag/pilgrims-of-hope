import React from "react";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";
import SiteCard from "../_components/SiteCard";
import FilterLabel from "../_components/FilterLabel";

const MAX_ITEMS: number = 8;

export default function Gallery({
  filteredSites,
  filterBy,
  page,
}: {
  filteredSites: PilgrimageSiteType[];
  filterBy: string;
  page: number;
}) {
  const sites = filteredSites.slice(0, 8);

  return (
    <section>
      <FilterLabel
        filterBy={filterBy}
        quantity={filteredSites.length}
        page={page}
        max={MAX_ITEMS}
      ></FilterLabel>
      <div className="w-full max-w-screen-xl mx-auto px-2 md:px-12 py-4">
        <div id="gallery" className="grid grid-cols-12 gap-4">
          {sites.length === 0 ? (
            <p className="col-span-12 text-center font-serif text-stone-800/70 h-[30dvh]">
              Nothing found.
            </p>
          ) : (
            sites.map((site, key) => {
              return <SiteCard key={key} site={site}></SiteCard>;
            })
          )}
        </div>
      </div>
    </section>
  );
}
