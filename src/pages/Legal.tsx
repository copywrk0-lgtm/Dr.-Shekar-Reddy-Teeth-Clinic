import type { ReactNode } from "react";
import { Eyebrow, Heading } from "../components/ui";
import { clinic } from "../data";

export function Privacy() {
  return <LegalPage title="Privacy Policy" eyebrow="Privacy"><p>We collect information you choose to provide through the appointment form or when you contact the clinic. This may include your name, phone number, requested appointment details and message.</p><p>Information is used to respond to enquiries, coordinate appointments and provide requested dental-care information. We do not ask for unnecessary sensitive information through this website.</p><p>For questions about how your information is handled, contact {clinic.phone}.</p></LegalPage>;
}

export function Terms() {
  return <LegalPage title="Terms & Medical Disclaimer" eyebrow="Terms"><p>Information on this website is provided for general informational purposes and does not replace professional dental diagnosis, treatment or advice.</p><p>Appointment requests submitted through the website are requests, not confirmed appointments, until the clinic confirms availability. Treatment time, suitability, outcomes and costs can vary after clinical examination.</p><p>For urgent or severe symptoms, contact the clinic directly or seek appropriate emergency medical care.</p></LegalPage>;
}

function LegalPage({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return <div className="pt-[70px] lg:pt-[106px]"><section className="bg-teal-ink py-16 text-white"><div className="mx-auto max-w-[900px] px-5 sm:px-6"><Eyebrow light>{eyebrow}</Eyebrow><Heading light className="mt-4">{title}</Heading></div></section><article className="mx-auto max-w-[900px] px-5 py-14 sm:px-6"><div className="space-y-6 text-base leading-8 text-ink/70">{children}</div></article></div>;
}
