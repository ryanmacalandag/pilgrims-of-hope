import React from "react";

export default function MainContentTitle({
  children,
}: {
  children?: JSX.Element;
}) {
  return (
    <div className="border-b-2 border-green-500/40 border-dotted pb-1 px-6 md:px-12 lg:px-16">
      <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
        {children}
      </h3>
    </div>
  );
}
