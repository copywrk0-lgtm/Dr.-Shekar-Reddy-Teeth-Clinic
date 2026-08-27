import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Phone, Star } from "lucide-react";
import { useState } from "react";
import Hero from "../components/Hero";
import { Btn, Counter, Eyebrow, Heading, Reveal } from "../components/ui";
import { useNav } from "../context";
import {
  clinic,
  faqs,
  local,
  promises,
  reviews,
  treatments,
  trustPoints,
  visitSteps,
} from "../data";

const ticker = [
  "Root canal",
  "Fillings",
  "Extractions",
  "Caps & crowns",
  "Dentures",
  "Implants",
  "Braces & aligners",
  "Kids dentistry",
  "Gum treatment",
  "Teeth cleaning",
];

export default function Home() {
  const { go, openBook } = useNav();
  const [faq, setFaq] = useState<number | null>(0);
  const [review, setReview] = useState(0);

  return (
    <div>
      <Hero />

      <section className="overflow-hidden border-y border-line bg-white py-3.5">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm font-semibold text-teal">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex gap-8">
              {ticker.map((t) => (
                <span key={`${loop}-${t}`} className="flex items-center gap-8">
                  {t}
                  <span className="text-amber">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/5">
                <p className="text-xs font-bold text-teal">{t.n}</p>
                <h3 className="mt-4 text-lg font-extrabold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={local.room}
                alt="Treatment room at the clinic"
                className="h-56 w-full rounded-2xl object-cover sm:h-72"
              />
              <img
                src={local.treating}
                alt="Dentist treating a patient"
                className="mt-6 h-56 w-full rounded-2xl object-cover sm:h-72"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Eyebrow>About the clinic</Eyebrow>
            <Heading className="mt-4">
              A neighbourhood clinic that treats
              <span className="text-teal"> everyone the same.</span>
            </Heading>
            <p className="mt-5 leading-relaxed text-ink/70">
              We have been looking after teeth on Bazaar Street for years —
              auto drivers, shopkeepers, students, grandparents and whole
              families who now come back with their children. The clinic is
              simple, clean and busy, and the doctors here explain the problem
              in your language before touching anything.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "All departments in one clinic — no running around the city",
                "Digital X-rays taken and read on the spot",
                "Sterilised instruments for every patient",
                "Emergency toothache enquiries",
              ].map((p) => (
                <p key={p} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint text-teal-deep">
                    <Check size={12} />
                  </span>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn onClick={() => go("about")}>
                More about us <ArrowRight size={16} />
              </Btn>
              <Btn variant="outline" href={`tel:${clinic.phoneRaw}`}>
                <Phone size={15} /> {clinic.phone}
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Eyebrow>Our treatments</Eyebrow>
              <Heading className="mt-4">
                Everything your teeth need,
                <br />
                <span className="text-teal">under one roof.</span>
              </Heading>
            </div>
            <button
              type="button"
              onClick={() => go("treatments")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              View all treatments <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 6).map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => go("treatments")}
                  className="group h-full w-full overflow-hidden rounded-2xl border border-line bg-paper text-left transition hover:border-teal/40"
                >
                  <div className="img-zoom aspect-[16/10] overflow-hidden">
                    <img src={t.image} alt={t.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-deep">
                      {t.category}
                    </span>
                    <h3 className="mt-3 text-lg font-extrabold">{t.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/60">{t.excerpt}</p>
                    <p className="mt-4 text-xs font-semibold text-teal">
                      {t.duration} →
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-teal-ink py-20 text-white">
        <img
          src={local.wall}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow light>Why patients stay with us</Eyebrow>
          <Heading light className="mt-4 max-w-2xl">
            Comfort-focused, explained, and discussed before treatment.
          </Heading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {promises.map((p) => (
              <article
                key={p.n}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-3xl font-extrabold text-mint">{p.n}</p>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">
                <Counter to={1100} suffix="+" />
              </p>
              <p className="text-sm text-white/60">patient ratings</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">{clinic.rating}★</p>
              <p className="text-sm text-white/60">average rating</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">
                <Counter to={7} />
              </p>
              <p className="text-sm text-white/60">days open a week</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <Eyebrow>Your visit</Eyebrow>
        <Heading className="mt-4">How a visit works.</Heading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visitSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <article className="relative h-full rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-4xl font-extrabold text-mint">{s.n}</span>
                <h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mint-soft py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Patient reviews</Eyebrow>
              <Heading className="mt-4">
                Rated <span className="text-teal">{clinic.rating}★</span> with 1,100+
                patient ratings.
              </Heading>
              <p className="mt-4 text-ink/65">
                Current public listings show a 4.9 rating and 1,100+ patient ratings. Read the live listing for the latest reviews and experiences.
              </p>
              <a href={clinic.reviewsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-bold text-teal hover:underline">See current Google reviews ↗</a>
              <div className="mt-6 flex gap-2">
                {reviews.map((r, i) => (
                  <button
                    key={r.n}
                    type="button"
                    aria-label={`Review ${r.n}`}
                    onClick={() => setReview(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === review ? "w-8 bg-teal" : "w-2.5 bg-teal/25"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={review}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-3xl bg-white p-8 shadow-sm"
                >
                  <div className="flex gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber" />
                    ))}
                  </div>
                  <p className="mt-5 text-2xl font-extrabold">
                    “{reviews[review].title}”
                  </p>
                  <p className="mt-3 leading-relaxed text-ink/70">
                    {reviews[review].text}
                  </p>
                  <p className="mt-5 text-sm text-ink/45">
                    {reviews[review].name} · {reviews[review].meta}
                  </p>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Common questions</Eyebrow>
            <Heading className="mt-4">Before you come in.</Heading>
            <p className="mt-4 text-ink/65">
              Still unsure about something? Call the clinic — we are happy to
              answer on the phone.
            </p>
            <div className="mt-6">
              <Btn href={`tel:${clinic.phoneRaw}`}>
                <Phone size={15} /> {clinic.phone}
              </Btn>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-ink/8 overflow-hidden rounded-2xl bg-white">
              {faqs.map((item, i) => (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setFaq(faq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold">{item.q}</span>
                    <span className="text-xl text-teal">{faq === i ? "–" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {faq === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-ink/65"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal py-16 text-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading light>Tooth paining? Come in today.</Heading>
            <p className="mt-4 max-w-lg text-white/80">
              Walk in or call ahead — we are open from 9 in the morning until 10
              at night, every day of the week.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/75">
              <MapPin size={16} /> {clinic.addressLine1}, {clinic.area} —{" "}
              {clinic.landmark}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Btn variant="white" onClick={openBook}>
              Book appointment
            </Btn>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold"
            >
              <Phone size={15} /> Call now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
