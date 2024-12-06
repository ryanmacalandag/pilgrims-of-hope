import React from "react";
import Image from "next/image";
import FooterMenu from "./FooterMenu";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-green-900 bg-gradient-to-bl from-green-950/70 via-transparent to-transparent text-amber-50/70 pt-16 md:pt-20 mt-24">
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
        <div
          id="copyright"
          className="border-y-2 border-green-600/40 border-dotted py-4"
        >
          <p className="font-serif text-lg sm:text-xl">
            pilgrimsofhope.catholic.au
          </p>
          <p className="text-sm opacity-70">
            Copyright ©2024-
            {Number(new Date().getFullYear()) + 1} All rights reserved.
          </p>
        </div>
        <div
          id="footer-logos"
          className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-8"
        >
          <div className="flex gap-2">
            <Link href="https://catholic.au" target="_blank" className="">
              <Image
                src="/acbc-logo-109x160px.png"
                alt="ACBC logo"
                width={55}
                height={80}
                className="h-full"
              />
            </Link>
            <Link href="https://catholic.au" target="_blank" className="">
              <Image
                src="/ncss-commitment-badge-178x160px.png"
                alt="NCSS badge"
                width={89}
                height={80}
                className="w-full"
              />
            </Link>
          </div>
          <Link href="https://catholic.au" target="_blank" className="">
            <Image
              src="/jubilee2025-logo-160x160px.png"
              alt="Jubilee 2025 logo"
              width={80}
              height={80}
              className="w-full"
            />
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[80px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/20"></div>
        <Image
          src="/bg/topographic-hue.png"
          alt="mountains"
          width={1200}
          height={60}
          className="w-full h-full min-h-full object-cover"
        />
      </div>
    </footer>
  );
}
