import { getAllGuideCategories, getAllGuides, type Guide } from '@/data/guides';

/** The fields the guides list shows. */
export type GuideSummary = Pick<Guide, 'slug' | 'title' | 'excerpt' | 'category' | 'readTime' | 'lastUpdated'>;

/** Guide summaries for the /guides list, read at build time. Kept out of the page module so the list island stays small. */
export function loadData(): { guides: GuideSummary[]; categories: string[] } {
  const guides = getAllGuides().map(({ slug, title, excerpt, category, readTime, lastUpdated }) => ({
    slug,
    title,
    excerpt,
    category,
    readTime,
    lastUpdated,
  }));
  return { guides, categories: getAllGuideCategories() };
}
