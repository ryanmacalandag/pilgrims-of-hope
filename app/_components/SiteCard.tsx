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
    <div className='group col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-2 overflow-hidden shadow-sm hover:shadow-lg font-serif bg-white'>
      <div className='w-full h-fit aspect-video sm:aspect-video overflow-hidden'>
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
      <div className='flex flex-col flex-grow justify-between gap-2 pt-3 md:pt-6 pb-5 md:pb-6 pr-6'>
        <div className='flex flex-col gap-2 px-6'>
          <Link href={'/sites/' + site.slug} aria-label={site.name}>
            <h2 className='leading-snug hover:text-teal-950/80'>{site.name.replace(/&#39;/g,'\'')}</h2>
          </Link>
          <Link href={'/dioceses/' + site.diocese.toLowerCase().split(' ').join('-')} aria-label={site.diocese}>
            <p className='font-sans text-sm text-stone-500 leading-4 hover:text-orange-700/50'>{site.diocese}</p>
          </Link>
        </div>
        <div className='relative w-full h-4 md:h-8 border-b-2 border-dotted border-orange-400/60 group-hover:border-stone-800/40 mb-2'>
          <Link href={'/sites/' + site.slug} aria-label='view details'>
            <BiRightArrowAlt size={40} className='group-hover:translate-x-2 absolute bottom-0 right-0 translate-y-1/2 text-white bg-orange-500 group-hover:bg-stone-800 rounded-full p-1 transition duration-300'></BiRightArrowAlt>
          </Link>
        </div>
      </div>
    </div>
    )
}
