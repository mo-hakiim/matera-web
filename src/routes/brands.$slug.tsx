import { createFileRoute, notFound } from "@tanstack/react-router";
import { BrandShowcase } from "@/components/site/BrandShowcase";
import { CtaBand } from "@/components/site/CtaBand";
import { getBrand } from "@/lib/content";

export const Route = createFileRoute("/brands/$slug")({
  loader: ({ params }) => {
    const brand = getBrand(params.slug);
    if (!brand) throw notFound();
    return { slug: brand.slug };
  },
  head: ({ loaderData }) => {
    const brand = loaderData ? getBrand(loaderData.slug) : undefined;
    if (!brand) {
      return { meta: [{ title: "Brand not found | Mastera" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${brand.name} Brand Identity | Mastera`;
    return {
      meta: [
        { title },
        { name: "description", content: brand.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: brand.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BrandPage,
});

function BrandPage() {
  const { slug } = Route.useLoaderData();
  const brand = getBrand(slug)!;
  return (
    <>
      <BrandShowcase key={brand.slug} brand={brand} />
      <CtaBand />
    </>
  );
}
