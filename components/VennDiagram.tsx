"use client";

import { useEffect, useRef } from "react";

/**
 * The overlap Venn as three depth-separated discs in CSS 3D.
 * Idle: slow orbit. Drag to spin. Pure CSS transforms — no WebGL, no
 * dependencies, nothing for the static export or Lighthouse to pay for.
 * prefers-reduced-motion gets a static tilted render, no animation.
 */
export function VennDiagram() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const rigRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const rig = rigRef.current;
    if (!stage || !rig) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rx = 16;
    let ry = -12;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let raf = 0;

    const apply = () => {
      rig.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    apply();
    if (reduceMotion) return;

    const loop = () => {
      if (!dragging) {
        ry += 0.12;
        apply();
      }
      raf = window.requestAnimationFrame(loop);
    };
    raf = window.requestAnimationFrame(loop);

    const down = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      stage.style.cursor = "grabbing";
      stage.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      ry += (e.clientX - lastX) * 0.4;
      rx = Math.max(-70, Math.min(70, rx - (e.clientY - lastY) * 0.4));
      lastX = e.clientX;
      lastY = e.clientY;
      apply();
    };
    const up = () => {
      dragging = false;
      stage.style.cursor = "grab";
    };

    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerup", up);
    stage.addEventListener("pointercancel", up);

    return () => {
      window.cancelAnimationFrame(raf);
      stage.removeEventListener("pointerdown", down);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerup", up);
      stage.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div className="w-full max-w-xl">
      <div
        ref={stageRef}
        role="img"
        aria-label="Three overlapping discs — Data and Analytics (validate), AI Engineering (build), Product and Commercial (prove) — meeting at the AI Analyst role. Drag to rotate."
        className="flex items-center justify-center cursor-grab select-none touch-none"
        style={{ perspective: "1000px", height: 380 }}
      >
        <div
          ref={rigRef}
          className="relative"
          style={{
            width: 300,
            height: 300,
            transformStyle: "preserve-3d",
            transform: "rotateX(16deg) rotateY(-12deg)",
          }}
        >
          {/* Data & Analytics — navy, deepest */}
          <div
            className="absolute rounded-full"
            style={{
              left: 10,
              top: 20,
              width: 200,
              height: 200,
              background: "rgba(27,42,78,0.12)",
              border: "1.5px solid rgba(27,42,78,0.55)",
              transform: "translateZ(-44px)",
            }}
          />
          {/* AI Engineering — gold, middle */}
          <div
            className="absolute rounded-full"
            style={{
              left: 90,
              top: 20,
              width: 200,
              height: 200,
              background: "rgba(168,134,75,0.14)",
              border: "1.5px solid rgba(168,134,75,0.6)",
              transform: "translateZ(0px)",
            }}
          />
          {/* Product & Commercial — neutral, nearest */}
          <div
            className="absolute rounded-full"
            style={{
              left: 50,
              top: 96,
              width: 200,
              height: 200,
              background: "rgba(92,92,90,0.10)",
              border: "1.5px solid rgba(92,92,90,0.5)",
              transform: "translateZ(44px)",
            }}
          />
          {/* Centre label floats above all three discs */}
          <div
            className="absolute inset-x-0 text-center"
            style={{ top: 128, transform: "translateZ(72px)" }}
          >
            <div className="font-display text-[26px] leading-tight text-[color:var(--ink)]">
              AI Analyst
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
              Validate · Build · Prove
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-3 text-center gap-2">
        <div>
          <div className="font-display text-[15px] leading-tight">
            Data &amp; Analytics
          </div>
          <div className="mt-1 kicker" style={{ color: "var(--accent)" }}>
            Validate
          </div>
        </div>
        <div>
          <div className="font-display text-[15px] leading-tight">
            AI Engineering
          </div>
          <div className="mt-1 kicker" style={{ color: "var(--gold)" }}>
            Build
          </div>
        </div>
        <div>
          <div className="font-display text-[15px] leading-tight">
            Product &amp; Commercial
          </div>
          <div className="mt-1 kicker" style={{ color: "var(--ink-muted)" }}>
            Prove
          </div>
        </div>
      </div>
    </div>
  );
}
