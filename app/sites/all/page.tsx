import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import BannerDownloadPDF from "@/app/_sections/BannerDownloadPDF";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export default function Sites() {
  const allSites = pilgrimageSites;

  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="all"></StatesFilter>
      <Gallery filteredSites={allSites} filterBy="All"></Gallery>
      <BannerDownloadPDF></BannerDownloadPDF>
      <Footer></Footer>
    </div>
  );
}
