import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNav } from "../context";
import { clinic, navLinks } from "../data";

export default function Navbar() {
  const { page, go, openBook } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [page]);

  const overHero = page === "home" && !scrolled;
  const tone = overHero ? "text-white" : "text-ink";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 hidden h-9 items-center bg-teal-ink text-white lg:flex">
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 text-xs">
          <p>
            {clinic.addressLine1}, {clinic.area} — {clinic.landmark}
          </p>
          <p className="flex items-center gap-5">
            <span>{clinic.hoursShort}</span>
            <a href={`tel:${clinic.phoneRaw}`} className="font-semibold">
              {clinic.phone}
            </a>
          </p>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 lg:top-9 ${
          scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1320px] items-center justify-between px-5 sm:px-6">
          <button
            type="button"
            onClick={() => go("home")}
            className={`flex items-center gap-3 text-left ${tone}`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 3.2C8.4 7.4 4 9.4 4 15c0 4.2 3.2 6.8 8 6.8s8-2.6 8-6.8c0-5.6-4.4-7.6-8-11.8z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight">
                Dr. Shekar Reddy
              </span>
              <span
                className={`block text-[11px] uppercase tracking-[0.2em] ${
                  overHero ? "text-white/70" : "text-ink/50"
                }`}
              >
                Teeth Clinic
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className={`text-sm font-medium transition ${tone} ${
                  page === l.id ? "opacity-100" : "opacity-65 hover:opacity-100"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold sm:inline-flex ${
                overHero
                  ? "border-white/30 text-white"
                  : "border-ink/15 text-ink"
              }`}
            >
              <Phone size={14} /> Call
            </a>
            <button
              type="button"
              onClick={openBook}
              className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-deep sm:inline-flex"
            >
              Request appointment
            </button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-xl border lg:hidden ${
                overHero ? "border-white/30 text-white" : "border-ink/15 text-ink"
              }`}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-teal-ink px-6 pb-8 pt-24 text-white lg:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1">
                {navLinks.map((l, i) => (
                  <motion.button
                    key={l.id}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => go(l.id)}
                    className="block w-full border-b border-white/10 py-4 text-left text-2xl font-bold"
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm text-white/60">{clinic.hoursShort}</p>
                <div className="flex gap-3">
                  <a
                    href={`tel:${clinic.phoneRaw}`}
                    className="flex-1 rounded-full border border-white/25 py-3 text-center text-sm font-semibold"
                  >
                    Call now
                  </a>
                  <button
                    type="button"
                    onClick={openBook}
                    className="flex-1 rounded-full bg-white py-3 text-sm font-semibold text-teal-deep"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
