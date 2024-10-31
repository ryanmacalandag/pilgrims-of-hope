import { pilgrimageSites } from "@/app/_data/pilgrimagesite"
import { getAllDioceses } from "@/app/_data/getAllDioceses";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import { MainNav } from "@/app/_components/MainNav";
import StatesFilter from "@/app/_components/StatesFilter";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const dioceses = await getAllDioceses;
 
  return dioceses.map((d) => ({
    diocese: d.toLowerCase().split(' ').join('-'),
  }))
}

type ParamsType = Promise<{ diocese: string;}>
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params } : { params : ParamsType}) {
  const { diocese } = await params;
  const sites = await pilgrimageSites;
  const filteredSites = await sites.filter((s) => s.diocese.toLowerCase().split(' ').join('-') == diocese)
  return (
    <div className="h-full flex flex-col">
      <MainNav></MainNav>
      <StatesFilter selected={diocese}></StatesFilter>
      <section>
        <div className="w-full max-w-screen-lg mx-auto flex flex-row justify-between items-center px-6 pt-2 md:pt-6">
          <p className="text-xs text-stone-600 tracking-widest uppercase">Results for: {diocese.split('-').join(' ')}</p>
          <p className="text-xs text-stone-600 tracking-widest uppercase">Displaying {filteredSites.length} sites</p>
        </div>
      </section>
      <Gallery filteredSites={filteredSites}></Gallery>
      <Footer></Footer>
    </div>
  )
}