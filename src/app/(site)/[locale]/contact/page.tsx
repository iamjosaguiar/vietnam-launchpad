'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const companyTypes = [
  'Technology / SaaS',
  'Manufacturing / Industrial',
  'Financial Services',
  'Family Office / HNW Individual',
  'Investment Fund / PE / VC',
  'Professional Services',
  'Retail / E-commerce',
  'Individual / Expat',
  'Other',
];

const investmentSizes = [
  'Under $50,000',
  '$50,000 – $200,000',
  '$200,000 – $500,000',
  '$500,000 – $2M',
  '$2M+',
  'Prefer not to say',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyType: '',
    investmentSize: '',
    service: '',
    timeline: '',
    situation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', companyType: '', investmentSize: '', service: '', timeline: '', situation: '' });

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', { event_category: 'engagement', event_label: formData.service });
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all bg-white text-stone-900 placeholder-stone-300 text-sm font-body outline-none";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Vietnam Launchpad',
          url: 'https://www.vietnamlaunchpad.com/contact',
        }) }}
      />
      <main className="min-h-screen bg-ivory">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-stone-950 via-primary-950 to-stone-950 text-white py-36 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm text-white/60 font-body">Senior consultant responds within 4 business hours</span>
            </div>
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Request a{' '}
              <span className="italic block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-400">
                Private Consultation
              </span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/65 max-w-2xl mx-auto font-body">
              We engage with a limited number of new clients each month to maintain the quality of our work. Tell us about your situation.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Form - wider column */}
              <div className="lg:col-span-3">
                <AnimateOnScroll animation="fade-right">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-2">Tell us about your situation</h2>
                  <p className="text-stone-500 mb-10 text-sm leading-relaxed">
                    The more context you share, the more useful your consultation will be.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Company / Organization</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company name (optional)" />
                      </div>
                    </div>

                    {/* Company type + Investment size */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Organization Type *</label>
                        <select name="companyType" required value={formData.companyType} onChange={handleChange} className={inputClass}>
                          <option value="">Select type</option>
                          {companyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Estimated Investment / Budget</label>
                        <select name="investmentSize" value={formData.investmentSize} onChange={handleChange} className={inputClass}>
                          <option value="">Select range</option>
                          {investmentSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Service + Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Primary Service Interest *</label>
                        <select name="service" required value={formData.service} onChange={handleChange} className={inputClass}>
                          <option value="">Select service</option>
                          <option value="enterprise-market-entry">Market Entry Package (Enterprise)</option>
                          <option value="company-setup">Company / Entity Setup</option>
                          <option value="work-permit">Work Permits</option>
                          <option value="trc">TRC / Investment Visa</option>
                          <option value="compliance">Accounting & Compliance</option>
                          <option value="relocation">Full Relocation Package</option>
                          <option value="consultation">Strategy Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Timeline</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass}>
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-3months">Within 1–3 months</option>
                          <option value="3-6months">3–6 months</option>
                          <option value="6-12months">6–12 months</option>
                          <option value="exploring">Exploring / No deadline</option>
                        </select>
                      </div>
                    </div>

                    {/* Situation description */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Your Situation</label>
                      <textarea
                        name="situation"
                        rows={5}
                        value={formData.situation}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                        placeholder="Describe your Vietnam plans, goals, and any specific challenges or questions. The more detail you share, the more productive our conversation will be."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-5 bg-primary-50 border border-primary-200 rounded-2xl flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-primary-800 font-semibold mb-1">Request received.</p>
                          <p className="text-primary-600 text-sm">A senior consultant will review your situation and respond within 4 business hours.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-5 bg-red-50 border border-red-200 rounded-2xl">
                        <p className="text-red-800 font-medium text-sm">Something went wrong. Please try again or contact us directly at info@vietnamlaunchpad.com</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary text-white px-8 py-5 rounded-2xl text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                          Request Consultation
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-stone-400 text-xs">
                      By submitting, you agree to our privacy policy. We never share your information.
                    </p>
                  </form>
                </AnimateOnScroll>
              </div>

              {/* Right sidebar */}
              <div className="lg:col-span-2">
                <AnimateOnScroll animation="fade-left" delay={200}>

                  {/* What to expect */}
                  <div className="bg-white rounded-3xl border border-stone-100 p-8 mb-6">
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-6">What happens next</h3>
                    <div className="space-y-5">
                      {[
                        { step: '1', title: 'We review your request', desc: 'A senior consultant reads your situation within 4 business hours.' },
                        { step: '2', title: 'Strategy call scheduled', desc: 'We book a 30-minute call to understand your needs in depth.' },
                        { step: '3', title: 'Tailored proposal', desc: 'We present a specific plan and timeline for your situation.' },
                        { step: '4', title: 'Engagement begins', desc: 'Work starts within 5 business days of agreement.' },
                      ].map((item) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-bold flex items-center justify-center font-body">
                            {item.step}
                          </div>
                          <div>
                            <div className="font-semibold text-stone-800 text-sm mb-0.5">{item.title}</div>
                            <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="bg-white rounded-3xl border border-stone-100 p-8 mb-6">
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-5">Contact directly</h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                          title: 'WhatsApp / Phone',
                          detail: '+84 76 580 5294',
                          sub: 'Mon–Fri, 9am–6pm ICT',
                        },
                        {
                          icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                          title: 'Email',
                          detail: 'info@vietnamlaunchpad.com',
                          sub: 'Response within 4 hours',
                        },
                        {
                          icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                          title: 'Offices',
                          detail: 'Hanoi & Da Nang',
                          sub: 'Virtual consultations worldwide',
                        },
                      ].map((item) => (
                        <div key={item.title} className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-stone-800 text-sm">{item.detail}</div>
                            <div className="text-stone-400 text-xs">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="bg-stone-50 rounded-3xl border border-stone-100 p-8">
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-5">Common questions</h3>
                    <div className="space-y-5">
                      {[
                        { q: 'Do you work with companies, not just individuals?', a: 'Yes. A significant portion of our work is corporate - entity setup, team work permits, compliance, and market-entry packages for companies of all sizes.' },
                        { q: 'What does your money-back guarantee cover?', a: 'If we cannot deliver the service we committed to due to our error or misrepresentation, we refund the service fee in full.' },
                        { q: 'Can you handle holding structures and investment vehicles?', a: 'Yes. We work with investment advisors to help structure Vietnam holdings and investment vehicles optimally.' },
                      ].map((faq) => (
                        <div key={faq.q} className="pb-5 border-b border-stone-200 last:border-0 last:pb-0">
                          <h4 className="font-semibold text-stone-800 text-sm mb-1.5">{faq.q}</h4>
                          <p className="text-stone-500 text-xs leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
