import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { useNav } from "../context";
import { clinic, local } from "../data";

export default function Hero() {
  const { openBook, go } = useNav();

  return (
    <section className="relative min-h-[calc(100svh-0px)] overflow-hidden bg-teal-ink text-white">
      <img
        src={local.actualChair}
        alt="Dental treatment room at Dr. Shekar Reddy Dental Clinic"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-ink/90 via-teal-ink/62 to-teal-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-ink/55 via-transparent to-teal-ink/10" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1320px] flex-col justify-center px-5 pb-12 pt-32 sm:px-6 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-2 text-xs"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-semibold backdrop-blur-sm">
                <Star size={13} className="fill-amber text-amber" /> {clinic.rating} · {clinic.reviews} ratings
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-semibold backdrop-blur-sm">
                <Clock size={13} /> Open 7 days
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-semibold backdrop-blur-sm">
                <MapPin size={13} /> Neelasandra, Bengaluru
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-6 max-w-3xl text-[2.55rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.65rem]"
            >
              Dental care that's
              <br />
              <span className="text-mint">gentle on your teeth</span>
              <br />
              and your wallet.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg"
            >
              Fillings, root canals, extractions, caps, dentures, implants and braces — with care from our dental team on Bazaar Street, Neelasandra. Treatment explained clearly before we begin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
            >
              <button
                type="button"
                onClick={openBook}
                className="col-span-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-deep sm:col-span-auto"
              >
                Request an appointment
              </button>
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-6"
              >
                <Phone size={15} /> {clinic.phone}
              </a>
              <button
                type="button"
                onClick={() => go("treatments")}
                className="rounded-full px-3 py-3.5 text-left text-sm font-semibold text-white/85 underline-offset-4 hover:underline sm:px-4"
              >
                See treatments →
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[28px] border border-white/20 bg-white/95 p-4 text-ink shadow-2xl shadow-black/20 backdrop-blur-md">
              <div className="flex items-center justify-between px-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">Inside the clinic</p>
                <span className="text-xs font-semibold text-ink/45">Real clinic photos</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl">
                  <img src={local.actualReception} alt="Clinic interior and reception area" className="h-32 w-full object-cover sm:h-36" />
                  <p className="bg-white px-2 pt-2 text-xs font-bold">Clinic interior</p>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={local.actualChair} alt="Dental treatment chair inside the clinic" className="h-32 w-full object-cover sm:h-36" />
                  <p className="bg-white px-2 pt-2 text-xs font-bold">Treatment room</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-mint-soft p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-teal">Clinic hours</p>
                <p className="mt-2 text-sm font-extrabold">{clinic.hoursWeek}</p>
                <p className="text-sm text-ink/60">{clinic.hoursSun}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink/60">{clinic.landmark}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
