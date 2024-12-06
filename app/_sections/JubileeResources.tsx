import Link from "next/link";
import React from "react";
import { BiCloudDownload, BiFile } from "react-icons/bi";
import downloadables from "../_data/downloadables";

export default function JubileeResources() {
  const downloads = downloadables;

  return (
    <div
      id="resources"
      className="flex flex-col gap-8 lg:gap-12 px-8 md:px-12 lg:px-16"
    >
      <div className="border-b-2 border-green-500/40 border-dotted pb-1">
        <h2 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiCloudDownload></BiCloudDownload>
          Download Resources
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 mb-6">
          <div className="flex flex-col gap-4 pl-0 md:pl-0 mb-2">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              Useful resources for Australian Catholics
            </p>
            <p>
              Download these resources for your parish, school or community.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {downloads.map((items, key) => {
              return (
                <Link
                  href={items.link}
                  target="_blank"
                  key={key}
                  className="group relative col-span-4 sm:col-span-4 lg:col-span-3 grid grid-rows-12 overflow-hidden aspect-document rounded-lg bg-stone-100 hover:bg-stone-200/50 hover:shadow-xl hover:ring-4 ring-green-700/40 hover:-translate-y-2 transition duration-300"
                >
                  <div className="row-span-7 flex justify-center items-center text-stone-600/90 group-hover:text-green-700 transition duration-300 p-2 md:p-4">
                    <BiFile className="size-10 md:size-12"></BiFile>
                  </div>
                  <p className="row-span-5 w-full flex justify-center text-center text-balance text-xxs bg-stone-200 p-2 md:p-4 leading-tight text-ellipsis overflow-hidden">
                    {items.name}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-stone-200 via-stone-200  to-transparent"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
