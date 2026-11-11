import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string | undefined;
  delay?: number;
  as?: ElementType;
};

/** Fades and lifts its children into view when scrolled to. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let revealed = false;
    let frame = 0;
    const revealIfVisible = () => {
      if (revealed) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
        el.classList.remove("reveal-ready");
        el.classList.add("is-visible");
        revealed = true;
        io?.unobserve(el);
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      }
    };

    let io: IntersectionObserver | undefined;
    el.classList.add("reveal-ready");
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) revealIfVisible();
        });
      },
      { threshold: 0, rootMargin: "80px 0px" },
      );
      io.observe(el);
    }

    // Check synchronously and on the next frame: client-side route transitions
    // and late image sizing can otherwise leave visible sections hidden.
    revealIfVisible();
    frame = window.requestAnimationFrame(revealIfVisible);
    window.addEventListener("scroll", revealIfVisible, { passive: true });
    window.addEventListener("resize", revealIfVisible, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
      io?.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
