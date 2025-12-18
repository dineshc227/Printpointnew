import { Printer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">PrintPoint</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for high-quality printing services. From business cards to large format banners, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Business Cards</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Flyers & Brochures</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Posters</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Banners</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Stickers & Labels</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PrintPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
