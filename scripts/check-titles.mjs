// Fails the build when a served page has a title over 60 characters, a repeated brand,
// a missing title or placeholder text. Run after `next build` (wired as the `postbuild` script).
//
// Pages are served under /en (the proxy rewrites every path there), so the check covers
// en.html and everything under en/. Other files in .next/server/app are unreachable
// duplicates of the same routes and are not checked.
import fs from 'node:fs';
import path from 'node:path';

const MAX = 60;
const BRAND = 'Vietnam Launchpad';
const PLACEHOLDER = /\b(TODO|TBC|TBD|lorem ipsum|placeholder|undefined|null)\b|\[object|\{\{|\}\}/i;
const root = path.join(process.cwd(), '.next', 'server', 'app');

if (!fs.existsSync(root)) {
  console.error('check-titles: .next/server/app not found. Run the build first.');
  process.exit(1);
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.endsWith('.segments')) walk(full);
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
}
if (fs.existsSync(path.join(root, 'en.html'))) files.push(path.join(root, 'en.html'));
if (fs.existsSync(path.join(root, 'en'))) walk(path.join(root, 'en'));

const problems = [];
let longest = 0;
for (const file of files) {
  const page = path.relative(root, file).replace(/\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const match = html.match(/<title>([^<]*)<\/title>/);
  if (!match) {
    problems.push(`${page}: no title`);
    continue;
  }
  const title = decode(match[1]);
  longest = Math.max(longest, title.length);
  if (title.length > MAX) problems.push(`${page}: ${title.length} characters: ${title}`);
  if (title.split(BRAND).length - 1 > 1) problems.push(`${page}: brand twice: ${title}`);
  if (PLACEHOLDER.test(title)) problems.push(`${page}: placeholder text: ${title}`);
}

if (problems.length > 0) {
  console.error(`check-titles: ${problems.length} problem(s) in ${files.length} pages`);
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}
console.log(`check-titles: ${files.length} pages checked, longest title ${longest} characters, no repeated brand`);
