import { MainNav } from "../_sections/MainNav";
import StatesFilter from "../_components/StatesFilter";
import Footer from "../_sections/Footer";
import JubileeFeaturedPilgrimageSites from "../_sections/JubileeFeaturedPilgrimageSites";
import JubileePlanningPilgrimage from "../_sections/JubileePlanningPilgrimage";

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
          <JubileeFeaturedPilgrimageSites></JubileeFeaturedPilgrimageSites>
          <JubileePlanningPilgrimage></JubileePlanningPilgrimage>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
