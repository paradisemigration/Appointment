'use client';

import { useState } from 'react';
import { 
  Globe, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  Phone,
  Calendar,
  Users,
  Award,
  FileText,
  MapPin,
  Zap,
  Heart,
  Target
} from 'lucide-react';
import { ALL_COUNTRIES, VISA_TYPES, ALL_CITIES, BUSINESS_INFO } from '@/data/constants';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'appointment-booking',
      icon: Calendar,
      title: 'VFS Appointment Booking',
      description: 'Fast and reliable appointment booking for all VFS centers',
      features: [
        '24/7 automated slot monitoring',
        'Earliest available appointment booking',
        'Express booking for urgent travel',
        'Multiple appointment backup options'
      ],
      pricing: 'Competitive rates',
      processingTime: 'Same day to 7 days'
    },
    {
      id: 'document-review',
      icon: FileText,
      title: 'Expert Document Review',
      description: 'Comprehensive review of your visa application documents',
      features: [
        'Embassy requirement compliance check',
        'Document formatting guidance',
        'Translation assistance',
        'Error detection and correction'
      ],
      pricing: 'Complimentary with booking',
      processingTime: '2-4 hours'
    },
    {
      id: 'application-assistance',
      icon: Users,
      title: 'Complete Application Support',
      description: 'End-to-end assistance throughout your visa application',
      features: [
        'Form filling assistance',
        'Profile optimization',
        'Interview preparation (if required)',
        'Post-submission tracking'
      ],
      pricing: 'Premium service',
      processingTime: '1-3 days'
    },
    {
      id: 'express-service',
      icon: Zap,
      title: 'Express Visa Services',
      description: 'Expedited processing for urgent travel requirements',
      features: [
        'Priority appointment booking',
        'Same-day document review',
        'Express VFS services',
        'Dedicated consultant support'
      ],
      pricing: 'Premium rates',
      processingTime: '24-48 hours'
    }
  ];

  const countries = [
    { region: 'Schengen Countries', count: 26, countries: ALL_COUNTRIES.filter(c => c.isSchengen) },
    { region: 'Other European Countries', count: 4, countries: ALL_COUNTRIES.filter(c => c.continent === 'Europe' && !c.isSchengen) },
    { region: 'Major Destinations', count: 5, countries: ALL_COUNTRIES.filter(c => c.continent !== 'Europe') }
  ];

  const openWhatsApp = (service?: string) => {
    const message = service 
      ? `Hi! I'm interested in your ${service} service. Can you provide more information?`
      : `Hi! I need information about your visa appointment services.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971501234567?text=${encodedMessage}`, '_blank');
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
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
              Our Professional Visa Services
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2rem' }}>
              Comprehensive visa appointment booking and application services for 35+ countries worldwide. 
              Trusted by 10,000+ travelers with 98% success rate.
            </p>
            
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

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        {/* Services Overview */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Services</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
              Professional visa services designed to make your international travel dreams a reality
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {services.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService === service.id;
              
              return (
                <div 
                  key={service.id}
                  className="card"
                  style={{ 
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #3498db' : '1px solid #e1e8ed',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      backgroundColor: '#3498db',
                      color: 'white',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
                      <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>{service.description}</p>
                    </div>
                  </div>

                  {isSelected && (
                    <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '1rem' }}>Service Features:</h4>
                      <ul style={{ marginBottom: '1.5rem', paddingLeft: '0', listStyle: 'none' }}>
                        {service.features.map((feature, index) => (
                          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <CheckCircle size={16} style={{ color: '#27ae60' }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                        <div>
                          <strong>Pricing:</strong> {service.pricing}
                        </div>
                        <div>
                          <strong>Timeline:</strong> {service.processingTime}
                        </div>
                      </div>

                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(service.title);
                        }}
                        style={{ width: '100%' }}
                      >
                        <Phone size={18} style={{ marginRight: '0.5rem' }} />
                        Get Quote for {service.title}
                      </button>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      Click to {isSelected ? 'collapse' : 'expand'} details
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#3498db' }}>
                      {service.pricing}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Countries We Serve */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Countries We Serve</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Visa appointment booking for 35+ countries across Europe and major global destinations
            </p>
          </div>

          <div className="grid grid-3">
            {countries.map((region, index) => (
              <div key={index} className="card text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {region.region === 'Schengen Countries' ? '🇪🇺' : 
                   region.region === 'Other European Countries' ? '🏛️' : '🌍'}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{region.region}</h3>
                <div className="badge badge-success" style={{ marginBottom: '1rem' }}>
                  {region.count} Countries
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {region.countries.slice(0, 6).map((country) => (
                    <span key={country.code} style={{ fontSize: '1.2rem' }} title={country.name}>
                      {country.flag}
                    </span>
                  ))}
                  {region.countries.length > 6 && (
                    <span style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                      +{region.countries.length - 6} more
                    </span>
                  )}
                </div>

                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => openWhatsApp(`${region.region} visa services`)}
                >
                  View All Countries
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Visa Types */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Visa Types We Handle</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Professional services for all major visa categories
            </p>
          </div>

          <div className="grid grid-3">
            {VISA_TYPES.map((visa) => (
              <div key={visa.id} className="card text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {visa.id === 'visit' ? '🏖️' : visa.id === 'work' ? '💼' : '🎓'}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{visa.name}</h3>
                <p style={{ color: '#6c757d', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {visa.description}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Processing Time:</span>
                    <strong>{visa.processingTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Embassy Fee:</span>
                    <strong>{visa.fee}</strong>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => openWhatsApp(`${visa.name} application assistance`)}
                >
                  <Calendar size={16} style={{ marginRight: '0.5rem' }} />
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Overview */}
        <section style={{ marginBottom: '4rem', backgroundColor: '#f8f9fa', padding: '3rem', borderRadius: '12px' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Our Process Works</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Simple 4-step process to get your visa appointment booked
            </p>
          </div>

          <div className="grid grid-4">
            {[
              {
                step: 1,
                icon: Target,
                title: 'Consultation',
                description: 'Free assessment of your requirements and eligibility for your chosen destination.'
              },
              {
                step: 2,
                icon: FileText,
                title: 'Documentation',
                description: 'Expert review and preparation of all required documents for your visa application.'
              },
              {
                step: 3,
                icon: Calendar,
                title: 'Appointment',
                description: 'Fast appointment booking at VFS centers with earliest available slots.'
              },
              {
                step: 4,
                icon: CheckCircle,
                title: 'Success',
                description: 'Track your application and receive your visa with our 98% success rate.'
              }
            ].map((process) => {
              const Icon = process.icon;
              return (
                <div key={process.step} className="text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#3498db',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    position: 'relative'
                  }}>
                    <Icon size={32} />
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      {process.step}
                    </div>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{process.title}</h3>
                  <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>{process.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Our Services?</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Proven excellence in visa appointment booking and application services
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                icon: Shield,
                title: '98% Success Rate',
                description: 'Industry-leading success rate with thousands of approved applications',
                color: '#27ae60'
              },
              {
                icon: Clock,
                title: '24 Hour Service',
                description: 'Round-the-clock monitoring and same-day appointment booking',
                color: '#3498db'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Certified visa consultants with years of experience and expertise',
                color: '#e74c3c'
              },
              {
                icon: Star,
                title: 'Premium Support',
                description: '24/7 WhatsApp support and dedicated customer service',
                color: '#f39c12'
              },
              {
                icon: Heart,
                title: 'Client Satisfaction',
                description: '10,000+ happy clients and excellent customer reviews',
                color: '#e91e63'
              },
              {
                icon: Award,
                title: 'Quality Guarantee',
                description: 'Money-back guarantee and transparent pricing with no hidden fees',
                color: '#9b59b6'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card text-center">
                  <Icon size={48} style={{ color: benefit.color, margin: '0 auto 1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem' }}>{benefit.title}</h3>
                  <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center" style={{ 
          backgroundColor: '#2c3e50', 
          color: 'white', 
          padding: '3rem', 
          borderRadius: '12px',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
            Ready to Start Your Visa Journey?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Get expert assistance and book your visa appointment today with our proven success rate
          </p>
          
          <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-success btn-lg"
              onClick={() => window.location.href = '/'}
            >
              <Calendar size={20} style={{ marginRight: '0.5rem' }} />
              Book Appointment Now
            </button>
            <button 
              className="whatsapp-btn btn-lg"
              onClick={() => openWhatsApp()}
            >
              <Phone size={20} />
              WhatsApp Consultation
            </button>
          </div>
        </section>
      </div>

      {/* WhatsApp Widget */}
      <WhatsAppWidget customMessage="Hi! I'm interested in your visa services. Can you help me?" />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="text-center">
            <p>&copy; 2024 {BUSINESS_INFO.name}. All rights reserved.</p>
            <p style={{ marginTop: '10px', opacity: 0.8 }}>
              Professional visa appointment booking services | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
