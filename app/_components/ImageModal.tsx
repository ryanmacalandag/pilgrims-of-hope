import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiXCircle } from "react-icons/bi";

export default async function ImageModal({
  image,
  slug,
}: {
  image: string;
  slug: string;
}) {
  const site = { image, slug };

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-dvh bg-neutral-800/95 flex justify-center items-center p-6 md:p-16">
      <div className="relative w-full max-w-screen-xl h-full overflow-hidden flex justify-center items-center">
        <Image
          src={site.image}
          alt={site.slug}
          width={1200}
          height={800}
          className="w-full h-full max-h-full object-contain object-center"
        />
        <Link href={"/sites/" + slug}>
          <BiXCircle
            size={28}
            className="absolute top-0 right-0 text-stone-200 hover:text-orange-600 transition duration-300"
          ></BiXCircle>
        </Link>
      </div>
    </div>
  );
}
