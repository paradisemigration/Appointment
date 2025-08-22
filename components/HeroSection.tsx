'use client';

import { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';
import BookingModal from './BookingModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedVisa, setSelectedVisa] = useState('');

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your Visa Appointment
            <span className="text-primary-200"> with Ease</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Professional VFS appointment booking services for all European countries and major global destinations. 
            Minimal cost, maximum convenience.
          </p>
        </div>

        {/* Quick Search */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Country
              </label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500"
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
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500"
                value={selectedVisa}
                onChange={(e) => setSelectedVisa(e.target.value)}
              >
                <option value="">Select Visa Type</option>
                {VISA_TYPES.map((visa) => (
                  <option key={visa.id} value={visa.slug}>
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
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Select City</option>
                {ALL_CITIES.map((city) => (
                  <option key={city.id} value={city.slug}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button 
                className="w-full btn-primary h-12"
                onClick={() => setIsModalOpen(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-200">35+</div>
            <div className="text-primary-100">Countries Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-200">50+</div>
            <div className="text-primary-100">Cities Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-200">10,000+</div>
            <div className="text-primary-100">Successful Bookings</div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        preSelectedCountry={selectedCountry}
        preSelectedCity={selectedCity}
        preSelectedVisa={selectedVisa}
      />
    </section>
  );
}
