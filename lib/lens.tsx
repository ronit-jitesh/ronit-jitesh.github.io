"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";

export type Lens = "ai" | "analyst";

export const LENSES: { id: Lens; label: string; short: string }[] = [
  { id: "ai", label: "AI / Data Product role", short: "AI · Product" },
  { id: "analyst", label: "Business Analyst role", short: "Analyst" },
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
