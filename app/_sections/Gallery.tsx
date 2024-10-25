import React from 'react'
import { pilgrimageSites } from '../_data/pilgrimagesite'
import Image from 'next/image';

export default function Gallery() {

  const sites = pilgrimageSites;

  return (
    <section>
      <div className='w-full max-w-screen-lg mx-auto px-6 py-12'>
        <div id='gallery' className='grid grid-cols-12 gap-8'>
          {
            sites.map((site,key) => {
              return (
                <div key={key} className='group col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-2 rounded-xl overflow-hidden font-serif'>
                  <div className='w-full h-fit aspect-video sm:aspect-square overflow-hidden'>
                    <Image
                      src={site.image}
                      alt={site.name}
                      width={500}
                      height={500}
                      className='w-full h-full object-cover hover:scale-105 transition duration-300'
                    />
                  </div>
                  <div>
                    <h2>{site.name}</h2>
                    <p className='font-sans text-md text-stone-500'>{site.diocese}</p>
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
