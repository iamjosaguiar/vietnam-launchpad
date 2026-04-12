export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  timeline: string;
  heroTitle: string;
  heroDescription: string;
  process: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  included: string[];
  requirements: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  benefits: string[];
  guarantee: string;
}

export const servicesData: Record<string, ServiceData> = {
  'trc-application': {
    slug: 'trc-application',
    title: 'TRC Application (Temporary Residence Card)',
    shortDescription: 'Get your Vietnam Temporary Residence Card through investment, work permit, or marriage. 2-3 weeks processing time.',
    timeline: '2-3 weeks',
    heroTitle: 'Get Your Vietnam TRC - Multiple Pathways Available',
    heroDescription: 'Choose from Investment Visa (6 months - 4 years), Work Permit sponsorship (2 years), or Marriage to Vietnamese citizen (up to 3 years). We handle everything from document preparation to pickup.',
    process: [
      {
        step: 1,
        title: 'Document Review',
        description: 'Send us your documents. We review and confirm everything is in order.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Application Preparation',
        description: 'We prepare and submit your application to Vietnamese immigration authorities.',
        duration: '1-2 days'
      },
      {
        step: 3,
        title: 'Processing',
        description: 'Government reviews and approves your application.',
        duration: '3-5 days'
      },
      {
        step: 4,
        title: 'TRC Delivery',
        description: 'We pick up your TRC and deliver it to you or arrange secure pickup.',
        duration: '1 day'
      }
    ],
    included: [
      'Document review and preparation',
      'Application submission to immigration office',
      'Follow-up with authorities',
      'TRC pickup and delivery',
      'Translation services (if needed)',
      'Email and phone support',
      'Money-back guarantee if application rejected due to our error'
    ],
    requirements: [
      'Valid passport (minimum 6 months validity)',
      'Current Vietnam visa or entry stamp',
      'Passport-sized photos (4x6cm, white background)',
      'Proof of residence in Vietnam (lease agreement or hotel booking)',
      'Work contract or business registration (if applicable)',
      'Criminal background check (from home country, within 6 months)'
    ],
    benefits: [
      'Live in Vietnam for 1-2 years without visa runs',
      'Open a Vietnamese bank account',
      'Get a Vietnamese phone number',
      'Sign long-term lease agreements',
      'Purchase a motorbike legally',
      'Qualify for better insurance rates'
    ],
    faqs: [
      {
        question: 'What are my options for getting a TRC?',
        answer: 'You have three main routes: (1) Investment Visa - invest in your own company. Under 3B VND (~$120K) gets 6-12 month visas, 3B VND+ gets 3-4 year visas. (2) Work Permit route - get work permit first (2 months, $650-$850), then TRC for 2 years ($350). (3) Marriage to Vietnamese citizen - up to 3 years validity. See our Marriage Registration service for details.'
      },
      {
        question: 'How long is the TRC valid for?',
        answer: 'TRC validity depends on your route: Investment visas range from 6 months to 4 years based on investment amount. Work permit-based TRCs are typically valid for 2 years, matching your work permit duration.'
      },
      {
        question: 'What investment amount do I need for a 3-4 year visa?',
        answer: 'To qualify for a 3-4 year investment visa, you need to invest at least 3 billion VND (~$120,000 USD) into your Vietnamese company. Investments below this amount typically receive 6-12 month visas.'
      },
      {
        question: 'Can I travel in and out of Vietnam with a TRC?',
        answer: 'Yes, the TRC allows multiple entries. You don\'t need a separate visa for re-entry.'
      },
      {
        question: 'What happens if my application is rejected?',
        answer: 'If rejection is due to our error, we provide a full refund. If due to your documents or eligibility, government fees are non-refundable.'
      },
      {
        question: 'Do I need to be in Vietnam to apply?',
        answer: 'Yes, you must be physically present in Vietnam with a valid visa to apply for TRC.'
      },
      {
        question: 'Can family members get TRC through my sponsorship?',
        answer: 'Yes, spouses and children under 18 can obtain dependent TRCs. Additional fees apply.'
      },
      {
        question: 'How does the Marriage TRC route work?',
        answer: 'If you are married to a Vietnamese citizen, you can obtain a TRC valid for up to 3 years without needing investment or a work permit. See our Marriage Registration service for complete details on registering your marriage and obtaining TRC.'
      }
    ],
    guarantee: 'If we cannot obtain your TRC due to our error in document preparation or submission, we provide a 100% refund of our service fee.'
  },
  'work-permit': {
    slug: 'work-permit',
    title: 'Vietnam Work Permit',
    shortDescription: 'Secure your legal right to work in Vietnam with our fast work permit processing service.',
    timeline: '2 months',
    heroTitle: 'Vietnam Work Permit - Legal Authorization to Work',
    heroDescription: 'Work legally in Vietnam without complications. We handle the entire process from start to finish.',
    process: [
      {
        step: 1,
        title: 'Eligibility Check',
        description: 'We verify your qualifications and work contract meet government requirements.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Document Preparation',
        description: 'We prepare all required documents, translations, and notarizations.',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Application Submission',
        description: 'Submit to Department of Labor and await approval.',
        duration: '5-7 days'
      },
      {
        step: 4,
        title: 'Permit Issuance',
        description: 'Pick up work permit and deliver to you.',
        duration: '1 day'
      }
    ],
    included: [
      'Eligibility assessment',
      'Document preparation and translation',
      'Work permit application submission',
      'Health check coordination (if needed)',
      'Follow-up with labor department',
      'Work permit pickup and delivery',
      'Renewal reminders'
    ],
    requirements: [
      'Bachelor\'s degree or higher (or 5+ years work experience)',
      'Valid passport',
      'Work contract from Vietnamese company',
      'Criminal background check (home country)',
      'Health certificate from Vietnamese hospital',
      '2 passport photos',
      'Degree certificate (notarized and legalized)'
    ],
    benefits: [
      'Work legally without risk of deportation',
      'Access to Vietnamese social insurance',
      'Qualify for TRC sponsorship',
      'Protect your employer from fines',
      'Build legitimate work history in Vietnam',
      'Easier visa renewals'
    ],
    faqs: [
      {
        question: 'How long does a work permit last?',
        answer: 'Work permits are valid for up to 2 years, matching your work contract duration.'
      },
      {
        question: 'Can I work for multiple employers with one permit?',
        answer: 'No, work permits are employer-specific. Changing jobs requires a new permit.'
      },
      {
        question: 'Do I need a degree to get a work permit?',
        answer: 'Generally yes, or 5+ years of relevant work experience in your field.'
      },
      {
        question: 'Can I start working before the permit is issued?',
        answer: 'Technically no, but many employers allow you to start during processing. This carries some risk.'
      },
      {
        question: 'What happens if my work permit application is denied?',
        answer: 'We work to resolve issues, but denials are rare if documents are proper. Government fees are non-refundable.'
      }
    ],
    guarantee: 'If your work permit is denied due to errors in our service, we refund our service fee and help resolve the issue.'
  },
  'company-setup': {
    slug: 'company-setup',
    title: 'Vietnam Company Registration',
    shortDescription: 'Establish your business in Vietnam with full legal compliance and support.',
    timeline: '2-4 months',
    heroTitle: 'Register Your Company in Vietnam - Full Turnkey Service',
    heroDescription: 'From company registration to bank account setup. We handle everything so you can focus on growing your business. Includes free 1:1 consultation for business setup clients.',
    process: [
      {
        step: 1,
        title: 'Business Consultation',
        description: 'Discuss your business model, choose company structure, and plan registration strategy.',
        duration: '2-3 days'
      },
      {
        step: 2,
        title: 'Name Approval & Documents',
        description: 'Register company name, prepare charter, and compile required documents.',
        duration: '3-5 days'
      },
      {
        step: 3,
        title: 'License Application',
        description: 'Submit to Department of Planning & Investment for business license.',
        duration: '10-15 days'
      },
      {
        step: 4,
        title: 'Post-Registration Setup',
        description: 'Company seal, tax registration, bank account, and compliance setup.',
        duration: '5-7 days'
      }
    ],
    included: [
      'Business structure consultation',
      'Company name registration',
      'Investment registration certificate',
      'Business license (Enterprise Registration Certificate)',
      'Company seal (multiple copies)',
      'Tax code registration',
      'Bank account opening assistance',
      'Legal representative registration',
      'Office lease agreement review',
      'First-year compliance calendar',
      '6 months email support'
    ],
    requirements: [
      'Passport copies of all shareholders/directors',
      'Proof of registered office address',
      'Business plan (for some industries)',
      'Initial capital commitment (varies by business type)',
      'Notarized passport copies',
      'Industry-specific licenses (if applicable)'
    ],
    benefits: [
      'Own a 100% foreign-owned company',
      'Hire employees and sponsor work permits',
      'Sign contracts and invoices legally',
      'Access Vietnamese banking system',
      'Qualify for government incentives',
      'Build business credit in Vietnam',
      'Protect personal liability'
    ],
    faqs: [
      {
        question: 'How much capital do I need to start a company?',
        answer: 'No minimum for most businesses, but some industries (construction, education) have requirements. We advise on your specific case.'
      },
      {
        question: 'Can foreigners own 100% of a Vietnamese company?',
        answer: 'Yes, in most industries. Some sectors (media, education) have ownership restrictions.'
      },
      {
        question: 'Do I need a physical office to register?',
        answer: 'Yes, you need a registered address. We can help you find suitable office space or virtual office solutions.'
      },
      {
        question: 'What ongoing obligations does my company have?',
        answer: 'Annual financial statements, tax filings, business license renewal, and employee declarations. We provide guidance.'
      },
      {
        question: 'Can my company sponsor my work permit and TRC?',
        answer: 'Yes! Your company can sponsor your work permit and TRC, avoiding the need for an employer.'
      },
      {
        question: 'What happens after registration?',
        answer: 'We provide ongoing compliance support, connect you with accountants, and help with annual filings.'
      }
    ],
    guarantee: 'We guarantee successful company registration or provide a full refund minus any government fees already paid.'
  },
  'business-visa': {
    slug: 'business-visa',
    title: 'Vietnam Business Visa',
    shortDescription: 'Get a 3-month business visa to enter Vietnam quickly and easily.',
    timeline: '3-5 business days',
    heroTitle: 'Vietnam Business Visa - Quick Entry',
    heroDescription: 'Need to enter Vietnam for business? Get your 3-month business visa processed quickly. Perfect for initial visits, property viewing, or exploring business opportunities.',
    process: [
      {
        step: 1,
        title: 'Submit Documents',
        description: 'Send us your passport copy and entry dates.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Visa Processing',
        description: 'We process your business visa application with immigration.',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Receive Visa',
        description: 'Get your visa approval letter or stamp.',
        duration: '1 day'
      }
    ],
    included: [
      'Business visa application',
      'Visa approval letter',
      'Immigration support',
      'Fast-track option available'
    ],
    requirements: [
      'Passport copy (minimum 6 months validity)',
      'Passport photo',
      'Entry and exit dates'
    ],
    benefits: [
      'Quick processing time',
      'Valid for 3 months',
      'Single or multiple entry options',
      'Can be extended or converted to other visa types'
    ],
    faqs: [
      {
        question: 'How long does a business visa last?',
        answer: 'Standard business visas are valid for 3 months and can be single or multiple entry.'
      },
      {
        question: 'Can I work on a business visa?',
        answer: 'Business visas are for business activities, meetings, and exploration only - not for employment. You need a work permit to work legally.'
      },
      {
        question: 'Can I extend my business visa?',
        answer: 'Yes, business visas can typically be extended. We can help with extensions and conversions to other visa types.'
      },
      {
        question: 'Do you offer e-visa services?',
        answer: 'Yes, we offer expedited e-visa services for quick entry. Contact us for pricing and availability.'
      }
    ],
    guarantee: 'If we cannot obtain your business visa due to our error, we provide a full refund of our service fee.'
  },
  'consultation': {
    slug: 'consultation',
    title: '1:1 Expert Consultation',
    shortDescription: 'Get personalized advice on tax, accounting, work permits, TRC, business setup, and living in Vietnam.',
    timeline: 'Schedule within 48 hours',
    heroTitle: '1:1 Vietnam Expert Consultation',
    heroDescription: 'Get your specific questions answered by an expert. Perfect for those exploring options or needing guidance before committing to a full service.',
    process: [
      {
        step: 1,
        title: 'Book Your Session',
        description: 'Contact us with your availability and topics you want to discuss.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Consultation Call',
        description: 'Video call session where we answer all your questions in detail.',
        duration: '1 hour'
      },
      {
        step: 3,
        title: 'Follow-up Summary',
        description: 'Receive written summary of key points and next steps discussed.',
        duration: 'Same day'
      }
    ],
    included: [
      '1 hour video consultation',
      'Expert advice on your specific situation',
      'Written summary of discussion',
      'Action plan and recommendations',
      'Email follow-up for clarifications'
    ],
    requirements: [
      'None - just bring your questions!'
    ],
    benefits: [
      'Get clarity before making big decisions',
      'Understand all your options',
      'Personalized advice for your situation',
      'Learn from someone who has helped 500+ expats',
      'Ask anything about Vietnam business and immigration'
    ],
    faqs: [
      {
        question: 'What topics can we discuss?',
        answer: 'Anything related to living and doing business in Vietnam: tax implications, accounting requirements, work permits, TRC, company setup process, capital planning, visa options, or your specific case questions.'
      },
      {
        question: 'Is this free if I sign up for business setup?',
        answer: 'Yes! If you proceed with our business setup service, the initial consultation is completely free. This paid consultation is for those who need specific advice but aren\'t ready to set up a company yet.'
      },
      {
        question: 'How long is the consultation?',
        answer: 'Standard consultations are 1 hour. If you need more time, additional hours can be booked at the same rate.'
      },
      {
        question: 'Can I get a refund if not satisfied?',
        answer: 'We offer a satisfaction guarantee. If you\'re not satisfied with the value provided in the first 15 minutes, we\'ll refund your payment in full.'
      }
    ],
    guarantee: 'Satisfaction guaranteed. If you\'re not satisfied with the consultation quality in the first 15 minutes, we provide a full refund.'
  },
  'marriage-registration': {
    slug: 'marriage-registration',
    title: 'Marriage Registration & TRC',
    shortDescription: 'Register your marriage in Vietnam and obtain TRC through marriage to a Vietnamese citizen.',
    timeline: '1-2 months',
    heroTitle: 'Marriage Registration & Spouse TRC in Vietnam',
    heroDescription: 'Complete marriage registration service for foreigners marrying Vietnamese citizens. Includes marriage certificate registration and TRC application for the foreign spouse.',
    process: [
      {
        step: 1,
        title: 'Document Assessment',
        description: 'Review all required documents and ensure they meet Vietnamese legal requirements.',
        duration: '2-3 days'
      },
      {
        step: 2,
        title: 'Marriage Registration',
        description: 'Submit marriage registration to local authorities and obtain marriage certificate.',
        duration: '2-3 weeks'
      },
      {
        step: 3,
        title: 'TRC Application',
        description: 'Apply for Temporary Residence Card based on marriage.',
        duration: '2-3 weeks'
      },
      {
        step: 4,
        title: 'TRC Issuance',
        description: 'Pick up TRC and deliver to you.',
        duration: '1 week'
      }
    ],
    included: [
      'Marriage registration consultation',
      'Document preparation and translation',
      'Marriage certificate registration',
      'TRC application submission',
      'Follow-up with authorities',
      'Marriage certificate pickup and delivery',
      'TRC pickup and delivery',
      'Ongoing support for renewals'
    ],
    requirements: [
      'Valid passport (minimum 6 months validity)',
      'Single status declaration (from home country)',
      'Birth certificate (notarized and legalized)',
      'Passport photos (4x6cm)',
      'Vietnamese partner\'s household registration',
      'Vietnamese partner\'s ID card/passport',
      'Proof of relationship (photos, communication records)'
    ],
    benefits: [
      'Legal recognition of marriage in Vietnam',
      'TRC validity up to 3 years',
      'No investment or work permit required',
      'Path to permanent residency',
      'Sponsor family members',
      'Access to Vietnamese social services'
    ],
    faqs: [
      {
        question: 'How long does the marriage registration process take?',
        answer: 'Marriage registration typically takes 2-3 weeks. After that, the TRC application takes another 2-3 weeks, for a total of 1-2 months.'
      },
      {
        question: 'What documents do I need from my home country?',
        answer: 'You need a single status declaration (Certificate of No Impediment to Marriage) and birth certificate. Both must be notarized, legalized by your country\'s foreign affairs department, and legalized by the Vietnamese embassy/consulate.'
      },
      {
        question: 'How long is the marriage-based TRC valid?',
        answer: 'Marriage-based TRCs are typically issued for 1-3 years and can be renewed as long as the marriage remains valid.'
      },
      {
        question: 'Can I work with a marriage-based TRC?',
        answer: 'Yes. Marriage TRC holders qualify for a Work Permit Exemption - you do not need a full work permit. You apply for a Work Permit Exemption Certificate through DOLISA, which confirms your legal right to work based on your marriage to a Vietnamese citizen. This is faster and simpler than a standard work permit and covers both employment and running your own business.'
      },
      {
        question: 'What if I\'m already married outside Vietnam?',
        answer: 'If you married outside Vietnam, you need to register your marriage in Vietnam for it to be legally recognized. We can help with this process.'
      },
      {
        question: 'Can this lead to permanent residency?',
        answer: 'Yes, after 3 years of marriage-based TRC, you may be eligible to apply for permanent residency in Vietnam.'
      }
    ],
    guarantee: 'We guarantee successful marriage registration and TRC issuance or provide a full refund of our service fee (government fees excluded).'
  },
  'drivers-license': {
    slug: 'drivers-license',
    title: 'Driver\'s License Conversion',
    shortDescription: 'International Driver\'s License for short-term visitors. Vietnamese license conversion for TRC holders. We help with both.',
    timeline: '1-2 weeks',
    heroTitle: 'Driver\'s License for Vietnam - Conversion & International Permits',
    heroDescription: 'Short-term visa holders can use an International Driver\'s License (IDL) - we can help you obtain one. TRC/Residency Card holders must convert to a Vietnamese driver\'s license. We handle all paperwork, translation, and government submissions for both options.',
    process: [
      {
        step: 1,
        title: 'Document Verification',
        description: 'Submit your foreign driver\'s license and required documents for verification.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Translation & Notarization',
        description: 'We translate and notarize your license and supporting documents.',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Health Check',
        description: 'Complete mandatory health check at designated clinic (we arrange appointment).',
        duration: '1 day'
      },
      {
        step: 4,
        title: 'License Application',
        description: 'Submit application to Department of Transportation and await approval.',
        duration: '5-7 days'
      },
      {
        step: 5,
        title: 'License Pickup',
        description: 'Collect your Vietnamese driver\'s license and deliver to you.',
        duration: '1 day'
      }
    ],
    included: [
      'Consultation on IDL vs Vietnamese license requirements',
      'International Driver\'s License (IDL) application assistance',
      'License verification and eligibility check (for conversions)',
      'Document translation and notarization (for conversions)',
      'Health check coordination (for conversions)',
      'Application submission to DOT (for conversions)',
      'Follow-up with authorities',
      'License pickup and delivery',
      'Guidance on Vietnam traffic rules'
    ],
    requirements: [
      'Valid foreign driver\'s license (minimum 3 months validity)',
      'Valid passport',
      'Valid Vietnam visa or TRC',
      'Passport photos (4x6cm, white background)',
      'Proof of residence in Vietnam',
      'Original driver\'s license (must be presented)'
    ],
    benefits: [
      'Drive legally in Vietnam without international permit',
      'Valid for motorbikes and cars (depending on license class)',
      'Avoid fines and legal issues',
      'Required for vehicle registration',
      'Accepted as valid ID in Vietnam',
      'No driving test required (for most countries)'
    ],
    faqs: [
      {
        question: 'Do I need a Vietnamese license or can I use an International Driver\'s License (IDL)?',
        answer: 'It depends on your visa status: SHORT-TERM VISA HOLDERS (tourist visas, business visas under 3 months) can legally drive with an International Driver\'s License (IDP/IDL) along with their home country license. We can help you obtain an IDL. TRC/RESIDENCY CARD HOLDERS must convert their foreign license to a Vietnamese driver\'s license - you cannot use an IDL for long-term residence. Our conversion service is for TRC holders.'
      },
      {
        question: 'Which countries\' licenses can be converted?',
        answer: 'Vietnam has reciprocal agreements with over 70 countries including USA, UK, Canada, Australia, most EU countries, Japan, South Korea, and many others. Licenses from these countries can be converted without a driving test. Contact us to verify your country\'s eligibility.'
      },
      {
        question: 'Do I need to take a driving test?',
        answer: 'No driving test is required if your country has a reciprocal agreement with Vietnam. However, you must pass a basic health check and vision test.'
      },
      {
        question: 'How long is the Vietnamese license valid?',
        answer: 'Vietnamese driver\'s licenses are typically valid for 10 years from the date of issuance.'
      },
      {
        question: 'Can I convert a motorbike license?',
        answer: 'Yes! Most countries\' motorcycle/motorbike licenses can be converted to Vietnamese Class A1 or A2 licenses depending on engine capacity.'
      },
      {
        question: 'What if my license has expired?',
        answer: 'Your foreign license must be valid at the time of conversion. If it has expired, you may need to renew it in your home country first, or take a Vietnamese driving test.'
      },
      {
        question: 'Do I keep my original license?',
        answer: 'No, you must surrender your original foreign license during the conversion process. It will be kept by Vietnamese authorities. Some countries allow you to request a duplicate from your home country afterward.'
      },
      {
        question: 'What license classes can I get?',
        answer: 'The Vietnamese license class depends on your foreign license: Class B (cars), Class A1 (motorbikes up to 175cc), Class A2 (motorbikes over 175cc), or higher classes for trucks/buses if qualified.'
      }
    ],
    guarantee: 'We guarantee successful license conversion or provide a full refund of our service fee if you meet all eligibility requirements.'
  },
  'evisa': {
    slug: 'evisa',
    title: 'Vietnam eVisa & Entry Visa',
    shortDescription: 'Fast eVisa for first arrivals, property viewings, and business exploration. 90-day single or multiple entry.',
    timeline: '2-3 business days',
    heroTitle: 'Vietnam eVisa - Fast Entry, Hassle-Free',
    heroDescription: 'The Vietnam eVisa is the quickest way to enter Vietnam legally. Valid for 90 days single or multiple entry, it suits first-time arrivals, property buyers, and business explorers before committing to a TRC or work permit. We handle the application so yours is approved right first time.',
    process: [
      {
        step: 1,
        title: 'Submit Passport & Photo',
        description: 'Send us your passport data page and a recent passport photo meeting Vietnamese requirements.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Application Submission',
        description: 'We submit your eVisa application to the Immigration Department portal.',
        duration: '1 day'
      },
      {
        step: 3,
        title: 'Approval & Delivery',
        description: 'Receive your approved eVisa PDF by email, ready to print and present at the border.',
        duration: '1-3 business days'
      }
    ],
    included: [
      'eVisa application preparation and submission',
      'Photo compliance check',
      'Application tracking',
      'Approved eVisa PDF delivery',
      'Entry instructions and border tips',
      'Support if corrections needed'
    ],
    requirements: [
      'Passport valid for at least 6 months beyond intended stay',
      'Passport photo (4x6cm, white background, recent)',
      'Intended entry and exit dates',
      'Entry point (airport or land border)',
      'Accommodation address in Vietnam'
    ],
    benefits: [
      '90 days single or multiple entry',
      'Valid for all international airports and major land borders',
      'No need to visit an embassy or consulate',
      'Apply from anywhere in the world',
      'Can be extended or converted to TRC/work permit after arrival',
      'Available to nationals of 80+ countries'
    ],
    faqs: [
      {
        question: 'Who can get a Vietnam eVisa?',
        answer: 'Nationals of over 80 countries are eligible for the Vietnam eVisa. This includes USA, UK, EU member states, Australia, Canada, and most Asian countries. Contact us to confirm your nationality is eligible.'
      },
      {
        question: 'How long does an eVisa last?',
        answer: 'The standard Vietnam eVisa is valid for 90 days from the date of issue. You can choose single entry or multiple entry. The eVisa itself is valid for up to 90 days from issue date, and your stay cannot exceed 90 days per entry.'
      },
      {
        question: 'Can I extend my eVisa?',
        answer: 'The eVisa itself cannot be extended, but after arrival you can apply for a visa extension or convert your status to a TRC (if eligible). We can help with this once you are in Vietnam.'
      },
      {
        question: 'What\'s the difference between an eVisa and a Visa on Arrival?',
        answer: 'An eVisa is a standalone visa - you arrive with it already approved. A Visa on Arrival requires a pre-approved letter that you exchange for a visa stamp at the airport. The eVisa is accepted at all ports of entry including land borders; Visa on Arrival is only available at international airports.'
      },
      {
        question: 'Can I work on an eVisa?',
        answer: 'No. The eVisa is a tourist/visitor visa and does not permit employment. To work legally in Vietnam you need a work permit and TRC. We can advise on the best pathway once you arrive.'
      },
      {
        question: 'What if my application is rejected?',
        answer: 'eVisa rejections are uncommon but can happen due to document issues or eligibility reasons. We review your documents before submission to minimize this risk. If rejected due to our error, we resubmit at no extra charge.'
      }
    ],
    guarantee: 'If your eVisa is rejected due to an error in our application, we resubmit at no additional cost.'
  },
  'relocation-assistance': {
    slug: 'relocation-assistance',
    title: 'Relocation & Settling-In Service',
    shortDescription: 'End-to-end relocation support: housing search, bank account setup, SIM card, school search, and first-week orientation.',
    timeline: '1-2 weeks',
    heroTitle: 'Vietnam Relocation & Settling-In Support',
    heroDescription: 'Moving to Vietnam involves dozens of small tasks that each take a full day to figure out alone. We handle your first weeks: finding housing, opening a bank account, getting a SIM, registering with local authorities, and making sure you feel at home. So you can focus on what brought you here.',
    process: [
      {
        step: 1,
        title: 'Pre-Arrival Consultation',
        description: 'Video call to plan your move, understand your priorities, and prepare your arrival checklist.',
        duration: '1 hour'
      },
      {
        step: 2,
        title: 'Housing Search & Shortlist',
        description: 'We source and vet apartments in your preferred area and budget, arrange viewings.',
        duration: '3-5 days'
      },
      {
        step: 3,
        title: 'Arrival & Orientation',
        description: 'Airport pickup (optional), neighborhood tour, sim card, and same-day essentials.',
        duration: 'Day 1'
      },
      {
        step: 4,
        title: 'Admin & Registration',
        description: 'Bank account opening, local authority registration, utility setup, and any immediate document needs.',
        duration: 'Days 2-7'
      }
    ],
    included: [
      'Pre-arrival video consultation',
      'Housing search and shortlisting (Hanoi or Da Nang)',
      'Lease contract review and negotiation support',
      'Airport pickup (Hanoi or Da Nang)',
      'Neighborhood orientation walkthrough',
      'Local SIM card setup assistance',
      'Bank account opening support (Vietnamese bank)',
      'Temporary Residence Registration with local police (mandatory for expats)',
      'Utilities and internet setup guidance',
      'Local services introduction (supermarkets, clinics, expat communities)',
      '30-day WhatsApp support line'
    ],
    requirements: [
      'Valid passport with Vietnam visa or TRC',
      'Budget range for housing',
      'Target neighborhood or area preference',
      'Intended arrival date'
    ],
    benefits: [
      'Skip months of trial-and-error settling in',
      'Avoid common expat scams and overpriced rentals',
      'Legal compliance from day one (police registration)',
      'Bank account access within your first week',
      'Trusted local contacts and recommendations',
      'Ongoing support for the first 30 days',
      'Bundle with TRC or work permit for end-to-end service'
    ],
    faqs: [
      {
        question: 'What cities do you cover?',
        answer: 'We currently offer full relocation support in Hanoi and Da Nang. For Ho Chi Minh City, we can assist with housing search and admin remotely, or refer you to trusted partners.'
      },
      {
        question: 'Do I need to use your service for immigration too?',
        answer: 'No, relocation assistance is available as a standalone service. However, bundling with our TRC or work permit service gives you a significant discount and a single point of contact for everything.'
      },
      {
        question: 'What types of housing can you help with?',
        answer: 'We work across serviced apartments (great for the first 1-3 months), standard apartments, and some villa/house options. We focus on properties with clean leases and good landlord communication for expats.'
      },
      {
        question: 'What is the police registration (temporary residence registration)?',
        answer: 'Foreign nationals living in Vietnam are required to register with the local police ward within 24-48 hours of arrival at a new address. Your landlord should handle this, but many don\'t. We make sure it is done correctly - it\'s essential for TRC applications and bank accounts.'
      },
      {
        question: 'Can you help with school search for my children?',
        answer: 'Yes. School search and enrollment guidance for international schools is available as an add-on. We have contacts at the main international schools in Hanoi and Da Nang and can advise on waiting lists, fees, and admission requirements.'
      },
      {
        question: 'What if I am already in Vietnam but feel lost?',
        answer: 'The settling-in service works just as well for people who have been here a few weeks and are still struggling with the basics. Book a consultation and we\'ll fill in the gaps.'
      }
    ],
    guarantee: 'If we cannot find suitable housing options within your budget and requirements within 2 weeks, we refund the housing search portion of our fee in full.'
  },
  'tax-filing': {
    slug: 'tax-filing',
    title: 'Personal Income Tax (PIT) Filing',
    shortDescription: 'Annual PIT return filing for expats in Vietnam. We handle your tax obligations so you stay compliant and avoid penalties.',
    timeline: '1-2 weeks',
    heroTitle: 'Vietnam Personal Income Tax Filing for Expats',
    heroDescription: 'Vietnam taxes residents on worldwide income after 183 days. We calculate your PIT liability, identify deductions, and file your annual return on time - keeping you compliant and penalty-free.',
    process: [
      {
        step: 1,
        title: 'Income & Residency Review',
        description: 'Assess your tax residency status, income sources, and applicable deductions.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Document Collection',
        description: 'Gather payslips, foreign income records, and deduction documentation.',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Tax Calculation & Return Preparation',
        description: 'Calculate your PIT liability, apply all eligible deductions, and prepare the return.',
        duration: '2-3 days'
      },
      {
        step: 4,
        title: 'Filing & Confirmation',
        description: 'Submit to the General Department of Taxation and provide you with confirmation.',
        duration: '1-2 days'
      }
    ],
    included: [
      'Tax residency status assessment',
      'Worldwide income calculation',
      'Deduction identification (dependants, insurance, etc.)',
      'Annual PIT return preparation and filing',
      'Tax authority correspondence',
      'Filing confirmation document',
      'Penalty exposure review'
    ],
    requirements: [
      'Passport copy',
      'TRC or visa showing days in Vietnam',
      'Monthly payslips or employer income letters',
      'Foreign income statements (if applicable)',
      'Proof of dependants (if claiming deductions)',
      'Previous year tax filing (if available)'
    ],
    benefits: [
      'Stay fully compliant with Vietnamese tax law',
      'Avoid late filing penalties (up to 25% of tax owed)',
      'Claim all eligible deductions to reduce liability',
      'Peace of mind for audit situations',
      'Clear documentation for employer reimbursement claims',
      'Understand your worldwide tax obligations'
    ],
    faqs: [
      {
        question: 'Do I need to file taxes in Vietnam?',
        answer: 'Yes, if you are a tax resident (present 183+ days in a calendar year or 12 consecutive months from first arrival) or earn income sourced in Vietnam. Non-residents with Vietnam-sourced income also have filing obligations.'
      },
      {
        question: 'What is the tax rate for expats?',
        answer: 'Tax residents are taxed on a progressive scale from 5% to 35% on all worldwide income. Non-residents pay a flat 20% on Vietnam-sourced income only.'
      },
      {
        question: 'Can I claim deductions?',
        answer: 'Yes - the personal deduction is 11 million VND/month, plus 4.4 million VND/month per dependent. You can also deduct compulsory insurance contributions and approved charitable donations.'
      },
      {
        question: 'When is the filing deadline?',
        answer: 'Annual PIT returns must be filed by 30 April of the following year. Monthly or quarterly PIT declarations are also required if your employer does not withhold on your behalf.'
      },
      {
        question: 'What if I also pay tax in my home country?',
        answer: 'Vietnam has Double Taxation Agreements (DTAs) with over 80 countries. We review whether you can claim foreign tax credits to avoid being taxed twice on the same income.'
      },
      {
        question: 'What if I have missed previous years?',
        answer: 'We can help you file back years. Late filing penalties and interest apply, but voluntary disclosure before an audit significantly reduces exposure. Contact us to discuss your situation.'
      }
    ],
    guarantee: 'We guarantee accurate PIT returns based on information you provide. If our preparation error causes a penalty, we cover the penalty cost.'
  },
  'apostille-services': {
    slug: 'apostille-services',
    title: 'Apostille & Document Authentication',
    shortDescription: 'Get your foreign documents apostilled, legalized, and certified for use in Vietnamese official processes.',
    timeline: '2-4 weeks (varies by country)',
    heroTitle: 'Apostille & Document Authentication for Vietnam',
    heroDescription: 'Foreign documents used in Vietnamese immigration, marriage, business, and legal processes must be apostilled or legalized. We coordinate the full authentication chain - from your home country authority to the Vietnamese consulate - so nothing gets lost in translation.',
    process: [
      {
        step: 1,
        title: 'Document Assessment',
        description: 'Review your documents to determine the correct authentication chain for each.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Home Country Notarization',
        description: 'Coordinate notarization and apostille or foreign affairs legalization in your home country.',
        duration: '1-3 weeks'
      },
      {
        step: 3,
        title: 'Vietnamese Consulate Legalization',
        description: 'Submit documents to Vietnamese embassy/consulate for legalization (where required).',
        duration: '3-7 days'
      },
      {
        step: 4,
        title: 'Translation & Certified Copy',
        description: 'Prepare certified Vietnamese translations and copies ready for submission.',
        duration: '2-3 days'
      }
    ],
    included: [
      'Authentication pathway assessment',
      'Checklist and instructions for home country notarization',
      'Coordination with Vietnamese consulate submission',
      'Certified Vietnamese translation',
      'Notarized translation copies',
      'Document tracking and follow-up',
      'Final review before submission to authorities'
    ],
    requirements: [
      'Original document or certified copy',
      'Country of document origin',
      'Purpose of authentication (marriage, business, visa, etc.)',
      'Target submission date'
    ],
    benefits: [
      'Documents accepted by all Vietnamese authorities',
      'Avoid costly rejection and re-submission',
      'Expert guidance on country-specific requirements',
      'Single point of contact for the entire process',
      'Correct authentication first time',
      'Comprehensive support for TRC, work permit, and marriage applications'
    ],
    faqs: [
      {
        question: 'What is an apostille?',
        answer: 'An apostille is a form of authentication issued by a designated authority in a country that is a signatory to the Hague Convention. It certifies the origin of a public document so it is accepted in other Hague Convention member countries. Vietnam is not a member, so apostilled documents still need additional legalization at the Vietnamese embassy/consulate.'
      },
      {
        question: 'Which documents commonly need apostille?',
        answer: 'Birth certificates (for marriage registration), criminal background checks (for work permits and TRC), degree certificates (for work permits), marriage certificates (for dependent TRC), and incorporation documents (for company setup).'
      },
      {
        question: 'Can you handle this if I am already in Vietnam?',
        answer: 'Yes. We coordinate with agents in your home country and the Vietnamese embassy there on your behalf. You do not need to return home to get documents authenticated.'
      },
      {
        question: 'How long does it take?',
        answer: 'Timelines vary significantly by country - from 1 week (UK, Australia) to 4-6 weeks (USA varies by state). We provide a realistic timeline estimate once we know your document origin.'
      },
      {
        question: 'My document is already apostilled. Is that enough?',
        answer: 'Not always. Vietnam requires additional legalization at the Vietnamese embassy/consulate in your home country for documents to be accepted by most Vietnamese authorities. We check whether your documents need the extra step.'
      }
    ],
    guarantee: 'If a document we authenticated is rejected by Vietnamese authorities due to our authentication error, we redo the process at no additional cost.'
  },
  'permanent-residency': {
    slug: 'permanent-residency',
    title: 'Permanent Residency Application',
    shortDescription: 'Apply for Vietnam Permanent Residency (PR) after qualifying years of continuous legal residence.',
    timeline: '3-6 months',
    heroTitle: 'Vietnam Permanent Residency - Long-Term Security in Vietnam',
    heroDescription: 'Permanent Residency (PR) in Vietnam gives you the right to live and work indefinitely without ongoing visa renewals. We guide you through eligibility assessment, document preparation, and the full PR application process.',
    process: [
      {
        step: 1,
        title: 'Eligibility Assessment',
        description: 'Review your residency history, marital status, and qualifying grounds for PR.',
        duration: '2-3 days'
      },
      {
        step: 2,
        title: 'Document Preparation',
        description: 'Compile and authenticate all required documents including residency history, background checks, and sponsorship letters.',
        duration: '2-4 weeks'
      },
      {
        step: 3,
        title: 'Application Submission',
        description: 'Submit complete PR application to the Immigration Department (Ministry of Public Security).',
        duration: '1-2 days'
      },
      {
        step: 4,
        title: 'Review & Approval',
        description: 'Government reviews application. We follow up and respond to any requests for additional information.',
        duration: '2-4 months'
      },
      {
        step: 5,
        title: 'PR Card Issuance',
        description: 'Collect your Permanent Residency Card (valid indefinitely with periodic registration).',
        duration: '1-2 weeks'
      }
    ],
    included: [
      'Eligibility and grounds assessment',
      'Residency history documentation',
      'Criminal background check coordination',
      'Character reference and sponsorship letter guidance',
      'Application preparation and translation',
      'Submission to Ministry of Public Security',
      'Follow-up on government requests',
      'PR card collection and delivery'
    ],
    requirements: [
      'Continuous legal residence in Vietnam (typically 3+ years for marriage route, 5+ years for other routes)',
      'Valid passport',
      'TRC history documentation',
      'Vietnamese spouse (for marriage route) or Vietnamese citizen sponsor',
      'Clean criminal record (home country and Vietnam)',
      'Proof of financial stability',
      'Health certificate'
    ],
    benefits: [
      'Live in Vietnam indefinitely without visa renewals',
      'Work legally without a separate work permit',
      'Own property with the same rights as TRC holders',
      'Access to Vietnamese banking, loans, and financial services',
      'Sponsor spouse and children for residency',
      'Path toward naturalization (for those who qualify)',
      'No more departure and re-entry requirements'
    ],
    faqs: [
      {
        question: 'Who qualifies for permanent residency in Vietnam?',
        answer: 'Main qualifying grounds: (1) Married to a Vietnamese citizen for 3+ consecutive years with TRC. (2) Significant contributions to Vietnam recognized by the state. (3) Exceptional expertise in areas Vietnam needs. (4) Foreign citizens of Vietnamese origin (Viet Kieu). Eligibility is assessed case by case.'
      },
      {
        question: 'How long do I need to have lived in Vietnam?',
        answer: 'For the marriage route, typically 3 continuous years of TRC-based residence. For other routes, generally 5+ years of continuous legal residence. The law gives the Ministry of Public Security discretion in assessing qualifying periods.'
      },
      {
        question: 'Can I work with a PR card?',
        answer: 'Yes. Permanent residents do not need a work permit - they can work for any employer or run their own business without additional immigration authorization.'
      },
      {
        question: 'Does PR lead to Vietnamese citizenship?',
        answer: 'PR is separate from citizenship. Naturalization requires renouncing your existing citizenship (Vietnam generally does not allow dual citizenship) and at least 5 years of PR, among other criteria. Most expats prefer PR over citizenship for this reason.'
      },
      {
        question: 'Does my PR ever expire?',
        answer: 'The Permanent Residency Card itself has a validity period (typically 10 years) but can be renewed indefinitely. The underlying PR status does not expire as long as you maintain residence in Vietnam.'
      },
      {
        question: 'What if my PR application is rejected?',
        answer: 'PR rejections can be appealed or reapplied after addressing the reasons for refusal. We provide a detailed review of rejection reasons and advise on the best path forward.'
      }
    ],
    guarantee: 'We provide a thorough eligibility assessment before you commit. If we accept your case and the application fails due to our preparation error, we provide a full service fee refund.'
  },
  'accounting-bookkeeping': {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDescription: 'Monthly accounting, bookkeeping, and financial reporting for foreign-owned companies in Vietnam.',
    timeline: 'Ongoing monthly service',
    heroTitle: 'Vietnam Company Accounting & Bookkeeping',
    heroDescription: 'Vietnamese accounting regulations require monthly/quarterly filings and strict bookkeeping standards. Our local accounting team handles your books, VAT returns, payroll accounting, and annual financial statements - keeping your company compliant so you can focus on business.',
    process: [
      {
        step: 1,
        title: 'Onboarding & System Setup',
        description: 'Review your existing records, set up accounting software, and establish reporting cadence.',
        duration: '3-5 days'
      },
      {
        step: 2,
        title: 'Monthly Bookkeeping',
        description: 'Record all transactions, categorize expenses, reconcile bank statements.',
        duration: 'Ongoing monthly'
      },
      {
        step: 3,
        title: 'Tax Declaration Filing',
        description: 'Prepare and submit monthly/quarterly VAT returns and corporate income tax declarations.',
        duration: 'Monthly/Quarterly'
      },
      {
        step: 4,
        title: 'Annual Financial Statements',
        description: 'Prepare audited financial statements and annual tax finalization filing.',
        duration: 'Annually (March-April)'
      }
    ],
    included: [
      'Monthly transaction recording and categorization',
      'Bank reconciliation',
      'Monthly/quarterly VAT return filing',
      'Monthly PIT withholding declarations',
      'Quarterly corporate income tax declarations',
      'Annual financial statement preparation',
      'Annual tax finalization (CIT and PIT)',
      'Payroll accounting (up to 5 employees)',
      'Management report (P&L, balance sheet)',
      'Direct communication with tax authorities'
    ],
    requirements: [
      'Active Vietnamese company (ERC)',
      'Monthly bank statements',
      'All invoices, receipts, and expense records',
      'Employee payroll information',
      'Access to company e-invoice system'
    ],
    benefits: [
      'Stay compliant with Vietnamese accounting standards (VAS)',
      'Avoid late filing penalties (up to 25M VND per violation)',
      'Clean books ready for government inspection or audit',
      'Accurate VAT reclaim on business expenses',
      'Professional financial statements for bank loans or investor due diligence',
      'Free up time to focus on growing your business',
      'Local expertise in Vietnamese tax law'
    ],
    faqs: [
      {
        question: 'Is accounting mandatory for my Vietnamese company?',
        answer: 'Yes. All registered companies in Vietnam must maintain proper books, file monthly VAT returns, quarterly CIT declarations, and annual financial statements regardless of revenue level - even zero-revenue companies.'
      },
      {
        question: 'What accounting standards apply in Vietnam?',
        answer: 'Vietnam uses Vietnamese Accounting Standards (VAS), which differ from IFRS and US GAAP. All transactions must be documented with valid VAT invoices (e-invoices since 2022). Our team is expert in VAS requirements.'
      },
      {
        question: 'Do I need an audit?',
        answer: 'Foreign-invested enterprises (FIEs) with foreign capital must have their annual financial statements audited by an approved audit firm. We coordinate with licensed auditors and prepare your books to minimize audit fees.'
      },
      {
        question: 'What is the corporate income tax rate?',
        answer: 'Standard CIT rate is 20% on net profit. Preferential rates (10-15%) apply for specific industries or regions. We identify any applicable incentives for your business.'
      },
      {
        question: 'Can you handle payroll accounting?',
        answer: 'Yes. Our standard package includes payroll accounting for up to 5 employees, including PIT withholding calculations and social insurance base calculations. Additional employees can be added for an incremental fee.'
      },
      {
        question: 'What if my company has had no activity?',
        answer: 'Zero-activity companies still need to file nil returns and annual financial statements. We offer a reduced-rate dormant company compliance package for this situation.'
      }
    ],
    guarantee: 'We cover any penalties resulting from errors in our filing work. Our team monitors all deadlines so you never face a late filing penalty due to our oversight.'
  },
  'social-insurance': {
    slug: 'social-insurance',
    title: 'Social Insurance Enrollment',
    shortDescription: 'Enroll your employees in Vietnam\'s mandatory social, health, and unemployment insurance schemes.',
    timeline: '1-2 weeks',
    heroTitle: 'Vietnam Social Insurance Enrollment for Companies',
    heroDescription: 'Vietnamese law requires employers to enroll eligible employees in social insurance (SI), health insurance (HI), and unemployment insurance (UI). Failure to comply results in significant penalties. We handle enrollment, monthly contribution declarations, and ongoing compliance.',
    process: [
      {
        step: 1,
        title: 'Employee Eligibility Review',
        description: 'Assess which employees require mandatory enrollment based on contract type and nationality.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Registration with Social Insurance Authority',
        description: 'Register your company and employees with the provincial Social Insurance Authority (VSS).',
        duration: '3-5 days'
      },
      {
        step: 3,
        title: 'Health Insurance Card Issuance',
        description: 'Coordinate health insurance card issuance for all enrolled employees.',
        duration: '3-7 days'
      },
      {
        step: 4,
        title: 'Ongoing Monthly Declarations',
        description: 'Handle monthly contribution reports and payment coordination.',
        duration: 'Ongoing monthly'
      }
    ],
    included: [
      'Employee eligibility assessment',
      'Company registration with Social Insurance Authority',
      'Employee enrollment forms and submission',
      'Health insurance card coordination',
      'Monthly contribution declaration filing',
      'Annual social insurance reconciliation',
      'Maternity, sick leave, and benefit claims guidance',
      'Compliance calendar and deadline reminders'
    ],
    requirements: [
      'Active Vietnamese company (ERC)',
      'Employee labor contracts (indefinite or 1+ month fixed-term)',
      'Employee ID/passport copies',
      'Employee salary information',
      'Company bank account for contribution payments'
    ],
    benefits: [
      'Full compliance with Vietnamese Labor Code and Social Insurance Law',
      'Avoid penalties of 18-20% annual interest on unpaid contributions',
      'Employees receive healthcare coverage (80% of medical costs)',
      'Employees accrue pension and maternity/sick leave entitlements',
      'Legitimate employer status for work permit sponsorship',
      'Attract and retain qualified local and expat staff',
      'Protect your company from labor disputes'
    ],
    faqs: [
      {
        question: 'Which employees need social insurance?',
        answer: 'All employees with indefinite-term contracts or fixed-term contracts of 1 month or more must be enrolled. This includes both Vietnamese employees and foreign employees holding work permits. Part-time workers with contracts under 1 month are exempt.'
      },
      {
        question: 'What are the contribution rates?',
        answer: 'Employer contributions: 17.5% of salary to SI, 3% to HI, 1% to UI - total 21.5%. Employee contributions: 8% to SI, 1.5% to HI, 1% to UI - total 10.5%. Contributions are capped at 20x the base salary (currently 36 million VND/month cap).'
      },
      {
        question: 'Do foreign employees need social insurance?',
        answer: 'Yes, since December 2018, foreign employees with work permits, practice certificates, or business licenses must be enrolled in Vietnamese SI (except SI contributions for foreign employees were phased in from 2022). Health insurance is mandatory immediately.'
      },
      {
        question: 'What happens if I don\'t register employees?',
        answer: 'Employers who fail to register face fines of 12-20% of total unpaid contributions plus 18% annual interest on arrears. In severe cases, the business license can be suspended.'
      },
      {
        question: 'Can employees claim benefits while employed?',
        answer: 'Yes. Enrolled employees can claim sick leave pay (75% of salary for up to 30 days/year), maternity leave (100% of salary for 6 months), and occupational accident benefits through the VSS system.'
      },
      {
        question: 'What if we are late enrolling existing employees?',
        answer: 'Back contributions plus penalties apply. We can help you calculate the arrears and negotiate payment terms with the Social Insurance Authority to regularize your status.'
      }
    ],
    guarantee: 'We guarantee timely and accurate enrollment and monthly filings. Any penalties arising from our administrative errors are covered by us.'
  },
  'property-registration': {
    slug: 'property-registration',
    title: 'Vietnam Property Registration - Pink Book, Red Book & Foreign Ownership Documents',
    shortDescription: 'Complete guide to Vietnam property registration for foreigners. Understand the difference between Red Book and Pink Book, all required documents, registration fees, and the full process for apartments and condominiums.',
    timeline: '1-2 months',
    heroTitle: 'Foreign-Owned Property Registration & Ownership Support',
    heroDescription: 'Navigate Vietnam\'s property ownership regulations with expert guidance. We help foreigners legally purchase, register, and secure property ownership rights for apartments and condominiums in approved projects.',
    process: [
      {
        step: 1,
        title: 'Eligibility & Due Diligence',
        description: 'Verify eligibility, check property ownership quota, and conduct thorough legal due diligence.',
        duration: '3-5 days'
      },
      {
        step: 2,
        title: 'Sales Contract Review',
        description: 'Review and negotiate sales contract terms to protect your interests.',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Documentation Preparation',
        description: 'Prepare all required documents including notarization and translations.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Property Transfer Registration',
        description: 'Submit registration to Department of Natural Resources and Environment.',
        duration: '2-3 weeks'
      },
      {
        step: 5,
        title: 'Pink Book Issuance',
        description: 'Obtain official property ownership certificate (Pink Book/Red Book).',
        duration: '1-2 weeks'
      }
    ],
    included: [
      'Project approval verification and eligibility check',
      'Legal due diligence and title search',
      'Sales contract review and advice',
      'Document preparation and translation',
      'Property registration submission',
      'Coordination with developer/seller',
      'Pink Book/Red Book pickup',
      'Ongoing ownership support',
      'Tax filing assistance'
    ],
    requirements: [
      'Valid passport with Vietnam visa/TRC',
      'Proof of legal entry into Vietnam',
      'Notarized passport (for registration)',
      'Sales contract from developer/seller',
      'Property eligibility confirmation letter',
      'Proof of payment/financial capability',
      'Marriage certificate (if applicable)'
    ],
    benefits: [
      'Legal property ownership in Vietnam',
      'Official ownership certificate (Pink Book)',
      '50-year ownership term (renewable)',
      'Can sell or lease the property',
      'Pass property to heirs',
      'Access to bank financing',
      'Investment portfolio diversification'
    ],
    faqs: [
      {
        question: 'Can foreigners own property in Vietnam?',
        answer: 'Yes, but with restrictions. Foreigners can own apartments/condominiums in approved projects where foreign ownership doesn\'t exceed 30% of total units. Foreigners cannot own landed property (houses with land) but can own the house structure on leased land.'
      },
      {
        question: 'What is the 30% foreign ownership quota?',
        answer: 'Each approved condominium project/building has a maximum 30% quota for foreign ownership. Once this quota is filled, foreigners cannot purchase more units in that project. Not all buildings are approved for foreign ownership. We verify project approval and check quota availability during due diligence.'
      },
      {
        question: 'How long can foreigners own property?',
        answer: 'Foreign ownership is valid for 50 years from the date of issuance of the ownership certificate and can be extended for another 50 years.'
      },
      {
        question: 'What is a Pink Book vs Red Book?',
        answer: 'Both are property ownership certificates. Pink Book is typically for condos/apartments, Red Book for land. The color distinction is less important than the certificate itself, which proves legal ownership.'
      },
      {
        question: 'Can I get a mortgage as a foreigner?',
        answer: 'Some Vietnamese banks offer mortgages to foreigners, typically requiring 30-50% down payment. Requirements vary by bank and include valid visa/TRC and proof of income.'
      },
      {
        question: 'What are the ongoing costs of property ownership?',
        answer: 'Annual costs include property tax (~0.03-0.15% of value), management fees (varies by building), and utilities. We help you understand all costs before purchase.'
      },
      {
        question: 'Can I sell my property to another foreigner or Vietnamese?',
        answer: 'Yes, you can sell to Vietnamese citizens or other foreigners (subject to the 30% quota). The sale process requires updating registration with authorities.'
      },
      {
        question: 'What happens if my visa/TRC expires?',
        answer: 'You can still own the property even if your visa/TRC expires. However, you must have had legal entry status at the time of purchase. The property ownership is independent of visa status after purchase.'
      },
      {
        question: 'Does property ownership allow me to get a visa or TRC?',
        answer: 'No, property ownership alone does not grant you visa or TRC eligibility in Vietnam. You still need to obtain a visa or TRC through other means (work permit, investment visa, marriage, etc.). However, property ownership can support your case when applying for long-term visas, and having a TRC makes the property purchase process easier.'
      }
    ],
    guarantee: 'We guarantee proper registration and ownership certificate issuance or provide a full refund of our service fee (government fees and taxes excluded).'
  },
  'employer-of-record': {
    slug: 'employer-of-record',
    title: 'Employer of Record (EOR) / PEO Vietnam',
    shortDescription: 'Hire staff in Vietnam legally without setting up a company. We act as the legal employer so you can onboard talent fast.',
    timeline: '5-10 business days',
    heroTitle: 'Hire in Vietnam Without a Local Entity - EOR Made Simple',
    heroDescription: 'Want to hire Vietnamese employees but not ready to set up a company? Our Employer of Record service lets you onboard local staff compliantly under our legal entity. We handle payroll, social insurance, labor contracts, and tax compliance - you manage the work.',
    process: [
      {
        step: 1,
        title: 'Scope and Agreement',
        description: 'We confirm employee details, salary structure, role, and engagement terms. You review and sign the EOR master service agreement.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Employment Contract and Onboarding',
        description: 'We draft a compliant Vietnamese labor contract, register the employee with social insurance authorities, and complete onboarding paperwork.',
        duration: '3-5 days'
      },
      {
        step: 3,
        title: 'Payroll and Compliance Setup',
        description: 'We set up monthly payroll processing, personal income tax (PIT) withholding, and mandatory social, health, and unemployment insurance contributions.',
        duration: '1-2 days'
      },
      {
        step: 4,
        title: 'Ongoing HR and Reporting',
        description: 'Monthly payroll runs, payslips, tax filings, and labor reporting. We handle HR issues, leave tracking, and termination procedures when needed.',
        duration: 'Ongoing'
      }
    ],
    included: [
      'Vietnamese labor contract drafting (compliant with Labor Code 2019)',
      'Social insurance, health insurance, and unemployment insurance registration',
      'Monthly payroll processing and payslip generation',
      'Personal income tax (PIT) withholding and filing',
      'Mandatory insurance contribution management (employer and employee portions)',
      'Annual PIT finalization and employee tax certificates',
      'Labor report filings with relevant authorities',
      'HR support for leave management and policy compliance',
      'Termination and offboarding assistance',
      'Dedicated account manager'
    ],
    requirements: [
      'Signed EOR/PEO master service agreement',
      'Employee personal details and copies of ID/passport',
      'Agreed salary and compensation package details',
      'Role description and start date',
      'Bank account details for salary disbursement',
      'Any specific benefit requirements (allowances, bonuses)'
    ],
    benefits: [
      'Hire Vietnamese talent in days, not months',
      'No need to register a local entity or wait for company approval',
      'Full legal compliance with Vietnam Labor Code and tax law',
      'Avoid penalties from incorrect payroll or social insurance registration',
      'Test the Vietnam market before committing to a full entity setup',
      'Reduce administrative burden on your overseas finance and HR teams',
      'Scale headcount up or down without restructuring a legal entity',
      'All employer obligations handled - you focus on business outcomes'
    ],
    faqs: [
      {
        question: 'What is an Employer of Record (EOR) in Vietnam?',
        answer: 'An EOR is a licensed local company that becomes the legal employer of your staff on paper. You direct the employee\'s work, but the EOR handles the labor contract, payroll, tax, and social insurance obligations under Vietnamese law. This lets foreign companies hire in Vietnam without first incorporating a local entity.'
      },
      {
        question: 'How is EOR different from a staffing agency?',
        answer: 'A staffing agency recruits and places workers. An EOR employs workers on your behalf on a permanent or long-term basis. With an EOR, you choose who you want to hire - we simply provide the legal framework to employ them compliantly.'
      },
      {
        question: 'What are the mandatory employer contributions in Vietnam?',
        answer: 'Under Vietnamese law, employers must contribute approximately 21.5% of gross salary to social insurance (17.5%), health insurance (3%), and unemployment insurance (1%). Employee contributions total 10.5%. These are calculated on capped salary bases set by the government and must be registered within 30 days of employment start.'
      },
      {
        question: 'How is personal income tax handled?',
        answer: 'We withhold and remit PIT on behalf of each employee each month. Vietnam uses a progressive PIT scale from 5% to 35% on employment income, with deductions for personal and dependant allowances. At year-end, we handle annual PIT finalization and issue tax certificates to employees.'
      },
      {
        question: 'Can I use EOR for just one or two employees?',
        answer: 'Yes. EOR is particularly cost-effective for small teams or test hires. There is no minimum headcount. It is commonly used for a first Vietnam hire before deciding whether to set up a full entity.'
      },
      {
        question: 'What types of employment contracts are used?',
        answer: 'Vietnamese law recognizes definite-term contracts (up to 36 months) and indefinite-term contracts. Under the Labor Code 2019, if a definite-term contract is renewed more than once, it typically must convert to indefinite-term. We advise on the right structure based on your engagement plan.'
      },
      {
        question: 'How does termination work under EOR?',
        answer: 'We follow Vietnamese Labor Code requirements for notice periods and severance. Employees with 12+ months of service are entitled to severance pay (0.5 months gross salary per year of service up to the social insurance contribution cap). We manage the process to minimize risk and ensure full compliance.'
      },
      {
        question: 'When should I switch from EOR to my own entity?',
        answer: 'Most clients transition to their own entity once they have 5 or more employees, need to sign local contracts in their own name, require a business license for their activity, or want greater control over HR policies. We also offer company setup services to make that transition straightforward.'
      }
    ],
    guarantee: 'We guarantee all employment contracts, payroll filings, and social insurance registrations are fully compliant with Vietnamese law. If a penalty arises due to our processing error, we cover it in full.'
  }
};

export function getServiceBySlug(slug: string): ServiceData | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
