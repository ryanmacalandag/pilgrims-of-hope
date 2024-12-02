import { Checkbox } from "@headlessui/react";
import React from "react";
import { BiMapAlt } from "react-icons/bi";
import MapsState from "./MapStates";

export default function StatesHeaderMap({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  return (
    <Checkbox className="group relative w-full flex flex-col">
      <div className="absolute z-30 top-0 right-0 md:right-1/2 md-hover:h-20 translate-x-0 md:translate-x-1/2 w-fit px-[27px] py-3 text-orange-100/80 group-hover:text-white rounded-bl-xl md:rounded-br-xl bg-stone-950 group-hover:bg-orange-600/90 transition duration-300">
        <BiMapAlt></BiMapAlt>
      </div>
      <div className="w-full h-fit max-h-[400px] group-aria-[checked=true]:max-h-[100px] overflow-hidden transition-max-h duration-500 ease-in-out">
        <MapsState lat={lat} lng={lng}></MapsState>
      </div>
    </Checkbox>
  );
}
