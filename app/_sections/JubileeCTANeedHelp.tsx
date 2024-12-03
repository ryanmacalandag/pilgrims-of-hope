import Link from "next/link";
import React from "react";

export default function JubileeCTANeedHelp() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 px-6 md:px-12 lg:px-16 mt-0 md:mt-6 mb-12">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center px-10 lg:px-12 py-10 text-white bg-green-800 border rounded-lg">
        <div className="">
          <div className="flex flex-col gap-6 pl-0 md:pl-0">
            <p className="text-2xl md:text-2xl font-serif text-left text-balance">
              Need help commemorating the Jubilee Year 2025?
            </p>
          </div>
        </div>
        <Link
          href="/"
          aria-label="View Jubilee 2025 Calendar"
          className="w-fit flex justify-center uppercase text-sm font-bold tracking-widest border border-stone-100 hover:bg-stone-100 hover:text-green-600 px-6 md:px-8 py-4 transition duration-300 text-nowrap"
        >
          Jubilee Guide ⇢
        </Link>
      </div>
    </div>
  );
}
