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
    shortDescription: 'Get your Vietnam Temporary Residence Card in 7 days with our streamlined application process.',
    price: '$350',
    priceNumeric: 350,
    governmentFees: '$100-200',
    timeline: '5-7 working days',
    heroTitle: 'Get Your Vietnam TRC in 7 Days - Guaranteed',
    heroDescription: 'Skip the bureaucracy. We handle everything from document preparation to pickup. 500+ successful applications, 98% approval rate.',
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
        question: 'How long is the TRC valid for?',
        answer: 'TRC validity depends on your work contract or sponsorship. Typically 1-2 years, renewable.'
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
        question: 'What\'s the difference between TRC and work permit?',
        answer: 'TRC allows you to reside in Vietnam. Work permit allows you to work legally. Most foreign workers need both.'
      }
    ],
    guarantee: 'If we cannot obtain your TRC due to our error in document preparation or submission, we provide a 100% refund of our service fee.'
  },
  'work-permit': {
    slug: 'work-permit',
    title: 'Vietnam Work Permit',
    shortDescription: 'Secure your legal right to work in Vietnam with our fast work permit processing service.',
    price: '$180',
    priceNumeric: 180,
    governmentFees: '$150-300',
    timeline: '7-10 working days',
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
    price: '$3,500',
    priceNumeric: 3500,
    governmentFees: '$500-1,000',
    timeline: '3-4 weeks',
    heroTitle: 'Register Your Company in Vietnam - Full Turnkey Service',
    heroDescription: 'From company registration to bank account setup. We handle everything so you can focus on growing your business.',
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
  }
};

export function getServiceBySlug(slug: string): ServiceData | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
