import React from "react";

export default function MainContentBoxed({
  children,
}: {
  children?: JSX.Element;
}) {
  return (
    <div
      id="main-content-boxed"
      className="w-full max-w-screen-xl mx-auto px-0 sm:px-12"
    >
      <div className="w-full lg:gap-12 pt-12 lg:pt-16 pb-4 lg:pb-8 bg-white rounded-none sm:rounded-2xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}
