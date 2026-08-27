import { ArrowLeft, Check, Clock, MessageCircle, Phone } from "lucide-react";
import { Btn, Eyebrow, Heading, Reveal } from "../components/ui";
import { useNav } from "../context";
import { clinic, treatments } from "../data";

export default function TreatmentDetail({ id }: { id: string }) {
  const { openBook, go } = useNav();
  const treatment = treatments.find((item) => item.id === id);

  if (!treatment) {
    go("treatments");
    return null;
  }

  return (
    <div className="pt-[70px] lg:pt-[106px]">
      <section className="bg-teal-ink py-14 text-white">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <button onClick={() => go("treatments")} className="mb-7 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft size={16} /> All treatments
          </button>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow light>{treatment.category}</Eyebrow>
              <Heading light className="mt-4 max-w-3xl">{treatment.title}</Heading>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{treatment.excerpt}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn variant="white" onClick={openBook}>Book an appointment</Btn>
                <a href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(`Hello, I would like to ask about ${treatment.title}.`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
                  <MessageCircle size={16} /> Ask on WhatsApp
                </a>
              </div>
            </div>
            <Reveal className="lg:col-span-5">
              <img src={treatment.image} alt={treatment.title} className="h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>What to expect</Eyebrow>
              <Heading className="mt-4">Clear treatment, clearly explained.</Heading>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">{treatment.detail}</p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Diagnosis and treatment explained before starting",
                "Local anaesthesia used when clinically appropriate",
                "Aftercare instructions provided",
                "Follow-up advice based on your treatment",
              ].map((item, index) => (
                <Reveal key={item} delay={index * 0.06} className="rounded-2xl border border-line bg-white p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-teal"><Check size={17} /></span>
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-ink/75">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="lg:col-span-4">
            <aside className="sticky top-28 rounded-3xl bg-mint-soft p-7">
              <p className="flex items-center gap-2 text-sm font-bold text-teal"><Clock size={17} /> Typical time</p>
              <p className="mt-2 text-2xl font-extrabold">{treatment.duration}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink/60">Timing varies by tooth, complexity and clinical findings. The dentist will confirm the treatment plan after examination.</p>
              <div className="mt-6"><Btn full onClick={openBook}>Book this treatment</Btn></div>
              <a href={`tel:${clinic.phoneRaw}`} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-ink/10 px-5 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"><Phone size={15} /> Call {clinic.phone}</a>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1320px] px-5 text-center sm:px-6">
          <Eyebrow>Next step</Eyebrow>
          <Heading className="mx-auto mt-4 max-w-3xl">Not sure what treatment you need?</Heading>
          <p className="mx-auto mt-4 max-w-2xl text-ink/60">Start with a consultation. The dentist can examine the problem and explain your options before you decide.</p>
          <div className="mt-7 flex justify-center gap-3">
            <Btn onClick={openBook}>Book a consultation</Btn>
            <Btn variant="outline" onClick={() => go("contact")}>Find the clinic</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
