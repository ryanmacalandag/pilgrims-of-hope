import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import StatesHeaderMap from "@/app/_sections/StatesHeaderMap";

const MAX_ITEMS: number = 16;
const pages = new Array(Math.ceil(pilgrimageSites.length / MAX_ITEMS));
const allSites = pilgrimageSites;
const filteredTotal = allSites.length;

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export function generateStaticParams() {
  return [...pages.keys()].map((key) => ({
    page: key.toString(),
  }));
}

type ParamsType = Promise<{ page: string }>;

export default async function Page({ params }: { params: ParamsType }) {
  const { page } = await params;

  const start = (Number(page) - 1) * MAX_ITEMS;
  const filteredSites = allSites.slice(start, start + MAX_ITEMS);

  const markers: google.maps.LatLngLiteral[] = filteredSites.map((s) => {
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
        filteredSites={filteredSites}
        filteredTotal={filteredTotal}
        filterBy="All"
        max={MAX_ITEMS}
        pages={pages.length}
        current={page}
      ></Gallery>
      <Footer></Footer>
    </div>
  );
}
