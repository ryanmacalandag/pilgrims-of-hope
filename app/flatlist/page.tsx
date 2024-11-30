import React from "react";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import { MainNav } from "../_sections/MainNav";
import { BiSolidStar } from "react-icons/bi";
import MainContentBoxed from "../_components/_layout/MainContentBoxed";
import MainContentTitle from "../_components/_layout/MainContentTitle";
import MainContentSectionMargin from "../_components/_layout/MainContentSectionMargin";
import Divider from "../_components/_layout/Divider";
import Footer from "../_sections/Footer";
import Link from "next/link";
import getjson from "../_api/_json/getjson";
import { statesAU } from "../_components/StatesFilter";

export default async function Page() {
  const sites = pilgrimageSites;
  const file = await getjson("geocode.json");
  const geosites = JSON.parse(file);

  console.log(geosites[0].lon);

  return (
    <div>
      <MainNav></MainNav>
      <Divider></Divider>
      <MainContentBoxed>
        <>
          <MainContentTitle>
            <>
              <BiSolidStar></BiSolidStar>
              Pilgrimage Sites in Australia
            </>
          </MainContentTitle>
          <MainContentSectionMargin>
            <div className="pt-6 pb-12">
              {statesAU.map((state, key) => {
                const filteredByState = sites.filter(
                  (s) => s.state.toLowerCase() == state,
                );
                return (
                  <div className="py-3 md:py-4" key={key}>
                    <h3 className="font-bold">{state.toUpperCase()}</h3>
                    <div className="divide-y divide-dotted divide-green-500">
                      {filteredByState.map((site, key) => {
                        return (
                          <Link
                            href={"/sites/" + site.slug}
                            target="_blank"
                            className="w-full flex flex-col py-2 hover:underline hover:text-orange-700"
                            key={key}
                          >
                            <div className="w-full flex justify-between gap-1">
                              <div className="w-fit min-w-12 flex justify-end px-4">
                                <p className="text-right">{key + 1}.</p>
                              </div>
                              <div className="w-full flex flex-grow text-left text-balance">
                                {site.name.replace("&#39;", "'")}, {site.city},{" "}
                                {site.state}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </MainContentSectionMargin>
        </>
      </MainContentBoxed>
      <Footer></Footer>
    </div>
  );
}
