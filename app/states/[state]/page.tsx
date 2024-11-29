import { statesAU } from "@/app/_components/StatesFilter";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import { MainNav } from "@/app/_sections/MainNav";
import StatesFilter from "@/app/_components/StatesFilter";

const MAX_ITEMS: number = 8;

export const metadata = {
  title: "Filter by State",
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

  return (
    <div className="h-full flex flex-col">
      <MainNav></MainNav>
      <StatesFilter selected={state}></StatesFilter>
      <Gallery
        filteredSites={filteredSites}
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
