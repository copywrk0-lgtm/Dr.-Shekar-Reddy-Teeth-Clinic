import { createContext, useContext, type ReactNode } from "react";
import type { PageId } from "./data";

type NavContextValue = {
  page: PageId;
  go: (page: PageId, hash?: string) => void;
  openBook: () => void;
  goTreatment: (id: string) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({
  value,
  children,
}: {
  value: NavContextValue;
  children: ReactNode;
}) {
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
