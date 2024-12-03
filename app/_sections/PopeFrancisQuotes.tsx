import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PopeFrancisQuotes() {
  return (
    <div className="flex flex-col gap-8 text-center mt-6 lg:mt-12 py-12 lg:py-16 bg-stone-100">
      <p className="w-full max-w-screen-lg mx-auto text-balance font-serif tracking-tight text-lg md:text-xl px-6 pt-6">
        &quot;For all of us, may the Jubilee be an opportunity to be renewed in
        hope. God&apos;s word helps us find reasons for that hope. Taking it as
        our guide, let us return to the message that the Apostle Paul wished to
        communicate to the Christians of Rome.&quot;
      </p>
      <Link
        href="https://www.iubilaeum2025.va/en/giubileo-2025/bolla.html"
        target="_blank"
        className="group flex justify-center items-center gap-2 hover:brightness-125 transition duration-300 mb-4"
      >
        <p className="bg-stone-300 rounded-full overflow-hidden">
          <Image
            src="/components/popefrancis.jpg"
            alt="pope francis"
            width={60}
            height={60}
          />
        </p>
        <p className="text-sm uppercase font-bold tracking-wide group-hover:text-green-800 group-hover:border-b border-b-green-800 border-dotted">
          Pope Francis
        </p>
      </Link>
    </div>
  );
}
