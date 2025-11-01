# Vietnam Launchpad

A multilingual Next.js website for Vietnam immigration and business consulting services, built with TypeScript, Tailwind CSS, and next-intl for internationalization.

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

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment Ready**: Optimized for Vercel/Netlify

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
- Node.js 18.17 or later
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd vietnam-launchpad

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🌍 Internationalization

The site supports 4 languages with localized URLs:

- **English** (default): `/en/`
- **Vietnamese**: `/vi/` 
- **Chinese**: `/zh/`
- **Korean**: `/ko/`

### Adding New Languages
1. Add locale to `src/i18n/config.ts`
2. Create translation file in `src/messages/[locale].json`
3. Update middleware matcher in `src/middleware.ts`

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
├── app/[locale]/           # Localized pages
├── components/             # Reusable components
├── i18n/                  # Internationalization config
├── messages/              # Translation files
└── middleware.ts          # Locale routing

Key Files:
├── tailwind.config.js     # Styling configuration
├── next.config.js         # Next.js + i18n setup
└── tsconfig.json          # TypeScript config
```

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

### Recommended Platforms
1. **Vercel** (Next.js optimized)
2. **Netlify** (Alternative with good i18n support)
3. **Vietnamese Hosting** (for better local performance)

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://vietnamlaunchpad.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@vietnamlaunchpad.com
```

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