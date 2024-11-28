import Link from "next/link";
import React from "react";
import { BiCloudDownload, BiFile } from "react-icons/bi";

const downloads = [
  {
    title: "Download #",
    type: "document",
    url: "#",
  },
  {
    title: "Download #2",
    type: "document",
    url: "#",
  },
  {
    title: "Download #3",
    type: "document",
    url: "#",
  },
  {
    title: "Download #4",
    type: "document",
    url: "#",
  },
  {
    title: "Download #5",
    type: "document",
    url: "#",
  },
  {
    title: "Download #6",
    type: "document",
    url: "#",
  },
  {
    title: "Download #7",
    type: "document",
    url: "#",
  },
];

export default function JubileeResources() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 px-8 md:px-12 lg:px-16">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiCloudDownload></BiCloudDownload>
          Download Resources
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 mb-6">
          <div className="flex flex-col gap-4 pl-0 md:pl-0 mb-6">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              We&#39;ve put together useful resources
            </p>
            <p>
              Download these resources for your parish, school or community.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-4">
            {downloads.map((items, key) => {
              return (
                <Link
                  href={items.url}
                  key={key}
                  className="group col-span-4 lg:col-span-3 flex flex-col justify-between items-center overflow-hidden aspect-document rounded-lg bg-stone-100 hover:bg-stone-200/50 hover:shadow-xl transition duration-300"
                >
                  <div className="flex flex-grow content-center items-center text-stone-600 group-hover:text-green-700 transition duration-300">
                    <BiFile size={48}></BiFile>
                  </div>
                  <p className="w-full flex justify-center uppercase text-xxs bg-yellow-500/30 py-2">
                    {items.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
