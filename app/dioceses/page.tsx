import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import Footer from "@/app/_sections/Footer";
import StatesHeaderMap from "../_sections/StatesHeaderMap";
import PilgrimageDioceses from "../_sections/PilgrimageDioceses";

const allSites = pilgrimageSites.toSorted((a, b) =>
  a.name.localeCompare(b.name),
);

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
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="py-12 md:py-16 bg-white rounded-xl shadow-lg space-y-16 overflow-hidden">
          <PilgrimageDioceses></PilgrimageDioceses>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
