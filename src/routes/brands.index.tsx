import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { brands } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Brand Identity Projects | Mastera" },
      {
        name: "description",
        content: "Brand identity systems by Mastera: Heersare Production, Carwo Golden House and Markiz Rashaad.",
      },
      { property: "og:title", content: "Brand Identity Projects by Mastera" },
      { property: "og:description", content: "Logos, color systems, typography and mockups — complete brand guidelines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandsIndex,
});

function BrandsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Brand identities"
        title={
          <>
            Identities with <span className="text-gradient">meaning.</span>
          </>
        }
        intro="Full brand guidelines — logo systems, color codes, typography and real-world applications — preserved exactly as designed."
      />
      <section className="container mx-auto space-y-8 px-6 pb-24">
        {brands.map((b, i) => (
          <Reveal key={b.slug}>
            <Link
              to="/brands/$slug"
              params={{ slug: b.slug }}
              data-brand={b.slug}
              className={cn(
                "group grid overflow-hidden rounded-[2rem] glass transition-all duration-500 hover:shadow-elevated lg:grid-cols-2",
              )}
            >
              <div className={cn("relative overflow-hidden bg-brand-ink", i % 2 === 1 && "lg:order-2")}>
                <img
                  src={b.pages[b.cover - 1]}
                  alt={`${b.name} brand guideline cover`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full max-h-[480px] w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  style={{ aspectRatio: `${b.pageWidth} / ${b.pageHeight}` }}
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">0{i + 1} · {b.category}</p>
                <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">{b.name}</h2>
                {b.arabic && (
                  <p className="mt-2 font-cairo text-3xl font-bold text-brand" dir="rtl" lang="ar">
                    {b.arabic}
                  </p>
                )}
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{b.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {b.colors.map((c) => (
                    <span key={c.hex} className="h-8 w-8 rounded-full ring-1 ring-foreground/20" style={{ backgroundColor: c.hex }} title={`${c.name} ${c.hex}`} />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Typography: {b.fonts.map((f) => f.name).join(" · ")}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand transition-all group-hover:gap-4">
                  Explore the identity <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
