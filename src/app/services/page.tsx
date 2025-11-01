import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">TRC Applications</h3>
                <p className="text-gray-600 mb-6">
                  Get your Temporary Residence Card with our streamlined process. Perfect for long-term stays in Vietnam.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    1-3 year validity periods
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    5-7 working days processing
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Document preparation included
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Renewal assistance
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$350</div>
                  <div className="text-sm text-gray-500 mb-4">Government fee: $145-165</div>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Work Permits */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Permits</h3>
                <p className="text-gray-600 mb-6">
                  Obtain your work permit legally and efficiently with our expert guidance through the new streamlined process.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    2-year validity
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    3 weeks total processing
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
                  <div className="text-3xl font-bold text-primary-600 mb-2">$180</div>
                  <div className="text-sm text-gray-500 mb-4">Government fee: $16-42</div>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Company Setup */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Registration</h3>
                <p className="text-gray-600 mb-6">
                  Complete LLC setup including banking, legal compliance, and ongoing support for your business in Vietnam.
                </p>
                
                <div className="space-y-3 mb-6">
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
                  <div className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Legal representative service
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$3,500</div>
                  <div className="text-sm text-gray-500 mb-4">Government fees included</div>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
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
          <p className="text-xl mb-8">Get a free consultation to discuss your specific needs and create a customized plan.</p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}