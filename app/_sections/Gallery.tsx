import React from 'react'
import { PilgrimageSiteType } from '../_data/pilgrimagesite'
import Image from 'next/image';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

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
              <p className='col-span-12 text-center h-[30dvh] flex justify-center items-center'>No site found.</p>
            )
            :
            sites.map((site,key) => {
              return (
                <div key={key} className='col-span-12 sm:col-span-4 lg:col-span-3 flex flex-col gap-2 overflow-hidden hover:shadow-lg font-serif bg-white'>
                  <div className='w-full h-fit aspect-video sm:aspect-square overflow-hidden'>
                    <Link href={'/sites/' + site.slug}>
                      <Image
                        src={site.image}
                        alt={site.name}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover hover:scale-105 transition duration-300'
                      />
                    </Link>
                  </div>
                  <div className='flex flex-col gap-2 px-6 py-6'>
                    <h2 className='leading-tight'>{site.name}</h2>
                    <p className='font-sans text-sm text-stone-500 leading-4'>{site.diocese}</p>
                    <div className='group relative w-full h-8 border-b-4 border-dotted border-orange-400/60 hover:border-stone-800/40 mb-2'>
                      <Link href={'/sites/' + site.slug}>
                        <BiRightArrowAlt size={32} className='absolute bottom-0 right-0 translate-y-1/2 text-white bg-orange-500 group-hover:bg-stone-800 rounded-full p-1 transition duration-300'></BiRightArrowAlt>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
