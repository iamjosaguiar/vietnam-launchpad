/**
 * Page metadata in the shape the pages already export (the subset of Next.js
 * `Metadata` this site uses), merged and turned into <head> tags by
 * src/components/Head.astro.
 *
 * Merge rules follow Next.js so pages render the same tags as before:
 * - A page key replaces the layout key of the same name entirely (shallow merge).
 *   A page `openGraph` drops the layout's og:site_name and og:locale, and a page
 *   `alternates` drops the layout's RSS link.
 * - A string page title goes through the layout's title template; `{ absolute }` is used as is.
 * - Twitter title, description and images fall back to the Open Graph values.
 */

type Title = string | { absolute: string } | { default: string; template: string };

type Image = string | { url: string; width?: number; height?: number; alt?: string };

type RobotsInfo = {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  nocache?: boolean;
  notranslate?: boolean;
  indexifembedded?: boolean;
  'max-snippet'?: number;
  'max-image-preview'?: 'none' | 'standard' | 'large' | string;
  'max-video-preview'?: number | string;
};

export type Metadata = {
  metadataBase?: URL;
  title?: Title;
  description?: string;
  keywords?: string | string[];
  authors?: { name: string; url?: string } | { name: string; url?: string }[];
  creator?: string;
  publisher?: string;
  category?: string;
  robots?: string | (RobotsInfo & { googleBot?: string | RobotsInfo });
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
    types?: Record<string, string>;
  };
  formatDetection?: { email?: boolean; address?: boolean; telephone?: boolean };
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    locale?: string;
    images?: Image | Image[];
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string | string[];
    section?: string;
    tags?: string | string[];
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: Image | Image[];
    site?: string;
    creator?: string;
  };
  icons?: { icon?: string; shortcut?: string; apple?: string };
};

export type HeadTag =
  | { tag: 'title'; text: string }
  | { tag: 'meta'; attrs: Record<string, string> }
  | { tag: 'link'; attrs: Record<string, string> };

const asArray = <T,>(value: T | T[] | undefined): T[] => (value === undefined ? [] : Array.isArray(value) ? value : [value]);

function titleText(title: Title | undefined): string | undefined {
  if (title === undefined) return undefined;
  if (typeof title === 'string') return title;
  return 'absolute' in title ? title.absolute : title.default;
}

/** Merges page metadata over layout metadata with the Next.js rules described above. */
export function resolveMetadata(layout: Metadata, page: Metadata = {}): Metadata {
  const merged: Metadata = { ...layout, ...page };

  const template = layout.title && typeof layout.title === 'object' && 'template' in layout.title ? layout.title.template : undefined;
  if (typeof page.title === 'string') {
    merged.title = { absolute: template ? template.replace('%s', page.title) : page.title };
  } else if (page.title) {
    merged.title = { absolute: titleText(page.title)! };
  } else {
    merged.title = { absolute: titleText(layout.title) ?? '' };
  }

  const og = merged.openGraph;
  if (og) {
    const twitter = { ...merged.twitter };
    let filled = false;
    if (!twitter.title && og.title) {
      twitter.title = og.title;
      filled = true;
    }
    if (!twitter.description && og.description) {
      twitter.description = og.description;
      filled = true;
    }
    if (!twitter.images && og.images) {
      twitter.images = og.images;
      filled = true;
    }
    if (filled) merged.twitter = twitter;
  }

  return merged;
}

function absoluteUrl(url: string, base?: URL): string {
  if (!base) return url;
  try {
    return new URL(url, base).toString().replace(/\/$/, url.endsWith('/') ? '/' : '');
  } catch {
    return url;
  }
}

/** Directives in the order they are written: index and follow first, then the rest as declared. */
function robotsContent(info: string | (RobotsInfo & { googleBot?: unknown })): string {
  if (typeof info === 'string') return info;
  const parts: string[] = [];
  if (info.index !== undefined) parts.push(info.index ? 'index' : 'noindex');
  if (info.follow !== undefined) parts.push(info.follow ? 'follow' : 'nofollow');
  for (const [key, value] of Object.entries(info) as [string, unknown][]) {
    if (key === 'index' || key === 'follow' || key === 'googleBot' || value === undefined || value === false) continue;
    parts.push(value === true ? key : `${key}:${value}`);
  }
  return parts.join(', ');
}

function imageTags(prefix: 'og' | 'twitter', images: Image | Image[] | undefined, base?: URL): HeadTag[] {
  const key = prefix === 'og' ? 'property' : 'name';
  const tags: HeadTag[] = [];
  for (const image of asArray(images)) {
    const item = typeof image === 'string' ? { url: image } : image;
    tags.push({ tag: 'meta', attrs: { [key]: `${prefix}:image`, content: absoluteUrl(item.url, base) } });
    if (item.width !== undefined) tags.push({ tag: 'meta', attrs: { [key]: `${prefix}:image:width`, content: String(item.width) } });
    if (item.height !== undefined) tags.push({ tag: 'meta', attrs: { [key]: `${prefix}:image:height`, content: String(item.height) } });
    if (item.alt) tags.push({ tag: 'meta', attrs: { [key]: `${prefix}:image:alt`, content: item.alt } });
  }
  return tags;
}

/** Head tags for resolved metadata, in the order Next.js writes them. */
export function metadataTags(meta: Metadata): HeadTag[] {
  const base = meta.metadataBase;
  const tags: HeadTag[] = [];
  const name = (n: string, content: string | undefined) => {
    if (content) tags.push({ tag: 'meta', attrs: { name: n, content } });
  };
  const property = (p: string, content: string | undefined) => {
    if (content) tags.push({ tag: 'meta', attrs: { property: p, content } });
  };

  const title = titleText(meta.title);
  if (title) tags.push({ tag: 'title', text: title });
  name('description', meta.description);
  for (const author of asArray(meta.authors)) {
    if (author.url) tags.push({ tag: 'link', attrs: { rel: 'author', href: author.url } });
    name('author', author.name);
  }
  name('keywords', asArray(meta.keywords).join(','));
  name('creator', meta.creator);
  name('publisher', meta.publisher);
  if (meta.robots) {
    name('robots', robotsContent(meta.robots));
    if (typeof meta.robots === 'object' && meta.robots.googleBot) name('googlebot', robotsContent(meta.robots.googleBot));
  }
  name('category', meta.category);

  const alternates = meta.alternates;
  if (alternates?.canonical) tags.push({ tag: 'link', attrs: { rel: 'canonical', href: absoluteUrl(alternates.canonical, base) } });
  for (const [lang, href] of Object.entries(alternates?.languages ?? {})) {
    tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: lang, href: absoluteUrl(href, base) } });
  }
  for (const [type, href] of Object.entries(alternates?.types ?? {})) {
    tags.push({ tag: 'link', attrs: { rel: 'alternate', type, href: absoluteUrl(href, base) } });
  }

  if (meta.formatDetection) {
    const off = (['telephone', 'date', 'address', 'email', 'url'] as const)
      .filter((key) => (meta.formatDetection as Record<string, boolean | undefined>)[key] === false)
      .map((key) => `${key}=no`);
    if (off.length) name('format-detection', off.join(', '));
  }

  const og = meta.openGraph;
  if (og) {
    property('og:title', og.title);
    property('og:description', og.description);
    property('og:url', og.url ? absoluteUrl(og.url, base) : undefined);
    property('og:site_name', og.siteName);
    property('og:locale', og.locale);
    tags.push(...imageTags('og', og.images, base));
    property('og:type', og.type);
    property('article:published_time', og.publishedTime);
    property('article:modified_time', og.modifiedTime);
    for (const author of asArray(og.authors)) property('article:author', author);
    property('article:section', og.section);
    for (const tag of asArray(og.tags)) property('article:tag', tag);
  }

  const twitter = meta.twitter;
  if (twitter) {
    name('twitter:card', twitter.card);
    name('twitter:site', twitter.site);
    name('twitter:creator', twitter.creator);
    name('twitter:title', twitter.title);
    name('twitter:description', twitter.description);
    tags.push(...imageTags('twitter', twitter.images, base));
  }

  if (meta.icons?.shortcut) tags.push({ tag: 'link', attrs: { rel: 'shortcut icon', href: meta.icons.shortcut } });
  if (meta.icons?.icon) tags.push({ tag: 'link', attrs: { rel: 'icon', href: meta.icons.icon } });
  if (meta.icons?.apple) tags.push({ tag: 'link', attrs: { rel: 'apple-touch-icon', href: meta.icons.apple } });

  return tags;
}
