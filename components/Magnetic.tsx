"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Magnetic hover: the wrapped element leans a few pixels toward the cursor.
 * Disabled on touch devices and under prefers-reduced-motion.
 */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduceMotion) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      el.style.transform = `translate(${(x * 3).toFixed(1)}px, ${(
        y * 3
      ).toFixed(1)}px)`;
    };
    const leave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="inline-flex"
      style={{ transition: "transform 160ms ease" }}
    >
      {children}
    </div>
  );
}
