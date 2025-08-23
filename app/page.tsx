'use client';

import { useState, useEffect, useRef } from 'react';
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
  MapPin,
  MessageCircle,
  Quote,
  TrendingUp,
  Target,
  Heart,
  Sparkles
} from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES, POPULAR_DESTINATIONS, BUSINESS_INFO } from '@/data/constants';
import { TESTIMONIALS } from '@/data/testimonials';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import MobileHeader from '@/components/MobileHeader';

export default function HomePage() {
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVisa, setSelectedVisa] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter cities based on user location
  const getFilteredCities = () => {
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

  const handleSelectDestination = (countryCode: string, visaId: string) => {
    setSelectedCountry(countryCode);
    setSelectedVisa(visaId);
    
    // Scroll to search form
    setTimeout(() => {
      searchRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <MobileHeader currentPage="/" />

      {/* Hero Section - Enhanced */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(241, 196, 15, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(241, 196, 15, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(241, 196, 15, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center">
            {/* Main Headline */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                backgroundColor: 'rgba(241, 196, 15, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                marginBottom: '1rem',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: '500'
              }}>
                <Sparkles size={16} style={{ color: 'var(--accent-color)' }} />
                Trusted by 10,000+ Travelers
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                fontWeight: '800',
                marginBottom: '1.5rem', 
                color: 'white',
                lineHeight: '1.1',
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(241, 196, 15, 0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Professional Visa Services
              </h1>
              
              <p style={{ 
                fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
                marginBottom: '2rem', 
                opacity: 0.95, 
                maxWidth: '700px', 
                margin: '0 auto 2rem',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>
                Book appointments for <strong>35+ countries</strong> with expert guidance, fast processing, and <strong>98% success rate</strong>
              </p>
            </div>
            
            {/* Trust Indicators - Enhanced */}
            <div className="stats" style={{ marginBottom: '2rem' }}>
              <div className="stat-item">
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  <span className="stat-number">98%</span>
                </div>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  <span className="stat-number">35+</span>
                </div>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  <span className="stat-number">24h</span>
                </div>
                <span className="stat-label">Booking Time</span>
              </div>
              <div className="stat-item">
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  <span className="stat-number">10K+</span>
                </div>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                style={{ 
                  background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                  boxShadow: '0 8px 25px rgba(241, 196, 15, 0.4)',
                  transform: 'none'
                }}
              >
                <Search size={20} style={{ marginRight: '0.5rem' }} />
                Find Appointments
              </button>
              <button 
                className="whatsapp-btn btn-lg"
                onClick={openWhatsApp}
              >
                <MessageCircle size={20} />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section - Enhanced */}
      <section 
        ref={searchRef}
        id="search-form" 
        style={{ 
          padding: 'clamp(3rem, 6vw, 5rem) 0', 
          backgroundColor: 'var(--background-color)', 
          position: 'relative', 
          marginTop: '-3rem', 
          zIndex: 3 
        }}
      >
        <div className="container">
          <div className="card" style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
            boxShadow: '0 20px 60px rgba(44, 62, 80, 0.15)',
            border: '1px solid rgba(241, 196, 15, 0.2)'
          }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 30px rgba(241, 196, 15, 0.3)'
              }}>
                <Search size={32} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)',
                fontWeight: '700'
              }}>
                Find Your Perfect Appointment
              </h2>
              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Select your destination, visa type, and city to get started with our expert booking service
              </p>
            </div>

            {searchMessage && (
              <div className={`alert ${searchMessage.includes('Please') ? 'alert-warning' : 'alert-info'}`} style={{ 
                marginBottom: '2rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem'
              }}>
                {isLoading && <span className="spinner"></span>}
                {searchMessage}
              </div>
            )}

            <form onSubmit={handleSearch}>
              <div className="grid grid-3" style={{ marginBottom: '2.5rem', gap: '1.5rem' }}>
                {/* Country Selection */}
                <div className="form-group">
                  <label className="form-label" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                    <Globe size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--accent-color)' }} />
                    Select Country
                  </label>
                  <select 
                    className="form-select"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    disabled={isLoading}
                    style={{ 
                      borderColor: selectedCountry ? 'var(--accent-color)' : 'var(--border-color)',
                      fontSize: '1rem'
                    }}
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
                  <label className="form-label" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                    <Calendar size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--accent-color)' }} />
                    Select Visa Type
                  </label>
                  <select 
                    className="form-select"
                    value={selectedVisa}
                    onChange={(e) => setSelectedVisa(e.target.value)}
                    disabled={isLoading}
                    style={{ 
                      borderColor: selectedVisa ? 'var(--accent-color)' : 'var(--border-color)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Choose Visa Type</option>
                    {VISA_TYPES.map(visa => (
                      <option key={visa.id} value={visa.id}>{visa.name}</option>
                    ))}
                  </select>
                </div>

                {/* City Selection */}
                <div className="form-group">
                  <label className="form-label" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                    <MapPin size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--accent-color)' }} />
                    Select Your City
                  </label>
                  <select 
                    className="form-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={isLoading}
                    style={{ 
                      borderColor: selectedCity ? 'var(--accent-color)' : 'var(--border-color)',
                      fontSize: '1rem'
                    }}
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
              <div className="text-center" style={{ marginBottom: '2rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={!selectedCountry || !selectedVisa || !selectedCity || isLoading}
                  style={{ 
                    marginRight: '1rem', 
                    marginBottom: '1rem',
                    minWidth: '200px',
                    background: isLoading ? 'var(--text-muted)' : 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                    boxShadow: isLoading ? 'none' : '0 8px 25px rgba(241, 196, 15, 0.4)'
                  }}
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
                  className="whatsapp-btn btn-lg"
                  onClick={openWhatsApp}
                  style={{ marginBottom: '1rem', minWidth: '200px' }}
                >
                  <Phone size={20} />
                  WhatsApp Support
                </button>
              </div>

              {/* Selection Summary */}
              {(selectedCountry || selectedVisa || selectedCity) && (
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1.5rem', 
                  background: 'linear-gradient(135deg, rgba(241, 196, 15, 0.1), rgba(241, 196, 15, 0.05))',
                  borderRadius: '12px',
                  border: '1px solid rgba(241, 196, 15, 0.3)',
                  fontSize: '1rem',
                  color: 'var(--primary-color)'
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Selected Options:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <span>📍 {selectedCountry ? ALL_COUNTRIES.find(c => c.code === selectedCountry)?.name : 'Country not selected'}</span>
                    <span>📋 {selectedVisa ? VISA_TYPES.find(v => v.id === selectedVisa)?.name : 'Visa type not selected'}</span>
                    <span>🏙️ {selectedCity ? ALL_CITIES.find(c => c.id === selectedCity)?.name : 'City not selected'}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              marginBottom: '1rem', 
              color: 'var(--primary-color)',
              fontWeight: '700'
            }}>
              Why Choose Our Service?
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', 
              color: 'var(--text-muted)', 
              maxWidth: '700px', 
              margin: '0 auto'
            }}>
              We provide professional visa appointment booking services with unmatched reliability and success rates
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '2rem' }}>
            <div className="card" style={{ 
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(241, 196, 15, 0.1)',
              background: 'linear-gradient(145deg, #ffffff, #fafbfc)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 30px rgba(241, 196, 15, 0.3)'
              }}>
                <Zap size={32} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Fast Processing</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Get your appointment booked within 24 hours with our automated system and expert team.</p>
            </div>

            <div className="card" style={{ 
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(39, 174, 96, 0.1)',
              background: 'linear-gradient(145deg, #ffffff, #fafbfc)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--success-color), #229954)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 30px rgba(39, 174, 96, 0.3)'
              }}>
                <Shield size={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>98% Success Rate</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Proven track record with expert document review, guidance, and appointment booking success.</p>
            </div>

            <div className="card" style={{ 
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(44, 62, 80, 0.1)',
              background: 'linear-gradient(145deg, #ffffff, #fafbfc)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-color), #34495e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 30px rgba(44, 62, 80, 0.3)'
              }}>
                <Users size={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Expert Support</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>24/7 WhatsApp support from certified visa consultants and booking specialists.</p>
            </div>

            <div className="card" style={{ 
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(241, 196, 15, 0.1)',
              background: 'linear-gradient(145deg, #ffffff, #fafbfc)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 30px rgba(241, 196, 15, 0.3)'
              }}>
                <Award size={32} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Trusted Service</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Trusted by 10,000+ clients worldwide with transparent pricing and reliable service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              marginBottom: '1rem', 
              color: 'var(--primary-color)',
              fontWeight: '700'
            }}>
              What Our Clients Say
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', 
              color: 'var(--text-muted)', 
              maxWidth: '600px', 
              margin: '0 auto'
            }}>
              Real experiences from thousands of satisfied travelers
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ 
              padding: '3rem 2rem',
              background: 'linear-gradient(145deg, var(--primary-color), #34495e)',
              color: 'white',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Quote Icon */}
              <Quote size={60} style={{ 
                position: 'absolute',
                top: '1rem',
                right: '2rem',
                color: 'var(--accent-color)',
                opacity: 0.3
              }} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Stars */}
                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} style={{ 
                      color: 'var(--accent-color)', 
                      fill: 'var(--accent-color)',
                      margin: '0 2px'
                    }} />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote style={{ 
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  "{TESTIMONIALS[currentTestimonial].comment}"
                </blockquote>

                {/* Author Info */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem' 
                  }}>
                    {TESTIMONIALS[currentTestimonial].avatar}
                  </div>
                  <div style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {TESTIMONIALS[currentTestimonial].name}
                  </div>
                  <div style={{ 
                    fontSize: '1rem',
                    opacity: 0.8
                  }}>
                    {TESTIMONIALS[currentTestimonial].visaType} • {TESTIMONIALS[currentTestimonial].country}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem',
                    opacity: 0.6,
                    marginTop: '0.5rem'
                  }}>
                    From {TESTIMONIALS[currentTestimonial].city}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '0.5rem',
                  marginTop: '2rem'
                }}>
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: index === currentTestimonial ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid for Mobile */}
          <div className="grid grid-3" style={{ marginTop: '3rem', gap: '1.5rem' }}>
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div key={testimonial.id} className="card" style={{ 
                textAlign: 'center',
                background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                border: '1px solid rgba(241, 196, 15, 0.1)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {testimonial.avatar}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ 
                      color: 'var(--accent-color)', 
                      fill: 'var(--accent-color)',
                      margin: '0 1px'
                    }} />
                  ))}
                </div>
                <p style={{ 
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  "{testimonial.comment.substring(0, 100)}..."
                </p>
                <div style={{ 
                  fontWeight: '600',
                  color: 'var(--primary-color)',
                  marginBottom: '0.25rem'
                }}>
                  {testimonial.name}
                </div>
                <div style={{ 
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  {testimonial.visaType} • {testimonial.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations - Enhanced */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              marginBottom: '1rem', 
              color: 'var(--primary-color)',
              fontWeight: '700'
            }}>
              Popular Destinations
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', 
              color: 'var(--text-muted)'
            }}>
              Most requested visa appointments from our clients
            </p>
          </div>

          <div className="destinations-grid">
            {POPULAR_DESTINATIONS.map((dest, index) => {
              const country = ALL_COUNTRIES.find(c => c.slug === dest.country);
              const visa = VISA_TYPES.find(v => v.slug === dest.visa);
              
              return (
                <div key={index} className="destination-card" style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                  border: '1px solid rgba(241, 196, 15, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{country?.flag}</div>
                  <h3 style={{ 
                    marginBottom: '1rem', 
                    color: 'var(--primary-color)',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}>
                    {country?.name}
                  </h3>
                  <div className="badge" style={{ 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                    color: 'var(--primary-color)',
                    fontWeight: '600'
                  }}>
                    {visa?.name}
                  </div>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--text-muted)', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.5'
                  }}>
                    Popular cities: {dest.cities.join(', ')}
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSelectDestination(country?.code || '', visa?.id || '')}
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-color), #e6b800)',
                      border: 'none',
                      fontWeight: '600'
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

      {/* Process Steps - Enhanced */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              marginBottom: '1rem', 
              color: 'var(--primary-color)',
              fontWeight: '700'
            }}>
              How It Works
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', 
              color: 'var(--text-muted)'
            }}>
              Simple 4-step process to book your visa appointment
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '2rem' }}>
            {[
              { 
                step: 1, 
                title: 'Select Details', 
                description: 'Choose your country, visa type, and city from our comprehensive list of 35+ countries.',
                icon: Target,
                color: 'var(--accent-color)'
              },
              { 
                step: 2, 
                title: 'Submit Form', 
                description: 'Fill out our secure booking form with your details and preferred appointment dates.',
                icon: FileText,
                color: 'var(--primary-color)'
              },
              { 
                step: 3, 
                title: 'Expert Review', 
                description: 'Our visa experts review your application and book the best available appointment slot.',
                icon: Users,
                color: 'var(--success-color)'
              },
              { 
                step: 4, 
                title: 'Confirmation', 
                description: 'Receive appointment confirmation via WhatsApp and email with all necessary details.',
                icon: CheckCircle,
                color: 'var(--accent-color)'
              }
            ].map((process) => {
              const Icon = process.icon;
              return (
                <div key={process.step} className="text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${process.color}, ${process.color}dd)`,
                    color: process.color === 'var(--accent-color)' ? 'var(--primary-color)' : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                    boxShadow: `0 10px 30px ${process.color}33`
                  }}>
                    <Icon size={32} />
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 12px rgba(44, 62, 80, 0.3)'
                    }}>
                      {process.step}
                    </div>
                  </div>
                  <h3 style={{ 
                    color: 'var(--primary-color)', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}>
                    {process.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.6'
                  }}>
                    {process.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section - Enhanced */}
      <section style={{ 
        padding: 'clamp(3rem, 6vw, 5rem) 0', 
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #34495e 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              marginBottom: '3rem', 
              color: 'white',
              fontWeight: '700'
            }}>
              Trusted by Thousands
            </h2>
            <div className="grid grid-4" style={{ gap: '2rem', alignItems: 'center' }}>
              {[
                { icon: Shield, text: 'Secure Payment', color: 'var(--success-color)' },
                { icon: Clock, text: '24/7 Support', color: 'var(--accent-color)' },
                { icon: Heart, text: 'Money Back Guarantee', color: '#e74c3c' },
                { icon: Award, text: 'Expert Guidance', color: 'var(--accent-color)' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center justify-center" style={{ 
                    gap: '1rem', 
                    flexDirection: 'column',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}>
                    <Icon size={40} style={{ color: item.color }} />
                    <span style={{ 
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
                      textAlign: 'center',
                      fontWeight: '500'
                    }}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
            <div>
              <h3 style={{ 
                color: 'white', 
                marginBottom: '1.5rem', 
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: '700'
              }}>
                🌍 VFS Appointments
              </h3>
              <p style={{ 
                opacity: 0.8, 
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                Professional visa appointment booking services for 35+ countries worldwide with 98% success rate.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  className="whatsapp-btn btn-sm"
                  onClick={openWhatsApp}
                >
                  <MessageCircle size={16} />
                  Chat Now
                </button>
              </div>
            </div>
            <div>
              <h4 style={{ 
                color: 'white', 
                marginBottom: '1.5rem', 
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: '600'
              }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="/services" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>Our Services</a>
                <a href="/countries" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>All Countries</a>
                <a href="/about" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>About Us</a>
                <a href="/contact" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>Contact</a>
              </div>
            </div>
            <div>
              <h4 style={{ 
                color: 'white', 
                marginBottom: '1.5rem', 
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: '600'
              }}>
                Popular Visas
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="/schengen-visa" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>Schengen Visa</a>
                <a href="/usa-visa" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>USA Visa</a>
                <a href="/uk-visa" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>UK Visa</a>
                <a href="/canada-visa" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', opacity: 0.8, transition: 'opacity 0.3s ease' }}>Canada Visa</a>
              </div>
            </div>
            <div>
              <h4 style={{ 
                color: 'white', 
                marginBottom: '1.5rem', 
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: '600'
              }}>
                Contact Info
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.8 }}>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', margin: 0 }}>📧 {BUSINESS_INFO.email}</p>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', margin: 0 }}>📞 {BUSINESS_INFO.phone}</p>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', margin: 0 }}>📍 {BUSINESS_INFO.address}</p>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', margin: 0 }}>⏰ 24/7 Available</p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            textAlign: 'center', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)'
          }}>
            <p style={{ 
              opacity: 0.8, 
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              lineHeight: '1.6'
            }}>
              &copy; 2024 {BUSINESS_INFO.name}. All rights reserved. | 
              <a href="/privacy" style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}>Privacy Policy</a> | 
              <a href="/terms" style={{ marginLeft: '0.5rem', color: 'var(--accent-color)' }}>Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-heavy);
        }
        
        .destination-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(44, 62, 80, 0.2);
        }
      `}</style>
    </div>
  );
}
