import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { LogoWall } from "@/components/site/LogoWall";
import { PostsGallery } from "@/components/site/PostsGallery";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { postClients } from "@/lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio, Partners & Clients | Mastera" },
      {
        name: "description",
        content:
          "Social media designs and brand work for Towba, Daryeel Wellness, Amal Grand General Hospital, Kuwaity Dental Care Center and more.",
      },
      { property: "og:title", content: "Mastera Portfolio" },
      { property: "og:description", content: "Official partners, client logos and social media design gallery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Work that helps brands <span className="text-gradient">stand out.</span>
          </>
        }
        intro="Official partners and clients, and a selection of social media designs created by Mastera."
      />

      <section className="container mx-auto px-6 pb-24">
        <SectionHeading eyebrow="Official partners & clients" title="Brands we've worked with." className="mb-12" />
        <LogoWall />
        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted-foreground">Also featured in our social work:</span>
          {postClients.map((c) => (
            <span key={c} className="rounded-full glass px-4 py-2 text-sm font-semibold">
              {c}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Social media gallery"
          title="Designed for the feed."
          intro="Each post is shown on its original canvas — 1080 × 1350px, and 1080 × 1235px for the Creatine design. Tap any post to view it full size."
          className="mb-14"
        />
        <PostsGallery />
      </section>

      <CtaBand />
    </>
  );
}
