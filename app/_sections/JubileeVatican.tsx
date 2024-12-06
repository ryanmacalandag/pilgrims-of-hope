import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function JubileeMainTopics() {
  return (
    <div id="vatican" className="grid grid-cols-12 mt-4">
      <Link
        href="https://www.iubilaeum2025.va/en.html"
        target="_blank"
        className="relative col-span-12 md:col-span-4 aspect-video sm:aspect-banner md:aspect-square lg:aspect-video bg-green-800 text-white overflow-hidden hover:brightness-150 transition duration-300"
      >
        <div className="group w-full h-full flex flex-row justify-start items-end gap-2">
          <h2 className="absolute bottom-0 left-0 w-full items-end z-10 text-2xl md:text-2xl font-serif font-bold px-8 py-8">
            What is Jubilee 2025?
          </h2>
          <Image
            src="/jubilee/jubilee-main-topic-1.jpg"
            alt="main topic 1"
            width={395}
            height={148}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 z-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-1 transition duration-300"></div>
        </div>
      </Link>
      <Link
        href="https://www.iubilaeum2025.va/en/giubileo-2025/bolla.html"
        target="_blank"
        className="relative col-span-12 md:col-span-4 aspect-video sm:aspect-banner md:aspect-square lg:aspect-video px-8 py-8 bg-green-800 text-white overflow-hidden hover:brightness-150 transition duration-300"
      >
        <div className="group w-full h-full flex flex-row justify-start items-end gap-2">
          <h3 className="absolute bottom-0 left-0 w-full items-end z-10 text-2xl md:text-2xl font-serif font-bold px-8 py-8">
            Read the Papal Bull
          </h3>
          <Image
            src="/jubilee/jubilee-main-topic-2.jpg"
            alt="main topic 1"
            width={1080}
            height={720}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 z-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-1 transition duration-300"></div>
        </div>
      </Link>
      <Link
        href="https://www.iubilaeum2025.va/en/calendario/calendario-generale.html"
        target="_blank"
        className="relative col-span-12 md:col-span-4 aspect-video sm:aspect-banner md:aspect-square lg:aspect-video px-8 py-8 bg-green-800 text-white overflow-hidden hover:brightness-150 transition duration-300"
      >
        <div className="group w-full h-full flex flex-row justify-start items-end gap-2">
          <h3 className="absolute bottom-0 left-0 w-full items-end z-10 text-2xl md:text-2xl font-serif font-bold px-8 py-8">
            2025 Jubilee Calendar
          </h3>
          <Image
            src="/jubilee/jubilee-main-topic-3.jpg"
            alt="main topic 1"
            width={1080}
            height={720}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 z-0 w-full h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-1 transition duration-300"></div>
        </div>
      </Link>
    </div>
  );
}
