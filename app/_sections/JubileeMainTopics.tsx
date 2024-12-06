import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function JubileeMainTopics() {
  return (
    <div id="maintopics" className="grid grid-cols-12 mt-0 lg:mt-4">
      <Link
        href="https://www.iubilaeum2025.va/en.html"
        target="_blank"
        className="relative col-span-12 md:col-span-4 aspect-video md:aspect-square lg:aspect-video bg-green-800 text-white overflow-hidden transition duration-300"
      >
        <div className="group w-full h-full flex flex-row justify-start items-end gap-2">
          <div className="absolute bottom-0 left-0 w-full items-end z-10 font-bold px-8 py-8">
            <div className="text-xs uppercase text-yellow-200">Watch Video</div>
            <h2 className="text-2xl md:text-2xl font-serif font-bold">
              What is Jubilee 2025?
            </h2>
          </div>
          <Image
            src="/jubilee/jubilee-main-topic-1.jpg"
            alt="main topic 1"
            width={395}
            height={148}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-75 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 z-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full transition duration-300"></div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </Link>
      <Link
        href="#resources"
        className="relative col-span-12 md:col-span-4 aspect-video md:aspect-square lg:aspect-video px-8 py-8 bg-green-800 text-white overflow-hidden transition duration-300"
      >
        <div className="group w-full h-full flex flex-row justify-start items-end gap-2">
          <div className="absolute bottom-0 left-0 w-full items-end z-10 font-bold px-8 py-8">
            <div className="text-xs uppercase text-yellow-200">Downloads</div>
            <h2 className="text-2xl md:text-2xl font-serif font-bold">
              Australian Resources
            </h2>
          </div>
          <Image
            src="/jubilee/jubilee-main-topic-2.jpg"
            alt="main topic 1"
            width={1080}
            height={720}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-75 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 z-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full transition duration-300"></div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </Link>
      <Link
        href="#faq"
        className="relative col-span-12 md:col-span-4 aspect-video md:aspect-square lg:aspect-video px-8 py-8 bg-green-800 text-white overflow-hidden transition duration-300"
      >
        <div className="group w-full h-full flex flex-row justify-start items-end gap-2">
          <div className="absolute bottom-0 left-0 w-full items-end z-10 font-bold px-8 py-8">
            <div className="text-xs uppercase text-yellow-200">FAQ</div>
            <h2 className="text-2xl md:text-2xl font-serif font-bold">
              Questions pilgrims ask
            </h2>
          </div>
          <Image
            src="/jubilee/jubilee-main-topic-3.jpg"
            alt="main topic 1"
            width={1080}
            height={720}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-75 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 z-10 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/80 to-transparent translate-y-full transition duration-300"></div>
        </div>
        <div className="absolute z-0 bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </Link>
    </div>
  );
}
