import React from "react";
import Link from "next/link";
import { BiEnvelope, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { PilgrimageSiteType } from "../_data/pilgrimagesite";

export default function SocialShareButtons({
  site,
}: {
  site: PilgrimageSiteType;
}) {
  return (
    <div className="w-full max-w-screen-xl mx-auto my-12 flex flex-wrap gap-3 pr-6 pl-12">
      <Link
        href={
          "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fpilgrims-of-hope.vercel.app%2Fsites%2F" +
          site.slug
        }
        target="_blank"
        className="w-full sm:w-fit flex gap-3 pr-4 justify-between items-center bg-blue-600 saturate-50 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiLogoFacebook
          size={20}
          className="w-fit h-fit px-3 py-3 bg-blue-900/40"
        ></BiLogoFacebook>
        Share on Facebook
      </Link>
      <Link
        href={
          "https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpilgrims-of-hope.vercel.app%2Fsites%2F" +
          site.slug +
          "&title=" +
          site.name
        }
        target="_blank"
        className="w-full sm:w-fit flex gap-3 pr-4 justify-between items-center bg-sky-700 saturate-50 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiLogoLinkedin
          size={20}
          className="w-fit h-fit px-3 py-3 bg-sky-800"
        ></BiLogoLinkedin>
        Share on LinkedIn
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
        className="w-full sm:w-fit flex gap-3 pr-4 justify-between items-center bg-red-600 saturate-50 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiEnvelope
          size={20}
          className="w-fit h-fit px-3 py-3 bg-red-700"
        ></BiEnvelope>
        Share by Email
      </Link>
    </div>
  );
}
