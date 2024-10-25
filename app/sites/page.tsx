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
      <StatesFilter></StatesFilter>
      <section>
        <div className="w-full max-w-screen-lg mx-auto px-6 pt-2 md:pt-6">
          <h2 className="text-xs tracking-widest font-bold uppercase">All Featured Sites</h2>
        </div>
      </section>
      <Gallery filteredSites={allFeaturedSites} ></Gallery>
      <BannerDownloadPDF></BannerDownloadPDF>
      <Footer></Footer>
    </div>
  );
}
