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
- `public/`: Favicons supplied by Lou (`favicon.svg`, `favicon.ico` with 16, 32 and 48px, `apple-touch-icon.png` 180px, `icon-192.png` and `icon-512.png` for `site.webmanifest`), the blue circle with the cream logo mark. Linked in `BaseLayout` with a blue `theme-color`
- `content-source/`: Source copy from Wes (original .docx and the markdown conversion). Never part of the built site
- `scripts/check-dist.mjs`: Runs after every build and fails it if source files, internal section labels or Google Drive/Notion links appear in `dist/`, if any internal link or #section link is broken, or if any search title or description breaks the limits. It also warns about pre-launch placeholders
- **Links go to the most specific place:** Point buttons and links at the exact section that answers them (for example reporting links to `/for-schools/#reporting`, fees links from schools to `/fees/#school-funded-places`), not just the top of a page

## Pages

Page structure follows the "Navigation and reading guide" in the content source. Every page opens with a `PageHero` band holding a keyword-led H1, a one-line strapline and a Get in touch button (not on the contact page).

- `/`: Home (page 1), H1 "Alternative provision in Shoreham-by-Sea"
- `/about/`: About (page 2, "Discover Waypoint" in the source, renamed About in the menu as the standard label), H1 "About Waypoint". Sections: What Waypoint is, Activities, Reporting (high up, as the differentiator, but short: intro and a link), Our approach, Learning (short, with a link), Is Waypoint a good fit. About stays a light overview; the detailed reporting and learning content lives on For Schools. No typical day (it lives on Parents and carers only, so it isn't repeated). No Meet Wes or Our setting (the venue line is folded into What Waypoint is)
- `/for-schools/`: For schools (page 3), H1 "Alternative provision for schools and SENCos". Sections: For schools (with jump links), At a glance, What a place provides, For headteachers (#for-headteachers), For SENCos (#for-sencos), Support and goals (with the six-stage "How a project becomes learning" example), Reporting (six cards on what a report covers, the fictional Alex weekly update and the Alex journey), Arranging a placement (#arranging-a-placement), Discuss a pupil. Contact buttons pass `?purpose=visit` or `?purpose=placement` for the contact form to preselect later
- `/for-local-authorities/`: For local authorities (page 7), H1 "Alternative provision for local authorities". One direct-entry page for commissioners and Virtual Schools: For local authorities, What a placement adds, At a glance (with the "invitation to talk, not a framework, endorsement or contract" note), Suitability, Evidence and reporting, Communication (with For Virtual Schools), Provider information, Arranging a placement (steps with Led by), Talk to us. Never invent numbers, contracts, frameworks, council logos or approvals
- `/parents-and-carers/`: Parents and carers (page 4), H1 "Part-time alternative provision for your child". One welcoming page for all families (never split by need): Parents and carers, What they might love (three role cards and the Survival Village example), Two routes (two route cards, as Wes's notes ask), Meet Wes (short, with photo and a link to Home), A day at Waypoint (the only typical-day section on the site: first-day preparation plus five steps), Joining in, Keeping you updated, Questions parents ask (FAQs), Ask a question
- `/home-education/`: Home education (page 6), H1 "Home education group in Shoreham-by-Sea". Home education days as an addition to home education (never alternative provision, intervention, targets or a behaviour programme): Home education at Waypoint, At a glance, Why Waypoint (three cards and the labelled Build the Basecamp example), The group, The day (links to the typical day on Parents), Costs and booking (proposed price on Fees, no bookings yet), Ask about home education (contact link passes `?purpose=home-education`)
- `/for-young-people/`: For young people (page 5), H1 "Hands-on projects for young people". Written to young people (8–16, mainly 9–13, not babyish), never defined by behaviour: What Waypoint is, Projects (four activity cards with drawings), Your strengths, Meet Wes (first person, with photo), Your first day (steps), Good questions (FAQs, including the safety and worries answers), Want to try Waypoint (points them to a parent, carer or school). No contact form or data collection, so the hero hides the Get in touch button
- `/fees/`: Placement arrangements and fees (page 8), H1 "Fees and placement arrangements". Sections: Fees (two price cards), School-funded places (#school-funded-places: what's included, booking over twelve delivery weeks, absence, invoicing, ending early), Home education places (#home-education-places), Before you book, Ask about costs. Both prices (£100 school-funded, £85 home education, per young person per day) are proposed launch prices: always say so, make no tax claim, never mention the possible future £125 offer, and take no bookings until the commercial terms are final
- `/how-referrals-work/`: How referrals work (page 9), H1 "How alternative provision referrals work". Sections: Referrals (two route cards linking to the sections below), School-funded places (six steps with Led by, including the list of information that may be needed), Home education (ask directly, no referral), Parents and carers (if your child is at school), Ask a question. No live referral form, upload or download; detailed records go through a secure route agreed later
- `/policies/`: Policies and provider information (page 10), H1 "Policies and provider information". Sections: Policies, For families (six cards naming each policy area, shared on request, since none are approved yet), For schools and commissioners (labelled bullets and a Request provider information button passing `?purpose=provider`), Raising a concern (#raising-a-concern, footer Safeguarding link, points to /complaints/), Accessing information (#accessing-information, footer Accessibility link). Link only current approved documents, under their real titles, once they exist; never link drafts
- `/contact/`: Get in touch (page 11), H1 "Contact Waypoint". Sections: Get in touch (call or email panel, plus the enquiry form), Visits (#visits, the footer anchor), Making a referral, Existing placements. The form (`ContactForm`) sends through Web3Forms in the background: it keeps the visitor's text and shows the FAILURE MESSAGE if sending fails, and only goes to the thank-you page once the service confirms the email was sent. `?purpose=` preselects the role, and "School or organisation" only shows for professional roles. FORM WORDING is word for word, except that the example placeholder no longer mentions Discovery
- `/complaints/`: Complaints and concerns (linked from the footer). A simple page using only what the source's "Raising a concern" copy says: making a complaint (contact details from `src/data/contact.ts`), concerns about safety (contact us straight away; 999 if a child is in immediate danger; link to the young people's trusted-adult answers), if it's about your usual contact, and Need help. Wes's complaints procedure, safeguarding contact and alternative route are not approved yet: never invent them, and link the approved procedure and verified contacts here once they exist
- `/privacy/`: Website privacy notice (footer, contact form and Policies link here). Written to match what the site actually does: enquiry form via Web3Forms, hosting on Cloudflare, no cookies, analytics or third-party fonts and scripts (checked in a browser). If you add analytics, cookies, embeds or another service, update this page. Needs Wes's or legal sign-off before launch, plus the real email address and legal entity name
- `/accessibility/`: Accessibility statement (footer link). Every claim on it was tested in November 2026: axe (WCAG 2.2 AA and best practice) on all pages at 1440px and 375px found no issues, plus keyboard, skip link, reduced motion and 400% zoom checks. Re-run the checks and update the date whenever pages, components or colours change, and keep the site free of cookies, pop-ups and autoplay, as the page says
- `/safeguarding/`: Safeguarding (footer link). In an emergency (999), worried about a young person (contact us, or go direct if it's about your usual contact), our policies (six cards from `src/data/safeguarding.ts`, "Available on request" until an approved `href` is added), training and checks (six placeholders, "Details to be added", until Wes confirms DBS, DSL training, safeguarding training, first aid, qualifications and insurance; only enter facts he can evidence; the build warns while any remain), other places to get help (West Sussex Integrated Front Door 01403 229900, Emergency Duty Team 0330 222 6664, NSPCC 0808 800 5000, Childline 0800 1111, checked on official sites in November 2026: re-check before launch and yearly), for young people (trusted-adult route), how we keep young people safe, questions. Wes's Designated Safeguarding Lead and verified contacts aren't approved yet: add them in #who-to-contact once they are, never invent them
- `/thank-you/`: Branded thank-you page shown after a successful enquiry, with the SUCCESS MESSAGE word for word. Not in the menu

## Headings, type sizes and SEO

The site uses only five text sizes, set as tokens in `global.css` (`--text-h1`, `--text-h2`, `--text-strapline`, `--text-h3`, `--text-body`). Never add another size. Menu, buttons, cards, footer and labels all use the normal text size.

- **H1:** Keyword-led and short, in the `PageHero` band, with a one-line strapline (strapline size) and a Get in touch button. Say what Waypoint is (alternative provision), who it is for, and where (Shoreham-by-Sea) where it fits.
- **H2:** A small uppercase label, like the Paddlesport site, short and keyword-friendly (for example "Projects and activities"). Pass it as `Section`'s `title`.
- **Strapline:** The big text directly under every H2, a short punchy line (for example "What could you make happen?"). Pass it as `Section`'s `strapline`. Every H2 must have one.
- **H3:** Sub-headings within a section, such as card titles.
- **Normal text:** Everything else.
- **Intros:** Every H2 is followed by its strapline and then an intro paragraph before any boxes, drawings or lists. Every H3 is followed by an intro paragraph.
- **No set day:** Never mention Tuesday, any other named day or "one day a week". The source plans Tuesdays, but Waypoint may run up to five days a week, so say "a day at Waypoint" or "placement" instead. Don't write "part-time days" (it sounds like half a day); "part-time" is fine only for a placement or the provision. The planned hours (9:00am–2:30pm) can stay.
- **Home education:** Never describe it as alternative provision or intervention. It is enrichment for home-educated young people.
- **No "Discovery":** Wes has dropped the name Discovery (and "Home Education Discovery") used in the source. Just say home education, home education places or days for home-educated young people.
- **Facts only:** Headings, straplines and copy must only state facts that are in the source. Waypoint is preparing to open, so never imply it is already operating.

### Search titles, descriptions and sharing

- **Titles and descriptions:** All live in `src/data/seo.ts`, one entry per page. Titles are 60 characters or fewer, keywords and location first (alternative provision, Shoreham-by-Sea, West Sussex, ages 8–16), with "| Waypoint" last. Descriptions are 120 to 155 characters, in house style and using facts only. Every one must be unique. The build fails if any break these rules. Add an entry for every new page.
- **Never in search results:** The thank-you and 404 pages pass `noindex` to `BaseLayout`, which stays after launch.
- **Sitemap:** `@astrojs/sitemap` builds `sitemap-index.xml` (leaving out the thank-you and 404 pages), and `robots.txt` points to it. At launch, keep the Sitemap line in robots.txt.
- **FAQ data:** Parents and carers and For young people keep their FAQs in a `faqs` list in the page, which drives both the visible questions and FAQPage structured data (passed to `BaseLayout`'s `head` slot). Edit the list, not the markup.
- **Section labels:** Where it reads naturally, H2 labels carry keywords (for example "About our alternative provision", "Ages, hours and areas", "Alternative provision fees").
- **Social sharing:** Open Graph and Twitter tags are on every page. The share image is `public/images/waypoint-social.png` (1200 by 630).
- **Organisation details:** Home has EducationalOrganization structured data (name, areas served from `src/data/areas.ts`, location, founder). It has no address or contact details until they're verified.
- **The live address:** Canonical links, `og:url`, the share image and the structured data URL use `site` in `astro.config.mjs` (https://waypoint-ap.co.uk).

Number ranges (8–16, 9:00am–2:30pm) and Shoreham-by-Sea never break across lines in H1s and straplines (handled by `KeepTogether`).

Footer links point at these anchors, which must exist once the content is added: `/contact/#visits` and `/policies/#raising-a-concern`. Safeguarding links to `/safeguarding/` and Accessibility information to `/accessibility/`. Complaints links to `/complaints/` and the Privacy notice to `/privacy/`.

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
- `Section`: Page section with an optional anchor `id`, `title` (the small H2 label), `strapline` (the big text under it, required with a title) and `brand` (blue, for occasional calls to action such as the closing Get in touch, with an accent button). Pass `drawing` (an `Illustration` name), `drawingLabel` and `drawingSide` (`right` by default, or `left`) to show a line drawing opposite the H2, strapline and intro; put the intro (and any button that belongs with it) in `<Fragment slot="intro">`, and anything below (cards, panels) in the default slot. The drawing's box stretches to the same height as the text on desktop and sits below it, compact and centred, on phones. Every H2 section has a line drawing or a real photo, alternating sides down the page. On blue `brand` sections the drawing turns cream with no box. A real photo can sit opposite the heading instead: put a `PhotoFrame` in `slot="photo"` (it follows `drawingSide`). Sections with no drawing or photo beside the heading let the intro text run the full page width. Text placed below boxes, panels or lists (a `.prose` block in the default slot) also runs the full page width, set in `global.css`. Each one has a full-width pale blue line along its top, except straight after the page hero. Wrap every H2 block in a `Section` so the lines stay consistent. Anchors clear the sticky header automatically.
- `Button`: Link styled as a button, `variant="primary"`, `"secondary"` or `"accent"` (coral with navy text, for blue backgrounds). Never render a button without a real destination.
- `CardGroup`: Mist panel that holds every group of boxes, with `columns={2}` (four boxes, 2x2) or `columns={3}` (three or six) and an optional `footer` slot for a link under the boxes. Always use it for groups of cards.
- `Card`: Plain content box with an H3 (optional `icon`) and one paragraph, white with a coral top edge. Always inside a `CardGroup`.
- `RouteCard`: Audience route card with a heading link and one paragraph. Always inside a `CardGroup`.
- `InfoPanel`: Facts panel, mist with a coral left edge. Each fact can take an `icon`. On a page, put it inside a `Section` with its own title, strapline and intro rather than giving the panel an H2.
- `KeepTogether`: Renders text with number ranges and Shoreham-by-Sea kept on one line. Used by `PageHero` and `Section` straplines. Pass `facts` as label and value pairs, or slot in content.
- `PhotoFrame`: Use for every real photo. The photo sits on an offset blue block with rounded corners (the same idea as the Paddlesport site). `side="left"` mirrors the block for photos on the right of the text; `ratio` and `position` control the crop.
- `ActivityCard`: Activity card with one paragraph and a coral top edge, always inside a `CardGroup`. The optional `image` is for real photographs only; until one exists, pass `drawing` and `drawingLabel` to show a line drawing above the text instead.
- `FaqItem`: Accessible expand and collapse question, built on `<details>`.
- `IllustrativeExample`: Box for illustrative or fictional examples such as Alex, with a visible `label` that stays attached on every screen size.
- `Icon`: Small blue line icons (`calendar`, `people`, `pin`, `map`, `tree`, `clipboard`, `heart`, `arrow`, `star`, `speech`, `mountain`, `phone`, `mail`), decorative and hidden from screen readers. Add new icons in the same 24px, 1.75 stroke, round-ended style.
- `Illustration`: Simple blue line drawings (`basecamp`, `chain-reaction`, `survival-village`, `campfire`, `building`, `map-pin`, `signpost`, `idea`, `report`, `chat`, `game-studio`, `day`, `helping`, `steps`, `setting`, `school`, `meeting`) in the logo's line style, with a wavy ground line, always with a `label` describing the drawing. Wes loves these. Simple stick people are allowed (Wes asked for them), with no faces or real-person detail; never draw a real session or the venue. Check new drawings with Wes.
- `StepList` and `Step`: Numbered stages. Wrap `<Step title="...">` items in `<StepList>`. Pass `who` to show a "Led by:" label, so process steps always say who leads them.

## Deploying

Cloudflare Workers Builds deploys every push to `main` automatically (free plan, one build at a time). Push only to `main`, and group small changes into fewer commits to keep the build queue short. If builds sit in "Queued" with nothing running, it's a Cloudflare-side stall: a fresh push or Retry in the dashboard usually restarts it, and `npm run deploy` from a local copy deploys directly without the queue.

## Before launch: contact details and safeguarding

Fill in Wes's training and checks in `src/data/safeguarding.ts`, and add `href`s for approved policies.

### Contact details

`src/data/contact.ts` holds placeholders until Wes supplies the real details: email `hello@example.com` (reserved, never delivers), mobile `07700 900123` (Ofcom's drama range, never connects) and Web3Forms key `YOUR_WEB3FORMS_ACCESS_KEY` (the form fails until a real key is set). Replace all three before launch. Create the key free at web3forms.com using the real email address; it is designed to be public. The build prints a warning while any placeholder is still in use.

## Live address

The domain is waypoint-ap.co.uk, set as `site` in `astro.config.mjs` (without www). If the live site uses www, change `site` to match. At launch, connect the domain to the Worker in Cloudflare (Workers & Pages, then waypoint, then Settings, then Domains & Routes).

## Pre-launch search engine blocking

While the site is being built it is hidden from search engines by two things, `<meta name="robots" content="noindex, nofollow">` in `src/layouts/BaseLayout.astro` and `public/robots.txt` disallowing everything. At launch, remove the meta tag and change `Disallow: /` to `Allow: /` in robots.txt (keeping its Sitemap line), never one without the other.

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

## Areas

Waypoint is based in Shoreham-by-Sea and wants to be found by families and professionals from Shoreham-by-Sea, Lancing, Worthing, Brighton and Hove and across West Sussex (confirmed by Lou). The list lives in `src/data/areas.ts` and feeds the Areas fact in the facts panels, the footer line on every page and the home page's structured data. Some intros and search descriptions name the areas too. Only add an area Wes confirms, and say young people come "from" these areas, not that Waypoint runs sessions there.

## About Wes

Facts supplied by Lou (not in the content source), which may be used alongside it:

- Wes Horscroft, founder of Waypoint
- Director of Rugby at Cardinal Newman Catholic School in Hove, where he set up the Newman Rugby Academy and gained it RFU ACE status (Lou: "incredible" achievement; sell it)
- RFU ACE (Academy, Colleges and Education) is England Rugby's programme for talented Year 12 and 13 players aiming at the elite game, bridging academy and professional rugby. The Newman Rugby Academy plays in the RFU ACE League (partner club Harlequins in the 2025/26 listings). Don't claim counts or rankings (for example "one of only X") without a source
- Teaching since 2006 (corrected by Wes; not "PE teacher since 2007"), with a long background in sports coaching (write "since 2006" rather than a number of years, so it never goes out of date)
- Wes describes himself as a mentor first, then a coach, then a teacher. He looks at the bigger picture for each child, believes in a bright future for them and looks for the best in them. Lead with that; his rugby, teaching, coaching and GB paddling background sits underneath as supporting credibility. Completing something and being proud of it matters, so never say the aim isn't to finish a task
- Raced for Great Britain at the IVF Va'a World Sprint Championships in Hawaii in 2024 (outrigger canoe racing)

Sell Wes confidently. The full Meet Wes section lives on Home only (it was removed from About to avoid repeating it). Parents and carers has a short version with his photo, as Wes's notes ask for a portrait there, linking to Home for more. Don't add other claims without a source. His paddling is about him, not Waypoint: the first term is land-based, so never imply Waypoint offers paddling.

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
- **Tone:** Wes's direction (November 2026): the site should do more than describe the service. Each strapline should make a parent, SENCo or headteacher stop and think, and the text underneath should explain why that matters. His model line is "A child's strengths aren't always found in the places we're used to looking." The philosophy behind it should come through across the site: practical experiences give children different ways to show what they can do, and as we get to know them we learn how to coach, challenge and support them, while they learn more about themselves. Keep it specific and grounded, never cheesy, vague or over-promising. He disliked the original ChatGPT-style slogans, such as "Big ideas. Real experiences. Something to be proud of." and "Find the right route for you."
- **Wes's own wording:** Where Wes supplies revised wording (Home, November 2026), use it as written apart from house-style fixes, rather than rewriting it.
- **Illustrative examples:** Labels marking examples as illustrative or fictional (such as Alex) must stay visible and attached to the example on every screen size.
- **Mis-formatted headings:** Some paragraphs in the source are wrongly formatted as headings (long sentences starting with `##`). Treat these as body text or card content, not headings. Source headings are a guide only; site headings follow the rules in "Headings, type sizes and SEO".
- **Em dashes:** Where the pattern is "Title — text", show the title as a card heading or bold label and the text as body. Elsewhere replace the em dash with a comma or full stop. Keep en dashes in ranges such as 8–16 and 9:00am–2:30pm.
- **Four cards or routes:** Where the source has four cards or routes, use a 2x2 grid on desktop, not four in a row. This is the agreed exception to the "three or six content boxes" house rule.
