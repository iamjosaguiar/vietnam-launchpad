'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import { Link } from '@/i18n/config';
import { PHONE_WHATSAPP } from '@/lib/site';

const faqCategories = [
  {
    category: 'TRC Applications',
    questions: [
      {
        q: 'How long does the TRC application process take?',
        a: 'New TRC applications typically take 4-8 weeks from document submission to card collection. Renewals with clean records are often faster. Timeline depends on your visa route (investment vs. work permit), the issuing province, and document completeness.'
      },
      {
        q: 'What is the difference between a TRC and a visa?',
        a: 'A visa allows you to enter Vietnam for a specific period. A TRC (Temporary Residence Card) allows you to reside in Vietnam for 1-2 years and provides benefits like opening bank accounts, signing leases, and purchasing vehicles.'
      },
      {
        q: 'Can I travel in and out of Vietnam with a TRC?',
        a: "Yes! The TRC allows for multiple entries to Vietnam. You don't need to apply for a separate visa when re-entering the country."
      },
      {
        q: 'What happens if my TRC application is rejected?',
        a: "If the rejection is due to our error in document preparation or submission, we provide a 100% refund of our service fee. If it's due to ineligibility or document issues on your side, government fees are non-refundable but we'll help you resolve the issue."
      },
      {
        q: 'Can my family get TRCs through my sponsorship?',
        a: 'Yes, spouses and children under 18 can obtain dependent TRCs based on your sponsorship. Additional fees apply for each dependent.'
      }
    ]
  },
  {
    category: 'Work Permits',
    questions: [
      {
        q: 'Do I need a degree to get a Vietnam work permit?',
        a: "Generally, yes. You need either a bachelor's degree or higher, OR 5+ years of relevant work experience in your field with documented proof."
      },
      {
        q: 'How long does a work permit last?',
        a: 'Work permits are valid for up to 2 years, depending on your work contract duration. They can be renewed before expiration.'
      },
      {
        q: 'Can I work for multiple employers with one permit?',
        a: 'No, work permits are employer-specific. If you change jobs, you need to apply for a new work permit with the new employer.'
      },
      {
        q: 'Can I start working before my work permit is issued?',
        a: 'Legally, no. However, many employers allow employees to start during the processing period. This carries some risk, and we recommend waiting for official approval.'
      },
      {
        q: 'What documents do I need for a work permit?',
        a: "You'll need: valid passport, notarized degree certificate, criminal background check, health certificate from a Vietnamese hospital, 2 passport photos, and a work contract from a Vietnamese company."
      }
    ]
  },
  {
    category: 'Company Registration',
    questions: [
      {
        q: 'Can foreigners own 100% of a Vietnamese company?',
        a: 'Yes, in most industries foreigners can own 100% of a company. However, some sectors (media, real estate development, education) have foreign ownership restrictions.'
      },
      {
        q: 'How much capital do I need to register a company?',
        a: "There is no minimum capital requirement for most business types. However, certain industries (construction, education, finance) have specific capital requirements. We'll advise based on your business type."
      },
      {
        q: 'Do I need a physical office to register?',
        a: 'Yes, you need a registered business address. This can be a physical office, co-working space, or in some cases, a virtual office. We can help you find suitable options.'
      },
      {
        q: 'How long does company registration take?',
        a: 'The Enterprise Registration Certificate (ERC) itself typically takes 3-5 working days once submitted. However, the full setup - including bank account opening, seal, tax code, and any special licenses - realistically takes 2-4 months. Banking is often the longest step.'
      },
      {
        q: 'Can my company sponsor my work permit and TRC?',
        a: 'Yes! This is one of the major benefits. Your company can sponsor both your work permit and TRC, eliminating the need for an external employer.'
      }
    ]
  },
  {
    category: 'General Questions',
    questions: [
      {
        q: 'Do I need to be in Vietnam to use your services?',
        a: "For TRC and work permit applications, yes, you must be physically present in Vietnam. For company registration, initial consultations can be done remotely, but you'll need to visit for final steps like bank account opening."
      },
      {
        q: 'Do you provide ongoing support after service completion?',
        a: 'Yes! We provide email support for 6-12 months (depending on the service) and send renewal reminders before your TRC or work permit expires.'
      },
      {
        q: 'What if I need to make changes to my application?',
        a: 'Contact us immediately. Minor changes can usually be made before submission at no extra cost. Major changes may require additional fees depending on the nature of the change.'
      },
      {
        q: 'Can you help with visa applications too?',
        a: 'While we specialize in TRCs, work permits, and company registration, we can provide guidance on visa applications and refer you to trusted partners for tourist or business visas.'
      },
      {
        q: 'What languages do you speak?',
        a: 'Our team speaks English, Vietnamese, Mandarin Chinese, and Korean. We can accommodate most international clients.'
      }
    ]
  },
  {
    category: 'Taxes and Finance',
    questions: [
      {
        q: 'Do I pay Vietnamese income tax if I work remotely for a foreign company?',
        a: 'It depends on how long you stay. If you spend fewer than 183 days per year in Vietnam, you are a non-resident and only Vietnam-sourced income is taxed at a flat 20%. If you exceed 183 days, you become a tax resident and your worldwide income is taxed at progressive rates of 5-35%. Many remote workers carefully track their days to manage this threshold.'
      },
      {
        q: 'Has Vietnam\'s personal income tax changed in 2026?',
        a: 'Yes. Law No. 109/2025/QH15 brought the biggest PIT reforms since 2012, effective January 2026. Key changes include raised personal and dependent deduction thresholds, clearer rules for remote/digital income, and high-tech sector incentives. Our Tax Guide covers the full details.'
      },
      {
        q: 'Do US citizens still need to file US taxes while living in Vietnam?',
        a: 'Yes. US citizens must file a US federal tax return regardless of where they live, if income exceeds the filing threshold. However, the Foreign Earned Income Exclusion (FEIE) and Foreign Tax Credit can significantly reduce or eliminate double taxation. Americans in Vietnam should work with a US expat tax specialist in addition to managing Vietnamese PIT obligations.'
      },
      {
        q: 'Can I open a Vietnamese bank account as a foreigner?',
        a: 'Yes, but requirements vary by bank and visa type. The easiest route is with a TRC or work permit. Some banks (particularly VPBank) are more foreigner-friendly and may open accounts for those with long-stay visas. Digital alternatives like Wise and Revolut work well for expats who cannot yet open a local account.'
      },
      {
        q: 'What is the best way to send money home from Vietnam?',
        a: 'Wise (formerly TransferWise) is the most popular choice among expats - transparent fees, good exchange rates, and VND is supported. Bank wires work for larger formal transfers but cost $20-50 flat fee. Transfers out of Vietnam for employment income are straightforward when supported by tax receipts.'
      }
    ]
  },
  {
    category: 'Healthcare and Insurance',
    questions: [
      {
        q: 'Do I need health insurance in Vietnam?',
        a: 'It is strongly recommended, though not legally mandatory for foreigners on most visa types. Without insurance, a serious illness or hospital stay can cost $5,000-50,000+. A regional health insurance plan starts from around $600-1,200/year and covers private international hospitals. Do not arrive in Vietnam without at least basic cover.'
      },
      {
        q: 'What is the difference between a regional and international health insurance plan?',
        a: 'Regional plans (approximately $600-1,200/year) cover treatment within Asia-Pacific - excellent value for expats who plan to stay in the region. International plans ($1,500-3,500+/year) provide worldwide coverage including the USA, UK, and EU - better for those who travel widely or want home-country treatment access. Both cover international hospitals in Vietnam.'
      },
      {
        q: 'Are there good hospitals in Vietnam for foreigners?',
        a: 'Yes, especially in Ho Chi Minh City and Hanoi. FV Hospital (HCMC), Family Medical Practice (HCMC and Hanoi), Hanoi French Hospital, and VINMEC are all internationally recognised with English-speaking staff. Da Nang has more limited international hospital access - an important consideration when choosing a city.'
      },
      {
        q: 'Is dental care good in Vietnam?',
        a: "Vietnam's dental care is genuinely one of the benefits of living here. Quality at established clinics is high and prices are a fraction of Western costs - a dental implant that costs $3,000-6,000 at home runs $600-1,200 in Vietnam. Many expats deliberately delay dental work at home to have it done in HCMC or Hanoi."
      },
      {
        q: 'Can I get mental health support as an expat in Vietnam?',
        a: 'Yes, though options are more limited than in Western countries. English-speaking counselors exist in HCMC - expat Facebook groups are the best source of recommendations. Online therapy platforms (BetterHelp, Talkspace) work well with Vietnam\'s fast internet. Most international insurance plans now include some mental health coverage.'
      }
    ]
  },
  {
    category: 'Housing and Property',
    questions: [
      {
        q: 'Can foreigners buy property in Vietnam?',
        a: 'Yes, under a 50-year renewable leasehold. Foreigners can purchase apartments and houses in approved commercial residential developments, subject to a 30% foreign ownership cap per building. The underlying land is not owned - you hold a land use right documented in a Pink Book certificate. Full freehold ownership is not available in Vietnam for anyone, Vietnamese or foreign.'
      },
      {
        q: 'What is the 30% foreign quota rule?',
        a: 'Foreign nationals collectively cannot own more than 30% of total units in any single apartment building. In popular expat areas, this quota can fill quickly. Always verify the remaining foreign quota availability before signing any purchase agreement - this is a critical due diligence step.'
      },
      {
        q: 'What is a Pink Book?',
        a: "The Pink Book (Sổ Hồng) is Vietnam's land use rights certificate - the closest equivalent to a property title deed. For foreigners, it documents your 50-year leasehold on a residential property. Getting the Pink Book properly registered in your name is the critical final step of any property purchase. Our Property Registration service handles this process."
      },
      {
        q: 'What is a typical lease agreement like for renting?',
        a: "Most expat apartments are leased furnished on 6 or 12-month terms, priced in USD. A standard lease covers rent amount, security deposit (typically 1-2 months), utilities terms, notice period, and early termination clause. Vietnam has weak tenant protection laws, so carefully reviewing the lease before signing is important. The Vietnamese text is legally binding - have it reviewed by a trusted Vietnamese speaker if it is Vietnamese-only."
      },
      {
        q: 'What is the best neighborhood for expats in Ho Chi Minh City?',
        a: 'Thao Dien (formerly District 2) is the most established expat family neighborhood - green, community-oriented, close to international schools, and with excellent cafes and restaurants. District 1 is most convenient for short stays. Binh Thanh is more local and affordable, popular with younger expats and digital nomads. District 7/Phu My Hung suits those working in the south and appeals to Korean and Japanese expats.'
      }
    ]
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-wash py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="max-w-[760px]">
            <div className="hero-badge mb-4 inline-flex min-h-[32px] items-center gap-2 rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Got questions? We have answers</span>
            </div>
            <h1 className="hero-title mb-4 font-display text-step-3 font-semibold leading-tight text-ink nav:text-step-5">
              Frequently Asked
              <span className="block text-navy">
                Questions
              </span>
            </h1>
            <p className="hero-subtitle max-w-measure text-lead text-muted">
              Answers to the questions expats ask most - visas, taxes, healthcare, housing, and everyday life in Vietnam
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="max-w-4xl">
            {faqCategories.map((category, catIndex) => (
              <AnimateOnScroll key={catIndex} className="mb-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-card bg-primary-50 text-navy">
                    <span className="font-display text-step-1 font-semibold">{catIndex + 1}</span>
                  </div>
                  <h2 className="font-display text-step-2 font-semibold text-ink">
                    {category.category}
                  </h2>
                </div>

                <Accordion
                  questionAs="h3"
                  items={category.questions.map((item) => ({ question: item.q, answer: <p>{item.a}</p> }))}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-paper pb-12 nav:pb-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll animation="scale">
            <div className="grid gap-6 rounded-panel bg-navy-deep px-6 py-8 text-white nav:grid-cols-[1fr_auto] nav:items-center nav:p-12">
              <div>
                <h2 className="m-0 font-display text-step-2 font-semibold text-white nav:text-step-4">
                  Still Have Questions?
                </h2>
                <p className="mb-0 mt-2 max-w-measure text-[#D6E2F0]">
                  We&apos;re here to help! Get in touch for personalized answers.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row nav:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-gold px-6 font-bold text-ink hover:bg-gold-hover"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={PHONE_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border-2 border-white/60 px-6 font-bold text-white hover:bg-white/10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
}
