"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Pointer-driven 3D tilt for card media. Hover-only devices with motion
 * allowed get a subtle rotateX/rotateY toward the cursor; touch devices and
 * prefers-reduced-motion render statically. CSS transforms only.
 */
export function TiltCard({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduceMotion) return;

    const move = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      inner.style.transform = `rotateY(${(px * 8).toFixed(2)}deg) rotateX(${(
        -py * 8
      ).toFixed(2)}deg)`;
    };
    const leave = () => {
      inner.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    wrap.addEventListener("pointermove", move);
    wrap.addEventListener("pointerleave", leave);
    return () => {
      wrap.removeEventListener("pointermove", move);
      wrap.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ perspective: "900px" }}>
      <div
        ref={innerRef}
        style={{ transition: "transform 160ms ease", willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
