/* ============================================================
   Property Booking — site data
   ALL PRICES / LISTINGS / PROJECTS BELOW ARE EXAMPLES.
   Replace with real inventory anytime; the pages render from here.
   ============================================================ */

const IMG_MAP = {
  "1600585154340-be6161a56a0c": "images/house-1.jpg",
  "1568605114967-8130f3a36994": "images/house-2.jpg",
  "1580587771525-78b9dba3b914": "images/house-3.jpg",
  "1600596542815-ffad4c1539a9": "images/hero-home.jpg",
  "1512917774080-9991f1c4c750": "images/house-5.jpg",
  "1600047509807-ba8f99d2cdde": "images/house-6.jpg",
  "1613490493576-7fde63acd811": "images/house-7.jpg",
  "1564013799919-ab600027ffc6": "images/house-8.jpg",
  "1600585154526-990dced4db0d": "images/house-9.jpg",
  "1545324418-cc1a3fa10c00": "images/tower-1.jpg",
  "1486406146926-c627a92ad1ab": "images/tower-2.jpg",
};
/* Local images bundled in /images (Unsplash, free to use). Swap freely. */
const IMG = (id) => IMG_MAP[id] || id;

/* ---------------- Houses (houses.html) ---------------- */
const LISTINGS = [
  {
    id: "dha9-5m-villa", title: "5 Marla Designer Villa", society: "DHA Phase 9 Town, Lahore",
    size: "5 Marla", beds: 4, baths: 4, area: "2,050 sq ft",
    price: 33500000, tag: "Ready to Move", img: IMG("1600585154340-be6161a56a0c"),
  },
  {
    id: "bahria-5m-smart", title: "5 Marla Smart Home", society: "Bahria Town, Sector C, Lahore",
    size: "5 Marla", beds: 4, baths: 3, area: "1,950 sq ft",
    price: 29500000, tag: "New", img: IMG("1568605114967-8130f3a36994"),
  },
  {
    id: "gulberg-5m-modern", title: "5 Marla Modern House", society: "Gulberg Greens, Islamabad",
    size: "5 Marla", beds: 4, baths: 4, area: "2,100 sq ft",
    price: 31000000, tag: "Ready to Move", img: IMG("1580587771525-78b9dba3b914"),
  },
  {
    id: "dha6-10m-luxury", title: "10 Marla Luxury Villa", society: "DHA Phase 6, Lahore",
    size: "10 Marla", beds: 5, baths: 6, area: "3,600 sq ft",
    price: 68500000, tag: "Featured", img: IMG("1600596542815-ffad4c1539a9"),
  },
  {
    id: "orchard-10m-spanish", title: "10 Marla Spanish Villa", society: "Bahria Orchard, Lahore",
    size: "10 Marla", beds: 5, baths: 5, area: "3,400 sq ft",
    price: 56000000, tag: "Ready to Move", img: IMG("1512917774080-9991f1c4c750"),
  },
  {
    id: "johar-10m-corner", title: "10 Marla Corner House", society: "Johar Town, Block H, Lahore",
    size: "10 Marla", beds: 5, baths: 5, area: "3,550 sq ft",
    price: 52500000, tag: "New", img: IMG("1600047509807-ba8f99d2cdde"),
  },
  {
    id: "dha5-1k-mansion", title: "1 Kanal Contemporary Mansion", society: "DHA Phase 5, Lahore",
    size: "1 Kanal", beds: 6, baths: 7, area: "6,400 sq ft",
    price: 125000000, tag: "Featured", img: IMG("1613490493576-7fde63acd811"),
  },
  {
    id: "dha7-1k-farm", title: "1 Kanal Farmhouse Style", society: "DHA Phase 7, Lahore",
    size: "1 Kanal", beds: 5, baths: 6, area: "5,900 sq ft",
    price: 109000000, tag: "Ready to Move", img: IMG("1564013799919-ab600027ffc6"),
  },
  {
    id: "prism-1k-designer", title: "1 Kanal Designer Residence", society: "DHA Phase 9 Prism, Lahore",
    size: "1 Kanal", beds: 6, baths: 7, area: "6,800 sq ft",
    price: 138000000, tag: "New", img: IMG("1600585154526-990dced4db0d"),
  },
];

/* ---------------- Popular areas (home) ---------------- */
const AREAS = [
  { name: "DHA Lahore", blurb: "The city's most prestigious address", img: IMG("1600596542815-ffad4c1539a9", 800) },
  { name: "Bahria Town", blurb: "Master-planned family living", img: IMG("1564013799919-ab600027ffc6", 800) },
  { name: "Gulberg", blurb: "Green boulevards, prime location", img: IMG("1580587771525-78b9dba3b914", 800) },
  { name: "Johar Town", blurb: "Established, high-demand blocks", img: IMG("1600047509807-ba8f99d2cdde", 800) },
];

/* ---------------- Highrise projects (highrise.html) ---------------- */
const PROJECTS = [
  {
    id: "booking-heights",
    name: "Booking Heights", location: "Gulberg Greens, Islamabad",
    status: "Booking Open", completion: "Dec 2028",
    img: IMG("1545324418-cc1a3fa10c00", 1600),
    desc: "A 14-storey signature tower of 1 & 2-bed smart apartments and sky penthouses — rooftop lounge, concierge, and 3-level secure parking, minutes from the Islamabad Expressway.",
    units: ["1-Bed Smart Apartment — from PKR 1.15 Cr", "2-Bed Family Apartment — from PKR 1.85 Cr", "Sky Penthouse — from PKR 4.20 Cr"],
    paymentPlan: [
      ["On Booking", "20%", "PKR 23 Lac*"],
      ["36 Monthly Installments", "60%", "PKR 23,000*/mo"],
      ["On Possession", "20%", "PKR 23 Lac*"],
    ],
    planNote: "*Example figures for a 1-bed unit. Final plan shared on enquiry.",
    amenities: ["Rooftop lounge", "Gym & fitness studio", "Kids play area", "3-level parking", "24/7 security & CCTV", "Power backup", "Concierge", "Prayer area"],
  },
  {
    id: "lakeview-grand",
    name: "Lakeview Grand", location: "Bahria Orchard, Lahore",
    status: "Under Construction", completion: "Jun 2027",
    img: IMG("1486406146926-c627a92ad1ab", 1600),
    desc: "Mixed-use landmark beside the theme park — retail podium, corporate floors, and 2 & 3-bed lake-facing residences with hotel-style services.",
    units: ["2-Bed Lake-Facing Apartment — from PKR 1.65 Cr", "3-Bed Family Residence — from PKR 2.60 Cr", "Corporate Office Floor — on request"],
    paymentPlan: [
      ["On Booking", "25%", "PKR 41.25 Lac*"],
      ["30 Monthly Installments", "55%", "PKR 30,250*/mo"],
      ["On Possession", "20%", "PKR 33 Lac*"],
    ],
    planNote: "*Example figures for a 2-bed unit. Final plan shared on enquiry.",
    amenities: ["Retail podium", "Infinity pool", "Spa & sauna", "Business lounge", "Valet parking", "Smart access", "Landscaped decks", "Daycare"],
  },
];

/* ---------------- Construction estimator (construction.html) ---------------- */
/* coveredArea = typical double-storey covered area for the plot size */
const PLOT_SIZES = [
  { key: "5marla",  label: "5 Marla",  coveredArea: 2100,  timeline: "7–8 months" },
  { key: "10marla", label: "10 Marla", coveredArea: 3800,  timeline: "9–10 months" },
  { key: "1kanal",  label: "1 Kanal",  coveredArea: 6200,  timeline: "11–12 months" },
  { key: "2kanal",  label: "2 Kanal",  coveredArea: 11000, timeline: "14–16 months" },
];
/* rates are PKR per sq ft — EXAMPLES, clearly labelled on the page */
const TIERS = [
  { key: "grey",     label: "Grey Structure",  rate: 2750, blurb: "Structure, brickwork, plaster & roofing — ready for finishing." },
  { key: "premium",  label: "Premium Turnkey", rate: 6400, blurb: "Complete home: branded fittings, imported sanitary, wooden flooring accents." },
  { key: "luxury",   label: "Luxury Turnkey",  rate: 8900, blurb: "Designer finishes, home automation, landscaped lawn, premium everything." },
];

/* ---------------- Testimonials (home) ---------------- */
const TESTIMONIALS = [
  { name: "Ahmed Raza", detail: "10 Marla house, DHA Phase 6",
    text: "From the first visit to the final registry, everything was transparent. We moved into our villa in six weeks — zero surprises on price." },
  { name: "Fatima Khan", detail: "1 Kanal construction, DHA Phase 9",
    text: "They built our home exactly to the quotation. Weekly photo updates, branded materials, and handover two weeks early. Rare in this market." },
  { name: "Bilal Sheikh", detail: "2-Bed apartment, Booking Heights",
    text: "The payment plan was exactly as explained on day one. Booking took one meeting and everything since has been on schedule." },
];

/* ---------------- Contact ---------------- */
const PHONE_DISPLAY = "0303 0292114";
const PHONE_TEL = "+923030292114";
const WHATSAPP = "https://wa.me/923030292114";
const EMAIL = "info@propertybooking.pk";

/* ---------------- Helpers ---------------- */
function pkr(n) {
  if (n >= 1e7) {
    const cr = n / 1e7;
    return "PKR " + (Number.isInteger(cr) ? cr : cr.toFixed(2)) + " Cr";
  }
  const lac = n / 1e5;
  return "PKR " + (Number.isInteger(lac) ? lac : lac.toFixed(1)) + " Lac";
}
