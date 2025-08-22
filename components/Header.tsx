'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { ALL_COUNTRIES } from '@/data/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">VFS Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsCountriesOpen(!isCountriesOpen)}
              >
                Countries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isCountriesOpen && (
                <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500">European Countries</div>
                  {ALL_COUNTRIES.filter(c => c.continent === 'Europe').map((country) => (
                    <Link
                      key={country.code}
                      href={`/countries/${country.name.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {country.flag} {country.name}
                    </Link>
                  ))}
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 border-t mt-2">Other Destinations</div>
                  {ALL_COUNTRIES.filter(c => c.continent !== 'Europe').map((country) => (
                    <Link
                      key={country.code}
                      href={`/countries/${country.name.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {country.flag} {country.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <button className="btn-primary">
              Book Appointment
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/countries" className="text-gray-700 hover:text-primary-600">
                Countries
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600">
                Contact
              </Link>
              <button className="btn-primary w-full">
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
