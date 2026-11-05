# Waypoint

Marketing site for Waypoint, built with Astro (TypeScript strict) and deployed to Cloudflare Workers as a static build.

## Commands

- `npm run dev`: Start the local dev server
- `npm run build`: Type-check with `astro check`, then build to `dist/`
- `npm run preview`: Preview the production build
- `npm run deploy`: Build, then deploy with `wrangler deploy` (config in `wrangler.jsonc`)

## Structure

- `src/layouts/BaseLayout.astro`: Base layout with header, footer and meta tags
- `src/components/`: Shared components (`Header.astro`, `Footer.astro`)
- `src/pages/`: One file per page (Home, About, Services, Contact, 404)
- `src/styles/global.css`: Global styles, light mode only
- `content-source/`: Source copy from Wes (original .docx and the markdown conversion). Never part of the built site
- `scripts/check-dist.mjs`: Runs after every build and fails it if source files, internal section labels or Google Drive/Notion links appear in `dist/`

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
