import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Main Branch - Somajiguda</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600 text-sm">Amrutha Ville, G1A, Raj Bhavan Rd, opp. Yashoda Hospital Road, Somajiguda, Hyderabad, Telangana 500082</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600 text-sm">085001 23632</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600 text-sm">sree.99099@gmail.com</p>
                  <p className="text-gray-600 text-sm">printpointsomajiguda@gmail.com</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Hours</p>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Friday - Thursday: 9:30 am – 9:30 pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <a href="https://share.google/RrMSo59kgHyTYWiKr" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Visit Us on Google Maps
              </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Branch 2 - Madhapur</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600 text-sm">v digital & studio, Pillar No.1763, Royal arked, Metro Station, near by karachi becry, HUDA Techno Enclave, Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600 text-sm">091105 82975</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600 text-sm">vxerox.in@gmail.com</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Hours</p>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Friday - Thursday: 9:30 am – 9:30 pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <a href="https://share.google/no0ECnK04rdsNfzx7" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Visit Us on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Send Us a Message</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your printing needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
