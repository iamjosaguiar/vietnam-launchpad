export interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  date: string;
  lastUpdated: string;
  readTime: string;
  category: string;
  ctaTitle: string;
  ctaBody: string;
  ctaLink: string;
  ctaLinkText: string;
  ctaSecondaryLink?: string;
  ctaSecondaryText?: string;
  content: string;
}

const guidesData: Record<string, Guide> = {
  'cost-of-living': {
    slug: 'cost-of-living',
    title: 'Cost of Living in Vietnam 2026',
    subtitle: 'From budget nomad to comfortable family life - real numbers, real context',
    excerpt: 'A realistic breakdown of monthly costs in Ho Chi Minh City, Hanoi, and Da Nang - covering rent, food, transport, healthcare, and everything in between.',
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '12 min read',
    category: 'Finance & Money',
    ctaTitle: 'Planning Your Move to Vietnam?',
    ctaBody: 'Our consultants can walk you through realistic budgets, visa options, and what to expect in your first 90 days.',
    ctaLink: '/contact',
    ctaLinkText: 'Book a Free Consultation',
    ctaSecondaryLink: '/services/consultation',
    ctaSecondaryText: 'View 1:1 Expert Session',
    content: `## The Short Answer

Vietnam remains one of Southeast Asia's most affordable countries for expats, but "affordable" means different things depending on how you live. Here is a realistic snapshot across three lifestyle levels:

| Lifestyle | HCMC | Hanoi | Da Nang |
|---|---|---|---|
| Budget | $800-1,200/mo | $750-1,100/mo | $650-950/mo |
| Comfortable | $1,500-2,500/mo | $1,400-2,200/mo | $1,200-2,000/mo |
| Expat Premium | $3,000-5,000+/mo | $2,800-4,500+/mo | $2,500-4,000+/mo |

These figures are for a single person. Add 60-80% for a couple, more again for children.

---

## Accommodation

Rent is the single biggest variable in any expat budget.

### Ho Chi Minh City

**District 1:** $600-1,200/mo for a furnished 1-bedroom. Most central, most convenient, most expensive. Premium high-rises can reach $2,000+.

**Thao Dien / District 2:** $700-1,500/mo. Quieter, greener, preferred by families and long-term expats. Walking distance to international schools.

**Binh Thanh:** $400-700/mo. Local neighborhood with good value. A growing favourite with digital nomads and younger expats.

**District 7 / Phu My Hung:** $600-1,200/mo. Planned, clean infrastructure. Very popular with Korean and Japanese expats.

### Hanoi

**Tay Ho (West Lake):** $700-1,500/mo. The classic expat enclave. Villas, lake views, Western cafes.

**Ba Dinh / Hoan Kiem:** $500-1,000/mo. Central, historic, walkable.

**Cau Giay / My Dinh:** $400-800/mo. More local, practical, popular with those working in tech.

### Da Nang

The most affordable of the three cities. A well-appointed 2-bedroom apartment near the beach runs $500-900/mo. The expat community is smaller but growing fast.

---

## Food and Drink

### Eating Local

Vietnam's street food is world-class and genuinely cheap:

| Item | Cost (VND) | Cost (USD approx.) |
|---|---|---|
| Bowl of pho | 40,000-80,000 | $1.50-3.00 |
| Banh mi | 25,000-40,000 | $1.00-1.50 |
| Com tam (broken rice plate) | 40,000-70,000 | $1.50-2.75 |
| Local restaurant meal | 80,000-150,000 | $3.00-6.00 |
| Vietnamese coffee | 20,000-40,000 | $0.75-1.50 |
| Local beer | 15,000-30,000 | $0.60-1.20 |

**Budget food cost eating mostly local: $150-250/month**

### Western Food and Imported Goods

Vietnam applies heavy import duties on many Western products - this is where costs spike:

- Imported cheese: 2-4x home country price
- Western cereal: 3x price
- Quality wine: $15-35 minimum per bottle
- Latte at a coffee shop: 65,000-90,000 VND ($2.50-3.50)
- Western restaurant meal: 200,000-450,000 VND ($8-18)

**Mixed food budget (70% local, 30% Western): $300-500/month**

**Mostly Western diet: $600-900/month**

---

## Transport

### Ride-Hailing (Most Expats Start Here)

Grab dominates Vietnam's ride-hailing market:

- Short Grab car ride (3km): 40,000-60,000 VND ($1.50-2.50)
- Cross-city ride: 100,000-200,000 VND ($4-8)
- Monthly budget for active social life: $50-120/mo

### Owning a Motorbike

The most common expat choice for daily transport:

- Buy a used motorbike: $500-2,000 (Honda Wave, SH, Air Blade)
- Insurance: ~$20/year
- Petrol: $10-25/month
- Maintenance: $10-30/month average

> You legally need a Vietnamese driver's license or International Driving Permit to ride. See our [Driver's License Conversion service](/services/drivers-license) for how to get properly licensed.

### Owning a Car

Vietnam's import taxes on cars are steep (often 50-80% on top of base price):

- Entry-level new car: $20,000-35,000
- Parking in HCMC: $50-150/month

Most city-based expats skip car ownership entirely.

---

## Healthcare

Vietnam has excellent private hospitals in HCMC and Hanoi. Without insurance, costs add up fast:

- GP consultation (private): $30-60
- Specialist: $50-100
- Emergency visit with basic tests: $200-500
- 3-day inpatient stay: $2,000-6,000

Health insurance is strongly recommended. Regional plans run $600-1,200/year; international plans $1,500-3,000+. See our full [Healthcare and Insurance Guide](/guides/healthcare).

---

## Utilities and Internet

| Item | Monthly Cost |
|---|---|
| Electricity | $30-150 (AC-dependent) |
| Water | $5-15 |
| Fiber internet (100+ Mbps) | $10-20 |
| Mobile data (unlimited 4G) | $5-15 |
| Streaming services | $5-15 |

> Electricity is the big variable. Running AC around the clock in HCMC's heat can push bills to $120-150+ for a one-bedroom. Most expats learn to manage this quickly.

---

## Entertainment and Lifestyle

| Activity | Cost |
|---|---|
| Gym membership | $25-80/month |
| Yoga / fitness classes | $50-150/month unlimited |
| Cinema ticket | $4-8 |
| Cocktail at a bar | $5-12 |
| Night out | $20-60 |

Vietnam's cafe culture is among the world's best - working from cafes costs almost nothing. A coffee and hours of wifi: $2-4.

---

## Complete Monthly Budget Examples

### The Budget Digital Nomad (HCMC)

| Item | Cost |
|---|---|
| Room in shared apartment | $350 |
| Food (mostly local) | $200 |
| Grab + occasional transport | $60 |
| Mobile and internet | $15 |
| Entertainment | $75 |
| Healthcare (basic insurance) | $60 |
| **Total** | **~$760** |

### The Comfortable Professional (HCMC)

| Item | Cost |
|---|---|
| 1BR apartment (Thao Dien) | $900 |
| Food (mixed local/Western) | $400 |
| Transport (Grab + motorbike) | $100 |
| Utilities | $80 |
| Healthcare insurance (regional) | $100 |
| Gym and social life | $200 |
| Subscriptions and misc | $100 |
| **Total** | **~$1,880** |

### The Expat Family (HCMC, 2 adults + 1 child)

| Item | Cost |
|---|---|
| 2BR apartment (Thao Dien) | $1,400 |
| Food and groceries | $700 |
| International school fees | $1,200-2,000 |
| Transport (x2) | $200 |
| Utilities | $150 |
| Healthcare (family plan) | $250 |
| Activities and social | $300 |
| **Total** | **~$4,200-5,000** |

---

## City vs City: Which Is Cheapest?

| Category | HCMC | Hanoi | Da Nang |
|---|---|---|---|
| Rent | $$ | $$ | $ |
| Food | $ | $ | $ |
| Nightlife | $$$ | $$ | $ |
| International schools | $$$ | $$$ | $$ |
| Healthcare access | $$$ | $$$ | $ |

**Da Nang** is the most affordable and has improved dramatically in infrastructure. The trade-off is fewer international healthcare options and a smaller expat social scene.

**Hanoi** is slightly cheaper than HCMC overall, has a distinct culture (more traditional, more formal), and colder winters.

**HCMC** is the commercial hub - highest salaries, best healthcare, widest international school choices, most international atmosphere.

---

## What Drives Costs Up Unexpectedly

1. **Air conditioning** - electricity bills spike fast through summer months
2. **Imported food habits** - easy to spend an extra $400-500/month without noticing
3. **Visa runs** - quarterly flights to Cambodia or Thailand add $200-400/year if on a tourist visa
4. **International school fees** - the single biggest cost for families: $1,500-2,500/month per child at top schools
5. **Home country obligations** - mortgage, storage, or tax obligations at home do not disappear when you move

---

## Tax Considerations

If you are earning income while in Vietnam and spend 183+ days per year here, you become a Vietnamese tax resident subject to personal income tax at 5-35% on worldwide income. This is a significant consideration for remote workers and freelancers.

See our full [Vietnam Tax Guide for Expats](/guides/taxes).`,
  },

  'taxes': {
    slug: 'taxes',
    title: 'Vietnam Personal Income Tax 2026: Complete Guide for Expats',
    subtitle: "The 183-day rule, progressive rates, the new PIT law, and what US and UK expats need to know",
    excerpt: "Vietnam's biggest personal income tax reforms since 2012 took effect in January 2026. Here's what changed, what it means for expats, and how to stay compliant.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '14 min read',
    category: 'Finance & Money',
    ctaTitle: 'Tax Questions About Vietnam?',
    ctaBody: "Vietnam's 2026 PIT reforms have changed the rules for many expats. Our consultants can clarify your specific situation and help you stay compliant.",
    ctaLink: '/contact',
    ctaLinkText: 'Book a Tax Consultation',
    ctaSecondaryLink: '/services/consultation',
    ctaSecondaryText: 'View 1:1 Expert Session',
    content: `## The Essential Overview

Vietnam taxes its residents on worldwide income at progressive rates of 5% to 35%. Non-residents pay a flat 20% on Vietnam-sourced income only. The critical threshold is **183 days** - cross it in any calendar year and you become a tax resident.

In January 2026, **Law No. 109/2025/QH15** brought Vietnam's most significant personal income tax reforms since 2012. If you have been relying on older guides, much of what they say is now outdated.

---

## Tax Residency: The 183-Day Rule

You are a Vietnamese tax resident if you spend **183 days or more** in Vietnam within:

- A single calendar year (January 1 to December 31), **OR**
- Any consecutive 12-month period starting from your first entry date

Days do not need to be consecutive. Brief exits do not reset the clock.

### Non-Residents

If you spend fewer than 183 days in a year:

- Only income **sourced from Vietnam** is taxed
- Flat rate: **20%**
- No personal tax return required (employer withholds at source)

### Tax Residents

If you spend 183+ days:

- **Worldwide income** is subject to Vietnamese PIT
- Progressive rates apply (see below)
- Annual tax return required

---

## 2026 Tax Rates for Residents

Vietnam uses a progressive bracket system applied to monthly employment income:

| Monthly Taxable Income (VND) | Approx. Monthly (USD) | Rate |
|---|---|---|
| Up to 5,000,000 | Up to $200 | 5% |
| 5,000,001 - 10,000,000 | $200-400 | 10% |
| 10,000,001 - 18,000,000 | $400-720 | 15% |
| 18,000,001 - 32,000,000 | $720-1,280 | 20% |
| 32,000,001 - 52,000,000 | $1,280-2,080 | 25% |
| 52,000,001 - 80,000,000 | $2,080-3,200 | 30% |
| Over 80,000,000 | Over $3,200 | 35% |

> These are **progressive brackets** - you pay the lower rate on the portion of income falling in each band, not the top rate on everything.

### What Changed in 2026

Law No. 109/2025/QH15 (effective January 1, 2026 for employment income) introduced:

- **Raised personal deduction thresholds** - the first increase since 2013, easing pressure on middle-income earners
- **Clearer rules for remote/digital income** - better sourcing guidance for income paid by overseas employers
- **High-tech sector incentives** - preferential treatment for qualifying technology professionals
- **Updated dependent deduction amounts** - revised upward for the first time in over a decade

---

## Deductions That Reduce Taxable Income

### Personal Deduction

Every tax resident receives a personal deduction reducing monthly taxable income. The 2026 reforms raised this amount - the exact figure will be confirmed by implementing decree. Monitor official announcements for the final number.

### Dependent Deductions

Qualifying dependents (children under 18, dependent parents, disabled relatives) each reduce your monthly taxable income by a fixed amount per person.

### Social Insurance Contributions

Mandatory contributions to Vietnamese social, health, and unemployment insurance are deductible if you are employed by a Vietnamese entity.

---

## How Employment Income Is Taxed

### Working for a Vietnamese Employer

Your employer withholds PIT monthly and remits it to the tax authority. You receive net income. Annual reconciliation is required by March 31 (employer) and April 30 (individual).

### Working Remotely for a Foreign Employer

This is where it becomes complex:

**If you are a tax resident** (183+ days), you must declare and pay Vietnamese PIT on your worldwide employment income. The overseas employer does not withhold - you are responsible for self-assessment.

**If you are a non-resident** (under 183 days), income for work performed outside Vietnam is generally not Vietnam-sourced. However, if you are physically performing the work from Vietnam, the General Department of Taxation may argue the income is Vietnam-sourced.

> The practical reality: most remote workers who carefully manage their days under 183 face very low enforcement risk. But this gray area is shrinking as Vietnam develops its international tax information exchange agreements.

---

## Non-Employment Income

### Business Income

Profits of a Vietnamese-registered company are subject to **Corporate Income Tax at 20%**. Dividends paid to foreign shareholders are then subject to a **5% withholding tax**.

### Investment Income

| Income Type | Rate |
|---|---|
| Dividends | 5% |
| Bank interest | 5% |
| Securities gains (per transaction) | 0.1% of sale value |
| Real estate transfer | 2% of sale value |

### Pension Income

Most overseas pension income of a Vietnamese tax resident is included in worldwide income. Whether it is actually taxable in Vietnam depends on your tax residency status and whether a tax treaty between Vietnam and your home country allocates that income to the source or residence country.

---

## Tax Treaties

Vietnam has tax treaties with 80+ countries including the USA, UK, Australia, Germany, France, Japan, South Korea, and most EU nations.

Treaty provisions commonly:

- Prevent double taxation of the same income
- Allocate taxing rights between countries
- Reduce withholding tax rates on dividends and interest

**Important:** A tax treaty does not mean you pay zero tax - it means you do not pay the full rate in both countries. You typically claim a foreign tax credit in your home country for taxes already paid in Vietnam.

---

## US Expats: Additional Obligations

Americans do not escape the IRS by living abroad.

**Filing requirement:** US citizens and green card holders must file a US tax return regardless of residency, if income exceeds the filing threshold (~$14,600 for singles in 2026).

**Foreign Earned Income Exclusion (FEIE):** Qualifying US expats can exclude approximately $120,000-130,000 of foreign earned income from US tax (2026 amount - indexed annually).

**Foreign Tax Credit (FTC):** Alternatively, claim a dollar-for-dollar credit for Vietnamese taxes paid against your US liability.

**FBAR:** If your Vietnamese bank accounts exceed $10,000 at any point in the year, file an FBAR (FinCEN 114) by April 15 (auto-extended to October 15).

**FATCA Form 8938:** Report foreign financial accounts exceeding $200,000 at year-end (or $300,000 at any point).

> US expat taxes in Vietnam are genuinely complex. Most Americans here work with a specialist US expat tax firm in addition to managing their Vietnamese PIT obligations.

---

## UK Expats: Key Considerations

UK residents are taxed on worldwide income. If you leave the UK and become non-UK resident under the Statutory Residence Test (SRT), your foreign income is generally not taxable in the UK.

Key points:

- The SRT has specific day-count rules - get formal advice on breaking UK residency before assuming you are no longer subject to UK tax
- UK-source pension income may remain taxable in the UK depending on treaty provisions
- ISA income is UK tax-free, but Vietnam may tax it if you are a Vietnamese tax resident

---

## Filing Deadlines

| Obligation | Deadline |
|---|---|
| Employer monthly PIT withholding | By the 20th of the following month |
| Annual employer PIT reconciliation | March 31 |
| Individual annual PIT return | April 30 |
| Self-employed quarterly PIT | 30th of month after quarter end |

---

## How to Get a Tax Code

Foreign individuals earning income in Vietnam need a personal Tax Identification Number (Ma So Thue / MST).

**Process:**

1. Apply at the local Tax Department or through your employer
2. Provide passport, Vietnamese visa or TRC, and basic personal details
3. Processing time: 5-10 working days

Once issued, all Vietnam-sourced income must be declared under this code.

---

## Common Mistakes Expats Make

1. **Assuming e-visa status removes tax obligations** - Tax residency depends on days spent, not visa type
2. **Ignoring the worldwide income rule** - Tax residents must declare all income globally, not just Vietnamese income
3. **Missing self-assessment obligations** - Remote workers paid by foreign employers must file themselves; no one withholds for them
4. **Not tracking days carefully** - The 183-day threshold is unforgiving; keep a travel log
5. **Forgetting home country obligations** - Paying Vietnamese PIT does not automatically reduce what you owe at home`,
  },

  'healthcare': {
    slug: 'healthcare',
    title: 'Healthcare and Insurance in Vietnam: Complete Expat Guide 2026',
    subtitle: 'Public vs private hospitals, insurance tiers, what to expect, and how to avoid being caught without cover',
    excerpt: "Vietnam has excellent private hospitals in its major cities, but healthcare costs escalate quickly without the right insurance. This guide covers every option available to expats in 2026.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '11 min read',
    category: 'Health & Wellbeing',
    ctaTitle: 'Questions About Your Vietnam Setup?',
    ctaBody: 'Whether it is visa, tax, or general relocation questions, our consultants cover the full picture of expat life in Vietnam.',
    ctaLink: '/contact',
    ctaLinkText: 'Book a Consultation',
    ctaSecondaryLink: '/services/consultation',
    ctaSecondaryText: 'View 1:1 Expert Session',
    content: `## The Bottom Line First

Vietnam's private healthcare system in HCMC and Hanoi is genuinely good - modern facilities, internationally trained doctors, reasonable costs by Western standards. But without insurance, a serious illness or accident can cost $5,000-50,000+. **Do not arrive without cover.**

---

## Understanding the Healthcare Landscape

### Public Healthcare

Vietnam's public hospitals are technically accessible to foreigners but have significant limitations:

- Staff rarely speak English
- Facility quality varies enormously
- Waiting times can be long
- Administrative processes are conducted entirely in Vietnamese

**Cost:** Very low. Consultations can be as little as $3-7 at public facilities. But this comes with the limitations above.

### Private Hospitals (Local Tier)

Mid-tier private hospitals exist in all major cities. Better facilities than public, some English-speaking staff, more predictable care quality.

**Cost:** Moderate. Consultation $20-50.

### International Hospitals

The gold standard for expats. Concentrated in HCMC and Hanoi.

**Ho Chi Minh City:**
- FV Hospital (French-Vietnamese) - the most comprehensive, excellent emergency department
- Victoria Healthcare - multiple clinics, strong GP access
- Family Medical Practice - reliable GP network across multiple locations
- Raffles Medical - Singapore-standard care

**Hanoi:**
- Hanoi French Hospital
- VINMEC International Hospital (multiple locations nationally)
- Family Medical Practice Hanoi
- SOS International

**Da Nang:**
- Limited international options - a real consideration for families choosing between cities
- VINMEC Da Nang has improved facilities
- Danang Hospital has an international wing

---

## Healthcare Costs Without Insurance

| Procedure | Cost Range |
|---|---|
| GP consultation (private international) | $40-80 |
| Specialist consultation | $60-120 |
| Basic blood panel | $30-80 |
| X-ray | $30-70 |
| Emergency visit + basic tests | $200-500 |
| Appendicitis (3-day stay) | $3,000-6,000 |
| Normal childbirth | $2,500-6,000 |
| Major surgery | $15,000-60,000+ |
| Dental cleaning | $30-60 |
| Root canal | $100-300 |

---

## Insurance Options Explained

### Vietnam Social Health Insurance (BHYT)

- **Who it covers:** Employees at Vietnamese-registered companies
- **Employee cost:** ~1.5% of salary (employer contributes ~3%)
- **Coverage:** Public hospital access only
- **Verdict:** Not sufficient as standalone cover for most expats

### Regional Plans (Best Value for Asia-Based Expats)

Insurance plans covering Asia-Pacific. Good value if you plan to stay in Asia:

**Approximate cost:**
- Individual: $500-1,200/year
- Family: $1,500-3,000/year

**Coverage typically includes:**
- Inpatient care at private hospitals
- Outpatient (usually as add-on)
- Emergency evacuation within Asia
- Treatment in most Asian countries

**Does not typically include:** Treatment in the USA, UK, or EU.

**Verdict:** Excellent value for long-term residents who are comfortable accessing healthcare within Asia.

### International Plans (Full Global Coverage)

For expats who travel widely or want home-country treatment access:

**Approximate cost:**
- Individual: $1,500-3,500/year
- Family: $4,000-8,000+/year

**Coverage typically includes:**
- Worldwide (sometimes excluding USA to reduce premiums)
- Inpatient and outpatient
- Dental (add-on)
- Maternity (add-on, with waiting period)
- Emergency medical evacuation globally

**Verdict:** Worth it if you travel frequently, have pre-existing conditions best treated at home, or are risk-averse.

---

## Key Terms You Need to Understand

**Direct Billing:** The insurer pays the hospital directly - you do not pay upfront and claim back. Major international hospitals in HCMC and Hanoi have direct billing with most top insurers. **Always confirm before treatment.**

**Deductible / Excess:** The amount you pay out-of-pocket before insurance covers the remainder. Higher deductible = lower premium.

**Pre-existing Conditions:** Most insurers exclude or charge extra for existing health conditions. Disclose accurately - fraudulent non-disclosure can void all claims.

**Waiting Periods:** Maternity typically carries a 10-12 month waiting period. Buy before you plan to need it.

**Evacuation Cover:** Medical evacuation from Vietnam can cost $50,000-100,000+. This cover is non-negotiable.

---

## What to Look for When Choosing a Plan

1. **Does it cover your preferred hospital?** Confirm direct billing at FV Hospital, Family Medical Practice, or whichever facility you would use
2. **Geographic scope** - Asia-only vs. global (and whether USA is included)
3. **Inpatient vs. outpatient** - cheaper plans only cover hospitalization; outpatient adds routine GP visits
4. **Dental add-on** - worth having given Vietnam's quality and low prices
5. **Maternity** - if relevant, buy before trying to conceive
6. **24/7 support and online claims** - matters when you actually need to use it

---

## Dental Care in Vietnam: A Genuine Advantage

Vietnamese dental care is high quality and substantially cheaper than Western prices:

| Treatment | Vietnam | Western Countries |
|---|---|---|
| Full clean and scale | $30-60 | $100-250 |
| Tooth extraction | $20-60 | $100-400 |
| Root canal | $100-300 | $800-2,000 |
| Ceramic crown | $150-400 | $1,000-2,500 |
| Dental implant | $600-1,200 | $3,000-6,000 |
| Invisalign / aligners | $1,500-3,000 | $5,000-10,000+ |

Quality at established clinics is genuinely good. Look for internationally trained dentists, get a full written treatment plan with costs before proceeding.

---

## Mental Health Resources

An underserved topic for expats. Vietnam has limited English-language mental health options compared to Western countries:

- Online therapy platforms (BetterHelp, Talkspace) work well with Vietnam's fast internet
- English-speaking counselors do exist in HCMC - expat Facebook groups are the best source of recommendations
- VINMEC and some international hospitals have psychiatry departments
- Adjustment difficulties, anxiety, and culture shock are common for new arrivals - seek help early rather than late

Most international insurance plans now include some mental health cover. Check the annual limits (typically $2,000-5,000).

---

## Air Quality and Long-Term Health

A real consideration, particularly for Hanoi:

- Hanoi has recorded some of the worst urban air quality in Asia, especially October through January
- HCMC is significantly better but still elevated compared to Western cities
- Air purifiers in apartments are widely recommended and available
- This is an important factor for anyone with respiratory conditions, asthma, or young children

---

## Vaccinations Before You Arrive

Standard recommendations for Vietnam include:

- Hepatitis A and B
- Typhoid
- Japanese Encephalitis (if spending time in rural areas)
- Rabies (if working with animals or in rural settings)
- Standard adult boosters: Tetanus, MMR, COVID-19 (follow current guidelines)

Vietnam has seasonal dengue fever - no widely available vaccine, managed through mosquito avoidance.

---

## Practical Steps When You Arrive

1. Sort insurance **before you arrive** - do not land uncovered
2. Register with a GP clinic in your **first week** - establish a relationship before you are sick
3. Save your nearest international hospital emergency number in your phone (FV Hospital HCMC: 028 5411 3333)
4. Carry your insurance card or have digital policy details accessible
5. Know your nearest emergency facility before you need it`,
  },

  'digital-nomads': {
    slug: 'digital-nomads',
    title: 'Digital Nomad in Vietnam 2026: The Honest Visa, Tax and Lifestyle Guide',
    subtitle: 'Vietnam still has no official digital nomad visa. Here is what is actually available, what is legal, and how to make it work.',
    excerpt: "Vietnam is one of Asia's top digital nomad destinations - but the legal situation is more nuanced than most guides admit. A clear-eyed breakdown of your real options.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '13 min read',
    category: 'Visas & Residency',
    ctaTitle: 'Want to Stay in Vietnam Long-Term?',
    ctaBody: "If you're ready to move beyond the 90-day cycle, we can help structure a proper long-term visa or residency through investment, work, or business setup.",
    ctaLink: '/contact',
    ctaLinkText: 'Talk to an Expert',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Explore TRC Options',
    content: `## The Reality Check

Vietnam consistently ranks among Asia's top digital nomad destinations - low costs, excellent internet, great food, vibrant culture. But there is a common misconception: Vietnam does **not** have an official digital nomad visa, and the legal status of remote work is genuinely murky.

This guide cuts through the noise and tells you what is actually available, what is legal, and how most people navigate the situation in practice.

---

## Your Visa Options

### The E-Visa (Most Common)

Vietnam's e-visa is the standard entry document for most nationalities:

- **Eligible:** 80+ countries
- **Duration:** Up to 90 days per entry
- **Entry:** Multiple entry
- **Cost:** $50 USD
- **Processing:** 3-5 business days online
- **Renewability:** Cannot extend - you must exit and re-enter

For nomads staying under 90 days at a time, this is the cleanest option. Apply through the official Vietnam immigration portal.

The limitation: you must exit every 90 days. For some this is fine (a quick trip to Cambodia or Thailand). For others, it becomes expensive and disruptive over time.

### The Business Visa (DN)

- **Duration:** 90 days, single or multiple entry
- **Requires:** Invitation letter from a Vietnamese company or official body
- **Advantage:** Can potentially be extended in-country
- **Who uses it:** Expats with an existing Vietnamese business contact

Not accessible for solo nomads without local connections.

### The Investment Visa (DT)

Available to those who actively invest in a Vietnamese company:

- **Requirements:** Active investment in a Vietnamese-registered entity
- **Duration:** 1-5 years depending on investment amount
- **Path to:** TRC (Temporary Residence Card)

For serious long-termers who want to establish a proper business base. Not a nomad option, but worth knowing about if your plans evolve.

### The Special Visa Exemption Card (SVEC)

A significant new option introduced by Decree No. 221/2025/ND-CP in August 2025:

- **Validity:** 5 years
- **Entry:** Multiple entry
- **Stay per visit:** Up to 90 days
- **Advantage:** No repeated visa applications for 5 years

The application process and eligibility criteria are still being fully operationalized. Check current official guidance before planning around this.

### The Golden Visa (Proposed)

As of April 2026, Vietnam's Golden Visa remains a proposal. The Tourism Advisory Board recommended it in April 2025. There is no legislation, no application process, and no confirmed timeline. Do not plan around this.

---

## The Legal Status of Remote Work

This is where most guides get vague. Here is the honest breakdown.

### What the Rules Actually Say

**Working remotely for a foreign employer, paid by a foreign entity, on an e-visa:** This exists in a legal gray area. Vietnamese immigration law does not explicitly authorize it. There is no known case of a foreigner being deported or penalized for working remotely for a non-Vietnamese employer on an e-visa.

The government appears to tolerate it, and there is a clear economic interest in attracting high-earning remote workers to the country.

**Working for a Vietnamese company on an e-visa:** Requires a valid work permit. No gray area here.

**Earning income from Vietnamese clients while on an e-visa:** Technically taxable and may require business registration, even if payments are made to an overseas account.

### The Practical Reality

Thousands of digital nomads work remotely from Vietnam on e-visas every year without issue. However:

- The legal gray area is real and may tighten as the government develops its position
- The bigger practical risk is on the banking and home-country tax side rather than Vietnamese immigration enforcement
- If you are earning Vietnam-sourced income, you technically have obligations here

**Honest advice:** If you are working for a non-Vietnamese employer and staying under 183 days per year, the practical risk is very low. If you want to build a long-term base, structure it properly.

---

## The 183-Day Tax Threshold

The most important number for any nomad in Vietnam:

- **Under 183 days/year:** Non-resident. Only Vietnam-sourced income is taxed (flat 20%). If you earn from foreign clients, realistic Vietnamese tax exposure is near zero.
- **183+ days/year:** Tax resident. Vietnam taxes **worldwide income** at progressive rates of 5-35%.

Many nomads deliberately manage their time to stay under 183 days per calendar year. This is legal when done transparently - it is understanding the rules, not evading them.

Track your entry and exit dates from the first day. Vietnamese immigration records all border crossings electronically.

**Do not forget your home country taxes.** Staying under 183 days in Vietnam does not automatically make you a non-resident in your home country. Understand your global tax position.

Full details in our [Vietnam Tax Guide for Expats](/guides/taxes).

---

## Best Cities for Digital Nomads

### Ho Chi Minh City (Saigon)

Vietnam's commercial capital. The most international, most connected, most socially active.

**Pros:** Fast internet everywhere, hundreds of cafes and co-working spaces, best food variety, strong and active expat community, easy international flights, best healthcare access.

**Cons:** Traffic is intense, air quality moderate, more expensive than other Vietnamese cities.

**Best neighborhoods:** Binh Thanh (creative, affordable), District 1 (central, convenient), Thao Dien (quieter, greener, popular for longer stays).

### Da Nang

The rising star. Smaller, more relaxed, beach access, growing infrastructure.

**Pros:** Beach 10 minutes from the center, substantially cheaper than HCMC, less traffic, good weather most of the year, growing nomad community.

**Cons:** Smaller social scene, fewer international healthcare options, typhoon risk September-November.

**Best neighborhoods:** My Khe beach area, An Thuong (known locally as the "foreigners' street").

### Hanoi

Vietnam's capital. More traditional, more cultural, more bureaucratic.

**Pros:** Richer history and culture, slightly cheaper than HCMC overall, excellent food scene.

**Cons:** Worst air quality of the three (especially October-March), colder winters, less international in feel.

**Best neighborhoods:** Tay Ho (West Lake), Ba Dinh.

---

## Internet Quality

Vietnam's internet is one of its underrated strengths:

- Fiber to the home: widely available at 200-500 Mbps for $10-20/month
- Mobile data (4G): fast and cheap at $5-15/month for unlimited plans
- Providers: Viettel, VNPT, FPT Telecom - all reliable
- Cafe wifi: universally available and usually fast
- VPN: recommended - some services are blocked, and it is standard practice among expats

---

## Co-Working Spaces

**HCMC:**
- Toong (multiple locations, reliable, professional)
- Dreamplex (premium, community-focused, regular events)
- Kafnu (high-end, sleek, central)

**Da Nang:**
- Toong Da Nang
- The Nest (casual, beach-adjacent)

**Cost:** $80-200/month for full-time hot desk; $150-350/month for dedicated desk with meeting room access.

Many cafes in Vietnam are built for people to work from. A $2 coffee buys you hours of wifi, power, and air conditioning.

---

## Practical Setup Checklist

When you arrive:

- Get a local SIM at the airport (Viettel is recommended for coverage; ~200,000 VND / $8 with data)
- Set up a monthly data plan (~150,000-200,000 VND/month for unlimited 4G)
- Download Grab (transport and food delivery)
- Set up a VPN before arrival (some services are blocked without one)
- Arrange accommodation with confirmed fast wifi before landing
- Start tracking your entry date for the 183-day count

---

## Banking and Money

Without a work permit and long-term visa, opening a Vietnamese bank account is difficult. What nomads actually do:

- **Wise:** Best for international transfers. Holds VND. Works at all ATMs. Most popular tool among expats.
- **Revolut:** Similar to Wise. Better for EUR/GBP-based users.
- **Charles Schwab Investor Checking (USA):** Refunds all ATM fees globally. The gold standard for American nomads.
- **Cash from ATMs:** Agribank and BIDV have lower fees. ATMs charge 30,000-60,000 VND per foreign-card withdrawal.

---

## Community and Social Life

- **Facebook Groups:** "Expats in Ho Chi Minh City", "Da Nang Expats", "Digital Nomads Vietnam" - join before you arrive
- **Meetup.com:** Regular nomad and expat meetups in HCMC and Da Nang
- **InterNations:** More formal professional network
- **Bumble BFF:** Works in Vietnam for non-romantic social connections

The language barrier is real but improving. Basic Vietnamese phrases are appreciated and genuinely open doors with locals.`,
  },

  'renting': {
    slug: 'renting',
    title: 'Renting an Apartment in Vietnam: Complete Expat Guide 2026',
    subtitle: 'Finding your place, avoiding scams, negotiating leases, and what to watch out for in every major city',
    excerpt: "Vietnam's rental market has no shortage of apartments, but finding the right one at the right price takes local knowledge. This guide covers everything from search to signing.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '11 min read',
    category: 'Housing & Real Estate',
    ctaTitle: 'Getting Established in Vietnam?',
    ctaBody: "Once you have found your apartment, the next step is sorting your long-term visa or residency status. We can handle that side completely.",
    ctaLink: '/contact',
    ctaLinkText: 'Talk to Us About Your Visa',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Explore TRC Options',
    content: `## Before You Search

**Rent short-term first.** Book an Airbnb, hotel, or serviced apartment for your first 2-4 weeks before committing to a long-term lease. Many expats regret signing a lease based purely on online research. The neighborhood you thought you wanted is often not the one you end up loving.

---

## Where to Search

**Online:**

- **Batdongsan.com.vn** - Vietnam's main property platform. In Vietnamese but Google Translate handles it well.
- **Nhatot.com** - More user-friendly for foreigners. Good selection.
- **Facebook Marketplace / expat Facebook groups** - "Expats in HCMC Apartments", "Hanoi Housing for Expats". Often the best source of quality listings shared within the community.

**On the Ground:**

- Walk target neighborhoods and look for signs: "Phong Cho Thue" (Room for Rent), "Nha Cho Thue" (House for Rent)
- Ask local cafes and guesthouses for leads
- Connect with other expats who often know of apartments through word of mouth before they are publicly listed

**Real Estate Agents:**

Agents are common in Vietnam and are typically free for the tenant (paid by the landlord on successful lease). Quality varies significantly. Get agent recommendations from the expat community rather than using unknown walk-in agents.

---

## Neighborhood Guides

### Ho Chi Minh City

**District 1 (Ben Nghe / Pham Ngu Lao):** The most central, most convenient, most expensive. Good for short stays or if walkability is your priority. Noisy and more touristy than residential.

**Binh Thanh:** Adjacent to District 1 but more local in feel. Growing creative scene. Popular with younger expats and digital nomads. Good value relative to proximity to the center.

**Thao Dien (District 2 / Thu Duc City):** The family expat hub. Green, quieter, excellent cafe culture, walking distance to international schools. Slightly elevated prices but widely considered the most liveable for longer-term stays.

**District 7 / Phu My Hung:** Planned, clean, good infrastructure. Popular with Korean and Japanese expats. More suburban atmosphere.

### Hanoi

**Tay Ho (West Lake):** The traditional expat enclave. Villas, lake views, Western restaurants and cafes, good international school access. Most expensive area outside central districts.

**Hoan Kiem / Ba Dinh:** Central and historic. Charming but noisy. Better suited to shorter stays.

**Cau Giay / My Dinh:** More modern and practical. Popular with those working in tech or government-adjacent sectors.

### Da Nang

**My Khe Beach Area:** Walking distance to the beach. The main tourist and expat zone.

**An Thuong:** Often called the "foreign neighborhood." Concentrated expat cafes, restaurants, and housing. Strong community feel.

**Son Tra Peninsula:** More residential and scenic but a longer commute to the city center.

---

## What to Expect to Pay

### Ho Chi Minh City

| Type | Neighborhood | Monthly |
|---|---|---|
| Studio / 1BR | District 1 | $400-700 |
| Studio / 1BR | Binh Thanh | $300-550 |
| 1BR modern apartment | Thao Dien | $600-1,000 |
| 2BR modern apartment | Thao Dien | $900-1,500 |
| 3BR villa | Thao Dien | $1,500-4,000 |

### Hanoi

| Type | Neighborhood | Monthly |
|---|---|---|
| 1BR apartment | Tay Ho | $500-900 |
| 2BR apartment | Tay Ho | $800-1,500 |
| Villa | Tay Ho | $1,200-3,500 |
| 1BR apartment | Cau Giay | $400-700 |

### Da Nang

| Type | Monthly |
|---|---|
| 1BR apartment | $250-500 |
| 2BR apartment | $400-800 |
| Beach view apartment | $500-900 |

---

## The Lease Agreement

This is where many expats get into trouble. Vietnam has weak tenant protection laws compared to most Western countries.

### What a Good Lease Includes

- Full names and passport numbers of both parties
- Complete property address including unit number
- Lease term (typically 6 or 12 months)
- Monthly rent (specify currency - VND or USD; most expat leases are in USD)
- Payment schedule (monthly or quarterly)
- Security deposit amount (typically 1-2 months rent)
- What is included: utilities, internet, parking, cleaning service
- Rent increase terms (if any) during the fixed term
- Early termination clause: notice period and penalty
- Maintenance responsibilities: who pays for what

### Red Flags to Watch For

- **No written contract** - always insist on one, even with a seemingly trustworthy landlord
- **Utilities unspecified** - get electricity terms in writing (see below)
- **No move-in condition documentation** - document everything with photos before signing
- **Very short notice period** - you want at least 30 days from either side

### Language

Many leases are in Vietnamese only. Either have a trusted Vietnamese speaker review it, or request a bilingual version. The **Vietnamese text is legally binding** - in any dispute, the Vietnamese version takes precedence in Vietnamese courts.

---

## Common Scams and How to Avoid Them

### The Inflated Electricity Bill

The most common issue. Vietnam's official electricity rate is 3,000-4,000 VND/kWh. If you are being charged 5,000-7,000 VND/kWh, you are being overcharged.

**Fix this in the lease:** Specify that the electricity rate equals the official EVN (national utility) published rate.

### The Deposit Dispute

Landlord claims damage at move-out to retain the security deposit.

**Protection:** Take timestamped photos and video of every room, wall, and appliance at move-in. Email them to yourself (creates a tamper-proof timestamp). Do the walkthrough with the landlord present where possible.

### The Bait-and-Switch Listing

Advertised at an attractive price, then "just rented" when you call - followed by a pitch for a more expensive property. Walk away.

### The Absentee Landlord

Property is managed by an agent with no authority to approve repairs. Maintenance requests disappear. Ask before signing who your actual contact is for day-to-day issues.

---

## Utilities: What You Need to Know

**Electricity:** Vietnam's state utility (EVN) sets published rates. Running AC constantly in HCMC's heat can push bills to $80-150/month for a one-bedroom. Clarify in writing who pays and at what rate.

**Water:** Generally very cheap ($5-15/month). Usually included in rent.

**Internet:** Getting your own fiber line is recommended (FPT, VNPT, or Viettel - $10-20/month for 200+ Mbps) rather than relying on landlord-provided wifi, which may be slow or shared with other units.

---

## Furnished vs. Unfurnished

Most expat apartments are furnished - ready to move in. Before signing:

- Test the AC (critical in HCMC's heat)
- Check the hot water heater
- Assess the mattress quality
- Verify the washing machine works

Unfurnished apartments have cheaper rent but require you to buy or rent furniture. Only worth it if you are committing to 2+ years.

---

## Getting Your Deposit Back

When moving out:

1. Give notice as specified in your lease (typically 30-60 days)
2. Arrange a walkthrough with the landlord before your departure date
3. Address any agreed cleaning or minor repairs beforehand
4. Get deposit return confirmed in writing with a specific date
5. Your move-in photos are your best protection if there is a dispute

Vietnamese law requires deposit return within a certain period, but enforcement is weak. A positive landlord relationship throughout the tenancy is your best practical guarantee.`,
  },

  'banking': {
    slug: 'banking',
    title: 'Banking in Vietnam for Foreigners 2026: A Practical Guide',
    subtitle: 'Opening accounts, sending money home, what banks will and will not do for expats, and the best alternatives',
    excerpt: "Opening a Vietnamese bank account as a foreigner is possible but requires the right documentation. Here's exactly what you need, which banks work best for expats, and the best alternatives if a local account is out of reach.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '10 min read',
    category: 'Finance & Money',
    ctaTitle: 'Getting Set Up for the Long Term?',
    ctaBody: 'A TRC or work permit unlocks proper banking access and a lot more. We handle the paperwork and make sure everything goes through correctly.',
    ctaLink: '/contact',
    ctaLinkText: 'Talk to Us',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Explore TRC Options',
    content: `## Can Foreigners Open a Vietnamese Bank Account?

**Yes - but requirements vary by bank and by your visa status.**

In general:

- **Easiest:** Foreigners with a TRC (Temporary Residence Card) or valid work permit
- **Possible:** Foreigners with a long-stay visa (business visa, investor visa)
- **Difficult:** Foreigners on tourist visas or e-visas
- **Nearly impossible:** Tourists with no long-term documentation

Some banks have become more foreigner-friendly in recent years; others have added bureaucratic hurdles. The situation changes frequently and varies by branch.

---

## Required Documents

1. Passport (original and photocopy)
2. Valid Vietnamese visa (original and photocopy)
3. TRC or Work Permit (if you have one - significantly increases your chances)
4. Proof of address in Vietnam (utility bill, lease agreement, or hotel registration)
5. Initial deposit (typically 500,000-2,000,000 VND / $20-80)
6. Tax identification number (MST) - increasingly required by larger banks

> Branch staff interpretation varies significantly. Going to a foreigner-friendly branch in an expat-dense area (Thao Dien in HCMC, Tay Ho in Hanoi) consistently produces better outcomes than smaller local branches.

---

## Best Banks for Expats

### VPBank

Widely considered the most foreigner-friendly by the expat community:

- English-speaking staff at major branches
- Accepts e-visa holders at some branches (branch-dependent, worth calling ahead)
- Good mobile app with English interface
- Relatively smooth international transfer process

### Techcombank

- Modern app with a good user experience
- English-language interface available
- Requires TRC or work permit at most branches
- Popular among expats employed by local or foreign companies

### BIDV

- State-owned and reliable
- Wide branch and ATM network nationally
- More bureaucratic than private banks
- Works well for those with full documentation

### Vietcombank

- Largest bank in Vietnam, most ATMs nationwide
- More bureaucratic than private banks
- Better suited to long-term residents with complete documentation

### HSBC Vietnam

- International standards and process
- Global account linking possible if you already bank with HSBC internationally
- Higher minimum balance requirements
- Easiest for those with an existing HSBC relationship

---

## What You Can Do with a Vietnamese Account

- Receive VND salary payments
- Pay rent and utilities by transfer
- Access ATMs nationwide at zero fee (own bank) or minimal fee (other banks)
- Pay via local QR apps (ZaloPay, VNPAY, MoMo)
- Send money internationally (with documentation of income source)
- Receive international transfers

---

## International Money Transfers

### Sending Money Out of Vietnam

Requires documentation of the legal source of funds. Employment income supported by tax receipts is straightforward. Large undocumented transfers may be blocked. Banks typically require tax payment receipts for transfers above certain thresholds.

### Receiving Money into Vietnam

Generally smoother. Large incoming transfers may require a brief explanation of source. Works well for remote workers receiving salary from abroad.

### Best Transfer Tools

| Service | Best For | Fee | Speed |
|---|---|---|---|
| Wise (formerly TransferWise) | Mid-size transfers ($500-10,000) | 0.5-2% | 1-3 days |
| Revolut | Small, frequent transfers | Low | Same day |
| Bank wire | Large formal transfers | $20-50 flat | 1-5 days |
| Western Union | Cash pickup option | Higher | Varies |

**Wise is the most popular tool among expats in Vietnam** - transparent fees, good exchange rates, VND is a supported currency.

---

## If You Cannot Open a Vietnamese Account

Many shorter-term expats and digital nomads never open a local account and function perfectly well without one.

### Wise Multi-Currency Account

- Hold VND, USD, EUR, GBP, and others in one place
- Debit card works at all Vietnamese ATMs and contactless merchants
- Best exchange rates available to individual users
- No Vietnamese bank account required
- The most widely recommended tool in the expat community

### Revolut

- Similar to Wise
- Better for Europeans (EUR/GBP-based)
- Works at all ATMs in Vietnam

### International Cards with Low Fees

- **Charles Schwab Investor Checking (USA):** Refunds all ATM fees worldwide. The gold standard for American travelers and expats.
- **Starling Bank (UK):** No foreign transaction fees, easy ATM access
- **Monzo (UK):** Works well internationally, popular with UK expats

### Cash (VND)

Still widely used in Vietnam, particularly for markets, street food, smaller shops, and landlord rent payments. Getting sufficient VND from ATMs is easy - the fee per withdrawal is your only cost.

---

## ATMs: What to Know

- **Most ATMs available:** Vietcombank, BIDV, Agribank - distributed across all cities
- **Withdrawal limits:** Typically 2,000,000-5,000,000 VND per transaction ($80-200). Multiple transactions in one session generally work.
- **Fees for foreign cards:** 30,000-60,000 VND ($1.20-2.50) per withdrawal, plus whatever your own bank charges
- **Skimming risk:** Use ATMs inside bank branches or at hotel lobbies rather than standalone street ATMs where possible

---

## Mobile Payment Apps

Vietnam has a fast-evolving mobile payment ecosystem:

- **MoMo:** Most popular Vietnamese e-wallet. Increasingly accessible to foreigners with a Vietnamese phone number and basic ID.
- **ZaloPay:** Integrated with Zalo (Vietnam's equivalent of WhatsApp)
- **VNPAY:** QR-based payment accepted at most supermarkets, restaurants, and larger shops
- **GrabPay:** Integrated with the Grab app - simplest for paying rides and food delivery

These apps increasingly accept Visa and Mastercard, meaning basic functionality does not require a local bank account.

---

## Getting Paid as a Freelancer or Remote Worker

The cleanest setup for remote workers:

1. Invoice and receive payment through a home-country business entity (sole trader, LLC, limited company)
2. Receive into a home-country or Wise account
3. Transfer to Vietnam as needed for living expenses
4. Maintain clear records of all transfers in and out

This is not tax advice - speak with an accountant familiar with both your home country obligations and Vietnamese requirements. See our [Vietnam Tax Guide](/guides/taxes).

---

## Where This Is Headed

Vietnam's banking sector is rapidly digitizing. Cashless payment is increasingly standard in cities - QR codes are accepted at most shops, restaurants, and markets. The practical situation for expats improves year by year, particularly for those with TRCs or work permits. For nomads and shorter-term visitors, Wise and Revolut fill the gap effectively and most do not feel the absence of a local account.`,
  },

  'international-schools': {
    slug: 'international-schools',
    title: 'International Schools in Vietnam 2026: The Complete Guide for Expat Families',
    subtitle: 'Costs, curricula, top schools in HCMC and Hanoi, application timelines, and how to choose',
    excerpt: "Vietnam's international school sector has grown 40%+ since 2019. Fees range from $10,000 to $38,000 per year. This guide covers every option so you can plan your family's move accurately.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '13 min read',
    category: 'Family & Education',
    ctaTitle: 'Planning a Family Move to Vietnam?',
    ctaBody: 'School fees are the biggest variable in a family budget. Our consultants can walk you through school options, visa requirements for children, and the full family setup.',
    ctaLink: '/contact',
    ctaLinkText: 'Book a Family Consultation',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Explore TRC Options',
    content: `## The Education Landscape

Vietnam offers three pathways for expat children: public schools (Vietnamese curriculum, free), private bilingual schools (mid-range fees, mixed curriculum), and international schools (full English-medium, internationally recognised curricula). Most expat families with children choose international schools for continuity, language, and university pathway considerations.

Since 2019, the number of international schools in Vietnam has grown by over 40%, driven by both the growing expat population and affluent Vietnamese families seeking global education standards.

---

## Education Pathways Compared

| Type | Language | Annual Cost | Best For |
|---|---|---|---|
| Public school | Vietnamese | Free (since Sept 2025) | Long-term residents, Vietnamese-speaking children |
| Private bilingual | English + Vietnamese | $3,000-8,000 | Budget-conscious families, bilingual development |
| International school | Primarily English | $10,000-38,000 | Most expat families |

### Public Schools: Free But Challenging

From September 2025, public school tuition in Vietnam is officially free, including for foreign children with valid visas. However:

- Almost all instruction is in Vietnamese
- Foreign children typically need 2-3 years of intensive Vietnamese study before joining mainstream classes
- This works well for families committing to 5+ years in Vietnam and wanting deep cultural integration
- Not practical for most expat families on shorter assignments

### Bilingual Private Schools

A growing middle ground. English-medium core subjects with Vietnamese integration:

- Much lower fees than international schools
- Less internationally recognised curriculum
- Can work well for primary-age children who will continue education in Vietnam

---

## International School Curricula

### International Baccalaureate (IB)

The most universally recognised pathway. Three programs:
- PYP (Primary Years Programme): Ages 3-12
- MYP (Middle Years Programme): Ages 11-16
- DP (Diploma Programme): Ages 16-19 - the globally recognised university entry qualification

**Good for:** Families who may move between countries, students targeting universities globally.

### British Curriculum (IGCSE / A-Levels)

The pathway most familiar to UK, Australian, and international families. Strong in Vietnam with several British international schools.

**Good for:** Families planning to return to UK, Australia, or attend UK-standard universities.

### American Curriculum (AP / SAT)

Follows the US K-12 system, culminating in Advanced Placement exams. Best preparation for US university applications.

**Good for:** American families or those targeting US universities.

### Canadian and Singapore-Cambridge

Both offer strong academic reputations. Singapore-Cambridge is particularly respected across Asian universities.

---

## Top Schools in Ho Chi Minh City

HCMC has the widest selection of international schools in Vietnam. The following are consistently cited as the strongest:

### ISHCMC (International School Ho Chi Minh City)
- Curriculum: IB (PYP, MYP, DP)
- Approx. annual fees: $25,000-35,000
- Location: District 2 / Thao Dien
- Notes: Established, strong IB results, large expat community

### BIS HCMC (British International School)
- Curriculum: British (Early Years through A-Level)
- Approx. annual fees: $20,000-32,000
- Location: District 2 and District 7 campuses
- Notes: Part of the Nord Anglia group, strong extracurricular programme

### SSIS (Saigon South International School)
- Curriculum: US curriculum (AP)
- Approx. annual fees: $18,000-28,000
- Location: District 7 / Phu My Hung
- Notes: Strong US college placement record

### Canadian International School
- Curriculum: Canadian / IB
- Approx. annual fees: $22,000-35,000
- Location: Binh Thanh
- Notes: Strong bilingual (English/French) programme option

### ACST (Australian International School)
- Curriculum: Australian curriculum
- Approx. annual fees: $15,000-25,000
- Location: District 2
- Notes: Smaller and more community-feel than larger schools

> Annual fee ranges are approximate for 2025-26 and cover tuition only. Add registration fees (typically $1,000-3,000 one-off), capital levy, and activities fees.

---

## Top Schools in Hanoi

### Hanoi International School (HIS)
- Curriculum: IB
- Approx. annual fees: $20,000-30,000
- Location: Tay Ho

### British International School Hanoi (BIS)
- Curriculum: British
- Approx. annual fees: $18,000-28,000
- Location: Long Bien

### Lycee Francais Alexandre Yersin
- Curriculum: French National (Baccalaureat)
- Fees: Lower than most international schools
- Notes: Best option for French-speaking families

### UNIS Hanoi (United Nations International School)
- Curriculum: IB
- Approx. annual fees: $25,000-35,000
- Notes: Strong global community, competitive entry

---

## Da Nang: Limited But Growing

Da Nang has fewer international school options than HCMC or Hanoi - this is a real consideration for families choosing between cities.

- **Da Nang International School:** IB curriculum, fees approximately $12,000-20,000/year
- **Horizon International School:** British curriculum, more affordable fees
- **Babylon International School:** Smaller, preschool through primary

Families in Da Nang with secondary-age children sometimes choose to board in Hanoi or HCMC, or relocate.

---

## The Real Cost of International School

Headline tuition fees are not the full picture:

| Cost Item | Typical Range |
|---|---|
| Annual tuition | $15,000-35,000 |
| One-time registration fee | $1,000-3,000 |
| Annual capital levy | $500-2,000 |
| Uniforms | $200-500 |
| Lunch programme | $800-1,500/year |
| School bus | $1,000-2,500/year |
| School trips and activities | $500-2,000/year |
| **True annual cost** | **$18,000-45,000+** |

For a family with two school-age children at a top school in HCMC, school fees alone can reach $70,000-80,000 per year. This is typically the largest single item in an expat family budget.

---

## Applying to International Schools

### Timeline

- **Top schools in HCMC and Hanoi have waiting lists**, particularly at desirable entry years (Nursery, Year 1, Year 7, Year 10)
- Apply **6-12 months** before your intended start date
- Many schools require an assessment or interview as part of the admissions process
- Some schools hold places for late-notice corporate relocations - ask admissions about this

### What to Prepare

- Copies of last 2 years of school reports
- Passport copies for child and parents
- Proof of family visa/residency status (or planned status)
- Completed application form and application fee ($100-300)
- Teacher reference letters (some schools require)

### Entry Assessments

Most schools assess English language ability and academic readiness. Non-English-speaking children may be placed in English as an Additional Language (EAL) support programmes.

---

## Kindergartens and Nurseries

For younger children (ages 1-5), options are more varied and generally more affordable:

- International nurseries and kindergartens: $500-2,000/month
- Vietnamese private preschools with some English: $200-600/month
- Many expat families use a combination of local nanny and playgroup

Popular international nursery brands in HCMC: Little Dreamers, Saigon Star, Maple Bear Canadian Preschool.

---

## University Pathways

Students completing IB Diploma or A-Levels in Vietnam are generally competitive applicants for:

- UK universities (IB or A-Levels both accepted)
- Australian universities (IB accepted)
- US universities (IB or AP; additional SAT/ACT recommended)
- Asian universities in Singapore, Hong Kong, Japan (IB widely recognised)

Vietnam has several international university campuses (RMIT Vietnam, BUV - British University Vietnam) for students who want to stay.

---

## Key Questions to Ask Schools

1. What is your EAL (English as an Additional Language) support programme?
2. What is the student-teacher ratio?
3. What university placement results did your last DP cohort achieve?
4. What is the expat vs. local student ratio?
5. What provisions exist for mid-year entry?
6. Are there scholarship or financial assistance programmes?`,
  },

  'retirement': {
    slug: 'retirement',
    title: 'Retiring in Vietnam 2026: The Honest Guide',
    subtitle: "There's no retirement visa. Here's what long-term retirees actually do instead.",
    excerpt: "Vietnam doesn't have a retirement visa, and that surprises nearly everyone who researches it. This guide covers your real long-term stay options, the true cost of retirement, and what life as a retired expat in Vietnam looks like.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '11 min read',
    category: 'Visas & Residency',
    ctaTitle: "Planning Long-Term Stay in Vietnam?",
    ctaBody: "Whether it's an investment TRC, business visa, or another route, we'll find the cleanest long-term solution for your situation.",
    ctaLink: '/contact',
    ctaLinkText: 'Book a Consultation',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Explore TRC Options',
    content: `## The First Surprise: No Retirement Visa

Unlike Thailand (Retirement Visa), the Philippines (SRRV), or Malaysia (MM2H), Vietnam does not have a visa category based on retirement, age, or pension income. This surprises nearly everyone who researches it.

There is no Vietnamese immigration law provision that says "you are retired, therefore you may stay." This means retirees in Vietnam use the same visa pathways as everyone else - and you need to understand which ones work for your situation.

---

## Long-Term Stay Options for Retirees

### Option 1: The E-Visa Cycle (Most Common for Early Retirees)

Many retirees, particularly those under 65 and in good health, simply live on a rolling e-visa:

- 90-day multiple-entry e-visa at $50
- Exit and re-enter every 90 days (typically a quick trip to Cambodia, Thailand, or Malaysia)
- Very low administrative burden
- Annual cost of visa runs: $400-1,000 (flights + accommodation for border crossing)

**Pros:** Simple, flexible, no bureaucracy
**Cons:** Quarterly disruption, cannot open a bank account easily, no permanent base feeling

**Practical reality:** Thousands of retirees do this for years without issue. As long as you are not working for Vietnamese employers or earning Vietnam-sourced income, it works.

### Option 2: Investment Visa + TRC

The most secure long-term option for retirees with capital:

- Invest in a Vietnamese company or approved investment vehicle
- Qualify for an Investment Visa (DT) leading to TRC
- TRC valid 1-5 years depending on investment amount, renewable
- Gives you the right to open bank accounts, own property, and live without visa runs

**Investment thresholds for TRC:**
- 3 billion VND (~$120,000): TRC up to 2 years
- 50 billion VND (~$2,000,000): TRC up to 5 years

See our [TRC Application service](/services/trc) for the full process.

**Pros:** Stability, banking access, property ownership eligibility, no visa runs
**Cons:** Capital required, ongoing compliance for the business entity

### Option 3: Marriage-Based TRC

If you are married to a Vietnamese citizen, you can obtain a TRC through your marriage. Valid up to 3 years and renewable.

**Pros:** Very stable, long-term, full integration
**Cons:** Only applicable if you are married to a Vietnamese national

See our [Marriage Registration and TRC service](/services/marriage-trc).

### Option 4: The Proposed Golden Visa

In April 2025, Vietnam's Tourism Advisory Board proposed a "Golden Visa" specifically intended to attract long-term resident investors and retirees. As of April 2026, this remains a proposal - no legislation, no timeline, no application process.

Monitor this development but do not plan around it yet.

### Option 5: Special Visa Exemption Card (SVEC)

Introduced August 2025 (Decree 221/2025/ND-CP):
- 5-year validity, multiple entry
- Up to 90 days per visit
- Reduces administrative burden compared to regular visa renewals
- Eligibility requirements still being operationalised

---

## The Cost of Retirement in Vietnam

Vietnam is one of the most affordable retirement destinations in Asia. What a comfortable retirement actually costs:

### Comfortable Individual Retirement Budget

| Item | Monthly Cost |
|---|---|
| 1BR or 2BR apartment (HCMC or Hanoi) | $700-1,200 |
| Food and dining (good mix) | $400-600 |
| Transport (Grab + occasional car) | $100-150 |
| Utilities | $80-120 |
| Healthcare insurance (international) | $150-300 |
| Entertainment, travel, social | $300-500 |
| Miscellaneous | $100-200 |
| **Total** | **$1,830-3,070/month** |

**A comfortable single-person retirement in Vietnam costs approximately $1,500-2,500/month** - significantly less than in Western countries, Thailand, or Singapore.

For couples, the cost does not double - shared accommodation and many shared costs mean roughly $2,500-4,000/month for two.

---

## Healthcare: The Critical Variable

For retirees, healthcare is the most important planning consideration.

**The Vietnamese system:**
- Excellent private international hospitals in HCMC and Hanoi
- Limited options in Da Nang, Nha Trang, Hoi An
- No public healthcare access in practice for most foreigners
- Medical evacuation capability from major cities if needed

**Insurance for retirees:**
- Age significantly affects premium. Expect higher costs as you age.
- Pre-existing conditions are often excluded or carry waiting periods
- Get cover **before** you turn 60-65 if possible; much harder and more expensive to obtain later
- International plans: $3,000-8,000+/year for 60+ age group depending on health
- Some retirees self-insure for routine care and maintain evacuation cover only

**The practical approach most retirees use:**
- Keep comprehensive international insurance until mid-60s
- Maintain evacuation-only cover thereafter for catastrophic events
- Pay out of pocket for routine and dental care (genuinely cheap by Western standards)

See our full [Healthcare and Insurance Guide](/guides/healthcare).

---

## Pension and Tax Considerations

### Your Pension in Vietnam

Most overseas pension income is not Vietnam-sourced. If you spend fewer than 183 days per year in Vietnam, you are a non-resident and your foreign pension income is generally not taxable in Vietnam.

If you spend 183+ days, you become a Vietnamese tax resident and your worldwide income (including pension) is potentially taxable. **Check your home country's tax treaty with Vietnam** - many treaties specifically allocate pension taxation rights to the country of source (where you paid in), not the country of residence.

### Home Country Tax Obligations

Retiring abroad does not automatically remove home country tax obligations:

- **UK:** If you become non-UK resident (test the Statutory Residence Test carefully), your overseas income is generally UK tax-free. State pension may still be taxable in UK.
- **USA:** Americans are taxed on worldwide income regardless of residency. Foreign Earned Income Exclusion does not apply to pension income. Check treaty provisions.
- **Australia:** Generally taxed on worldwide income until Australian residency is formally broken.

Tax planning before leaving is important. Speak with a tax specialist in your home country as well as someone familiar with Vietnam.

---

## Where Retirees Actually Live

While HCMC and Hanoi are the main expat hubs, many retirees deliberately choose smaller cities for lower costs, slower pace, and better quality of life:

### Hoi An

The most popular choice for lifestyle-focused retirees. Ancient town character, beaches nearby, small but established expat community, good restaurants and cafes.

**Pros:** Beautiful, calm, strong expat community
**Cons:** Very limited international healthcare, small airport (Danang airport 30 minutes away), floods in rainy season

### Da Lat

Vietnam's highland city. Cool year-round temperatures (15-25°C), beautiful scenery, slower pace.

**Pros:** Best weather in Vietnam (no oppressive heat), beautiful, very affordable
**Cons:** Isolated, minimal international services, very limited healthcare, small expat community

### Nha Trang

Coastal city with beach lifestyle. Popular with Russian and Korean retirees.

**Pros:** Beaches, lower cost than HCMC, good weather
**Cons:** Touristy, limited cultural depth, healthcare limited

### Phu Quoc Island

Island life in the south. Growing rapidly with Vingroup investment.

**Pros:** Beach lifestyle, special economic zone (some foreigners can purchase 99-year leaseholds)
**Cons:** Remote, limited healthcare, growing but still developing infrastructure

---

## The Social Picture

Vietnam has a warm and welcoming culture for older foreign residents. Key points for retired expats:

- **Language:** Learning basic Vietnamese is highly worthwhile. Many Vietnamese people of all ages appreciate the effort even if they speak some English.
- **Social networks:** Expat Facebook groups, InterNations, and local expat clubs exist in all major cities. Smaller cities have smaller but tighter-knit communities.
- **Dating and relationships:** Many single male retirees find Vietnam welcoming for forming new relationships. Vietnamese family culture is generally hospitable to foreign spouses and partners.
- **Activities:** Golf, yoga, cooking classes, language exchange, cycling - all are popular with retired expats. Vietnam's travel geography is extraordinary - easy day trips and weekend trips throughout the country.

---

## A Realistic Summary

Vietnam is a genuinely excellent retirement destination for the right person. The affordable cost of living, warm climate, excellent food, beautiful scenery, and friendly people make up for the bureaucratic complexity of long-term stay.

The lack of a retirement visa is a real inconvenience, not a dealbreaker. Most retirees either do the e-visa cycle (low effort, quarterly exits), go the investment TRC route (cost and complexity but stability), or marry Vietnamese partners.

The main genuine concerns are healthcare access as you age, the tax implications of 183+ days, and the challenge of building meaningful social connections in a country where you do not speak the language.`,
  },

  'working-in-vietnam': {
    slug: 'working-in-vietnam',
    title: 'Working in Vietnam as a Foreigner: Jobs, Work Permits, and Career Guide 2026',
    subtitle: 'What jobs expats actually get, what the legal requirements are, and what you can realistically earn',
    excerpt: "Working legally in Vietnam requires a work permit - but the process, eligibility, and options differ widely by profession and employer. This guide covers the full picture.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '12 min read',
    category: 'Work & Business',
    ctaTitle: 'Need a Work Permit in Vietnam?',
    ctaBody: "We handle the full work permit process - from exemption certificates to full permit applications - with a 98% approval rate.",
    ctaLink: '/services/work-permit',
    ctaLinkText: 'View Work Permit Service',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Book a Free Consultation',
    content: `## The Legal Foundation

Working in Vietnam legally requires a **work permit (Giay Phep Lao Dong)**. This applies to almost all foreign nationals employed by a Vietnamese entity or operating a business in Vietnam.

The key things to understand:
- The **employer** applies for the work permit, not the employee
- Work permits are tied to a specific employer and position
- Once you have a work permit, you can apply for a TRC (Temporary Residence Card)
- Working without a permit exposes both you and your employer to fines and visa cancellation

> See our [Work Permit service](/services/work-permit) for the full process and documentation requirements.

---

## Who Needs a Work Permit (and Who Doesn't)

### Work Permit Required

- Employed by a Vietnamese company or foreign-invested enterprise operating in Vietnam
- Providing services under a commercial contract
- Running a business with a Vietnamese-registered entity

### Work Permit Exemptions

Certain categories are exempt from the standard work permit requirement but still need an **Exemption Certificate**:

- Foreign investors who are legal representatives of a company in Vietnam
- Members of the Board of Directors or Board of Management of certain entities
- Those doing temporary work under 30 days in a 12-month period
- Individuals working in the education sector under specific provisions

---

## What Jobs Expats Actually Get

### English Language Teaching (Largest Category)

The single largest source of expat employment in Vietnam. Demand is consistent and nationwide.

**Requirements:**
- Bachelor's degree (any subject)
- TEFL/TESOL/CELTA certificate (120+ hours)
- Clean criminal background check (apostilled)
- In some cases: native English speaker from a "Schedule 1" country (USA, UK, Australia, Canada, NZ, South Africa, Ireland)

**Who hires:** Language centres (ILA, Anh Van Hoi Viet-My, British Council), international schools, universities, private tutoring.

**Salary range:**
- Language centres: $1,500-2,500/month (with accommodation often included)
- International schools: $2,000-4,000/month + benefits
- Private tutoring: $20-50/hour depending on level and location

> For a detailed breakdown of teaching requirements, see our blog post: [How to Legally Teach English in Vietnam](/blog/how-to-legally-teach-english-vietnam).

---

### Technology and IT

Vietnam's tech sector is growing fast. Ho Chi Minh City has a genuine startup ecosystem centred around District 2 and Binh Thanh.

**Roles commonly held by expats:**
- Senior software engineers and architects
- Product managers (especially with global company experience)
- Startup founders
- Remote engineers working for foreign companies

**Companies:** FPT Software, VinTech, Tiki, Momo, Grab Vietnam, and dozens of foreign tech company Vietnam offices.

**Salary range:**
- Senior developer at a Vietnamese company: $2,000-5,000/month
- Product/engineering manager: $3,000-7,000/month
- Remote workers for foreign companies: dependent on employer's pay scale

---

### Finance, Banking, and Professional Services

Vietnam's expanding financial sector employs a smaller number of senior foreign professionals:

- Investment banking: Limited positions, mostly at international banks (HSBC, Standard Chartered, Citibank Vietnam offices)
- Private equity and venture capital: Small but growing scene in HCMC
- Accounting and audit: Big 4 firms (PwC, Deloitte, KPMG, EY) all have Vietnam offices
- Legal: Typically requires a Vietnam law degree or special government permission to practice Vietnamese law; most expat lawyers work in international law firms advising on cross-border matters

**Salary range:** Highly variable. Senior positions at international firms: $5,000-15,000+/month with packages.

---

### Hospitality and Tourism

Vietnam's hospitality sector employs many expats, particularly in management roles:

- Hotel and resort management (particularly luxury properties: Marriott, IHG, Accor, Four Seasons all have Vietnam properties)
- Restaurant management and chefs
- Tour operations and travel management

**Salary range:** Varies widely. Hotel GM roles at 5-star properties: $5,000-15,000/month with accommodation. Restaurant roles: $1,500-3,000/month.

---

### Education (Beyond English Teaching)

International schools employ foreign nationals in many roles beyond classroom teaching:

- Curriculum coordinators and vice principals
- PE, Music, Art, Science teachers
- School counselors and psychologists
- IT and learning technology staff

**Salary range:** $2,500-5,000/month depending on role and school, often with housing allowance and relocation package.

---

### Starting Your Own Business

Many expats choose to operate their own business rather than seek employment. Vietnam allows 100% foreign-owned companies (typically as a Limited Liability Company).

Popular business types among expats:
- Consulting (management, IT, education, legal)
- Import/export
- Restaurants and cafes
- Online businesses (e-commerce, content, software)
- Property management

> See our [Company Registration service](/services/company-setup) for the full setup process. Typical timeframe is 2-4 months.

---

## Salary and Compensation

### Tax and Net Pay Calculation

Vietnam's progressive PIT system means high salaries face significant tax. For a monthly gross of $4,000 (approximately 100 million VND):

- Gross: 100,000,000 VND
- Less: Personal deduction (post-reform 2026 amount)
- Less: Dependents (if applicable)
- Progressive tax: approximately 25-30% effective rate on income in this range

The result: a $4,000 gross salary in Vietnam is not the same as $4,000 in hand. Negotiate gross vs. net carefully with employers.

### Benefits to Negotiate

Standard expat packages in Vietnam typically include some combination of:
- Housing allowance ($500-1,500/month)
- Annual return flight home (1-2 per year)
- Health insurance for employee and family
- School fees contribution for children
- Relocation allowance
- Annual bonus (1-3 months salary)

Corporate package quality has declined over the years as Vietnam matures as a market, but senior roles at multinationals still carry strong packages.

---

## The Work Permit Process

### Key Documents Required

**For the employer:**
- Business registration certificate
- Proof the role requires a foreign expert

**For the employee:**
- Passport (valid 12+ months remaining)
- Degree certificate (apostilled and notarised)
- Professional experience documentation (typically 3+ years in the field)
- Health certificate (from a recognised medical facility)
- Criminal record check (apostilled, typically from your home country)
- 2 recent passport photos
- CV in Vietnamese or with certified translation

### Processing Time

Standard processing: **15-20 working days** from complete application submission.

New 2025 regulation: authorities are now required to process work permit applications within **10 working days** for certain skilled professional categories.

### Duration and Renewal

Work permits are issued for up to **2 years** and are renewable. Renewal requires updated documentation and typically takes 15-20 working days as well.

---

## Common Challenges

1. **Document apostille requirements** - Many expats underestimate the time needed to get documents properly apostilled in their home country. Allow 4-8 weeks for this.
2. **Experience documentation** - Vietnam requires proof of professional experience. Employment contracts, reference letters, and payslips from previous employers all help.
3. **Job change complications** - Work permits are tied to a specific employer. Changing jobs requires cancelling the old permit and applying for a new one.
4. **Freelancing** - There is no work permit category for freelancers. Operating as a sole trader working for Vietnamese clients requires a registered business.`,
  },

  'first-week': {
    slug: 'first-week',
    title: 'Your First Week in Vietnam: The Practical Expat Setup Guide',
    subtitle: 'SIM cards, police registration, bank accounts, transport, and everything else to sort in your first 7 days',
    excerpt: "The first week in Vietnam sets the tone for your whole experience. This step-by-step guide covers everything you need to do in order, so nothing slips through the cracks.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '9 min read',
    category: 'Daily Life',
    ctaTitle: 'Just Arrived in Vietnam?',
    ctaBody: "Getting your visa, TRC, or work permit sorted should be your first formal step. Our team is based in HCMC and can usually meet within 48 hours.",
    ctaLink: '/contact',
    ctaLinkText: 'Book a Consultation',
    ctaSecondaryLink: '/services',
    ctaSecondaryText: 'View All Services',
    content: `## Before You Land

A few things to have sorted before you get off the plane:

- **Visa confirmed and printed** - have a printed copy of your e-visa approval or embassy visa. Immigration officers may ask for it.
- **VPN installed and tested** - some apps and websites are restricted in Vietnam. ExpressVPN and NordVPN both work well. Install before you arrive or you may not be able to download the VPN app from within Vietnam.
- **Accommodation booked** for at least your first 2 weeks - do not commit to a long-term lease until you have experienced the city.
- **Travel insurance active** - if you do not yet have long-term health insurance, at minimum have travel insurance for the journey.
- **Offline Google Maps downloaded** - download your city's map for offline use before arriving.

---

## Day 1: The Airport

### Getting into the City

**Ho Chi Minh City (Tan Son Nhat Airport - SGN):**
- Grab app: Easiest, cheapest, transparent pricing. Get a SIM card in arrivals first (see below), then order a Grab from the designated ride-hailing zone outside.
- Metered taxi: Use Vinasun or Mai Linh - reliable meters. Avoid unlicensed taxis near the arrivals exit.
- Distance to District 1: 7-10km, approximately 30-45 minutes. Grab cost: 100,000-180,000 VND ($4-7).

**Hanoi (Noi Bai Airport - HAN):**
- Grab: Book from the app. Designated pickup area outside Terminal 2.
- Airport bus (86): 45,000 VND to the Old Quarter. Slow but cheap.
- Distance to Old Quarter: 35km, 40-60 minutes. Grab cost: 200,000-300,000 VND ($8-12).

### Get a SIM Card at the Airport

Do this before you leave the arrivals hall. All three major carriers (Viettel, Vinaphone, Mobifone) have counters in arrivals.

- **Viettel:** Best coverage nationwide and internationally. Recommended.
- **Cost:** Approximately 200,000 VND ($8) for a SIM with a data bundle
- **Monthly top-up for unlimited 4G:** 150,000-200,000 VND ($6-8)
- What you need: Passport

Having mobile data immediately means Grab works, Google Maps works, and you can contact your accommodation if needed.

---

## Day 1-3: Accommodation and Orientation

### Your Temporary Base

Stay somewhere flexible for the first 2 weeks - Airbnb, a serviced apartment, or a reputable hotel. Use this time to explore different neighborhoods before committing to a long-term lease.

Check our [Renting in Vietnam guide](/guides/renting) for neighborhood breakdowns.

### Police Registration (Important - Often Overlooked)

Foreign nationals staying in Vietnam are legally required to register with local police (tạm trú) within **30 days of arrival** if not staying in a hotel.

- **Hotels do this automatically** - the front desk handles your registration as part of check-in.
- **Private apartments** - your landlord is supposed to register you. Many do. Some do not. Ask your landlord directly.
- **If your landlord doesn't register you:** Visit the local ward police station (phường) with your passport, visa, and lease agreement. The registration form is simple.

This is rarely enforced against short-term tourists but is important for long-term residents. It becomes particularly relevant when applying for work permits or TRCs.

---

## Day 2-5: Essential Apps and Accounts

### Must-Have Apps

Download and set up these in your first few days:

| App | What It Does |
|---|---|
| **Grab** | Rides, food delivery, GrabCar, GrabBike, GrabFood |
| **Zalo** | Vietnam's WhatsApp. Essential for communicating with landlords, staff, local contacts |
| **Google Translate** | Camera translate mode is invaluable for menus, signs, documents |
| **Google Maps** | Download your city offline |
| **VinID / MoMo** | Mobile payments (useful once you have a local phone number) |
| **Wise** | International money management (see below) |

### Set Up Your Money Situation

If you do not have a Vietnamese bank account yet (or cannot get one on a tourist visa):

1. **Activate Wise** with your home currency account - this handles transfers well
2. **Bring a low-fee international debit card** - Charles Schwab (USA), Starling or Monzo (UK), Revolut (EU)
3. **Withdraw VND from ATMs** - BIDV and Agribank have lower foreign card fees
4. **Change a small amount of USD cash** at a reputable exchange counter for initial petty cash

See our [Banking for Foreigners guide](/guides/banking) for full details.

---

## Day 3-7: Healthcare and Safety Baseline

### Register with a Doctor

Do not wait until you are sick to find a doctor. In your first week:

1. Identify your nearest international clinic or GP
2. Register as a patient (many allow online registration)
3. Ensure your health insurance details are saved on your phone

In HCMC: Family Medical Practice has multiple locations and a good reputation for expat GP care. FV Hospital is the best emergency option.

In Hanoi: Family Medical Practice Hanoi, SOS International Clinic.

### Insurance Check

If you arrived without long-term health insurance, this is urgent. Do not leave this until week 3. Even a basic regional plan takes a few days to activate.

See our [Healthcare and Insurance guide](/guides/healthcare).

### Food and Water Safety

- **Do not drink tap water** in Vietnam. Bottled water or filtered water only.
- **Street food is generally safe** and often delicious - high turnover means fresh ingredients. Busy stalls are safer than quiet ones.
- **Ice:** In tourist areas and modern restaurants, ice is made from filtered water and is safe. In very local settings, exercise more caution.
- **Shellfish and raw vegetables** at roadside stalls are the most common cause of stomach issues for new arrivals. Ease in rather than going all-in on day 1.

---

## Week 1: Transport

### Getting Around

**Grab:** Your primary transport option for the first few weeks. Transparent pricing, no haggling, GPS tracked.

**Walking:** More viable than it looks on the surface - crossing streets requires confidence. Walk assertively at a steady pace. Traffic flows around you. Do not wait for a gap that never comes.

**Motorbike:** If you plan to ride, get your driver's license sorted early. See our [Driver's License Conversion service](/services/drivers-license). Do not ride illegally - police checkpoints specifically target foreigners riding without correct documentation.

### The Traffic Reality

Vietnam's traffic is intense, particularly in HCMC. This is the number one culture shock for most new arrivals. Tips:

- Download Grab before you need it - it works immediately with a foreign card
- Crossing the road on foot: move slowly and predictably. Traffic will flow around you.
- Helmet is legally required and non-negotiable on motorbikes
- Peak hours (7-9am, 5-7pm) are genuinely chaotic - plan around them for the first week

---

## Week 1 Checklist Summary

- [ ] Get a local SIM card at the airport (Viettel)
- [ ] Download and activate Grab
- [ ] Download Zalo and add any local contacts
- [ ] Download Google Maps offline for your city
- [ ] Set up a VPN
- [ ] Confirm police registration (hotel does this; apartment - check with landlord)
- [ ] Set up Wise or confirm your international card works at Vietnamese ATMs
- [ ] Identify and register with a GP clinic
- [ ] Confirm health insurance is active
- [ ] Identify your nearest international hospital and save their number
- [ ] Start exploring neighborhoods to find where you want to rent long-term
- [ ] Start your 183-day count from arrival date

---

## After Week 1: What's Next

The first week is about practical setup. Week 2-4 shifts to:

- Finding a long-term apartment (see our [Renting Guide](/guides/renting))
- Starting your visa or work permit process (if employed or planning business)
- Opening a bank account (if eligible)
- Building social connections - join expat groups, attend meetups
- Getting more serious about Vietnamese language (even 30 minutes a day makes a difference)`,
  },

  'buying-property': {
    slug: 'buying-property',
    title: 'Buying Property in Vietnam as a Foreigner 2026: The Complete Guide',
    subtitle: "50-year leaseholds, 30% quotas, Pink Books, and what the 2024 law changes actually mean for foreign buyers",
    excerpt: "Foreigners can legally buy property in Vietnam - but the rules are specific and the pitfalls are real. This guide covers the legal framework, the buying process, costs, and what has changed under the 2024 laws.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '12 min read',
    category: 'Housing & Real Estate',
    ctaTitle: 'Buying Property in Vietnam?',
    ctaBody: "Our property registration service handles the foreign ownership registration process from start to finish, ensuring your title is properly secured.",
    ctaLink: '/services/property-registration',
    ctaLinkText: 'View Property Registration Service',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Book a Consultation',
    content: `## Can Foreigners Own Property in Vietnam?

**Yes - but not in the Western sense of full freehold ownership.**

Vietnam's constitution defines all land as collectively owned by the Vietnamese people and administered by the state. No one - Vietnamese or foreign - can own land outright. What everyone in Vietnam actually holds is a **land use right** documented in a certificate commonly called the "Pink Book" (Sổ Hồng).

Foreigners can legally hold residential properties (apartments and houses) on a **50-year leasehold**, renewable for a further 50 years.

---

## The Current Legal Framework

Two laws govern foreign property ownership, both updated and effective January 1, 2025:

- **Housing Law 2023** (Law No. 27/2023/QH15): Governs residential housing rights for foreign individuals and organisations
- **Land Law 2024** (Law No. 31/2024/QH15): Governs land use rights, lease terms, and overseas Vietnamese rights

These laws clarified and in some cases expanded foreign ownership rights compared to the previous framework.

---

## What Foreigners Can and Cannot Buy

### What You CAN Purchase

- Apartments (condominiums) in **approved commercial residential developments**
- Individual houses (landed property) in **approved housing development projects**

### What You CANNOT Purchase

- Agricultural land
- Land designated for defence or security purposes
- Properties in areas designated as restricted to foreigners (near military installations, etc.)
- Properties in "pure" residential areas that are not part of commercial developments

---

## The Foreign Ownership Quota

**The 30% Rule:** Foreign nationals collectively cannot own more than 30% of the total units in any single apartment building (or 30% of any single section within a multi-block building).

**For landed property:** Foreign nationals cannot collectively own more than 250 houses per administrative unit (ward/commune with a population of 10,000 or more).

**Practical implication:** In popular expat developments, the foreign quota fills quickly. Always check the current foreign quota availability before signing any purchase agreement.

---

## The Lease Term: 50 Years

From the date the Pink Book is issued:
- **Initial term:** 50 years
- **Renewal:** Single extension possible, up to another 50 years
- **How to renew:** Apply to the provincial People's Committee at least 3 months before expiry
- **Renewal is not automatic** - conditions must still be met at renewal time

When you sell the property within the lease term, the remaining years transfer to the buyer.

---

## Eligibility to Purchase

Foreign nationals can purchase Vietnamese residential property if they:

1. Have a valid visa to enter Vietnam (does not need to be a long-term visa)
2. Are not subject to any restrictions under Vietnamese immigration law
3. Are purchasing in an eligible development

**Note:** You do **not** need a TRC or work permit to buy property as a foreigner. This is a common misconception. Even a tourist visa is technically sufficient.

---

## The Buying Process

### Step 1: Find an Eligible Property

Not all developments are eligible for foreign purchase. Confirm:
- The development is a commercial residential project (not pure residential allocation)
- The foreign quota is not yet exhausted
- The developer or management company can provide documentation confirming foreign eligibility

Work with a reputable property agent who knows which buildings have available foreign quota.

### Step 2: Letter of Intent and Deposit

Once you identify a property:
- Sign a Letter of Intent (LOI) or Deposit Agreement
- Pay an initial deposit (typically 5-10% of purchase price)
- The deposit agreement should confirm: price, timeline, conditions, refund terms

### Step 3: Purchase Agreement (Hop Dong Mua Ban)

The formal sale and purchase agreement (SPA) is typically notarised. Key contents:
- Full property description and legal status
- Total purchase price and payment schedule
- Handover date and conditions
- Penalties for default by either party
- Representations about foreign quota availability

**Important:** Have the Vietnamese-language agreement reviewed by a Vietnamese lawyer before signing. The Vietnamese text governs.

### Step 4: Due Diligence

Before final payment, verify:
- Title search confirming clean title (no mortgages, disputes, or encumbrances)
- Foreign quota confirmation (management company certificate)
- Planning status of the building and surrounding area
- Developer's financial status (particularly important for off-plan purchases)

### Step 5: Final Payment and Transfer

Pay the remaining purchase price according to the agreed schedule. For resale properties, this is typically a single payment. For new developments, staged payments linked to construction milestones are common.

### Step 6: Pink Book Registration

After final payment, apply for the Pink Book (Sổ Hồng) - the land use rights certificate in your name.

This is the critical step. Without a properly registered Pink Book, your ownership is not fully secured. Our [Property Registration service](/services/property-registration) handles this process completely.

---

## Costs of Buying Property

| Cost Item | Rate |
|---|---|
| VAT (new developments only) | 10% of value |
| Registration fee | 0.5% of declared value |
| Notarisation fee | Approximately 0.1-0.3% of value |
| Real estate agent commission | 1-3% (typically paid by seller) |
| Legal due diligence | $500-2,000 depending on complexity |
| Property registration service | Varies |

For a $200,000 apartment purchase (new development):
- VAT: $20,000
- Registration: $1,000
- Notarisation: ~$300
- Total transaction costs: approximately $22,000-25,000

For resale (no VAT), costs are significantly lower.

---

## Off-Plan vs. Resale

### Off-Plan (New Development)

**Pros:** Lower entry price, newer building, can choose finishes
**Cons:** Developer risk, completion delays common in Vietnam, VAT applies, may wait 1-3 years for keys

**Key risk:** Vietnamese property development has a history of delayed and stalled projects. Do thorough developer due diligence. Check completion rates for their previous projects.

### Resale

**Pros:** What you see is what you get, no VAT, faster transaction
**Cons:** Higher entry price, Pink Book must be clean, older stock

---

## Short-Term Rental Considerations

If you are buying as an investment property to short-term rent (Airbnb etc.):

**HCMC regulation change (February 2025):** HCMC has restricted short-term rentals in residential developments to mixed-use tourism zones only. Standard residential condos in HCMC cannot legally be used for short-term rental accommodation.

This significantly affects investment yield calculations for condos in HCMC. Verify the zoning status of any investment property before purchasing.

Long-term rental (12+ month leases) is not restricted.

---

## Overseas Vietnamese (Viet Kieu)

Overseas Vietnamese nationals have significantly broader property rights than foreign nationals, including:
- No quota restriction
- Longer lease terms
- Greater range of property types eligible

If you have Vietnamese citizenship or are of Vietnamese origin, seek specific advice on your status and rights.

---

## Common Mistakes Foreign Buyers Make

1. **Not verifying foreign quota** before signing - quota may be exhausted in desirable buildings
2. **Relying on agent assurances without independent verification** - agent incentives may not align with yours
3. **Not getting the Pink Book registered** - some buyers pay in full but never complete registration
4. **Buying off-plan from small developers** - higher risk of project delays or collapse
5. **Not understanding the 50-year term implications** for resale value over time`,
  },

  'moving-with-family': {
    slug: 'moving-with-family',
    title: 'Moving to Vietnam with Family: The Complete Guide for 2026',
    subtitle: "Schools, childcare, bringing pets, family health insurance, and making it work with children",
    excerpt: "Moving internationally with a family adds layers of complexity to every decision. This guide addresses the specific questions families ask - schools, pets, childcare, family health cover, and child-friendly neighborhoods.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '10 min read',
    category: 'Family & Education',
    ctaTitle: 'Planning a Family Relocation to Vietnam?',
    ctaBody: "Family relocations have more moving parts - visa types for each family member, school applications, health insurance for all. Our consultants handle the full picture.",
    ctaLink: '/contact',
    ctaLinkText: 'Book a Family Consultation',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Explore Long-Term Visa Options',
    content: `## Planning Timeline for Families

Moving internationally with children requires longer lead time than a solo move. Start planning at least **6-12 months** before your target move date.

**12 months out:**
- Research and shortlist international schools
- Submit school applications (most top schools have waiting lists)
- Research family health insurance options

**6 months out:**
- Confirm school placement
- Begin visa applications
- Sort family health insurance
- Research neighborhoods near chosen school

**3 months out:**
- Arrange accommodation (short-term at first)
- Begin pet import process if bringing animals
- Sort international moving logistics

**1 month out:**
- Confirm all visas
- Set up Wise or international banking
- Download offline maps, Grab, Zalo

---

## Visas for the Whole Family

Each family member needs their own visa. Children are not automatically covered by a parent's visa.

**Children's visas:**
- Children can obtain the same e-visa as adults
- If one parent has a TRC, children may be able to get dependent status - check current rules
- For school enrollment, a valid visa is required

**Spouse visas:**
- If one partner has a work permit and TRC, the spouse can often obtain a dependent visa
- Independent TRC routes (investment, marriage to Vietnamese) provide more stability

For a family requiring long-term status, the investment TRC route often makes most sense - one application that covers the primary applicant and then supports family members.

See our [TRC service](/services/trc) for full details.

---

## Choosing Schools

This decision typically drives all other family logistics - neighborhood, accommodation, transport.

Key considerations:
- Which curriculum matches your child's current education and future university plans
- Waiting list timelines for your preferred entry year
- Geographic location relative to where you want to live
- School bus availability if the school is not walkable

See our comprehensive [International Schools Guide](/guides/international-schools) for full details on top schools in HCMC, Hanoi, and Da Nang, with fee ranges.

---

## Childcare and Nurseries (Under 3)

For children not yet in primary school:

**International nurseries:**
- Cost: $500-2,000/month
- Popular brands: Maple Bear Canadian Preschool, Little Dreamers, ABC Montessori
- Quality is generally good at established centres

**Nanny / Domestic Helper:**
- Very common among expat families in Vietnam
- A live-out nanny runs $300-600/month in HCMC
- Live-in arrangements are less common but available at similar rates
- Finding recommendations: expat Facebook groups, school noticeboards
- Tax and legal implications of employing domestic staff - get advice

**Local Vietnamese preschools:**
- Very affordable ($150-400/month)
- Vietnamese-medium instruction
- Good option for families committing long-term who want Vietnamese language immersion from a young age

---

## Child-Friendly Neighborhoods

### Ho Chi Minh City

**Thao Dien (District 2):** The primary choice for expat families. Concentration of international schools, expat cafes, parks, playgrounds. Walking community feel. Best access to ISHCMC, BIS HCMC, ACST. Slightly premium rent but widely considered worth it for family quality of life.

**District 7 / Phu My Hung:** Clean, planned, good infrastructure, slightly less vibrant but more spacious. Access to SSIS and other schools. Popular with Korean and Japanese families.

### Hanoi

**Tay Ho (West Lake):** The family expat hub. Schools nearby, parks, lake walks, international supermarkets.

---

## Family Health Insurance

Health insurance for a family in Vietnam costs more than individual cover - but Vietnam's competitive medical costs mean overall healthcare spending is still far below Western norms.

**Approximate family plan costs:**
- Regional plan (2 adults + 1 child): $2,000-5,000/year
- International plan (2 adults + 1 child): $5,000-10,000/year

**Key considerations for families:**
- **Maternity cover:** If you are planning to have children in Vietnam, you need a maternity rider with at least 10 months of waiting period before conception. Buy before you start trying.
- **Paediatric care:** Confirm which hospitals your plan covers for children. FV Hospital and Hanh Phuc International (maternity/paediatrics focused) in HCMC are top-rated.
- **Dental:** Often available as a family add-on. Worth having for children.

See our [Healthcare and Insurance Guide](/guides/healthcare).

---

## Bringing Pets to Vietnam

Vietnam allows pets to be imported but the process requires advance planning.

### Documents Required

- Valid rabies vaccination certificate (no older than 12 months, no newer than 30 days before travel)
- Microchip (ISO 11784/11785 standard)
- Health certificate issued by a licensed vet within 10 days of travel
- Import permit from Vietnam's Department of Animal Health (DAH) - apply at least 2-3 months in advance
- Airline approval (pet transport policies vary by airline)

### Process

1. Obtain import permit from Vietnam's DAH (online application)
2. Vaccinate and microchip your pet if not already done
3. Get vet health certificate close to travel date
4. Arrange airline cargo or cabin transport (dogs: cargo only above a certain size; cats can often travel in cabin)
5. Quarantine: Vietnam does not require quarantine for pets from most countries, provided documentation is complete

### Costs

Import permit: Free to apply.
Vet certificates and inspections: $100-300.
Airline transport: $100-500+ depending on size and route.
Possible inspection fee on arrival.

### Once in Vietnam

Veterinary care in HCMC and Hanoi is good and affordable. Recommended clinics in HCMC: Saigon Pet Clinic, Pet Klinik. In Hanoi: Hanoi Small Animal Hospital.

---

## Adjusting Children to Vietnam

### Language

Children adapt to new languages far more quickly than adults. Most expat children in international schools pick up conversational Vietnamese within 1-2 years through social immersion outside of school, even if their formal instruction is in English.

Enrolling children in Vietnamese language classes from an early age is worthwhile for those staying more than 2 years.

### Cultural Adjustment

Vietnam is a very family-oriented culture. Children are generally welcomed warmly everywhere - in restaurants, markets, and public spaces. This makes family life genuinely easy in ways that can surprise new arrivals.

The main adjustments for children:
- Traffic noise and intensity (particularly in HCMC)
- Heat and humidity (allow time to acclimatise)
- Different food - Vietnamese food is generally not spicy and many children adapt quickly
- Air quality in Hanoi (invest in air purifiers for the home)

### Schools and Social Integration

International schools have well-developed processes for welcoming new students. Most have a "buddy system" for new arrivals. The expat community turns over regularly, so schools are experienced at integrating new children quickly.

The biggest social challenge is often for secondary-age children who leave established friend groups at home. Encourage early involvement in after-school sports and activities, which is where most lasting friendships form.`,
  },

  'ho-chi-minh-city': {
    slug: 'ho-chi-minh-city',
    title: "Ho Chi Minh City (Saigon) Expat Guide 2026",
    subtitle: "Vietnam's commercial capital - neighborhoods, costs, transport, schools, healthcare, and expat community",
    excerpt: "HCMC is where most expats land and where the majority stay. This guide covers everything about living in Vietnam's most dynamic city - from the best neighborhoods to the real cost of life here.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '14 min read',
    category: 'City Guides',
    ctaTitle: 'Planning to Move to Ho Chi Minh City?',
    ctaBody: 'We are based in HCMC and handle visa, residency, and business setup for expats across the city. Most consultations happen within 48 hours.',
    ctaLink: '/contact',
    ctaLinkText: 'Book a Free Consultation',
    ctaSecondaryLink: '/services',
    ctaSecondaryText: 'View All Services',
    content: `## Why Expats Choose HCMC

Ho Chi Minh City - still widely called Saigon - is Vietnam's commercial, financial, and cultural engine. With a population of over 9 million in the city proper and 13 million in the greater metro area, it is the place where most of Vietnam's international business happens.

For expats, HCMC offers the most complete package in Vietnam: the widest range of international schools, the best private hospitals, the most diverse food and entertainment scene, the strongest job market, and the most direct international flight connections.

The trade-offs are real: traffic, heat, noise, and cost of living higher than the rest of Vietnam. But most expats who spend time in both HCMC and Hanoi ultimately settle in Saigon.

---

## The City Structure

HCMC is enormous and its administrative structure is complex. Key areas for expats:

**Central areas (old Districts 1, 3, 4):** The traditional city centre. Highest density, most conveniences, most traffic.

**East (old District 2, now Thu Duc City, including Thao Dien, An Phu, Binh An):** The primary expat residential area. Green, lower density, best schools nearby.

**South (District 7, Phu My Hung):** Planned satellite zone. Clean, modern, popular with Korean and Japanese expats.

**North (Binh Thanh, Phu Nhuan):** Mixed areas with good value and improving infrastructure.

---

## Neighborhoods in Detail

### District 1 (Ben Nghe, Ben Thanh, Pham Ngu Lao)

The beating heart of the old city. Landmark 81 (the tallest building), the Opera House, Nguyen Hue walking street, Ben Thanh Market.

**For expats:** Best for short-term stays. Walkable, convenient, lots of restaurants and cafes. Noisy, touristy, not ideal for families. Premium rent for the convenience.

**Rent:** 1BR: $500-900/month. High-rise 1BR: $800-1,500/month.

### Thao Dien (Thu Duc City, formerly District 2)

The primary expat family neighbourhood. Low-rise streets, villas and modern apartments mixed, good cafe scene, walkable to international schools, riverside parks.

**For expats:** The gold standard for family life. Strong community - you will meet other expats easily. Access to ISHCMC, BIS HCMC, ACST within walking or short taxi distance.

**Rent:** 1BR: $600-1,000/month. 2BR: $900-1,500/month. 3BR villa: $1,800-4,000/month.

**Notable spots:** The Deck (riverside bar), Thao Dien village market, dozens of expat cafes.

### An Khanh / Binh An (Thu Duc City)

Adjacent to Thao Dien. Newer, slightly more local feel, slightly cheaper. Good for couples or young professionals who want proximity to the expat scene without premium Thao Dien prices.

### Binh Thanh

Directly connected to District 1 via the Saigon Bridge. More local atmosphere, growing creative scene. Popular with younger expats, digital nomads, and those who want urban energy without D1 prices.

**Rent:** 1BR: $350-600/month.

### District 7 / Phu My Hung

Developed by Taiwanese investors as a planned international-standard zone. Extremely clean streets, wide roads, good supermarkets (Crescent Mall, SC VivoCity), lower traffic density.

Very popular with Korean and Japanese expats. SSIS international school is here.

**Rent:** 1BR: $500-900/month. 2BR: $800-1,400/month.

---

## Cost of Living Summary

| Item | Monthly Cost |
|---|---|
| 1BR apartment (Thao Dien, good standard) | $800-1,200 |
| Food (mixed local/Western diet) | $300-500 |
| Transport (Grab + motorbike) | $80-150 |
| Utilities (with AC) | $80-130 |
| Healthcare insurance (individual, regional) | $80-150 |
| Gym + social activities | $150-300 |
| **Comfortable single expat total** | **~$1,600-2,500/mo** |

For a full breakdown across lifestyle levels, see our [Cost of Living Guide](/guides/cost-of-living).

---

## Transport

### Getting Around

HCMC has no metro system operational for most of the city (Metro Line 1 from Ben Thanh to Suoi Tien opened in December 2024 - limited coverage so far).

**Grab:** Dominant and excellent. GrabCar, GrabBike, GrabFood all widely used. Essential app.

**Motorbike:** Most expats in HCMC eventually get a motorbike for daily convenience. Traffic moves faster on two wheels. Legal riding requires the correct license - see our [Driver's License service](/services/drivers-license).

**Taxi:** Vinasun and Mai Linh metered taxis are reliable. Avoid unlicensed taxis, particularly around tourist areas.

**Traffic reality:** HCMC traffic is genuinely intense. Peak hours (7-9am, 5-7:30pm) can make a 5km journey take 45 minutes by car. Motorbike riders navigate faster. Most expats adapt after 1-2 months.

---

## Healthcare

HCMC has the best private international healthcare in Vietnam. No other city comes close.

**Best hospitals:**
- FV Hospital (District 7): Most comprehensive. International standards. Excellent emergency department.
- Victoria Healthcare (multiple clinics): Strong GP and specialist access.
- Family Medical Practice (multiple locations): Reliable expat GP network, good for routine care.
- Raffles Medical (District 1): Singapore-standard outpatient clinic.

See our full [Healthcare and Insurance Guide](/guides/healthcare).

---

## International Schools

HCMC has Vietnam's widest and deepest selection of international schools across all major curricula.

Top schools: ISHCMC (IB), BIS HCMC (British), SSIS (American), Canadian International School, ACST (Australian).

Fees range from $15,000-35,000+/year. Apply 6-12 months in advance for the best schools.

See our [International Schools Guide](/guides/international-schools) for full details.

---

## Food and Dining

HCMC's food scene is extraordinary - arguably the best street food city in Southeast Asia, plus a world-class restaurant scene.

**Vietnamese food to know:**
- Pho: Beef noodle soup. Breakfast staple.
- Banh mi: Vietnamese baguette sandwiches. Under $1.50 each and genuinely world-class.
- Com tam: Broken rice with pork chop, egg, and pickled vegetables. The city's comfort food.
- Banh xeo: Sizzling crepe with shrimp and pork.
- Bun bo Hue: Spicier beef noodle soup from Central Vietnam.

**Western food:** HCMC has excellent French, Italian, Japanese, Korean, Indian, and international restaurants. Thao Dien and District 1 are the epicentres.

**Coffee culture:** Vietnam has some of the world's best coffee. Egg coffee, ca phe sua da (iced milk coffee), cà phê cốt dừa (coconut coffee). Budget $1-3 per cup at local cafes; $3-5 at Western-style coffee shops.

---

## Expat Community and Social Life

HCMC has one of Asia's most active and welcoming expat communities.

**Online:** "Expats in Ho Chi Minh City" Facebook group (100,000+ members) is the primary hub. Buy/sell/rent, recommendations, events, questions all active daily.

**Professional:** InterNations HCMC holds regular events. AmCham (American Chamber of Commerce), BritCham, and EuroCham all host networking events.

**Sport:** Hash House Harriers (running/drinking club), expat football leagues, tennis clubs, CrossFit gyms, yoga studios. Sport is how most long-term expats build their friend circle.

**Nightlife:** HCMC has a genuine nightlife scene. Bui Vien street (backpacker area, not recommended for long-term expats), Lam Son Square in District 1, Thao Dien village bars for the more settled crowd.

---

## Pros and Cons of HCMC

### Pros
- Most complete expat infrastructure in Vietnam (schools, hospitals, services)
- Best job market and business opportunities
- Extraordinary food scene at every price point
- Strong and active expat community
- Best international flight connections
- Year-round warm weather (if you like heat)
- Fast internet everywhere

### Cons
- Traffic is genuinely intense - time investment to get anywhere
- Air quality is moderate (better than Hanoi, not as clean as Da Nang)
- More expensive than other Vietnamese cities
- Can feel overwhelming initially
- Rainy season (May-November) brings daily afternoon downpours
- Heat and humidity year-round (28-35°C most days)`,
  },

  'hanoi': {
    slug: 'hanoi',
    title: "Hanoi Expat Guide 2026",
    subtitle: "Vietnam's capital city - traditional, cultural, political, and different from HCMC in ways that matter",
    excerpt: "Hanoi is Vietnam's capital and has a distinct character from the south. Richer cultural heritage, cooler winters, worse air quality, and a more traditional atmosphere. This guide covers expat life in the north.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '12 min read',
    category: 'City Guides',
    ctaTitle: 'Moving to Hanoi?',
    ctaBody: 'We handle visa, residency, and business setup for expats across Vietnam, including Hanoi. Most consultations happen within 48 hours.',
    ctaLink: '/contact',
    ctaLinkText: 'Book a Free Consultation',
    ctaSecondaryLink: '/services',
    ctaSecondaryText: 'View All Services',
    content: `## Hanoi vs HCMC: The Essential Difference

Hanoi and Ho Chi Minh City are the same country but genuinely different worlds. The comparison comes up constantly because most expats have to choose between them.

**Hanoi's character:** Traditional, historic, more formal, more bureaucratic, more Vietnamese in cultural feel. The presence of government ministries and state-owned enterprise headquarters gives it a different energy to HCMC's commercial hustle.

**For expats:** Hanoi tends to appeal to those who want deeper cultural immersion, appreciate history and architecture, prefer a slightly slower pace, or are working for government-adjacent organisations, NGOs, or international institutions headquartered in the capital.

---

## The City Structure

**Old Quarter (Hoan Kiem):** The historic 36-street district. Narrow lanes, centuries-old architecture, street food density, tourist infrastructure. Charming but not particularly liveable long-term due to noise and tourism.

**Ba Dinh:** Embassy district. Quiet, leafy, central. Home to the Presidential Palace, Ho Chi Minh Mausoleum, and most foreign embassies. Popular with diplomats and senior government-sector expats.

**Tay Ho (West Lake):** The primary expat residential district. Large lake, villas, Western cafes and restaurants, international schools nearby. The HCMC equivalent of Thao Dien.

**Cau Giay / My Dinh:** More modern, less characterful, popular with tech workers and those working in western Hanoi. Lower rents.

**Long Bien:** Across the Red River. Growing modern area. Lower cost but less established expat infrastructure.

---

## Neighborhoods in Detail

### Tay Ho (West Lake)

The undisputed expat hub of Hanoi. Surrounding the large West Lake, Tay Ho offers villas, serviced apartments, and modern builds along lakeside streets.

**Why expats love it:** Strong community feel, excellent Western restaurant and cafe scene along Xuan Dieu and Quang An streets, access to international schools, relatively quiet and leafy.

**Rent:** 1BR: $500-900/month. 2BR: $800-1,500/month. Villas: $1,200-3,500/month.

### Ba Dinh

Central and calm. Wide tree-lined boulevards, proximity to embassies, museums, and cultural sites. Less of an expat bubble than Tay Ho - more integrated with the formal Vietnamese administrative world.

**Rent:** 1BR: $500-800/month.

### Hoan Kiem / Old Quarter

**For living:** Not typically recommended for long-term expats unless you specifically love the old quarter character. Noisy, touristy, parking-challenged. Better as a place to visit than to live.

**For visiting:** Essential. Hoan Kiem Lake, Ngoc Son Temple, the night market, and the extraordinary density of street food.

### Cau Giay / My Dinh

More practical than atmospheric. Popular with expats working for tech companies, universities, or western-located businesses. Lower rent, less expat social scene, good transport connections.

**Rent:** 1BR: $400-700/month.

---

## Climate: The Key Difference from HCMC

Hanoi has four genuine seasons - this is both an attraction and a drawback:

| Season | Months | Description |
|---|---|---|
| Spring | February-April | Cool, drizzly, misty. Temperatures 15-22°C |
| Hot Summer | May-August | Humid and hot, 30-38°C. Heavy rain and thunderstorms |
| Autumn | September-November | Considered Hanoi's best season. Mild 22-28°C, clearer skies |
| Winter | December-January | Cold (occasionally below 10°C), damp, foggy |

**Air quality:** This is Hanoi's biggest drawback for expats. November through February, air quality regularly reaches "unhealthy" levels due to still air trapping vehicle and industrial emissions. Investment in a good air purifier (IQAir, Blueair, or similar) is non-negotiable for Hanoi apartments. This is especially important for families with young children or anyone with respiratory conditions.

---

## Cost of Living

| Item | Monthly Cost |
|---|---|
| 1BR apartment (Tay Ho, good standard) | $700-1,100 |
| Food (mixed local/Western) | $280-450 |
| Transport | $70-130 |
| Utilities | $70-120 |
| Healthcare insurance | $80-150 |
| Social and entertainment | $150-300 |
| **Comfortable single expat total** | **~$1,400-2,250/mo** |

Hanoi is slightly cheaper than HCMC across most categories. The main exception is that premium expat neighborhoods (Tay Ho) are priced similarly to Thao Dien in HCMC.

---

## Healthcare

Hanoi has good international healthcare but less depth than HCMC:

- **Hanoi French Hospital:** The flagship international hospital. Good emergency care and specialist access.
- **VINMEC International Hospital:** Part of the national VINMEC group, strong facilities.
- **Family Medical Practice Hanoi:** Reliable GP network.
- **SOS International Hanoi:** Good for emergencies, 24/7 access.

For truly complex cases (major surgery, specific oncology, cardiac), HCMC's FV Hospital remains the gold standard. Some expats travel south for serious procedures.

---

## International Schools

Hanoi has a strong international school offering, though with fewer options than HCMC:

- **Hanoi International School (HIS):** IB curriculum, Tay Ho area. Strong reputation.
- **British International School Hanoi (BIS):** British curriculum, Long Bien campus.
- **Lycee Francais Alexandre Yersin:** French curriculum. Best option for French-speaking families.
- **UNIS Hanoi:** United Nations International School. IB, competitive entry.
- **Gateway International School:** American curriculum.

See our [International Schools Guide](/guides/international-schools).

---

## Food and Culture

Hanoi's food scene is different from HCMC's. More focus on traditional northern Vietnamese cuisine:

- **Pho:** Hanoi pho is considered the original - cleaner broth, fewer add-ins than the southern version
- **Bun cha:** Grilled pork and vermicelli - a Hanoi speciality made internationally famous by Anthony Bourdain and Barack Obama's 2016 visit
- **Cha ca La Vong:** Turmeric-marinated fish, a Hanoi tradition dating back centuries
- **Banh cuon:** Steamed rice rolls with pork and mushroom

The Old Quarter street food scene is extraordinary. Weekend nights on Ta Hien Street (expat bar street, modest but lively) and the pedestrianised streets around Hoan Kiem Lake.

---

## Pros and Cons of Hanoi

### Pros
- Rich history, architecture, and culture
- Cooler winters (welcome relief from Vietnam's heat for some)
- Slightly cheaper than HCMC overall
- Strong international institutions, NGOs, embassies
- Less overwhelming than HCMC's scale
- Autumn season is genuinely beautiful

### Cons
- Worst air quality of the major Vietnamese cities - a genuine health consideration
- Cold and damp winters (10-15°C in January can be uncomfortable)
- Less diverse job market than HCMC
- Smaller expat community than HCMC
- More bureaucratic and formal feel
- Fewer international school options than HCMC`,
  },

  'da-nang': {
    slug: 'da-nang',
    title: "Da Nang Expat Guide 2026",
    subtitle: "Vietnam's rising third city - beaches, affordability, a growing nomad scene, and a more relaxed pace",
    excerpt: "Da Nang is Vietnam's fastest-growing expat destination. Lower cost, beach access, improving infrastructure - with the honest trade-offs around healthcare, schools, and smaller social scene.",
    author: 'Vietnam Launchpad',
    date: '2026-01-15',
    lastUpdated: '2026-04-01',
    readTime: '11 min read',
    category: 'City Guides',
    ctaTitle: 'Considering Da Nang?',
    ctaBody: "We work with expats across Vietnam. If you are deciding between cities, or ready to move to Da Nang, we can help with the visa and residency side.",
    ctaLink: '/contact',
    ctaLinkText: 'Book a Free Consultation',
    ctaSecondaryLink: '/services',
    ctaSecondaryText: 'View All Services',
    content: `## Why Da Nang Is Growing

Five years ago, Da Nang was primarily a domestic tourism destination and a transit point for Hoi An. Today it is Vietnam's most talked-about city among digital nomads and expats looking for an alternative to the intensity of HCMC and the winters of Hanoi.

The pitch is compelling: beach access within 10 minutes of the city center, significantly lower costs than HCMC, much better air quality, less traffic, fast improving infrastructure, and a growing international community.

The caveats matter too: fewer international schools, limited international healthcare options, a smaller social scene, and typhoon season.

---

## The City Structure

Da Nang is compact and easy to navigate compared to HCMC or Hanoi.

**My Khe Beach Area:** The main coastal strip. Hotels, tourist infrastructure, but also genuine residential options with sea views. Walking distance to the beach.

**An Thuong:** Often called the "foreign neighborhood" or "foreigners' street." Concentrated expat cafes, restaurants, yoga studios, co-working spaces, and residential apartments. The most established expat hub.

**Hai Chau (City Center):** The administrative and commercial center. Less residential for expats but practical for those working downtown.

**Son Tra Peninsula:** Quiet, scenic, forested. Monkey Mountain and beautiful coastlines. Longer commute to the city but popular with those wanting peace and nature.

**Hoa Xuan / Non Nuoc:** Southern area, near Marble Mountains. More local, developing, budget-friendly.

---

## Neighborhoods in Detail

### An Thuong

If you are a digital nomad or younger expat, An Thuong is likely where you will spend most of your time.

Streets between Vo Nguyen Giap (beach road) and 3 Thang 2 contain most of the:
- Expat cafes and co-working spaces
- Western restaurants and bars
- Yoga studios and gyms
- Short-term apartment rentals

**Rent:** 1BR: $250-500/month. 2BR: $400-700/month.

### My Khe Beach Area

Staying near the beach adds a premium but it is worth it for many:

**Rent:** 1BR sea view apartment: $400-700/month. 2BR: $600-1,000/month.

### Son Tra Peninsula

More residential, more Vietnamese, more peaceful. Longer drive to the city center (15-20 minutes) but extraordinary natural setting.

**Rent:** 1BR: $200-450/month.

---

## Cost of Living

Da Nang is Vietnam's most affordable major expat city:

| Item | Monthly Cost |
|---|---|
| 1BR apartment (An Thuong area) | $300-600 |
| Food (mixed local/Western) | $200-400 |
| Transport (Grab + motorbike) | $50-100 |
| Utilities | $50-100 |
| Healthcare insurance (basic) | $60-120 |
| Social and entertainment | $100-200 |
| **Comfortable single expat total** | **~$800-1,600/mo** |

This is genuinely significantly cheaper than HCMC. A digital nomad or retiree can live very comfortably in Da Nang for $1,200-1,500/month, versus $2,000+ in HCMC.

---

## Climate

Da Nang has two main seasons:

**Dry Season (February-August):** The prime season. Warm to hot (25-35°C), sunny, beach weather. March-August is peak and beautiful.

**Rainy Season (September-January):** The trade-off. Heavy rainfall, occasional flooding, and **typhoon risk September through November**. This period can see significant disruptions. Some expats leave Da Nang for 2-3 months during typhoon season.

**Advantage over HCMC and Hanoi:** No extreme heat (more temperate than HCMC), no cold winters (warmer than Hanoi), and air quality is consistently much better than either.

---

## Healthcare: The Honest Reality

This is Da Nang's biggest limitation for expats, particularly families and older residents.

**What's available:**
- Da Nang C Hospital (public): Improving but primarily serves local population
- VINMEC Da Nang: International-standard hospital, the best option in the city
- Danang Hospital International Clinic: Decent for routine care
- Several private clinics with some English-speaking staff

**What's not available:**
- The depth and breadth of HCMC's international hospital system
- Some specialist procedures require travel to HCMC or Hanoi (7-10 hours by road or 1-hour flight)

**Implication:** If you have a serious health condition requiring specialist ongoing treatment, Da Nang is a less secure base than HCMC. Medical evacuation insurance is more important here than in HCMC.

For younger, healthy expats and digital nomads, Da Nang's healthcare is adequate. For families with young children or older expats, weigh this carefully.

---

## International Schools

Da Nang has fewer international school options than HCMC or Hanoi - this is a real factor for families.

**Current options:**
- **Da Nang International School:** IB curriculum, primary and secondary. Fees approximately $12,000-20,000/year.
- **Horizon International School:** British curriculum, more affordable fees. Best for primary age.
- **Babylon International School:** Preschool through primary.

Some families in Da Nang with secondary-age children opt to board in HCMC or Hanoi, or relocate when children reach secondary school age.

For pre-school and primary-age children, Da Nang works well. For secondary and IB, the options are more limited.

---

## Digital Nomad and Remote Work Scene

Da Nang has one of Asia's strongest digital nomad communities relative to its size. The An Thuong neighbourhood has evolved specifically around nomads and younger expats.

**Co-working spaces:**
- Toong Da Nang: Most established, reliable, professional
- The Nest: Casual, beach-adjacent, community feel
- Inspire Da Nang: Good amenities, active community

**Internet:** Fiber is widely available (200+ Mbps) for $10-20/month. Cafe wifi is reliable. Mobile 4G is fast across the city.

**Community:** "Da Nang Expats" and "Digital Nomads Da Nang" Facebook groups are active. Regular meetups, sports events, and community gatherings.

---

## Getting Around

Da Nang is compact - this is one of its genuine advantages.

**Grab:** Works well across the city. Distances are shorter than HCMC so rides are cheaper.

**Motorbike:** Highly recommended for Da Nang. Traffic is much lighter than HCMC. The city is designed more for motorbike riders. Coastal and mountain roads are beautiful.

**Cycling:** More viable here than in other Vietnamese cities. Flatter terrain than Hanoi, less traffic than HCMC.

**From Da Nang:** Hoi An is 30km (about 45 minutes by Grab/motorbike). Hue is 100km north (2 hours by car). The central Vietnam road trips are some of the most spectacular in the country.

---

## Hoi An: The Weekend Escape

Da Nang's proximity to Hoi An is one of its selling points. Many expats based in Da Nang spend weekends in Hoi An. Some expats even choose to live in Hoi An and commute to Da Nang for co-working or meetings.

Hoi An is a UNESCO World Heritage city - the preserved ancient town, lantern-lit streets, tailors, and beach (Cua Dai) 5km from the old town.

---

## Pros and Cons of Da Nang

### Pros
- Significantly lower cost of living than HCMC
- Beach access within 10 minutes of the city
- Best air quality of the major Vietnamese cities
- Much lighter traffic than HCMC
- Compact and easy to navigate
- Proximity to Hoi An, Hue, and central Vietnamese mountains
- Strong digital nomad community

### Cons
- Limited international healthcare
- Fewer international school options (significant for families with secondary-age children)
- Smaller expat social scene
- Typhoon season (September-November) requires planning or temporary relocation
- Limited direct international flights (Danang airport connects regionally; long-haul via HCMC or Hanoi)
- Less career opportunity than HCMC`,
  },

  'company-setup-vietnam': {
    slug: 'company-setup-vietnam',
    title: 'How to Set Up a Company in Vietnam: The Complete Foreign Investor Guide (2026)',
    subtitle: 'LLC vs Representative Office, 100% foreign ownership, registration steps, costs, and timeline',
    excerpt: 'Setting up a company in Vietnam as a foreigner is entirely possible - and in most sectors, you can own 100% of your business. This guide covers every structure option, the registration process, realistic costs, and the legal requirements you need to know before you start.',
    author: 'Vietnam Launchpad',
    date: '2026-02-01',
    lastUpdated: '2026-04-01',
    readTime: '16 min read',
    category: 'Work & Business',
    ctaTitle: 'Ready to Register Your Company in Vietnam?',
    ctaBody: 'Vietnam Launchpad handles company registration end-to-end for foreign investors - from structure advice to Investment Registration Certificate, Business Registration Certificate, and tax enrollment. We have registered hundreds of foreign-owned companies across multiple sectors.',
    ctaLink: '/services/company-registration',
    ctaLinkText: 'Start Company Registration',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Book a Free Consultation',
    content: `## Can Foreigners Own 100% of a Company in Vietnam?

Yes - in most sectors. Vietnam's Law on Investment (amended 2020) allows full foreign ownership (100%) in the majority of business sectors. Restrictions apply in a limited number of sensitive industries: media, publishing, certain types of education, specific agricultural activities, and industries reserved for state ownership.

For the vast majority of businesses that expats want to establish - consulting, technology, e-commerce, services, trading, manufacturing, food and beverage, hospitality - 100% foreign ownership is available.

Before registering, you should confirm your specific business activity code (VSIC code) is open to full foreign ownership. This is one of the first steps in the process.

---

## Business Structure Options for Foreign Investors

### 1. Limited Liability Company (LLC) - Most Common

The LLC (Cong ty TNHH) is the most common structure for foreign investors setting up operations in Vietnam.

**Key features:**
- 1 member (single owner) or up to 50 members (multi-owner)
- Separate legal entity - liability limited to charter capital
- Can employ Vietnamese and foreign staff
- Can invoice and collect revenue in Vietnam
- Can repatriate profits (subject to tax obligations being met)

**Best for:** Consulting firms, service businesses, trading companies, technology companies, any business planning to operate commercially in Vietnam.

**Minimum charter capital:** No statutory minimum in most sectors - but must be sufficient to cover initial operating costs. Common practice is $10,000-50,000 USD equivalent. Some regulated sectors (banking, insurance, education) have prescribed minimums.

---

### 2. Joint Stock Company (JSC)

The JSC (Cong ty Co phan) is similar to an LLC but can have an unlimited number of shareholders and can eventually list on a stock exchange.

**Key features:**
- Minimum 3 shareholders
- Can issue shares
- More complex governance requirements (Board of Directors, General Meeting of Shareholders)
- Required for companies planning an IPO

**Best for:** Larger operations planning to raise capital from multiple investors or eventually list publicly.

**Not typically appropriate** for a single foreign entrepreneur starting a business.

---

### 3. Representative Office (RO)

A Representative Office is **not** a company - it is a presence, not a legal trading entity.

**Key features:**
- Cannot generate revenue or issue invoices in Vietnam
- Cannot sign commercial contracts (can only sign on behalf of the parent company abroad)
- Can conduct market research, promote the parent company's products/services, liaise with clients
- Simpler to establish than an LLC
- Must be renewed annually (or every 5 years depending on application)

**Best for:** Companies headquartered abroad that want a legitimate office presence in Vietnam for liaison, market research, or sales support - without committing to full incorporation.

**Not appropriate if:** You plan to generate any revenue, employ local staff commercially, or sign contracts as a Vietnamese entity.

---

### 4. Branch Office

A Branch of a foreign company can conduct commercial activities - unlike a Representative Office. However, it is rarely used in practice because:
- Approval is harder to obtain (sector-specific)
- The parent company bears full liability for the branch's activities
- An LLC typically offers a cleaner structure with the same capabilities

**Best for:** Specific sectors where branch structures are common (banking, legal services). Generally not recommended for most foreign investors.

---

## The Company Registration Process Step by Step

Setting up a foreign-owned LLC involves two parallel registration tracks in Vietnam.

### Step 1: Investment Registration Certificate (IRC)

Before incorporating, foreign investors must obtain an Investment Registration Certificate from the Department of Planning and Investment (DPI) of the province where the company will operate (typically HCMC or Hanoi).

**What you need:**
- Passport copies of all investors
- Draft charter capital amount and business activities (VSIC codes)
- Proposed business address in Vietnam (a lease agreement or letter of commitment)
- Investment proposal documentation
- Bank statement showing funds (amount varies by sector and capital level)

**Timeline:** 15 business days standard. Can be faster with a registered agent.

**Cost:** Official government fee is approximately VND 1 million (under $50). Agent fees for preparation: $500-1,500.

---

### Step 2: Business Registration Certificate (BRC)

With the IRC approved, you then apply for the Business Registration Certificate - the formal company incorporation document.

**What you need:**
- Approved IRC
- Company charter (articles of association)
- Investor and director information
- Registered business address

**Timeline:** 3-5 business days.

**Cost:** Official fee approximately VND 100,000 (minimal). Agent fees typically bundled with overall registration service.

---

### Step 3: Post-Registration Steps

After receiving both certificates, several additional steps are required before the company can operate:

| Step | Timeline | Notes |
|---|---|---|
| Company seal (chop) production | 1-2 days | Required for all official documents |
| Tax registration and tax code | 5-10 days | Automatic in most cases but requires activation |
| Business bank account opening | 1-2 weeks | Bring both certificates + passports |
| Charter capital contribution | 90 days from BRC | Must transfer from abroad into company bank account |
| VAT registration | Within 10 days of first operation | If expecting taxable turnover |
| Social insurance registration | Before hiring first employee | Required by law |

---

## Total Timeline

| Phase | Duration |
|---|---|
| Preparation and document gathering | 1-2 weeks |
| IRC application and approval | 3-4 weeks |
| BRC registration | 1 week |
| Post-registration setup (seal, bank, tax) | 2-3 weeks |
| **Total from start to operational** | **6-10 weeks** |

With a professional agent handling the process, the timeline typically runs 6-8 weeks. DIY attempts without Vietnamese language capability can take significantly longer or run into procedural delays.

---

## Realistic Costs

### Government Fees
Official government fees are minimal - under $100 total for most registrations.

### Agent / Professional Fees

| Service | Typical Cost |
|---|---|
| Full company registration service (IRC + BRC) | $800-1,500 |
| Accounting setup and initial tax compliance | $200-500 |
| Business address / registered office (if needed) | $100-300/month |
| Legal advice (if complex structure) | $500-2,000 |

### Ongoing Costs Once Operational

| Item | Approximate Cost |
|---|---|
| Monthly accounting and bookkeeping | $200-500/month |
| Annual audit (required above certain revenue thresholds) | $500-2,000/year |
| Corporate tax filing | Included in accounting fee or $300-500 separately |
| Business license tax (annual) | VND 3 million (~$120) for most companies |

---

## Minimum Capital Requirements by Sector

Most sectors have no prescribed minimum capital. However, some regulated activities require minimum charter capital:

| Sector | Minimum Capital |
|---|---|
| General trading / consulting / services | None prescribed (practical minimum ~$10,000) |
| Education (training centers) | VND 300 million (~$12,000) |
| Financial leasing | VND 150 billion (~$6 million) |
| Insurance | USD 2 million |
| Banking | Large prescribed amounts |

For a standard service, consulting, tech, or trading company, there is no legal minimum - but your charter capital should realistically reflect your initial operating costs.

---

## Conditional Business Lines: What Requires Approval

Some business activities require additional licenses or conditional approval beyond the standard IRC/BRC process:

- **Food and Beverage:** Food safety certification required
- **Education and Training:** Ministry of Education approval for regulated courses
- **Healthcare services:** Ministry of Health licensing
- **Travel agency / tourism:** Vietnam National Administration of Tourism license
- **Employment agency / HR staffing:** Ministry of Labor approval
- **Real estate brokerage:** Real estate license required

If your business line appears on the conditional list (Appendix IV of the Law on Investment), factor in additional approval time (typically 30-90 additional days) and cost.

---

## The Work Permit Question

Registering a company in Vietnam does not automatically give you the right to work in it as a foreigner. To work legally in your Vietnamese company, you need a work permit.

**Exceptions to work permit requirement:**
- You are a capital-contributing member (investor) in an LLC with charter capital of at least VND 3 billion (~$120,000)
- You are a legal representative (director) of an enterprise registered in Vietnam

Most founders register themselves as both investor and legal representative, which satisfies the work permit exemption condition. Confirm the specific current rules with your registration agent, as these thresholds are periodically adjusted.

For most practical purposes: if you are the owner/director and have sufficient charter capital, you will not need a separate work permit.

---

## Legal Representative: What You Need to Know

Every Vietnamese company must have a Legal Representative (Nguoi Dai Dien Phap Luat). This is the person authorized to sign documents on behalf of the company.

**Key points:**
- Must be permanently resident in Vietnam (or have a proxy arrangement)
- Personally liable for the company's compliance obligations in certain situations
- If the Legal Representative plans to leave Vietnam for more than 30 consecutive days, must appoint an authorized representative
- Foreign nationals can be Legal Representatives - but must have a valid residence permit

Most foreign entrepreneurs appoint themselves as Legal Representative. This is practical and gives direct control. However, it requires that you maintain valid residency status in Vietnam throughout.

---

## Common Mistakes Foreign Investors Make

1. **Choosing the wrong VSIC business codes** - too narrow and you cannot do adjacent activities; incorrect codes cause compliance problems
2. **Charter capital set too low** - making it hard to demonstrate viable operations or meet banking requirements
3. **Not registering the business address correctly** - using a virtual address that does not comply with local requirements
4. **Forgetting the 90-day charter capital contribution deadline** - a violation that can result in penalties
5. **Not setting up accounting from day one** - Vietnam's bookkeeping requirements are strict and retroactive compliance is painful
6. **Not understanding the work permit implication** - assuming company ownership automatically grants the right to work

---

## FAQ: Company Setup Vietnam

**Can I set up a company in Vietnam without being physically present?**
Yes, with a power of attorney. Your agent can handle the entire registration process with notarized/apostilled documents from abroad. You will need to be present to open the bank account in most cases, though some banks allow remote account opening for existing customers.

**Can I register a company in Vietnam as a tourist?**
Technically you can file the application while on a tourist visa, but as Legal Representative you will need a long-stay visa or residence permit before operations begin. Plan your visa situation before starting the registration.

**How long does a Vietnamese company last?**
The IRC specifies an investment duration - typically 10-50 years, with renewal possible. This is different from Western companies which have indefinite life by default. Specify an appropriately long duration in your initial application.

**Can I have a Vietnamese partner?**
Yes. A joint venture (Vietnamese + foreign investor) is also possible. Some sectors require Vietnamese participation. Joint ventures add complexity but can provide local knowledge, networks, and in some sectors access to land use rights that pure foreign-owned companies cannot get.`,
  },

  'trc-vietnam': {
    slug: 'trc-vietnam',
    title: 'TRC Vietnam: Complete Guide to the Temporary Residence Card (2026)',
    subtitle: 'What TRC means, who qualifies, all 3 application routes, required documents, and costs',
    excerpt: "TRC stands for Temporary Residence Card (The Tam Tru in Vietnamese) - Vietnam's long-stay residency document for foreigners. This guide covers all three routes to a TRC, the full application process, what documents you need, and how long it takes.",
    author: 'Vietnam Launchpad',
    date: '2026-02-01',
    lastUpdated: '2026-04-01',
    readTime: '14 min read',
    category: 'Visas & Residency',
    ctaTitle: 'Need Help with Your TRC Application?',
    ctaBody: "Vietnam Launchpad specializes in TRC applications for all routes - investment, work permit, and marriage. We prepare your full document package, liaise with immigration, and handle the process end-to-end. Most TRC applications we manage are approved first time.",
    ctaLink: '/services/trc',
    ctaLinkText: 'Start Your TRC Application',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Ask a Question',
    content: `## What Does TRC Stand For?

**TRC = Temporary Residence Card** (Vietnamese: **The Tam Tru**, abbreviated TRC).

A TRC is Vietnam's official long-term residency document for foreign nationals. It allows you to live in Vietnam for a defined period (typically 1-5 years) without the need to do visa runs or renew visa stamps. It is issued by the Vietnam Department of Immigration.

The TRC is not a permanent residency - "temporary" refers to its fixed duration rather than implying insecurity. TRCs are renewable. Many long-term expats have held TRCs continuously for 10+ years.

---

## TRC vs Visa vs Work Permit: Understanding the Difference

These three documents are distinct and often confused:

| Document | What It Is | Who Issues It |
|---|---|---|
| **Visa** | Entry permission (e-visa, visa on arrival, DL stamp) | Immigration / Embassy |
| **Work Permit** | Authorization to work for a Vietnamese employer | Ministry of Labor (MOLISA) |
| **TRC** | Long-stay residency card | Department of Immigration |

A TRC replaces the need for ongoing visa renewals but does **not** replace a work permit. If you are employed by a Vietnamese company, you need both a work permit (to work legally) and a TRC (to stay long-term).

---

## TRC Validity Periods

| TRC Type | Standard Duration | Maximum |
|---|---|---|
| Work permit-based TRC | Duration of work permit (typically 2 years) | Renewable |
| Investment TRC | 2-5 years | Renewable |
| Marriage to Vietnamese citizen TRC | Up to 5 years | Renewable |

TRCs can be renewed before expiry. There is no limit on the number of times you can renew.

---

## The 3 Routes to a TRC

There are three primary pathways for foreign nationals to obtain a TRC in Vietnam.

---

### Route 1: Work Permit-Based TRC

**Who qualifies:** Foreign nationals with a valid Vietnamese work permit issued by MOLISA (Ministry of Labor, Invalids and Social Affairs).

This is the most common route for expats employed by Vietnamese companies or foreign-invested enterprises operating in Vietnam.

**How it works:**
1. Employer sponsors you for a work permit
2. Work permit approved (see [Work Permit guide](/guides/working-in-vietnam))
3. Apply for TRC based on approved work permit
4. TRC issued for the duration of the work permit (typically 2 years)

**TRC duration:** Matches your work permit - typically 2 years, renewable.

**Key requirement:** You must have a valid, approved work permit before applying. The TRC application cannot be filed concurrently with the work permit application in most cases.

---

### Route 2: Investment TRC

**Who qualifies:** Foreign nationals who have made a qualifying investment in a Vietnam-registered enterprise.

This is the primary TRC route for business owners, entrepreneurs, and investors who do not have a conventional employment relationship.

**Investment threshold:** You must be a capital-contributing member of a Vietnamese enterprise. The enterprise must have charter capital of at least **VND 3 billion** (approximately USD 120,000 at 2026 rates).

**Note:** The VND 3 billion threshold applies to the total charter capital of the enterprise, not necessarily your personal contribution amount. However, you must be a registered investor/member in the company.

**TRC duration:** Up to 5 years, renewable.

**Advantage:** This route gives you the longest initial TRC validity and is independent of any employment relationship. It is the preferred route for founders of Vietnam-registered companies.

**See also:** Our [Company Registration service](/services/company-registration) if you need to establish the underlying company first.

---

### Route 3: Marriage to a Vietnamese Citizen

**Who qualifies:** Foreign nationals legally married to a Vietnamese citizen under Vietnamese law.

**TRC duration:** Up to 5 years, renewable.

**Marriage registration requirement:** The marriage must be registered in Vietnam at the district-level People's Committee. A marriage certificate from abroad is not sufficient - you need a Vietnamese Marriage Registration Certificate or have the foreign marriage recognized in Vietnam.

**See also:** Our [Marriage Registration guide](/guides/marriage-registration) for the full process.

**Note:** This TRC is issued based on the family relationship, not employment. It allows you to live in Vietnam but does not authorize employment - you would still need a work permit if you are employed by a Vietnamese entity (though the investment route or legal representative exemption may apply).

---

## TRC Application: Required Documents

The exact document checklist varies slightly by route and by province, but the core requirements are:

### All Routes

| Document | Notes |
|---|---|
| Original passport | Must be valid for at least 6 months beyond TRC start date |
| Temporary accommodation registration | Registered at local ward police (CT01 form - registered by your landlord or hotel) |
| 2 passport photos | White background, recent, specific size requirements (3x4 cm or 4x6 cm - confirm current spec) |
| Application form (NA5 or NA6) | Provided by immigration; complete in Vietnamese |
| Proof of legal entry | Visa or entry stamp in passport |

### Additional for Work Permit Route

| Document | Notes |
|---|---|
| Original work permit | Issued by MOLISA |
| Labor contract | Notarized copy |
| Company registration documents | IRC/BRC of employing company |

### Additional for Investment Route

| Document | Notes |
|---|---|
| Investment Registration Certificate (IRC) | Company's IRC |
| Business Registration Certificate (BRC) | Company's BRC |
| Evidence of capital contribution | Bank transfer records or capital contribution minutes |
| Company charter | Showing you as investor/member |

### Additional for Marriage Route

| Document | Notes |
|---|---|
| Vietnamese Marriage Registration Certificate | Issued by People's Committee |
| Vietnamese spouse's ID card (CCCD) | |
| Household registration (Ho Khau) of spouse | Or confirmation of current address |

---

## Where to Apply for a TRC

TRC applications are submitted to the **provincial/city Immigration Department** (Phong Quan Ly Xuat Nhap Canh) in the province where you will reside.

- **Ho Chi Minh City:** HCMC Immigration Department, 161 Nguyen Du, District 1
- **Hanoi:** Hanoi Immigration Department, 40A Hang Bai, Hoan Kiem
- **Da Nang:** Da Nang Immigration Department, 7 Tran Qui Cap

All applications must be submitted in person by the applicant.

---

## TRC Processing Timeline

| Step | Duration |
|---|---|
| Document preparation | 1-2 weeks |
| Submission and official processing | 5-15 business days |
| Card production after approval | 3-5 business days |
| **Total from submission to card** | **2-4 weeks** |

Processing time varies by province and by current Immigration Department workload. HCMC and Hanoi offices can be slower during peak periods (January, September).

---

## TRC Costs

### Government Fees

| Fee Type | Amount |
|---|---|
| TRC issuance fee | VND 800,000 - 1,600,000 (~$32-65) depending on duration |
| Document stamp fees | Minimal |

### Agent Fees (Vietnam Launchpad)

Using a professional agent for TRC applications typically costs $300-600 all-in (government fees + agent service fee), depending on route complexity and document translation requirements.

Attempting a TRC application without Vietnamese language capability is possible but risks document errors that cause rejection or delay.

---

## TRC and Work Permit: The Combination Question

A common source of confusion is the relationship between TRC and work permit:

**If you have a work permit:** Apply for TRC separately after the work permit is issued. Your TRC will be valid for the same duration as your work permit.

**"TRC work permit" as a phrase:** Some people use "TRC work permit" loosely to mean the combination of a TRC obtained via a work permit route. The TRC and work permit are separate documents even though one depends on the other.

**If your work permit expires:** Your TRC also becomes invalid and must be renewed (or you switch to a different TRC route).

---

## TRC Renewal

Renew your TRC before it expires - do not let it lapse. Overstaying a TRC is treated as an immigration violation.

**When to apply for renewal:** At least 30-45 days before expiry. Offices can be busy and processing times vary.

**Renewal process:** Similar to the initial application. Document requirements are largely the same. If your underlying status has not changed (same employer, same investment), renewal is usually straightforward.

---

## Temporary Residence Registration (Tam Tru) vs TRC

These are different:

**Temporary Residence Registration (Tam Tru / CT01 form):** A local registration that your landlord files at the ward police station declaring you are living at their property. This is an address-level registration, not a visa or stay permission. You need this for daily practicalities (bank account, some government services) and it is a prerequisite for TRC application.

**TRC:** The actual residency card that authorizes your stay in Vietnam.

You need both: the Tam Tru registration proves your address; the TRC authorizes your period of stay.

---

## Frequently Asked Questions

**Can I leave and re-enter Vietnam with a TRC?**
Yes. A TRC allows multiple entries. You do not need a separate visa to re-enter while your TRC is valid - present your TRC at immigration on return.

**Can my family get TRCs too?**
Yes. Dependent family members (spouse, children) of TRC holders can apply for dependent TRCs. The work permit and investment routes both allow family member applications.

**Does a TRC give me the right to work?**
The TRC authorizes your residency - it does not separately authorize employment. The work permit authorizes employment. Exception: investment TRC holders who are legal representatives of their Vietnamese company do not need a separate work permit.

**What happens if I lose my TRC?**
Report to the local immigration office and the ward police immediately. Apply for a replacement card. There is a government fee for replacement.

**Is a TRC the same as a permanent residency?**
No. Vietnam has a separate Permanent Residency (PR / Thuong Tru) status requiring 3+ consecutive years of TRC residency and additional requirements. TRC holders who meet the criteria can apply for PR. Most long-term expats maintain TRC status rather than pursuing PR.`,
  },

  'teaching-english-vietnam': {
    slug: 'teaching-english-vietnam',
    title: 'Teaching English in Vietnam: The Complete Guide for 2026',
    subtitle: 'Requirements for native and non-native speakers, UK citizens, work permits, salaries, and how to find jobs',
    excerpt: "Vietnam is one of the most popular destinations in Asia for English teaching jobs - and for good reason. High demand, competitive salaries, and a low cost of living make it financially attractive. This guide covers all the requirements, including specific guidance for non-native English speakers and UK citizens.",
    author: 'Vietnam Launchpad',
    date: '2026-02-01',
    lastUpdated: '2026-04-01',
    readTime: '15 min read',
    category: 'Work & Business',
    ctaTitle: 'Need a Work Permit to Teach in Vietnam?',
    ctaBody: 'Vietnam Launchpad handles work permit applications for English teachers across Vietnam. We prepare your full document package, liaise with MOLISA, and manage the process. Most of our teacher work permit applications are approved first time.',
    ctaLink: '/services/work-permit',
    ctaLinkText: 'Apply for Your Work Permit',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Ask a Question',
    content: `## Why Vietnam for English Teaching?

Vietnam has one of the highest demands for English language education in Southeast Asia. English proficiency is seen as a critical career skill and parents invest heavily in their children's English education. This creates a large, well-funded market for qualified teachers.

**The financial case:**
- Average salary: $1,500-2,500/month for qualified teachers
- Cost of living: $800-1,500/month for a comfortable lifestyle
- Net monthly savings: $500-1,500+/month is achievable
- Tax rate for non-resident foreign teachers: flat 20% on income; as a tax resident (183+ days/year) you pay progressive rates which can be lower

For context: a teacher earning $2,000/month in Vietnam has a purchasing power equivalent to roughly $4,000-5,000 in the UK or US when local costs are considered.

---

## Types of English Teaching Jobs in Vietnam

Understanding the job market helps you target your applications and negotiate effectively.

### International Schools

**Best paying, highest requirements.** Teach full curricula to international students. Pay: $2,500-5,000+/month. Require full teaching qualifications (PGCE/QTS or equivalent), often a degree in your subject, and experience.

### Language Centers (English Centers)

**The most common employer category.** Major chains: ILA, Wall Street English, Apollo, Apax, Language Link, YOLA, VUS. Hundreds of independent centers also operate across the country.

Pay: $1,200-2,500/month. Requirements vary but generally require TEFL/CELTA and a degree.

### Private/Tutoring

Many teachers supplement or replace center work with private students. Pay: $15-40/hour. No overhead - but no guaranteed hours either.

### Universities

**Stable, good work-life balance.** University positions offer regular hours, holidays that align with the academic calendar, and a professional environment.

Pay: $1,200-2,000/month. Typically require a master's degree or significant experience.

### International Kindergartens and Primary Schools

Strong demand for native or near-native English teachers for young learners. Pay: $1,500-2,500/month. Requirements often include child-safeguarding certification.

---

## Requirements to Teach English in Vietnam

Vietnamese law requires all foreign English teachers to meet a set of legal requirements before they can be legally employed. Since 2018, enforcement has become progressively stricter.

### Core Requirements (All Teachers)

| Requirement | Detail |
|---|---|
| **Degree** | Bachelor's degree minimum in any subject |
| **TEFL/TESOL/CELTA** | Minimum 120 hours; CELTA is most recognised |
| **Health certificate** | From a licensed hospital; must confirm fitness to work |
| **Criminal background check** | From your home country AND any country lived in for 6+ months in the past 3 years |
| **Document apostille** | Degree and criminal check must be apostilled |

All documents from abroad must be apostilled (for countries in the Hague Convention) or notarized through the Vietnamese embassy (for non-Hague countries). Documents in languages other than Vietnamese must be translated by a licensed translation service and notarized.

---

## Requirements for Non-Native English Speakers

This is one of the most frequently asked questions: **can non-native English speakers teach English in Vietnam?**

**Yes - but with additional requirements.**

Vietnamese immigration law defines "native English speaking countries" as: USA, UK, Canada, Australia, New Zealand, Ireland, and South Africa.

If you are not a citizen of one of these seven countries, you are classified as a non-native English speaker under Vietnamese law and must provide **additional documentation** to prove English language proficiency:

### Non-Native Speaker Requirements (2026)

In addition to the standard requirements above, non-native English speakers must provide **one of the following**:

1. **Degree taught entirely in English** from a recognized institution - with a letter from the institution confirming the language of instruction was English throughout
2. **IELTS 7.5+ or TOEFL 102+** (or equivalent recognized English proficiency test)
3. **Teaching qualification** (such as CELTA or a nationally-recognized teaching certificate) **from a native English speaking country**

**Practical note:** Option 1 (English-medium degree with supporting letter) is the most commonly used route for non-native speakers. If you studied in English in any country - including non-native countries like Germany, the Netherlands, Singapore, or India - a supporting letter from your university confirming English-medium instruction can satisfy this requirement.

**Country-specific examples:**

- **Indian, Pakistani, Singaporean citizens:** English is widely used as academic medium. Obtain a letter from your university confirming English-medium instruction. This is typically the simplest route.
- **European citizens (German, Dutch, Swedish, French, etc.):** If your degree was taught in English (common for master's programs and many bachelor's programs across Europe), obtain the university letter. Alternatively, IELTS 7.5+ works.
- **Filipino citizens:** Despite widespread English use, Philippines is not on the "native speaker" list. However, the university letter route is often straightforward.
- **South Korean, Japanese, Chinese citizens:** If degree was in your home country in your native language, you will need IELTS 7.5+ or a CELTA from a native-speaker country.

---

## Requirements for UK Citizens Teaching in Vietnam

UK citizens are classified as **native English speakers** and do not face the additional language proficiency requirements.

### What UK Teachers Need

| Document | Notes |
|---|---|
| UK degree (any subject) | Bachelor's minimum |
| TEFL/CELTA (120+ hours) | CELTA strongly preferred for better employers |
| DBS Enhanced Certificate | Disclosure and Barring Service check - the standard UK criminal background check for teaching |
| Health certificate | Obtained in Vietnam from a designated hospital; ~$50-100 |
| Degree apostille | UK degrees must be apostilled via FCDO (formerly FCO) |
| DBS apostille | The DBS certificate must also be apostilled via FCDO |

**FCDO apostille:** This is the UK Foreign, Commonwealth and Development Office service that authenticates UK documents for use abroad. As of 2026, the online apostille service costs approximately 30 pounds per document and is processed within 1-5 business days for online applications.

**Applying from Vietnam:** You can apply for the FCDO apostille online from Vietnam and have documents emailed or posted to a trusted contact in the UK to handle the original. Plan at least 2-3 weeks for the full document preparation process if doing it remotely.

**DBS note:** Standard DBS checks are not acceptable for Vietnamese work permit purposes - you need an **Enhanced DBS** certificate. If you do not have a current one (less than 3-6 months old is preferred), apply before leaving the UK.

---

## The Work Permit Process for English Teachers

To teach legally in Vietnam, you must have a valid work permit issued by MOLISA (Ministry of Labor). Teaching on a tourist visa or e-visa is illegal and schools can be fined heavily for employing teachers without work permits.

### Step 1: Find a Licensed Employer

The work permit application is sponsored by your employer. Only schools with a valid business registration and education license can legally employ foreign teachers. Verify your employer's status before signing any contract.

### Step 2: Document Preparation

Prepare and apostille all required documents (list above). This is typically done before arriving in Vietnam or in the first weeks of being in the country. Your employer or agent will advise on the specific requirements for your situation.

### Step 3: Work Permit Application

Your employer (or an agent on your behalf) submits the work permit application to MOLISA. Processing: **5-10 business days** in most cases.

### Step 4: TRC Application

Once your work permit is approved, apply for a Temporary Residence Card (TRC). This gives you multi-year residency status without visa runs.

**Full timeline:** 3-6 weeks from starting document preparation to having your work permit and TRC.

---

## Salary Ranges by Job Type (2026)

| Position | Monthly Salary |
|---|---|
| Language center (new teacher) | $1,200-1,600 |
| Language center (experienced) | $1,600-2,200 |
| Language center (senior/management) | $2,000-2,800 |
| International school (full curriculum) | $2,500-4,500+ |
| University lecturer | $1,200-2,000 |
| Private/tutoring (per hour) | $15-40 |

**HCMC and Hanoi generally pay 10-20% more** than smaller cities due to higher cost of living and competition for qualified teachers.

**Negotiation note:** A CELTA qualification from Cambridge consistently commands higher salaries than generic online TEFL certificates. If you are investing in a qualification, CELTA is the most recognized by serious employers.

---

## TEFL vs CELTA: Which One?

This comes up constantly in the teacher community:

**TEFL (Teaching English as a Foreign Language):** Generic term for various certificates. Quality varies enormously - from 120-hour online courses ($200-500) to intensive in-person programs.

**CELTA (Certificate in English Language Teaching to Adults):** Issued by Cambridge Assessment English. The industry gold standard. Involves assessed teaching practice with real students. Takes 4 weeks full-time or 3 months part-time. Cost: $1,500-2,500 depending on location.

**For Vietnam specifically:** Any 120-hour TEFL meets the legal minimum. However, CELTA holders consistently get better job offers, higher starting salaries, and access to more reputable employers. If you are serious about teaching in Vietnam long-term, CELTA is worth the investment.

---

## Where to Find English Teaching Jobs in Vietnam

### Job Boards and Communities
- **VietnamTeachingJobs.com** - the largest dedicated English teaching job board
- **Facebook groups:** "Teaching English in Vietnam" (90,000+ members), "English Teaching Jobs in Ho Chi Minh City," "Teach in Vietnam Hanoi"
- **Dave's ESL Cafe** - still active for international teaching jobs
- **LinkedIn** - for international school positions

### Applying Directly
Many of the largest language center chains (ILA, Apollo, Wall Street English) have careers pages and recruit directly. For international schools, check each school's website individually.

### Recruitment Agencies
International school recruitment agencies (Search Associates, TIE Online, Schrole) can connect qualified teachers with international school positions before arriving in Vietnam.

---

## HCMC vs Hanoi vs Da Nang for Teaching

**HCMC:** Highest volume of jobs, highest salaries, largest choice of employers. Best for teachers wanting the widest options.

**Hanoi:** Strong market, good salaries, more universities. Smaller city feel than HCMC.

**Da Nang:** Growing market, strong demand relative to supply. Lower absolute salaries but significantly lower cost of living - net savings can be competitive.

**Smaller cities (Can Tho, Hue, Vung Tau, Nha Trang):** Fewer jobs but also fewer competing teachers. Some teachers specifically prefer smaller cities for the lifestyle and community feel.

---

## Common Mistakes Teachers Make

1. **Teaching without a work permit** - the school is fined but you also bear risk, including deportation
2. **Accepting an apostille for the wrong document type** - make sure criminal checks AND degrees are both apostilled
3. **Getting a standard DBS rather than Enhanced DBS** (UK teachers)
4. **Using an expired criminal background check** - checks are typically valid for 6 months
5. **Signing a contract before verifying the school's licenses** - protect yourself before committing
6. **Relying on a tourist visa long-term** - this is increasingly risky as enforcement has tightened`,
  },

  'marriage-registration': {
    slug: 'marriage-registration',
    title: 'Getting Married in Vietnam: The Complete Marriage Registration Guide for Foreigners (2026)',
    subtitle: 'How to register a marriage in Vietnam, documents required, the process for foreign nationals, and getting your Vietnamese marriage certificate',
    excerpt: "Marriage registration in Vietnam for foreigners involves more paperwork than a domestic marriage - but the process is manageable if you know what to prepare. This guide covers the full registration process, required documents, where to apply, and how to get your certificate recognized internationally.",
    author: 'Vietnam Launchpad',
    date: '2026-02-01',
    lastUpdated: '2026-04-01',
    readTime: '13 min read',
    category: 'Daily Life',
    ctaTitle: 'Need Help with Marriage Registration or the TRC Afterward?',
    ctaBody: 'Vietnam Launchpad handles marriage registration document preparation for foreign nationals and the subsequent TRC application for the foreign spouse. We know exactly what each province requires and manage the full process.',
    ctaLink: '/contact',
    ctaLinkText: 'Book a Consultation',
    ctaSecondaryLink: '/services/trc',
    ctaSecondaryText: 'Learn About Marriage-Based TRC',
    content: `## Getting Married in Vietnam: Overview

Foreign nationals can legally marry Vietnamese citizens in Vietnam. The marriage is registered at the local People's Committee and produces a **Vietnamese Marriage Registration Certificate** (Giay Chung Nhan Ket Hon) - the official legal document proving your marriage under Vietnamese law.

Vietnam also allows two foreign nationals (neither being Vietnamese) to marry in Vietnam, though this is less common and the requirements differ slightly.

This guide primarily covers the most common scenario: a foreign national marrying a Vietnamese citizen in Vietnam.

---

## Why the Marriage Registration Matters

The Vietnamese Marriage Registration Certificate is essential for:

1. **Residency (TRC):** Your foreign spouse can use the marriage certificate as the basis for a long-stay Temporary Residence Card (TRC)
2. **Spousal visa for the Vietnamese partner** to move abroad (if applicable)
3. **Inheritance and property rights** within Vietnam
4. **Recognition in your home country** (with appropriate translation, apostille, and registration processes depending on your country)

Do not mistake a religious or traditional Vietnamese wedding ceremony for legal registration - the ceremony is cultural; the legal registration at the People's Committee is what creates the legally binding marriage.

---

## Who Handles Marriage Registration in Vietnam?

Marriage registration in Vietnam is handled at two levels depending on who is involved:

**Provincial Department of Justice (So Tu Phap):**
Handles all marriages involving a foreign national. This is where you will register if one or both parties are foreign nationals.

**District People's Committee:**
Handles marriages between two Vietnamese citizens only. Foreign nationals cannot use this route.

**Key point:** If you are a foreigner marrying a Vietnamese citizen, you must go to the **Provincial Department of Justice** in the province where the Vietnamese party has their household registration (Ho Khau).

---

## Marriage Registration: Step-by-Step Process

### Step 1: Determine Which Province to Apply In

The application is filed at the Department of Justice of the province where the Vietnamese citizen's household registration (Ho Khau) is located. If the Vietnamese party has moved and their Ho Khau is in a different province from where they live, this can affect logistics.

If the Vietnamese party has changed their Ho Khau to a new province (a process in itself), you may be able to apply locally - discuss with the relevant office.

### Step 2: Prepare Documents

Document preparation is the most time-consuming part. Allow **3-6 weeks** for full document gathering, particularly for the foreign national's documents from abroad.

See the full document checklist below.

### Step 3: Submit Application

Submit at the Provincial Department of Justice in person. Both parties must be present at the time of submission (or at the interview stage - practices vary by province, confirm locally).

### Step 4: Interview / Verification (if required)

Some provinces require an interview with both parties to confirm the marriage is genuine and voluntary. This is conducted in Vietnamese - an interpreter can attend.

### Step 5: Certificate Issued

If everything is in order, the **Vietnamese Marriage Registration Certificate** is issued typically within **15-20 business days** of submission (some provinces faster, some slower).

---

## Document Requirements: Foreign National

The following documents are typically required from the foreign national. Requirements can vary slightly by province - confirm the current requirements at the specific Department of Justice where you will apply.

| Document | Notes |
|---|---|
| **Original valid passport** | Plus copies |
| **Birth certificate** | Apostilled from your country of birth; translated into Vietnamese |
| **Certificate of No Impediment to Marriage** | Issued by your home country - confirms you are legally single. Most countries issue this through the embassy or civil registry. Apostilled. Translated. |
| **Criminal record certificate** (some provinces) | From home country or local police; requirements vary |
| **Health certificate** | Confirming no conditions that prevent marriage; issued by a licensed hospital in Vietnam (~$30-80) |
| **Confirmation of Vietnamese law compliance** | Some provinces require you to sign a declaration that you understand Vietnamese marriage law |
| **Photos** | Passport-style photos (usually 4-6 required) |

**Certificate of No Impediment (CNI) / Marital Status Certificate:** This is often the hardest document to obtain. Requirements vary dramatically by nationality:

- **UK citizens:** Certificate of No Impediment issued by FCDO (Legalisation Office), or Marital Status Certificate from the General Register Office. Apostille required.
- **US citizens:** The USA does not issue a national CNI. A "Letter of No Impediment" can sometimes be obtained from the US Consulate in Vietnam, or an affidavit sworn before a notary public (apostilled) is accepted by some provinces. Confirm with the specific DPJ office.
- **Australian citizens:** Single status declaration before the Australian Consulate in Vietnam, or a statement from the Registry of Births, Deaths and Marriages in your home state. Apostille required.
- **Other nationalities:** Contact your home country's civil registry or your country's embassy in Vietnam for the correct document and process.

---

## Document Requirements: Vietnamese Citizen

| Document | Notes |
|---|---|
| **CCCD (National ID card)** | Must be current and valid |
| **Household registration book (Ho Khau)** | Or digital household registration confirmation |
| **Birth certificate** | Vietnamese-issued |
| **Certificate of marital status** | Issued by local ward People's Committee confirming they are legally single |
| **Health certificate** | From a licensed hospital |
| **Photos** | Passport-style |

---

## Document Translation and Apostille Requirements

All foreign documents must be:

1. **Apostilled** in the country of origin (for countries in the Hague Apostille Convention) OR notarized through the Vietnamese Embassy in your home country (for non-Hague countries)
2. **Translated into Vietnamese** by a licensed translation company and notarized in Vietnam

**Common Hague Convention countries:** UK, USA, Australia, most European countries, etc. Check the official Hague Conference website for the full list.

**Translation note:** Do not use online translation services or personal translators for official documents. Use a licensed translation company (Cong ty dich thuat co phep) that can provide notarized translations. In HCMC and Hanoi, there are many reliable services; fees typically $20-60 per document.

---

## Costs

### Official Fees

| Item | Approximate Cost |
|---|---|
| Marriage registration fee (provincial) | VND 500,000 - 2,000,000 (~$20-80) |
| Health certificate (per person) | ~$30-80 |
| Document translation (per document) | $20-60 |
| Notarization (per document) | $5-20 |

### External Document Costs

| Item | Approximate Cost |
|---|---|
| CNI / Marital status certificate (from home country) | $50-200 depending on country |
| Apostille fees (home country) | $25-80 per document |
| Postage/courier (if getting documents from abroad) | $30-100 |

**Agent fees** if using a professional service to manage the process: typically $400-800.

**Total realistic cost:** $500-1,500 all-in depending on nationality and number of documents needing apostille.

---

## Timeline

| Phase | Duration |
|---|---|
| Obtaining documents from home country (CNI, birth cert, apostilles) | 2-6 weeks |
| Translation and notarization in Vietnam | 1 week |
| Department of Justice processing | 15-20 business days |
| **Total from start to certificate** | **6-10 weeks** |

The main variable is how quickly you can obtain documents from your home country - particularly the Certificate of No Impediment.

---

## After Registration: Getting Your Vietnamese Marriage Certificate Recognized Abroad

The Vietnamese Marriage Registration Certificate is a Vietnamese legal document. To use it in your home country, you will typically need to:

1. **Obtain an apostille from Vietnam** for the marriage certificate (through Vietnam's Ministry of Foreign Affairs - Consular Department or their provincial offices). Cost: minimal.
2. **Have it translated** into your home country's language by a certified translator
3. **Register or present it** to your home country's civil registry or relevant authority

**UK:** Register with the General Register Office; you will need an apostille and certified translation.

**USA:** State-level civil authorities vary; generally requires apostille and certified translation. Some states require additional notarization.

**Australia:** Register with the relevant state/territory registry.

Confirm current requirements with your home country's consulate or civil registry as processes change.

---

## Getting Married: The Wedding Itself

Registration at the People's Committee or Department of Justice is the legal act. The ceremony is separate.

Many couples:
1. **Legally register** at the Department of Justice (quiet, official, with required witnesses)
2. **Hold a wedding ceremony separately** - traditional Vietnamese wedding banquet, Western ceremony, beach ceremony, or any combination

Vietnamese traditional weddings typically involve a formal engagement ceremony (le an hoi) where the groom's family visits the bride's family, and a wedding banquet with many guests. These are cultural traditions, not legal requirements.

---

## Same-Sex Marriage in Vietnam

As of 2026, Vietnam does not legally recognize same-sex marriage. The National Assembly removed criminal penalties for same-sex ceremonies in 2015, but no legislation for legal recognition has passed. Same-sex partners cannot register a marriage at the Department of Justice.

---

## Frequently Asked Questions

**Can we marry at a resort or on the beach?**
The legal registration must happen at the Department of Justice. You can have your ceremony anywhere you wish. Some resorts have officiant services that accompany the legal registration process.

**How long after registration can we apply for the TRC?**
Immediately. The marriage certificate is the basis for the TRC application; file as soon as you have the certificate.

**Does the foreign spouse automatically get a TRC after marriage?**
No - the TRC must be applied for separately. The marriage certificate enables the application but does not automatically grant residency.

**What if one partner cannot be present at the Department of Justice?**
Both parties typically need to be present. For the submission in some provinces, a Power of Attorney may allow an agent to submit documents, but the interview (if required) usually requires both parties. Confirm with the specific office.

**Is a marriage abroad recognized in Vietnam?**
A legal marriage from abroad can generally be used as evidence in Vietnam (for property, visa purposes, etc.) with appropriate apostille and translation. However, for the Vietnamese TRC based on marriage, Vietnamese immigration typically prefers a Vietnamese Marriage Registration Certificate. This may require registering the foreign marriage at the Department of Justice in Vietnam.`,
  },

  'driving-vietnam': {
    slug: 'driving-vietnam',
    title: 'Driving in Vietnam: Licenses, Car Rental, and Converting Your Foreign License (2026)',
    subtitle: 'Can you drive in Vietnam on your foreign license, how to convert it, renting a car, and motorbike rules',
    excerpt: "Can you drive in Vietnam on a US, UK, or international license? The answer is more complicated than most guides suggest. This page covers what is legally required, how to convert your foreign license, and everything you need to know about renting a car or motorbike in Vietnam.",
    author: 'Vietnam Launchpad',
    date: '2026-02-01',
    lastUpdated: '2026-04-01',
    readTime: '12 min read',
    category: 'Daily Life',
    ctaTitle: 'Need to Convert Your Foreign Driving License?',
    ctaBody: "Vietnam Launchpad handles driving license conversion for foreign nationals - from document preparation to submission at the Department of Transport. We manage the process so you have a legal Vietnamese license quickly.",
    ctaLink: '/services/drivers-license',
    ctaLinkText: 'Start License Conversion',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Ask a Question',
    content: `## Renting a Car in Vietnam

Renting a car in Vietnam as a foreigner is straightforward - but there are important things to understand before you book.

### What You Need to Rent a Car

**Requirement 1: A valid driver's license**

To rent a car legally in Vietnam, you need either:
- A valid Vietnamese driving license
- A valid International Driving Permit (IDP) accompanied by your home country's driving license

Your home country's license **alone** is not sufficient to rent from legitimate car rental companies. You need the IDP paired with your domestic license.

**Requirement 2: Valid passport and visa**

**Requirement 3: Age minimum**

Most rental companies require drivers to be 21-25+ years old. Confirm with the specific company.

### International Driving Permit (IDP) for Car Rental

An IDP is an official document that translates your driving license into multiple languages. It is recognized globally under the Geneva Convention on Road Traffic (which Vietnam has signed).

**Where to get an IDP before arriving in Vietnam:**
- **UK:** AA or RAC (approximately 6-10 pounds, issued same-day)
- **USA:** AAA or AATA (approximately $20, requires existing US license)
- **Australia:** NRMA, RACQ, RAA and other state motoring clubs (~$35)
- **Canada:** CAA
- Most national motoring associations in other countries issue IDPs

An IDP is valid for 1 year from issue. Get one before you travel - they cannot be obtained in Vietnam.

**Important:** The IDP must be used together with your original home country license. The IDP alone is not valid.

### Renting With a Driver

A popular alternative to self-driving is hiring a **car with driver**. This is common, affordable, and practical given Vietnam's traffic conditions:

- Day rental with driver (HCMC): $40-80/day depending on car type and distance
- Intercity with driver (e.g., HCMC to Da Nang): $80-150+ per day
- Airport transfers: $10-30 depending on distance and car type

For most tourists and short-term visitors, a car with driver makes more practical sense than self-driving - particularly in cities where traffic and navigation are challenging.

### Car Rental Companies in Vietnam

**International brands with Vietnam operations:**
- Avis Vietnam
- Europcar Vietnam
- Budget Vietnam

**Local rental companies** (often better value):
- Vinasun Car Rental
- Taxi and car rental services through your hotel
- Grab (GrabCar) for shorter trips without full-day rental

**Apps:** For flexible car hire by the hour or day, Xanh SM (the VinFast EV ride-hail service) has expanded car options.

### Self-Drive Road Trip Considerations

Self-drive road trips are possible and popular on routes like the Hai Van Pass (Da Nang to Hue) or the Ha Giang Loop. However:

- **Traffic in cities is intense** - HCMC and Hanoi traffic is not recommended for first-time drivers in Vietnam
- **Road rules are different** - Vietnamese driving culture has its own logic; expect more assertive merging and horn use than Western drivers may be used to
- **Insurance:** Confirm your rental car has comprehensive insurance and understand the excess amount before driving
- **Toll roads:** Major highways use electronic tolls and cash toll plazas - have small VND notes available

---

## Can You Drive in Vietnam with a US License?

**The short answer:** You cannot legally drive in Vietnam on a US license alone. A US driver's license by itself is not recognized for driving on Vietnamese roads.

**What works legally:**
- A valid **International Driving Permit (IDP)** issued in the USA (from AAA or AATA) **plus** your original US license - this combination is legally recognized for car driving
- A Vietnamese driving license (obtained by conversion - see below)

**What does NOT work:**
- A US state-issued driving license alone
- An IDP alone without the US license

**For motorbikes:** The IDP covers car categories. For motorbike/scooter driving, you technically need a Vietnamese license or an IDP that specifically covers motorcycle categories (check your IDP class when applying).

**Practical reality vs legal requirement:** Many tourists ride rented motorbikes in Vietnam on foreign licenses or no license at all. This is common but illegal, voids most rental insurance, and would cause serious complications if you were in an accident. This guide covers the legal position - what you do with that information is your choice.

---

## Can You Drive in Vietnam with a UK License?

**The same rules apply as for a US license:** A UK driving license alone is not valid in Vietnam.

**What works legally:**
- A valid **International Driving Permit** issued in the UK (from AA or RAC) **plus** your original UK license
- A Vietnamese driving license

**UK-specific note on IDP type:** The UK now issues two types of IDP:
1. **1949 IDP** (valid in countries that signed the 1949 Geneva Convention) - valid in Vietnam
2. **1968 IDP** (valid in countries that signed the 1968 Vienna Convention) - Vietnam signed the 1968 convention but also accepts the 1949 IDP

Get the **1949 IDP** from the AA or RAC (6 pounds) - this is the relevant one for Vietnam. You can hold both if unsure.

---

## Converting Your Foreign Driving License to a Vietnamese License

If you are living in Vietnam long-term, converting your foreign license to a Vietnamese one is the cleanest solution. It removes the IDP dependency and gives you a Vietnamese license that is valid without expiry concerns.

### Who Can Convert?

You must have:
- A valid foreign driving license from your home country
- A valid Vietnamese visa or residency permit (TRC or valid stamp)
- A residence registration in Vietnam (Tam Tru)

License conversion is handled by the **Department of Transport** (So Giao Thong Van Tai) in the province where you are registered.

### Conversion vs. Examination

**Conversion (Doi bang lai):** For licenses from countries that have a bilateral agreement with Vietnam - you exchange your foreign license for a Vietnamese one without sitting a test. Countries with bilateral agreements include: USA, UK, Australia, most European countries, Japan, South Korea, and others.

**Examination:** If your country does not have a bilateral agreement, you may need to sit the Vietnamese driving test in addition to document conversion.

**Practical step:** Check with the provincial Department of Transport whether your country qualifies for direct conversion or requires an exam. The list of eligible countries expands periodically.

### Documents Required for License Conversion

| Document | Notes |
|---|---|
| Original foreign driving license | Must be valid |
| Certified translation of the license | Into Vietnamese, by a licensed translation company |
| Passport (original + copies) | |
| Valid Vietnam visa / TRC | Proof of legal stay |
| Temporary residence registration (Tam Tru) | CT01 form registered at local ward police |
| Health certificate | Confirming fitness to drive; from a licensed hospital |
| Application form | Provided by the Department of Transport |
| Photos | Passport-style, specific size |
| Apostille/notarization of license | Some provinces require this - confirm locally |

### License Conversion Process

1. **Prepare documents** (including translation and health certificate) - approximately 1-2 weeks
2. **Submit at the Department of Transport** in your province
3. **Processing time:** 5-15 business days
4. **Collect your Vietnamese license**

**Cost:** Official fees approximately VND 135,000-200,000 (under $10). Translation and health certificate add another $50-100. Agent fees if using a service: $150-300.

### What Category of License?

Vietnamese licenses use category codes:

| Category | Vehicle Type |
|---|---|
| A1 | Motorbike 50-175cc |
| A2 | Motorbike over 175cc; 3-wheel motor vehicles |
| B1 | Car up to 9 seats (automatic; cannot drive commercially) |
| B2 | Car up to 9 seats (manual; can drive commercially) |
| C | Truck up to 3.5 tons |
| D, E, F | Larger vehicles |

If your foreign license covers a car, you will typically convert to B1 or B2 depending on your license specifics. If you also want a motorbike license and your foreign license covers motorcycles, that can usually be converted too.

---

## Motorbike Rules for Foreigners

Motorbikes (xe may) are the primary transport mode in Vietnam and many expats ride them daily.

### Legal Requirements to Ride a Motorbike

- **Under 50cc (xe may dien, electric scooters):** No license required in Vietnam (though rules for electric bicycles vs scooters are evolving - confirm current rules)
- **50cc-175cc (A1):** Requires Vietnamese A1 license or equivalent
- **Over 175cc (A2):** Requires Vietnamese A2 license

**IDP for motorbikes:** IDPs typically include motorcycle categories if your home license covers motorcycles. Check the category listed on your IDP when applying in your home country.

### Renting a Motorbike

Motorbike rentals are available everywhere in Vietnam for $5-15/day for a standard semi-automatic or manual bike, or $20-40/day for larger bikes.

**What rental shops check:** Practically speaking, most motorbike rental shops in tourist areas do not check for licenses at all. This is the reality on the ground. However, your rental agreement terms and any insurance coverage may require a valid license.

**Traffic police (CSGT):** Traffic police checkpoints do occur and do check licenses. Being caught riding without a valid license can result in fines (VND 800,000-1,200,000 for unlicensed riding) and potentially having the motorbike impounded.

---

## Traffic Laws and Road Safety

Key rules for driving/riding in Vietnam:

| Rule | Detail |
|---|---|
| **Drive on the right** | Vietnam drives on the right side of the road |
| **Helmet required** | Mandatory for motorbikes; fines for non-compliance |
| **No drink driving** | Zero tolerance policy with heavy fines |
| **Headlights** | Must be on at all times when riding a motorbike, even in daylight |
| **Traffic signals** | Treated as guidance in practice - be observant, not just compliant |

**Road safety reality:** Vietnam has a high road fatality rate. Traffic, particularly in cities, requires constant awareness. Take time to observe local traffic patterns before riding independently. Start with quieter streets and build up.

---

## Driving in Vietnam: Practical Tips

1. **Start on a scooter, not a motorbike** if you are new - automatics (xe tay ga) are much easier in city traffic
2. **Use Grab** for city travel while you get oriented - it is cheap and removes driving stress
3. **Get an IDP before you arrive** - you cannot get one in Vietnam
4. **Convert your license if staying more than 3-6 months** - the legal certainty is worth the paperwork
5. **Buy a decent helmet** - cheap helmets are common but do not provide adequate protection; invest $30-60 in a quality helmet
6. **Get motor insurance** - third-party motor insurance is mandatory and cheap (~$10-20/year for a motorbike)
7. **Register your motorbike** if buying one - always transfer the ownership registration (giay to xe) properly when buying second-hand`,
  },

  'property-registration': {
    slug: 'property-registration',
    title: 'Vietnam Property Registration: Red Book, Pink Book, and How Title Works (2026)',
    subtitle: 'What the property documents actually are, how registration works step by step, and what foreign owners need to do differently',
    excerpt: "Vietnam property title is recorded in a certificate called the Pink Book (Sổ Hồng). This guide explains what it is, the difference from the old Red Book, the full registration process, required documents, costs, and what foreigners need to do differently.",
    author: 'Vietnam Launchpad',
    date: '2026-04-11',
    lastUpdated: '2026-04-11',
    readTime: '10 min read',
    category: 'Housing & Real Estate',
    ctaTitle: 'Need Help Registering Property in Vietnam?',
    ctaBody: 'Our property registration service handles the full title certificate process for foreign owners — document preparation, notarisation, submission, and follow-up through to Pink Book issuance.',
    ctaLink: '/services/property-registration',
    ctaLinkText: 'View Property Registration Service',
    ctaSecondaryLink: '/contact',
    ctaSecondaryText: 'Book a Consultation',
    content: `## What Is Property Registration in Vietnam?

When you purchase property in Vietnam — or when ownership of property changes for any reason — that transaction must be officially registered with the state. The result of a completed registration is a **Certificate of Land Use Right and House Ownership** (Giay Chung Nhan Quyen Su Dung Dat, Quyen So Huu Nha O Va Tai San Khac Gan Lien Voi Dat), issued in your name.

This certificate is what people commonly call the **Pink Book** (Sổ Hồng). It is the single most important document in Vietnamese real estate and the only document that proves legal ownership.

Without a properly registered Pink Book in your name, you do not legally own the property — even if you have paid in full and moved in.

---

## Red Book vs Pink Book: What Is the Difference?

This is one of the most common questions about Vietnamese property documents, and the answer is mostly historical.

**Red Book (Sổ Đỏ)**
The Red Book was Vietnam's original land title certificate, introduced in the 1990s under earlier land legislation. It was specifically a **Certificate of Land Use Right** — it covered the land only, not the structures built on it. The physical booklet had a red cover, hence the name.

**Pink Book (Sổ Hồng)**
From 2009 onward, Vietnam introduced a unified certificate covering both land use rights and house/building ownership on a single document. The new booklet had a pink/burgundy cover. This is now the standard title document for all property in Vietnam.

**What this means today:**
- All new property registrations issue a Pink Book
- Existing Red Books are still legally valid and have not been cancelled
- Many Vietnamese people and agents still use "Red Book" and "Pink Book" interchangeably in casual conversation
- If someone refers to a property's "Red Book" they typically just mean its title certificate — confirm the actual document they have

**Practical check:** When buying a property, always confirm the title certificate (whether called Red Book or Pink Book) exists, is in the seller's name, and has no encumbrances (liens, mortgages, disputes). This is the essential first step in any purchase due diligence.

---

## What the Pink Book Contains

A valid Pink Book includes:

- **Owner name(s):** The individual or organisation legally holding the title
- **Land plot number and map sheet:** The cadastral reference identifying the specific plot
- **Land area:** Total area in square metres
- **Land use purpose:** Residential, agricultural, commercial, etc.
- **Land use term:** Permanent (for Vietnamese citizens on residential land) or fixed-term (50 years for foreigners, long-term leases for some commercial uses)
- **House/building details:** Floor area, number of storeys, construction year
- **Changes and endorsements:** Any registered mortgages, transfers, or updates are noted in the back pages

Each province issues its own Pink Books, administered by the local Department of Natural Resources and Environment (DONRE, or So Tai Nguyen va Moi Truong).

---

## The Property Registration Process

### For Vietnamese Buyers (Standard Process)

**Step 1: Notarise the Sale and Purchase Agreement**
The sale and purchase contract must be notarised at a registered notary office (Van Phong Cong Chung). Both parties must be present or represented by a notarised power of attorney.

**Step 2: Pay Registration Tax and Fees**
- **Registration tax:** 0.5% of the property value (as assessed by the authorities, not necessarily the sale price)
- **Notary fee:** Varies by property value, typically 0.1% capped at certain limits
- **Land registration fee:** Fixed administrative charge, varies by province (typically 100,000–500,000 VND)

**Step 3: Submit the Registration Dossier**
The completed dossier is submitted to the District Land Registration Office (Van Phong Dang Ky Dat Dai) or the provincial DONRE. The dossier includes:
- Notarised sale and purchase agreement
- Seller's original Pink Book
- Copies of both parties' ID/passport and household registration (Ho Khau) if applicable
- Tax payment receipts
- Completed application form (Mau Don De Nghi)

**Step 4: Processing and Issuance**
The authorities review the dossier, update the cadastral records, and issue a new Pink Book in the buyer's name. **Standard processing time: 15–30 working days.** In practice, many registrations take longer due to backlogs.

---

### For Foreign Buyers (Additional Requirements)

Foreigners purchasing property in Vietnam go through the same basic process but with additional document requirements and different land use terms.

**Additional documents required:**
- Valid passport (original and certified copy)
- Entry visa or TRC (original and copy)
- If purchasing through a company: company registration documents, legal representative identification
- Vietnamese-language translations of all foreign-language documents, notarised in Vietnam

**Key differences for foreign owners:**
- Land use term is **50 years** (not permanent as for Vietnamese citizens)
- The Pink Book will show the 50-year expiry date
- Renewal requires reapplication at least 3 months before expiry
- Some restricted zones are not available to foreign buyers — the DONRE will flag this during review

**One critical note:** The Pink Book application for a foreign buyer must clearly identify the buyer as a foreign national and the land use term as 50-year fixed. Applications that attempt to obscure foreign ownership are illegal and result in the Pink Book being invalid.

---

## Required Documents Summary

| Document | Vietnamese Buyer | Foreign Buyer |
|---|---|---|
| Notarised sale and purchase agreement | Required | Required |
| Seller's original Pink Book | Required | Required |
| Buyer ID (CCCD/CMND or passport) | Required | Passport + certified copy |
| Tax payment receipt | Required | Required |
| Application form | Required | Required |
| Visa/TRC copy | Not needed | Required |
| Notarised document translations | Not needed | Required for all foreign docs |
| Power of attorney (if using agent) | Optional | Strongly recommended |

---

## Costs and Timeline

| Item | Approximate Cost |
|---|---|
| Registration tax | 0.5% of assessed property value |
| Notary fee | 0.1% of property value (capped) |
| Land registration fee | 100,000–500,000 VND |
| Translation and notarisation (foreigners) | 1,000,000–3,000,000 VND |
| Agent / professional service fee | 5,000,000–20,000,000 VND depending on complexity |

**Timeline:** 15–30 working days for a straightforward residential registration. Complex cases (disputed title, missing documents, foreign buyer in a new development) can take longer.

---

## Common Problems and How to Avoid Them

**1. The seller's Pink Book has a mortgage registered against it**
Always run a title search before signing anything. A bank-held mortgage must be discharged before or simultaneously with the sale. Do not rely on the seller's verbal assurance that it has been cleared.

**2. The property area on the Pink Book differs from what was sold**
Discrepancies between actual area and registered area are common, especially in older properties. Resolve this before purchase — it requires a cadastral survey and correction, which takes time and adds cost.

**3. Missing or incorrect household registration (Ho Khau)**
For Vietnamese sellers, a discrepancy between the Pink Book name and their current household registration can stall the process. Check this early.

**4. Buying in a development where the master Pink Book has not yet been issued**
Many buyers purchase apartments off-plan or in new developments where the developer has not yet obtained the master title certificate. In these cases, individual Pink Books cannot be issued until the developer completes the process. Before buying, confirm: does the developer have the master Pink Book (or a clear timeline for it)?

**5. The foreign ownership quota is full**
If the 30% foreign quota in an apartment building is exhausted, a foreign buyer cannot register ownership — even if the purchase contract is signed. Check the quota before signing.

---

## After Registration: What to Keep

Once your Pink Book is issued:
- Store the original in a secure location — it is extremely difficult to replace
- Take certified copies for your records
- Notify your insurance provider (if you have property insurance) that the title has been transferred
- If you have a mortgage, the lender will typically hold the original Pink Book as security

---

## How We Can Help

Vietnam Launchpad handles property registration for foreign buyers end-to-end: document preparation, translation and notarisation, submission to the land registry, follow-up with DONRE, and delivery of your completed Pink Book.

Foreign ownership registrations involve more steps and more potential complications than domestic transactions. Having a professional manage the process reduces errors and delays significantly.

[View our Property Registration service →](/services/property-registration)

---

*Last updated: April 2026. Land registration procedures and fees are set provincially and are subject to change. Confirm current requirements with a local professional before transacting.*`,
  },
};

export function getGuideBySlug(slug: string): Guide | null {
  return guidesData[slug] || null;
}

export function getAllGuides(): Guide[] {
  return Object.values(guidesData).sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );
}

export function getAllGuideSlugs(): string[] {
  return Object.keys(guidesData);
}

export function getGuidesByCategory(category: string): Guide[] {
  return getAllGuides().filter((g) => g.category === category);
}

export function getAllGuideCategories(): string[] {
  return [...new Set(getAllGuides().map((g) => g.category))];
}
