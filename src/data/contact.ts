/**
 * Contact details and form settings: the single place to change them.
 *
 * PLACEHOLDERS: all three values below are placeholders until Wes supplies the real ones.
 * - email: example.com is reserved for examples and never delivers
 * - phone: 07700 900xxx is Ofcom's range reserved for drama, so it never connects
 * - web3formsKey: create one free at web3forms.com using the real email address
 * Replace all three before launch (see CLAUDE.md).
 */
export const contact = {
  email: 'hello@example.com',
  phoneDisplay: '07700 900123',
  phoneHref: 'tel:+447700900123',
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

/** "I am contacting you as" options, word for word from the content source */
export const roles = [
  { value: 'Headteacher or school leader', professional: true },
  { value: 'SENCo or inclusion lead', professional: true },
  { value: 'Other school professional', professional: true },
  { value: 'Local authority or Virtual School professional', professional: true },
  { value: 'Parent or carer', professional: false },
  { value: 'Home-educating parent or carer', professional: false },
  { value: 'Other or not sure', professional: false },
] as const;

/** Maps the ?purpose= value that buttons around the site pass to a preselected role */
export const purposeToRole: Record<string, string> = {
  visit: 'Headteacher or school leader',
  placement: 'SENCo or inclusion lead',
  'local-authority': 'Local authority or Virtual School professional',
  'home-education': 'Home-educating parent or carer',
  general: 'Parent or carer',
};
