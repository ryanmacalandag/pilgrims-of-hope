import { MainNav } from "../_sections/MainNav";
import { pilgrimageSites } from "../_data/pilgrimagesite";
import StatesFilter from "../_components/StatesFilter";
import BannerDownloadPDF from "../_sections/BannerDownloadPDF";
import Footer from "../_sections/Footer";
import GalleryPortrait from "../_sections/GalleryPortrait";
import ViewAllButton from "../_components/ViewAllButton";

export const metadata = {
  title: "All Sites",
};

export default function Sites() {
  const allFeaturedSites = pilgrimageSites.filter((s) => s.featured);

  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="featured"></StatesFilter>
      <GalleryPortrait
        filteredSites={allFeaturedSites}
        filterBy="Featured"
      ></GalleryPortrait>
      <ViewAllButton></ViewAllButton>
      <BannerDownloadPDF></BannerDownloadPDF>
      <Footer></Footer>
    </div>
  );
}
