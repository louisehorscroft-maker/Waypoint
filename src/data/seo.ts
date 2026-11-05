/**
 * Search titles and descriptions for every page: the single place to change them.
 *
 * Rules (checked on every build by scripts/check-dist.mjs):
 * - title: 60 characters or fewer, keywords and location first, "| Waypoint" last
 * - description: 120 to 155 characters, plain English, facts from the content source only
 * - every page unique; house style applies (British English, no em dashes, no colons mid-sentence)
 */
export interface PageSeo {
  title: string;
  description: string;
}

export const seo: Record<string, PageSeo> = {
  '/': {
    title: 'Alternative provision, Shoreham-by-Sea, ages 8–16 | Waypoint',
    description:
      'Small-group alternative provision in Shoreham-by-Sea, West Sussex, for ages 8–16. Hands-on projects, individual goals and a weekly report for schools.',
  },
  '/about/': {
    title: 'About our hands-on alternative provision | Waypoint',
    description:
      'How Waypoint works, with practical group projects, a clear weekly report and support for each young person aged 8–16 in Shoreham-by-Sea.',
  },
  '/for-schools/': {
    title: 'Alternative provision for schools and SENCos | Waypoint',
    description:
      'School-funded alternative provision in Shoreham-by-Sea for pupils aged 8–16, with individual goals, a weekly evidence-led report and agreed reviews.',
  },
  '/for-local-authorities/': {
    title: 'Alternative provision for local authorities | Waypoint',
    description:
      'Alternative provision in West Sussex for commissioners and Virtual Schools, with agreed goals, weekly evidence, named contacts and reviews, ages 8–16.',
  },
  '/parents-and-carers/': {
    title: 'Alternative provision for your child, ages 8–16 | Waypoint',
    description:
      "Hands-on, small-group days in Shoreham-by-Sea for young people aged 8–16, arranged through your child's school or as a home-educating family.",
  },
  '/home-education/': {
    title: 'Home education group in Shoreham-by-Sea | Waypoint',
    description:
      'Hands-on group projects and creative challenges for home-educated young people aged 8–16 in Shoreham-by-Sea, West Sussex. No referral needed.',
  },
  '/for-young-people/': {
    title: 'Hands-on projects for young people aged 8–16 | Waypoint',
    description:
      'Build a basecamp, set off a giant chain reaction or design your own game. Hands-on projects with other young people aged 8–16 in Shoreham-by-Sea.',
  },
  '/fees/': {
    title: 'Alternative provision fees and arrangements | Waypoint',
    description:
      "Proposed prices for school-funded and home education places at Waypoint in Shoreham-by-Sea, with what's included, invoicing and booking terms.",
  },
  '/how-referrals-work/': {
    title: 'How alternative provision referrals work | Waypoint',
    description:
      'How to refer a young person to Waypoint in Shoreham-by-Sea, from a first question to an agreed placement, for schools, councils and families.',
  },
  '/policies/': {
    title: 'Policies and provider information | Waypoint',
    description:
      "Waypoint's policies and provider information for families, schools and commissioners, including safeguarding, attendance and raising a concern.",
  },
  '/safeguarding/': {
    title: 'Safeguarding and child protection | Waypoint',
    description:
      "How Waypoint keeps young people safe, our safeguarding policies and checks, and who to contact if you're worried about a child in West Sussex.",
  },
  '/complaints/': {
    title: 'Complaints and concerns | Waypoint',
    description:
      "How to make a complaint or raise a concern about Waypoint, including a young person's safety and what to do if it's about your usual contact.",
  },
  '/privacy/': {
    title: 'Privacy notice | Waypoint',
    description:
      'How Waypoint uses the information you give us through this website and enquiry form, the services we use, how long we keep it and your rights.',
  },
  '/accessibility/': {
    title: 'Accessibility statement | Waypoint',
    description:
      'How the Waypoint website meets WCAG 2.2 AA, how it was tested, how to get information in another way and how to report an accessibility problem.',
  },
  '/contact/': {
    title: 'Contact us, alternative provision in Shoreham | Waypoint',
    description:
      'Get in touch with Waypoint, alternative provision in Shoreham-by-Sea for ages 8–16. Call, email or send an enquiry to discuss a place or a visit.',
  },
};
