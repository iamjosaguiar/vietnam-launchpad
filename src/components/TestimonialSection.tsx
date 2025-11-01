export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Mark Thompson',
      nationality: 'USA',
      service: 'TRC Application',
      rating: 5,
      text: 'Vietnam Launchpad made my TRC process incredibly smooth. What would have taken me weeks of frustration was done in just 6 days. Professional, responsive, and worth every penny.',
      date: 'October 2024'
    },
    {
      name: 'Sarah Chen',
      nationality: 'Singapore',
      service: 'Company Setup + Work Permit',
      rating: 5,
      text: 'I was nervous about setting up a company in Vietnam, but the team guided me through every step. My company was registered in 3 weeks, and they even helped me open a bank account. Highly recommend!',
      date: 'September 2024'
    },
    {
      name: 'Kim Ji-hoon',
      nationality: 'South Korea',
      service: 'Work Permit',
      rating: 5,
      text: 'Fast and reliable service. They handled all the paperwork and translations. I just showed up for the health check. Got my work permit in 8 days.',
      date: 'November 2024'
    },
    {
      name: 'Emma Rodriguez',
      nationality: 'Spain',
      service: 'TRC Application',
      rating: 5,
      text: 'As a digital nomad, I needed a TRC quickly. Vietnam Launchpad delivered in 7 days as promised. Great communication and very transparent pricing. No hidden surprises.',
      date: 'October 2024'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Join 500+ satisfied clients from around the world</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 text-sm">{testimonial.text}</p>

              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.nationality} • {testimonial.service}</div>
                <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-6 py-3 rounded-lg">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-gray-900">100% Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
