import { MainNav } from "../_sections/MainNav";
import StatesFilter from "../_components/StatesFilter";
import Footer from "../_sections/Footer";
import JubileeFeaturedPilgrimageSitesGridOnly from "../_sections/JubileeFeaturedPilgrimageSitesGridOnly";
import JubileePlanningPilgrimage from "../_sections/JubileePlanningPilgrimage";
import JubileeCTADownload from "../_sections/JubileeCTADownload";
import PopeFrancisQuotes from "../_sections/PopeFrancisQuotes";

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export default function Sites() {
  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="featured"></StatesFilter>
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="py-10 md:py-20 bg-white rounded-xl shadow-lg space-y-16">
          <JubileeFeaturedPilgrimageSitesGridOnly></JubileeFeaturedPilgrimageSitesGridOnly>
          <JubileeCTADownload></JubileeCTADownload>
          <JubileePlanningPilgrimage></JubileePlanningPilgrimage>
          <PopeFrancisQuotes></PopeFrancisQuotes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
