import { MainNav } from "@/app/_sections/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import StatesFilter from "@/app/_components/StatesFilter";
import Footer from "@/app/_sections/Footer";
import Gallery from "@/app/_sections/Gallery";

const MAX_ITEMS: number = 8;
const pages = new Array(Math.ceil(pilgrimageSites.length / MAX_ITEMS));
const allSites = pilgrimageSites;
const filteredTotal = allSites.length;

export const metadata = {
  title: "Australian Catholic Pilgrimage Sites",
};

export function generateStaticParams() {
  return [...pages.keys()].map((key) => ({
    page: key.toString(),
  }));
}

type ParamsType = Promise<{ page: string }>;

export default async function Page({ params }: { params: ParamsType }) {
  const { page } = await params;

  const start = (Number(page) - 1) * MAX_ITEMS;
  const filteredSites = allSites.slice(start, start + MAX_ITEMS);

  return (
    <div>
      <MainNav></MainNav>
      <StatesFilter selected="all"></StatesFilter>
      <Gallery
        filteredSites={filteredSites}
        filteredTotal={filteredTotal}
        filterBy="All"
        max={MAX_ITEMS}
        pages={pages.length}
        current={page}
      ></Gallery>
      <Footer></Footer>
    </div>
  );
}
