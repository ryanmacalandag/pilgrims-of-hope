// import { MainNav } from "@/app/_components/MainNav";
import { BackButton } from "@/app/_components/BackButton";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite"
import Footer from "@/app/_sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { BiEnvelope, BiMapPin, BiPhone } from "react-icons/bi";

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
      {/* <MainNav></MainNav> */}
      <section className="w-full flex-grow max-w-screen-lg mx-auto flex flex-col gap-6 mt-12">
        <BackButton></BackButton>
        <h1 className="font-serif text-2xl sm:text-2xl lg:text-4xl text-balance pl-12 pr-6">{site?.name}</h1>
        <div className="w-full aspect-video md:aspect-banner overflow-hidden">
          <Image
            src={site!.image}
            alt={site!.name}
            width={1100}
            height={300}
            className="object-cover object-bottom"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 pl-12 ">
          <div className="col-span-12 sm:col-span-6">
            <p className="font-bold">{site!.name}</p>
            <p>{site!.diocese}</p>
          </div>
          <div className="col-span-12 sm:col-span-3 *:border-b *:border-stone-400 *:border-dotted *:py-2">
            <h4 className="text-xs text-teal-800 font-bold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiEnvelope></BiEnvelope> Address</h4>
            <p>{site!.street}</p>
            <p>{site!.city}</p>
            <p>{site!.state}</p>
          </div>
          <div className="col-span-12 sm:col-span-3 *:border-b *:border-stone-500 *:border-dotted *:py-2">
            <h4 className="text-xs text-teal-800 font-bold tracking-widest uppercase mt-2 sm:mt-0 flex items-center gap-2"><BiPhone></BiPhone> Contact</h4>
            {
              site!.contact.map((contact) => {
                return (
                  <div key={contact}>
                    <p>{contact}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
          <div className="w-full sm:w-fit px-12">
            <Link
              href={site!.maplink}
              className="flex flex-row justify-center items-center gap-3 bg-teal-700 hover:bg-teal-600 text-white font-bold px-8 py-4 mt-4 transition duration-300"
            ><BiMapPin size={22}></BiMapPin>Google Maps</Link>
          </div>
      </section>

      <Footer></Footer>
    </div>
  )
}