import React from "react";
import { BiHomeAlt } from "react-icons/bi";

export default function JubileeWelcome() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1 px-6 md:px-12 lg:px-16">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiHomeAlt></BiHomeAlt>
          Welcome to the Jubilee of Hope
        </h3>
      </div>
      <div className="flex flex-col gap-4 px-8 md:px-12 lg:px-16 mb-2">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 *:mb-4 md-*:6">
          <p className="text-xl md:text-2xl font-serif text-balance">
            The Jubilee of Hope starts in Rome on Christmas Eve, December 24,
            2024, and in local dioceses on Holy Family Sunday, December 29.
          </p>
          <p>
            Holy years are traditionally associated with pilgrimages to Rome,
            and other holy shrines. Not everyone is able to travel to Rome, so
            this page offers you the opportunity to participate in the Holy Year
            locally – at your cathedral, at a church or shrine near you, or on
            your travels within Australia that had been designated by the local
            bishop.
          </p>
          <p>
            Pope Francis has asked all bishops to nominate places of pilgrimage
            or designated shrines within their diocese.
          </p>
          <p>
            By visiting these designated holy places, and participating in these
            opportunities for prayer and repentance, the faithful may obtain a
            “plenary indulgence”.
          </p>
          <p>
            Also on this site are many resources to help you celebrate the
            various jubilees in your parish or school. These can be planned to
            coincide with the celebrations in Rome and in so doing celebrate as
            the universal church.
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 justify-start md:justify-start items-start md:items-start mt-4"></div>
      </div>
    </div>
  );
}
