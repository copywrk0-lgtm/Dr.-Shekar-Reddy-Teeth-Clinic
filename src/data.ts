export type PageId = "home" | "about" | "treatments" | "team" | "gallery" | "contact" | "treatment-detail" | "privacy" | "terms";

export const img = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Photos of the clinic itself (recreated from the clinic's own photographs). */
export const local = {
  room: "/images/clinic-room.jpg",
  treating: "/images/dentist-treating.jpg",
  lady: "/images/lady-dentist.jpg",
  reception: "/images/reception.jpg",
  wall: "/images/award-wall.jpg",
};

export const media = {
  videos: {
    clinic:
      "https://videos.pexels.com/video-files/14934108/14934108-hd_1920_1080_25fps.mp4",
    exam: "https://videos.pexels.com/video-files/6630542/6630542-hd_1920_1080_25fps.mp4",
    consult:
      "https://videos.pexels.com/video-files/6630545/6630545-hd_1920_1080_25fps.mp4",
    chair:
      "https://videos.pexels.com/video-files/4488800/4488800-hd_1920_1080_25fps.mp4",
    kids: "https://videos.pexels.com/video-files/6502313/6502313-hd_1920_1080_25fps.mp4",
    waiting:
      "https://videos.pexels.com/video-files/6631722/6631722-hd_1920_1080_25fps.mp4",
  },
  tools: img(6502543),
  shade: img(5355899),
  aligners: img(28407749),
  veneers: img(6627571),
  mirror: img(6627574),
  kids: img(8260438),
  child: img(7800568),
  xray: img(4270093),
  denture: img(6502301),
  cast: img(5355723),
  smile: img(3762453),
  patient: img(3845553),
};

export const clinic = {
  name: "Dr. Shekar Reddy Teeth Clinic",
  shortName: "Shekar Reddy Teeth Clinic",
  tagline: "Complete dental care for the whole family",
  area: "Neelasandra",
  city: "Bengaluru",
  addressLine1: "No. 38/6, Ground Floor, Bazaar Street",
  addressLine2: "Neelasandra, Bengaluru, Karnataka 560047",
  landmark: "Below Canara Bank · Opposite Mecca Masjid",
  phone: "+91 72044 79211",
  phoneRaw: "+917204479211",
  landline: "+91 80 2553 3988",
  landlineRaw: "+918025533988",
  whatsapp: "917204479211",
  hoursWeek: "Monday – Saturday · 9:00 AM – 10:00 PM",
  hoursSun: "Sunday · 9:00 AM – 9:00 PM",
  hoursShort: "Open all 7 days · 9 AM – 10 PM",
  rating: "4.9",
  reviews: "1,100+",
  maps: "https://maps.app.goo.gl/yvWyuLv3JvntTiZ5A",
  mapEmbed:
    "https://www.google.com/maps?q=12.954835,77.61448&z=17&output=embed",
};

export const verificationNote = "* Clinic hours, ratings, review counts and other business claims should be confirmed against the clinic\'s current Google Business Profile before publication.";

export const navLinks: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "treatments", label: "Treatments" },
  { id: "team", label: "Our doctors" },
  { id: "about", label: "About us" },
  { id: "gallery", label: "Clinic" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: "4.9★", label: `${clinic.reviews} patient ratings` },
  { value: "7 days", label: "Open all 7 days*" },
  { value: "9–10", label: "Daily clinic hours*" },
];

export const trustPoints = [
  {
    n: "01",
    title: "Open 7 days a week*",
    text: "Convenient clinic hours designed to fit around work and school.",
  },
  {
    n: "02",
    title: "4.9★ rated",
    text: `${clinic.reviews} patient ratings are reported across current business listings.`,
  },
  {
    n: "03",
    title: "Clear treatment planning",
    text: "Treatment options, expected steps and costs can be discussed before treatment begins.",
  },
  {
    n: "04",
    title: "Multidisciplinary dental care",
    text: "General, cosmetic, implant, orthodontic and children's dental care is available through the clinic team.",
  },
];

export const promises = [
  {
    n: "01",
    title: "Comfort-focused care",
    text: "Careful anaesthesia, gentle technique and clear communication are used to make treatment as comfortable as possible.",
  },
  {
    n: "02",
    title: "Told before it's done",
    text: "You hear what the problem is, what it will cost and what we plan to do — in Kannada, Hindi, Urdu, Tamil, Telugu or English.",
  },
  {
    n: "03",
    title: "Clear costs",
    text: "Treatment options and expected costs are discussed before you proceed.",
  },
];

export const visitSteps = [
  {
    n: "01",
    title: "Walk in or call",
    text: "Appointments are recommended, and walk-in care may be available depending on clinic capacity.",
  },
  {
    n: "02",
    title: "Check-up & X-ray",
    text: "The dentist examines you and takes a digital X-ray if it is needed.",
  },
  {
    n: "03",
    title: "Plan and cost",
    text: "You are told what needs doing, what can wait, and the exact charge for each step.",
  },
  {
    n: "04",
    title: "Treatment & review",
    text: "Treatment duration and follow-up depend on the procedure and your individual dental needs.",
  },
];

export type Treatment = {
  id: string;
  title: string;
  category: "General" | "Cosmetic" | "Surgical" | "Kids" | "Braces";
  excerpt: string;
  detail: string;
  image: string;
  duration: string;
};

export const treatments: Treatment[] = [
  {
    id: "checkup",
    title: "Check-up & cleaning",
    category: "General",
    excerpt: "Scaling, polishing and a complete oral examination.",
    detail:
      "Ultrasonic scaling removes tartar and stain, and we polish afterwards so teeth feel smooth. Includes a full check of teeth, gums and soft tissue, plus advice on brushing technique. Recommended once every six months.",
    image: media.tools,
    duration: "30–45 min",
  },
  {
    id: "filling",
    title: "Tooth-coloured fillings",
    category: "General",
    excerpt: "Composite fillings that match the natural shade of your tooth.",
    detail:
      "Decay is cleaned out and rebuilt with light-cured composite that blends with your tooth. Suitable for front and back teeth. Done in a single sitting, and you can eat the same day.",
    image: media.shade,
    duration: "1 sitting",
  },
  {
    id: "rct",
    title: "Root canal treatment",
    category: "General",
    excerpt: "Save a badly decayed or painful tooth instead of removing it.",
    detail:
      "Rotary root canal treatment with digital X-rays, done under proper anaesthesia. Single-sitting RCT is possible for many teeth. A cap is usually advised afterwards to protect the tooth.",
    image: media.xray,
    duration: "1–2 sittings",
  },
  {
    id: "extraction",
    title: "Tooth extraction",
    category: "Surgical",
    excerpt: "Simple and surgical removals, including wisdom teeth.",
    detail:
      "Extraction is performed under local anaesthesia with clear aftercare instructions. Impacted wisdom teeth may require a surgical approach and follow-up.",
    image: local.treating,
    duration: "20–40 min",
  },
  {
    id: "caps",
    title: "Caps, crowns & bridges",
    category: "General",
    excerpt: "Metal, metal-ceramic and full-ceramic caps to rebuild a tooth.",
    detail:
      "We fit crowns after root canals and bridges to replace missing teeth. Several material options are available — the differences in strength, appearance and cost are explained before you choose.",
    image: media.veneers,
    duration: "2 visits",
  },
  {
    id: "dentures",
    title: "Dentures & repairs",
    category: "General",
    excerpt: "Complete and partial dentures, plus same-day denture repairs.",
    detail:
      "Complete dentures, removable partial dentures and flexible options for missing teeth. Broken dentures can often be repaired the same day so you are not left without them.",
    image: media.denture,
    duration: "3–4 visits",
  },
  {
    id: "implants",
    title: "Dental implants",
    category: "Surgical",
    excerpt: "A fixed replacement for a missing tooth, root and all.",
    detail:
      "Implants placed by our implantologist after assessing bone with an X-ray or CBCT. Single tooth, multiple teeth and full-arch options. Healing is checked at intervals before the crown is fixed.",
    image: media.cast,
    duration: "Staged over months",
  },
  {
    id: "gums",
    title: "Gum treatment & surgery",
    category: "Surgical",
    excerpt: "For bleeding gums, bad breath and loose teeth.",
    detail:
      "Deep cleaning, curettage and gum surgery where required, along with treatment for gum recession. Early treatment often prevents teeth from becoming loose later.",
    image: media.mirror,
    duration: "1–3 sittings",
  },
  {
    id: "braces",
    title: "Braces & aligners",
    category: "Braces",
    excerpt: "Metal, ceramic and clear aligner options for crooked teeth.",
    detail:
      "Orthodontic assessment with X-rays and study models, then a treatment plan with monthly adjustment visits. Suitable for children, teenagers and adults.",
    image: media.aligners,
    duration: "9–24 months",
  },
  {
    id: "whitening",
    title: "Teeth whitening",
    category: "Cosmetic",
    excerpt: "Professional bleaching for stained or discoloured teeth.",
    detail:
      "In-clinic whitening after a cleaning, with shade matched before and after. We advise on sensitivity and what results to realistically expect for your teeth.",
    image: media.smile,
    duration: "60–90 min",
  },
  {
    id: "smile",
    title: "Smile designing",
    category: "Cosmetic",
    excerpt: "Veneers and reshaping for chipped, gapped or uneven teeth.",
    detail:
      "Front teeth restored with veneers, composite build-ups or crowns, planned around your face and bite so the result still looks natural.",
    image: media.veneers,
    duration: "2–3 visits",
  },
  {
    id: "kids",
    title: "Children's dentistry",
    category: "Kids",
    excerpt: "Gentle care for milk teeth, cavities and first visits.",
    detail:
      "Fluoride application, sealants, fillings, milk-tooth crowns and habit-breaking appliances. We take our time with nervous children and let parents stay beside the chair.",
    image: media.child,
    duration: "20–40 min",
  },
];

export const doctors = [
  {
    name: "Dr. Shekar Reddy",
    role: "Founder · Dental Surgeon",
    focus: "General & restorative dentistry",
    text: "Started the clinic on Bazaar Street and still sets its standard: treat everyone the same, explain the cost first, and never rush a patient out of the chair.",
    image: local.treating,
  },
  {
    name: "Dr. Sukhdeep Chahal",
    role: "BDS · Implantologist",
    focus: "Implants & full-mouth rehabilitation",
    text: "Associated with the clinic for implant and rehabilitation care. Qualifications and current areas of practice should be confirmed with the clinic before publication.",
    image: local.room,
  },
  {
    name: "Our panel of doctors",
    role: "Endodontics · Orthodontics · Pedodontics",
    focus: "Specialists across departments",
    text: "Root canal, braces, gum care and children's dentistry are handled by dedicated doctors, so complicated cases stay inside the same clinic.",
    image: local.lady,
  },
];

export const reviews = [
  {
    n: "01",
    title: "Verified patient feedback",
    text: "The clinic is currently listed with a 4.9 rating and 1,100+ patient ratings across current business listings. Visit the clinic's Google Business Profile for the latest reviews.",
    name: "Google reviews",
    meta: "See current reviews",
  },
  {
    n: "02",
    title: "Review highlights",
    text: "Current public listings include patient feedback about clear explanations, friendly staff and treatment experiences. Review wording and counts can change over time.",
    name: "Public review listings",
    meta: "Latest feedback",
  },
  {
    n: "03",
    title: "4.9★ currently reported",
    text: "Current third-party business listings report a 4.9 rating and more than 1,100 ratings/reviews. Use the Google profile for the authoritative current review count.",
    name: "Clinic listings",
    meta: "Rating information",
  },
];

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Not necessarily. We see walk-in patients through the day, though calling ahead on " +
      clinic.phone +
      " means less waiting, especially in the evening.",
  },
  {
    q: "What are your timings?",
    a: "Monday to Saturday, 9:00 AM to 10:00 PM, and Sunday 9:00 AM to 9:00 PM. We are open on public holidays too, unless announced otherwise.",
  },
  {
    q: "How much will my treatment cost?",
    a: "Our rates for fillings, root canals, caps, dentures and braces are displayed on the board inside the clinic. After the examination you will be told the exact cost before any work begins.",
  },
  {
    q: "Is the treatment painful?",
    a: "Extractions, root canals and gum procedures are done under local anaesthesia. Most patients tell us afterwards that it was far easier than they expected. Tell us if you are anxious and we will go slower.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We handle milk-tooth cavities, fluoride application, sealants and first check-ups. Parents can stay beside the chair throughout.",
  },
  {
    q: "Where exactly is the clinic?",
    a: "No. 38/6, Ground Floor, Bazaar Street, Neelasandra — below Canara Bank and opposite Mecca Masjid. Buses to Neelasandra stop a short walk away.",
  },
];

export const galleryItems = [
  { src: local.room, caption: "Treatment room", tall: false },
  { src: local.wall, caption: "Certificates & our team", tall: false },
  { src: local.treating, caption: "Everyday care", tall: true },
  { src: local.reception, caption: "Front desk & records", tall: false },
  { src: local.lady, caption: "Our lady dentist at work", tall: false },
];

export const visitReasons = [
  "Tooth pain / emergency",
  "Check-up & cleaning",
  "Filling",
  "Root canal",
  "Extraction",
  "Cap / crown",
  "Dentures",
  "Implants",
  "Braces / aligners",
  "Child's visit",
];
