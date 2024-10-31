import React from 'react'
import { PilgrimageSiteType } from '../_data/pilgrimagesite'
import { BackButton } from "@/app/_components/BackButton";
import Image from "next/image";
import Link from "next/link";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import ImageModal from './ImageModal';

type SiteDetailsPropsType = {
  site: PilgrimageSiteType;
}

function imageLoader(name:string,  type:string, city:string, state:string) {
  const address = [name.split(' ').join('+'),type.split(' ').join('+'),city.split(' ').join('+'),state.split(' ').join('+')].join('+')
  const encoded = encodeURI(address.replace('\'',''))
  console.log(encoded)
  const staticMap = 'https://maps.googleapis.com/maps/api/staticmap?center=' + encoded + '&zoom=17&maptype=hybrid&markers=size:mid&size=640x640&scale=1&key=' + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  return staticMap
}

export default async function SiteDetails( {site}:SiteDetailsPropsType ) {

  console.log(site.website?.length)
  
  return (
    <section className="w-full flex-grow max-w-screen-lg mx-auto flex flex-col gap-6 mt-12">
        <BackButton></BackButton>
        <div className='flex flex-col gap-2 mt-2 pl-12 overflow-hidden'>
          <div className='flex gap-2'>
            <Link
              href={'/states/' + site.state.toLowerCase()}
              aria-label={site.state}
            >
              <div className='text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center text-nowrap hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-3 py-1 sm:py-1 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'>{site!.state}</div>
            </Link>
            <Link
              href={'/dioceses/' + site.diocese.toLowerCase().split(' ').join('-')}
              aria-label={site.state}
            >
              <div className='text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center text-nowrap hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-3 py-1 sm:py-1 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'>{site!.diocese}</div>
            </Link>
            {/* <div className='text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center text-nowrap hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-3 py-1 sm:py-1 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'>{site!.diocese}</div> */}
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-balance">{site?.name.replace(/&#39;/g,'\'')}</h1>
        </div>
        <div className="group w-full aspect-video md:aspect-banner overflow-hidden">
          <Image
            src={site.image}
            alt={site.name}
            width={1100}
            height={300}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"  
          />
          { false && <ImageModal name={site.name} image={site.image}></ImageModal> }
        </div>
        <div className="grid grid-cols-12 gap-4 pl-12 pr-0 sm:pr-6 py-4 sm:py-8">
          <div className="col-span-12 md:col-span-8">
            <div className='my-2 flex flex-col gap-4 pr-8'>
              {
                site.description.map((text,key) => {
                  return (
                    <p key={key} className='first:text-xl first:font-serif text-stone-800/80 first:text-stone-950 first:mb-3 first:leading-8 leading-relaxed'>
                      { text.replace(/&#39;/g,'\'') }
                    </p>
                  )
                })
              }
            </div>
          </div>
          <div className='col-span-12 md:col-span-4 flex flex-col gap-6 text-stone-700'>
            <div className="*:border-b *:border-stone-400 *:border-dotted *:py-2">
              <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiEnvelope size={16}></BiEnvelope> Address</h4>
              <p>{site!.street + ', ' + site!.city + ', ' + site!.state }</p>
            </div>
            <div className="*:border-b *:border-stone-500 *:border-dotted *:py-2">
              <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiPhone size={16}></BiPhone> Contact</h4>
              {
                site!.contact.map((contact,key) => {
                  return (
                      <p key={key}>{contact}</p>
                  )
                })
              }
              <p className={site.website?.length === 0 ? 'hidden' : 'flex'}>
                <Link href={site.website!} aria-label='Visit website'>{site.website}</Link>
              </p>
            </div>
            <div className="col-span-12 sm:col-span-12 ">
              <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2 mb-2 border-b border-stone-400 border-dotted py-2"><BiMap size={16}></BiMap> Google Map</h4>
              <div className='w-full h-52 overflow-hidden bg-stone-500/20'>
                <Link
                  href={'https://www.google.com/maps/search/?api=1&zoom=8&query=' + site.name.replace(/&#39;/g,'\'').split(' ').join('+') + '+' + site.type!.split(' ').join('+') + '+' + site.city.split(' ').join('+') + '+' + site.state.split(' ').join('+')}
                  target="_blank"
                  aria-label="View on Google Maps"
                  className="group"
                >
                  <Image
                    src={await imageLoader(site.name.replace(/&#39;/g,'\''),site.type!,site.city,site.state)}
                    alt={site.name}
                    width={320}
                    height={240}
                    className='w-full min-w-full h-full object-cover object-center group-hover:scale-150 transition duration-300'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BackButton></BackButton>
      </section>
  )
}
