import { MainNav } from "../_components/MainNav";
import StatesFilter from "../_components/StatesFilter";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import BannerDownloadPDF from "../_sections/BannerDownloadPDF";
import Footer from "../_sections/Footer";
import Gallery from "../_sections/Gallery";

export default function Sites() {

  const allFeaturedSites = pilgrimageSites.filter((s) => s.featured)

  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="featured"></StatesFilter>
      <section>
        <div className="w-full max-w-screen-lg mx-auto flex flex-row justify-between items-center px-6 pt-2 md:pt-6">
          <p className="text-xs text-stone-600 tracking-widest uppercase">Featured Sites</p>
          <p className="text-xs text-stone-600 tracking-widest uppercase">Showing {allFeaturedSites.length} Sites</p>
        </div>
      </section>
      <Gallery filteredSites={allFeaturedSites} ></Gallery>
      <BannerDownloadPDF></BannerDownloadPDF>
      <Footer></Footer>
    </div>
  );
}
