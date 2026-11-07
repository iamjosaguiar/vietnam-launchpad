import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const layoutPath = join(root, 'src/app/(site)/layout.tsx');
const globalsPath = join(root, 'src/app/globals.css');
const fontsDir = join(root, 'src/app/fonts');

test('site layout loads DM Sans and Source Serif 4 from local files, not Google Fonts', () => {
  const layout = readFileSync(layoutPath, 'utf8');
  const globals = readFileSync(globalsPath, 'utf8');
  assert.doesNotMatch(layout, /next\/font\/google/);
  assert.match(layout, /next\/font\/local/);
  assert.match(layout, /variable:\s*'--font-dm-sans'/);
  assert.match(layout, /variable:\s*'--font-source-serif'/);
  assert.match(layout, /display:\s*'swap'/);
  assert.doesNotMatch(layout, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  assert.match(layout, /dm-sans\.woff2/);
  assert.match(layout, /source-serif-4\.woff2/);
  assert.doesNotMatch(layout, /dm-sans-italic\.woff2/);
  assert.match(globals, /dm-sans-italic\.woff2/);
  assert.match(globals, /font-style:\s*italic/);
});

test('bundled font files and OFL licence are present', () => {
  assert.equal(existsSync(join(fontsDir, 'OFL.txt')), true, 'missing OFL.txt');
  const files = existsSync(fontsDir) ? readdirSync(fontsDir) : [];
  const woff2 = files.filter((name) => name.endsWith('.woff2'));
  assert.ok(woff2.some((name) => name.toLowerCase().includes('dm-sans') || name.toLowerCase().includes('dmsans')));
  assert.ok(woff2.some((name) => name.toLowerCase().includes('source-serif') || name.toLowerCase().includes('sourceserif')));
});
