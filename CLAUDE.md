# Waypoint

Marketing site for Waypoint, built with Astro (TypeScript strict) and deployed to Cloudflare Workers as a static build.

## Commands

- `npm run dev`: Start the local dev server
- `npm run build`: Type-check with `astro check`, then build to `dist/`
- `npm run preview`: Preview the production build
- `npm run deploy`: Build, then deploy with `wrangler deploy` (config in `wrangler.jsonc`)

## Structure

- `src/layouts/BaseLayout.astro`: Base layout with header, footer and meta tags
- `src/data/navigation.ts`: Main menu and footer links, the single place to change navigation
- `src/pages/`: One file per page, see the page list below
- `src/components/`: Shared components, see the component list below
- `src/styles/global.css`: Global styles, light mode only
- `public/images/`: Logos and the cream logo mark used faded in the page hero (`waypoint-mark-cream.webp`, cropped from the cream logo and enlarged). Logos (`waypoint-logo-green.webp` in the header, top left, and `waypoint-logo-cream.webp` in the footer, hard right on the same row as the footer links)
- `content-source/`: Source copy from Wes (original .docx and the markdown conversion). Never part of the built site
- `scripts/check-dist.mjs`: Runs after every build and fails it if source files, internal section labels or Google Drive/Notion links appear in `dist/`

## Pages

Page structure follows the "Navigation and reading guide" in the content source. Every page opens with a `PageHero` band holding a keyword-led H1, a one-line strapline and a Get in touch button (not on the contact page). The page `<title>` matches the H1.

- `/`: Home (page 1), H1 "Alternative provision in Shoreham-by-Sea"
- `/discover-waypoint/`: Discover Waypoint (page 2), H1 "Practical, hands-on alternative provision"
- `/for-schools/`: For schools (page 3), H1 "Alternative provision for schools and SENCos"
- `/for-local-authorities/`: For local authorities (page 7), H1 "Alternative provision for local authorities"
- `/parents-and-carers/`: Parents and carers (page 4), H1 "Part-time alternative provision for your child"
- `/home-education/`: Home education (page 6), H1 "Home education group in Shoreham-by-Sea"
- `/for-young-people/`: For young people (page 5), H1 "Hands-on projects for young people"
- `/fees/`: Placement arrangements and fees (page 8), H1 "Fees and placement arrangements"
- `/how-referrals-work/`: How referrals work (page 9), H1 "How alternative provision referrals work"
- `/policies/`: Policies and provider information (page 10), H1 "Policies and provider information"
- `/contact/`: Get in touch (page 11), H1 "Contact Waypoint"

## Headings and SEO

H1s and H2s are written for search as well as for readers, so they may differ from the headings in the content source. Body copy stays word for word.

- **H1:** Keyword-led and short, in the `PageHero` band. Say what Waypoint is (alternative provision), who it is for, and where (Shoreham-by-Sea) where it fits.
- **First H2:** Carries the page's big headline from the source, for example "Big ideas. Real experiences. Something to be proud of." on Home, followed by the intro copy.
- **Other H2s:** Short, descriptive and keyword-friendly, for example "Hands-on projects and activities" rather than "What could you make happen?".
- **Home Education:** Never describe Discovery as alternative provision or intervention. It is enrichment for home-educated young people.
- **Facts only:** Headings and straplines must only state facts that are in the source. Waypoint is preparing to open, so never imply it is already operating.

Footer links point at these anchors, which must exist once the content is added: `/contact/#visits`, `/policies/#raising-a-concern` and `/policies/#accessing-information`. Complaints and Privacy notice link to `/policies/` until approved documents exist.

## Colour scheme

Option B, outdoors and making. Tokens live in `src/styles/global.css`, so use the role variables (`--colour-brand`, `--colour-surface` and so on) rather than hex values. There is no accent colour (mustard and terracotta were tried and dropped).

- **Forest green #2F5D50:** Brand colour, hero band, primary buttons, links, card and panel borders, menu underlines, the footer and occasional call-to-action sections (`<Section brand>`)
- **Cream #FAF6EE:** Page background, box background on white sections, and text (including headings) on forest green
- **White #FFFFFF:** Alternate section background (`<Section alt>`) and box background on cream sections. Sections alternate cream and white
- **Sage #DCE6DA:** Menu bar, the line under the hero band and the accent button (forest green text) on forest green. Never a section or box background. The thin (3px) full-width line at the top of every H2 section, and above the footer, uses the deeper sage border tone (`--colour-border`, #C9D6C6)
- **Charcoal #232B28:** Body text and focus outlines (cream outlines on forest green)

Two rules apply everywhere:

- **Headings and bold:** All headings (H1 to H4) and bold text (`strong`, `b`, and the labels in `InfoPanel`) are forest green, except on forest green backgrounds, where they are cream. Set globally in `global.css`.
- **Boxes:** Boxes take the opposite colour to the section they sit on, white on cream and cream on white, with a thin sage border and forest green accents. Boxes inside a box (cards in a `CardGroup`) flip back to the section colour. This is handled by the `--box-bg` and `--box-inner-bg` variables, so use them for any new box component rather than a fixed colour.

## Components

Use these components rather than one-off markup.

- `PageHero`: Forest green band at the top of every page, with a sage line along its bottom edge (no line between the menu and the band) and the faded logo mark at a diagonal behind the text, with the H1, strapline and a sage Get in touch button. Pass `hideCta` on the contact page.
- `Header` and `Footer`: Site chrome. The header is sticky and full-width, with a large logo hard left as the standout element, the menu and Get in touch hard right, a keyboard-accessible Schools & Professionals dropdown, a burger menu below 90rem (1440px), so smaller laptops show the logo, Get in touch and the menu button and an always-visible Get in touch button. The footer has no company number, address, registered office or cookie banner.
- `Section`: Page section with an optional anchor `id`, optional `title` (h2), `alt` (white background) and `brand` (forest green, for occasional calls to action such as the closing Get in touch, with an accent button). Each one has a full-width sage line along its top, except straight after the page hero. Wrap every H2 block in a `Section` so the lines stay consistent. Anchors clear the sticky header automatically.
- `Button`: Link styled as a button, `variant="primary"`, `"secondary"` or `"accent"` (sage with forest green text, for forest green backgrounds). Never render a button without a real destination.
- `CardGroup`: Panel that holds every group of boxes, in the opposite colour to the section, with `columns={2}` (four boxes, 2x2) or `columns={3}` (three or six) and an optional `footer` slot for a link under the boxes. Always use it for groups of cards, on a cream or white section.
- `RouteCard`: Audience route card with a heading link and one paragraph. Always inside a `CardGroup`.
- `InfoPanel`: Facts panel, in the opposite colour to the section with a forest green left edge. Pass `facts` as label and value pairs, or slot in content.
- `ActivityCard`: Activity card with one paragraph, always inside a `CardGroup`. The optional `image` is for real photographs only, and the image slot is not rendered without one.
- `FaqItem`: Accessible expand and collapse question, built on `<details>`.
- `IllustrativeExample`: Box for illustrative or fictional examples such as Alex, with a visible `label` that stays attached on every screen size.
- `StepList` and `Step`: Numbered stages. Wrap `<Step title="...">` items in `<StepList>`.

## Pre-launch search engine blocking

While the site is being built it is hidden from search engines by two things, `<meta name="robots" content="noindex, nofollow">` in `src/layouts/BaseLayout.astro` and `public/robots.txt` disallowing everything. Both must be removed at launch, never one without the other.

## Light mode

The site is light mode only. Do not add `prefers-color-scheme: dark` styles, and keep the `<meta name="color-scheme" content="light">` tag in the layout.

## House rules for content and copy

These rules apply to all content and copy on the site.

- **Spelling:** Use British English throughout.
- **Heading case:** Use sentence case, capitalising only the first word (proper nouns such as Waypoint excepted).
- **Heading length:** Keep headings short and punchy, and put the explanation in the body text.
- **Dashes:** Never use em dashes.
- **Emojis:** Never use emojis.
- **Percentages:** Use the % symbol, not the word "percent".
- **Colons in sentences:** In running sentences, use a comma rather than a colon.
- **Labelled bullets:** In bullets with a label and colon, start the text after the colon with a capital letter.
- **Lead-in text:** Never put bullets directly after a heading, always include lead-in text first.
- **Content boxes:** Avoid groups of four content boxes, use three or six instead.
- **Box copy:** Use one paragraph per content box.
- **Hyphens:** Don't remove hyphens from words when editing.

## Waypoint content rules

These rules govern how copy from the source document is used on the site.

- **Single source:** `content-source/waypoint-content-v1.md` is the single source of copy. It has pages 1 to 11, a parent introduction and a footer section.
- **What is published:** Only text under "WEBSITE COPY" appears on the site, plus FORM WORDING, SUCCESS MESSAGE and FAILURE MESSAGE on the contact page. Use it word for word apart from the house style fixes in this file.
- **Instructions, not copy:** "INTERNAL BUILD NOTES" and "BUTTONS AND DESTINATIONS" are instructions to follow and are never published.
- **Internal sections:** Everything from "Decisions before publication" onwards, including all GAP, handover and editorial sections, is internal and must never appear on the site.
- **Links:** Never publish any Google Drive or Notion links from the document.
- **Unfinished items:** Never publish TBC labels, placeholders, hold notices, draft policy links, empty buttons or download buttons for files that don't exist.
- **Booking and payment:** No booking or payment controls anywhere.
- **Images:** No stock or AI-generated images of people, sessions or venues. Image slots stay hidden until real photos are supplied.
- **Illustrative examples:** Labels marking examples as illustrative or fictional (such as Alex) must stay visible and attached to the example on every screen size.
- **Mis-formatted headings:** Some paragraphs in the source are wrongly formatted as headings (long sentences starting with `##`). Treat these as body text or card content, not headings.
- **Em dashes:** Where the pattern is "Title — text", show the title as a card heading or bold label and the text as body. Elsewhere replace the em dash with a comma or full stop. Keep en dashes in ranges such as 8–16 and 9:00am–2:30pm.
- **Four cards or routes:** Where the source has four cards or routes, use a 2x2 grid on desktop, not four in a row. This is the agreed exception to the "three or six content boxes" house rule.
