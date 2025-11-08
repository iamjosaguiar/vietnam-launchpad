'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Business in Vietnam</h1>
            <p className="text-xl mb-4">Answer a few questions to help us understand your needs better</p>
            <p className="text-lg opacity-90">Free 1:1 consultation included for business setup clients</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Process Overview */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">1</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit Questionnaire</h3>
                  <p className="text-sm text-gray-600">Answer questions about your business plans</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">2</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-sm text-gray-600">We review your answers and schedule a 1:1 call</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">3</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Custom Quote</h3>
                  <p className="text-sm text-gray-600">Receive tailored pricing and next steps</p>
                </div>
              </div>
            </div>

            {/* Consultation Service Notice */}
            <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-2xl mr-3">💡</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Looking for General Consultation?</h3>
                  <p className="text-gray-700 mb-3">
                    If you're not ready to set up a business but need expert advice on tax, accounting, work permits, TRC, or specific questions about living and working in Vietnam, we offer <strong>1:1 paid consultations at $100/hour</strong>.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block text-primary-600 font-semibold hover:text-primary-700 underline"
                  >
                    Book a Consultation →
                  </Link>
                </div>
              </div>
            </div>

            {/* Questionnaire Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Setup Questionnaire</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">About Your Business</h3>

                  {/* Question 1: Company Type */}
                  <div>
                    <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-2">
                      1. What type of company are you looking to open? What will the company do? *
                    </label>
                    <textarea
                      id="companyType"
                      name="companyType"
                      required
                      rows={3}
                      value={formData.companyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="E.g., Limited Liability Company for software development services..."
                    />
                  </div>

                  {/* Question 2: Capital */}
                  <div>
                    <label htmlFor="capital" className="block text-sm font-medium text-gray-700 mb-2">
                      2. How much capital are you thinking of for your business? *
                    </label>
                    <input
                      type="text"
                      id="capital"
                      name="capital"
                      required
                      value={formData.capital}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="E.g., $50,000 USD or 1B VND"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Don't worry if you're unsure - we'll help you determine the optimal amount during consultation
                    </p>
                  </div>

                  {/* Question 3: Shareholders */}
                  <div>
                    <label htmlFor="shareholders" className="block text-sm font-medium text-gray-700 mb-2">
                      3. How many shareholders will be in this business? (on and off papers) *
                    </label>
                    <input
                      type="text"
                      id="shareholders"
                      name="shareholders"
                      required
                      value={formData.shareholders}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="E.g., 2 shareholders - both on paper"
                    />
                  </div>

                  {/* Question 4: Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      4. Where will you be located? Which city/area? *
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      5. What are the nationalities of shareholders? *
                    </label>
                    <input
                      type="text"
                      id="nationalities"
                      name="nationalities"
                      required
                      value={formData.nationalities}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="E.g., US, UK, Vietnamese"
                    />
                  </div>

                  {/* Question 6: Business Model */}
                  <div>
                    <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 mb-2">
                      6. Please describe in detail how your business works or makes money *
                    </label>
                    <textarea
                      id="businessModel"
                      name="businessModel"
                      required
                      rows={5}
                      value={formData.businessModel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="This helps us understand your business model better and ensure we set up the right company structure. Include details about your revenue sources, target market, and operations..."
                    />
                  </div>

                  {/* Question 7: Visa Option */}
                  <div>
                    <label htmlFor="visaOption" className="block text-sm font-medium text-gray-700 mb-2">
                      7. Will you look at visa options from this company too? *
                    </label>
                    <select
                      id="visaOption"
                      name="visaOption"
                      required
                      value={formData.visaOption}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h3 className="font-bold text-green-800 mb-2">Thank you! Your questionnaire has been submitted.</h3>
                        <p className="text-green-700">We'll review your information and reach out within 24 hours to schedule your free consultation call. Check your email for confirmation.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">⚠ Something went wrong. Please try again or contact us directly at jos@iamjosaguiar.com</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & Get Free Consultation'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communications about your business setup. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Capital Planning Guide */}
            <div className="mt-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Capital Planning Guide</h2>
              <p className="text-gray-700 mb-6">
                Not sure how much capital to register? Here are three important considerations to help you decide:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">What You Can Afford Comfortably</h3>
                      <p className="text-gray-600">
                        This money becomes company money, and you still need to live as a founder. Don't put everything into the business if it would make you struggle financially. Choose an amount you can commit comfortably.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Client & Partner Perception</h3>
                      <p className="text-gray-600">
                        Your business license is public - partners and clients can check it online. This number makes an impression. Not too big to scare them off, not too small to be undervalued. Many businesses regret choosing too low initially.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Legal Responsibility & Visa Requirements</h3>
                      <p className="text-gray-600 mb-3">
                        This capital represents your liability if issues arise, so it should be sufficient - at least to cover 12 months of operations. For visa purposes:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span><strong>Under 3B VND (~$120K):</strong> Typically 6-12 month investment visas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span><strong>3B VND+ (~$120K+):</strong> Qualify for 3-4 year investment visas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span><strong>$100K+ total capital:</strong> Better for sponsoring multiple employees</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-100 border-l-4 border-primary-600 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> We'll discuss your specific situation during the free consultation and help you determine the optimal capital amount for your business goals and visa needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
