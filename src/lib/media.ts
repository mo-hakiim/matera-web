/** Original guideline scans recovered from the live reference and served locally. */
const brandGuidePages = (slug: "heersare" | "carwo" | "markiz", total: number) =>
  Array.from(
    { length: total },
    (_, index) => `/assets/brand-guides/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.webp`,
  );

export const brandPages = {
  heersare: brandGuidePages("heersare", 24),
  carwo: brandGuidePages("carwo", 34),
  markiz: brandGuidePages("markiz", 32),
};

/** Social posts keyed by their page number in the portfolio source (9–17). */
export const postUrls: Record<string, string> = {
  "09": "/assets/work/social-towba-graduation.jpg",
  "10": "/assets/work/social-kuwait-dental-care.jpg",
  "11": "/assets/work/daryeel-post.jpg",
  "12": "/assets/work/amal-post.jpg",
  "13": "/assets/work/social-kuwait-dental-kids.jpg",
  "14": "/assets/work/honor-post.jpg",
  "15": "/assets/work/social-az-barber.jpg",
  "16": "/assets/work/social-towba-umrah.jpg",
  "17": "/assets/work/social-daryeel-creatine.jpg",
};

export const logoUrls: Record<string, string> = {
  "amal-grand": "/assets/partners/amal-grand.png",
  towba: "/assets/partners/towba-travel.png",
  daryeel: "/assets/partners/daryeel-wellness.png",
  carwo: "/assets/partners/carwo-golden-house.png",
  "markiz-rashaad": "/assets/partners/markiz-rashaad.png",
  astaan: "/assets/partners/astaan.png",
  agritech: "/assets/partners/agritech.png",
  tanmia: "/assets/partners/tanmia.png",
  uswa: "/assets/partners/uswa.webp",
  "amal-ummah": "/assets/partners/amal-ummah.webp",
};
