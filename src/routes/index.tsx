import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero3D } from "@/components/site/Hero3D";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ApproachSteps } from "@/components/site/ApproachSteps";
import { ServiceCards } from "@/components/site/ServiceCards";
import { LogoMarquee } from "@/components/site/LogoWall";
import { PostsGallery } from "@/components/site/PostsGallery";
import { IndustryGrid } from "@/components/site/IndustryGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { brands, posts } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mastera — Master Your Market | Marketing & Creative Agency" },
      {
        name: "description",
        content:
          "Mastera helps businesses build strong brands, connect with customers and pursue sustainable growth — strategy, social media, branding and production.",
      },
      { property: "og:title", content: "Mastera — Master Your Market" },
      {
        property: "og:description",
        content: "Your brand deserves to stand out. Marketing & creative agency based in Hargeisa, Somaliland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pb-20 pt-36 md:pt-40 lg:min-h-screen">
        <div className="absolute inset-0 -z-10 bg-hero" />
        <div className="absolute inset-0 -z-10 grid-lines" />
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Marketing & Creative Agency
            </p>
            <h1 className="mt-6 text-balance text-6xl font-black leading-[0.95] md:text-7xl xl:text-8xl">
              Master <br />
              Your <span className="text-gradient">Market</span>
            </h1>
            <p className="mt-6 text-2xl font-semibold text-foreground/90 md:text-3xl">
              Your Brand Deserves to Stand Out.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Mastera is a premier marketing and creative agency that helps businesses build strong brands,
              connect with customers, and pursue sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="energy" size="xl">
                <Link to="/contact">
                  Get Started <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/portfolio">Explore Portfolio</Link>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6">
              {[
                { k: "5", v: "Core services" },
                { k: "5", v: "Step approach" },
                { k: "10+", v: "Client brands" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-4xl font-extrabold text-gradient">{s.k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={200}>
            <Hero3D />
          </Reveal>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by partners & clients
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* ABOUT + APPROACH */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            eyebrow="About Mastera"
            title={
              <>
                Purposeful, consistent, <span className="text-gradient">measurable</span> marketing.
              </>
            }
          />
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We bring together market understanding, strategic planning, creative content, digital channels, and
              performance measurement to help clients communicate more effectively and make informed marketing
              decisions.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all">
              Our story & approach <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16">
          <ApproachSteps />
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24">
        <div className="absolute inset-x-0 top-1/3 -z-10 h-96 bg-hero opacity-50" />
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our Services" title="Everything your brand needs to grow." />
            <Button asChild variant="glass" size="lg">
              <Link to="/services">All services</Link>
            </Button>
          </div>
          <ServiceCards compact />
        </div>
      </section>

      {/* WORK */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Selected work" title="Social media designs that stop the scroll." />
          <Button asChild variant="glass" size="lg">
            <Link to="/portfolio">Full portfolio</Link>
          </Button>
        </div>
        <PostsGallery posts={posts.slice(0, 6)} />
      </section>

      {/* BRANDS */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading eyebrow="Brand identities" title="Complete identity systems, built to last." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {brands.map((b, i) => (
            <Reveal key={b.slug} delay={i * 110}>
              <Link
                to="/brands/$slug"
                params={{ slug: b.slug }}
                data-brand={b.slug}
                className="group block overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-ink">
                  <img
                    src={b.pages[b.cover - 1]}
                    alt={`${b.name} brand guideline cover`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2">
                    {b.colors.slice(0, 3).map((c) => (
                      <span key={c.hex} className="h-4 w-4 rounded-full ring-1 ring-foreground/20" style={{ backgroundColor: c.hex }} />
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.category}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all group-hover:gap-3">
                    View identity <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading eyebrow="Industries we can support" title="Sector know-how, local insight." className="mb-14" />
        <IndustryGrid />
      </section>

      <CtaBand />
    </>
  );
}
