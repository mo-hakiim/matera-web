import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCards } from "@/components/site/ServiceCards";
import { IndustryGrid } from "@/components/site/IndustryGrid";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Social Media, Branding, Production | Mastera" },
      {
        name: "description",
        content:
          "Social media management, brand strategy & identity, creative studio & media production, marketing strategy and training from Mastera.",
      },
      { property: "og:title", content: "Mastera Services" },
      {
        property: "og:description",
        content: "Five service lines and the industries we support — from financial services to NGOs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Strategy, creativity & <span className="text-gradient">growth</span> — under one roof.
          </>
        }
        intro="Five connected service lines that take your brand from research and positioning to content, campaigns and measurable results."
      />
      <section className="container mx-auto px-6 pb-24">
        <ServiceCards />
      </section>
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Industries we can support"
          title="Built for the sectors that move our region."
          className="mb-14"
        />
        <IndustryGrid />
      </section>
      <CtaBand />
    </>
  );
}
