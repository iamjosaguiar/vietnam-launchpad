import type { Metadata } from 'next';
import { generateMetadata as visaMetadata } from '@/app/(site)/[locale]/visa/[country]/page';
import type { SitemapEntry } from '@/lib/sitemap';

// A page whose own metadata says robots noindex should not be in the XML
// sitemap. The pages themselves decide; this only reads their generateMetadata,
// so the sitemap cannot drift from the noindex list.
type MetadataFor = (path: string) => Promise<Metadata> | undefined;

// Dynamic routes whose metadata can set robots. Add a route here if another
// page starts setting noindex from generateMetadata.
const ROUTES: Array<{ pattern: RegExp; metadata: (m: RegExpMatchArray) => Promise<Metadata> }> = [
  {
    pattern: /^\/visa\/([^/]+)$/,
    metadata: (m) => visaMetadata({ params: Promise.resolve({ country: m[1] }) }),
  },
];

const metadataFor: MetadataFor = (path) => {
  for (const route of ROUTES) {
    const m = path.match(route.pattern);
    if (m) return route.metadata(m);
  }
  return undefined;
};

export function isNoindex(robots: Metadata['robots']): boolean {
  if (!robots) return false;
  if (typeof robots === 'string') return /(^|[\s,])(noindex|none)([\s,]|$)/i.test(robots);
  return robots.index === false;
}

export async function indexableEntries(
  entries: SitemapEntry[],
  lookup: MetadataFor = metadataFor,
): Promise<SitemapEntry[]> {
  const keep = await Promise.all(
    entries.map(async (entry) => {
      const metadata = await lookup(entry.path);
      return !metadata || !isNoindex(metadata.robots);
    }),
  );
  return entries.filter((_, i) => keep[i]);
}
