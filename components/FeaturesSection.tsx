'use client';

import { Clock, Shield, Headphones, CreditCard, CheckCircle, Globe } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Quick appointment booking with minimal waiting time. Get your slot within 24 hours.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your personal information is protected with enterprise-grade security measures.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via WhatsApp, email, and phone for all your queries.'
  },
  {
    icon: CreditCard,
    title: 'Minimal Cost',
    description: 'Competitive pricing with transparent fees. No hidden charges or surprise costs.'
  },
  {
    icon: CheckCircle,
    title: 'High Success Rate',
    description: '98% success rate in appointment booking with expert guidance throughout the process.'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Services available for 35+ countries across Europe, North America, and other destinations.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Service?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make visa appointment booking simple, secure, and hassle-free with our professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Book Your Appointment?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied customers who have successfully booked their visa appointments through our platform.
          </p>
          <button className="btn-primary">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
