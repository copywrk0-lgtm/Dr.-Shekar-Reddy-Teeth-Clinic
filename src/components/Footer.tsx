import { Clock, MapPin, Phone } from "lucide-react";
import { useNav } from "../context";
import { clinic, navLinks } from "../data";

export default function Footer() {
  const { go, openBook } = useNav();

  return (
    <footer className="bg-teal-ink text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                  <path d="M12 3.2C8.4 7.4 4 9.4 4 15c0 4.2 3.2 6.8 8 6.8s8-2.6 8-6.8c0-5.6-4.4-7.6-8-11.8z" />
                </svg>
              </span>
              <div>
                <p className="text-lg font-extrabold leading-none">
                  Dr. Shekar Reddy
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Teeth Clinic
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Complete dental care for families in Neelasandra and around
              Bengaluru — fillings, root canals, caps, dentures, implants and
              braces under one roof.
            </p>
            <button
              type="button"
              onClick={openBook}
              className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-semibold text-teal-deep"
            >
              Request an appointment
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Visit us
              </p>
              <p className="mt-4 flex gap-2 text-sm leading-relaxed text-white/80">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  {clinic.addressLine1}
                  <br />
                  {clinic.addressLine2}
                  <br />
                  <span className="text-white/50">{clinic.landmark}</span>
                </span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Timings
              </p>
              <p className="mt-4 flex gap-2 text-sm leading-relaxed text-white/80">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>
                  {clinic.hoursWeek}
                  <br />
                  {clinic.hoursSun}
                </span>
              </p>
              <p className="mt-4 flex gap-2 text-sm text-white/80">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>
                  <a href={`tel:${clinic.phoneRaw}`}>{clinic.phone}</a>
                  <br />
                  <a href={`tel:${clinic.landlineRaw}`}>{clinic.landline}</a>
                </span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Pages
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {navLinks.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => go(l.id)}
                    className="w-fit text-sm text-white/75 hover:text-white"
                  >
                    {l.label}
                  </button>
                ))}
                <button type="button" onClick={() => go("privacy")} className="w-fit text-sm text-white/75 hover:text-white">Privacy</button>
                <button type="button" onClick={() => go("terms")} className="w-fit text-sm text-white/75 hover:text-white">Terms</button>
                <a href={clinic.reviewsUrl} target="_blank" rel="noreferrer" className="w-fit text-sm text-white/75 hover:text-white">See current reviews ↗</a>
                <a
                  href={clinic.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-sm text-white/75 hover:text-white"
                >
                  Get directions ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {clinic.name}</p>
          <p>Bazaar Street · Neelasandra · Bengaluru 560047</p>
        </div>
      </div>
    </footer>
  );
}
