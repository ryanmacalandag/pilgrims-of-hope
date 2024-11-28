import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";

const MAX_ITEMS: number = 8;

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export default function Sites() {
  const allSites = pilgrimageSites;

  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="all"></StatesFilter>
      <Gallery
        filteredSites={allSites}
        filterBy="All"
        max={MAX_ITEMS}
        page={1}
      ></Gallery>
      <Footer></Footer>
    </div>
  );
}
