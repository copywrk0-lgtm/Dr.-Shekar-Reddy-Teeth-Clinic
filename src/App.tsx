import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useCallback, useEffect, useMemo, useState, type ComponentType } from "react";
import Booking from "./components/Booking";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import SkipLink from "./components/SkipLink";
import { NavProvider } from "./context";
import { clinic, type PageId } from "./data";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import TreatmentDetail from "./pages/TreatmentDetail";
import Treatments from "./pages/Treatments";
import { useLocation } from "./utils/useLocation";
import { track } from "./analytics";

const pages: Record<PageId, ComponentType> = { home: Home, treatments: Treatments, team: Team, about: About, gallery: Gallery, contact: Contact, privacy: Privacy, terms: Terms };
const pathFor: Record<PageId, string> = { home: "/", about: "/about", treatments: "/treatments", team: "/team", gallery: "/gallery", contact: "/contact", privacy: "/privacy", terms: "/terms" };
const pageFor: Record<string, PageId> = Object.fromEntries(Object.entries(pathFor).map(([k, v]) => [v, k])) as Record<string, PageId>;

function setMeta(path: string) {
  const titles: Record<string, string> = {
    "/": `${clinic.name} | Dental Clinic in Neelasandra, Bengaluru`,
    "/about": `About | ${clinic.name}`,
    "/treatments": `Dental Treatments | ${clinic.name}`,
    "/team": `Our Dentists | ${clinic.name}`,
    "/gallery": `Clinic Gallery | ${clinic.name}`,
    "/contact": `Contact & Directions | ${clinic.name}`,
    "/privacy": `Privacy Policy | ${clinic.name}`,
    "/terms": `Terms & Medical Disclaimer | ${clinic.name}`,
  };
  document.title = titles[path] ?? `Page not found | ${clinic.name}`;
  const desc = document.querySelector('meta[name="description"]');
  desc?.setAttribute("content", path === "/" ? `${clinic.name} in Neelasandra, Bengaluru. Dental care including check-ups, root canals, implants, braces, dentures and children's dentistry.` : `Learn about ${clinic.name}, treatments, doctors, location and appointment enquiries.`);
  const canonical = document.querySelector('link[rel="canonical"]');
  canonical?.setAttribute("href", `${window.location.origin}${path}`);
}

export default function App() {
  const pathname = useLocation();
  const [book, setBook] = useState(false);
  const [virtualPath, setVirtualPath] = useState(pathname);
  const path = virtualPath;
  const page = pageFor[path] ?? (path === "/" ? "home" : undefined);
  const isTreatment = path.startsWith("/treatments/") && path.split("/").filter(Boolean).length === 2;
  const Page = page ? pages[page] : isTreatment ? TreatmentDetail : NotFound;

  useEffect(() => { setVirtualPath(pathname); }, [pathname]);
  useEffect(() => { setMeta(path); }, [path]);

  const go = useCallback((next: PageId, hash?: string) => {
    const nextPath = pathFor[next];
    if (window.location.pathname !== nextPath) window.history.pushState({}, "", nextPath);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "auto" });
    if (hash) window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 80);
  }, []);
  const openBook = useCallback(() => { track("booking_open"); setBook(true); }, []);

  const currentPage = useMemo<PageId>(() => page ?? (isTreatment ? "treatments" : "home"), [page, isTreatment]);

  return <ErrorBoundary><NavProvider value={{ page: currentPage, go, openBook }}><ScrollProgress /><SkipLink /><div className="min-h-screen bg-paper pb-14 text-ink sm:pb-0"><Navbar /><main id="main-content"><AnimatePresence mode="wait"><motion.div key={path} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}><Page /></motion.div></AnimatePresence></main><Footer /><Booking open={book} onClose={() => setBook(false)} />
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white sm:hidden"><a href={`tel:${clinic.phoneRaw}`} onClick={() => track("phone_click")} className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-teal"><Phone size={16}/> Call</a><a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click")} className="flex flex-1 items-center justify-center gap-2 border-x border-line py-3.5 text-sm font-bold text-teal"><MessageCircle size={16}/> WhatsApp</a><button type="button" onClick={openBook} className="flex-1 bg-teal py-3.5 text-sm font-bold text-white">Book</button></div>
    <a href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hello, I would like to book a dental appointment.")}`} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click")} aria-label="WhatsApp the clinic" className="pulse-ring fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl sm:grid"><MessageCircle size={22}/></a>
  </div></NavProvider></ErrorBoundary>;
}
