import React from "react";
import PopeFrancisQuotes from "./PopeFrancisQuotes";
import JubileeMainTopics from "./JubileeMainTopics";
import JubileeFAQAccordion from "./JubileeFAQAccordion";
import JubileeEvents from "./JubileeEvents";
import JubileeCTADownload from "./JubileeCTADownload";
import JubileeResources from "./JubileeResources";
import JubileeFeaturedPilgrimageSites from "./JubileeFeaturedPilgrimageSites";

export default function Jubilee2025Primer() {
  return (
    <section id="primer" className="mt-8 lg:mt-12">
      <div className="w-full max-w-screen-xl mx-auto px-0 sm:px-12">
        <div className="w-full lg:gap-12 pt-12 lg:pt-16 bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col gap-8 border-b-2 border-green-500 border-dotted pb-2 px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight">
              Jubilee Year 2025 Resources
            </h2>
          </div>
          <JubileeMainTopics></JubileeMainTopics>
          <div className="flex flex-col gap-16 md:gap-16 lg:gap-16 pt-12 md:pt-12 lg:pt-16">
            <JubileeFeaturedPilgrimageSites></JubileeFeaturedPilgrimageSites>
            <JubileeCTADownload></JubileeCTADownload>
            <JubileeResources></JubileeResources>
            <JubileeEvents></JubileeEvents>
            <JubileeFAQAccordion></JubileeFAQAccordion>
            <PopeFrancisQuotes></PopeFrancisQuotes>
          </div>
        </div>
      </div>
    </section>
  );
}
