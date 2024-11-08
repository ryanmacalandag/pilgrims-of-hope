import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="group w-full h-full">
      <Link href={"/"} aria-label="Pilgrims of Hope logo">
        <Image
          src={"/branding/pilgrims-logo.svg"}
          alt="pilgrims of hope logo"
          width={145}
          height={75}
          className="w-full h-full object-fit group-hover:brightness-125 transition duration-300"
        ></Image>
      </Link>
    </div>
  );
};
