import React from 'react'
import { PilgrimageSiteType } from '../_data/pilgrimagesite'
import SiteCard from '../_components/SiteCard';

type GalleryPropsType = {
  filteredSites: PilgrimageSiteType[];
}

export default function Gallery( {filteredSites}: GalleryPropsType ) {

  const sites = filteredSites;

  return (
    <section>
      <div className='w-full max-w-screen-lg mx-auto px-6 py-4'>
        <div id='gallery' className='grid grid-cols-12 gap-4'>
          {
            sites.length == 0 ?

            (
              <p className='col-span-12 text-center h-[30dvh] flex justify-center items-center'>Nothing found.</p>
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
