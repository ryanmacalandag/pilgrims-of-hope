import React from 'react'
import { PilgrimageSiteType } from '../_data/pilgrimagesite'
import Link from 'next/link'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'

type SiteCardPropType = {
  site: PilgrimageSiteType;
}

export default function SiteCard({site}:SiteCardPropType) {
  return (
    <div className='group col-span-12 sm:col-span-4 lg:col-span-3 flex flex-col gap-2 overflow-hidden hover:shadow-lg font-serif bg-white'>
      <div className='w-full h-fit aspect-video sm:aspect-portrait overflow-hidden'>
        <Link href={'/sites/' + site.slug}>
          <Image
            src={site!.image}
            alt={site!.name}
            width={500}
            height={500}
            className='w-full h-full object-cover hover:scale-105 transition duration-300'
          />
        </Link>
      </div>
      <div className='flex flex-col flex-grow justify-between gap-2 py-6 pr-6'>
        <div className='flex flex-col gap-2 px-6'>
          <h2 className='text-lg leading-tight'>{site.name}</h2>
          <p className='font-sans text-sm text-stone-500 leading-4'>{site.diocese}</p>
        </div>
        <div className='relative w-full h-8 border-b-2 border-dotted border-orange-400/60 group-hover:border-stone-800/40 mb-2'>
          <Link href={'/sites/' + site.slug} className=''>
            <BiRightArrowAlt size={32} className='group-hover:translate-x-2 absolute bottom-0 right-0 translate-y-1/2 text-white bg-orange-500 group-hover:bg-stone-800 rounded-full p-1 transition duration-300'></BiRightArrowAlt>
          </Link>
        </div>
      </div>
    </div>
    )
}
