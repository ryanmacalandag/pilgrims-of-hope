import React from "react";
import Link from "next/link";
import { BiEnvelope, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";

export default function SocialShareIcons({
  site,
}: {
  site: PilgrimageSiteType;
}) {
  return (
    <div className="absolute z-50 bottom-0 left-12 w-full flex">
      <Link
        href={
          "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fpilgrims-of-hope.vercel.app%2Fsites%2F" +
          site.slug
        }
        target="_blank"
        className="w-fit flex justify-between items-center bg-blue-600 saturate750 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiLogoFacebook
          size={20}
          className="w-fit h-fit px-3 py-3 bg-blue-900/40"
        ></BiLogoFacebook>
      </Link>
      <Link
        href={
          "https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpilgrims-of-hope.vercel.app%2Fsites%2F" +
          site.slug +
          "&title=" +
          site.name
        }
        target="_blank"
        className="w-fit flex justify-between items-center bg-sky-700 saturate-75 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiLogoLinkedin
          size={20}
          className="w-fit h-fit px-3 py-3 bg-sky-800"
        ></BiLogoLinkedin>
      </Link>
      <Link
        href={
          "mailto:?subject=" +
          site.name +
          "+-+Jubilee+2025+Pilgrimage+Site&body=Sharing+this+Jubilee+2025+Pilgrimage+site+located+in+the+" +
          site.diocese +
          ":+https://pilgrimsofhope.catholic.au/sites/" +
          site.slug
        }
        target="_blank"
        className="w-fit flex justify-between items-center bg-red-600 saturate-75 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiEnvelope
          size={20}
          className="w-fit h-fit px-3 py-3 bg-red-700"
        ></BiEnvelope>
      </Link>
    </div>
  );
}
