'use client';

import Link from 'next/link';
import { Clock, Users, Star } from 'lucide-react';
import { ALL_COUNTRIES } from '@/data/constants';

export default function CountryGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your Destination
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide visa appointment booking services for all major destinations. 
            Select your preferred country to get started.
          </p>
        </div>

        {/* European Countries */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🇪🇺 European Countries (Schengen & Others)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ALL_COUNTRIES.filter(country => country.continent === 'Europe').map((country) => (
              <Link
                key={country.code}
                href={`/countries/${country.name.toLowerCase()}`}
                className="group"
              >
                <div className="card hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{country.name}</h4>
                    {country.isSchengen && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                        Schengen
                      </span>
                    )}
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>15-20 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Destinations */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌍 Other Popular Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ALL_COUNTRIES.filter(country => country.continent !== 'Europe').map((country) => (
              <Link
                key={country.code}
                href={`/countries/${country.name.toLowerCase()}`}
                className="group"
              >
                <div className="card hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{country.flag}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{country.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">Multiple visa types available</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 days</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          <span>4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary">
            View All Countries
          </button>
        </div>
      </div>
    </section>
  );
}
