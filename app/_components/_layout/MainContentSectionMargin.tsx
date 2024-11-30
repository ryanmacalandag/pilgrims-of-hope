import React from "react";

export default function MainContentSectionMargin({
  children,
}: {
  children?: JSX.Element;
}) {
  return (
    <div
      id="main-content-title"
      className="flex flex-col gap-8 px-6 md:px-12 lg:px-16"
    >
      {children}
    </div>
  );
}
