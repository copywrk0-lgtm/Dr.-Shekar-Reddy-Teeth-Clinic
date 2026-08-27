import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "../utils/useParams";
import { Btn, Eyebrow, Heading, Reveal } from "../components/ui";
import { clinic, treatments } from "../data";
import { useNav } from "../context";
import { track } from "../analytics";

export default function TreatmentDetail() {
  const { openBook, go } = useNav();
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.id === slug);
  useEffect(() => { if (treatment) track("treatment_view", { treatment: treatment.id }); }, [treatment]);
  if (!treatment) return null;
  return <main className="pt-[70px] lg:pt-[106px]"><section className="bg-teal-ink py-12 text-white"><div className="mx-auto grid max-w-[1320px] gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:items-center"><div><button onClick={() => go("treatments")} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"><ArrowLeft size={15}/> All treatments</button><Eyebrow light>{treatment.category} · {treatment.duration}</Eyebrow><Heading light className="mt-5">{treatment.title}</Heading><p className="mt-5 max-w-xl text-white/70">{treatment.excerpt}</p><div className="mt-7 flex flex-wrap gap-3"><Btn onClick={openBook}>Request an appointment enquiry</Btn><Btn variant="white" href={`tel:${clinic.phoneRaw}`}><Phone size={15}/> Call</Btn></div></div><div className="img-zoom overflow-hidden rounded-3xl"><img src={treatment.image} alt={treatment.title} className="aspect-[4/3] w-full object-cover"/></div></div></section><section className="mx-auto max-w-4xl px-5 py-14 sm:px-6"><Reveal><h2 className="text-2xl font-extrabold">What to expect</h2><p className="mt-4 text-base leading-8 text-ink/70">{treatment.detail}</p></Reveal><Reveal delay={0.08}><div className="mt-8 rounded-2xl bg-mint-soft p-6"><h3 className="font-extrabold">Your treatment plan is personal</h3><p className="mt-2 text-sm leading-7 text-ink/65">The information above is general. The dentist will confirm whether this treatment is appropriate after an examination and explain alternatives, risks, expected visits and cost.</p></div></Reveal><Reveal delay={0.14}><div className="mt-8 flex flex-wrap gap-3"><Btn onClick={openBook}>Ask about {treatment.title}</Btn><Btn variant="outline" href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(`Hello, I would like to ask about ${treatment.title}.`)}`}><MessageCircle size={15}/> WhatsApp</Btn></div></Reveal></section></main>;
}
