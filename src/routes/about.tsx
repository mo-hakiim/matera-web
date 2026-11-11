import { createFileRoute } from "@tanstack/react-router";
import { Target, Layers, LineChart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ApproachSteps } from "@/components/site/ApproachSteps";
import { CtaBand } from "@/components/site/CtaBand";
import { assetUrl } from "@/lib/site-path";
import { TiltCard } from "@/components/site/TiltCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mastera — Our Mission & Approach" },
      {
        name: "description",
        content:
          "Mastera builds strong brands and sustainable growth through a 5-step approach: Discover, Strategize, Create, Activate, Measure & Improve.",
      },
      { property: "og:title", content: "About Mastera — Our Mission & Approach" },
      { property: "og:description", content: "Effective marketing should be purposeful, consistent, and measurable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Purposeful", text: "Every plan starts from the business, its customers, and its competitive environment." },
  { icon: Layers, title: "Consistent", text: "Strategy, creative content and digital channels working together as one voice." },
  { icon: LineChart, title: "Measurable", text: "Performance measurement that turns results into informed marketing decisions." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Mastera"
        title={
          <>
            We help brands <span className="text-gradient">master their market.</span>
          </>
        }
        intro="Mastera is a marketing and creative agency that helps businesses build strong brands, connect with customers, and pursue sustainable growth."
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] glass p-10 md:p-14">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
              <img src={assetUrl("/assets/4x/mastera-logo-light.webp")} alt="Mastera — master your market" width={900} height={252} className="relative w-full max-w-md" />
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              We bring together market understanding, strategic planning, creative content, digital channels, and
              performance measurement to help clients communicate more effectively and make informed marketing
              decisions.
            </p>
            <p>
              Our work is built around a simple principle:{" "}
              <strong className="text-foreground">effective marketing should be purposeful, consistent, and measurable.</strong>{" "}
              We begin by understanding the business, its customers, and its competitive environment, then develop and
              implement a practical plan suited to its goals and resources.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <TiltCard className="p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-energy text-accent-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Our approach"
          title="Five steps from insight to impact."
          intro="Hover or tap each step to explore how we work with every client."
          className="mb-14"
        />
        <ApproachSteps />
      </section>

      <CtaBand />
    </>
  );
}
