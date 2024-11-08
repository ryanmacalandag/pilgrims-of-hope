import ImageModal from "@/app/_components/ImageModal";
import { pilgrimageSites } from "@/app/_data/pilgrimagesite";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const sites = await pilgrimageSites;

  return sites.map((s) => ({
    photo: s.slug,
  }));
}

type ParamsType = Promise<{ photo: string }>;

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: ParamsType }) {
  const { photo } = await params;
  const sites = await pilgrimageSites;
  const site = await sites.find((s) => s.image == "/sites/" + photo + ".jpg");

  return (
    <div className="h-full flex flex-col">
      <ImageModal image={site!.image} slug={site!.slug}></ImageModal>
    </div>
  );
}
