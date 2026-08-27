import { Phone, Star } from "lucide-react";
import { Btn, Eyebrow, Heading, Reveal } from "../components/ui";
import { useNav } from "../context";
import { clinic, doctors, reviews } from "../data";

export default function Team() {
  const { openBook } = useNav();

  return (
    <div className="pt-[70px] lg:pt-[106px]">
      <section className="bg-teal-ink py-14 text-white">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow light>Our doctors</Eyebrow>
          <Heading light className="mt-4 max-w-3xl">
            A full panel of dentists, not just one chair.
          </Heading>
          <p className="mt-4 max-w-2xl text-white/70">
            Root canals, implants, braces, gum surgery and children's dentistry
            are each handled by a doctor who does that work every day — which is
            why complicated cases can stay inside the same clinic.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.07}>
              <article className="h-full overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="img-zoom aspect-[4/3] overflow-hidden">
                  <img src={d.image} alt={d.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{d.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-teal">{d.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink/45">
                    {d.focus}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">{d.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow>What patients say about our doctors</Eyebrow>
          <Heading className="mt-4">A trusted local dental team.</Heading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <article key={r.n} className="rounded-2xl bg-paper p-6">
                <div className="flex gap-1 text-amber">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber" />
                  ))}
                </div>
                <p className="mt-4 font-extrabold">“{r.title}”</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.text}</p>
                <p className="mt-4 text-xs text-ink/45">
                  {r.name} · {r.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 sm:px-6">
        <div className="rounded-3xl bg-mint-soft p-8 sm:p-10">
          <h3 className="text-2xl font-extrabold">
            Want to see a particular doctor?
          </h3>
          <p className="mt-3 max-w-2xl text-ink/70">
            Mention the name when you call or send your appointment request and
            we will schedule you when they are in the clinic.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn onClick={openBook}>Request an appointment</Btn>
            <Btn variant="outline" href={`tel:${clinic.phoneRaw}`}>
              <Phone size={15} /> {clinic.phone}
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
