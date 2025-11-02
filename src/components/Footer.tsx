export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-red-600">Vietnam</span>
              <span className="text-2xl font-bold text-white ml-1">Launchpad</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional immigration and business consulting services for expats relocating to Vietnam.
            </p>
            <div className="text-gray-300">
              <p>📧 jos@iamjosaguiar.com</p>
              <p>📱 +84 (0)28 1234 5678</p>
              <p>📍 Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services" className="hover:text-white transition-colors">TRC Applications</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Work Permits</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Company Setup</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Vietnam Launchpad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}