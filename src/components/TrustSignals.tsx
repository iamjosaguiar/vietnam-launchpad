export default function TrustSignals() {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Successful Applications</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Approval Rate</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">6</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">24h</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
