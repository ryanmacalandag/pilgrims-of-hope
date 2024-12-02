import React from "react";
import Image from "next/image";

export default function PopeFrancisQuotes() {
  return (
    <div className="flex flex-col gap-8 text-center">
      <p className="w-full max-w-screen-lg mx-auto text-balance font-serif tracking-tight text-lg md:text-xl px-6">
        &quot;For all of us, may the Jubilee be an opportunity to be renewed in
        hope. God&apos;s word helps us find reasons for that hope. Taking it as
        our guide, let us return to the message that the Apostle Paul wished to
        communicate to the Christians of Rome.&quot;
      </p>
      <div className="flex justify-center items-center gap-2">
        <p className="bg-stone-300 rounded-full overflow-hidden">
          <Image
            src="/components/popefrancis.jpg"
            alt="pope francis"
            width={60}
            height={60}
          />
        </p>
        <p className="text-sm uppercase tracking-widest">Pope Francis</p>
        <p></p>
      </div>
    </div>
  );
}
