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
    <div className='group col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 grid grid-cols-12 gap-0 sm:gap-2 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 bg-white transition duration-300'>
      <div className='col-span-4 sm:col-span-12 aspect-auto sm:aspect-video overflow-hidden'>
        <Link href={'/sites/' + site.slug} aria-label={site.name.replace(/&#39;/g,'\'')}>
          <Image
            src={site!.image}
            alt={site!.name}
            width={320}
            height={180}
            className='w-full h-full object-cover hover:scale-105 transition duration-300'
          />
        </Link>
      </div>
      <div className='col-span-8 sm:col-span-12 flex flex-col justify-between gap-2 pt-6 sm:pt-6 pb-5 md:pb-6 pr-4 sm:pr-6'>
        <div className='flex flex-col gap-2 px-4 sm:px-6'>
          <Link href={'/sites/' + site.slug} aria-label={site.name}>
            <h2 className='text-lg md:text-xl font-serif leading-tight hover:text-teal-950/80'>{site.name.replace(/&#39;/g,'\'')}</h2>
          </Link>
          <Link href={'/dioceses/' + site.diocese.toLowerCase().split(' ').join('-')} aria-label={site.diocese}>
            <p className='font-sans text-base text-stone-600 leading-5 hover:text-orange-700/50'>{site.diocese}</p>
          </Link>
        </div>
        <div className='relative w-full h-4 md:h-8 border-b-2 border-dotted border-orange-400/60 group-hover:border-stone-800/40 mb-2'>
          <Link href={'/sites/' + site.slug} aria-label='view details'>
            <BiRightArrowAlt size={32} className='group-hover:translate-x-2 absolute bottom-0 right-0 translate-y-1/2 text-white bg-orange-500 group-hover:bg-stone-800 rounded-full p-1 transition duration-300'></BiRightArrowAlt>
          </Link>
        </div>
      </div>
    </div>
    )
}
