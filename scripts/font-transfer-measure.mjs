import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
const require = createRequire(import.meta.url);
const playwrightPath = existsSync('/tmp/shot-tools/node_modules/playwright-core')
  ? '/tmp/shot-tools/node_modules/playwright-core'
  : 'playwright-core';
const { chromium } = require(playwrightPath);
import fs from 'fs';

const url = process.argv[2] || 'http://localhost:3001/guides/renting';
const label = process.argv[3] || 'measure';
const outPath = process.argv[4] || `/opt/cursor/artifacts/font_measure_${label}.json`;

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  ignoreHTTPSErrors: true,
});
await context.route('**/*', (route) => route.continue());
const page = await context.newPage();

const cdp = await context.newCDPSession(page);
await cdp.send('Network.enable');
await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });

const responses = [];
cdp.on('Network.responseReceived', (event) => {
  const mime = event.response.mimeType || '';
  const url = event.response.url;
  if (
    mime.includes('font') ||
    /\.(woff2?|ttf|otf)(\?|$)/i.test(url) ||
    /fonts\.(google|gstatic)/.test(url)
  ) {
    responses.push({
      requestId: event.requestId,
      url,
      mime,
      status: event.response.status,
    });
  }
});

const encoded = new Map();
cdp.on('Network.loadingFinished', (event) => {
  encoded.set(event.requestId, {
    encodedDataLength: event.encodedDataLength,
  });
});

await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);

const htmlInfo = await page.evaluate(() => {
  const preloads = [...document.querySelectorAll('link[rel="preload"]')].map((el) => ({
    href: el.getAttribute('href'),
    as: el.getAttribute('as'),
    type: el.getAttribute('type'),
    crossOrigin: el.getAttribute('crossorigin'),
  }));
  const faces = [...document.fonts].map((f) => ({
    family: f.family,
    weight: String(f.weight),
    style: f.style,
    status: f.status,
  }));
  const body = getComputedStyle(document.body);
  const h1 = getComputedStyle(document.querySelector('h1'));
  const italicEl = document.querySelector('.italic, [class*="italic"]');
  const italicFont = italicEl ? getComputedStyle(italicEl).fontFamily : null;
  const italicStyle = italicEl ? getComputedStyle(italicEl).fontStyle : null;
  const sample = 'Sổ Hồng tạm trú phường cà phê cốt dừa Luật Hôn nhân và Gia đình ₫ “quotes” – — …';
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = '24px ' + body.fontFamily;
  const bodyWidths = {};
  for (const ch of sample) bodyWidths[ch] = ctx.measureText(ch).width;
  ctx.font = '24px ' + h1.fontFamily;
  const headingWidths = {};
  for (const ch of sample) headingWidths[ch] = ctx.measureText(ch).width;
  ctx.font = '24px serif';
  const serifFallback = {};
  for (const ch of sample) serifFallback[ch] = ctx.measureText(ch).width;
  ctx.font = '24px sans-serif';
  const sansFallback = {};
  for (const ch of sample) sansFallback[ch] = ctx.measureText(ch).width;
  return {
    preloads,
    faces,
    bodyFont: body.fontFamily,
    headingFont: h1.fontFamily,
    italicFont,
    italicStyle,
    bodyWidths,
    headingWidths,
    serifFallback,
    sansFallback,
    sample,
  };
});

const fonts = responses.map((r) => ({
  url: r.url,
  mime: r.mime,
  status: r.status,
  encodedBytes: encoded.get(r.requestId)?.encodedDataLength ?? null,
}));

const preloadHrefSet = new Set(
  htmlInfo.preloads
    .filter((p) => p.as === 'font' || (p.href && /\.woff2/.test(p.href || '')))
    .map((p) => {
      try {
        return new URL(p.href, url).href;
      } catch {
        return p.href;
      }
    })
);

function fileName(u) {
  try {
    return new URL(u, url).pathname.split('/').pop();
  } catch {
    return u;
  }
}
const preloadNames = new Set([...preloadHrefSet].map(fileName));
const withPreload = fonts.map((f) => ({
  ...f,
  file: fileName(f.url),
  preloaded: preloadNames.has(fileName(f.url)),
}));

const totalEncoded = withPreload.reduce((sum, f) => sum + (f.encodedBytes || 0), 0);
const preloadedEncoded = withPreload
  .filter((f) => f.preloaded)
  .reduce((sum, f) => sum + (f.encodedBytes || 0), 0);

const result = {
  label,
  url,
  viewport: { width: 1280, height: 900 },
  cacheDisabled: true,
  fonts: withPreload,
  fontRequestCount: withPreload.length,
  totalEncodedBytes: totalEncoded,
  preloadedEncodedBytes: preloadedEncoded,
  nonPreloadedEncodedBytes: totalEncoded - preloadedEncoded,
  preloads: htmlInfo.preloads,
  faces: htmlInfo.faces,
  computed: {
    bodyFont: htmlInfo.bodyFont,
    headingFont: htmlInfo.headingFont,
    italicFont: htmlInfo.italicFont,
    italicStyle: htmlInfo.italicStyle,
  },
  sample: htmlInfo.sample,
  bodyWidths: htmlInfo.bodyWidths,
  headingWidths: htmlInfo.headingWidths,
};

fs.mkdirSync('/opt/cursor/artifacts', { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
await browser.close();
