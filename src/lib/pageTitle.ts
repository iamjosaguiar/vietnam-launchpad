export const BRAND = 'Vietnam Launchpad';

/** Longest title that search results show in full. */
export const MAX_TITLE_LENGTH = 60;

/**
 * Builds a page title from a body that does not contain the brand.
 * The brand is added once, after a pipe, only when the finished title fits in
 * 60 characters. When it would not fit, the body is used on its own.
 */
export function pageTitle(body: string) {
  const withBrand = `${body} | ${BRAND}`;
  return { absolute: withBrand.length <= MAX_TITLE_LENGTH ? withBrand : body };
}
