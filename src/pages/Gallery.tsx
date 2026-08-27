import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Btn, Eyebrow, Heading, Reveal } from "../components/ui";
import { useNav } from "../context";
import { clinic, galleryItems, local, media } from "../data";

export default function Gallery() {
  const { openBook } = useNav();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="pt-[70px] lg:pt-[106px]">
      <section className="relative overflow-hidden bg-teal-ink py-16 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          src={media.videos.chair}
          poster={local.room}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow light>Inside the clinic</Eyebrow>
          <Heading light className="mt-4 max-w-3xl">
            See the place before you visit.
          </Heading>
          <p className="mt-4 max-w-xl text-white/75">
            Two treatment rooms, a front desk that keeps your records, and a
            waiting area with our qualifications and treatment board on the
            wall.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((g, i) => (
            <Reveal key={g.caption} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="img-zoom group block w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    className={`w-full object-cover ${g.tall ? "h-[420px]" : "h-64"}`}
                  />
                </div>
                <p className="px-5 py-4 text-sm font-semibold">{g.caption}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-line">
          <iframe
            title="Clinic location"
            src={clinic.mapEmbed}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Btn onClick={openBook}>Book an appointment</Btn>
          <Btn variant="outline" href={clinic.maps}>
            Get directions
          </Btn>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-teal-ink/85 p-5"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0"
              onClick={() => setOpen(null)}
            />
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative z-10 max-h-[85svh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
            >
              <img
                src={galleryItems[open].src}
                alt={galleryItems[open].caption}
                className="max-h-[70svh] w-full object-cover"
              />
              <div className="flex items-center justify-between px-5 py-4">
                <p className="font-semibold">{galleryItems[open].caption}</p>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink/10"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
