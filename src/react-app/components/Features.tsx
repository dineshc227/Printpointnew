import { Clock, Shield, Truck, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Quick turnaround times without compromising on quality. Most orders ship within 24-48 hours.'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: '100% satisfaction guarantee. We use premium materials and state-of-the-art printing technology.'
  },
  {
    icon: Truck,
    title: ' Shipping',
    description: 'delivery on orders. Track your order every step of the way.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our customer support team is always here to help with your printing needs.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose PrintPoint?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional printing services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
