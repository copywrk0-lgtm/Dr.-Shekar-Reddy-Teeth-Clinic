export type PageId = "home" | "about" | "treatments" | "team" | "gallery" | "contact" | "privacy" | "terms";

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
  phone: "+91 63666 49777",
  phoneRaw: "+916366649777",
  landline: "+91 80 2553 3988",
  landlineRaw: "+918025533988",
  whatsapp: "916366649777",
  hoursWeek: "Monday – Saturday · 9:00 AM – 10:00 PM",
  hoursSun: "Sunday · 9:00 AM – 9:00 PM",
  hoursShort: "Open 7 days · hours vary",
  rating: "4.9",
  reviews: "1,100+",
  reviewSource: "Current public listings",
  reviewCountVerified: "1,186",
  maps: "https://www.google.com/maps/place/Dr.+Shekhar+Reddy+Dental+Clinic/data=!4m2!3m1!1s0x0:0xd915fbf36eff92e9?sa=X&ved=1t:2428&ictx=111",
  reviewsUrl: "https://www.google.com/maps/place/Dr.+Shekhar+Reddy+Dental+Clinic/data=!4m2!3m1!1s0x0:0xd915fbf36eff92e9?sa=X&ved=1t:2428&ictx=111",
  mapEmbed:
    "https://www.google.com/maps?q=12.954835,77.61448&z=17&output=embed",
};

export const navLinks: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "treatments", label: "Treatments" },
  { id: "team", label: "Doctors" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Our clinic" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: "4.9★", label: `${clinic.reviews} patient ratings` },
  { value: "7 days", label: "Open 7 days*" },
  { value: "9–10", label: "Daytime & evening hours*" },
];

export const trustPoints = [
  { n: "01", title: "Open 7 days", text: "Current public listings show the clinic operating seven days; confirm today's hours and availability before visiting." },
  { n: "02", title: "4.9★ rating", text: "Current public listings show a 4.9 rating and 1,100+ patient ratings for the clinic." },
  { n: "03", title: "Clear treatment options", text: "Public listings describe general, cosmetic, surgical, orthodontic and children's dental services." },
  { n: "04", title: "Multidisciplinary care", text: "Public listings identify a dental team and a broad range of specialist services at the clinic." },
];

export const promises = [
  { n: "01", title: "Comfort-focused care", text: "Local anaesthesia and patient communication can help make treatment more comfortable. Your dentist will explain what to expect." },
  { n: "02", title: "Treatment explained clearly", text: "Ask the dentist to explain the diagnosis, options, expected timeline and costs before treatment begins." },
  { n: "03", title: "A broad range of care", text: "The clinic's public listings include routine, restorative, implant, orthodontic and children's dental services." },
];

export const visitSteps = [
  { n: "01", title: "Walk in or call", text: "Appointments can reduce waiting; call the clinic to check today's availability." },
  { n: "02", title: "Check-up & assessment", text: "The dentist examines the problem and recommends imaging when clinically needed." },
  { n: "03", title: "Plan and cost", text: "Discuss the treatment options, expected visits and cost before deciding to proceed." },
  { n: "04", title: "Treatment & follow-up", text: "Your dentist will explain aftercare and whether a review visit is needed." },
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
      "Decay is cleaned out and rebuilt with light-cured composite that blends with your tooth. Suitable for front and back teeth. Often completed in one visit, depending on the tooth and clinical findings. Follow your dentist's eating instructions afterwards.",
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
      "Tooth extraction under local anaesthesia, with clear aftercare instructions and medicines. Impacted wisdom teeth are handled by our surgical team, with stitches and a review visit.",
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
      "Complete dentures, removable partial dentures and flexible options for missing teeth. Broken dentures may be repairable; ask the clinic about the current turnaround for your case.",
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
    text: "Leads the implant and rehabilitation cases, and is regularly named by patients for clear communication and comfortable treatment.",
    image: local.room,
  },
  {
    name: "Specialist services",
    role: "Endodontics · Orthodontics · Pedodontics",
    focus: "Services listed publicly for the clinic",
    text: "Public clinic listings include root canal, orthodontic, implant and children's dental services. Confirm the treating clinician for your specific case when booking.",
    image: local.lady,
  },
];

export const reviews = [
  { n: "01", title: "Welcoming and efficient", text: "Dr. Lohit and his team are always welcoming and efficient. Provides exceptional care and makes every visit stress free.", name: "Sudhanshu Purohit", meta: "Public review · 10 Sep 2024" },
  { n: "02", title: "Clear explanations", text: "Dr. Lohit Thapliyal was described as knowledgeable, kind and considerate, with treatment explained in understandable terms.", name: "Nusrath Sheriff", meta: "Public review · 13 Oct 2022" },
  { n: "03", title: "Reasonable prices", text: "A public review described the treatment as good care at a reasonable price and specifically praised Dr. Ankita Roy.", name: "Sabiha Farrukh", meta: "Public review · 10 Apr 2021" },
  { n: "04", title: "See current reviews", text: "Public listings currently show a 4.9 rating and 1,186 ratings for the clinic. Reviews include both positive and critical experiences.", name: "Current public listings", meta: "4.9 · 1,100+ ratings" },
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
    a: "Public listings currently show the clinic operating seven days, with hours varying by day. Please call ahead to confirm today's hours and availability."
  },
  {
    q: "How much will my treatment cost?",
    a: "Treatment cost depends on the diagnosis and procedure. Ask the clinic for the current fee before treatment begins."
  },
  {
    q: "Is the treatment painful?",
    a: "Many dental procedures can be performed with local anaesthesia. Your dentist can explain pain-control options and what to expect for your specific procedure."
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
