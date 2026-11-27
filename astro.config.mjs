// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// Every page is prerendered to a static HTML file at build time. Only the two lead form
// endpoints (src/pages/api/*.ts, `prerender = false`) run on demand, in a Cloudflare Worker.
export default defineConfig({
  site: 'https://www.vietnamlaunchpad.com',
  // URLs have no trailing slash (/about, not /about/), as on the Next.js site.
  // `file` writes about.html, which Workers Static Assets serves at /about.
  trailingSlash: 'never',
  build: { format: 'file' },
  // No Astro sessions, so the adapter does not provision a KV namespace.
  session: false,
  integrations: [react()],
  adapter: cloudflare({
    // Images are plain files in public/, so no Cloudflare Images binding is needed.
    imageService: 'passthrough',
    // Prerender in Node, not workerd: the sitemap reads git history (node:child_process).
    prerenderEnvironment: 'node',
  }),
  vite: {
    optimizeDeps: {
      // Dev server only. Tailwind 3 hoists picomatch 2, so Astro's helpers get their own
      // nested picomatch 4 (CommonJS), which `astro dev` must pre-bundle for the workerd runtime.
      include: ['@astrojs/internal-helpers > picomatch'],
    },
  },
});
