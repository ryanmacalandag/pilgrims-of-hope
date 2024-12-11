import React from "react";
import { BiXCircle } from "react-icons/bi";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <div className="w-full h-full min-h-dvh flex flex-col justify-center items-center bg-green-950 px-8 md:px-20 xl:px-40 2xl:px-60">
        <Link
          href="/"
          className="text-2xl my-6 text-white/80 hover:text-green-700 transition duration-300"
        >
          <BiXCircle></BiXCircle>
        </Link>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tpjjt_miOws?si=f8nAcn9856r4r8cG"
          title="YouTube video player"
          data-frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          data-referrerpolicy="strict-origin-when-cross-origin"
          data-allowfullscreen
          className="w-full h-auto max-h-dvh aspect-video"
        ></iframe>
      </div>
    </div>
  );
}
