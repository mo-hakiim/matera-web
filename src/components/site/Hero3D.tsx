import { useEffect, useRef } from "react";
import { posts } from "@/lib/content";

const stack = posts.slice(0, 3); // Towba Umrah, Daryeel Creatine, Faatix Honor

/**
 * 3D scene: three real client posts floating in a fanned stack, orbited by glowing
 * rings. The whole scene leans toward the pointer.
 */
export function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--sx", `${y * -14}deg`);
        el.style.setProperty("--sy", `${x * 18}deg`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="perspective-1200 relative mx-auto aspect-square w-full max-w-[560px]">
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-primary/50 blur-[90px] animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[8%] h-40 w-40 rounded-full bg-accent/40 blur-[70px] animate-pulse-glow" />

      <div
        ref={ref}
        className="preserve-3d absolute inset-0 transition-transform duration-500 ease-out [transform:rotateX(var(--sx,6deg))_rotateY(var(--sy,-12deg))]"
      >
        {/* orbit rings */}
        <div className="preserve-3d absolute inset-[4%] [transform:rotateX(72deg)]">
          <div className="absolute inset-0 rounded-full border border-primary-glow/40 animate-spin-slow">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-gold shadow-glow-accent" />
          </div>
        </div>
        <div className="preserve-3d absolute inset-[14%] [transform:rotateX(70deg)_rotateY(18deg)]">
          <div className="absolute inset-0 rounded-full border border-accent/40 animate-spin-reverse">
            <span className="absolute -bottom-1.5 left-1/3 h-2.5 w-2.5 rounded-full bg-primary-glow shadow-glow" />
          </div>
        </div>

        {/* cards */}
        {stack.map((p, i) => {
          const pos = [
            "left-[2%] top-[14%] [transform:translateZ(-60px)_rotateY(18deg)_rotateZ(-8deg)]",
            "left-[29%] top-[6%] z-10 [transform:translateZ(60px)]",
            "right-[2%] top-[18%] [transform:translateZ(-30px)_rotateY(-18deg)_rotateZ(7deg)]",
          ][i];
          return (
            <div key={p.id} className={`preserve-3d absolute w-[42%] ${pos}`}>
              <div
                className="animate-float overflow-hidden rounded-2xl shadow-elevated ring-1 ring-foreground/10"
                style={{ animationDelay: `${i * -2.3}s`, aspectRatio: `${p.width} / ${p.height}` }}
              >
                <img
                  src={p.url}
                  alt={`${p.client} — ${p.title}`}
                  width={p.width}
                  height={p.height}
                  className="h-full w-full object-contain"
                  fetchPriority={i === 1 ? "high" : "auto"}
                />
              </div>
            </div>
          );
        })}

        {/* floating chips */}
        <div className="absolute bottom-[12%] left-[6%] rounded-2xl glass px-4 py-3 shadow-elevated animate-float-slow [transform:translateZ(120px)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Approach</p>
          <p className="font-display text-sm font-bold">Discover → Measure</p>
        </div>
        <div className="absolute bottom-[20%] right-[4%] rounded-2xl bg-gradient-energy px-4 py-3 text-accent-foreground shadow-glow-accent animate-float [transform:translateZ(140px)]">
          <p className="font-display text-sm font-extrabold">Master your market</p>
        </div>
      </div>
    </div>
  );
}
