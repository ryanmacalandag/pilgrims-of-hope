import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import SitesMap from "../_sections/SitesMap";

const MAX_ITEMS: number = 8;
const allSites = pilgrimageSites;
const pagesList = new Array(Math.ceil(allSites.length / MAX_ITEMS));
const filteredTotal = allSites.length;

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export default function Page() {
  return (
    <div>
      <MainNav></MainNav>
      <SitesMap location="Alice Springs Northern Territory"></SitesMap>
      <StatesFilter selected="all"></StatesFilter>
      <Gallery
        filteredSites={allSites.slice(0, MAX_ITEMS)}
        filteredTotal={filteredTotal}
        filterBy="All"
        max={MAX_ITEMS}
        pages={pagesList.length}
        current="1"
      ></Gallery>
      <Footer></Footer>
    </div>
  );
}
