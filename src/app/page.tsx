import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TrustSignals from '@/components/TrustSignals';
import TestimonialSection from '@/components/TestimonialSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Vietnam Launchpad
          </h1>
          <p className="text-2xl mb-8">
            Professional immigration and business consulting services for Vietnam
          </p>
          <div className="space-y-4 mb-12">
            <p className="text-lg">🇻🇳 Navigate Vietnam with Confidence</p>
            <p className="text-lg">💼 TRC Applications • Work Permits • Company Setup</p>
            <p className="text-lg">💰 Transparent Pricing • Expert Guidance</p>
          </div>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Transparent pricing, expert guidance, guaranteed results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TRC Applications</h3>
              <p className="text-gray-600 mb-6">Get your Temporary Residence Card with our streamlined process.</p>
              <div className="text-3xl font-bold text-primary-600 mb-2">$350</div>
              <div className="text-sm text-gray-500 mb-4">5-7 working days</div>
              <a 
                href="/services" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                Learn More
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Permits</h3>
              <p className="text-gray-600 mb-6">Obtain your work permit legally and efficiently with expert guidance.</p>
              <div className="text-3xl font-bold text-primary-600 mb-2">$180</div>
              <div className="text-sm text-gray-500 mb-4">3 weeks processing</div>
              <a 
                href="/services" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                Learn More
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Setup</h3>
              <p className="text-gray-600 mb-6">Complete LLC setup including banking and legal compliance.</p>
              <div className="text-3xl font-bold text-primary-600 mb-2">$3,500</div>
              <div className="text-sm text-gray-500 mb-4">2-4 months</div>
              <a 
                href="/services" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Vietnam Launchpad?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees. What you see is what you pay.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Streamlined processes with guaranteed timelines.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">6+ years of experience helping expats succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Vietnam Journey?</h2>
          <p className="text-xl mb-8">Get a free consultation to discuss your specific needs.</p>
          <a 
            href="/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}