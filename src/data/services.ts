export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  price: string;
  priceNumeric: number;
  governmentFees: string;
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
    price: '$350-$550',
    priceNumeric: 450,
    governmentFees: 'Included',
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
    price: '$650-$850',
    priceNumeric: 750,
    governmentFees: 'Varies by location',
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
    price: '$2,000-$3,000',
    priceNumeric: 2500,
    governmentFees: 'Included',
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
    price: '$150-$250',
    priceNumeric: 200,
    governmentFees: 'Included',
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
    price: '$100/hour',
    priceNumeric: 100,
    governmentFees: 'N/A',
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
    price: '$800-$1,200',
    priceNumeric: 1000,
    governmentFees: 'Included',
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
        answer: 'Yes, you can work with a marriage-based TRC, but you still need a work permit unless you own your own business.'
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
    price: '$150-$250',
    priceNumeric: 200,
    governmentFees: 'Included',
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
  'property-registration': {
    slug: 'property-registration',
    title: 'Foreign-Owned Property Registration',
    shortDescription: 'Register and secure your property ownership in Vietnam as a foreigner. Complete support for apartments and condominiums in approved projects.',
    price: '$500-$1,500',
    priceNumeric: 1000,
    governmentFees: 'Varies by property value',
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
  }
};

export function getServiceBySlug(slug: string): ServiceData | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
