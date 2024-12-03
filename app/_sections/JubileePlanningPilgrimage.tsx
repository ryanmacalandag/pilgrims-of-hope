import React from "react";
import { BiCheckSquare, BiChevronRight } from "react-icons/bi";
import { Checkbox } from "@headlessui/react";

const pilgrimageFAQ = [
  {
    question: "What is the purpose of pilgrimage during the Jubilee 2025?",
    answer:
      "Pilgrimage is a spiritual journey where the faithful seek reconciliation, prayer, and renewal of faith, offering an opportunity to visit sacred sites, gain indulgences, and deepen their connection with God.",
  },
  {
    question:
      "Where can I find a list of participating pilgrimage sites in Australia?",
    answer:
      "The Australian Catholic Bishops Conference (ACBC) is compiling a list of pilgrimage sites across all states and dioceses, including Holy Door churches and other approved locations, which will be available on the ACBC website and diocesan platforms.",
  },
  {
    question: "How do I prepare for a Jubilee pilgrimage?",
    answer:
      "Preparation involves spiritual reflection, reviewing the list of pilgrimage sites, choosing accessible locations, considering group pilgrimages, wearing comfortable attire, and bringing essentials like water and weather-appropriate clothing.",
  },
  {
    question:
      "What practical tips should I follow when traveling to pilgrimage sites?",
    answer:
      "Practical tips include planning transportation ahead, checking site accessibility for people with disabilities, staying hydrated, being mindful of weather conditions, and following any safety or COVID-19 protocols in place.",
  },
  {
    question:
      "Are there special events or services for pilgrims at these sites?",
    answer:
      "Many pilgrimage sites will host special Jubilee liturgies, Masses, prayer services, and reflections, so it is important to check with the site or diocese for schedules and additional activities.",
  },
  {
    question: "Can I organise a group pilgrimage with my parish or diocese?",
    answer:
      "Group pilgrimages are encouraged, and you can speak with your parish or diocese to organise transport, accommodations, and shared liturgical activities to enrich the spiritual journey.",
  },
  {
    question: "How can I participate if I am unable to travel?",
    answer:
      "Those unable to travel can participate spiritually through prayer, acts of charity, and online resources provided by the ACBC, with many dioceses livestreaming Jubilee celebrations or offering digital prayer tools.",
  },
  {
    question: "What documents or items should I bring on my pilgrimage?",
    answer:
      "Pilgrims are advised to bring a journal or prayer book, a printed list of participating sites, rosary beads, or other devotional items for personal prayer to enhance their experience.",
  },
  {
    question: "Who can I contact for more information?",
    answer:
      "For updates on Jubilee 2025 pilgrimage sites and events in Australia, visit this website, contact your diocesan office directly, or inquire at your parish for local information and group pilgrimage opportunities.",
  },
];

export default function JubileePlanningPilgrimage() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 px-8 md:px-12 lg:px-16">
      <div className="border-b-2 border-green-500/40 border-dotted pb-1">
        <h3 className="flex gap-2 items-center text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider">
          <BiCheckSquare></BiCheckSquare>
          Planning Your Pilgrimage
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 mb-6">
          <div className="flex flex-col gap-4 pl-0 md:pl-0">
            <p className="text-2xl md:text-3xl font-serif text-balance">
              Need help preparing for the pilgrimage?
            </p>
            <p>
              Here are the essential things to know about when planning to visit
              pilgrimage sites.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-4">
            {pilgrimageFAQ.map((item, key) => {
              return (
                <div key={key} className="col-span-12 hover:cursor-pointer">
                  <Checkbox className="group flex flex-col gap-2 border-b border-stone-300">
                    <div className="flex flex-shrink-0 gap-2 items-center group-hover:text-green-600">
                      <BiChevronRight
                        size={24}
                        className="w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300"
                      ></BiChevronRight>
                      <h4 className="text-lg *:md:text-xl font-serif font-bold">
                        {item.question.replace(/&#39;/g, "'")}
                      </h4>
                    </div>
                    <p className="max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 my-0 group-aria-[checked=true]:mt-2 mb-2 group-aria-[checked=true]:mb-8 text-base md:text-base pl-8 ">
                      {item.answer.replace(/&#39;/g, "'")}
                    </p>
                  </Checkbox>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
