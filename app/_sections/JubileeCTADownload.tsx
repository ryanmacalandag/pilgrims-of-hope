import Link from "next/link";
import React from "react";

export default function JubileeCTADownload() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 px-6 md:px-12 lg:px-16">
      <div className="flex flex-col md:flex-row gap-4 items-start px-12 lg:px-20 py-12 md:py-16 text-white bg-green-800 border rounded-lg">
        <div className="">
          <div className="flex flex-col gap-6 pl-0 md:pl-0">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              We have prepared Jubilee 2025 resources for Australians Catholics.
            </p>
          </div>
        </div>
        <div className="flex justify-start w-fit lg:w-fit flex-shrink-0">
          <Link
            href="https://bit.ly/jubilee2025-au"
            target="_blank"
            aria-label="View Jubilee 2025 Calendar"
            className="w-full flex justify-center uppercase text-sm font-bold tracking-widest border border-stone-100 hover:bg-stone-100 hover:text-green-600 px-4 md:px-6 py-4 mt-4 transition duration-300"
          >
            Downloads ⇢
          </Link>
        </div>
      </div>
    </div>
  );
}
