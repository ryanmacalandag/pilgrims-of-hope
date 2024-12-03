import React from "react";
import PopeFrancisQuotes from "./PopeFrancisQuotes";
import JubileeMainTopics from "./JubileeMainTopics";
import JubileeFAQAccordion from "./JubileeFAQAccordion";
import JubileeEvents from "./JubileeEvents";
import JubileeCTADownload from "./JubileeCTADownload";
import JubileeResources from "./JubileeResources";
import JubileeFeaturedPilgrimageSites from "./JubileeFeaturedPilgrimageSites";
import JubileeWelcome from "./JubileeWelcome";
import JubileePlenaryIndulgences from "./JubileePlenaryIndulgences";

export default function Jubilee2025Primer() {
  return (
    <section id="primer" className="mt-12 md:mt-16 lg:mt-20">
      <div className="w-full max-w-screen-xl mx-auto px-0 sm:px-12">
        <div className="w-full lg:gap-12 pt-16 lg:pt-20 bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden">
          <JubileeWelcome></JubileeWelcome>
          <JubileeMainTopics></JubileeMainTopics>
          <div className="flex flex-col gap-16 md:gap-16 lg:gap-16 pt-12 md:pt-12 lg:pt-16">
            <JubileePlenaryIndulgences></JubileePlenaryIndulgences>
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
