import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import StatesHeaderMap from "../_sections/StatesHeaderMap";

const MAX_ITEMS: number = 16;
const allSites = pilgrimageSites;
const pagesList = new Array(Math.ceil(allSites.length / MAX_ITEMS));
const filteredTotal = allSites.length;

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export default function Page() {
  const markers: google.maps.LatLngLiteral[] = allSites.map((s) => {
    return {
      lat: s.lat,
      lng: s.lng,
    };
  });

  return (
    <div>
      <MainNav></MainNav>
      <StatesHeaderMap
        center={{ lat: -24.719972174177638, lng: 134.2833842225963 }}
        zoom={3}
        markers={markers}
      ></StatesHeaderMap>
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
