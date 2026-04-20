"use client";

import { useEffect, useRef, useState } from "react";
import { LENSES, useLens, type Lens } from "@/lib/lens";

export function LensToggle({ compact = false }: { compact?: boolean }) {
  const { lens, setLens } = useLens();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const active = LENSES.find((l) => l.id === lens)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="pill hover:border-[color:var(--ink)] transition-colors"
      >
        {!compact && <span className="opacity-60">Hiring for:</span>}
        <span className="text-[color:var(--ink)] font-medium">
          {active.short}
        </span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 3.5 L5 6.5 L8 3.5"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-64 surface overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,15,14,0.18)] z-50"
        >
          <div className="px-4 py-3 border-b border-[color:var(--border)]">
            <div className="kicker">I&apos;m hiring for</div>
          </div>
          <ul className="py-1">
            {LENSES.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => {
                    setLens(l.id as Lens);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-[color:var(--accent-wash)] transition-colors ${
                    l.id === lens
                      ? "text-[color:var(--ink)]"
                      : "text-[color:var(--ink-muted)]"
                  }`}
                >
                  <span>{l.label}</span>
                  {l.id === lens && (
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <path
                        d="M2 7 L6 11 L12 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
