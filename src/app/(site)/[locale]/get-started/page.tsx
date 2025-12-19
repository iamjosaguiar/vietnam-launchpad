'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyType: '',
    capital: '',
    shareholders: '',
    location: '',
    nationalities: '',
    businessModel: '',
    visaOption: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/get-started', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');

      // Track conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'business_setup',
          event_label: 'questionnaire_completed',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm text-white/70">Free consultation included</span>
          </div>
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Start Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
              in Vietnam
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Answer a few questions to help us understand your needs better
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Process Overview */}
            <AnimateOnScroll className="mb-12">
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">What Happens Next?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { step: 1, title: 'Submit Questionnaire', desc: 'Answer questions about your business plans' },
                    { step: 2, title: 'Free Consultation', desc: 'We review your answers and schedule a 1:1 call' },
                    { step: 3, title: 'Get Custom Plan', desc: 'Receive a tailored service plan and next steps' }
                  ].map((item, index) => (
                    <AnimateOnScroll key={item.step} delay={index * 150} className="text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl mx-auto mb-4 shadow-lg shadow-primary-500/20">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Consultation Service Notice */}
            <AnimateOnScroll className="mb-12">
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 p-6 md:p-8 rounded-r-2xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Looking for General Consultation?</h3>
                    <p className="text-gray-600 mb-4">
                      If you're not ready to set up a business but need expert advice on tax, accounting, work permits, TRC, or specific questions about living and working in Vietnam, we offer <strong>1:1 paid consultations at $100/hour</strong>.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 hover:gap-3 transition-all"
                    >
                      Book a Consultation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Questionnaire Form */}
            <AnimateOnScroll>
              <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Business Setup Questionnaire</h2>

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Contact Information */}
                  <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                      Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="+84 (0)28 1234 5678"
                        />
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6-12months">6-12 months</option>
                          <option value="exploring">Just exploring</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Business Questions */}
                  <div className="space-y-8">
                    <h3 className="text-xl font-display font-semibold text-gray-900 flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                      About Your Business
                    </h3>

                    {/* Question 1: Company Type */}
                    <div>
                      <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-2">
                        What type of company are you looking to open? What will the company do? *
                      </label>
                      <textarea
                        id="companyType"
                        name="companyType"
                        required
                        rows={3}
                        value={formData.companyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="E.g., Limited Liability Company for software development services..."
                      />
                    </div>

                    {/* Question 2: Capital */}
                    <div>
                      <label htmlFor="capital" className="block text-sm font-medium text-gray-700 mb-2">
                        How much capital are you thinking of for your business? *
                      </label>
                      <input
                        type="text"
                        id="capital"
                        name="capital"
                        required
                        value={formData.capital}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="E.g., $50,000 USD or 1B VND"
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Don't worry if you're unsure - we'll help you determine the optimal amount during consultation
                      </p>
                    </div>

                    {/* Question 3: Shareholders */}
                    <div>
                      <label htmlFor="shareholders" className="block text-sm font-medium text-gray-700 mb-2">
                        How many shareholders will be in this business? (on and off papers) *
                      </label>
                      <input
                        type="text"
                        id="shareholders"
                        name="shareholders"
                        required
                        value={formData.shareholders}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="E.g., 2 shareholders - both on paper"
                      />
                    </div>

                    {/* Question 4: Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Where will you be located? Which city/area? *
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select location</option>
                        <option value="hanoi">Hanoi</option>
                        <option value="hcmc">Ho Chi Minh City</option>
                        <option value="danang">Da Nang</option>
                        <option value="haiphong">Hai Phong</option>
                        <option value="cantho">Can Tho</option>
                        <option value="nhatrang">Nha Trang</option>
                        <option value="dalat">Da Lat</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Question 5: Nationalities */}
                    <div>
                      <label htmlFor="nationalities" className="block text-sm font-medium text-gray-700 mb-2">
                        What are the nationalities of shareholders? *
                      </label>
                      <input
                        type="text"
                        id="nationalities"
                        name="nationalities"
                        required
                        value={formData.nationalities}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="E.g., US, UK, Vietnamese"
                      />
                    </div>

                    {/* Question 6: Business Model */}
                    <div>
                      <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 mb-2">
                        Please describe in detail how your business works or makes money *
                      </label>
                      <textarea
                        id="businessModel"
                        name="businessModel"
                        required
                        rows={5}
                        value={formData.businessModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="This helps us understand your business model better and ensure we set up the right company structure. Include details about your revenue sources, target market, and operations..."
                      />
                    </div>

                    {/* Question 7: Visa Option */}
                    <div>
                      <label htmlFor="visaOption" className="block text-sm font-medium text-gray-700 mb-2">
                        Will you look at visa options from this company too? *
                      </label>
                      <select
                        id="visaOption"
                        name="visaOption"
                        required
                        value={formData.visaOption}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="yes-investment-visa">Yes - Investment visa (need $70,000+ investment)</option>
                        <option value="yes-work-permit">Yes - Work permit & TRC</option>
                        <option value="yes-unsure">Yes - Not sure which option</option>
                        <option value="no">No - I have my own visa arrangement</option>
                        <option value="later">Maybe later</option>
                      </select>
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-green-800 mb-2">Thank you! Your questionnaire has been submitted.</h3>
                          <p className="text-green-700">We'll review your information and reach out within 24 hours to schedule your free consultation call. Check your email for confirmation.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
                      <p className="text-red-800 font-medium">Something went wrong. Please try again or contact us directly at jos@iamjosaguiar.com</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-5 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-primary-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit & Get Free Consultation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to receive communications about your business setup. We respect your privacy.
                  </p>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Capital Planning Guide */}
            <AnimateOnScroll className="mt-12">
              <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Capital Planning Guide</h2>

                <div className="bg-white p-6 rounded-2xl mb-6 border-l-4 border-primary-600 shadow-sm">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Simple Formula:</h3>
                  <p className="text-gray-800 mb-2">
                    <strong>Capitalization should support your business for at least 1.5 years of operational expenses.</strong>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Calculate your annual costs (rent + equipment + salaries + operating expenses) and multiply by 1.5 for a safe starting capital.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl mb-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Industry Examples:</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { industry: 'Coffee Shop', range: '1-2B VND ($40-80K) - Depends on location, with/without alcohol license' },
                      { industry: 'Restaurant', range: 'Minimum 3B VND (~$120K) - Higher for premium locations or full bar' },
                      { industry: 'Import/Export', range: 'Varies based on products and volume - minimum 1B VND recommended' },
                      { industry: 'Tech/Consulting', range: '500M-1B VND ($20-40K) - Lower overhead businesses' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start border-l-2 border-primary-300 pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors">
                        <span className="text-primary-600 font-bold mr-3 whitespace-nowrap">{item.industry}:</span>
                        <span className="text-gray-600">{item.range}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 font-medium">
                  Three key considerations when deciding your capital amount:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      num: 1,
                      title: 'What You Can Afford Comfortably',
                      desc: "This money becomes company money deposited into the business bank account - you need 100% of the capital available to transfer. You still need to live as a founder, so don't put everything in if it would make you struggle financially.",
                      note: "Remember: This capital is working capital for your business, not lost money. You'll use it to operate."
                    },
                    {
                      num: 2,
                      title: 'Client & Partner Perception',
                      desc: 'Your business license is public - partners and clients can check it online. This number makes an impression. Not too big to scare them off, not too small to be undervalued. Many businesses regret choosing too low initially.'
                    },
                    {
                      num: 3,
                      title: 'Legal Responsibility & Visa Requirements',
                      desc: 'This capital represents your liability if issues arise. For visa purposes:',
                      bullets: [
                        'Under 3B VND (~$120K): Typically 6-12 month investment visas',
                        '3B VND+ (~$120K+): Qualify for 3-4 year investment visas',
                        'Higher capital: Better for sponsoring multiple employees'
                      ]
                    }
                  ].map((item) => (
                    <AnimateOnScroll key={item.num}>
                      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center font-bold mr-4 shadow-lg shadow-primary-500/20">
                            {item.num}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-2">{item.desc}</p>
                            {item.note && (
                              <p className="text-sm text-gray-500 italic">{item.note}</p>
                            )}
                            {item.bullets && (
                              <ul className="space-y-2 text-sm text-gray-600 mt-3">
                                {item.bullets.map((bullet, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-primary-600 mr-2">•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary-100/50 border-l-4 border-primary-600 rounded-r-2xl">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We'll discuss your specific situation during the free consultation and help you calculate the optimal capital amount based on your business plan, industry, and visa needs.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
