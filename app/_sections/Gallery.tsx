import React from "react";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";
import SiteCard from "../_components/SiteCard";
import FilterLabel from "../_components/FilterLabel";
import GalleryPagination from "../_components/GalleryPagination";

export default function Gallery({
  filteredSites,
  filteredTotal,
  filterBy,
  max,
  pages,
  current,
}: {
  filteredSites: PilgrimageSiteType[];
  filteredTotal: number;
  filterBy: string;
  max: number;
  pages: number;
  current: string;
}) {
  return (
    <section>
      <FilterLabel
        filterBy={filterBy}
        filteredTotal={filteredTotal}
        max={max}
        current={current}
      ></FilterLabel>
      <div className="w-full max-w-screen-xl mx-auto px-2 md:px-12 py-4">
        <div id="gallery" className="grid grid-cols-12 gap-4">
          {filteredSites.length === 0 ? (
            <p className="col-span-12 text-center font-serif text-stone-800/70 h-[30dvh]">
              Nothing found.
            </p>
          ) : (
            filteredSites.map((site, key) => {
              return <SiteCard key={key} site={site}></SiteCard>;
            })
          )}
        </div>
      </div>
      {pages > 1 && (
        <GalleryPagination
          filterBy={filterBy}
          pages={pages}
          current={current}
        ></GalleryPagination>
      )}
    </section>
  );
}
