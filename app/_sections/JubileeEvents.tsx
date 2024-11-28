import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { BiCalendar } from "react-icons/bi";

type JubileeEvent = {
  date: string;
  title: string;
  location?: string;
  link?: Url;
};

export const upcomingEvents: JubileeEvent[] = [
  {
    date: "24 December 2024",
    title: "Opening of the Holy Door of Saint Peter&#39;s Basilica",
    location: "Basilica di San Pietro in Vaticano",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/Apertura-Porta-Santa-di-San-Pietro.html",
  },
  {
    date: "1 January 2025",
    title: "Opening of Holy Door at St Mary Major&#39;s",
    location: "Basilica di San Pietro in Vaticano",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/apertura-porta-santa-santa-maria-maggiore.html",
  },
  {
    date: "5 January 2025",
    title: "Opening of Holy Door at St Paul's outside the Walls",
    location: "Basilica di San Pietro in Vaticano",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/apertura-porta-santa-san-paolo-fuori-mura.html",
  },
  {
    date: "24-26 January 2025",
    title: "Jubilee of the World of Communications",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/Giubileo-del-Mondo-della-Comunicazione.html",
  },
  {
    date: "8-9 February 2025",
    title: "Jubilee of the Armed Forces, Police and Security",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/Giubileo-delle-Forze-Armate-Polizia-Sicurezza.html",
  },
  {
    date: "15-18 February 2025",
    title: "Jubilee of Artists",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/Giubileo-degli-Artisti.html",
  },
  {
    date: "21-23 February 2025",
    title: "Jubilee of Deacons",
    link: "https://www.iubilaeum2025.va/en/pellegrinaggio/calendario-giubileo/GrandiEventi/Giubileo-dei-Diaconi.html",
  },
];

export default function JubileeEvents() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 px-8 md:px-12 lg:px-16">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiCalendar></BiCalendar>
          Jubilee Upcoming Events
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 mb-6">
          <div className="flex flex-col gap-4 pl-0 md:pl-0 mb-6">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              Here is the list of key events next year
            </p>
            <p>
              We&#39;ve compiled a list of key events taken from the Vatican
              calendar added wiith local events in Australia next year.
            </p>
            <div className="w-full flex gap-3 justify-start md:justify-start items-center">
              <Link
                href="https://www.iubilaeum2025.va/en/calendario/calendario-generale.html"
                target="_blank"
                aria-label="View Jubilee 2025 Calendar"
                className="w-fit uppercase text-sm font-bold tracking-widest border border-stone-800 hover:bg-stone-700 hover:text-stone-100 px-8 py-4 mt-4 transition duration-300"
              >
                General Calendar ⇢
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="flex flex-row gap-3 justify-between px-4 py-4 text-sm border-b font-bold">
            <span className="w-4/12">Date</span>
            <span className="w-6/12">Event Title</span>
            <span className="w-2/12 max-w-fit text-right">Link</span>
          </div>
          {upcomingEvents.map((evnt, key) => {
            return (
              <div
                className="flex flex-row gap-3 justify-between px-4 py-4 text-sm border-b even:bg-stone-100/50"
                key={key}
              >
                <span className="w-4/12">{evnt.date}</span>
                <span className="w-6/12">
                  {evnt.title.replace("&#39;", "'")}
                </span>
                <Link
                  href={
                    evnt.link ??
                    "https://www.iubilaeum2025.va/en/calendario/calendario-generale.html"
                  }
                  target="_blank"
                  className="w-2/12 max-w-fit h-fit text-orange-500 hover:text-orange-300 text-center transition duration-200"
                >
                  view
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
