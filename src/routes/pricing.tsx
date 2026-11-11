import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PricingPlans } from "@/components/site/PricingPlans";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { corePackageFeatures } from "@/lib/content";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Packages & Plans — Brand Starter, Growth, Performance | Mastera" },
      {
        name: "description",
        content:
          "Three monthly marketing packages from Mastera with 10, 20 or 30 planned content pieces, social media and ads management, reporting and more.",
      },
      { property: "og:title", content: "Mastera Packages & Plans" },
      { property: "og:description", content: "Brand Starter, Brand Growth and Brand Performance monthly packages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Packages & plans"
        title={
          <>
            Pick the pace of your <span className="text-gradient">growth.</span>
          </>
        }
        intro="Three monthly packages built on the same strong foundation — choose how much content, training and campaign support your brand needs."
      />

      <section className="container mx-auto px-6 pb-16">
        <Reveal className="mb-16 rounded-3xl glass p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Included in every package</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {[...corePackageFeatures, "Content creation", "Video production", "Graphic design"].map((f) => (
              <li key={f} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                <Check className="h-4 w-4 text-gold" /> {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <PricingPlans />
      </section>

      <section className="container mx-auto px-6 py-16">
        <SectionHeading
          align="center"
          eyebrow="What changes between plans"
          title="Content volume, training, campaigns, ad spend & web."
          intro="Every plan shares the core features. Higher tiers add staff training, campaign management, advertising cost coordination and website management."
        />
      </section>

      <CtaBand />
    </>
  );
}
