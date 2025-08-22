'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe, Phone, Calendar, Search } from 'lucide-react';
import { ALL_COUNTRIES, VISA_TYPES } from '@/data/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const europeanCountries = ALL_COUNTRIES.filter(c => c.continent === 'Europe').slice(0, 12);
  const otherCountries = ALL_COUNTRIES.filter(c => c.continent !== 'Europe');

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Countries', href: '/countries', hasDropdown: true },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-charcoal-500/95 backdrop-blur-md shadow-medium border-b border-charcoal-600/50'
        : 'bg-gradient-charcoal backdrop-blur-sm shadow-soft'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-mustard-500 to-mustard-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-6 h-6 text-charcoal-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-mustard-300 transition-colors duration-300">
                VFS Portal
              </h1>
              <p className="text-xs text-gray-200 hidden sm:block">Professional Visa Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsCountriesOpen(true)}
                    onMouseLeave={() => setIsCountriesOpen(false)}
                  >
                    <button className={`nav-link flex items-center space-x-1 ${
                      pathname === item.href || pathname.startsWith('/countries/') ? 'active' : ''
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        isCountriesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Countries Mega Menu */}
                    <div className={`absolute top-full left-0 w-screen max-w-4xl transform -translate-x-1/4 transition-all duration-300 ${
                      isCountriesOpen 
                        ? 'opacity-100 visible translate-y-2' 
                        : 'opacity-0 invisible translate-y-4'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-strong border border-gray-200 p-8 mt-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* European Countries */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                              <span className="text-mustard-600 mr-2">🇪🇺</span>
                              European Countries
                            </h3>
                            <div className="grid grid-cols-2 gap-2">
                              {europeanCountries.map((country) => (
                                <Link
                                  key={country.code}
                                  href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-mustard-50 hover:text-mustard-600 transition-colors duration-300 group"
                                >
                                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                    {country.flag}
                                  </span>
                                  <span className="text-sm font-medium">{country.name}</span>
                                  {country.isSchengen && (
                                    <span className="text-xs bg-mustard-100 text-mustard-700 px-1.5 py-0.5 rounded">
                                      Schengen
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/countries"
                              className="inline-flex items-center text-mustard-600 hover:text-mustard-700 font-medium mt-4 group"
                            >
                              View all European countries
                              <ChevronDown className="w-4 h-4 ml-1 rotate-270 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>

                          {/* Other Countries */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                              <span className="text-gray-600 mr-2">🌍</span>
                              Other Countries
                            </h3>
                            <div className="space-y-2">
                              {otherCountries.map((country) => (
                                <Link
                                  key={country.code}
                                  href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors duration-300 group"
                                >
                                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                    {country.flag}
                                  </span>
                                  <span className="font-medium">{country.name}</span>
                                </Link>
                              ))}
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
                              <div className="space-y-2">
                                <Link href="/services" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-mustard-600 transition-colors duration-300">
                                  <Calendar className="w-4 h-4" />
                                  <span>All Services</span>
                                </Link>
                                <a href="https://wa.me/1234567890" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-mustard-600 transition-colors duration-300">
                                  <Phone className="w-4 h-4" />
                                  <span>WhatsApp Support</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/1234567890"
              className="text-white hover:text-mustard-300 hover:bg-white/10 font-medium py-3 px-6 rounded-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Support
            </a>
            <Link href="/contact" className="btn-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-white/20">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsCountriesOpen(!isCountriesOpen)}
                        className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-white/10 hover:text-orange-300 rounded-lg transition-colors duration-300"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          isCountriesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {isCountriesOpen && (
                        <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-sky-200 px-3 py-1">European Countries</p>
                            {europeanCountries.slice(0, 6).map((country) => (
                              <Link
                                key={country.code}
                                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center space-x-2 p-2 text-sm text-white hover:bg-white/10 hover:text-mustard-300 rounded-lg transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                              </Link>
                            ))}
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-sky-200 px-3 py-1">Other Countries</p>
                            {otherCountries.map((country) => (
                              <Link
                                key={country.code}
                                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center space-x-2 p-2 text-sm text-white hover:bg-white/10 hover:text-mustard-300 rounded-lg transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                              </Link>
                            ))}
                          </div>
                          
                          <Link
                            href="/countries"
                            className="block p-2 text-sm text-mustard-400 hover:bg-white/10 hover:text-mustard-300 rounded-lg transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            View All Countries →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block p-3 text-white hover:bg-white/10 hover:text-mustard-300 rounded-lg transition-colors duration-300 font-medium ${
                        pathname === item.href ? 'bg-white/10 text-mustard-300' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
              <a 
                href="https://wa.me/1234567890"
                className="w-full btn-secondary flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Support
              </a>
              <Link 
                href="/contact" 
                className="w-full btn-primary flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
