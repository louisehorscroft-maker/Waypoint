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
- `public/images/`: Logos and the cream logo mark used faded in the page hero (`waypoint-mark-cream.webp`, cropped from the cream logo and enlarged). Photo of Wes (`wes-horscroft-480.webp` and `-960.webp`, metadata stripped) in Meet Wes on Home, a stand-in until a final photo is chosen. Logos (`waypoint-logo-blue.webp` in the header, top left, recoloured from Wes's green file, and `waypoint-logo-cream.webp` in the footer, hard right on the same row as the footer links)
- `content-source/`: Source copy from Wes (original .docx and the markdown conversion). Never part of the built site
- `scripts/check-dist.mjs`: Runs after every build and fails it if source files, internal section labels or Google Drive/Notion links appear in `dist/`

## Pages

Page structure follows the "Navigation and reading guide" in the content source. Every page opens with a `PageHero` band holding a keyword-led H1, a one-line strapline and a Get in touch button (not on the contact page). The page `<title>` matches the H1.

- `/`: Home (page 1), H1 "Alternative provision in Shoreham-by-Sea"
- `/about/`: About (page 2, "Discover Waypoint" in the source, renamed About in the menu as the standard label), H1 "About Waypoint"
- `/for-schools/`: For schools (page 3), H1 "Alternative provision for schools and SENCos"
- `/for-local-authorities/`: For local authorities (page 7), H1 "Alternative provision for local authorities"
- `/parents-and-carers/`: Parents and carers (page 4), H1 "Part-time alternative provision for your child"
- `/home-education/`: Home education (page 6), H1 "Home education group in Shoreham-by-Sea"
- `/for-young-people/`: For young people (page 5), H1 "Hands-on projects for young people"
- `/fees/`: Placement arrangements and fees (page 8), H1 "Fees and placement arrangements"
- `/how-referrals-work/`: How referrals work (page 9), H1 "How alternative provision referrals work"
- `/policies/`: Policies and provider information (page 10), H1 "Policies and provider information"
- `/contact/`: Get in touch (page 11), H1 "Contact Waypoint"

## Headings, type sizes and SEO

The site uses only five text sizes, set as tokens in `global.css` (`--text-h1`, `--text-h2`, `--text-strapline`, `--text-h3`, `--text-body`). Never add another size. Menu, buttons, cards, footer and labels all use the normal text size.

- **H1:** Keyword-led and short, in the `PageHero` band, with a one-line strapline (strapline size) and a Get in touch button. Say what Waypoint is (alternative provision), who it is for, and where (Shoreham-by-Sea) where it fits.
- **H2:** A small uppercase label, like the Paddlesport site, short and keyword-friendly (for example "Projects and activities"). Pass it as `Section`'s `title`.
- **Strapline:** The big text directly under every H2, a short punchy line (for example "What could you make happen?"). Pass it as `Section`'s `strapline`. Every H2 must have one.
- **H3:** Sub-headings within a section, such as card titles.
- **Normal text:** Everything else.
- **Intros:** Every H2 is followed by its strapline and then an intro paragraph before any boxes, drawings or lists. Every H3 is followed by an intro paragraph.
- **Home Education:** Never describe Discovery as alternative provision or intervention. It is enrichment for home-educated young people.
- **Facts only:** Headings, straplines and copy must only state facts that are in the source. Waypoint is preparing to open, so never imply it is already operating.

Number ranges (8–16, 9:00am–2:30pm) and Shoreham-by-Sea never break across lines in H1s and straplines (handled by `KeepTogether`).

Footer links point at these anchors, which must exist once the content is added: `/contact/#visits`, `/policies/#raising-a-concern` and `/policies/#accessing-information`. Complaints and Privacy notice link to `/policies/` until approved documents exist.

## Colour scheme

Bright blue and coral (chosen after green, mustard and terracotta versions were tried and dropped; the site has no green at all). Tokens live in `src/styles/global.css`, so use the role variables (`--colour-brand`, `--colour-accent`, `--colour-surface` and so on) rather than hex values.

- **Blue #1D5FA8:** Brand colour, hero band, primary buttons, links, headings, icons, drawings, the photo frame block, the footer and occasional call-to-action sections (`<Section brand>`). Darker blue #164A84 for hover
- **Coral #FF7A66:** Accent, for the line under the hero band, card top edges, the `InfoPanel` edge, menu and footer link underlines, and the accent button (navy #12345A text, 4.94:1). Fills and edges only, never text
- **Sky #E3F0FB:** Menu bar
- **White #FFFFFF:** Every section background. Sections do not alternate colours
- **Mist #F4F8FC:** Very pale blue for boxes (`InfoPanel`, `CardGroup`, `IllustrativeExample`, the drawings strip), with no border. Cards inside a box are white with a thin pale blue border
- **Pale blue border #D3E3F3:** The thin (3px) full-width line at the top of every H2 section and above the footer, and card borders
- **Cream #FAF6EE:** Only text (including headings) on blue
- **Slate #1F2933:** Body text and focus outlines (cream outlines on blue)

The logo in the header is `waypoint-logo-blue.webp`, recoloured from Wes's green logo file. Ask Wes for an official blue version (ideally SVG) to replace it.

Two rules apply everywhere:

- **Headings and bold:** All headings (H1 to H4) and bold text (`strong`, `b`, and the labels in `InfoPanel`) are blue, except on blue backgrounds, where they are cream. Set globally in `global.css`.
- **Boxes:** Boxes are mist on the white page with no border, plus coral accents. Boxes inside a box (cards in a `CardGroup`) are white. This is handled by the `--box-bg` and `--box-inner-bg` variables, so use them for any new box component rather than a fixed colour.

## Components

Use these components rather than one-off markup.

- `PageHero`: Blue band at the top of every page, with a coral line along its bottom edge (no line between the menu and the band) and the faded logo mark at a diagonal behind the text, with the H1, strapline and a coral Get in touch button. Pass `hideCta` on the contact page.
- `Header` and `Footer`: Site chrome. The header is sticky and full-width, with a large logo hard left as the standout element, the menu and Get in touch hard right, a keyboard-accessible Schools & Professionals dropdown, a burger menu below 90rem (1440px), so smaller laptops show the logo, Get in touch and the menu button and an always-visible Get in touch button. The footer has no company number, address, registered office or cookie banner.
- `Section`: Page section with an optional anchor `id`, `title` (the small H2 label), `strapline` (the big text under it, required with a title) and `brand` (blue, for occasional calls to action such as the closing Get in touch, with an accent button). Pass `drawing` (an `Illustration` name), `drawingLabel` and `drawingSide` (`right` by default, or `left`) to show a line drawing opposite the H2, strapline and intro; put the intro (and any button that belongs with it) in `<Fragment slot="intro">`, and anything below (cards, panels) in the default slot. The drawing's box stretches to the same height as the text on desktop and sits below it, compact, on phones. Every H2 section has a line drawing or a real photo, alternating sides down the page. On blue `brand` sections the drawing turns cream with no box. A real photo can sit opposite the heading instead: put a `PhotoFrame` in `slot="photo"` (it follows `drawingSide`). Each one has a full-width pale blue line along its top, except straight after the page hero. Wrap every H2 block in a `Section` so the lines stay consistent. Anchors clear the sticky header automatically.
- `Button`: Link styled as a button, `variant="primary"`, `"secondary"` or `"accent"` (coral with navy text, for blue backgrounds). Never render a button without a real destination.
- `CardGroup`: Mist panel that holds every group of boxes, with `columns={2}` (four boxes, 2x2) or `columns={3}` (three or six) and an optional `footer` slot for a link under the boxes. Always use it for groups of cards,.
- `Card`: Plain content box with an H3 (optional `icon`) and one paragraph, white with a coral top edge. Always inside a `CardGroup`.
- `RouteCard`: Audience route card with a heading link and one paragraph. Always inside a `CardGroup`.
- `InfoPanel`: Facts panel, mist with a coral left edge. Each fact can take an `icon`. On a page, put it inside a `Section` with its own title, strapline and intro rather than giving the panel an H2.
- `KeepTogether`: Renders text with number ranges and Shoreham-by-Sea kept on one line. Used by `PageHero` and `Section` straplines. Pass `facts` as label and value pairs, or slot in content.
- `PhotoFrame`: Use for every real photo. The photo sits on an offset blue block with rounded corners (the same idea as the Paddlesport site). `side="left"` mirrors the block for photos on the right of the text; `ratio` and `position` control the crop.
- `ActivityCard`: Activity card with one paragraph and a coral top edge, always inside a `CardGroup`. The optional `image` is for real photographs only; until one exists, pass `drawing` and `drawingLabel` to show a line drawing above the text instead.
- `FaqItem`: Accessible expand and collapse question, built on `<details>`.
- `IllustrativeExample`: Box for illustrative or fictional examples such as Alex, with a visible `label` that stays attached on every screen size.
- `Icon`: Small blue line icons (`calendar`, `people`, `pin`, `tree`, `clipboard`, `heart`, `arrow`, `star`, `speech`, `mountain`), decorative and hidden from screen readers. Add new icons in the same 24px, 1.75 stroke, round-ended style.
- `Illustration`: Simple blue line drawings (`basecamp`, `chain-reaction`, `survival-village`, `campfire`, `building`, `map-pin`, `signpost`, `idea`, `report`, `chat`, `game-studio`, `day`, `helping`, `steps`, `setting`) in the logo's line style, with a wavy ground line, always with a `label` describing the drawing. Wes loves these. Simple stick people are allowed (Wes asked for them), with no faces or real-person detail; never draw a real session or the venue. Check new drawings with Wes.
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

## About Wes

Facts supplied by Lou (not in the content source), which may be used alongside it:

- Wes Horscroft, founder of Waypoint
- Director of Rugby at Cardinal Newman Catholic School in Hove, where he set up the Newman Rugby Academy and gained it RFU ACE status (Lou: "incredible" achievement; sell it)
- RFU ACE (Academy, Colleges and Education) is England Rugby's programme for talented Year 12 and 13 players aiming at the elite game, bridging academy and professional rugby. The Newman Rugby Academy plays in the RFU ACE League (partner club Harlequins in the 2025/26 listings). Don't claim counts or rankings (for example "one of only X") without a source
- Teaching PE since 2007, with a long background in sports coaching (write "since 2007" rather than a number of years, so it never goes out of date)
- Raced for Great Britain at the IVF Va'a World Sprint Championships in Hawaii in 2024 (outrigger canoe racing)

Sell Wes confidently on Home and About, but don't add other claims without a source. His paddling is about him, not Waypoint: the first term is land-based, so never imply Waypoint offers paddling.

## Waypoint content rules

These rules govern how copy from the source document is used on the site.

- **Single source:** `content-source/waypoint-content-v1.md` is the single source of copy. It has pages 1 to 11, a parent introduction and a footer section.
- **What is published:** Only content from "WEBSITE COPY" appears on the site, plus FORM WORDING, SUCCESS MESSAGE and FAILURE MESSAGE on the contact page.
- **Framework, not verbatim:** Wes's WEBSITE COPY is the framework. Rewrite it to be clearer, warmer and punchier, and to fit the heading and intro rules, but keep his meaning, keep every fact accurate and add no new facts, claims or promises. FORM WORDING, SUCCESS MESSAGE and FAILURE MESSAGE stay word for word.
- **Instructions, not copy:** "INTERNAL BUILD NOTES" and "BUTTONS AND DESTINATIONS" are instructions to follow and are never published.
- **Internal sections:** Everything from "Decisions before publication" onwards, including all GAP, handover and editorial sections, is internal and must never appear on the site.
- **Links:** Never publish any Google Drive or Notion links from the document.
- **Unfinished items:** Never publish TBC labels, placeholders, hold notices, draft policy links, empty buttons or download buttons for files that don't exist.
- **Booking and payment:** No booking or payment controls anywhere.
- **Images:** No stock or AI-generated images of people, sessions or venues. Image slots stay hidden until real photos are supplied. Our own simple stick-figure line drawings (`Illustration`) are allowed.
- **Tone:** Wes dislikes the polished, slogan-style lines in the source (it was drafted with ChatGPT), for example "Big ideas. Real experiences. Something to be proud of." and "Find the right route for you.". Write straplines and copy in plain, specific, down-to-earth language that says what actually happens. Avoid slogans, rule-of-three taglines and vague abstractions.
- **Illustrative examples:** Labels marking examples as illustrative or fictional (such as Alex) must stay visible and attached to the example on every screen size.
- **Mis-formatted headings:** Some paragraphs in the source are wrongly formatted as headings (long sentences starting with `##`). Treat these as body text or card content, not headings. Source headings are a guide only; site headings follow the rules in "Headings, type sizes and SEO".
- **Em dashes:** Where the pattern is "Title — text", show the title as a card heading or bold label and the text as body. Elsewhere replace the em dash with a comma or full stop. Keep en dashes in ranges such as 8–16 and 9:00am–2:30pm.
- **Four cards or routes:** Where the source has four cards or routes, use a 2x2 grid on desktop, not four in a row. This is the agreed exception to the "three or six content boxes" house rule.
