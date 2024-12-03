import { statesAU } from "@/app/_components/StatesFilter";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import { MainNav } from "@/app/_sections/MainNav";
import StatesFilter from "@/app/_components/StatesFilter";
import StatesHeaderMap from "@/app/_sections/StatesHeaderMap";

const MAX_ITEMS: number = 1000;

export const metadata = {
  title: "Filter Sites by State ",
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const states = await statesAU;

  return states.map((s) => ({
    state: s,
  }));
}

type ParamsType = Promise<{ state: string }>;

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: ParamsType }) {
  const { state } = await params;
  const sites = pilgrimageSites;
  const filteredSites = sites.filter((s) => s.state.toLowerCase() == state);

  let center: google.maps.LatLngLiteral;
  let zoom: number;

  let markers: google.maps.LatLngLiteral[] = filteredSites.map((s) => {
    return {
      lat: s.lat,
      lng: s.lng,
    };
  });

  switch (state) {
    case "act":
      center = { lat: -35.268988359624544, lng: 149.13292360330993 };
      zoom = 10;
      markers = markers;
      break;
    case "nsw":
      center = { lat: -32.29333492652341, lng: 146.21669970564952 };
      zoom = 5;
      markers = markers;
      break;
    case "nt":
      center = { lat: -15.259139520617234, lng: 132.67229338139367 };
      zoom = 5;
      markers = markers;
      break;
    case "vic":
      center = { lat: -36.95444428217735, lng: 144.08224046229466 };
      zoom = 6;
      markers = markers;
      break;
    case "sa":
      center = { lat: -33.92023440324915, lng: 138.62806742773373 };
      zoom = 5;
      markers = markers;
      break;
    case "tas":
      center = { lat: -41.79857478437049, lng: 146.46625309362932 };
      zoom = 6;
      markers = markers;
      break;
    case "qld":
      center = { lat: -22.46509795357956, lng: 144.0743087155315 };
      zoom = 5;
      markers = markers;
      break;
    case "wa":
      center = { lat: -21.896351736145117, lng: 125.58119010528085 };
      zoom = 4;
      markers = markers;
      break;
    default:
      center = { lat: -24.719972174177638, lng: 134.2833842225963 };
      zoom = 3;
      markers = markers;
      break;
  }

  return (
    <div className="h-full flex flex-col">
      <MainNav></MainNav>
      <StatesHeaderMap
        center={center}
        zoom={zoom}
        markers={markers}
      ></StatesHeaderMap>
      <StatesFilter selected={state}></StatesFilter>
      <Gallery
        filteredSites={filteredSites.slice(0, MAX_ITEMS)}
        filteredTotal={filteredSites.length}
        filterBy={state}
        max={MAX_ITEMS}
        pages={Math.ceil(filteredSites.length / MAX_ITEMS)}
        current="1"
      ></Gallery>
      <Footer></Footer>
    </div>
  );
}
