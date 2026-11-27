# Cloudflare Setup

One-time setup to host the site on Cloudflare Workers (free plan) and deploy it from GitHub.

Every page is a static file served by Workers Static Assets: free and unlimited. Only `/api/contact`
and `/api/get-started` run as Worker code, and the free plan allows 100,000 of those a day.

## 1. Create a Cloudflare API token

1. In the Cloudflare dashboard, go to **Manage account > Account API tokens** and select **Create Token**.
2. Use the **Edit Cloudflare Workers** template.
3. Under **Account Resources**, choose only the account the site will live in.
4. Create the token and copy it. It is shown once.

Also copy the **Account ID** (shown on the account's Workers & Pages overview, or under the account
name in the dashboard).

## 2. Add the GitHub settings

In the repository on GitHub, go to **Settings > Secrets and variables > Actions**:

| Type | Name | Value |
|------|------|-------|
| Secret | `CLOUDFLARE_API_TOKEN` | The token from step 1 |
| Variable | `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |
| Variable | `PUBLIC_GA_ID` | Optional. The GA4 ID (`G-XXXXXXXXXX`), the value of `NEXT_PUBLIC_GA_ID` on Vercel |

The **Deploy** workflow (`.github/workflows/deploy.yml`) stays skipped until `CLOUDFLARE_ACCOUNT_ID` exists.

## 3. Deploy

Run **Actions > Deploy > Run workflow** on `main`. It tests, builds, deploys with `wrangler deploy`,
then pings IndexNow. After that it runs on every push to `main` and every 6 hours.

The first deploy creates a Worker named `vietnam-launchpad`. Open it from **Workers & Pages** and
check the site at its `https://vietnam-launchpad.<your-subdomain>.workers.dev` URL.

## 4. Add the lead form secrets

The contact form and the business questionnaire send email through SendGrid. Add the same values the
Vercel project used, as Worker secrets, in the Worker's **Settings > Variables and Secrets**, or with:

```bash
npx wrangler secret put SENDGRID_API_KEY
```

```bash
npx wrangler secret put CONTACT_EMAIL
```

```bash
npx wrangler secret put FROM_EMAIL
```

`CONTACT_EMAIL` takes several addresses separated by commas. Without it, leads go to the default
addresses in `src/lib/lead-recipients.ts`. `FROM_EMAIL` defaults to `contact@vietnamlaunchpad.com`.
Secrets take effect immediately and survive deploys.

Submit the form on the `workers.dev` URL to confirm a lead email arrives.

## 5. Move the domain from Vercel without downtime

Keep Vercel serving production until the Worker is ready.

1. At your current DNS provider, lower the TTL of the `vietnamlaunchpad.com` and `www` records (for example to 300 seconds) a day ahead.
2. In Cloudflare, **Add a domain**: `vietnamlaunchpad.com` (Free plan). Check that the imported DNS records match the current ones, especially email: MX, SPF/DKIM `TXT` records, and SendGrid's domain authentication `CNAME` records.
3. At your registrar, change the nameservers to the two Cloudflare gives you. Wait until the zone shows **Active**.
4. In **Workers & Pages > vietnam-launchpad > Settings > Domains & Routes**, select **Add > Custom Domain** and enter `www.vietnamlaunchpad.com`. Cloudflare replaces the old `www` record and issues the certificate.
5. Redirect the bare domain to `www`, as Vercel did:
   - In **DNS**, add a proxied `A` record for `vietnamlaunchpad.com` pointing to `192.0.2.0` (a placeholder; Cloudflare answers before it), replacing the old apex record.
   - In **Rules > Redirect Rules**, create a rule from the **Redirect from root to WWW** template (301, keep the path and query string).
6. Check `https://www.vietnamlaunchpad.com`, `https://vietnamlaunchpad.com/about` (should redirect to `www`), and a form submission.
7. In Vercel, remove the domain from the project, then disconnect or delete the project so pushes stop building there.

## Day to day

- Push to `main` to deploy. Content changes reach the site in a few minutes.
- Exchange rates and World Bank figures refresh with the scheduled deploy every 6 hours. GitHub pauses
  scheduled workflows in public repositories after 60 days without commits; re-enable it under **Actions** if that happens.
- To roll back, run `npx wrangler rollback` (with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set), or use **Deployments** on the Worker's page.
- Worker logs are under the Worker's **Observability** tab.

## Running it locally

```bash
cp .dev.vars.example .dev.vars
```

```bash
npm run dev
```

`npm run preview` builds the site and serves it in the Workers runtime at http://localhost:8787, with
the same redirects, headers and 404 handling as production.
