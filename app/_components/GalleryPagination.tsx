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
      <div className="w-full max-w-screen-lg mx-auto flex gap-4 justify-center items-center px-6 py-8 md:py-12">
        {[...list.keys()].map((i) => {
          return (
            <Link
              href={"/sites/" + filterBy.toLowerCase() + "/" + (i + 1)}
              key={i}
              className={
                (current === (i + 1).toString()
                  ? "bg-black/80 text-white cursor-default"
                  : "bg-transparent") +
                " px-3 py-2 border border-black/80 hover:bg-black/80 text-black/80 hover:text-white transition duration-150"
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
