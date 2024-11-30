import { Checkbox } from "@headlessui/react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import React from "react";
import { BiMapAlt } from "react-icons/bi";

export default function SitesMap({ location }: { location: string }) {
  return (
    <Checkbox className="group relative w-full flex flex-col">
      <div className="absolute z-30 top-0 right-0 md:right-1/2 md-hover:h-20 translate-x-0 md:translate-x-1/2 w-fit px-[27px] py-3 text-orange-100/80 group-hover:text-white rounded-bl-xl md:rounded-br-xl bg-stone-950 group-hover:bg-orange-600/90 transition duration-300">
        <BiMapAlt></BiMapAlt>
      </div>
      <div className="w-full h-fit max-h-[500px] group-aria-[checked=true]:max-h-[0px] overflow-hidden transition-max-h duration-300 ease-in-out">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_DEV_GOOGLE_MAPS_API_KEY!}
          height="240px"
          width="100%"
          mode="place"
          zoom="5"
          q={location.replace(" ", "+") + "+Australia"}
          allowfullscreen
        />
      </div>
    </Checkbox>
  );
}
