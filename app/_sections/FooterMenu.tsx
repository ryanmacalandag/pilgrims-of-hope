import Link from "next/link";
import React from "react";

const jubileemenulist: { label: string; href: string; icon?: string }[] = [
  {
    label: "Welcome",
    href: "/#welcome",
  },
  {
    label: "Plenary Indulgence",
    href: "/#plenary-indulgence",
  },
  {
    label: "Featured Sites",
    href: "/#featured",
  },
  {
    label: "Resources",
    href: "/#resources",
  },
  {
    label: "Upcoming Events",
    href: "/#events",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
];

const pilgrimagemenulist: { label: string; href: string; icon?: string }[] = [
  {
    label: "Featured Sites",
    href: "/sites/#sites-featured",
  },
  {
    label: "Planning Guide",
    href: "/sites/#planning-pilgrimage",
  },
  {
    label: "All Sites",
    href: "/sites/all",
  },
  {
    label: "Flatlist",
    href: "/sites/flatlist",
  },
];

const sitefiltersmenulist: { label: string; href: string; icon?: string }[] = [
  {
    label: "All",
    href: "/all/",
  },
  {
    label: "States",
    href: "/states/",
  },
  {
    label: "Dioceses",
    href: "/dioceses/",
  },
];

export default function FooterMenu() {
  return (
    <div id="footer-menu-row" className="w-full">
      <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-20 grid grid-cols-12 gap-6 md:gap-8 gap-y-12 xl:gap-12">
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase font-bold text-orange-300 tracking-wider mb-4 md:mb-6">
              Jubilee Links
            </h3>
            {jubileemenulist &&
              jubileemenulist.map((item, key) => {
                return (
                  <Link
                    key={key}
                    href={item.href}
                    className="hover:text-white pb-2 border-b border-green-300/20 hover:border-green-300 border-dotted transition duration-300"
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase font-bold text-orange-300 tracking-wider mb-4 md:mb-6">
              Pilgrimage Links
            </h3>
            {pilgrimagemenulist &&
              pilgrimagemenulist.map((item, key) => {
                return (
                  <Link
                    key={key}
                    href={item.href}
                    className="hover:text-white pb-2 border-b border-green-300/20 hover:border-green-300 border-dotted transition duration-300"
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase font-bold text-orange-300 tracking-wider mb-4 md:mb-6">
              Site Filters
            </h3>
            {sitefiltersmenulist &&
              sitefiltersmenulist.map((item, key) => {
                return (
                  <Link
                    key={key}
                    href={item.href}
                    className="hover:text-white pb-2 border-b border-green-300/20 hover:border-green-300 border-dotted transition duration-300"
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
