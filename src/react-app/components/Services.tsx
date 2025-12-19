import { Copy, FileText, ScanLine, BookOpen, Maximize2, Mail, CreditCard, Image, Megaphone, LayoutGrid, Package, Shirt, Tag, Droplet, Gift, Gem, Square } from 'lucide-react';

const services = [
  {
    icon: Copy,
    title: 'Photocopying (Xerox)',
    description: 'Black & white or color photocopying for documents, books, and more. High-speed machines for bulk orders.',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/photocopying.png'
  },
  {
    icon: FileText,
    title: 'Printing Services',
    description: 'Digital printing for brochures, flyers, business cards, posters, and banners. Custom sizes available.',
    color: 'from-purple-500 to-pink-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/printing-services.png'
  },
  {
    icon: ScanLine,
    title: 'Scanning & Digitization',
    description: 'Convert physical documents to digital formats like PDF or images. High-resolution scans for archives.',
    color: 'from-orange-500 to-red-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/scanning.png'
  },
  {
    icon: BookOpen,
    title: 'Binding & Lamination',
    description: 'Spiral binding, hard binding, and lamination services to protect and organize your documents.',
    color: 'from-green-500 to-emerald-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/binding-lamination.png'
  },
  {
    icon: Maximize2,
    title: 'Large Format Printing',
    description: 'Print large posters, blueprints, and signage with vibrant colors and durable materials.',
    color: 'from-indigo-500 to-blue-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/large-format.png'
  },
  {
    icon: Mail,
    title: 'Custom Stationery',
    description: 'Design and print letterheads, envelopes, and notepads tailored to your business needs.',
    color: 'from-pink-500 to-rose-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/custom-stationery.png'
  },
  {
    icon: CreditCard,
    title: 'Business Cards',
    description: 'Premium quality business cards with various finishes. Make a lasting first impression.',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/business-cards.png'
  },
  {
    icon: FileText,
    title: 'Flyers & Brochures',
    description: 'Eye-catching marketing materials to promote your business effectively.',
    color: 'from-purple-500 to-pink-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/flyers-brochures.png'
  },
  {
    icon: Image,
    title: 'Posters',
    description: 'Large format posters for events, promotions, and decorations.',
    color: 'from-orange-500 to-red-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/posters.png'
  },
  {
    icon: Megaphone,
    title: 'Banners',
    description: 'Durable vinyl banners perfect for outdoor and indoor advertising.',
    color: 'from-green-500 to-emerald-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/banners.png'
  },
  {
    icon: LayoutGrid,
    title: 'Stickers & Labels',
    description: 'Custom stickers and labels in any shape, size, or quantity.',
    color: 'from-indigo-500 to-blue-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/stickers-labels.png'
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Custom packaging solutions to make your products stand out.',
    color: 'from-pink-500 to-rose-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/packaging.png'
  },
  {
    icon: CreditCard,
    title: 'Student & Corporate ID Cards',
    description: 'Professional ID cards with photo printing and custom designs for students and corporate employees.',
    color: 'from-blue-500 to-indigo-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/id-cards.png'
  },
  {
    icon: Shirt,
    title: 'T-Shirt Printing',
    description: 'Custom t-shirt printing with vibrant colors and premium quality designs for personal and corporate use.',
    color: 'from-red-500 to-orange-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/tshirt-printing.png'
  },
  {
    icon: Tag,
    title: 'Tags Design',
    description: 'Creative tag designs for products, events, and marketing campaigns. Perfect for branding.',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/tags-design.png'
  },
  {
    icon: Droplet,
    title: 'Water Bottle Printing',
    description: 'Durable water bottle customization with your logos, designs, and text for corporate gifting.',
    color: 'from-cyan-500 to-blue-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/water-bottle.png'
  },
  {
    icon: Gift,
    title: 'Gifts & Corporate Gifts',
    description: 'Premium gift items and corporate gift solutions customized with your branding.',
    color: 'from-pink-500 to-red-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/corporate-gifts.png'
  },
  {
    icon: Gem,
    title: 'Crystal',
    description: 'Elegant crystal trophies, awards, and decorative items for recognition and branding.',
    color: 'from-purple-500 to-blue-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/crystal.png'
  },
  {
    icon: Square,
    title: 'Foam Boards',
    description: 'Lightweight foam boards for displays, signage, and presentation materials.',
    color: 'from-green-500 to-cyan-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/foam-boards.png'
  },
  {
    icon: Square,
    title: 'Standees',
    description: 'Custom standee displays for events, exhibitions, and promotional campaigns.',
    color: 'from-indigo-500 to-purple-500',
    image: 'https://019b2fb8-1665-7ea5-8bd3-98413b3ec279.mochausercontent.com/standees.png'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive printing solutions for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className={`absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
