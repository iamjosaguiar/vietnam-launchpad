/**
 * SALARY DATA DISCLAIMER
 * ---------------------
 * All salary ranges in this file are indicative market estimates based on
 * publicly available job postings and industry surveys (LinkedIn, VietnamWorks,
 * ITviec, TopDev, and general recruiter benchmarks). They are NOT derived from
 * a single authoritative statistical source.
 *
 * Individual salaries vary significantly based on experience, employer size,
 * industry sector, negotiation, and benefits package.
 *
 * For authoritative Vietnam salary and labour market data, see:
 *   - Vietnam General Statistics Office: gso.gov.vn
 *   - Ministry of Labour, Invalids and Social Affairs (MOLISA): molisa.gov.vn
 */

export interface SalaryRole {
  slug: string;
  title: string;           // "Software Engineer"
  category: string;        // "Technology", "Education", "Finance" etc.
  icon: string;            // emoji
  localMonthlyVnd: { min: number; max: number };   // VND/month for local market rate
  expatMonthlyUsd: { min: number; max: number };   // USD/month for expat package
  yearsExpRequired: string;  // "3-5 years"
  typicalEmployers: string;  // "Samsung, Intel, FPT Software, local tech startups"
  workPermitNote: string;    // brief note on work permit requirements for this role
  description: string;       // 2-3 sentences about this role in Vietnam's job market
  faqs: { q: string; a: string }[];  // 4 FAQs
  disclaimerNote?: string;   // optional per-role disclaimer for unusual data points
}

export const SALARY_ROLES: SalaryRole[] = [
  {
    slug: 'software-engineer',
    title: 'Software Engineer / Developer',
    category: 'Technology',
    icon: '💻',
    localMonthlyVnd: { min: 15_000_000, max: 50_000_000 },
    expatMonthlyUsd: { min: 2500, max: 6000 },
    yearsExpRequired: '2-5 years',
    typicalEmployers: 'FPT Software, Axon Active, TMA Solutions, Samsung R&D, NashTech',
    workPermitNote: 'Most senior software engineers qualify for a work permit as a specialist. A degree in CS/IT plus 3 years experience is the standard requirement.',
    description: "Vietnam is Southeast Asia's fastest-growing tech hub, with 500,000+ IT workers and a large outsourcing sector. Ho Chi Minh City and Hanoi are the primary tech employment centers. Salaries are competitive by Southeast Asian standards but significantly below Western levels.",
    faqs: [
      {
        q: 'How much does a software engineer earn in Vietnam?',
        a: 'Local Vietnamese software engineers typically earn 15–50 million VND per month (roughly $600–$2,000 USD), depending on experience and stack. Expat packages range from $2,500–$6,000/month USD, often including housing allowance and health insurance.',
      },
      {
        q: 'Do I need a work permit as a software engineer in Vietnam?',
        a: "Yes, foreign nationals need a work permit to work legally in Vietnam. Software engineers typically qualify as 'specialists' — you'll need a relevant degree (CS, IT, Engineering) and at least 3 years of relevant work experience. Your employer applies on your behalf.",
      },
      {
        q: 'Is there demand for software engineer jobs in Vietnam?',
        a: "Vietnam's tech sector is growing rapidly. There is strong demand for experienced backend, frontend, and full-stack developers, particularly those with skills in Java, Python, Node.js, React, and mobile development. HCMC and Hanoi have the deepest job markets.",
      },
      {
        q: 'What do software engineers earn in USD in Vietnam?',
        a: 'Foreign software engineers on expat packages earn $2,500–$6,000/month USD, with senior roles at product companies and multinationals at the top of this range. Fully remote roles for Western companies with Vietnam-based engineers can pay $3,000–$8,000/month.',
      },
    ],
  },
  {
    slug: 'english-teacher',
    title: 'English Teacher (TEFL)',
    category: 'Education',
    icon: '📚',
    localMonthlyVnd: { min: 20_000_000, max: 50_000_000 },
    expatMonthlyUsd: { min: 1200, max: 2500 },
    yearsExpRequired: 'TEFL/CELTA certificate required; degree preferred',
    typicalEmployers: 'ILA Vietnam, Apax English, Wall Street English, Apollo English, British Council, international schools',
    workPermitNote: "Teaching requires a work permit. Requirements: bachelor's degree (any field), TEFL/CELTA certificate (min 120 hours), criminal background check with apostille.",
    description: 'English teaching is the most common entry point for expats in Vietnam. Demand is high at all levels — language centers, international schools, and corporate training. HCMC and Hanoi have the most openings; Da Nang has a smaller but active market.',
    faqs: [
      {
        q: 'How much does an English teacher earn in Vietnam?',
        a: 'English teachers in Vietnam typically earn 20–50 million VND per month (around $800–$2,000 USD). Language center teachers earn at the lower end, while teachers at international schools or those with CELTA/Delta qualifications can earn $2,000–$2,500/month USD.',
      },
      {
        q: 'Do I need a work permit to teach English in Vietnam?',
        a: "Yes. Since 2017, Vietnam has enforced work permit requirements strictly for English teachers. You need a bachelor's degree (any subject), a TEFL/CELTA certificate of at least 120 hours, and a criminal background check that has been apostilled. Processing takes 4-8 weeks.",
      },
      {
        q: 'Is there demand for English teaching jobs in Vietnam?',
        a: "Demand for qualified English teachers remains very high in Vietnam. The middle class is rapidly expanding and English education is a top priority for Vietnamese families. However, competition has increased — teachers with CELTA, Delta, or international school experience earn significantly more.",
      },
      {
        q: 'What do English teachers earn in USD in Vietnam?',
        a: 'Most English teachers in Vietnam earn $1,200–$2,500/month USD. Corporate trainers and international school teachers earn at the top of this range. Some positions include accommodation allowances, which significantly increases the effective compensation.',
      },
    ],
  },
  {
    slug: 'marketing-manager',
    title: 'Marketing Manager',
    category: 'Business',
    icon: '📊',
    localMonthlyVnd: { min: 20_000_000, max: 60_000_000 },
    expatMonthlyUsd: { min: 2000, max: 5000 },
    yearsExpRequired: '4-7 years',
    typicalEmployers: 'Multinational FMCG companies, tech firms, agencies, hospitality groups',
    workPermitNote: "Marketing managers qualify for work permits as managers. Standard requirements: bachelor's degree plus 3 years in relevant field.",
    description: "Vietnam's consumer market is one of Asia's fastest-growing. Marketing roles are concentrated in HCMC and Hanoi, particularly in FMCG, e-commerce, and hospitality sectors.",
    faqs: [
      {
        q: 'How much does a marketing manager earn in Vietnam?',
        a: 'Marketing managers in Vietnam earn 20–60 million VND per month locally ($800–$2,400 USD). Expat packages typically range from $2,000–$5,000/month USD. Senior marketing directors at large multinationals can earn above this range.',
      },
      {
        q: 'Do I need a work permit as a marketing manager in Vietnam?',
        a: "Yes. Marketing managers qualify for work permits under the 'manager' category. You'll need a bachelor's degree in a relevant field and at least 3 years of management experience. Your employer sponsors the application.",
      },
      {
        q: 'Is there demand for marketing manager jobs in Vietnam?',
        a: "Vietnam's rapidly growing consumer market and digital economy create strong demand for experienced marketing managers. FMCG, e-commerce (Shopee, Lazada, Tiki), and hospitality are the most active sectors. Digital marketing skills — especially performance marketing and social media — are particularly valued.",
      },
      {
        q: 'What do marketing managers earn in USD in Vietnam?',
        a: 'Expat marketing managers in Vietnam typically earn $2,000–$5,000/month USD depending on industry and company size. FMCG multinationals and tech companies tend to pay at the top of the range. Local market rates are lower, at roughly $800–$2,400/month equivalent.',
      },
    ],
  },
  {
    slug: 'accountant-finance-manager',
    title: 'Accountant / Finance Manager',
    category: 'Finance',
    icon: '🧾',
    localMonthlyVnd: { min: 15_000_000, max: 60_000_000 },
    expatMonthlyUsd: { min: 2000, max: 5500 },
    yearsExpRequired: '3-6 years; CPA/ACCA preferred',
    typicalEmployers: 'Big 4 (Deloitte, PwC, EY, KPMG), multinational companies, manufacturing firms',
    workPermitNote: 'Finance managers qualify for work permits. CPA or ACCA qualification significantly strengthens the application. Vietnam has its own VAS accounting standards that differ from IFRS.',
    description: 'Qualified accountants with international credentials (ACCA, CPA) are in strong demand in Vietnam, particularly at multinationals and the Big 4 firms. Local VAS standards knowledge is valued but not always required for senior expat roles.',
    faqs: [
      {
        q: 'How much does an accountant or finance manager earn in Vietnam?',
        a: 'Accountants in Vietnam earn 15–60 million VND per month locally depending on seniority and credentials. Expat finance managers earn $2,000–$5,500/month USD. Big 4 senior managers and CFOs at larger companies earn at or above the top of this range.',
      },
      {
        q: 'Do I need a work permit as an accountant or finance manager in Vietnam?',
        a: "Yes. Finance managers qualify for work permits under the 'manager' category. CPA or ACCA qualifications are viewed favorably and strengthen the application. You'll need to provide certified copies of your credentials, translated if not in English or Vietnamese.",
      },
      {
        q: 'Is there demand for accountant and finance manager jobs in Vietnam?',
        a: "There is strong demand for qualified accountants in Vietnam, particularly those with ACCA, CPA, or Big 4 experience. Vietnam's regulatory environment is complex — familiarity with VAS (Vietnamese Accounting Standards), CIT, and VAT compliance is highly valued.",
      },
      {
        q: 'What do accountants earn in USD in Vietnam?',
        a: 'Foreign accountants and finance managers typically earn $2,000–$5,500/month USD. CFO roles at larger companies can pay $6,000–$10,000/month. Big 4 firms have structured salary bands that are competitive by regional standards.',
      },
    ],
  },
  {
    slug: 'operations-manager',
    title: 'Operations Manager',
    category: 'Business',
    icon: '⚙️',
    localMonthlyVnd: { min: 20_000_000, max: 70_000_000 },
    expatMonthlyUsd: { min: 2500, max: 6000 },
    yearsExpRequired: '5-8 years',
    typicalEmployers: 'Manufacturing companies, logistics firms, hospitality groups, retail chains',
    workPermitNote: 'Operations managers qualify for work permits as managers. Factory or manufacturing operations managers require a technical degree plus management experience.',
    description: "Vietnam's manufacturing boom has created strong demand for operations managers, particularly in electronics, textile, and food processing sectors. Industrial zones in Binh Duong, Long An, and Hai Phong have the highest concentration of manufacturing roles.",
    faqs: [
      {
        q: 'How much does an operations manager earn in Vietnam?',
        a: 'Operations managers in Vietnam earn 20–70 million VND per month locally. Expat packages range from $2,500–$6,000/month USD, with manufacturing and logistics companies at the higher end. Industrial zone positions often include accommodation or transport allowances.',
      },
      {
        q: 'Do I need a work permit as an operations manager in Vietnam?',
        a: "Yes. Operations managers qualify for work permits under the 'manager' category. A relevant technical or business degree plus 5+ years of management experience is typical. For factory and manufacturing roles, a technical engineering background is often preferred.",
      },
      {
        q: 'Is there demand for operations manager jobs in Vietnam?',
        a: "Vietnam's manufacturing sector is booming as companies diversify supply chains away from China. There is strong demand for experienced operations managers in electronics, automotive parts, textiles, and food processing. Industrial zones in Binh Duong, Long An, Dong Nai, and Hai Phong are the primary markets.",
      },
      {
        q: 'What do operations managers earn in USD in Vietnam?',
        a: 'Expat operations managers typically earn $2,500–$6,000/month USD. Senior plant managers and country operations directors can earn $6,000–$10,000/month at large manufacturing facilities. Many roles include accommodation and vehicle benefits.',
      },
    ],
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst / Data Scientist',
    category: 'Technology',
    icon: '📈',
    localMonthlyVnd: { min: 15_000_000, max: 45_000_000 },
    expatMonthlyUsd: { min: 2000, max: 5000 },
    yearsExpRequired: '2-4 years',
    typicalEmployers: 'Tech startups, fintech companies, e-commerce platforms, consulting firms',
    workPermitNote: 'Data analysts typically qualify for work permits as specialists or managers depending on seniority. A degree in statistics, mathematics, or computer science plus relevant experience is standard.',
    description: 'Data roles are growing rapidly in Vietnam as local businesses and multinationals build analytics capabilities. Python, SQL, and Tableau skills are widely sought. The Vietnam fintech sector is a particularly active employer.',
    faqs: [
      {
        q: 'How much does a data analyst earn in Vietnam?',
        a: 'Data analysts in Vietnam earn 15–45 million VND per month locally ($600–$1,800 USD). Expat data analysts and data scientists with strong skills earn $2,000–$5,000/month USD. Senior data scientists and ML engineers are at the top of this range.',
      },
      {
        q: 'Do I need a work permit as a data analyst in Vietnam?',
        a: "Yes. Data analysts typically qualify for work permits as 'specialists'. A relevant degree (statistics, mathematics, computer science, or engineering) plus 2+ years of experience is the standard requirement. Your employer applies on your behalf.",
      },
      {
        q: 'Is there demand for data analyst jobs in Vietnam?',
        a: "Demand for data professionals is growing rapidly in Vietnam, especially in fintech (MoMo, VNPay, Timo), e-commerce (Shopee, Lazada, Tiki), and tech multinationals. Python, SQL, and machine learning skills are particularly sought after.",
      },
      {
        q: 'What do data analysts earn in USD in Vietnam?',
        a: 'Foreign data analysts in Vietnam typically earn $2,000–$5,000/month USD. Data scientists with strong machine learning or AI skills can command $4,000–$7,000/month at top tech companies and consultancies.',
      },
    ],
  },
  {
    slug: 'project-manager',
    title: 'Project Manager',
    category: 'Business',
    icon: '📋',
    localMonthlyVnd: { min: 20_000_000, max: 65_000_000 },
    expatMonthlyUsd: { min: 2000, max: 5500 },
    yearsExpRequired: '4-7 years; PMP preferred',
    typicalEmployers: 'IT outsourcing firms, construction companies, multinational project teams',
    workPermitNote: 'Project managers qualify for work permits as managers. PMP certification strengthens applications. Construction PMs may need additional technical credentials.',
    description: 'Project management roles are most common in IT outsourcing, construction/infrastructure, and manufacturing in Vietnam. HCMC and Hanoi are the main markets. PMP and Agile certifications are increasingly valued.',
    faqs: [
      {
        q: 'How much does a project manager earn in Vietnam?',
        a: 'Project managers in Vietnam earn 20–65 million VND per month locally. Expat packages range from $2,000–$5,500/month USD. IT project managers at outsourcing firms and construction PMs on large infrastructure projects are at the higher end.',
      },
      {
        q: 'Do I need a work permit as a project manager in Vietnam?',
        a: "Yes. Project managers qualify for work permits under the 'manager' category. PMP certification is highly regarded by Vietnamese immigration authorities. A relevant degree plus 4+ years of project management experience is the standard requirement.",
      },
      {
        q: 'Is there demand for project manager jobs in Vietnam?',
        a: "Project management roles are active across IT outsourcing (Vietnam is a major destination), construction and infrastructure development, and manufacturing. HCMC is the primary market for IT PM roles; Hanoi has more government and infrastructure project work.",
      },
      {
        q: 'What do project managers earn in USD in Vietnam?',
        a: 'Expat project managers typically earn $2,000–$5,500/month USD. Senior program managers and portfolio directors at large IT outsourcing firms or construction companies can earn $5,500–$9,000/month.',
      },
    ],
  },
  {
    slug: 'hospitality-manager',
    title: 'Hospitality Manager / Hotel Manager',
    category: 'Hospitality',
    icon: '🏨',
    localMonthlyVnd: { min: 20_000_000, max: 80_000_000 },
    expatMonthlyUsd: { min: 2000, max: 6000 },
    yearsExpRequired: '5-10 years; hospitality degree or equivalent',
    typicalEmployers: 'International hotel groups (Marriott, Hilton, Accor, IHG), Vinpearl, resort operators',
    workPermitNote: 'Hotel and hospitality managers qualify for work permits as managers. International brand experience is typically required.',
    description: "Vietnam's tourism growth has driven strong demand for experienced hospitality managers. International hotel brands are concentrated in HCMC, Hanoi, Da Nang, and Phu Quoc. Expat packages in luxury hotels often include accommodation.",
    faqs: [
      {
        q: 'How much does a hotel or hospitality manager earn in Vietnam?',
        a: 'Hospitality managers in Vietnam earn 20–80 million VND per month locally. Expat hotel managers earn $2,000–$6,000/month USD. General managers at luxury 5-star properties in prime locations can earn significantly more, plus accommodation and benefits.',
      },
      {
        q: 'Do I need a work permit as a hospitality manager in Vietnam?',
        a: "Yes. Hospitality managers qualify for work permits under the 'manager' category. International hotel brand experience and a hospitality degree or diploma are the standard requirements. Many international hotel groups have streamlined work permit processes for managers.",
      },
      {
        q: 'Is there demand for hospitality manager jobs in Vietnam?',
        a: "Vietnam's tourism sector has recovered strongly post-COVID and continues to grow. There is consistent demand for experienced international hospitality managers at 4- and 5-star properties. Da Nang, Phu Quoc, and Nha Trang are growth markets alongside the established HCMC and Hanoi markets.",
      },
      {
        q: 'What do hotel managers earn in USD in Vietnam?',
        a: 'Expat hotel and resort managers typically earn $2,000–$6,000/month USD. General managers at luxury international brand properties earn $6,000–$15,000/month, often with accommodation and flights home included in the package.',
      },
    ],
  },
  {
    slug: 'sales-manager',
    title: 'Sales Manager / Business Development',
    category: 'Business',
    icon: '🤝',
    localMonthlyVnd: { min: 20_000_000, max: 60_000_000 },
    expatMonthlyUsd: { min: 2000, max: 5000 },
    yearsExpRequired: '3-6 years',
    typicalEmployers: 'Multinationals, B2B tech companies, FMCG distributors, manufacturing firms',
    workPermitNote: 'Sales managers qualify for work permits as managers. Market knowledge and language skills (Vietnamese or relevant regional language) are often valued.',
    description: "Sales and business development roles are active across Vietnam's growing B2B sectors. FMCG, SaaS, manufacturing equipment, and healthcare are the most active sectors for expat sales roles.",
    faqs: [
      {
        q: 'How much does a sales manager earn in Vietnam?',
        a: 'Sales managers in Vietnam earn 20–60 million VND per month locally, plus commissions. Expat packages range from $2,000–$5,000/month base USD, typically with performance bonuses on top. FMCG and medical device sales roles are known for strong commission structures.',
      },
      {
        q: 'Do I need a work permit as a sales manager in Vietnam?',
        a: "Yes. Sales managers qualify for work permits under the 'manager' category. A bachelor's degree in business or a relevant field plus 3+ years of sales management experience is standard. Some specialised sales roles (medical devices, industrial equipment) benefit from technical qualifications.",
      },
      {
        q: 'Is there demand for sales manager jobs in Vietnam?',
        a: "Vietnam's growing economy creates consistent demand for sales managers, particularly in FMCG, B2B technology, medical devices, industrial equipment, and financial services. Companies expanding into Vietnam often need local sales managers with strong networks.",
      },
      {
        q: 'What do sales managers earn in USD in Vietnam?',
        a: 'Expat sales managers typically earn $2,000–$5,000/month base USD, with variable components that can add 20-50% on top. Top sales performers in sectors like medical devices or industrial machinery can earn $8,000+/month total compensation.',
      },
    ],
  },
  {
    slug: 'hr-manager',
    title: 'HR Manager / Human Resources',
    category: 'Business',
    icon: '👥',
    localMonthlyVnd: { min: 18_000_000, max: 55_000_000 },
    expatMonthlyUsd: { min: 2000, max: 5000 },
    yearsExpRequired: '4-7 years',
    typicalEmployers: 'Multinational companies, manufacturing firms with large workforces, HR consulting firms',
    workPermitNote: "HR managers qualify for work permits as managers. Vietnam labor law knowledge is highly valued — familiarity with Vietnamese Labor Code and Social Insurance Law is a significant asset.",
    description: "HR roles in Vietnam are in demand at large manufacturers and multinationals, where managing Vietnamese labor law compliance is complex. Vietnam's labor regulations are detailed and change frequently.",
    faqs: [
      {
        q: 'How much does an HR manager earn in Vietnam?',
        a: 'HR managers in Vietnam earn 18–55 million VND per month locally. Expat HR managers earn $2,000–$5,000/month USD. HR directors at large multinationals or manufacturing companies with large workforces can earn above this range.',
      },
      {
        q: 'Do I need a work permit as an HR manager in Vietnam?',
        a: "Yes. HR managers qualify for work permits under the 'manager' category. A degree in HR management, business, or law plus 4+ years of HR management experience is the standard requirement. Knowledge of Vietnamese labor law is a significant hiring advantage.",
      },
      {
        q: 'Is there demand for HR manager jobs in Vietnam?',
        a: "Demand for experienced HR managers is strong at large manufacturing companies, multinationals, and in the growing HR consulting sector. Vietnam's Labor Code was significantly updated in 2021, creating demand for HR professionals who understand the current legal framework.",
      },
      {
        q: 'What do HR managers earn in USD in Vietnam?',
        a: 'Foreign HR managers typically earn $2,000–$5,000/month USD. HR directors at large multinationals or companies with 1,000+ employees can earn $5,000–$8,000/month, particularly if they have deep Vietnam labor law expertise.',
      },
    ],
  },
  {
    slug: 'logistics-supply-chain',
    title: 'Logistics / Supply Chain Manager',
    category: 'Operations',
    icon: '🚚',
    localMonthlyVnd: { min: 20_000_000, max: 65_000_000 },
    expatMonthlyUsd: { min: 2500, max: 6000 },
    yearsExpRequired: '5-8 years',
    typicalEmployers: 'Maersk, DHL, logistics companies, manufacturing firms, e-commerce platforms',
    workPermitNote: 'Supply chain managers qualify for work permits as managers. APICS/CSCMP certifications are increasingly recognized.',
    description: "Vietnam has emerged as a global supply chain hub, particularly post-COVID as companies diversify away from China. Logistics roles are in high demand in the industrial zones of Binh Duong, Long An, Dong Nai, and Hai Phong.",
    faqs: [
      {
        q: 'How much does a logistics or supply chain manager earn in Vietnam?',
        a: 'Supply chain managers in Vietnam earn 20–65 million VND per month locally. Expat packages range from $2,500–$6,000/month USD. Senior supply chain directors at global logistics companies or large manufacturers can earn above this range.',
      },
      {
        q: 'Do I need a work permit as a logistics or supply chain manager in Vietnam?',
        a: "Yes. Logistics and supply chain managers qualify for work permits under the 'manager' category. A relevant degree plus 5+ years of supply chain management experience is standard. APICS CSCP or CSCMP certifications strengthen work permit applications.",
      },
      {
        q: 'Is there demand for logistics and supply chain jobs in Vietnam?',
        a: "Vietnam's role as a global manufacturing alternative to China has created booming demand for supply chain professionals. Industrial zones in Binh Duong, Long An, Dong Nai, and Hai Phong are the major employment hubs. E-commerce growth has also driven demand in last-mile logistics.",
      },
      {
        q: 'What do supply chain managers earn in USD in Vietnam?',
        a: 'Expat logistics and supply chain managers earn $2,500–$6,000/month USD. Country logistics directors and regional supply chain directors based in Vietnam can earn $6,000–$12,000/month, reflecting the strategic importance of Vietnam in global supply chains.',
      },
    ],
  },
  {
    slug: 'graphic-designer-ux',
    title: 'Graphic Designer / UX Designer',
    category: 'Creative',
    icon: '🎨',
    localMonthlyVnd: { min: 10_000_000, max: 35_000_000 },
    expatMonthlyUsd: { min: 1200, max: 3500 },
    yearsExpRequired: '2-4 years; portfolio required',
    typicalEmployers: 'Digital agencies, tech startups, e-commerce companies, in-house brand teams',
    workPermitNote: 'Designers can qualify for work permits as specialists. A strong portfolio is as important as formal qualifications for this role category.',
    description: "Vietnam has a thriving creative industry, with strong digital agency and startup scenes in HCMC. UX/UI salaries are lower than Western markets but the cost-of-living offset is significant. Remote work is increasingly common in this sector.",
    faqs: [
      {
        q: 'How much does a graphic designer or UX designer earn in Vietnam?',
        a: 'Graphic and UX designers in Vietnam earn 10–35 million VND per month locally ($400–$1,400 USD). Expat designers with strong portfolios earn $1,200–$3,500/month USD. Senior UX/product designers at tech companies are at the top of this range.',
      },
      {
        q: 'Do I need a work permit as a graphic designer or UX designer in Vietnam?',
        a: "Yes. Designers can qualify for work permits as 'specialists'. A degree in design or a related field, combined with a strong portfolio demonstrating 2+ years of professional work, is the standard requirement. Portfolio quality is heavily weighed in specialist visa assessments.",
      },
      {
        q: 'Is there demand for graphic designer and UX designer jobs in Vietnam?',
        a: "Vietnam has a vibrant digital agency and startup scene, particularly in HCMC. There is consistent demand for experienced UX/UI designers, brand designers, and motion designers. However, Vietnamese designers are highly skilled, so expats need strong portfolios to compete.",
      },
      {
        q: 'What do graphic designers and UX designers earn in USD in Vietnam?',
        a: 'Foreign designers in Vietnam typically earn $1,200–$3,500/month USD. Senior UX designers and creative directors at tech companies and large agencies can earn $3,500–$6,000/month. Remote work for Western companies remains the highest-paying option for skilled designers.',
      },
    ],
  },
];

export function getAllSalaryRoleSlugs(): string[] {
  return SALARY_ROLES.map((r) => r.slug);
}

export function getSalaryRole(slug: string): SalaryRole | undefined {
  return SALARY_ROLES.find((r) => r.slug === slug);
}

export function getAllSalaryCategories(): string[] {
  return [...new Set(SALARY_ROLES.map((r) => r.category))];
}
