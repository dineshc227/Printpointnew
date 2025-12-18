import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for individuals and small projects',
    features: [
      '100 Business Cards',
      '50 Flyers',
      'Standard Paper Quality',
      'Basic Design Support',
      '5-7 Day Delivery'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Ideal for growing businesses',
    features: [
      '500 Business Cards',
      '200 Flyers',
      'Premium Paper Quality',
      'Priority Design Support',
      '2-3 Day Delivery',
      'Free Shipping',
      'Custom Designs'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large-scale printing needs',
    features: [
      'Unlimited Business Cards',
      '1000+ Flyers',
      'Premium+ Paper Quality',
      'Dedicated Account Manager',
      'Next Day Delivery',
      'Free Shipping',
      'Custom Designs',
      'Bulk Discounts'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your printing needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105' 
                  : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-white text-purple-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
