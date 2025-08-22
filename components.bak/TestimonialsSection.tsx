'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    city: 'Delhi',
    country: 'France',
    rating: 5,
    text: 'Excellent service! Got my France visa appointment booked within 24 hours. The team was very professional and guided me through the entire process.',
    avatar: '👨‍💼'
  },
  {
    name: 'Priya Sharma',
    city: 'Mumbai',
    country: 'Germany',
    rating: 5,
    text: 'Amazing experience with VFS Portal. They helped me secure a Germany work permit appointment when I was struggling to find slots for months.',
    avatar: '👩‍💻'
  },
  {
    name: 'Ahmed Al-Rashid',
    city: 'Dubai',
    country: 'UK',
    rating: 5,
    text: 'Professional service with transparent pricing. Successfully booked my UK visa appointment from Dubai. Highly recommended for visa services.',
    avatar: '👨‍🎓'
  },
  {
    name: 'Sarah Johnson',
    city: 'Bangalore',
    country: 'USA',
    rating: 5,
    text: 'The WhatsApp support was incredibly helpful. They answered all my questions promptly and made the entire booking process stress-free.',
    avatar: '👩‍🔬'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our visa appointment booking services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              <Quote className="h-8 w-8 text-primary-200 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.city}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                {testimonial.country} Visa
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span>•</span>
            <span>Based on 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
