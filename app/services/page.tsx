import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Shield, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | VFS Appointment Portal',
  description: 'Professional VFS appointment booking services for all European countries and global destinations. Visit, work, and study visa appointments.',
  keywords: 'VFS services, visa appointment booking, Schengen visa, work permit, study visa',
};

const services = [
  {
    title: 'Visit/Tourist Visa Appointments',
    description: 'Book tourist visa appointments for leisure travel, family visits, and short-term stays.',
    features: [
      'All European countries covered',
      'Schengen and non-Schengen visas',
      'Fast processing within 24 hours',
      'Document guidance included',
      'Multiple appointment slots available'
    ],
    price: 'From €80',
    processingTime: '15-20 working days',
    icon: '🏖️'
  },
  {
    title: 'Work Permit Appointments',
    description: 'Secure work visa appointments for employment opportunities abroad.',
    features: [
      'Work permit appointments',
      'Employment visa consultations',
      'Document verification support',
      'Employer liaison assistance',
      'Multiple country coverage'
    ],
    price: 'From €140',
    processingTime: '20-30 working days',
    icon: '💼'
  },
  {
    title: 'Study Visa Appointments',
    description: 'Academic visa appointments for students pursuing education abroad.',
    features: [
      'Student visa appointments',
      'University admission support',
      'Educational document guidance',
      'Scholarship application help',
      'Pre-departure assistance'
    ],
    price: 'From €99',
    processingTime: '15-25 working days',
    icon: '🎓'
  }
];

const additionalServices = [
  {
    title: 'Document Preparation',
    description: 'Complete document review and preparation service to ensure your application is perfect.',
    icon: '📋'
  },
  {
    title: 'Priority Booking',
    description: 'Express appointment booking service for urgent travel requirements.',
    icon: '⚡'
  },
  {
    title: 'Group Bookings',
    description: 'Special rates and coordination for family or group visa appointments.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Consultation Services',
    description: 'Expert visa consultation to choose the right visa type for your needs.',
    icon: '💬'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support via WhatsApp, email, and phone.',
    icon: '🕐'
  },
  {
    title: 'Post-Booking Support',
    description: 'Continued assistance after booking until you receive your visa.',
    icon: '🤝'
  }
];

const countries = [
  { name: 'France', flag: '🇫🇷', isSchengen: true },
  { name: 'Germany', flag: '🇩🇪', isSchengen: true },
  { name: 'Italy', flag: '🇮🇹', isSchengen: true },
  { name: 'Spain', flag: '🇪🇸', isSchengen: true },
  { name: 'Netherlands', flag: '🇳🇱', isSchengen: true },
  { name: 'Switzerland', flag: '🇨🇭', isSchengen: true },
  { name: 'Austria', flag: '🇦🇹', isSchengen: true },
  { name: 'Belgium', flag: '🇧🇪', isSchengen: true },
  { name: 'United Kingdom', flag: '🇬🇧', isSchengen: false },
  { name: 'USA', flag: '🇺🇸', isSchengen: false },
  { name: 'Canada', flag: '🇨🇦', isSchengen: false },
  { name: 'Australia', flag: '🇦🇺', isSchengen: false },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive visa appointment booking services for all your travel needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Appointment Services</h2>
            <p className="text-xl text-gray-600">Professional booking services for all visa types</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-2xl font-bold text-mustard-600">{service.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Processing</div>
                      <div className="text-sm font-medium text-gray-900">{service.processingTime}</div>
                    </div>
                  </div>
                  <Link 
                    href="/"
                    className="w-full bg-mustard-600 hover:bg-mustard-700 text-charcoal-900 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Book Appointment
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your visa journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Cover */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Countries We Cover</h2>
            <p className="text-xl text-gray-600">Visa appointment services for 35+ destinations worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <Link
                key={index}
                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}-visit-visa-appointment-delhi`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group"
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-mustard-600 transition-colors">
                  {country.name}
                </div>
                {country.isSchengen && (
                  <div className="text-xs text-blue-600 mt-1">Schengen</div>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/countries"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              <Globe className="h-5 w-5 mr-2" />
              View All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Processing</h3>
                    <p className="text-gray-600">Get your appointment booked within 24 hours with our efficient system.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                    <p className="text-gray-600">Your personal information is protected with enterprise-grade security.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                    <p className="text-gray-600">Our experienced team provides guidance throughout the entire process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ready to Get Started?</h3>
              <div className="space-y-4 text-center">
                <p className="text-gray-700">Join thousands of satisfied customers who trust us with their visa appointments.</p>
                <div className="text-3xl font-bold text-primary-600">98% Success Rate</div>
                <p className="text-sm text-gray-600">Based on 10,000+ successful bookings</p>
                <Link 
                  href="/"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Book Your Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
