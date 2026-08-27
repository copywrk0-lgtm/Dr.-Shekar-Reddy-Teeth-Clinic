import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Btn, Eyebrow, Heading } from "../components/ui";
import { useNav } from "../context";
import { clinic, treatments, type Treatment } from "../data";

const filters = ["All", "General", "Cosmetic", "Surgical", "Braces", "Kids"] as const;

export default function Treatments() {
  const { openBook } = useNav();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Treatment | null>(null);

  const list = useMemo(
    () => (filter === "All" ? treatments : treatments.filter((t) => t.category === filter)),
    [filter]
  );

  return (
    <div className="pt-[70px] lg:pt-[106px]">
      <section className="bg-teal-ink py-14 text-white">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow light>Treatments</Eyebrow>
          <Heading light className="mt-4 max-w-3xl">
            From a simple cleaning to a full-mouth rehabilitation.
          </Heading>
          <p className="mt-4 max-w-2xl text-white/70">
            Every treatment below is done at our Neelasandra clinic. The rate
            for each procedure is displayed inside the clinic and confirmed with
            you after the examination — before any work starts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f ? "bg-teal text-white" : "bg-white text-ink/70 hover:text-teal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {list.map((t) => (
              <motion.button
                layout
                key={t.id}
                type="button"
                onClick={() => setActive(t)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:shadow-lg hover:shadow-teal/10"
              >
                <div className="img-zoom aspect-[16/10] overflow-hidden">
                  <img src={t.image} alt={t.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-deep">
                    {t.category} · {t.duration}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/60">{t.excerpt}</p>
                  <p className="mt-4 text-xs font-bold text-teal">Read more →</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="mx-auto mb-16 max-w-[1320px] px-5 sm:px-6">
        <div className="rounded-3xl bg-mint-soft p-8 sm:p-10">
          <h3 className="text-2xl font-extrabold">Not sure what you need?</h3>
          <p className="mt-3 max-w-2xl text-ink/70">
            Come in for an examination. The dentist will tell you what needs
            treating now, what can wait, and exactly what each option costs —
            with no obligation to go ahead the same day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn onClick={openBook}>Book an examination</Btn>
            <Btn variant="outline" href={`tel:${clinic.phoneRaw}`}>
              <Phone size={15} /> {clinic.phone}
            </Btn>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-teal-ink/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="relative z-10 max-h-[90svh] w-full overflow-y-auto rounded-t-3xl bg-white sm:max-w-xl sm:rounded-3xl"
            >
              <div className="relative">
                <img src={active.image} alt="" className="h-52 w-full object-cover" />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 sm:p-7">
                <span className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-deep">
                  {active.category}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold">{active.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{active.detail}</p>
                <p className="mt-4 text-sm font-semibold text-teal">
                  Usual time needed: {active.duration}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn
                    onClick={() => {
                      setActive(null);
                      openBook();
                    }}
                  >
                    Book this treatment
                  </Btn>
                  <Btn variant="outline" href={`tel:${clinic.phoneRaw}`}>
                    <Phone size={15} /> Ask about cost
                  </Btn>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
