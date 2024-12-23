import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import { getAllDioceses } from "@/app/_data/getAllDioceses";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import { MainNav } from "@/app/_sections/MainNav";
import StatesFilter from "@/app/_components/StatesFilter";
import PilgrimageDioceses from "@/app/_sections/PilgrimageDioceses";

const MAX_ITEMS: number = 8;

export const metadata = {
  title: "Filter by diocese",
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const dioceses = getAllDioceses.toSorted((a, b) => a.localeCompare(b));

  return dioceses.map((d) => ({
    diocese: d.toLowerCase().split(" ").join("-"),
  }));
}

type ParamsType = Promise<{ diocese: string }>;

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: ParamsType }) {
  const { diocese } = await params;
  const sites = pilgrimageSites.sort((a, b) => a.name.localeCompare(b.name));
  const filteredSites = sites.filter(
    (s) => s.diocese.toLowerCase().split(" ").join("-") == diocese,
  );
  return (
    <div className="h-full flex flex-col">
      <MainNav></MainNav>
      <StatesFilter selected={diocese}></StatesFilter>
      <Gallery
        filteredSites={filteredSites.slice(0, MAX_ITEMS)}
        filteredTotal={filteredSites.length}
        filterBy={diocese}
        max={MAX_ITEMS}
        pages={Math.ceil(filteredSites.length / MAX_ITEMS)}
        current="1"
      ></Gallery>
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="py-10 md:py-16 bg-white rounded-xl shadow-lg space-y-16 overflow-hidden">
          <PilgrimageDioceses></PilgrimageDioceses>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
