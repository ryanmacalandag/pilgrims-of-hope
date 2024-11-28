import React from "react";
import Link from "next/link";

const list = ["1", "2", "3", "4"];

export default function GalleryPagination() {
  return (
    <div className="w-full">
      <div className="w-full max-w-screen-lg mx-auto flex gap-4 justify-center items-center px-6 py-8 md:py-12">
        {list &&
          list.map((item, key) => {
            return (
              <Link
                href="#"
                key={key}
                className="px-3 py-2 border border-black/90 bg-transparent hover:bg-black/90 text-black/80 hover:text-white transition duration-150"
              >
                {item}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
