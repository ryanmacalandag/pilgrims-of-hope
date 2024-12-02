import React from "react";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import { MainNav } from "../_sections/MainNav";
import { BiSolidStar } from "react-icons/bi";
import MainContentBoxed from "../_components/_layout/MainContentBoxed";
import MainContentTitle from "../_components/_layout/MainContentTitle";
import MainContentSectionMargin from "../_components/_layout/MainContentSectionMargin";
import Divider from "../_components/_layout/Divider";
import Footer from "../_sections/Footer";
import JubileeCTANeedHelp from "../_sections/JubileeCTANeedHelp";
import Link from "next/link";
// import { statesAU } from "../_components/StatesFilter";

export default async function Page() {
  const sites = pilgrimageSites;

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
            <table className="table-auto my-12 border border-stone-200 rounded-lg divide-y-4 divide-stone-200">
              <thead className="rounded">
                <tr className="bg-orange-100/40 divide-x divide-stone-200 font-bold">
                  <td className="w-20 px-4 pb-4 pt-6 items-end text-right">
                    ID
                  </td>
                  <td className="px-4 pb-4 pt-6">Name</td>
                  <td className="px-4 pb-4 pt-6 text-center">Diocese</td>
                  <td className="px-4 pb-4 pt-6 text-center">State</td>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {sites.map((site, key) => {
                  return (
                    <tr
                      className="divide-x divide-stone-200 even:bg-orange-50/40"
                      key={key}
                    >
                      <td className="w-20 py-4 px-4 items-end text-right">
                        {key + 1}
                      </td>
                      <td className="py-4 px-4">
                        <Link
                          href={"/sites/" + site.slug}
                          className="border-b border-stone-800 border-dotted hover:text-green-600"
                        >
                          {site.name.replace("&#39;", "'")}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Link
                          href={
                            "/dioceses/" +
                            site.diocese.toLowerCase().split(" ").join("-")
                          }
                          className="border-b border-stone-800 border-dotted hover:text-green-600"
                        >
                          {site.diocese}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Link
                          href={"/states/" + site.state.toLowerCase()}
                          className="border-b border-stone-800 border-dotted hover:text-green-600"
                        >
                          {site.state.toUpperCase()}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </MainContentSectionMargin>
          <JubileeCTANeedHelp></JubileeCTANeedHelp>
        </>
      </MainContentBoxed>

      <Footer></Footer>
    </div>
  );
}
