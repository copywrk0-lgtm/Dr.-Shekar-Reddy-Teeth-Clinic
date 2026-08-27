import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { track } from "../analytics";
import { clinic, visitReasons } from "../data";

const steps = ["Reason", "When", "Your details"];

export default function Booking({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState(visitReasons[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Evening (4–10 PM)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    onClose();
    window.setTimeout(() => {
      setStep(0);
      setDone(false);
      setName("");
      setPhone("");
      setNote("");
      setDate("");
    }, 300);
  };

  const send = async () => {
    setError("");
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (!(digits.length === 10 || (digits.length === 12 && digits.startsWith("91")))) return setError("Please enter a valid Indian mobile number.");
    if (!date) return setError("Please choose a preferred day.");
    const selected = new Date(`${date}T00:00:00`);
    if (Number.isNaN(selected.getTime()) || selected < new Date(new Date().toDateString())) return setError("Please choose today or a future date.");
    const payload = { name: name.trim(), phone: phone.trim(), reason, date, time, note: note.trim(), source: "website", page: window.location.pathname };
    const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL as string | undefined;
    if (endpoint) {
      try { await fetch(endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) }); } catch { /* WhatsApp remains the fallback */ }
    }
    const text = encodeURIComponent(
      `Hello Dr. Shekar Reddy Teeth Clinic, I would like to book an appointment.\nName: ${name}\nPhone: ${phone}\nReason: ${reason}\nPreferred day: ${date || "any day"}\nPreferred time: ${time}\nNote: ${note || "-"}`
    );
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
    track("booking_whatsapp", { reason });
    setDone(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-teal-ink/60 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            tabIndex={-1}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92svh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 sm:max-w-lg sm:rounded-3xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
                  Appointment request
                </p>
                <h3 id="booking-title" className="mt-1 text-2xl font-extrabold">
                  {done ? "Send it on WhatsApp" : "Request an appointment"}
                </h3>
              </div>
              <button
                type="button"
                onClick={close}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/10"
              >
                <X size={16} />
              </button>
            </div>

            {done ? (
              <div className="mt-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-teal text-white">
                  <Check size={22} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  Your appointment message is ready on WhatsApp. Send it and our
                  front desk will confirm your slot. In a hurry? Just call{" "}
                  <a href={`tel:${clinic.phoneRaw}`} className="font-semibold text-teal">
                    {clinic.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 w-full rounded-full bg-teal py-3 text-sm font-semibold text-white"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mt-5 flex gap-2">
                  {steps.map((s, i) => (
                    <div key={s} className="flex-1">
                      <div
                        className={`h-1 rounded-full ${i <= step ? "bg-teal" : "bg-mint"}`}
                      />
                      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink/45">
                        {s}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 min-h-[210px]">
                  {step === 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {visitReasons.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setReason(r)}
                          className={`rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                            reason === r
                              ? "border-teal bg-teal text-white"
                              : "border-ink/10 hover:border-teal/50"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                          Preferred day
                        </span>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="mt-2 w-full rounded-xl border border-ink/12 px-4 py-3 text-sm"
                        />
                      </label>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                          Preferred time
                        </span>
                        <div className="mt-2 grid gap-2">
                          {[
                            "Morning (9 AM–1 PM)",
                            "Afternoon (1–4 PM)",
                            "Evening (4–10 PM)",
                          ].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setTime(t)}
                              className={`rounded-xl border px-4 py-3 text-left text-sm ${
                                time === t
                                  ? "border-teal bg-teal text-white"
                                  : "border-ink/10"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-3">
                      <input
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-ink/12 px-4 py-3 text-sm"
                      />
                      <input
                        placeholder="Mobile number"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-ink/12 px-4 py-3 text-sm"
                      />
                      <textarea
                        rows={3}
                        placeholder="Describe the problem (optional)"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full resize-none rounded-xl border border-ink/12 px-4 py-3 text-sm"
                      />
                      <p className="rounded-xl bg-mint-soft px-4 py-3 text-xs text-ink/60">
                        Walk-ins are also welcome. {clinic.hoursShort}.
                      </p>
                    </div>
                  )}
                </div>

                {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-700">{error}</p>}

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="text-sm font-semibold text-ink/50 disabled:opacity-30"
                  >
                    Back
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${clinic.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/12 px-4 py-3 text-sm font-semibold"
                    >
                      <Phone size={14} /> Call
                    </a>
                    {step < 2 ? (
                      <button
                        type="button"
                        onClick={() => { track("booking_continue", { step: String(step + 1) }); setStep((s) => s + 1); }}
                        className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={send}
                        disabled={!name || !phone || !date}
                        className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white disabled:opacity-40"
                      >
                        Continue on WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
