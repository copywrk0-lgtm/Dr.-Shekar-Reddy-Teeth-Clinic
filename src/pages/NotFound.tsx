import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Btn, Eyebrow, Heading } from "../components/ui";
import { useNav } from "../context";

export default function NotFound() {
  const { go, openBook } = useNav();
  return (
    <main className="grid min-h-[75vh] place-items-center px-5 pb-20 pt-32 sm:px-6">
      <section className="max-w-2xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-mint text-teal-deep"><SearchX size={28} /></div>
        <Eyebrow>404 · Page not found</Eyebrow>
        <Heading className="mt-5">That page isn't part of the clinic website.</Heading>
        <p className="mx-auto mt-5 max-w-lg text-ink/65">The link may be outdated or the address may have been typed incorrectly. Choose a page below or book an appointment.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn onClick={() => go("home")}><Home size={15} /> Home</Btn>
          <Btn variant="outline" onClick={() => go("treatments")}><ArrowLeft size={15} /> Treatments</Btn>
          <Btn variant="outline" onClick={openBook}>Book appointment</Btn>
        </div>
      </section>
    </main>
  );
}
