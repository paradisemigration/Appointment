'use client';

import { useState } from 'react';
import { Search, Globe, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { ALL_COUNTRIES, VISA_TYPES, BUSINESS_INFO } from '@/data/constants';
import MobileHeader from '@/components/MobileHeader';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');

  const continents = ['All', 'Europe', 'North America', 'Oceania', 'Asia'];

  const filteredCountries = ALL_COUNTRIES.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent = selectedContinent === 'All' || country.continent === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  const europeanCountries = filteredCountries.filter(c => c.continent === 'Europe');
  const otherCountries = filteredCountries.filter(c => c.continent !== 'Europe');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <MobileHeader currentPage="/countries" />

      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 25%, rgba(241, 196, 15, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(241, 196, 15, 0.1) 0%, transparent 50%)
          `,
          animation: 'float 15s ease-in-out infinite'
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
              <Globe size={16} style={{ color: 'var(--accent-color)' }} />
              35+ Countries Available
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: '800',
              marginBottom: '1.5rem', 
              color: 'white',
              lineHeight: '1.1'
            }}>
              Visa Services for All Countries
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
              marginBottom: '2rem', 
              opacity: 0.95, 
              maxWidth: '800px', 
              margin: '0 auto 2rem',
              lineHeight: '1.4'
            }}>
              Professional visa appointment booking for <strong>Schengen countries</strong>, 
              <strong> USA</strong>, <strong>UK</strong>, <strong>Canada</strong>, <strong>Australia</strong> and more
            </p>

            {/* Stats */}
            <div className="stats" style={{ marginBottom: '2rem' }}>
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-color)' }}>30</span>
                <span className="stat-label">European Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-color)' }}>5</span>
                <span className="stat-label">Major Destinations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-color)' }}>98%</span>
                <span className="stat-label">Success Rate</span>
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
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Find Your Destination</h2>
              <p style={{ color: 'var(--text-muted)' }}>Search from our comprehensive list of visa destinations</p>
            </div>

            <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">Search Countries</label>
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
                    placeholder="Search by country name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Filter by Continent</label>
                <select
                  className="form-select"
                  value={selectedContinent}
                  onChange={(e) => setSelectedContinent(e.target.value)}
                >
                  {continents.map(continent => (
                    <option key={continent} value={continent}>{continent}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ 
              textAlign: 'center',
              fontSize: '0.9rem',
              color: 'var(--text-muted)'
            }}>
              Showing {filteredCountries.length} of {ALL_COUNTRIES.length} countries
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          {/* European Countries */}
          {europeanCountries.length > 0 && (
            <div style={{ marginBottom: '4rem' }}>
              <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                  color: 'var(--primary-color)',
                  marginBottom: '1rem'
                }}>
                  🇪🇺 European Countries
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  Schengen and other European destinations
                </p>
              </div>

              <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                {europeanCountries.map(country => (
                  <div key={country.code} className="card" style={{
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(241, 196, 15, 0.1)',
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      {country.flag}
                    </div>
                    <h3 style={{ 
                      color: 'var(--primary-color)',
                      marginBottom: '0.5rem',
                      fontSize: '1.25rem'
                    }}>
                      {country.name}
                    </h3>
                    <div style={{ marginBottom: '1rem' }}>
                      {country.isSchengen && (
                        <div className="badge badge-success" style={{ marginBottom: '0.5rem' }}>
                          Schengen Area
                        </div>
                      )}
                      <div style={{ 
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)'
                      }}>
                        {country.visaTypes.length} visa types available
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      {country.visaTypes.slice(0, 2).map(visa => (
                        <div key={visa.id} style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.25rem'
                        }}>
                          • {visa.name}
                        </div>
                      ))}
                      {country.visaTypes.length > 2 && (
                        <div style={{
                          fontSize: '0.8rem',
                          color: 'var(--accent-color)',
                          fontWeight: '500'
                        }}>
                          +{country.visaTypes.length - 2} more
                        </div>
                      )}
                    </div>

                    <a 
                      href={`/${country.slug}-visit-appointment-delhi`}
                      className="btn btn-primary btn-sm"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                        textDecoration: 'none'
                      }}
                    >
                      <ArrowRight size={14} style={{ marginRight: '0.5rem' }} />
                      Book Appointment
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Countries */}
          {otherCountries.length > 0 && (
            <div>
              <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                  color: 'var(--primary-color)',
                  marginBottom: '1rem'
                }}>
                  🌍 Other Major Destinations
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  USA, UK, Canada, Australia and more
                </p>
              </div>

              <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                {otherCountries.map(country => (
                  <div key={country.code} className="card" style={{
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(241, 196, 15, 0.1)',
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      {country.flag}
                    </div>
                    <h3 style={{ 
                      color: 'var(--primary-color)',
                      marginBottom: '0.5rem',
                      fontSize: '1.25rem'
                    }}>
                      {country.name}
                    </h3>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ 
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)'
                      }}>
                        {country.visaTypes.length} visa types available
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      {country.visaTypes.slice(0, 2).map(visa => (
                        <div key={visa.id} style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.25rem'
                        }}>
                          • {visa.name}
                        </div>
                      ))}
                      {country.visaTypes.length > 2 && (
                        <div style={{
                          fontSize: '0.8rem',
                          color: 'var(--accent-color)',
                          fontWeight: '500'
                        }}>
                          +{country.visaTypes.length - 2} more
                        </div>
                      )}
                    </div>

                    <a 
                      href={`/${country.slug}-visit-appointment-delhi`}
                      className="btn btn-primary btn-sm"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                        textDecoration: 'none'
                      }}
                    >
                      <ArrowRight size={14} style={{ marginRight: '0.5rem' }} />
                      Book Appointment
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredCountries.length === 0 && (
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                No countries found
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Try adjusting your search terms or filter options
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedContinent('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Visa Services?
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Professional appointment booking for all destinations
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            <div className="card text-center">
              <CheckCircle size={48} style={{ color: 'var(--success-color)', margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                98% Success Rate
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Proven track record across all 35+ countries with expert guidance and support.
              </p>
            </div>

            <div className="card text-center">
              <Globe size={48} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                All Countries Covered
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Complete visa services for Schengen, USA, UK, Canada, Australia and more.
              </p>
            </div>

            <div className="card text-center">
              <Star size={48} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Expert Support
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                24/7 WhatsApp support from certified visa consultants for all destinations.
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
              Ready to Start Your Visa Journey?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Get expert assistance for any destination worldwide
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/"
                className="btn btn-primary btn-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  textDecoration: 'none'
                }}
              >
                <Search size={20} style={{ marginRight: '0.5rem' }} />
                Book Appointment
              </a>
              <a 
                href="/contact"
                className="btn btn-secondary btn-lg"
                style={{ textDecoration: 'none' }}
              >
                <MapPin size={20} style={{ marginRight: '0.5rem' }} />
                Contact Us
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
      <WhatsAppWidget customMessage="Hi! I need help choosing the right country for my visa application." />
    </div>
  );
}
