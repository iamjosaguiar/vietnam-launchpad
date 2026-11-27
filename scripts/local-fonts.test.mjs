import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const layoutPath = join(root, 'src/layouts/BaseLayout.astro');
const globalsPath = join(root, 'src/styles/globals.css');
const fontsDir = join(root, 'src/assets/fonts');

test('site layout loads DM Sans and Source Serif 4 from local files, not Google Fonts', () => {
  const layout = readFileSync(layoutPath, 'utf8');
  const globals = readFileSync(globalsPath, 'utf8');
  for (const source of [layout, globals]) {
    assert.doesNotMatch(source, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  }
  // The upright files are preloaded; italic is declared in CSS only, so it loads on demand.
  assert.match(layout, /dm-sans\.woff2\?url/);
  assert.match(layout, /source-serif-4\.woff2\?url/);
  assert.doesNotMatch(layout, /dm-sans-italic\.woff2/);
  assert.match(layout, /rel="preload"[^>]*as="font"/);
  assert.match(globals, /url\('\.\.\/assets\/fonts\/dm-sans\.woff2'\)/);
  assert.match(globals, /url\('\.\.\/assets\/fonts\/source-serif-4\.woff2'\)/);
  assert.match(globals, /dm-sans-italic\.woff2/);
  assert.match(globals, /font-style:\s*italic/);
  assert.match(globals, /font-display:\s*swap/);
  assert.match(globals, /--font-dm-sans:/);
  assert.match(globals, /--font-source-serif:/);
});

test('bundled font files and OFL licence are present', () => {
  assert.equal(existsSync(join(fontsDir, 'OFL.txt')), true, 'missing OFL.txt');
  const files = existsSync(fontsDir) ? readdirSync(fontsDir) : [];
  const woff2 = files.filter((name) => name.endsWith('.woff2'));
  assert.ok(woff2.some((name) => name.toLowerCase().includes('dm-sans') || name.toLowerCase().includes('dmsans')));
  assert.ok(woff2.some((name) => name.toLowerCase().includes('source-serif') || name.toLowerCase().includes('sourceserif')));
});
