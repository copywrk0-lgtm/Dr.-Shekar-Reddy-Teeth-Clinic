import { Check, Phone } from "lucide-react";
import { Btn, Counter, Eyebrow, Heading, Reveal } from "../components/ui";
import { useNav } from "../context";
import { clinic, local, promises, visitSteps } from "../data";

export default function About() {
  const { openBook, go } = useNav();

  return (
    <div className="pt-[70px] lg:pt-[106px]">
      <section className="relative overflow-hidden bg-teal-ink py-16 text-white">
        <img
          src={local.reception}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow light>About us</Eyebrow>
          <Heading light className="mt-4 max-w-3xl">
            A dental clinic built for the people of Neelasandra.
          </Heading>
          <p className="mt-5 max-w-2xl text-white/75">
            {clinic.name} sits on Bazaar Street, below Canara Bank and opposite
            Mecca Masjid. It is not a showroom — it is a working clinic where
            people walk in with toothache and walk out able to eat again.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Our approach</Eyebrow>
            <Heading className="mt-4">
              Honest advice first,
              <br />
              <span className="text-teal">treatment second.</span>
            </Heading>
            <p className="mt-5 leading-relaxed text-ink/70">
              A lot of people arrive here after being quoted something
              frightening elsewhere. We start again from the beginning: a proper
              look, an X-ray if it is needed, and a plain explanation of what is
              actually wrong.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              If a tooth can be saved, we try to save it. If a cheaper option
              will do the same job, we tell you about it. Our charges are on the
              board inside the clinic so nobody has to negotiate.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "Doctors for root canal, braces, gums, implants and children",
                "Digital X-ray on site",
                "Sterilised, single-use where required",
                "Languages: Kannada, Hindi, Urdu, Tamil, Telugu, English",
              ].map((p) => (
                <p key={p} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint text-teal-deep">
                    <Check size={12} />
                  </span>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <Reveal className="lg:col-span-6">
            <img
              src={local.wall}
              alt="Certificates and team photographs on the clinic wall"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
            <p className="mt-3 text-sm text-ink/50">
              Qualifications, team photographs and our treatment information
              board in the waiting area.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-mint-soft p-7">
              <p className="text-4xl font-extrabold text-teal">
                <Counter to={1100} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-semibold text-ink/60">
                patient ratings across listings
              </p>
            </div>
            <div className="rounded-2xl bg-mint-soft p-7">
              <p className="text-4xl font-extrabold text-teal">4.8★</p>
              <p className="mt-2 text-sm font-semibold text-ink/60">
                average patient rating
              </p>
            </div>
            <div className="rounded-2xl bg-mint-soft p-7">
              <p className="text-4xl font-extrabold text-teal">13 hrs</p>
              <p className="mt-2 text-sm font-semibold text-ink/60">
                open every day, 9 AM – 10 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <Eyebrow>What we promise</Eyebrow>
        <Heading className="mt-4">Three things we do not compromise on.</Heading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {promises.map((p) => (
            <article key={p.n} className="reveal-card rounded-2xl border border-line bg-white p-7">
              <p className="text-3xl font-extrabold text-mint">{p.n}</p>
              <h3 className="mt-4 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mint-soft py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow>Step by step</Eyebrow>
          <Heading className="mt-4">What happens when you come in.</Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visitSteps.map((s) => (
              <article key={s.n} className="reveal-card rounded-2xl bg-white p-6">
                <p className="text-3xl font-extrabold text-mint">{s.n}</p>
                <h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-6">
        <div className="rounded-3xl bg-teal p-8 text-white sm:p-12">
          <Heading light>Come and meet the team.</Heading>
          <p className="mt-4 max-w-xl text-white/80">
            {clinic.hoursWeek} · {clinic.hoursSun}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Btn variant="white" onClick={openBook}>
              Book an appointment
            </Btn>
            <Btn variant="white" onClick={() => go("team")}>
              Meet our doctors
            </Btn>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold"
            >
              <Phone size={15} /> {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
