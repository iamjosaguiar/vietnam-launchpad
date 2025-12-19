'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const testimonialKeys = [
  'markThompson',
  'sarahChen',
  'kimJihoon',
  'emmaRodriguez'
] as const;

const ratings = {
  markThompson: 5,
  sarahChen: 5,
  kimJihoon: 5,
  emmaRodriguez: 5
} as const;

const profileImages = {
  markThompson: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  sarahChen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  kimJihoon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  emmaRodriguez: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
} as const;

const serviceTypes = {
  markThompson: 'Work Permit',
  sarahChen: 'Company Setup',
  kimJihoon: 'TRC Renewal',
  emmaRodriguez: 'Investment Visa'
} as const;

// Additional testimonials (not from translations)
const additionalTestimonials = [
  {
    name: 'David Mueller',
    location: 'Germany',
    text: 'Excellent support for my business visa application. The team was knowledgeable about German-Vietnamese requirements and made the process seamless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    service: 'Business Visa'
  },
  {
    name: 'Yuki Tanaka',
    location: 'Japan',
    text: 'They helped me convert my driver\'s license quickly. Very professional service and clear communication throughout the entire process.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    service: "Driver's License"
  },
  {
    name: 'Michael O\'Brien',
    location: 'Australia',
    text: 'Outstanding service for our marriage registration. They navigated all the paperwork and made what seemed impossible, possible within weeks.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    service: 'Marriage Registration'
  },
  {
    name: 'Lisa van der Berg',
    location: 'Netherlands',
    text: 'Property registration was handled perfectly. Their expertise saved us from costly mistakes and the whole process was transparent.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    service: 'Property Registration'
  }
];

export default function TestimonialSection() {
  const t = useTranslations('homepage.testimonials');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const translatedTestimonials = testimonialKeys.map((key) => ({
    name: t(`${key}.name`),
    location: t(`${key}.location`),
    text: t(`${key}.text`),
    rating: ratings[key],
    image: profileImages[key],
    service: serviceTypes[key]
  }));

  // Combine translated and additional testimonials
  const testimonials = [...translatedTestimonials, ...additionalTestimonials];

  // Show 4 at a time (2x2 grid), so 2 pages for 8 testimonials
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary-100 to-transparent rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent-100 to-transparent rounded-full opacity-30 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-primary-700 font-medium">Trusted by 500+ expats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel - 2x2 Grid */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative min-h-[520px] sm:min-h-[480px] md:min-h-[420px]">
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageTestimonials = testimonials.slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                );
                return (
                  <div
                    key={pageIndex}
                    className={`absolute inset-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-500 ${
                      pageIndex === activeIndex
                        ? 'opacity-100 translate-x-0'
                        : pageIndex < activeIndex
                        ? 'opacity-0 -translate-x-12'
                        : 'opacity-0 translate-x-12'
                    }`}
                  >
                    {pageTestimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl shadow-md shadow-gray-200/50 p-6 border border-gray-100 flex flex-col hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Service tag */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-50 border border-primary-100 mb-4 w-fit">
                          <svg className="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs text-primary-700 font-medium">{testimonial.service}</span>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-0.5 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote text */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <div className="relative flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center ring-2 ring-white">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</div>
                            <div className="text-xs text-gray-500">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev arrow */}
            <button
              onClick={goToPrev}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2.5 bg-primary-600'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={goToNext}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">5.0</div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-500">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
