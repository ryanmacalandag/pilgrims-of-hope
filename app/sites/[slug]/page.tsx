import SiteDetails from "@/app/_components/SiteDetails";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";
import Footer from "@/app/_sections/Footer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const { slug } = await params;
  const sites = pilgrimageSites;
  const site = sites.find((s) => s.slug == slug);

  return {
    title: site?.name.replace(/&#39;/g, "'"),
    openGraph: {
      title:
        site?.name.replace(/&#39;/g, "'") +
        " - Jubilee 2025: Pilgrimage of Hope",
      description:
        "Have you visited " + site?.name.replace(/&#39;/g, "'") + "?",
      url: "/sites/" + site?.slug,
      siteName: "Pilgrimage of Hope",
      images: [
        {
          url: "" + site?.image, // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

type ParamsType = Promise<{ slug: string }>;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const sites = await pilgrimageSites;

  return sites.map((s) => ({
    slug: s.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: ParamsType }) {
  const { slug } = await params;
  const sites = pilgrimageSites;
  const site = sites.find((s) => s.slug == slug);

  return (
    <div className="h-full flex flex-col">
      <SiteDetails site={site!}></SiteDetails>
      <Footer></Footer>
    </div>
  );
}
