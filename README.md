# Vietnam Launchpad

A website for Vietnam immigration and business consulting services, built with Astro, React, TypeScript and Tailwind CSS, and hosted on Cloudflare Workers.

## 🌟 Features

### Core Functionality
- **Multilingual Support**: English, Vietnamese, Chinese (Simplified), and Korean
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Structured for search engine visibility
- **Transparent Pricing**: Clear pricing strategy based on market research
- **Lead Capture**: Contact forms and consultation booking system

### Pages & Sections
- **Homepage**: Hero section with value proposition and service overview
- **Services**: Detailed pages for TRC, work permits, company setup
- **Pricing**: Transparent pricing packages and individual services
- **Resources**: Blog section and downloadable guides for SEO
- **About**: Team credentials and company story
- **Contact**: Lead capture form with multiple contact methods

### Payment Integration
- **Vietnamese Payment Methods**: VNPAY, MoMo, ZaloPay integration ready
- **International Options**: Wise, bank transfers, cryptocurrency
- **Transparent Fees**: No hidden costs, clear payment options

## 🚀 Technology Stack

- **Framework**: Astro 7, with React 19 for components and interactive islands
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Hosting**: Cloudflare Workers (static pages on Workers Static Assets, lead form API in the Worker)
- **Email**: SendGrid, called from the Worker

## 📊 Market Research Integration

This site is built based on comprehensive market research including:

### Target Market
- 100,000+ expats in Vietnam
- Primary demographics: Chinese, Korean, Western expats
- Focus on underserved segments: digital nomads, small businesses

### Service Pricing (Based on Research)
- **TRC Applications**: $350 (60-70% margins)
- **Work Permits**: $180 (55-65% margins)  
- **Company Setup**: $3,500 (40-50% margins)
- **Package Deals**: Expat Starter ($2,800), Business Launch ($5,500)

### Competitive Advantages
- **Transparent Pricing**: Published prices vs. quote-based competitors
- **English-First**: Better support for Western expats
- **Digital Focus**: Targeting underserved digital nomad market
- **Compliance**: Partnership-based approach with licensed providers

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 22.23.4 or later
- npm

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd vietnam-launchpad

# Install dependencies
npm install

# Optional: secrets for the contact and questionnaire forms
cp .dev.vars.example .dev.vars

# Start development server
npm run dev

# Open http://localhost:4321
```

### Build for Production
```bash
# Type-check, build every page to dist/, and check page titles
npm run build

# Serve the build in the Cloudflare Workers runtime, as in production
npm run preview

# Open http://localhost:8787
```

`npm test` runs the script tests and `npm run lint` lints the TypeScript and React code.

## 🌍 Internationalization

The site is published in English, with no locale in URLs (`/about`, not `/en/about`; old `/en/...` links redirect).
Translation files for Vietnamese, Chinese and Korean are kept in `src/messages/`.

- `src/i18n/config.ts`: the locale list, plus the `Link` and navigation helpers components use
- `src/i18n/messages.ts`: `useTranslations()` for the strings in `src/messages/en.json`

Publishing another language means adding its locale to `src/i18n/config.ts` and building its pages under a locale path in `src/pages/`.

## 💰 Payment Integration

### Vietnamese Market Solutions
- **VNPAY**: Primary payment gateway (2.5% + VND 3,000)
- **MoMo/ZaloPay**: E-wallet integration ready
- **Bank Transfers**: Direct Vietnamese business account

### International Options
- **Wise**: Low-cost international transfers
- **Cryptocurrency**: USDT/USDC acceptance
- **Traditional**: Wire transfers and credit cards

### Implementation Notes
- Stripe not available in Vietnam (workaround: foreign company setup)
- VNPAY requires Vietnamese business license
- All solutions include VAT compliance (10% standard rate)

## 📈 SEO Strategy

### Content Marketing
- Resource center with downloadable guides
- Regular blog posts targeting keywords:
  - "Vietnam TRC application"
  - "Work permit Vietnam 2025"
  - "Company setup Vietnam"
  - "Cost of living Vietnam expat"

### Technical SEO
- Structured data markup
- Mobile optimization (70%+ traffic mobile)
- Fast loading times (<3 seconds)
- Multilingual sitemap generation

## 🎯 Business Model

### Revenue Streams
1. **Immigration Services** (high-margin, recurring)
2. **Company Setup** (high-value, one-time)
3. **Ongoing Compliance** (recurring revenue)
4. **Consultation Packages** (lead generation)

### Target Metrics
- Year 1: $100,000 revenue, 45% margins
- Year 2: $220,000 revenue, 43% margins
- Year 3: $380,000 revenue, 45% margins

## 🏗️ Project Structure

```
src/
├── pages/                 # Routes: one thin .astro file per URL pattern, plus api/ and feed/sitemap endpoints
├── views/                 # Page content, mirroring the URLs (views/visa/[country]/page.tsx is /visa/<country>)
├── layouts/               # BaseLayout.astro: <head>, header, footer, analytics
├── components/            # React components (interactive ones hydrate as islands)
├── data/                  # Content: services, guides, blog posts, visas, treaties, salaries
├── lib/                   # SEO, metadata, sitemap, open data, lead email helpers
├── server/                # Lead form handlers (run in the Worker)
├── i18n/ and messages/    # Locale config and strings
└── styles/                # Tailwind and global CSS

Key Files:
├── astro.config.mjs       # Astro, React and Cloudflare adapter setup
├── wrangler.jsonc         # Cloudflare Worker settings
├── public/_redirects      # Redirects (old URLs, trailing slashes)
├── public/_headers        # Response headers for the feed and sitemap
└── tailwind.config.js     # Styling configuration
```

Each route file in `src/pages/` renders its view inside `BaseLayout`. A view exports its metadata
(`metadata` or `generateMetadata`), and dynamic routes export `generateStaticParams`, which the route
file turns into `getStaticPaths`. Views that show live figures export `loadData()`, which runs at build time.

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px (primary focus)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Key Features
- Mobile-first navigation with hamburger menu
- Touch-friendly buttons and forms
- Optimized images for all screen sizes
- Fast loading on mobile networks

## 🚀 Deployment

The site runs on Cloudflare Workers, within the free plan: every page is a static file, and static
requests are free and unlimited. Only the two lead form endpoints (`/api/contact`, `/api/get-started`)
run as Worker code, which the free plan allows 100,000 times a day.

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, and again every 6 hours so the
exchange rates and World Bank figures (fetched at build time) stay fresh. After each deploy it pings
IndexNow with the URLs that changed. See [CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md) for the one-time setup.

### Environment Variables

| Name | Where | Purpose |
|------|-------|---------|
| `SENDGRID_API_KEY` | Worker secret | Sends lead notifications and auto-replies |
| `CONTACT_EMAIL` | Worker secret | Lead recipients, comma separated (defaults to the addresses in `src/lib/lead-recipients.ts`) |
| `FROM_EMAIL` | Worker secret | Sender address (default `contact@vietnamlaunchpad.com`) |
| `PUBLIC_GA_ID` | GitHub repository variable (build time) | Google Analytics 4 ID; leave unset for no analytics |

For local development, put the Worker secrets in `.dev.vars` and `PUBLIC_GA_ID` in `.env`.

### Sitemap dates

`lastmod` dates in `/sitemap.xml` come from git history. A commit that only moves or restructures
files (no content change) should include the line `Lastmod-Skip: true` in its message, so it does not
change any page's date. Keep that line when squash-merging such a pull request.

## 📊 Analytics & Tracking

### Recommended Setup
- **Google Analytics 4**: User behavior tracking
- **Google Search Console**: SEO monitoring
- **Facebook Pixel**: Social media ROI
- **Hotjar**: User experience insights

### Key Metrics to Track
- Conversion rate (contact form submissions)
- Traffic sources (organic, social, referral)
- Page performance (loading times)
- User engagement (time on page, bounce rate)

## 🔒 Security & Compliance

### Data Protection
- GDPR compliant contact forms
- Vietnam PDPL compliance (effective Jan 2026)
- Secure payment processing
- SSL/TLS encryption

### Business Compliance
- Vietnamese business registration required
- Tax compliance (CIT 20%, VAT 10%)
- Anti-corruption policies
- Professional insurance recommended

## 🤝 Partnership Integration

### Legal Partners
- Vietnamese law firms for company registration
- Licensed immigration specialists
- Certified accounting firms

### Technology Partners
- Payment gateway providers (VNPAY, MoMo)
- Banking relationships for account opening
- Translation services for documents

## 📞 Support & Maintenance

### Regular Updates Needed
- Immigration law changes
- Tax regulation updates
- Government fee adjustments
- Market pricing reviews

### Technical Maintenance
- Dependency updates
- Security patches
- Performance optimization
- Content management

## 📄 License

This project is proprietary software for Vietnam Launchpad business operations.

## 🙋‍♂️ Contact

For technical questions or business inquiries:
- Email: hello@vietnamlaunchpad.com
- Website: https://vietnamlaunchpad.com
- Location: Ho Chi Minh City, Vietnam

---

**Built with 🇻🇳 for the Vietnam expat community**