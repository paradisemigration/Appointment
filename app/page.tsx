'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, Globe, Clock, Users, Star, ArrowRight, CheckCircle, Phone, Play, Shield, Award, Zap, TrendingUp } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

export default function Home() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedVisa, setSelectedVisa] = useState('');

  const handleSearch = () => {
    if (selectedCountry && selectedVisa && selectedCity) {
      const countrySlug = selectedCountry.toLowerCase().replace(/\s+/g, '-');
      const visaSlug = VISA_TYPES.find(v => v.name === selectedVisa)?.slug || 'visit';
      const citySlug = ALL_CITIES.find(c => c.name === selectedCity)?.slug || 'delhi';
      const url = `/${countrySlug}/appointment/${visaSlug}/${citySlug}`;
      router.push(url);
    }
  };

  const popularCountries = ALL_COUNTRIES.slice(0, 8);

  return (
    <div className="w-full">
      {/* Professional Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-hero pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-charcoal-600/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-charcoal-800/30"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-mustard-400/20 to-mustard-600/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-r from-charcoal-500/15 to-charcoal-700/15 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-r from-charcoal-600/10 to-mustard-600/10 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <div className="mb-12">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-mustard-500/10 backdrop-blur-md border border-mustard-500/20 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-mustard-400 mr-2" />
              <span className="text-white font-medium">Trusted by 10,000+ customers worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Professional</span>
              <span className="block text-gradient bg-gradient-to-r from-mustard-400 via-mustard-500 to-mustard-600 bg-clip-text text-transparent">
                Visa Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Book appointments for <span className="text-mustard-400 font-semibold">35+ countries</span> with
              expert guidance, <span className="text-mustard-300 font-semibold">98% success rate</span>, and
              guaranteed slots within <span className="text-mustard-400 font-semibold">24 hours</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="#search"
                className="group relative overflow-hidden bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-charcoal-900 font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:shadow-glow inline-flex items-center justify-center"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Appointment Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/services"
                className="group flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl"
              >
                <Play className="w-6 h-6 mr-3" />
                Learn How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-mustard-400 mb-2">98%</div>
                <div className="text-gray-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-mustard-400 mb-2">35+</div>
                <div className="text-gray-200 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-mustard-400 mb-2">50+</div>
                <div className="text-gray-200 text-sm">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-mustard-400 mb-2">24h</div>
                <div className="text-gray-200 text-sm">Booking Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div id="search" className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Your Perfect Appointment
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline w-4 h-4 mr-2 text-charcoal-500" />
                  Destination Country
                </label>
                <select
                  className="input-field"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {ALL_COUNTRIES.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Calendar className="inline w-4 h-4 mr-2 text-charcoal-500" />
                  Visa Type
                </label>
                <select
                  className="input-field"
                  value={selectedVisa}
                  onChange={(e) => setSelectedVisa(e.target.value)}
                >
                  <option value="">Select Visa Type</option>
                  {VISA_TYPES.map((visa) => (
                    <option key={visa.id} value={visa.name}>
                      {visa.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <Search className="inline w-4 h-4 mr-2 text-charcoal-500" />
                  Your City
                </label>
                <select
                  className="input-field"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {ALL_CITIES.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  onClick={handleSearch}
                  disabled={!selectedCountry || !selectedVisa || !selectedCity}
                  aria-label="Search visa appointments"
                >
                  <Search className="w-5 h-5 mx-auto" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Our Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional visa appointment booking service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-mustard-500 to-mustard-600 text-charcoal-900 shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">Appointments confirmed within 24 hours with our automated system</p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-charcoal-500 to-charcoal-600 text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">98% Success Rate</h3>
              <p className="text-gray-600 leading-relaxed">Proven track record with expert document review and guidance</p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-mustard-600 to-mustard-700 text-charcoal-900 shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">24/7 WhatsApp support from certified visa consultants</p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-charcoal-600 to-charcoal-700 text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Coverage</h3>
              <p className="text-gray-600 leading-relaxed">Services for 35+ countries from 50+ major cities worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick access to the most requested visa appointment services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCountries.map((country, index) => (
              <Link
                key={country.code}
                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="country-card">
                  <div className="text-center">
                    <div className="text-5xl mb-4 country-flag">
                      {country.flag}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mustard-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                    {country.isSchengen && (
                      <span className="badge-primary mb-4">
                        Schengen
                      </span>
                    )}
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-4 h-4 text-mustard-600" />
                        <span>15-20 days</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-mustard-500 fill-current" />
                        <span>98% Success</span>
                      </div>
                    </div>
                    <div className="text-mustard-600 group-hover:text-mustard-700 font-semibold">
                      View Services →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/countries"
              className="btn-primary"
            >
              <Globe className="w-5 h-5 mr-2" />
              View All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your visa appointment has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-charcoal-500 to-charcoal-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Globe className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mustard-500 text-charcoal-900 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Destination</h3>
              <p className="text-gray-600 leading-relaxed">Select your target country and visa type from our comprehensive list</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-charcoal-600 to-charcoal-700 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mustard-500 text-charcoal-900 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Our Experts</h3>
              <p className="text-gray-600 leading-relaxed">Reach out via WhatsApp or our booking form with your requirements</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-mustard-500 to-mustard-600 text-charcoal-900 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mustard-500 text-charcoal-900 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Document Review</h3>
              <p className="text-gray-600 leading-relaxed">Our experts review your documents and provide guidance for success</p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-charcoal-700 to-charcoal-800 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mustard-500 text-charcoal-900 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Appointment</h3>
              <p className="text-gray-600 leading-relaxed">Receive confirmed appointment slot within 24 hours guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-mustard-400 mb-2">10,000+</div>
              <div className="text-gray-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-mustard-400 mb-2">35+</div>
              <div className="text-gray-200">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-mustard-400 mb-2">98%</div>
              <div className="text-gray-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-mustard-400 mb-2">24h</div>
              <div className="text-gray-200">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-mustard-300/20 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have successfully booked their visa appointments with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#search"
                className="inline-flex items-center bg-white text-charcoal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Link>
              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center bg-charcoal-600 hover:bg-charcoal-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
