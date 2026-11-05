// Post-build guard: fails the build if anything from content-source/ (or
// internal links from the source document) has leaked into dist/.
import { readdir, readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = 'dist';
const FORBIDDEN_EXTENSIONS = new Set(['.md', '.docx']);
const FORBIDDEN_TEXT = [
  'content-source',
  'docs.google.com',
  'drive.google.com',
  'notion.so',
  'notion.site',
  'INTERNAL BUILD NOTES',
  'BUTTONS AND DESTINATIONS',
  'WEBSITE COPY',
];
const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js', '.json', '.txt', '.xml', '.svg']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      return entry.isDirectory() ? walk(path) : [path];
    }),
  );
  return files.flat();
}

const problems = [];
for (const file of await walk(DIST)) {
  const ext = extname(file).toLowerCase();
  if (FORBIDDEN_EXTENSIONS.has(ext)) {
    problems.push(`${file}: source document file type (${ext}) must not be published`);
    continue;
  }
  if (!TEXT_EXTENSIONS.has(ext)) continue;
  const text = await readFile(file, 'utf8');
  for (const needle of FORBIDDEN_TEXT) {
    if (text.includes(needle)) problems.push(`${file}: contains "${needle}"`);
  }
}

if (problems.length > 0) {
  console.error('check-dist: internal content found in the build output:');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}
console.log('check-dist: no internal content found in dist/');

// Pre-launch reminder (warning only): placeholder contact details still in use
const contactPage = await readFile(join(DIST, 'contact', 'index.html'), 'utf8').catch(() => '');
const placeholders = ['hello@example.com', '07700 900123', 'YOUR_WEB3FORMS_ACCESS_KEY'].filter((p) =>
  contactPage.includes(p),
);
if (placeholders.length > 0) {
  console.warn(`check-dist: WARNING placeholder contact details still in use (${placeholders.join(', ')}). Update src/data/contact.ts before launch.`);
}

// Pre-launch reminder (warning only): safeguarding training placeholders
const safeguardingPage = await readFile(join(DIST, 'safeguarding', 'index.html'), 'utf8').catch(() => '');
const trainingGaps = (safeguardingPage.match(/Details to be added\./g) ?? []).length;
if (trainingGaps > 0) {
  console.warn(`check-dist: WARNING ${trainingGaps} safeguarding training placeholders still in use. Update src/data/safeguarding.ts before launch.`);
}

// SEO check (fails the build): every indexable page has a unique title (60 characters or
// fewer) and a unique description (120 to 155 characters). Edit them in src/data/seo.ts.
{
  const seoProblems = [];
  const seenTitles = new Map();
  const seenDescriptions = new Map();
  const decode = (t) => t.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  for (const file of await walk(DIST)) {
    if (!file.endsWith('.html')) continue;
    const html = await readFile(file, 'utf8');
    if (/<meta name="robots" content="noindex">/.test(html)) continue; // thank-you and 404
    const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
    const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
    if (!title || title.length > 60) seoProblems.push(`${file}: title is ${title.length} characters (max 60)`);
    if (description.length < 120 || description.length > 155)
      seoProblems.push(`${file}: description is ${description.length} characters (120 to 155)`);
    if (seenTitles.has(title)) seoProblems.push(`${file}: same title as ${seenTitles.get(title)}`);
    if (seenDescriptions.has(description)) seoProblems.push(`${file}: same description as ${seenDescriptions.get(description)}`);
    seenTitles.set(title, file);
    seenDescriptions.set(description, file);
  }
  if (seoProblems.length > 0) {
    console.error('check-dist: SEO titles and descriptions need fixing (src/data/seo.ts):');
    for (const problem of seoProblems) console.error(`  - ${problem}`);
    process.exit(1);
  }
  console.log('check-dist: all page titles and descriptions are within limits');
}
