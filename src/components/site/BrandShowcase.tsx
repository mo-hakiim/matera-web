import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { brands, type Brand } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ImageLightbox } from "./ImageLightbox";
import { Reveal } from "./Reveal";

function PageFrame({
  brand,
  page,
  onOpen,
  className,
  eager,
}: {
  brand: Brand;
  page: number;
  onOpen: (i: number) => void;
  className?: string;
  eager?: boolean;
}) {
  return (
    <button
      onClick={() => onOpen(page - 1)}
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl bg-card shadow-elevated ring-1 ring-foreground/5 transition-transform duration-500 hover:-translate-y-1",
        className,
      )}
      style={{ aspectRatio: `${brand.pageWidth} / ${brand.pageHeight}` }}
        aria-label={`Open ${brand.name} guideline page ${page}`}
    >
      <img
        src={brand.pages[page - 1]}
        alt={`${brand.name} brand guideline — page ${page}`}
        width={brand.pageWidth}
        height={brand.pageHeight}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass opacity-0 transition-opacity group-hover:opacity-100">
        <Expand className="h-4 w-4" />
      </span>
    </button>
  );
}

export function BrandTabs({ current }: { current?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {brands.map((b) => (
        <Link
          key={b.slug}
          to="/brands/$slug"
          params={{ slug: b.slug }}
          data-brand={b.slug}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
            current === b.slug
              ? "bg-brand text-brand-contrast shadow-elevated"
              : "glass text-muted-foreground hover:text-foreground",
          )}
        >
          {b.name}
        </Link>
      ))}
    </div>
  );
}

function SubHeading({ no, title, text }: { no: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-display text-sm font-bold tracking-[0.2em] text-brand">{no}</p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{title}</h2>
      </div>
      {text && <p className="max-w-md text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function BrandShowcase({ brand }: { brand: Brand }) {
  const [index, setIndex] = useState<number | null>(null);
  const portrait = brand.pageHeight > brand.pageWidth;
  const items = brand.pages.map((src, i) => ({
    src,
    alt: `${brand.name} brand guideline — page ${i + 1}`,
    width: brand.pageWidth,
    height: brand.pageHeight,
    caption: `${brand.name} · page ${i + 1}`,
  }));
  const gridCols = portrait ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
  const hasSeparateArabicWordmark = brand.slug === "markiz";

  return (
    <div data-brand={brand.slug}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-20 pt-36 md:pt-44">
        <div className="absolute inset-0 -z-10 grid-lines" />
        <div className="absolute -left-40 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-[120px]" />
        <div className="container mx-auto px-6">
          <BrandTabs current={brand.slug} />
          <div
            className={cn(
              "mt-12 grid items-center gap-12",
              portrait || hasSeparateArabicWordmark ? "lg:grid-cols-[1fr_0.8fr]" : "lg:grid-cols-1",
            )}
          >
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Brand identity · {brand.category}
              </p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] md:text-7xl">
                {brand.name}
                {brand.arabic && !hasSeparateArabicWordmark && (
                  <span className="mt-2 block font-cairo text-4xl font-bold text-brand md:text-5xl" dir="rtl" lang="ar">
                    {brand.arabic}
                  </span>
                )}
              </h1>
              {!hasSeparateArabicWordmark && (
                <>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{brand.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {brand.colors.map((c) => (
                      <span
                        key={c.hex}
                        className="inline-flex items-center gap-2 rounded-full glass py-1.5 pl-1.5 pr-4 text-xs font-semibold"
                      >
                        <span className="h-6 w-6 rounded-full ring-1 ring-foreground/20" style={{ backgroundColor: c.hex }} />
                        {c.hex}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </Reveal>
            {hasSeparateArabicWordmark ? (
              <Reveal delay={150} className="flex items-center justify-end lg:translate-y-20">
                <span
                  className="font-cairo text-4xl font-bold leading-none text-brand md:text-5xl"
                  lang="ar"
                  dir="rtl"
                >
                  {brand.arabic}
                </span>
              </Reveal>
            ) : (
              <Reveal delay={150}>
                <PageFrame brand={brand} page={brand.cover} onOpen={setIndex} eager className="shadow-glow" />
              </Reveal>
            )}
            {hasSeparateArabicWordmark && (
              <Reveal delay={150} className="mt-8 lg:col-span-2 lg:mt-8">
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{brand.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {brand.colors.map((c) => (
                    <span
                      key={c.hex}
                      className="inline-flex items-center gap-2 rounded-full glass py-1.5 pl-1.5 pr-4 text-xs font-semibold"
                    >
                      <span className="h-6 w-6 rounded-full ring-1 ring-foreground/20" style={{ backgroundColor: c.hex }} />
                      {c.hex}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
            {hasSeparateArabicWordmark && (
              <Reveal delay={150} className="lg:col-span-2 lg:mt-8">
                <PageFrame brand={brand} page={brand.cover} onOpen={setIndex} eager className="shadow-glow" />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-28 px-6 pb-12">
        {/* Story */}
        <section>
          <SubHeading no="01" title="Brand overview" />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { k: "About", v: brand.about },
              { k: "Mission", v: brand.mission },
              { k: "Vision", v: brand.vision },
            ].map((x, i) => (
              <Reveal key={x.k} delay={i * 90}>
                <div className="h-full rounded-3xl glass p-8">
                  <span className="inline-block h-1 w-10 rounded-full bg-brand" />
                  <h3 className="mt-5 text-xl font-bold">{x.k}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{x.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Logo */}
        <section>
          <SubHeading no="02" title="Logo system" text={brand.logoMeaning} />
          <div className={cn("grid gap-5", gridCols)}>
            {brand.logoPages.map((p, i) => (
              <Reveal key={p} delay={(i % 3) * 80}>
                <PageFrame brand={brand} page={p} onOpen={setIndex} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Colour */}
        <section>
          <SubHeading no="03" title="Color system" text="Exact color codes from the brand guideline." />
          <Reveal className="grid overflow-hidden rounded-3xl ring-1 ring-foreground/10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
            {brand.colors.map((c) => (
              <div key={c.hex} className="group flex min-h-64 flex-col justify-end p-6 transition-all duration-500 lg:hover:pb-10" style={{ backgroundColor: c.hex }}>
                <div className="rounded-2xl bg-background/85 p-4 backdrop-blur-md">
                  <p className="font-display text-lg font-bold">{c.name}</p>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">HEX {c.hex}</p>
                  <p className="font-mono text-xs text-muted-foreground">RGB {c.rgb}</p>
                  <p className="font-mono text-xs text-muted-foreground">CMYK {c.cmyk}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <div className={cn("mt-5 grid gap-5", portrait ? "grid-cols-2" : "md:grid-cols-2")}>
            {brand.colorPages.map((p) => (
              <Reveal key={p}>
                <PageFrame brand={brand} page={p} onOpen={setIndex} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Type */}
        <section>
          <SubHeading no="04" title="Typography" />
          <div className="grid gap-5 lg:grid-cols-2">
            {brand.fonts.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <div className="h-full overflow-hidden rounded-3xl glass">
                  {f.family ? (
                    <div className={cn("p-8", f.family)}>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{f.role}</p>
                      <div className="mt-4 flex items-end justify-between gap-6">
                        <span className="text-[7rem] font-bold leading-none text-brand">Aa</span>
                        {f.family === "font-cairo" && (
                          <span className="text-6xl font-bold" dir="rtl" lang="ar">أ ب</span>
                        )}
                      </div>
                      <p className="mt-4 text-3xl font-bold">{f.name}</p>
                      <p className="mt-3 break-words text-muted-foreground">
                        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                        <br />
                        1234567890 @#%$&*()
                      </p>
                      {f.family === "font-cairo" && (
                        <p className="mt-3 text-lg" dir="rtl" lang="ar">
                          مركز الرشاد منارةٌ لتعليم القرآن الكريم والعلوم الإسلامية
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 pb-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{f.role}</p>
                      <p className="mt-3 text-3xl font-bold">{f.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">Specimen shown exactly as set in the guideline.</p>
                    </div>
                  )}
                  {f.specimenPage && (
                    <div className="p-4">
                      <PageFrame brand={brand} page={f.specimenPage} onOpen={setIndex} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Mockups */}
        <section>
          <SubHeading no="05" title="Applications & mockups" />
          <div className={cn("grid gap-5", gridCols)}>
            {brand.mockupPages.map((p, i) => (
              <Reveal key={p} delay={(i % 3) * 80}>
                <PageFrame brand={brand} page={p} onOpen={setIndex} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Full book */}
        <section>
          <SubHeading
            no="06"
            title="Full brand guideline"
            text={`All ${brand.pages.length} pages, in their original proportions.`}
          />
          <div className={cn("grid gap-3", portrait ? "grid-cols-3 md:grid-cols-4 lg:grid-cols-6" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4")}>
            {brand.pages.map((_, i) => (
              <PageFrame key={i} brand={brand} page={i + 1} onOpen={setIndex} className="rounded-xl" />
            ))}
          </div>
        </section>
      </div>

      <ImageLightbox items={items} index={index} onIndexChange={setIndex} />
    </div>
  );
}
