'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, Globe, Clock, Users, Star, ArrowRight, CheckCircle, Phone, Play, Shield, Award, Zap, TrendingUp, ChevronDown } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedVisa, setSelectedVisa] = useState('');

  const handleSearch = () => {
    if (selectedCountry && selectedVisa && selectedCity) {
      const countrySlug = selectedCountry.toLowerCase().replace(/\s+/g, '-');
      const visaSlug = VISA_TYPES.find(v => v.name === selectedVisa)?.slug || 'visit';
      const citySlug = ALL_CITIES.find(c => c.name === selectedCity)?.slug || 'delhi';
      
      window.location.href = `/${countrySlug}/${visaSlug}-visa-appointment/${citySlug}`;
    }
  };

  const popularCountries = ALL_COUNTRIES.slice(0, 8);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Stunning Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
          
          {/* Animated Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-xl animate-pulse-slow"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40h40v-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Hero Content */}
          <div className="mb-16">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">Trusted by 10,000+ customers worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-slide-up">
              <span className="block">Professional</span>
              <span className="block text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Visa Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
              Book appointments for <span className="text-blue-300 font-semibold">35+ countries</span> with 
              expert guidance, <span className="text-green-300 font-semibold">98% success rate</span>, and 
              guaranteed slots within <span className="text-purple-300 font-semibold">24 hours</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Link 
                href="#search"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:shadow-glow-lg inline-flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Appointment Now
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.9s'}}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">35+</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24h</div>
                <div className="text-gray-300 text-sm">Booking Time</div>
              </div>
            </div>
          </div>

          {/* Advanced Search Form */}
          <div id="search" className="max-w-5xl mx-auto animate-slide-up" style={{animationDelay: '1.2s'}}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Find Your Perfect Appointment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    <MapPin className="inline w-4 h-4 mr-2" />
                    Destination Country
                  </label>
                  <select 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="" className="text-gray-900">Select Country</option>
                    {ALL_COUNTRIES.map((country) => (
                      <option key={country.code} value={country.name} className="text-gray-900">
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Visa Type
                  </label>
                  <select 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    value={selectedVisa}
                    onChange={(e) => setSelectedVisa(e.target.value)}
                  >
                    <option value="" className="text-gray-900">Select Visa Type</option>
                    {VISA_TYPES.map((visa) => (
                      <option key={visa.id} value={visa.name} className="text-gray-900">
                        {visa.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    <Search className="inline w-4 h-4 mr-2" />
                    Your City
                  </label>
                  <select 
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="" className="text-gray-900">Select City</option>
                    {ALL_CITIES.map((city) => (
                      <option key={city.id} value={city.name} className="text-gray-900">
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    onClick={handleSearch}
                    disabled={!selectedCountry || !selectedVisa || !selectedCity}
                  >
                    <Search className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Our Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional visa appointment booking service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Appointments confirmed within 24 hours with our automated system',
                gradient: 'from-yellow-500 to-orange-600',
                delay: '0s'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: '98% Success Rate',
                description: 'Proven track record with expert document review and guidance',
                gradient: 'from-green-500 to-emerald-600',
                delay: '0.2s'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 WhatsApp support from certified visa consultants',
                gradient: 'from-blue-500 to-purple-600',
                delay: '0.4s'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Global Coverage',
                description: 'Services for 35+ countries from 50+ major cities worldwide',
                gradient: 'from-purple-500 to-pink-600',
                delay: '0.6s'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group text-center animate-fade-in" 
                style={{animationDelay: feature.delay}}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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

      {/* Popular Countries Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
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
                className="group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-200">
                  <div className="text-center">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                    {country.isSchengen && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4">
                        Schengen
                      </span>
                    )}
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>15-20 days</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>98% Success</span>
                      </div>
                    </div>
                    <div className="text-blue-600 group-hover:text-blue-700 font-semibold">
                      View Services →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link 
              href="/countries"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your visa appointment has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Choose Destination',
                description: 'Select your target country and visa type from our comprehensive list',
                icon: <Globe className="w-8 h-8" />
              },
              {
                step: 2,
                title: 'Contact Our Experts',
                description: 'Reach out via WhatsApp or our booking form with your requirements',
                icon: <Phone className="w-8 h-8" />
              },
              {
                step: 3,
                title: 'Document Review',
                description: 'Our experts review your documents and provide guidance for success',
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                step: 4,
                title: 'Get Your Appointment',
                description: 'Receive confirmed appointment slot within 24 hours guaranteed',
                icon: <Calendar className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="text-center animate-fade-in" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have successfully booked their visa appointments with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#search"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Link>
              <a 
                href="https://wa.me/1234567890" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
