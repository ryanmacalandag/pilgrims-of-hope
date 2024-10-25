import { MainNav } from "@/app/_components/MainNav";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite"
import Footer from "@/app/_sections/Footer";
import Image from "next/image";

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
    <div className="h-full min-h-dvh flex flex-col">
      <MainNav></MainNav>

      <section className="w-full flex-grow max-w-screen-lg mx-auto px-6 flex flex-col gap-6">
        <h1 className="font-serif text-xl sm:text-2xl lg:text-4xl">{site?.name}</h1>
        <div className="w-full h-40 overflow-hidden">
          <Image
            src={site!.image}
            alt={site!.name}
            width={1100}
            height={300}
            className="object-cover object-bottom"
          />
        </div>
        <div>
          <p>{site!.name}</p>
          <p>{site!.diocese}</p>
        </div>
        <div>
          <p>{site!.street}</p>
          <p>{site!.city}</p>
          <p>{site!.state}</p>
        </div>
        {
          site!.contact.map((contact) => {
            return (
              <div key={contact}>
                <p>{contact}</p>
              </div>
            )
          })
        }
      </section>

      <Footer></Footer>
    </div>
  )
}