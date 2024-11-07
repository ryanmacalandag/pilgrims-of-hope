import { MainNav } from "./_sections/MainNav";
import { pilgrimageSites } from "./_data/pilgrimagesite";
import StatesFilter from "./_components/StatesFilter";
import BannerDownloadPDF from "./_sections/BannerDownloadPDF";
import Footer from "./_sections/Footer";
import Gallery from "./_sections/Gallery";
import PopeFrancisQuotes from "./_sections/PopeFrancisQuotes";

export default function Sites() {

  const allFeaturedSites = pilgrimageSites.filter((s) => s.featured)

  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="featured"></StatesFilter>
      <Gallery filteredSites={allFeaturedSites} filterBy="Featured"></Gallery>
      <PopeFrancisQuotes></PopeFrancisQuotes>
      <BannerDownloadPDF></BannerDownloadPDF>
      <Footer></Footer>
    </div>
  );
}
