/**
 * Safeguarding policies and Wes's training and checks, shown on /safeguarding/.
 *
 * PLACEHOLDERS: every `detail` of null in `training` is shown as "Details to be added" until
 * Wes supplies the real information. Only enter facts Wes has confirmed (and can evidence).
 * Policies have no `href` until an approved version exists; never link a draft.
 * The build warns while any placeholder remains (scripts/check-dist.mjs).
 */
export interface SafeguardingPolicy {
  title: string;
  summary: string;
  /** Link to the approved, published version. Leave undefined until approved */
  href?: string;
}

export const policies: SafeguardingPolicy[] = [
  {
    title: 'Safeguarding and child protection',
    summary: 'How we keep young people safe, spot signs of harm and act on any concern, including who we tell and when.',
  },
  {
    title: 'Safer recruitment',
    summary: 'The checks everyone working with young people goes through, from identity and references to clearance and induction.',
  },
  {
    title: 'Supporting behaviour and taking part',
    summary: 'How we help young people join in, with clear expectations, supervised pauses and boundaries.',
  },
  {
    title: 'Attendance and absence',
    summary: "How arrivals are recorded, how the school is told if a young person doesn't arrive and when we escalate a concern.",
  },
  {
    title: 'Complaints and concerns',
    summary: "How to raise a concern or complaint, including an alternative route if it's about your usual contact.",
  },
  {
    title: 'Privacy and personal information',
    summary: 'How we collect, store, share and protect information about young people and families.',
  },
];

export interface TrainingItem {
  title: string;
  /** Confirmed detail, or null for a placeholder */
  detail: string | null;
}

export const training: TrainingItem[] = [
  { title: 'DBS check', detail: null },
  { title: 'Designated Safeguarding Lead training', detail: null },
  { title: 'Safeguarding training', detail: null },
  { title: 'First aid', detail: null },
  { title: 'Teaching and coaching qualifications', detail: null },
  { title: 'Insurance', detail: null },
];
