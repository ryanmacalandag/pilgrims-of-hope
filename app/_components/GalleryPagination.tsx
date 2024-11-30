import React from "react";
import Link from "next/link";

export default function GalleryPagination({
  filterBy,
  pages,
  current,
}: {
  filterBy: string;
  pages: number;
  current: string;
}) {
  const list = new Array(pages);

  return (
    <div className="w-full">
      <div className="w-full max-w-screen-lg mx-auto flex gap-2 justify-center items-center px-6 py-8 md:py-12">
        {[...list.keys()].map((i) => {
          return (
            <Link
              href={"/" + filterBy.toLowerCase() + "/" + (i + 1)}
              key={i}
              className={
                (current === (i + 1).toString()
                  ? "bg-green-800 text-white ring-2 ring-green-500/40 font-bold cursor-not-allowed"
                  : "bg-transparent") +
                " px-2 md:px-3 py-2 border border-green-800 hover:bg-green-800 text-black/80 hover:text-white transition duration-300"
              }
            >
              {i + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
