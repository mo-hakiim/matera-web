/** Original guideline scans recovered from the live reference and served locally. */
import { assetUrl } from "./site-path";

const brandGuidePages = (slug: "heersare" | "carwo" | "markiz", total: number) =>
  Array.from(
    { length: total },
    (_, index) => assetUrl(`/assets/brand-guides/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.webp`),
  );

export const brandPages = {
  heersare: brandGuidePages("heersare", 24),
  carwo: brandGuidePages("carwo", 34),
  markiz: brandGuidePages("markiz", 32),
};

/** Social posts keyed by their page number in the portfolio source (9–17). */
export const postUrls: Record<string, string> = {
  "09": assetUrl("/assets/work/social-towba-congratulations.jpg"),
  "10": assetUrl("/assets/work/social-kuwait-dental-care.jpg"),
  "11": assetUrl("/assets/work/daryeel-post.jpg"),
  "12": assetUrl("/assets/work/amal-post.jpg"),
  "13": assetUrl("/assets/work/social-kuwait-dental-kids.jpg"),
  "14": assetUrl("/assets/work/honor-post.jpg"),
  "15": assetUrl("/assets/work/social-az-barber.jpg"),
  "16": assetUrl("/assets/work/social-towba-umrah.jpg"),
  "17": assetUrl("/assets/work/social-daryeel-creatine.jpg"),
};

export const logoUrls: Record<string, string> = {
  "amal-grand": assetUrl("/assets/partners/amal-grand.png"),
  towba: assetUrl("/assets/partners/towba-travel.png"),
  daryeel: assetUrl("/assets/partners/daryeel-wellness.png"),
  carwo: assetUrl("/assets/partners/carwo-golden-house.png"),
  "markiz-rashaad": assetUrl("/assets/partners/markiz-rashaad.png"),
  astaan: assetUrl("/assets/partners/astaan.png"),
  agritech: assetUrl("/assets/partners/agritech.png"),
  tanmia: assetUrl("/assets/partners/tanmia.png"),
  uswa: assetUrl("/assets/partners/uswa.webp"),
  "amal-ummah": assetUrl("/assets/partners/amal-ummah.webp"),
};
