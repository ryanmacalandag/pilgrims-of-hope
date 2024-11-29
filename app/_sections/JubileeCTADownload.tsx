import Link from "next/link";
import React from "react";

export default function JubileeCTADownload() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-12 gap-4 items-center px-12 lg:px-20 py-16 text-white bg-green-800 border rounded-lg">
        <div className="col-span-12 md:col-span-6 xl:col-span-8">
          <div className="flex flex-col gap-6 pl-0 md:pl-0">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              We have prepared some useful resources you can use
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <Link
            href="https://www.iubilaeum2025.va/en/calendario/calendario-generale.html"
            target="_blank"
            aria-label="View Jubilee 2025 Calendar"
            className="w-full flex justify-center uppercase text-sm font-bold tracking-widest border border-stone-100 hover:bg-stone-100 hover:text-green-600 px-4 md:px-8 py-4 mt-4 transition duration-300"
          >
            Open Google Drive ⇢
          </Link>
        </div>
      </div>
    </div>
  );
}
