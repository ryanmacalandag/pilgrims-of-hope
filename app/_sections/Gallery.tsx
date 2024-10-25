import React from 'react'
import { pilgrimageSites } from '../_data/pilgrimagesite'
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {

  const sites = pilgrimageSites;

  return (
    <section>
      <div className='w-full max-w-screen-lg mx-auto px-6 py-12'>
        <div id='gallery' className='grid grid-cols-12 gap-8'>
          {
            sites.map((site,key) => {
              return (
                <div key={key} className='group col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-2 rounded-xl overflow-hidden shadow-lg font-serif bg-white'>
                  <Link href={'/sites/' + site.slug}>
                    <div className='w-full h-fit aspect-video sm:aspect-square overflow-hidden'>
                      <Image
                        src={site.image}
                        alt={site.name}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover hover:scale-105 transition duration-300'
                      />
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-3'>
                      <h2 className='leading-tight'>{site.name}</h2>
                      <p className='font-sans text-sm text-stone-500 leading-4'>{site.diocese}</p>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
