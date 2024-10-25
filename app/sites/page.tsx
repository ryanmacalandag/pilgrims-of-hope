import { MainNav } from "../_components/MainNav";
import StatesFilter from "../_components/StatesFilter";
import Footer from "../_sections/Footer";
import Gallery from "../_sections/Gallery";

export default function Sites() {
  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter></StatesFilter>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
