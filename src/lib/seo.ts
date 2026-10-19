/**
 * Shared social card defaults. Page-level `openGraph` and `twitter` objects replace the
 * layout's objects in Next.js metadata, so every page spreads these in.
 */
const BASE_URL = 'https://www.vietnamlaunchpad.com';

export const OG_IMAGE_URL = `${BASE_URL}/og/vietnam-launchpad-default.jpg`;
export const OG_IMAGE_ALT = 'Vietnam Launchpad logo on a white background';

export const ogImages = [
  { url: OG_IMAGE_URL, width: 1200, height: 630, alt: OG_IMAGE_ALT },
];

export const twitterDefaults = {
  card: 'summary_large_image' as const,
  images: [{ url: OG_IMAGE_URL, alt: OG_IMAGE_ALT }],
};
