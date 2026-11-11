import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/** Card that tilts in 3D toward the pointer and casts a moving glow. */
export function TiltCard({
  children,
  className,
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * max}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * max}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="perspective-1200 h-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(
          "group relative h-full overflow-hidden rounded-3xl glass preserve-3d transition-transform duration-300 ease-out glow-border",
          "[transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
          className,
        )}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--color-primary-glow)_22%,transparent),transparent_60%)]" />
        {children}
      </div>
    </div>
  );
}
