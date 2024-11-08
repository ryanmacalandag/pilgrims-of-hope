import React from "react";
import Link from "next/link";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export default function SocialShareButtons() {
  return (
    <div className="w-full max-w-screen-xl mx-auto my-12 flex flex-wrap gap-3 pr-6 pl-12">
      <Link
        href={
          "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fpilgrims-of-hope.vercel.app%2Fsites%2Fst-christophers-cathedral"
        }
        target="_blank"
        className="w-full sm:w-fit flex gap-3 pr-4 justify-between items-center bg-blue-600 saturate-50 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiLogoFacebook
          size={20}
          className="w-fit h-fit px-4 py-5 bg-blue-900/40"
        ></BiLogoFacebook>
        Share on Facebook
      </Link>
      <Link
        href={
          "https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpilgrims-of-hope.vercel.app%2Fsites%2Fst-christophers-cathedral&title=St%20Christopher%27s%20Cathedral"
        }
        target="_blank"
        className="w-full sm:w-fit flex gap-3 pr-4 justify-between items-center bg-sky-700 saturate-50 hover:saturate-100 hover:-translate-y-2 text-white text-xs uppercase font-sans font-extrabold tracking-wider transition duration-300"
      >
        <BiLogoLinkedin
          size={20}
          className="w-fit h-fit px-4 py-5 bg-sky-800"
        ></BiLogoLinkedin>
        Share on LinkedIn
      </Link>
    </div>
  );
}
