import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">Professional immigration and business consulting services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* TRC Applications */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <div className="text-6xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TRC & Investment Visa</h3>
                <p className="text-gray-600 mb-6">
                  Get your Temporary Residence Card with investment visa options. 6 months to 4 years validity based on investment.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Investment visa: 6 months - 4 years
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Work permit + TRC: 2 years
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    2-3 weeks processing
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Document preparation included
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$350-$550</div>
                  <div className="text-sm text-gray-500 mb-4">Based on visa duration</div>
                  <Link href="/services/trc-application" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Work Permits */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Permits</h3>
                <p className="text-gray-600 mb-6">
                  Obtain your work permit legally and efficiently. Pricing varies by location (Hanoi, HCMC, Da Nang, other provinces).
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    2-year validity
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    2 months processing
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Health check coordination
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Criminal record assistance
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$650-$850</div>
                  <div className="text-sm text-gray-500 mb-4">Varies by location</div>
                  <Link href="/services/work-permit" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Company Setup */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Registration</h3>
                <p className="text-gray-600 mb-6">
                  Complete LLC setup including banking, legal compliance, and ongoing support. Includes FREE 1:1 consultation.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Free 1:1 consultation included
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    100% foreign ownership allowed
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    2-4 months processing
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Banking account setup
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$2,000-$3,000</div>
                  <div className="text-sm text-gray-500 mb-4">Depends on company type</div>
                  <Link href="/get-started" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* Business Visa */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">✈️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Visa</h3>
                  <p className="text-gray-600 mb-6">
                    Quick 3-month business visa for entering Vietnam. Perfect for initial visits and exploring opportunities.
                  </p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">$150-$250</div>
                  <div className="text-sm text-gray-500 mb-4">3-5 business days</div>
                  <Link href="/services/business-visa" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Consultation */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-primary-200">
                <div className="text-center">
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">1:1 Expert Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Get personalized advice on tax, accounting, work permits, TRC, business setup, and living in Vietnam.
                  </p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">$100/hour</div>
                  <div className="text-sm text-gray-500 mb-1">Schedule within 48 hours</div>
                  <div className="text-xs text-primary-700 font-medium mb-4">FREE for business setup clients</div>
                  <Link href="/services/consultation" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Vietnam Journey?</h2>
          <p className="text-xl mb-8">Setting up a business? Get a free consultation included with our business setup service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Business Setup
            </Link>
            <Link href="/contact" className="inline-block bg-primary-700 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}