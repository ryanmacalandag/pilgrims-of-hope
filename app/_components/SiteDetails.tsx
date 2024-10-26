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

export default function SiteDetails( {site}:SiteDetailsPropsType ) {
  
  return (
    <section className="w-full flex-grow max-w-screen-lg mx-auto flex flex-col gap-6 mt-12">
        <BackButton></BackButton>
        <h1 className="font-serif text-2xl sm:text-2xl lg:text-4xl text-balance pl-12 pr-6">{site?.name}</h1>
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
        <div className="grid grid-cols-12 gap-4 pl-12 ">
          <div className="col-span-12 sm:col-span-6">
            <p className="font-bold">{site!.name}</p>
            <p>{site!.diocese}</p>
          </div>
          <div className="col-span-12 sm:col-span-3 *:border-b *:border-stone-400 *:border-dotted *:py-2">
            <h4 className="text-xs text-teal-800 font-bold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiEnvelope></BiEnvelope> Address</h4>
            <p>{site!.street}</p>
            <p>{site!.city}</p>
            <p>{site!.state}</p>
          </div>
          <div className="col-span-12 sm:col-span-3 *:border-b *:border-stone-500 *:border-dotted *:py-2">
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

        </div>
          <div className="w-full sm:w-fit px-12">
            <Link
              href={site!.maplink}
              target="_blank"
              className="flex flex-row justify-center items-center gap-3 bg-teal-700 hover:bg-teal-600 text-white font-bold px-8 py-4 mt-4 transition duration-300"
            ><BiMap size={22}></BiMap>Google Maps</Link>
          </div>
      </section>
  )
}
