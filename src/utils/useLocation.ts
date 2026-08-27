import { useEffect, useState } from "react";
export function useLocation() {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => { const onPop = () => setPath(window.location.pathname); window.addEventListener("popstate", onPop); return () => window.removeEventListener("popstate", onPop); }, []);
  return path;
}
