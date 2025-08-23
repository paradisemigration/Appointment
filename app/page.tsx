'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Globe, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Shield, 
  Award, 
  Zap, 
  Calendar,
  Search,
  MapPin
} from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES, POPULAR_DESTINATIONS, BUSINESS_INFO } from '@/data/constants';

export default function HomePage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVisa, setSelectedVisa] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');

  // Filter cities based on user location
  const getFilteredCities = () => {
    // For now, show all cities. In production, you could geo-filter
    return ALL_CITIES;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCountry || !selectedVisa || !selectedCity) {
      setSearchMessage('Please select all fields to continue');
      setTimeout(() => setSearchMessage(''), 3000);
      return;
    }

    setIsLoading(true);
    setSearchMessage('Finding the best appointment slots...');

    // Get country and visa slugs
    const country = ALL_COUNTRIES.find(c => c.code === selectedCountry);
    const visa = VISA_TYPES.find(v => v.id === selectedVisa);
    const city = ALL_CITIES.find(c => c.id === selectedCity);

    if (country && visa && city) {
      // Create SEO-friendly URL
      const url = `/${country.slug}-${visa.slug}-appointment-${city.slug}`;
      
      setTimeout(() => {
        setIsLoading(false);
        router.push(url);
      }, 1500);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I need help booking a visa appointment. Country: ${selectedCountry || 'Not selected'}, Visa: ${selectedVisa || 'Not selected'}, City: ${selectedCity || 'Not selected'}`);
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold" style={{ margin: 0, color: 'white' }}>
                🌍 {BUSINESS_INFO.name}
              </h1>
              <p style={{ margin: 0, opacity: 0.9, color: 'white' }}>{BUSINESS_INFO.tagline}</p>
            </div>
            <nav className="nav">
              <a href="/" className="nav-link">Home</a>
              <a href="/services" className="nav-link">Services</a>
              <a href="/countries" className="nav-link">Countries</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
              Professional Visa Services
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem' }}>
              Book appointments for 35+ countries with expert guidance, fast processing, and 98% success rate. 
              Trusted by thousands of travelers worldwide.
            </p>
            
            {/* Trust Indicators */}
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">35+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Booking Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa', position: 'relative', marginTop: '-2rem', zIndex: 3 }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <Search size={48} style={{ color: '#3498db', margin: '0 auto 1rem' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Find Your Appointment</h2>
              <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
                Select your destination, visa type, and city to get started
              </p>
            </div>

            {searchMessage && (
              <div className={`alert ${searchMessage.includes('Please') ? 'alert-warning' : 'alert-info'}`} style={{ marginBottom: '2rem' }}>
                {isLoading && <span className="spinner"></span>}
                {searchMessage}
              </div>
            )}

            <form onSubmit={handleSearch}>
              <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
                {/* Country Selection */}
                <div className="form-group">
                  <label className="form-label">
                    <Globe size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Select Country
                  </label>
                  <select 
                    className="form-select"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    disabled={isLoading}
                  >
                    <option value="">Choose Destination</option>
                    <optgroup label="🇪🇺 European Countries">
                      {ALL_COUNTRIES.filter(c => c.continent === 'Europe').map(country => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🌍 Other Destinations">
                      {ALL_COUNTRIES.filter(c => c.continent !== 'Europe').map(country => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Visa Type Selection */}
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Select Visa Type
                  </label>
                  <select 
                    className="form-select"
                    value={selectedVisa}
                    onChange={(e) => setSelectedVisa(e.target.value)}
                    disabled={isLoading}
                  >
                    <option value="">Choose Visa Type</option>
                    {VISA_TYPES.map(visa => (
                      <option key={visa.id} value={visa.id}>{visa.name}</option>
                    ))}
                  </select>
                </div>

                {/* City Selection */}
                <div className="form-group">
                  <label className="form-label">
                    <MapPin size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Select Your City
                  </label>
                  <select 
                    className="form-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={isLoading}
                  >
                    <option value="">Choose Your City</option>
                    <optgroup label="🇮🇳 India">
                      {getFilteredCities().filter(c => c.country === 'IN').map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🇵🇰 Pakistan">
                      {getFilteredCities().filter(c => c.country === 'PK').map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🏴󠁧󠁢󠁥󠁮󠁧󠁿 Gulf Countries">
                      {getFilteredCities().filter(c => ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'].includes(c.country)).map(city => (
                        <option key={city.id} value={city.id}>{city.name}, {city.region}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🌏 South Asia">
                      {getFilteredCities().filter(c => ['NP', 'BD'].includes(c.country)).map(city => (
                        <option key={city.id} value={city.id}>{city.name}, {city.region}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={!selectedCountry || !selectedVisa || !selectedCity || isLoading}
                  style={{ marginRight: '1rem', marginBottom: '1rem' }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Finding Appointments...
                    </>
                  ) : (
                    <>
                      <Search size={20} style={{ marginRight: '0.5rem' }} />
                      Find Appointments
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  className="whatsapp-btn"
                  onClick={openWhatsApp}
                  style={{ marginBottom: '1rem' }}
                >
                  <Phone size={20} />
                  WhatsApp Support
                </button>
              </div>

              {/* Selection Summary */}
              {(selectedCountry || selectedVisa || selectedCity) && (
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  backgroundColor: '#e7f3ff', 
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: '#004085'
                }}>
                  <strong>Selected:</strong> {' '}
                  {selectedCountry ? ALL_COUNTRIES.find(c => c.code === selectedCountry)?.name : 'Country not selected'} | {' '}
                  {selectedVisa ? VISA_TYPES.find(v => v.id === selectedVisa)?.name : 'Visa type not selected'} | {' '}
                  {selectedCity ? ALL_CITIES.find(c => c.id === selectedCity)?.name : 'City not selected'}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Our Service?</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
              We provide professional visa appointment booking services with unmatched reliability and success rates
            </p>
          </div>

          <div className="grid grid-4">
            <div className="card text-center">
              <Zap size={48} style={{ color: '#3498db', margin: '0 auto 1rem' }} />
              <h3>Fast Processing</h3>
              <p>Get your appointment booked within 24 hours with our automated system and expert team.</p>
            </div>

            <div className="card text-center">
              <Shield size={48} style={{ color: '#27ae60', margin: '0 auto 1rem' }} />
              <h3>98% Success Rate</h3>
              <p>Proven track record with expert document review, guidance, and appointment booking success.</p>
            </div>

            <div className="card text-center">
              <Users size={48} style={{ color: '#e74c3c', margin: '0 auto 1rem' }} />
              <h3>Expert Support</h3>
              <p>24/7 WhatsApp support from certified visa consultants and booking specialists.</p>
            </div>

            <div className="card text-center">
              <Award size={48} style={{ color: '#f39c12', margin: '0 auto 1rem' }} />
              <h3>Trusted Service</h3>
              <p>Trusted by 10,000+ clients worldwide with transparent pricing and reliable service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Popular Destinations</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Most requested visa appointments from our clients
            </p>
          </div>

          <div className="destinations-grid">
            {POPULAR_DESTINATIONS.map((dest, index) => {
              const country = ALL_COUNTRIES.find(c => c.slug === dest.country);
              const visa = VISA_TYPES.find(v => v.slug === dest.visa);
              
              return (
                <div key={index} className="destination-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{country?.flag}</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{country?.name}</h3>
                  <div className="badge badge-success" style={{ marginBottom: '1rem' }}>
                    {visa?.name}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.5rem' }}>
                    Popular cities: {dest.cities.join(', ')}
                  </p>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      setSelectedCountry(country?.code || '');
                      setSelectedVisa(visa?.id || '');
                      document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <ArrowRight size={16} style={{ marginRight: '0.5rem' }} />
                    Select This
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How It Works</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Simple 4-step process to book your visa appointment
            </p>
          </div>

          <div className="grid grid-4">
            <div className="text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#3498db', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem', 
                fontSize: '1.5rem', 
                fontWeight: 'bold' 
              }}>
                1
              </div>
              <h3>Select Details</h3>
              <p>Choose your country, visa type, and city from our comprehensive list of 35+ countries.</p>
            </div>

            <div className="text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#27ae60', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem', 
                fontSize: '1.5rem', 
                fontWeight: 'bold' 
              }}>
                2
              </div>
              <h3>Submit Form</h3>
              <p>Fill out our secure booking form with your details and preferred appointment dates.</p>
            </div>

            <div className="text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#e74c3c', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem', 
                fontSize: '1.5rem', 
                fontWeight: 'bold' 
              }}>
                3
              </div>
              <h3>Expert Review</h3>
              <p>Our visa experts review your application and book the best available appointment slot.</p>
            </div>

            <div className="text-center">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#f39c12', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem', 
                fontSize: '1.5rem', 
                fontWeight: 'bold' 
              }}>
                4
              </div>
              <h3>Confirmation</h3>
              <p>Receive appointment confirmation via WhatsApp and email with all necessary details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#2c3e50', color: 'white' }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'white' }}>Trusted by Thousands</h2>
            <div className="flex justify-center items-center" style={{ gap: '3rem', flexWrap: 'wrap' }}>
              <div className="flex items-center" style={{ gap: '0.5rem' }}>
                <CheckCircle size={24} style={{ color: '#27ae60' }} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center" style={{ gap: '0.5rem' }}>
                <CheckCircle size={24} style={{ color: '#27ae60' }} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center" style={{ gap: '0.5rem' }}>
                <CheckCircle size={24} style={{ color: '#27ae60' }} />
                <span>Money Back Guarantee</span>
              </div>
              <div className="flex items-center" style={{ gap: '0.5rem' }}>
                <CheckCircle size={24} style={{ color: '#27ae60' }} />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>🌍 VFS Appointments</h3>
              <p style={{ opacity: 0.8 }}>Professional visa appointment booking services for 35+ countries worldwide.</p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="/services">Our Services</a>
                <a href="/countries">All Countries</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Popular Visas</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="/schengen-visa">Schengen Visa</a>
                <a href="/usa-visa">USA Visa</a>
                <a href="/uk-visa">UK Visa</a>
                <a href="/canada-visa">Canada Visa</a>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8 }}>
                <p>📧 {BUSINESS_INFO.email}</p>
                <p>📞 {BUSINESS_INFO.phone}</p>
                <p>📍 {BUSINESS_INFO.address}</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #34495e' }}>
            <p style={{ opacity: 0.8 }}>
              &copy; 2024 {BUSINESS_INFO.name}. All rights reserved. | 
              <a href="/privacy" style={{ marginLeft: '0.5rem' }}>Privacy Policy</a> | 
              <a href="/terms" style={{ marginLeft: '0.5rem' }}>Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
