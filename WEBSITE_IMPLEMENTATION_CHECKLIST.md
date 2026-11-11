# Mastera website implementation checklist

Reference supplied: [https://masteera.lovable.app/](https://masteera.lovable.app/). All ten supplied routes are present in the local route tree. On 2026-11-11, each route was opened in the live site and local preview at a matched desktop viewport (~1250 × 700) for above-the-fold visual comparison. Mobile comparison, complete-page visual comparison, and most interaction checks remain outstanding. No page is complete until those checks pass.

**Status key:** Not started / In progress / Completed. A page can be marked **Completed** only after its desktop and mobile appearance and its route-specific functionality have been tested against the reference. The route comparisons below are in progress; no page is marked completed.

## Shared site shell

- [ ] **In progress — Shared shell** (`/`, all routes)
  - Original components: `src/routes/__root.tsx`; `src/components/site/SiteHeader.tsx`; `src/components/site/SiteFooter.tsx`; `src/styles.css`.
  - Reference observations: footer shows Hargeisa-Somaliland, Mastera0018@gmail.com, Mastera.com, 063-8775808 and 065-8775808. Social links currently point to platform homepages and need the correct business profile destinations if supplied.
  - Required modifications: compare typography, colors, spacing, sticky/header scroll state, footer layout, active nav state, focus states, responsive breakpoints, and favicon to the reference; replace placeholder social destinations with the actual business profiles when confirmed.
  - Functionality: all header/footer links navigate to the intended route; mobile menu opens, closes, and closes after navigation; email and phone links launch the correct handlers; browser back/forward works; no broken links.
  - Assets: served from `public/assets/4x/mastera-logo-light.webp`, `public/assets/4x/-mastera-logo.webp`, `public/assets/4x/favicon.png`. Missing generated brand manifests were replaced with direct existing asset paths. Original guide pages were recovered from the live reference and stored in `public/assets/brand-guides/`.
  - Tests: compare shell at desktop and mobile widths on every page; test menu and scroll states, keyboard access, route links, contact links, and footer visibility/content.

## Page-by-page

### 1. Home

- [ ] **In progress — Home**
  - URL: supplied reference [https://masteera.lovable.app/](https://masteera.lovable.app/); local route `/`.
  - Original components: `src/routes/index.tsx`; `src/components/site/Hero3D.tsx`; `ApproachSteps.tsx`; `ServiceCards.tsx`; `LogoWall.tsx`; `PostsGallery.tsx`; `IndustryGrid.tsx`; `CtaBand.tsx`; shared header/footer.
  - Required modifications: compare full hero, 3D visual, client-logo marquee, about/approach, services, selected work, brand identity cards, industries, CTA, and transitions against the reference; align copy, imagery, dimensions, responsive order, and motion.
  - Functionality: hero CTAs to contact and portfolio; section links to about/services/portfolio; brand cards open correct brand detail; marquee and reveal effects behave and respect reduced-motion preferences; gallery item actions work.
  - Assets: partner logos in `public/assets/partners/`; social work in `public/assets/work/`; reference images in `public/assets/references/`; local image map `src/lib/media.ts`; shared logo files above. The two absent partner marks (USWA and Amal Ummah) were recovered from the live rendered portfolio assets and added unchanged as `uswa.webp` and `amal-ummah.webp`.
  - Reference observations: mobile hero is stacked with logo/menu above the title, CTAs, metrics, and animated work visual. The public reference homepage exposes all expected sections and route links.
  - Tests: visual comparison at desktop and mobile, including full-page section order and hero; test each CTA/card/link, logo marquee, image loading, and any gallery/lightbox actions.
  - Verification notes: _Add screenshots, viewport dimensions, reference observations, and results before marking complete._

### 2. About

- [ ] **In progress — About**
  - URL: inferred `https://masteera.lovable.app/about`.
  - Original components: `src/routes/about.tsx`; `src/components/site/PageHero.tsx`; `ApproachSteps.tsx`; `TiltCard.tsx`; `CtaBand.tsx`; shared header/footer.
  - Required modifications: verify hero, logo panel, agency story, three pillars, five-step approach, interaction hints, spacing, and mobile stacking against reference.
  - Functionality: approach steps respond to hover, tap, and keyboard where applicable; CTA navigation works; animations do not hide content.
  - Assets: Mastera logo from `assets/4x/mastera-logo-light.webp` (imported via generated manifest); icons from Lucide.
  - Tests: compare desktop/mobile appearance; exercise all approach steps and CTA; verify readable content without hover and with reduced motion.

### 3. Services

- [ ] **In progress — Services**
  - URL: inferred `https://masteera.lovable.app/services`.
  - Original components: `src/routes/services.tsx`; `src/components/site/PageHero.tsx`; `ServiceCards.tsx`; `IndustryGrid.tsx`; `CtaBand.tsx`.
  - Required modifications: compare five service cards, descriptions, industry grid, icons/illustrations, layout, and CTA against reference; confirm full service text and order.
  - Functionality: any service/industry links and CTA route correctly; cards remain readable and usable on touch/mobile.
  - Assets: `assets/services/brand-identity.png`, `business-growth.png`, `creative-production.png`, `social-media.png`, `training-campaigns.png`, `training-somali.jpg` (verify which appear in the original).
  - Tests: desktop/mobile visual comparison; check all five service entries, industry entries, responsive card layouts, and every link/action.

### 4. Portfolio

- [ ] **In progress — Portfolio**
  - URL: inferred `https://masteera.lovable.app/portfolio`.
  - Original components: `src/routes/portfolio.tsx`; `src/components/site/PageHero.tsx`; `LogoWall.tsx`; `PostsGallery.tsx`; `ImageLightbox.tsx`; `CtaBand.tsx`.
  - Required modifications: compare partner/client section, social-work gallery, image proportions, ordering, captions, lightbox, and CTA against reference.
  - Functionality: gallery opens images full-size; close button, backdrop, Escape key, and previous/next controls work if present; logos/images have useful alt text and load correctly.
  - Assets: `assets/partners/*`; `assets/work/*`; image map in `lib/media.ts`.
  - Reference observations: portfolio lists ten partner/client logos, including the Arabic label `أمل الأمة`, and nine social posts; gallery instructions say tapping opens a full-size image. The Arabic label is displayed as-is; confirm the preferred English name/transliteration with the owner/source artwork.
  - Tests: desktop/mobile visual comparison; open and close every gallery image; test keyboard/touch navigation and missing/broken images.

### 5. Brand identities directory

- [ ] **In progress — Brand identities directory**
  - URL: inferred `https://masteera.lovable.app/brands` (route may canonicalize to `/brands/`).
  - Original components: `src/routes/brands.index.tsx`; `src/components/site/PageHero.tsx`; `CtaBand.tsx`; brand data in `src/lib/content.ts`.
  - Required modifications: compare ordering and presentation of all identity cards, Arabic name, color swatches, typography labels, cover image crops, and CTA against reference.
  - Reference observations: directory order is Heersare Production, Carwo Golden House, Markiz Rashaad; Markiz also displays `مركز الرشاد`.
  - Functionality: each card opens the matching detail route and browser navigation returns correctly.
  - Assets: brand guide page images indexed in `lib/media.ts`; source/reference images under `assets/references/`; logo/brand mockups in `assets/work/` where appropriate.
  - Tests: desktop/mobile comparison; verify all three entries and their links, Arabic direction/rendering, swatches, and image loading. Desktop first-fold compared; directory mobile and card click-through remain outstanding.

### 6. Brand detail — Heersare Production

- [ ] **In progress — Heersare Production detail**
  - URL: inferred `https://masteera.lovable.app/brands/heersare`.
  - Original components: `src/routes/brands.$slug.tsx`; `src/components/site/BrandShowcase.tsx`; `ImageLightbox.tsx`; `CtaBand.tsx`; data in `src/lib/content.ts`.
  - Required modifications: compare identity overview, meaning, mission/vision, palette, typography, guide-page gallery, page order, and responsive presentation against reference.
  - Functionality: gallery/lightbox navigation, close behavior, CTA, and invalid-slug handling work.
  - Assets: all 24 original numbered scans are available in `public/assets/brand-guides/heersare/` and mapped by `src/lib/media.ts`; the ordered sections match the live reference page.
  - Tests: desktop/mobile visual comparison; inspect all guide pages at full size; test lightbox keyboard/touch controls and CTA.

### 7. Brand detail — Carwo Golden House

- [ ] **In progress — Carwo Golden House detail**
  - URL: inferred `https://masteera.lovable.app/brands/carwo`.
  - Original components: `src/routes/brands.$slug.tsx`; `src/components/site/BrandShowcase.tsx`; `ImageLightbox.tsx`; `CtaBand.tsx`; data in `src/lib/content.ts`.
  - Required modifications: compare identity overview, meaning, mission/vision, palette, typography, guide-page gallery, page order, and responsive presentation against reference.
  - Functionality: gallery/lightbox navigation, close behavior, CTA, and invalid-slug handling work.
  - Assets: all 34 original numbered scans are available in `public/assets/brand-guides/carwo/` and mapped by `src/lib/media.ts`; the live page sequence was recovered.
  - Tests: desktop/mobile visual comparison; inspect all guide pages at full size; test lightbox keyboard/touch controls and CTA.

### 8. Brand detail — Markiz Rashaad

- [ ] **In progress — Markiz Rashaad detail**
  - URL: inferred `https://masteera.lovable.app/brands/markiz`.
  - Original components: `src/routes/brands.$slug.tsx`; `src/components/site/BrandShowcase.tsx`; `ImageLightbox.tsx`; `CtaBand.tsx`; data in `src/lib/content.ts`.
  - Required modifications: compare identity overview, Arabic name and direction, logo meaning, mission/vision, palette, typography, guide-page gallery, page order, and responsive presentation against reference. Confirm the Arabic client-logo name `أمل الأمة` against the supplied design source before finalizing any transliteration.
  - Functionality: gallery/lightbox navigation, close behavior, CTA, and invalid-slug handling work.
  - Assets: all 32 original numbered scans are available in `public/assets/brand-guides/markiz/` and mapped by `src/lib/media.ts`. Searched the entire project and inspected rendered reference assets: there is no standalone hero wordmark file. The live hero wordmark is rendered as the exact Arabic name `مركز الرشاد` in Cairo bold, RTL; the separate ornate partner-logo artwork was not misused as a substitute and no original artwork was fabricated.
  - Tests: desktop/mobile visual comparison; verify Arabic glyphs/direction and font rendering; inspect guide pages; test lightbox keyboard/touch controls and CTA.

### 9. Packages / Pricing

- [ ] **In progress — Packages**
  - URL: inferred `https://masteera.lovable.app/pricing`.
  - Original components: `src/routes/pricing.tsx`; `src/components/site/PageHero.tsx`; `PricingPlans.tsx`; `CtaBand.tsx`; package data in `src/lib/content.ts`.
  - Required modifications: compare three package tiers, monthly content counts, shared inclusions, tier-specific features, bonuses, exclusions, price display (including “price on request”), emphasis, and mobile layout to reference. The Arabic client-logo label question is tracked under Portfolio.
  - Reference observations: Brand Starter, Brand Growth and Brand Performance show 10, 20 and 30 content pieces/month, respectively; all three currently show Holiday posters and Juma posters as included free. All list “price on request.”
  - Functionality: package selection/enquiry actions prefill or route correctly; no misleading pricing/features; CTA works.
  - Assets: package reference pages `assets/references/packages-1.jpg` through `packages-4.jpg`; no other imagery assumed until verified.
  - Tests: desktop/mobile visual comparison; cross-check all plan details with reference; test each plan action and contact handoff.

### 10. Contact

- [ ] **In progress — Contact**
  - URL: inferred `https://masteera.lovable.app/contact`.
  - Original components: `src/routes/contact.tsx`; `src/components/site/PageHero.tsx`; `WorkflowSteps.tsx`; shared form controls; contact data in `src/lib/content.ts`.
  - Required modifications: compare contact details, form, selector choices, workflow/service terms, validation states, layout, and mobile behavior against reference.
  - Functionality: required fields validate; message and plan are included in the generated email; `mailto:`, `tel:` links target correct values; workflow content is available on touch and keyboard.
  - Assets: Lucide icons; no bespoke image currently referenced by the route.
  - Reference observations: contact page shows Hargeisa-Somaliland, Mastera0018@gmail.com, Mastera.com and the two phone numbers; enquiry choices include three packages plus brand identity, media production and training. Form submit behavior has not been exercised.
  - Tests: desktop/mobile visual comparison; submit valid/invalid form data without sending externally (inspect generated mail link); test plan choices and all contact links.

## Completion record

### Current verification run — 2026-11-11

**Reference URLs supplied and inspected:** `/`, `/about`, `/services`, `/portfolio`, `/brands`, `/brands/heersare`, `/brands/carwo`, `/brands/markiz`, `/pricing`, `/contact`.

**Matched desktop viewport:** approximately 1250 × 700 CSS pixels. The live and local pages were reviewed route-by-route. The Home, About, Services, Portfolio, Brand directory, three brand details, Pricing and Contact are all **In progress**; none qualifies as complete because mobile, full-page and interaction testing has not been completed.

| Route | Visual comparison notes | Remaining verification / known gap |
|---|---|---|
| `/` | Desktop hero visually matches the reference in layout, typography, color, artwork and navigation. | Full-page and mobile comparison; exercise hero CTAs, marquee, cards, reveal behavior and gallery. |
| `/about` | Desktop hero layout and copy match. | Full-page and mobile comparison; test all approach interactions and CTAs. |
| `/services` | Desktop hero layout and copy match. | Full-page and mobile comparison; inspect all five service cards, industries and links. |
| `/portfolio` | Desktop hero and partner/gallery section introduction match. All ten client marks load, including the recovered USWA and Amal Ummah source WebPs. Lightbox opened (1/9), advanced to 2/9, and closed with Escape. | Full-page/mobile comparison; verify close button, backdrop and previous control. |
| `/brands` | Desktop hero and first Heersare card visually match. | Compare every card through the page and test each route card, responsive layout and Arabic text. |
| `/brands/heersare` | Desktop hero, cover artwork, tabs and copy match in the first viewport. All 24 live scans are now local and ordered. | Full-page/mobile comparison and lightbox checks. |
| `/brands/carwo` | Desktop hero, palette and cover artwork match in the first viewport. All 34 live scans are now local and ordered. | Full-page/mobile comparison and lightbox checks. |
| `/brands/markiz` | At 1280 × 720 the hero RTL wordmark uses Cairo and the cover begins at y=655 (reference: y=655); 32 original scans are ordered and available locally. Main section headings track the reference within a few pixels. | Mobile screenshot comparison, full-page responsive comparison, and lightbox checks. |
| `/pricing` | Desktop hero and included-features section match after route render settles. | Full-page/mobile comparison; verify all tier details and test each quote CTA. |
| `/contact` | Desktop hero, contact details and form introduction match. Local controls and options are present. | Full-page/mobile comparison; validate blank and valid input without sending; inspect generated mail handoff and test contact links. |

**Shared shell:** Header, active nav, logo, dark gradient/grid background and desktop spacing were visually compared on routes. Footer contents and route links appear in the local accessibility tree. Mobile menu, keyboard navigation, sticky/scroll state, external social destinations and all footer links still need direct interaction checks. Social URLs currently point at platform homepages because business profile URLs were not included in the project assets.

**Assets investigation:** Searched the full project, including hidden/untracked files while excluding dependencies and build output. No generated asset manifests or standalone Markiz hero wordmark file exist. The transparent partner logo `public/assets/partners/markiz-rashaad.png` is a distinct ornate lockup; live hero text is the Arabic name `مركز الرشاد`, rendered in Cairo bold, RTL. `public/assets/references/guide-01.jpg` through `guide-19.jpg` are mixed general references/social material, not the brand guide scans. The exact missing numbered scans were 24 Heersare pages, 34 Carwo pages, and 32 Markiz pages. All were bundled from their live rendered brand pages and copied unchanged into `public/assets/brand-guides/{heersare,carwo,markiz}/`. No brand artwork was fabricated.

**Build and routing test:** `pnpm.cmd run build` passes (client, SSR and Nitro output); `pnpm.cmd test` passes (1 file, 1 test). `pnpm.cmd exec eslint . --rule 'prettier/prettier: off'` exits successfully with 0 errors and 6 Fast Refresh export warnings in shared UI components. Thus the reported 822 findings are Prettier formatting findings, not 822 substantive lint errors; no mass-format was applied. The initial `pnpm.cmd run lint -- --rule ...` invocation treated the flag as a path, so the successful direct ESLint invocation above was used for classification.

**Additional functional evidence:** Portfolio lightbox opened at item 1/9, Next advanced to item 2/9, and Escape closed it. The homepage marquee has two groups with the second `aria-hidden`, a 40s animation, all images loaded, and a changing transform between samples. Portfolio image inspection found and fixed the two missing partner marks. Blank contact submission triggered required-field validation; mobile menu opened and navigated to Contact in the preceding pass. Markiz desktop at 1280 × 720: Cairo, `dir=rtl`, text `مركز الرشاد`; the first 1217 × 608 cover begins at y=655, matching the live reference at y=655, and Brand overview is within 1px vertically.

**Still outstanding:** full-page and systematic mobile viewport comparison for all ten routes; remaining brand-directory/card and CTA checks; all page links and contact mail handoff; detailed verification of section interactions against live behavior. Therefore every page remains **In progress**.

For each page, before changing its status to **Completed**, record:

- Reference URL and date checked.
- Desktop viewport and screenshot comparison result.
- Mobile viewport and screenshot comparison result.
- Functional checks completed, including route-specific interactions.
- Remaining defects or `None`.

Do not mark a page completed based only on code review, a successful build, or homepage verification. Work through the pages above in order and keep unfinished pages visible in this checklist.
