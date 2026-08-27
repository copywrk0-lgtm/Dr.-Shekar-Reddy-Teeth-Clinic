import { useLocation } from "./useLocation";
export function useParams() {
  const path = useLocation();
  const parts = path.split("/").filter(Boolean);
  return { slug: parts[1] ?? "" };
}
