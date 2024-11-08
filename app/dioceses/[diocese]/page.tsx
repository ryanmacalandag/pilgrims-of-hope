import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import { getAllDioceses } from "@/app/_data/getAllDioceses";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import { MainNav } from "@/app/_sections/MainNav";
import StatesFilter from "@/app/_components/StatesFilter";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const dioceses = await getAllDioceses;

  return dioceses.map((d) => ({
    diocese: d.toLowerCase().split(" ").join("-"),
  }));
}

type ParamsType = Promise<{ diocese: string }>;

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: ParamsType }) {
  const { diocese } = await params;
  const sites = await pilgrimageSites;
  const filteredSites = await sites.filter(
    (s) => s.diocese.toLowerCase().split(" ").join("-") == diocese,
  );
  return (
    <div className="h-full flex flex-col">
      <MainNav></MainNav>
      <StatesFilter selected={diocese}></StatesFilter>
      <Gallery filteredSites={filteredSites} filterBy={diocese}></Gallery>
      <Footer></Footer>
    </div>
  );
}
