import React from "react";
import Image from "next/image";
import FooterMenu from "./FooterMenu";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-green-800 text-amber-50/70 pt-16 md:pt-20 mt-24">
      <FooterMenu></FooterMenu>
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-8 px-8 md:px-20 py-12 md:py-16">
        <div id="acknowledgement">
          <p className="font-serif">
            We acknowledge the Aboriginal and Torres Strait Islander people as
            the traditional custodians of this great South land upon which we
            gather. We honour elders past, present and future, and thank them
            for their sacrifice and stewardship. We commit ourselves to the
            ongoing journey of reconciliation.
          </p>
        </div>
        <div id="copyright" className="">
          <p className="font-serif text-lg sm:text-xl">
            pilgrimsofhope.catholic.au
          </p>
          <p className="text-sm">
            Copyright ©2024-
            {Number(new Date().getFullYear()) + 1} All rights reserved.
          </p>
        </div>
        <div id="acbc" className="flex gap-4 py-4">
          <Link href="https://www.catholic.au/s/" target="_blank">
            <Image
              src="/branding/acbc-logo-160x235px.png"
              alt="ACBC logo"
              width={160}
              height={235}
              className="w-fit"
            />
          </Link>
          <Link
            href="https://www.acsltd.org.au/ncss-commitment/"
            target="_blank"
          >
            <Image
              src="/branding/jubilee2025-logo-260x235px.png"
              alt="NCSS Commitment badge"
              width={260}
              height={235}
              className="w-fit"
            />
          </Link>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/bg/edge-mountains.svg"
          alt="mountains"
          width={1200}
          height={50}
          className="w-full"
        />
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-300 via-transparent to-transparent"></div>
    </footer>
  );
}
