import { clientLogos } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Grid of partner & client logos, shown on a light stage so original colours stay true. */
export function LogoWall() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {clientLogos.map((l, i) => (
        <Reveal key={l.id} delay={(i % 5) * 70}>
          <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-paper p-6 shadow-elevated transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
            <img
              src={l.url || undefined}
              alt={l.url ? `${l.name} logo` : ""}
              loading="lazy"
              className={l.url ? "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" : "hidden"}
            />
            {!l.url && <span className="text-center text-sm font-semibold text-paper-foreground">{l.name}</span>}
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
              {l.name}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Infinite scrolling strip of logos. */
export function LogoMarquee() {
  return (
    <div aria-label="Trusted partners and clients" className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[false, true].map((duplicate) => (
          <div key={String(duplicate)} aria-hidden={duplicate} className="flex shrink-0 gap-4 pr-4">
            {clientLogos.map((l) => (
              <div key={l.id} className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-paper px-5 py-3">
                {l.url ? (
                  <img src={l.url} alt={duplicate ? "" : `${l.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                ) : (
                  <span dir={l.id === "amal-ummah" ? "rtl" : undefined} lang={l.id === "amal-ummah" ? "ar" : undefined} className="text-center text-sm font-semibold text-paper-foreground">
                    {l.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
