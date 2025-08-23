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

      {/* Rest of homepage content... */}
    </div>
  );
}
