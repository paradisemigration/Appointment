'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

export default function SearchForm() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedVisa, setSelectedVisa] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCountry || !selectedVisa || !selectedCity) {
      setError('Please select all fields');
      return;
    }

    setIsSearching(true);
    setError('');
    
    try {
      const countrySlug = selectedCountry.toLowerCase().replace(/\s+/g, '-');
      const visaType = VISA_TYPES.find(v => v.name === selectedVisa);
      const city = ALL_CITIES.find(c => c.name === selectedCity);
      
      if (!visaType || !city) {
        setError('Invalid selection. Please try again.');
        setIsSearching(false);
        return;
      }

      const appointmentUrl = `/${countrySlug}/appointment/${visaType.slug}/${city.slug}`;
      router.push(appointmentUrl);
    } catch (err) {
      console.error('Navigation error:', err);
      setError('An error occurred. Please try again.');
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Find Your Perfect Appointment
      </h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700 text-center">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <MapPin className="inline w-4 h-4 mr-2 text-charcoal-500" />
            Destination Country
          </label>
          <select 
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white placeholder-gray-400 text-gray-900 focus:border-mustard-500 focus:ring-2 focus:ring-mustard-500/20 transition-all duration-300"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            required
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
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white placeholder-gray-400 text-gray-900 focus:border-mustard-500 focus:ring-2 focus:ring-mustard-500/20 transition-all duration-300"
            value={selectedVisa}
            onChange={(e) => setSelectedVisa(e.target.value)}
            required
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
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white placeholder-gray-400 text-gray-900 focus:border-mustard-500 focus:ring-2 focus:ring-mustard-500/20 transition-all duration-300"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            required
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
            type="submit"
            disabled={isSearching}
            className="w-full bg-gradient-to-r from-mustard-500 to-mustard-600 hover:from-mustard-600 hover:to-mustard-700 text-charcoal-900 font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-mustard-500 focus:ring-offset-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSearching ? (
              <>
                <div className="w-5 h-5 border-2 border-charcoal-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                <span className="text-sm font-medium">Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Search</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
