"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";

export type Lens = "ai" | "product" | "analyst" | "ops";

export const LENSES: { id: Lens; label: string; short: string }[] = [
  { id: "ai", label: "AI / Prompt Engineer", short: "AI" },
  { id: "product", label: "Product Manager", short: "Product" },
  { id: "analyst", label: "Business Analyst", short: "Analyst" },
  { id: "ops", label: "Operations Manager", short: "Ops" },
];

type Ctx = {
  lens: Lens;
  setLens: (l: Lens) => void;
};

const LensCtx = createContext<Ctx | null>(null);

export function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>("ai");
  const setLens = useCallback((l: Lens) => setLensState(l), []);
  const value = useMemo(() => ({ lens, setLens }), [lens, setLens]);
  return <LensCtx.Provider value={value}>{children}</LensCtx.Provider>;
}

export function useLens() {
  const ctx = useContext(LensCtx);
  if (!ctx) throw new Error("useLens must be used inside LensProvider");
  return ctx;
}
