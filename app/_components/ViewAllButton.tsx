import React from "react";
import Link from "next/link";

export default function ViewAllButton() {
  return (
    <div className="w-full flex justify-center items-center my-6 md:my-12">
      <Link
        href="/sites/all/"
        aria-label="Download printable PDF"
        className="w-fit uppercase text-sm font-bold tracking-widest border border-stone-800 hover:bg-stone-700 hover:text-stone-100 px-8 py-4 mt-4 transition duration-300"
      >
        View All Sites
      </Link>
    </div>
  );
}
