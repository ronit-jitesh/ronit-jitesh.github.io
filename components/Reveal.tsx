"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: reveal instantly without animation.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      el.classList.add("is-visible");
      return;
    }

    // Safety net: if the IntersectionObserver never fires for any reason
    // (stale tabs, headless renderers, tall sections that never cross the
    // intersection threshold), force the element visible after 1.5s so the
    // section never stays blank.
    const fallback = window.setTimeout(() => {
      el.classList.add("is-visible");
    }, 1500);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.clearTimeout(fallback);
          window.setTimeout(() => el.classList.add("is-visible"), delay);
          io.unobserve(el);
        });
      },
      // threshold: 0 fires the moment any pixel enters the viewport.
      // Positive bottom rootMargin pre-loads reveals slightly before scroll-in.
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
