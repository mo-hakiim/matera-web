import { brandPages, logoUrls, postUrls } from "./media";

export const contact = {
  office: "Hargeisa-Somaliland",
  email: "Mastera0018@gmail.com",
  web: "Mastera.com",
  phones: ["063-8775808", "065-8775808"],
};
export const primaryWhatsAppUrl = "https://wa.me/252638775808";

export const approach = [
  { title: "Discover", text: "Understand the business, customers, objectives, and market." },
  { title: "Strategize", text: "Build a focused marketing plan, positioning and channel priorities." },
  { title: "Create", text: "Develop relevant content, campaigns, and digital assets." },
  { title: "Activate", text: "Publish content and implement campaigns across agreed channels." },
  { title: "Measure & Improve", text: "Review performance, share insights and refine the next steps." },
];

export type Service = { no: string; title: string; slug: string; points: string[] };

export const services: Service[] = [
  {
    no: "01",
    slug: "social",
    title: "Social Media Management",
    points: [
      "Planning and management for Facebook, Instagram, TikTok, YouTube, and LinkedIn.",
      "Content calendars, captions, publishing, and agreed community monitoring.",
      "Platform-specific creative and monthly performance reporting.",
    ],
  },
  {
    no: "02",
    slug: "brand",
    title: "Brand Strategy & Identity",
    points: [
      "Brand positioning, market and competitor research and customer insights.",
      "Brand messaging, tone of voice, slogans and visual identity guidelines.",
      "Logo development, company profiles, brochures, presentations and marketing collateral.",
    ],
  },
  {
    no: "03",
    slug: "studio",
    title: "Creative Studio & Media Production",
    points: [
      "Graphic design, photography, product photography, and promotional videos.",
      "Short-form video, interviews, corporate storytelling, and documentary-style production.",
      "Motion graphics and drone filming, subject to permissions and project scope.",
    ],
  },
  {
    no: "04",
    slug: "growth",
    title: "Marketing Strategy & Business Growth",
    points: [
      "Marketing audits, competitor analysis, customer segmentation and buyer personas.",
      "Marketing plans and promotional strategy, customer journeys and budget planning.",
      "Quarterly advisory reviews and practical recommendations for improvement.",
    ],
  },
  {
    no: "05",
    slug: "training",
    title: "Training, Communications & Campaigns",
    points: [
      "Business Development & Professional Skills",
      "Management & Leadership Training",
      "Sales & Customer Service Training",
      "Operations & Productivity Training",
    ],
  },
];

export const industries = [
  {
    slug: "finance",
    title: "Financial Services",
    text: "Brand trust, financial education, product campaigns, customer communication and digital engagement.",
  },
  {
    slug: "hospitality",
    title: "Hospitality, Food & Tourism",
    text: "Visual storytelling, promotional offers, customer reviews, social content, and seasonal campaigns.",
  },
  {
    slug: "retail",
    title: "Retail & Consumer Brands",
    text: "Product photography, promotions, catalogue content and customer acquisition.",
  },
  {
    slug: "realestate",
    title: "Real Estate & Professional Services",
    text: "Property showcases, lead generation campaigns and reputation building.",
  },
  {
    slug: "education",
    title: "Education, NGOs & Public Institutions",
    text: "Public awareness, enrollment campaigns, community engagement, institutional communications and training.",
  },
];

export const workflow = [
  { title: "Consultation & brief", text: "Confirm objectives, audience, scope, and budget." },
  { title: "Proposal and agreement", text: "Define deliverables, responsibilities, fees and exclusions." },
  { title: "Onboarding", text: "Collect brand assets, product information, and approval contacts." },
  { title: "Planning & production", text: "Prepare the content calendar and develop deliverables." },
  { title: "Review & approval", text: "Client reviews content within the agreed timeframe." },
  { title: "Delivery and publishing", text: "Publish approved work according to the agreed scope." },
  { title: "Reporting & optimization", text: "Review results, share insights and refine what comes next." },
];

export const corePackageFeatures = [
  "Marketing Research",
  "Marketing strategy",
  "Social media management",
  "Monthly content calendar",
  "Ads management",
  "Monthly performance and reporting",
];

export const packages = [
  {
    id: "starter",
    no: "Package 1",
    name: "Brand Starter",
    contentPieces: 10,
    features: [...corePackageFeatures],
    extras: [] as string[],
    bonuses: ["Holiday posters", "Juma posters", "Facebook cover"],
    featured: false,
  },
  {
    id: "growth",
    no: "Package 2",
    name: "Brand Growth",
    contentPieces: 20,
    features: [...corePackageFeatures],
    extras: ["Staff training", "Campaign management"],
    bonuses: ["Holiday posters", "Juma posters", "Facebook cover"],
    featured: true,
  },
  {
    id: "performance",
    no: "Package 3",
    name: "Brand Performance",
    contentPieces: 30,
    features: [...corePackageFeatures],
    extras: [
      "Staff training",
      "Full campaign management",
      "Payment for advertising costs",
      "Website management",
    ],
    bonuses: ["Holiday posters", "Juma posters", "Facebook cover"],
    featured: false,
  },
];

export const extendedServices = [
  "Branding",
  "Event Management",
  "Web design and development",
];

/* ---------- Portfolio (strictly from the portfolio file) ---------- */

export type Post = {
  id: string;
  client: string;
  title: string;
  width: number;
  height: number;
  url: string;
};

const post = (id: string, client: string, title: string, height = 1350): Post => ({
  id,
  client,
  title,
  width: 1080,
  height,
  url: postUrls[id] ?? "",
});

export const posts: Post[] = [
  post("16", "Towba Travel Agency", "December Umrah Package"),
  post("17", "Daryeel Wellness", "Creatine Monohydrate", 1235),
  post("14", "Faatix Online Market", "Honor Magic V6 launch"),
  post("12", "Amal Grand General Hospital", "Neurosurgeon visit — Dr. Bala Raja"),
  post("10", "Kuwaity Dental Care Center", "Qoys Faraxsan — family smiles"),
  post("15", "A-Z Barber Shop", "Modern cuts campaign"),
  post("11", "Daryeel Wellness", "Fenugreek herbal supplement"),
  post("09", "Astaan Construction Company", "Hambalyo Macmiil"),
  post("13", "Kuwaity Dental Care Center", "Ilmo Faraxsan — kids' dental care"),
];

export type ClientLogo = { id: string; name: string; url: string };

const logo = (id: string, name: string): ClientLogo => ({ id, name, url: logoUrls[id] ?? "" });

export const clientLogos: ClientLogo[] = [
  logo("amal-grand", "Amal Grand General Hospital"),
  logo("towba", "Towba Travel Agency"),
  logo("daryeel", "Daryeel Wellness"),
  logo("carwo", "Carwo Golden House"),
  logo("markiz-rashaad", "Markiz Rashaad"),
  logo("astaan", "Astaan Construction Company"),
  logo("agritech", "AgriTech Somaliland"),
  logo("tanmia", "Tanmia"),
  logo("uswa", "Union of Students' Wings of Ansar (USWA)"),
  logo("amal-ummah", "أمل الأمة"),
];

/** Clients featured through their social media work in the portfolio file. */
export const postClients = [
  "Shirkada Towba",
  "Kuwaity Dental Care Center",
  "Faatix Online Market",
  "A-Z Barber Shop",
];

/* ---------- Brand identity showcases ---------- */

export type BrandColor = { name: string; hex: string; rgb: string; cmyk: string };
export type BrandFont = { name: string; role: string; family?: string; specimenPage?: number };

export type Brand = {
  slug: "heersare" | "carwo" | "markiz";
  name: string;
  arabic?: string;
  category: string;
  summary: string;
  about: string;
  mission: string;
  vision: string;
  logoMeaning: string;
  colors: BrandColor[];
  fonts: BrandFont[];
  pages: string[];
  pageWidth: number;
  pageHeight: number;
  cover: number;
  logoPages: number[];
  colorPages: number[];
  mockupPages: number[];
};

export const brands: Brand[] = [
  {
    slug: "heersare",
    name: "Heersare Production",
    category: "Creative media & production company",
    summary:
      "A bold red-and-black identity for a production house — the H + P initials fused with a camera aperture.",
    about:
      "Heersare Production is a professional creative media and production company dedicated to transforming ideas into powerful visual stories, specialising in video production, photography, creative content, and visual storytelling.",
    mission:
      "To provide high-quality creative and media production services that help businesses, organizations, and individuals communicate their stories effectively through compelling visual content.",
    vision:
      "To become a leading and trusted production company recognized for creativity, quality, professionalism, and innovative visual storytelling.",
    logoMeaning:
      "H + P + Camera Lens = Heersare Production + Visual Creativity. The bold black “HEERSARE” creates a strong, trustworthy presence, while the red “production” adds creativity, energy and visual impact.",
    colors: [
      { name: "Red", hex: "#E00002", rgb: "224, 0, 2", cmyk: "0, 100, 99, 12" },
      { name: "Black", hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" },
      { name: "White", hex: "#FFFFFF", rgb: "252, 252, 252", cmyk: "0, 0, 0, 5" },
      { name: "Light Grey", hex: "#F2F2F2", rgb: "242, 242, 242", cmyk: "0, 0, 0, 5" },
    ],
    fonts: [
      { name: "Poppins", role: "Primary typeface — Thin to Black", family: "font-sans" },
      { name: "Oxygen", role: "Secondary typeface — Light, Regular, Bold", family: "font-oxygen" },
    ],
    pages: brandPages.heersare,
    pageWidth: 1622,
    pageHeight: 2048,
    cover: 1,
    logoPages: [2, 3, 4, 8, 10, 11],
    colorPages: [13, 14],
    mockupPages: [15, 16, 17, 18, 19, 20, 21, 22, 23],
  },
  {
    slug: "carwo",
    name: "Carwo Golden House",
    category: "Luxury furniture showroom",
    summary:
      "Warm golden browns and a bespoke monogram pattern for Hargeisa's premier furniture showroom.",
    about:
      "CARWO Golden House represents the pinnacle of Somaliland craftsmanship and modern interior design. Based in Hargeisa, it curates a sophisticated collection of bespoke and imported home furnishings, bridging tradition with contemporary elegance.",
    mission:
      "To offer an unparalleled selection of high-quality, elegant furniture, provide exceptional personalized design services and foster a sense of home and comfort for every client.",
    vision:
      "To be the preeminent name in luxurious and accessible home design throughout Somalia and the Horn of Africa.",
    logoMeaning:
      "Core values — Elegance, Cultural Pride, Integrity, Customer-Centricity and Quality — expressed through a refined C + G monogram and a repeating bespoke pattern.",
    colors: [
      { name: "Dark Brown", hex: "#402707", rgb: "64, 39, 7", cmyk: "0, 39, 89, 75" },
      { name: "Golden Brown", hex: "#C08209", rgb: "192, 130, 9", cmyk: "0, 32, 95, 25" },
      { name: "Saffron Gold", hex: "#EDBE48", rgb: "237, 190, 72", cmyk: "0, 20, 70, 7" },
      { name: "Pure White", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
      { name: "Black", hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" },
    ],
    fonts: [
      { name: "Recline", role: "Display typeface", specimenPage: 21 },
      { name: "Nexa", role: "Introduction / body typeface", specimenPage: 22 },
    ],
    pages: brandPages.carwo,
    pageWidth: 1500,
    pageHeight: 750,
    cover: 1,
    logoPages: [9, 11, 13, 14, 15, 16],
    colorPages: [18, 19],
    mockupPages: [24, 25, 26, 28, 29, 30, 31, 32, 33],
  },
  {
    slug: "markiz",
    name: "Markiz Rashaad",
    arabic: "مركز الرشاد",
    category: "Islamic educational center",
    summary:
      "Teal and golden brown, with an open Qur'an on a rahl beneath a rising sun — guidance, knowledge and growth.",
    about:
      "Markiz Rashaad is an educational center dedicated to spreading Islamic knowledge, teaching the Holy Qur'an and the Arabic language through a balanced, moderate methodology — building a knowledgeable generation of good character.",
    mission:
      "To deliver high-quality Qur'anic and Islamic education, develop learners' skills and instil noble Islamic values through modern programmes and an encouraging learning environment.",
    vision:
      "To be a leading beacon in teaching the Holy Qur'an and Islamic sciences, raising generations equipped with knowledge, faith and good character.",
    logoMeaning:
      "An open Qur'an on a rahl (stand) for learning and guidance, the open book for growing knowledge, and a rising sun for guidance and light.",
    colors: [
      { name: "Teal (Pantone)", hex: "#0C968F", rgb: "12, 150, 143", cmyk: "92, 0, 5, 41" },
      { name: "Golden Brown", hex: "#B48623", rgb: "180, 134, 35", cmyk: "0, 26, 81, 29" },
      { name: "Pure White", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
      { name: "Black", hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" },
    ],
    fonts: [
      { name: "Montserrat", role: "Latin typeface", family: "font-display", specimenPage: 21 },
      { name: "Cairo — كايرو", role: "Arabic primary typeface", family: "font-cairo", specimenPage: 22 },
    ],
    pages: brandPages.markiz,
    pageWidth: 1500,
    pageHeight: 750,
    cover: 1,
    logoPages: [9, 11, 13, 14, 15, 16],
    colorPages: [18, 19],
    mockupPages: [24, 26, 27, 28, 29, 30, 31, 32],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
