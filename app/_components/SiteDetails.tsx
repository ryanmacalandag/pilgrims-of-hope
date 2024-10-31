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

function imageLoader(name:string,city:string,state:string) {
  const address = [name.split(' ').join('+'),city.split(' ').join('+'),state.split(' ').join('+')].join('+')
  const encoded = encodeURI(address)
  const staticMap = 'https://maps.googleapis.com/maps/api/staticmap?center=' + encoded + '&zoom=17&maptype=hybrid&markers=size:mid&size=640x640&scale=1&key=' + process.env.GOOGLE_MAPS_API_KEY
  console.log(Buffer.from('/maps/api/staticmap?center=&zoom=17&maptype=hybrid&markers=size:mid&size=640x640&scale=1&key=AIzaSyAGQmi7lczym5EcREB-rFZGyAHN6gQH3Z0').toString('base64'))
  return staticMap
}

export default async function SiteDetails( {site}:SiteDetailsPropsType ) {
  
  return (
    <section className="w-full flex-grow max-w-screen-lg mx-auto flex flex-col gap-6 mt-12">
        <BackButton></BackButton>
        <div className='flex flex-col gap-1 mt-2 pl-12'>
          <p className='text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-5 py-1 sm:py-2 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'>{site!.diocese}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-balance">{site?.name}</h1>
        </div>
        <div className="w-full aspect-video md:aspect-banner overflow-hidden">
          <Image
            src={site.image}
            alt={site.name}
            width={1100}
            height={300}
            className="w-full h-full object-cover object-center"  
          />
          { false && <ImageModal name={site.name} image={site.image}></ImageModal> }
        </div>
        <div className="grid grid-cols-12 gap-4 pl-12 pr-0 sm:pr-6">
          <div className="col-span-12 md:col-span-8">
            <div className='my-2 flex flex-col gap-4 pr-8'>
              {
                site.description.map((text,key) => {
                  return (
                    <p key={key} className='text-lg first:text-xl leading-relaxed'>{ text.replace(/&#39;/g,'\'') }</p>
                  )
                })
              }
            </div>
          </div>
          <div className='col-span-12 md:col-span-4 flex flex-col gap-6 text-stone-700'>
            <div className="*:border-b *:border-stone-400 *:border-dotted *:py-2">
              <h4 className="text-xs text-teal-800 font-bold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiEnvelope></BiEnvelope> Address</h4>
              <p>{site!.street}</p>
              <p>{site!.city}</p>
              <p>{site!.state}</p>
            </div>
            <div className="*:border-b *:border-stone-500 *:border-dotted *:py-2">
              <h4 className="text-xs text-teal-800 font-bold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiPhone></BiPhone> Contact</h4>
              {
                site!.contact.map((contact) => {
                  return (
                    <div key={contact}>
                      <p>{contact}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="col-span-12 sm:col-span-12 ">
              <h4 className="text-xs text-teal-800 font-bold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2 mb-2 border-b border-stone-400 border-dotted py-2"><BiMap size={22}></BiMap> Find on Map</h4>
              <div className='w-full h-52 overflow-hidden bg-stone-500/20'>
                <Link
                  href={'https://www.google.com/maps/search/?api=1&zoom=8&query=' + site.name.split(' ').join('+') + ' ' + site.city.split(' ').join('+') + ' ' + site.state.split(' ').join('+')}
                  target="_blank"
                  className="group"
                >
                  <Image
                    src={await imageLoader(site.name,site.city,site.state)}
                    alt={site.name}
                    width={640}
                    height={640}
                    className='w-full min-w-full h-full object-cover object-center group-hover:scale-150 transition duration-300'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
