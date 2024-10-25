import { MainNav } from "../_components/MainNav";
import StatesFilter from "../_components/StatesFilter";
import BannerDownloadPDF from "../_sections/BannerDownloadPDF";
import Footer from "../_sections/Footer";
import Gallery from "../_sections/Gallery";

export default function Sites() {
  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter></StatesFilter>
      <Gallery></Gallery>
      <BannerDownloadPDF></BannerDownloadPDF>
      <Footer></Footer>
    </div>
  );
}
