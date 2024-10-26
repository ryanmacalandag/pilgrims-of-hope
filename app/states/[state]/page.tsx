import { statesAU } from "@/app/_components/StatesFilter";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite"
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";
import { MainNav } from "@/app/_components/MainNav";
import StatesFilter from "@/app/_components/StatesFilter";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const states = await statesAU;
 
  return states.map((s) => ({
    state: s,
  }))
}

type ParamsType = Promise<{ state: string;}>
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params } : { params : ParamsType}) {
  const { state } = await params;
  const sites = await pilgrimageSites;
  const filteredSites = await sites.filter((s) => s.state.toLowerCase() == state)
  console.log(filteredSites)
  return (
    <div className="h-full flex flex-col">
      <MainNav></MainNav>
      <StatesFilter selected={state}></StatesFilter>
      <section>
        <div className="w-full max-w-screen-lg mx-auto px-6 pt-2 md:pt-6">
          <h2 className="text-xs tracking-widest font-bold uppercase">Showing all results from: &quot;{state}&quot;</h2>
        </div>
      </section>
      <Gallery filteredSites={filteredSites}></Gallery>
      <Footer></Footer>
    </div>
  )
}