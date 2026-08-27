import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useCallback, useEffect, useMemo, useState, type ComponentType } from "react";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { NavProvider } from "./context";
import { clinic, type PageId } from "./data";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./pages/TreatmentDetail";
import { Privacy, Terms } from "./pages/Legal";

const pages: Record<Exclude<PageId, "treatment-detail" | "privacy" | "terms">, ComponentType> = {
  home: Home,
  treatments: Treatments,
  team: Team,
  about: About,
  gallery: Gallery,
  contact: Contact,
};

export default function App() {
  const resolveRoute = useCallback(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/") return { page: "home" as PageId };
    if (path === "/privacy") return { page: "privacy" as PageId };
    if (path === "/terms") return { page: "terms" as PageId };
    if (path.startsWith("/treatments/")) return { page: "treatment-detail" as PageId, id: path.split("/").filter(Boolean)[1] };
    const match: Record<string, PageId> = {
      "/about": "about", "/treatments": "treatments", "/team": "team",
      "/gallery": "gallery", "/contact": "contact", "/book": "home",
    };
    return { page: match[path] ?? "home" };
  }, []);

  const initial = useMemo(() => resolveRoute(), [resolveRoute]);
  const [page, setPage] = useState<PageId>(initial.page);
  const [treatmentId, setTreatmentId] = useState(initial.id);
  const [book, setBook] = useState(window.location.pathname === "/book");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onPop = () => {
      const route = resolveRoute();
      setPage(route.page);
      setTreatmentId(route.id);
      setBook(window.location.pathname === "/book");
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [resolveRoute]);

  useEffect(() => {
    const titles: Record<string, string> = {
      home: `${clinic.name} | Dentist in Neelasandra, Bengaluru`,
      about: `About | ${clinic.name}`,
      treatments: `Dental Treatments | ${clinic.name}`,
      team: `Our Doctors | ${clinic.name}`,
      gallery: `Clinic Gallery | ${clinic.name}`,
      contact: `Contact & Directions | ${clinic.name}`,
      privacy: `Privacy Policy | ${clinic.name}`,
      terms: `Terms & Medical Disclaimer | ${clinic.name}`,
    };
    document.title = treatmentId
      ? `${treatmentId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | ${clinic.name}`
      : titles[page] ?? titles.home;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = window.location.origin + window.location.pathname;
    if (!canonical.parentElement) document.head.appendChild(canonical);
  }, [page, treatmentId]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", update); };
  }, [page, treatmentId]);

  const go = useCallback((next: PageId, hash?: string) => {
    const path = next === "home" ? "/" : next === "treatments" ? "/treatments" : `/${next}`;
    window.history.pushState({}, "", path + (hash ? `#${hash}` : ""));
    setPage(next);
    setTreatmentId(undefined);
    setBook(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (hash) window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 450);
  }, []);

  const openBook = useCallback(() => setBook(true), []);
  const goTreatment = useCallback((id: string) => {
    window.history.pushState({}, "", `/treatments/${id}`);
    setPage("treatment-detail");
    setTreatmentId(id);
    setBook(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const Page = pages[page as Exclude<PageId, "treatment-detail" | "privacy" | "terms">];

  const content = page === "treatment-detail" && treatmentId
    ? <TreatmentDetail id={treatmentId} />
    : page === "privacy" ? <Privacy />
    : page === "terms" ? <Terms />
    : <Page />;

  return (
    <NavProvider value={{ page: page as PageId, go, openBook, goTreatment }}>
      <div className="min-h-screen bg-paper pb-14 text-ink sm:pb-0">
        <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div key={`${page}-${treatmentId ?? ""}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {content}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <Booking open={book} onClose={() => setBook(false)} />
        <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white sm:hidden">
          <a href={`tel:${clinic.phoneRaw}`} className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-teal"><Phone size={16} /> Call</a>
          <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 border-x border-line py-3.5 text-sm font-bold text-teal"><MessageCircle size={16} /> WhatsApp</a>
          <button type="button" onClick={openBook} className="flex-1 bg-teal py-3.5 text-sm font-bold text-white">Book</button>
        </div>
        <a href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hello, I would like to book a dental appointment.")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp the clinic" className="pulse-ring fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl sm:grid"><MessageCircle size={22} /></a>
      </div>
    </NavProvider>
  );
}
