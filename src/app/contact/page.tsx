'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    service: '',
    message: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you within 24 hours.');
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
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Consultation</h1>
          <p className="text-xl">Ready to start your Vietnam journey? We're here to help every step of the way.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Tell Us About Your Plans</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality *
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      required
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select your nationality</option>
                      <option value="US">United States</option>
                      <option value="CN">China</option>
                      <option value="KR">South Korea</option>
                      <option value="JP">Japan</option>
                      <option value="AU">Australia</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="SG">Singapore</option>
                      <option value="TH">Thailand</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="trc">TRC Application</option>
                      <option value="work-permit">Work Permit</option>
                      <option value="company-setup">Company Setup</option>
                      <option value="visa">Visa Processing</option>
                      <option value="relocation">Full Relocation Package</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your plans, questions, or specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@vietnamlaunchpad.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone/WhatsApp</h3>
                    <p className="text-gray-600">+84 (0)28 1234 5678</p>
                    <p className="text-sm text-gray-500">Business hours: 9 AM - 6 PM (ICT)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">Ho Chi Minh City, Vietnam</p>
                    <p className="text-sm text-gray-500">Virtual consultations available worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">💬</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Zalo</h3>
                    <p className="text-gray-600">+84 (0)28 1234 5678</p>
                    <p className="text-sm text-gray-500">Popular messaging app in Vietnam</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">How long does the TRC process take?</h4>
                    <p className="text-gray-600 text-sm">5-7 working days once all documents are submitted.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Do you offer money-back guarantees?</h4>
                    <p className="text-gray-600 text-sm">Yes, if we cannot deliver the promised service due to our error.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Can you help with family visas?</h4>
                    <p className="text-gray-600 text-sm">Absolutely! We assist with dependent visas for spouses and children.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}