import { motion } from "framer-motion";
import { Clock, MapPin, Pause, Phone, Play, Star, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNav } from "../context";
import { clinic, local, media } from "../data";

const films = [
  { id: "clinic", label: "Our clinic", src: media.videos.clinic, poster: local.room },
  { id: "care", label: "Treatment", src: media.videos.exam, poster: local.treating },
  { id: "talk", label: "Consultation", src: media.videos.consult, poster: local.reception },
  { id: "kids", label: "Kids care", src: media.videos.kids, poster: local.lady },
];

export default function Hero() {
  const { openBook, go } = useNav();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const film = films[active];

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = muted;
    el.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [active]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-teal-ink text-white">
      <video
        key={film.id}
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={film.src}
        poster={film.poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-ink/90 via-teal-ink/60 to-teal-deep/70" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1320px] flex-col justify-center px-5 pb-10 pt-28 sm:px-6 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-2 text-xs"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 font-semibold">
                <Star size={13} className="fill-amber text-amber" /> {clinic.rating} ·{" "}
                {clinic.reviews} ratings
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 font-semibold">
                <Clock size={13} /> Open all 7 days
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 font-semibold">
                <MapPin size={13} /> Neelasandra, Bengaluru
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-6 text-[2.9rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]"
            >
              Dental care that
              <br />
              <span className="text-mint">doesn't hurt</span> your
              <br />
              teeth or your wallet.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              Fillings, root canals, extractions, caps, dentures, implants and
              braces — handled by our full panel of doctors on Bazaar Street,
              Neelasandra. Rates displayed openly, treatment explained before we
              begin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={openBook}
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-teal-deep shadow-lg transition hover:bg-mint"
              >
                Book an appointment
              </button>
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Phone size={15} /> {clinic.phone}
              </a>
              <button
                type="button"
                onClick={() => go("treatments")}
                className="rounded-full px-4 py-3.5 text-sm font-semibold text-white/80 underline-offset-4 hover:underline"
              >
                See treatments
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Inside the clinic
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label={playing ? "Pause video" : "Play video"}
                    onClick={togglePlay}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/25"
                  >
                    {playing ? <Pause size={13} /> : <Play size={13} />}
                  </button>
                  <button
                    type="button"
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    onClick={() => setMuted((m) => !m)}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/25"
                  >
                    {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  </button>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {films.map((f, i) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`overflow-hidden rounded-2xl text-left transition ${
                      i === active ? "ring-2 ring-white" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={f.poster} alt={f.label} className="h-20 w-full object-cover" />
                    <span className="block bg-white/10 px-3 py-2 text-xs font-semibold">
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 text-ink">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                  Today's timings
                </p>
                <p className="mt-1 text-sm font-bold">{clinic.hoursWeek}</p>
                <p className="text-sm text-ink/60">{clinic.hoursSun}</p>
                <p className="mt-3 text-xs text-ink/60">
                  {clinic.landmark}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
