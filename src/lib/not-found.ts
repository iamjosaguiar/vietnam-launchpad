/**
 * Stops rendering a route whose data does not exist. Every dynamic route lists
 * its pages in getStaticPaths, so this only runs if that list and the data
 * disagree, and it fails the build instead of publishing an empty page.
 */
export function notFound(): never {
  throw new Error('Page data not found');
}
