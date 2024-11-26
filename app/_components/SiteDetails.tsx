import React from "react";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";
import { BackButton } from "@/app/_components/BackButton";
import Image from "next/image";
import Link from "next/link";
import { BiHome, BiEnvelope, BiMap, BiPhone, BiZoomIn } from "react-icons/bi";
import SocialShareButtons from "./SocialShareButtons";

type SiteDetailsPropsType = {
  site: PilgrimageSiteType;
};

function imageLoader(name: string, type: string, city: string, state: string) {
  const address = [
    name.split(" ").join("+"),
    type.split(" ").join("+"),
    city.split(" ").join("+"),
    state.split(" ").join("+"),
  ].join("+");
  const encoded = encodeURI(address.replace("'", ""));
  const staticMap =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    encoded +
    "&zoom=17&maptype=hybrid&markers=size:mid&size=640x640&scale=1&key=" +
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return staticMap;
}

export default async function SiteDetails({ site }: SiteDetailsPropsType) {
  console.log(site.website?.length);

  return (
    <section className="w-full flex-grow max-w-screen-lg mx-auto flex flex-col gap-6 mt-12">
      <BackButton></BackButton>
      <div className="flex flex-col gap-2 mt-2 pl-12 overflow-hidden">
        <div className="flex gap-2">
          <Link
            href={"/states/" + site.state.toLowerCase()}
            aria-label={site.state}
          >
            <div className="text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center items-center text-nowrap hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-3 py-1 sm:py-2 transition duration-300 text-xs font-sans uppercase tracking-wider">
              {site!.state}
            </div>
          </Link>
          <Link
            href={
              "/dioceses/" + site.diocese.toLowerCase().split(" ").join("-")
            }
            aria-label={site.diocese}
          >
            <div className="text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center items-center text-nowrap hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-3 py-1 sm:py-2 transition duration-300 text-xs font-sans uppercase tracking-wider">
              {site!.diocese}
            </div>
          </Link>
          {/* <div className='text-stone-700 bg-stone-300/60 w-fit h-full flex justify-center text-nowrap hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-3 py-1 sm:py-1 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'>{site!.diocese}</div> */}
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-balance pr-4">
          {site?.name.replace(/&#39;/g, "'")}
        </h1>
      </div>
      <div className="group w-full aspect-video md:aspect-banner overflow-hidden">
        <Link href={"/photos/" + site.slug} className="cursor-zoom-in">
          <div className="relative flex flex-col justify-center items-center">
            <p className="absolute top-0 left-0 z-20 w-full h-full flex justify-center items-center gap-2 text-center text-stone-100 text-sm tracking-wider uppercase translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <BiZoomIn size={18}></BiZoomIn>Click to zoom
            </p>
            <div className="absolute w-full h-full z-10 top-0 left-0 bg-transparent group-hover:bg-stone-700/60 transition duration-200"></div>
            <Image
              src={site.image}
              alt={site.name}
              width={1100}
              height={300}
              className="w-full h-full aspect-video md:aspect-banner object-cover object-center cursor-zoom-in group-hover:scale-105 transition duration-500"
            />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4 pl-12 pr-0 sm:pr-6 py-4 sm:py-8">
        <div className="col-span-12 md:col-span-8 pb-12">
          <div className="my-2 pr-8">
            {site.description.map((text, key) => {
              return (
                <p
                  key={key}
                  className="first:text-xl first:font-serif text-stone-800/80 first:text-stone-950 first:mb-3 first:leading-8 leading-relaxed mt-6 first:mt-0"
                >
                  {text.replace(/&#39;/g, "'")}
                </p>
              );
            })}
            {site.sources && (
              <div className="flex flex-col mt-16 py-3 border-y">
                <p>Source(s):</p>
                {site.sources.map((src, key) => {
                  return (
                    <a
                      href={src}
                      key={key}
                      target="_blank"
                      className="text-orange-700 hover:brightness-150"
                    >
                      {src}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 text-stone-700 border-t-2 sm:border-t-0 border-teal-700 pt-6 sm:pt-0">
          <div className="divide-y divide-stone-400 divide-dotted *:py-2">
            <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2">
              <BiHome size={16}></BiHome>Diocese
            </h4>
            <div className="flex text-orange-700 hover:brightness-150">
              <Link
                href={
                  "/dioceses/" + site.diocese.toLowerCase().split(" ").join("-")
                }
                aria-label={site.diocese}
              >
                <p className="">{site!.diocese}</p>
              </Link>
            </div>
          </div>
          <div className="divide-y divide-stone-400 divide-dotted *:py-2">
            <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2">
              <BiEnvelope size={16}></BiEnvelope> Address
            </h4>
            <p>{site!.street + ", " + site!.city + ", " + site!.state}</p>
          </div>
          <div className="divide-y divide-stone-400 divide-dotted *:py-2">
            <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2">
              <BiPhone size={16}></BiPhone> Contact
            </h4>
            {site!.contact.map((contact, key) => {
              return <p key={key}>{contact}</p>;
            })}
            {site.website && (
              <p className="flex text-orange-700 hover:brightness-150">
                <Link
                  href={site.website!}
                  target="_blank"
                  aria-label="Visit website"
                >
                  {site.website}
                </Link>
              </p>
            )}
          </div>
          <div className="col-span-12 sm:col-span-12 ">
            <h4 className="text-xs text-teal-800 font-extrabold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2 mb-2 border-b border-stone-400 border-dotted py-2">
              <BiMap size={16}></BiMap> Google Map
            </h4>
            <div className="w-full h-52 overflow-hidden bg-stone-500/20">
              <Link
                href={
                  "https://www.google.com/maps/search/?api=1&zoom=8&query=" +
                  site.name.replace(/&#39;/g, "'").split(" ").join("+") +
                  "+" +
                  site.types![0].split(" ").join("+") +
                  "+" +
                  site.city.split(" ").join("+") +
                  "+" +
                  site.state.split(" ").join("+")
                }
                target="_blank"
                aria-label="View on Google Maps"
                className="group"
              >
                <Image
                  src={await imageLoader(
                    site.name.replace(/&#39;/g, "'"),
                    site.types![0],
                    site.city,
                    site.state,
                  )}
                  alt={site.name}
                  width={320}
                  height={240}
                  className="w-full min-w-full h-full object-cover object-center group-hover:scale-150 transition duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SocialShareButtons></SocialShareButtons>
      <BackButton></BackButton>
    </section>
  );
}
