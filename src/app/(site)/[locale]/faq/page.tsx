'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

const faqCategories = [
  {
    category: 'TRC Applications',
    questions: [
      {
        q: 'How long does the TRC application process take?',
        a: 'The TRC application typically takes 5-7 working days once all required documents are submitted and verified. This timeline can vary slightly depending on government processing times.'
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
        a: 'The complete process typically takes 3-4 weeks, including name approval, license application, seal creation, and tax registration.'
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
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-white/70">Got questions? We have answers</span>
          </div>
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
              Questions
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Everything you need to know about our Vietnam immigration services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <AnimateOnScroll key={catIndex} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                    <span className="font-display font-bold text-lg">{catIndex + 1}</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <div key={qIndex} className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-sm font-medium">Q</span>
                        <span>{item.q}</span>
                      </h3>
                      <p className="text-gray-600 ml-11 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="scale" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              We&apos;re here to help! Get in touch for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/84281234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-secondary-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-secondary-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
