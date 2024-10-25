import SiteDetails from "@/app/_components/SiteDetails";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite"
import Footer from "@/app/_sections/Footer";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const sites = await pilgrimageSites;
 
  return sites.map((s) => ({
    slug: s.slug,
  }))
}

type ParamsType = Promise<{ slug: string;}>
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params } : { params : ParamsType}) {
  const { slug } = await params;
  const sites = await pilgrimageSites;
  const site = await sites.find((s) => s.slug == slug)
  
  return (
    <div className="h-full flex flex-col">
      <SiteDetails site={site!}></SiteDetails>
      <Footer></Footer>
    </div>
  )
}