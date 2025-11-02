import { Metadata } from 'next';
import { Link } from '@/i18n/config';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pricing - Transparent Vietnam Immigration Services',
  description: 'Clear, transparent pricing for Vietnam TRC, work permits, and company registration. No hidden fees. Package deals available.',
  keywords: ['Vietnam TRC cost', 'work permit price Vietnam', 'company registration fees Vietnam'],
};

export default function PricingPage() {
  const services = [
    {
      name: 'TRC Application',
      slug: 'trc-application',
      price: '$350',
      governmentFees: '$100-200',
      timeline: '5-7 days',
      popular: true,
      features: [
        'Document review & preparation',
        'Application submission',
        'Follow-up with authorities',
        'TRC pickup & delivery',
        'Translation services',
        'Email & phone support'
      ]
    },
    {
      name: 'Work Permit',
      slug: 'work-permit',
      price: '$180',
      governmentFees: '$150-300',
      timeline: '7-10 days',
      popular: false,
      features: [
        'Eligibility assessment',
        'Document preparation',
        'Permit application submission',
        'Health check coordination',
        'Permit pickup & delivery',
        'Renewal reminders'
      ]
    },
    {
      name: 'Company Setup',
      slug: 'company-setup',
      price: '$3,500',
      governmentFees: '$500-1,000',
      timeline: '3-4 weeks',
      popular: false,
      features: [
        'Business consultation',
        'Company name registration',
        'Business license',
        'Company seal',
        'Tax registration',
        'Bank account assistance',
        '6 months support'
      ]
    }
  ];

  const packages = [
    {
      name: 'Expat Starter',
      price: '$2,800',
      savings: '$600',
      includes: [
        'TRC Application ($350)',
        'Work Permit ($180)',
        'Document translation bundle',
        'Priority processing',
        '3 months concierge support'
      ],
      recommended: false
    },
    {
      name: 'Business Launch',
      price: '$5,500',
      savings: '$1,200',
      includes: [
        'Company Setup ($3,500)',
        'TRC Application ($350)',
        'Work Permit ($180)',
        'Corporate bank account',
        'Legal consultation (2 hours)',
        '12 months compliance support'
      ],
      recommended: true
    },
    {
      name: 'Family Relocation',
      price: '$4,200',
      savings: '$900',
      includes: [
        '2x TRC Applications ($700)',
        '2x Work Permits ($360)',
        'Dependent visa for 2 children',
        'School enrollment assistance',
        '6 months family support'
      ],
      recommended: false
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl md:text-2xl mb-4">No hidden fees. No surprises. Just honest pricing.</p>
          <p className="text-lg opacity-90">Service fees + government fees clearly separated</p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Individual Services</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  service.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary-600">{service.price}</span>
                    <span className="text-gray-500">service fee</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    + {service.governmentFees} gov't fees
                  </div>
                  <div className="text-sm text-primary-600 font-medium mt-2">
                    ⏱️ {service.timeline}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full bg-gray-100 text-gray-900 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Package Deals</h2>
            <p className="text-xl text-gray-600">Save up to $1,200 with our bundled packages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  pkg.recommended ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold mt-1">
                    💰 Save {pkg.savings}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    pkg.recommended
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing FAQs</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">What's included in the service fee?</h3>
                <p className="text-gray-600">Our service fee covers all our work: document review, preparation, translations, submission, follow-ups, and delivery. Government fees are separate and paid directly to authorities.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Are there any hidden fees?</h3>
                <p className="text-gray-600">Absolutely not. We list all fees upfront. The only potential additional costs are if you need extra services like rush processing or additional document translations.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-600">Yes! For packages over $2,000, we offer 50% upfront and 50% upon completion. Contact us to discuss payment options.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">What if my application is rejected?</h3>
                <p className="text-gray-600">If rejection is due to our error, we provide a 100% refund of our service fee. Government fees are non-refundable as they're paid to authorities.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Can I customize a package?</h3>
                <p className="text-gray-600">Yes! We create custom packages for unique situations. Contact us to discuss your specific needs and we'll provide a tailored quote.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Successful Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Approval Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Get a free consultation and custom quote for your situation</p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
