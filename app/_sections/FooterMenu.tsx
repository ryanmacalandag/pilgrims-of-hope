import Link from "next/link";
import React from "react";
import Image from "next/image";

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
    href: "/all/",
  },
  {
    label: "Flatlist",
    href: "/flatlist/",
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

const productionmenulist: { label: string; href: string; icon?: string }[] = [
  {
    label: "Safeguarding Commitment",
    href: "https://www.catholic.au/s/article/Safeguarding-Commitment",
  },
  {
    label: "Accessibility Statement",
    href: "https://www.catholic.au/s/article/Australian-Catholic-Bishops-Conference-Accessibility-Statement",
  },
  {
    label: "Privacy Policy",
    href: "https://www.catholic.au/s/article/Website-privacy-policy",
  },
  {
    label: "Contact Us",
    href: "https://www.catholic.au/s/contactus",
  },
];

export default function FooterMenu() {
  return (
    <div id="footer-menu-row" className="w-full">
      <div className="w-full max-w-screen-xl mx-auto px-8 md:px-20 grid grid-cols-12 gap-6 md:gap-8 gap-y-12 xl:gap-12">
        <div className="col-span-6 sm:col-span- lg:col-span-2">
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
        <div className="col-span-6 sm:col-span- lg:col-span-2">
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
        <div className="col-span-6 sm:col-span- lg:col-span-2">
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
        <div className="col-span-6 sm:col-span- lg:col-span-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase font-bold text-orange-300 tracking-wider mb-4 md:mb-6">
              Essential Policies
            </h3>
            {productionmenulist &&
              productionmenulist.map((item, key) => {
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
        <div className="col-span-12 sm:col-span-12 lg:col-span-4 flex justify-center py-8 lg:py-0">
          <Link href="/">
            <Image
              src="/branding/pilgrims-logo-reverse.png"
              alt="Piligrims of Hope"
              width={300}
              height={300}
              className="w-fit mt-8 lg:mt-0"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
