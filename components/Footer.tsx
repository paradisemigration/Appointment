'use client';

import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, Clock, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { ALL_COUNTRIES, VISA_TYPES } from '@/data/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const popularCountries = ALL_COUNTRIES.slice(0, 8);
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'All Countries', href: '/countries' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const supportInfo = [
    { icon: <Phone className="w-5 h-5" />, text: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: <Mail className="w-5 h-5" />, text: 'support@vfsportal.com', link: 'mailto:support@vfsportal.com' },
    { icon: <Clock className="w-5 h-5" />, text: '24/7 Support Available' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Global Service Coverage' },
  ];

  return (
    <footer className="bg-gradient-charcoal text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-300 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-mustard-500 to-mustard-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-charcoal-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">VFS Portal</h3>
                  <p className="text-gray-200 text-sm">Professional Visa Services</p>
                </div>
              </Link>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                Your trusted partner for professional visa appointment booking services.
                Expert guidance, minimal cost, and guaranteed results for 35+ countries worldwide.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-mustard-400 fill-current" />
                  <span className="text-gray-200">98% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-gray-200">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-mustard-400" />
                  <span className="text-gray-200">35+ Countries</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/1234567890" 
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:support@vfsportal.com"
                  className="w-10 h-10 bg-mustard-500 hover:bg-mustard-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Countries */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Popular Countries</h4>
              <div className="space-y-3">
                {popularCountries.map((country) => (
                  <Link
                    key={country.code}
                    href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="text-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </span>
                    <span>{country.name}</span>
                    {country.isSchengen && (
                      <span className="ml-2 text-xs bg-blue-500/30 px-2 py-1 rounded">
                        Schengen
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              <Link
                href="/countries"
                className="inline-flex items-center text-blue-300 hover:text-white font-medium mt-4 group"
              >
                View All Countries
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Support & Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Support & Services</h4>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                {supportInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-400">{item.icon}</div>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-blue-200 hover:text-white transition-colors duration-300"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-blue-200">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-2">
                <h5 className="font-semibold text-white mb-3">Visa Services</h5>
                {VISA_TYPES.map((visa) => (
                  <div key={visa.id} className="text-blue-200 text-sm">
                    {visa.name}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <h5 className="font-semibold text-white mb-2">Need Help?</h5>
                <p className="text-blue-200 text-sm mb-3">
                  Our experts are available 24/7 to assist you
                </p>
                <a 
                  href="https://wa.me/1234567890"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-blue-800/50 bg-blue-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-bold text-white mb-2">
                  Stay Updated with Visa Information
                </h4>
                <p className="text-blue-200">
                  Get the latest updates on visa requirements and appointment availability
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 lg:w-80"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 bg-blue-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-blue-200 text-sm text-center md:text-left">
                © {currentYear} VFS Portal. All rights reserved. 
                Professional visa appointment booking services worldwide.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="/terms" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Terms
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link 
                  href="/contact" 
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
