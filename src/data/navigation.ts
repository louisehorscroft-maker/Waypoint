export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const isNavGroup = (item: NavItem): item is NavGroup => 'children' in item;

/** Main menu, from the "Navigation and reading guide" in the content source. */
export const mainNav: NavItem[] = [
  { label: 'About', href: '/about/' },
  {
    label: 'Schools & Professionals',
    children: [
      { label: 'For Schools', href: '/for-schools/' },
      { label: 'For Local Authorities', href: '/for-local-authorities/' },
    ],
  },
  { label: 'Parents & Carers', href: '/parents-and-carers/' },
  { label: 'Home Education', href: '/home-education/' },
  { label: 'For Young People', href: '/for-young-people/' },
];

export const contactLink: NavLink = { label: 'Get in touch', href: '/contact/' };

/** Footer links, from "Footer and supporting content" in the content source. */
export const footerNav: NavLink[] = [
  { label: 'Get in touch', href: '/contact/' },
  { label: 'Visiting Waypoint', href: '/contact/#visits' },
  { label: 'Fees and arrangements', href: '/fees/' },
  { label: 'How referrals work', href: '/how-referrals-work/' },
  { label: 'Policies and provider information', href: '/policies/' },
  { label: 'Safeguarding', href: '/policies/#raising-a-concern' },
  // Complaints and Privacy notice point at /policies until approved documents exist
  { label: 'Complaints', href: '/policies/' },
  { label: 'Privacy notice', href: '/policies/' },
  { label: 'Accessibility information', href: '/policies/#accessing-information' },
];
