'use client';

import { useState } from 'react';
import { Search, MapPin, Globe, Users, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { ALL_CITIES, BUSINESS_INFO } from '@/data/constants';
import MobileHeader from '@/components/MobileHeader';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function CitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = [
    'All',
    'India',
    'Pakistan', 
    'UAE',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
    'Nepal',
    'Bangladesh'
  ];

  const getCountryName = (countryCode: string) => {
    const countryMap: { [key: string]: string } = {
      'IN': 'India',
      'PK': 'Pakistan',
      'AE': 'UAE',
      'SA': 'Saudi Arabia',
      'QA': 'Qatar',
      'KW': 'Kuwait',
      'BH': 'Bahrain',
      'OM': 'Oman',
      'NP': 'Nepal',
      'BD': 'Bangladesh'
    };
    return countryMap[countryCode] || countryCode;
  };

  const filteredCities = ALL_CITIES.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         city.region.toLowerCase().includes(searchTerm.toLowerCase());
    const cityCountry = getCountryName(city.country);
    const matchesRegion = selectedRegion === 'All' || cityCountry === selectedRegion;
    return matchesSearch && matchesRegion && city.isActive;
  });

  // Group cities by country
  const citiesByCountry = filteredCities.reduce((acc, city) => {
    const countryName = getCountryName(city.country);
    if (!acc[countryName]) {
      acc[countryName] = [];
    }
    acc[countryName].push(city);
    return acc;
  }, {} as { [key: string]: typeof ALL_CITIES });

  const getCountryFlag = (countryCode: string) => {
    const flagMap: { [key: string]: string } = {
      'IN': '🇮🇳',
      'PK': '🇵🇰',
      'AE': '🇦🇪',
      'SA': '🇸🇦',
      'QA': '🇶🇦',
      'KW': '🇰🇼',
      'BH': '🇧🇭',
      'OM': '🇴🇲',
      'NP': '🇳🇵',
      'BD': '🇧🇩'
    };
    return flagMap[countryCode] || '🌍';
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <MobileHeader currentPage="/cities" />

      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 40%, rgba(241, 196, 15, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(241, 196, 15, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 18s ease-in-out infinite'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(241, 196, 15, 0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: '500'
            }}>
              <MapPin size={16} style={{ color: 'var(--accent-color)' }} />
              75+ Cities Covered
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: '800',
              marginBottom: '1.5rem', 
              color: 'white',
              lineHeight: '1.1'
            }}>
              Visa Services in Your City
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
              marginBottom: '2rem', 
              opacity: 0.95, 
              maxWidth: '800px', 
              margin: '0 auto 2rem',
              lineHeight: '1.4'
            }}>
              Professional visa appointment booking services available in 
              <strong> India</strong>, <strong>Pakistan</strong>, <strong>Gulf countries</strong>, 
              <strong> Nepal</strong>, and <strong>Bangladesh</strong>
            </p>

            {/* Stats */}
            <div className="stats" style={{ marginBottom: '2rem' }}>
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-color)' }}>75+</span>
                <span className="stat-label">Cities Covered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-color)' }}>5</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-color)' }}>24h</span>
                <span className="stat-label">Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ 
        padding: 'clamp(2rem, 5vw, 3rem) 0', 
        backgroundColor: 'var(--background-color)',
        marginTop: '-2rem',
        position: 'relative',
        zIndex: 3
      }}>
        <div className="container">
          <div className="card" style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
          }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Find Your City</h2>
              <p style={{ color: 'var(--text-muted)' }}>Search from our comprehensive list of service locations</p>
            </div>

            <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">Search Cities</label>
                <div style={{ position: 'relative' }}>
                  <Search size={20} style={{ 
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)'
                  }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Search by city name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Filter by Country</label>
                <select
                  className="form-select"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ 
              textAlign: 'center',
              fontSize: '0.9rem',
              color: 'var(--text-muted)'
            }}>
              Showing {filteredCities.length} cities • All locations offer 24/7 service
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          {Object.entries(citiesByCountry).map(([countryName, cities]) => (
            <div key={countryName} style={{ marginBottom: '4rem' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ 
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                  color: 'var(--primary-color)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>
                    {getCountryFlag(cities[0].country)}
                  </span>
                  {countryName}
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  {cities.length} cities • Professional visa services available
                </p>
              </div>

              <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                {cities.map(city => (
                  <div key={city.id} className="card" style={{
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(241, 196, 15, 0.1)',
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
                  }}>
                    <div style={{ 
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      boxShadow: '0 8px 20px rgba(241, 196, 15, 0.3)'
                    }}>
                      <MapPin size={24} style={{ color: 'var(--primary-color)' }} />
                    </div>

                    <h3 style={{ 
                      color: 'var(--primary-color)',
                      marginBottom: '0.5rem',
                      fontSize: '1.25rem'
                    }}>
                      {city.name}
                    </h3>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ 
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.25rem'
                      }}>
                        {city.region}
                      </div>
                      <div className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                        Service Available
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <div style={{ marginBottom: '0.25rem' }}>
                        ✓ VFS Center Access
                      </div>
                      <div style={{ marginBottom: '0.25rem' }}>
                        ✓ 24/7 Support
                      </div>
                      <div>
                        ✓ Expert Guidance
                      </div>
                    </div>

                    <a 
                      href={`/france-visit-appointment-${city.slug}`}
                      className="btn btn-primary btn-sm"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                        textDecoration: 'none',
                        width: '100%'
                      }}
                    >
                      <ArrowRight size={14} style={{ marginRight: '0.5rem' }} />
                      Book from {city.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredCities.length === 0 && (
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                No cities found
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Try adjusting your search terms or filter options
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedRegion('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Service Coverage */}
      <section style={{ 
        padding: 'clamp(3rem, 6vw, 5rem) 0', 
        backgroundColor: 'var(--light-bg)'
      }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              Complete Service Coverage
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Professional visa services available in all major cities
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            <div className="card text-center">
              <Globe size={48} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                All Major Cities
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Complete coverage in India, Pakistan, Gulf countries, Nepal, and Bangladesh.
              </p>
            </div>

            <div className="card text-center">
              <Users size={48} style={{ color: 'var(--success-color)', margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Local Expertise
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Dedicated teams in each city with local knowledge and embassy connections.
              </p>
            </div>

            <div className="card text-center">
              <Clock size={48} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                24/7 Availability
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Round-the-clock support and service available in all covered cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #34495e 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Can't Find Your City?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Contact us and we'll help you get visa appointment services in your location
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/contact"
                className="btn btn-primary btn-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  textDecoration: 'none'
                }}
              >
                <MapPin size={20} style={{ marginRight: '0.5rem' }} />
                Contact Us
              </a>
              <a 
                href="/"
                className="btn btn-secondary btn-lg"
                style={{ textDecoration: 'none' }}
              >
                <Search size={20} style={{ marginRight: '0.5rem' }} />
                Find Appointments
              </a>
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
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Popular Cities</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="/france-visit-appointment-delhi">Delhi Services</a>
                <a href="/germany-work-appointment-mumbai">Mumbai Services</a>
                <a href="/usa-visit-appointment-bangalore">Bangalore Services</a>
                <a href="/uk-study-appointment-chennai">Chennai Services</a>
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
          
          <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <p style={{ opacity: 0.8 }}>
              &copy; 2024 {BUSINESS_INFO.name}. All rights reserved. | 
              <a href="/privacy" style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}>Privacy Policy</a> | 
              <a href="/terms" style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}>Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget customMessage="Hi! I need help finding visa services in my city." />
    </div>
  );
}
