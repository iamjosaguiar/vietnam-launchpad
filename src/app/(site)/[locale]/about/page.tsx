'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-white/70">Trusted by 500+ expats</span>
          </div>
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
            About Vietnam
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
              Launchpad
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Your trusted partner for navigating Vietnam&apos;s immigration and business landscape
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-right">
              <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
                Making Vietnam Accessible to Everyone
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We exist to make Vietnam accessible to everyone. As experienced expats ourselves, we understand
                the challenges of navigating complex bureaucracy, language barriers, and cultural differences.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our mission is to provide transparent, professional services that eliminate the stress and
                uncertainty from your Vietnam journey. No hidden fees, no surprises—just clear guidance
                and guaranteed results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '6+', label: 'Years in Vietnam' },
                  { value: '500+', label: 'Clients Served' },
                  { value: '98%', label: 'Success Rate' },
                  { value: '24h', label: 'Response Time' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-gray-50">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Why Vietnam?</h3>
                <div className="space-y-5">
                  {[
                    { text: '#1 globally for expat affordability (5 consecutive years)', highlight: '#1 globally' },
                    { text: '7.1% GDP growth in 2024, top 6 globally', highlight: '7.1% GDP growth' },
                    { text: '100,000+ expats already call Vietnam home', highlight: '100,000+ expats' },
                    { text: 'Manufacturing hub attracting global companies', highlight: 'Manufacturing hub' },
                    { text: 'Digital nomad friendly with growing infrastructure', highlight: 'Digital nomad friendly' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">What Drives Us Every Day</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔍', title: 'Transparency', desc: 'Clear communication, honest timelines, no hidden surprises.' },
              { icon: '🎯', title: 'Results', desc: 'We deliver what we promise, when we promise it.' },
              { icon: '🤝', title: 'Partnership', desc: "We're your long-term partners, not just service providers." },
              { icon: '🚀', title: 'Innovation', desc: 'Always improving our processes for better client experience.' },
            ].map((value, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-500">{value.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Start Your Vietnam Journey?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join hundreds of successful expats who trusted us with their Vietnam relocation
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
