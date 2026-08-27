import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Btn, Eyebrow, Heading } from "../components/ui";
import { useNav } from "../context";
import { clinic, faqs } from "../data";

export default function Contact() {
  const { openBook } = useNav();

  return (
    <div className="pt-[70px] lg:pt-[106px]">
      <section className="bg-teal-ink py-14 text-white">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <Eyebrow light>Contact & directions</Eyebrow>
          <Heading light className="mt-4 max-w-3xl">
            Bazaar Street, Neelasandra — below Canara Bank.
          </Heading>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <Phone size={18} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/50">
                Call the clinic
              </p>
              <p className="mt-1 font-bold">{clinic.phone}</p>
              <p className="text-sm text-white/60">{clinic.landline}</p>
            </a>
            <a
              href={`https://wa.me/${clinic.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <MessageCircle size={18} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/50">
                WhatsApp
              </p>
              <p className="mt-1 font-bold">Send us a message</p>
              <p className="text-sm text-white/60">Photos & reports welcome</p>
            </a>
            <a
              href={clinic.maps}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <MapPin size={18} />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/50">
                Directions
              </p>
              <p className="mt-1 font-bold">Open in Google Maps</p>
              <p className="text-sm text-white/60">{clinic.landmark}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Heading>Visit us</Heading>
            <p className="mt-5 flex gap-3 text-ink/75">
              <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
              <span>
                {clinic.addressLine1}
                <br />
                {clinic.addressLine2}
                <br />
                <span className="text-ink/50">{clinic.landmark}</span>
              </span>
            </p>
            <p className="mt-5 flex gap-3 text-ink/75">
              <Clock size={18} className="mt-0.5 shrink-0 text-teal" />
              <span>
                {clinic.hoursWeek}
                <br />
                {clinic.hoursSun}
                <br />
                <span className="text-ink/50">Walk-ins welcome through the day</span>
              </span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn onClick={openBook}>Book an appointment</Btn>
              <Btn variant="outline" href={`tel:${clinic.phoneRaw}`}>
                <Phone size={15} /> Call now
              </Btn>
            </div>

            <div className="mt-10 rounded-2xl bg-mint-soft p-6">
              <p className="text-sm font-bold">Coming by bus or auto?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Ask for Neelasandra Bazaar Street. We are on the ground floor,
                below Canara Bank and directly opposite Mecca Masjid.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-line">
              <iframe
                title="Map to the clinic"
                src={clinic.mapEmbed}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6">
          <Eyebrow>Good to know</Eyebrow>
          <Heading className="mt-4">Questions we are asked daily.</Heading>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-paper p-5"
              >
                <summary className="cursor-pointer list-none font-bold">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
