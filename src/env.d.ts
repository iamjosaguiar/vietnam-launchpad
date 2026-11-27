/**
 * The Worker environment, as the API endpoints import it (src/pages/api/*.ts).
 * Only the lead form settings are read; see src/server/env.ts and wrangler.jsonc.
 * Declared here rather than with `wrangler types`, whose global Workers runtime
 * types would clash with the DOM types the React components use.
 */
declare module 'cloudflare:workers' {
  export const env: import('./server/env').LeadEnv & Record<string, unknown>;
}

interface ImportMetaEnv {
  /** Google Analytics 4 measurement ID (G-XXXXXXXXXX), read at build time. Optional. */
  readonly PUBLIC_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
