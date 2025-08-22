'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, Globe, Clock, Users } from 'lucide-react';
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
      
      window.location.href = `/${countrySlug}-${visaSlug}-visa-appointment-${citySlug}`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-8">🌍</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              VFS Appointment Portal
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional visa appointment booking services for all European countries and major global destinations
            </p>
          </div>

          {/* Quick Search */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Country
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Visa Type
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Search className="inline h-4 w-4 mr-1" />
                  Your City
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 h-12"
                  onClick={handleSearch}
                  disabled={!selectedCountry || !selectedVisa || !selectedCity}
                >
                  Search Appointments
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-200">35+</div>
              <div className="text-blue-100">Countries Covered</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-200">50+</div>
              <div className="text-blue-100">Cities Served</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-200">10,000+</div>
              <div className="text-blue-100">Successful Bookings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick access to the most requested visa appointment services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_COUNTRIES.slice(0, 8).map((country) => (
              <Link
                key={country.code}
                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}-visit-visa-appointment-delhi`}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{country.name}</h3>
                  {country.isSchengen && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                      Schengen
                    </span>
                  )}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>15-20 days</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/countries"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <Globe className="h-5 w-5 mr-2" />
              View All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, reliable, and hassle-free visa appointment booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Processing</h3>
              <p className="text-gray-600">Quick appointment booking within 24 hours with minimal waiting time</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">98% Success Rate</h3>
              <p className="text-gray-600">Proven track record with expert guidance throughout the process</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Coverage</h3>
              <p className="text-gray-600">Services for 35+ countries across Europe and major destinations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
