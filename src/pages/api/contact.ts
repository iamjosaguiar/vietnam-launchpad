import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

import { POST as handle } from '@/server/contact';

// Runs on demand in the Worker; every other route is a static file.
export const prerender = false;

export const POST: APIRoute = ({ request }) => handle(request, env);

// Any other method gets 405, as before.
export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'POST' } });
