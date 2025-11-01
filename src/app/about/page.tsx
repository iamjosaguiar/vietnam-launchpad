import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Vietnam Launchpad</h1>
          <p className="text-xl">Your trusted partner for navigating Vietnam's immigration and business landscape</p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We exist to make Vietnam accessible to everyone. As experienced expats ourselves, we understand 
                the challenges of navigating complex bureaucracy, language barriers, and cultural differences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to provide transparent, professional services that eliminate the stress and 
                uncertainty from your Vietnam journey. No hidden fees, no surprises—just clear guidance 
                and guaranteed results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600">6+</div>
                  <div className="text-gray-600">Years in Vietnam</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">24h</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Vietnam?</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>#1 globally</strong> for expat affordability (5 consecutive years)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>7.1% GDP growth</strong> in 2024, top 6 globally</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>100,000+ expats</strong> already call Vietnam home</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Manufacturing hub</strong> attracting global companies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Digital nomad friendly</strong> with growing infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">Clear pricing, honest timelines, no hidden surprises.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">We deliver what we promise, when we promise it.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">We're your long-term partners, not just service providers.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Always improving our processes for better client experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Vietnam Journey?</h2>
          <p className="text-xl mb-8">
            Join hundreds of successful expats who trusted us with their Vietnam relocation
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}