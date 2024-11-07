import React from 'react'
import { PilgrimageSiteType } from '../_data/pilgrimagesite'
import SiteCard from '../_components/SiteCard';
import FilterLabel from '../_components/FilterLabel';

type GalleryPropsType = {
  filteredSites: PilgrimageSiteType[];
  filterBy: string;
}

export default function Gallery( {filteredSites, filterBy}: GalleryPropsType ) {

  const sites = filteredSites;

  return (
    <section>
      <FilterLabel filterBy={filterBy} quantity={filteredSites.length}></FilterLabel>
      <div className='w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-4'>
        <div id='gallery' className='grid grid-cols-12 gap-4'>
          {
            sites.length === 0 ?

            (
              <p className='col-span-12 text-center font-serif text-stone-800/70 h-[30dvh] flex justify-center items-center'>Nothing found.</p>
            )
            :
            sites.map((site,key) => {
              return (
                <SiteCard key={key} site={site}></SiteCard>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
