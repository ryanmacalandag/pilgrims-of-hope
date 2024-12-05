import React from "react";
import {
  BiCheckboxChecked,
  BiBookmarkAltPlus,
  BiSolidHeart,
} from "react-icons/bi";

const indulgences = [
  "Have the interior disposition of complete detachment from sin, even venial sin.",
  "Make a sacramental Confession.",
  "Receive the Holy Eucharist.",
  "Pray for the intentions of the pope. This can usually be done by praying one Our Father, one Hail Mary, and one Glory Be.",
];

export default function JubileePlenaryIndulgences() {
  return (
    <div
      id="plenary-indulgence"
      className="flex flex-col gap-8 lg:gap-12 px-8 md:px-12 lg:px-16"
    >
      <div className="border-b-2 border-green-500/40 border-dotted pb-1">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiSolidHeart></BiSolidHeart>
          Plenary Indulgence
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5">
          <div className="flex flex-col gap-4 pr-4 md:pr-8 mb-2">
            <p className="text-2xl md:text-3xl font-serif text-pretty">
              Learn more about plenary indulgence
            </p>
            <p>
              A plenary indulgence is the remission of the temporal punishment
              due to sins whose guilt has already been forgiven. In order to
              obtain these indulgences when participating in a pilgrimage or
              visiting a holy shrine, the faithful must:
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <ul className="pl-4 sm:pl-4 pr-8 sm:pr-10 divide-y">
            {indulgences &&
              indulgences.map((item, key) => {
                return (
                  <li
                    key={key}
                    className="flex items-center gap-2 font-serif tracking-tight leading-snug py-4 text-balance"
                  >
                    <BiCheckboxChecked className="flex-grow-0 flex-shrink-0 size-8 text-green-500"></BiCheckboxChecked>
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-12">
          <div className="flex flex-col gap-4 pl-0 pr- md:pr-8 mt-4 py-4">
            <p className="flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-3 text-amber-700">
              <BiBookmarkAltPlus className="flex-shrink-0 size-6"></BiBookmarkAltPlus>
              Plenary indulgences obtained during the Jubilee Year can also be
              applied to souls in purgatory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
