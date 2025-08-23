'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  Phone,
  Mail,
  User,
  FileText,
  DollarSign,
  Shield,
  Star,
  Users,
  Award
} from 'lucide-react';
import { 
  ALL_COUNTRIES, 
  ALL_CITIES, 
  VISA_TYPES, 
  getCountryBySlug, 
  getCityBySlug, 
  getVisaTypeBySlug,
  BUSINESS_INFO 
} from '@/data/constants';

interface PageProps {
  params: {
    slug: string;
  };
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  alternateDate: string;
  message: string;
}

export default function AppointmentPage({ params }: PageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [bookingForm, setBookingForm] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    alternateDate: '',
    message: ''
  });

  // Parse the slug to extract country, visa, and city
  const parseSlug = (slug: string) => {
    // Expected format: country-visa-appointment-city
    const parts = slug.split('-');
    if (parts.length < 4 || parts[parts.length - 2] !== 'appointment') {
      return null;
    }

    // Find appointment index
    const appointmentIndex = parts.findIndex(part => part === 'appointment');
    if (appointmentIndex === -1) return null;

    // Extract parts
    const countryParts = parts.slice(0, appointmentIndex - 1);
    const visaPart = parts[appointmentIndex - 1];
    const cityParts = parts.slice(appointmentIndex + 1);

    const countrySlug = countryParts.join('-');
    const visaSlug = visaPart;
    const citySlug = cityParts.join('-');

    return { countrySlug, visaSlug, citySlug };
  };

  const parsed = parseSlug(params.slug);
  
  if (!parsed) {
    notFound();
  }

  const country = getCountryBySlug(parsed.countrySlug);
  const visa = getVisaTypeBySlug(parsed.visaSlug);
  const city = getCityBySlug(parsed.citySlug);

  if (!country || !visa || !city) {
    notFound();
  }

  // Generate page title
  const pageTitle = `${country.name} ${visa.name} Appointment from ${city.name}`;

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      setSubmitMessage('Please fill in all required fields');
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('Processing your booking request...');

    // Simulate booking process
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('✅ Booking request submitted successfully! We will contact you within 2 hours.');
      
      // WhatsApp notification
      const message = encodeURIComponent(`New Booking Request:
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Service: ${pageTitle}
Preferred Date: ${bookingForm.preferredDate}
Message: ${bookingForm.message}`);
      
      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
      }, 2000);
      
      // Reset form
      setBookingForm({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        alternateDate: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsBookingModalOpen(false);
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I need help with ${pageTitle}. Can you assist me with the appointment booking process?`);
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  // Get minimum date (tomorrow)
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <>
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

      <div className="min-h-screen" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
              <a href="/" style={{ color: '#3498db' }}>Home</a> / 
              <a href="/countries" style={{ color: '#3498db', margin: '0 0.5rem' }}>Countries</a> / 
              <span style={{ margin: '0 0.5rem' }}>{country.name}</span> / 
              <span style={{ margin: '0 0.5rem' }}>{visa.name}</span> / 
              <span style={{ margin: '0 0.5rem' }}>{city.name}</span>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="card" style={{ marginBottom: '3rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <div className="text-center">
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{country.flag}</div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
                {pageTitle}
              </h1>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
                Professional visa appointment booking service with 98% success rate
              </p>
              
              <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-success btn-lg"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  <Calendar size={20} style={{ marginRight: '0.5rem' }} />
                  Book Appointment Now
                </button>
                <button 
                  className="whatsapp-btn"
                  onClick={openWhatsApp}
                >
                  <Phone size={20} />
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>

          {/* Service Details Grid */}
          <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
            {/* Visa Information */}
            <div className="card">
              <div className="card-header">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={24} style={{ color: '#3498db' }} />
                  Visa Information
                </h3>
              </div>
              <div style={{ lineHeight: '1.8' }}>
                <p><strong>Visa Type:</strong> {visa.name}</p>
                <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                <p><strong>Service Fee:</strong> {visa.fee}</p>
                <p><strong>Country:</strong> {country.name} {country.flag}</p>
                {country.isSchengen && <div className="badge badge-success">Schengen Area</div>}
              </div>
            </div>

            {/* Location Details */}
            <div className="card">
              <div className="card-header">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={24} style={{ color: '#27ae60' }} />
                  Location Details
                </h3>
              </div>
              <div style={{ lineHeight: '1.8' }}>
                <p><strong>Your City:</strong> {city.name}</p>
                <p><strong>Region:</strong> {city.region}</p>
                <p><strong>Country:</strong> {city.country}</p>
                <p><strong>VFS Center:</strong> Available</p>
                <div className="badge badge-success">Service Available</div>
              </div>
            </div>

            {/* Service Features */}
            <div className="card">
              <div className="card-header">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={24} style={{ color: '#e74c3c' }} />
                  Service Features
                </h3>
              </div>
              <div style={{ lineHeight: '1.8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: '#27ae60' }} />
                  <span>24 Hour Booking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: '#27ae60' }} />
                  <span>Document Review</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: '#27ae60' }} />
                  <span>WhatsApp Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: '#27ae60' }} />
                  <span>Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Section */}
          <div className="grid grid-2" style={{ marginBottom: '3rem', gap: '2rem' }}>
            {/* Main Content */}
            <div>
              <div className="card">
                <h2>Complete Guide to {pageTitle}</h2>
                
                <h3>📋 Visa Application Process</h3>
                <p>Getting your {visa.name} for {country.name} from {city.name} involves several important steps that we handle professionally:</p>
                
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li><strong>Document Preparation:</strong> We review all your documents to ensure they meet the embassy requirements.</li>
                  <li><strong>Application Form:</strong> Complete the visa application form with accurate information.</li>
                  <li><strong>Appointment Booking:</strong> We secure the earliest available appointment slot at the VFS center.</li>
                  <li><strong>Biometric Submission:</strong> Attend your appointment for biometric data collection.</li>
                  <li><strong>Processing & Tracking:</strong> Monitor your application status until visa approval.</li>
                </ol>

                <h3>📄 Required Documents</h3>
                <p>For {visa.name} application to {country.name}, you typically need:</p>
                
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Valid passport with at least 6 months validity</li>
                  <li>Completed visa application form</li>
                  <li>Recent passport-size photographs</li>
                  <li>Travel insurance coverage</li>
                  <li>Proof of accommodation</li>
                  <li>Flight reservation</li>
                  <li>Bank statements (last 3 months)</li>
                  <li>Employment certificate or NOC</li>
                  <li>Additional documents based on visa type</li>
                </ul>

                <h3>💰 Fees and Processing Time</h3>
                <p>The visa fees and processing times for {country.name} {visa.name} are:</p>
                
                <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                  <p><strong>Embassy Fee:</strong> {visa.fee}</p>
                  <p><strong>Our Service Fee:</strong> Competitive rates</p>
                  <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                  <p><strong>Express Service:</strong> Available on request</p>
                </div>

                <h3>🏢 VFS Center in {city.name}</h3>
                <p>The VFS Global center in {city.name} handles visa applications for {country.name}. Our team ensures you get the earliest available appointment slot and provides complete guidance throughout the process.</p>

                <h3>✅ Why Choose Our Service?</h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li><strong>98% Success Rate:</strong> Proven track record with thousands of successful applications</li>
                  <li><strong>Expert Guidance:</strong> Certified visa consultants with years of experience</li>
                  <li><strong>Fast Processing:</strong> Get your appointment within 24 hours</li>
                  <li><strong>24/7 Support:</strong> WhatsApp and email support throughout the process</li>
                  <li><strong>Transparent Pricing:</strong> No hidden charges, clear fee structure</li>
                  <li><strong>Document Review:</strong> Free review of your documents before submission</li>
                </ul>

                <h3>📞 Contact Information</h3>
                <p>For immediate assistance with your {pageTitle}, contact us:</p>
                
                <div style={{ backgroundColor: '#e7f3ff', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                  <p><strong>WhatsApp:</strong> {BUSINESS_INFO.phone}</p>
                  <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
                  <p><strong>Office:</strong> {BUSINESS_INFO.address}</p>
                  <p><strong>Working Hours:</strong> 24/7 Available</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Quick Booking Card */}
              <div className="card" style={{ position: 'sticky', top: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <Calendar size={24} style={{ marginRight: '0.5rem', color: '#3498db' }} />
                  Quick Booking
                </h3>
                
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{country.flag}</div>
                  <h4>{country.name}</h4>
                  <p style={{ color: '#6c757d' }}>{visa.name} from {city.name}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span>Processing Time:</span>
                    <strong>{visa.processingTime}</strong>
                  </div>
                  <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span>Service Fee:</span>
                    <strong>{visa.fee}</strong>
                  </div>
                  <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span>Success Rate:</span>
                    <strong style={{ color: '#27ae60' }}>98%</strong>
                  </div>
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={() => setIsBookingModalOpen(true)}
                  style={{ width: '100%', marginBottom: '1rem' }}
                >
                  <Calendar size={20} style={{ marginRight: '0.5rem' }} />
                  Book Now
                </button>

                <button 
                  className="whatsapp-btn"
                  onClick={openWhatsApp}
                  style={{ width: '100%' }}
                >
                  <Phone size={20} />
                  WhatsApp Chat
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="card">
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <Award size={24} style={{ marginRight: '0.5rem', color: '#f39c12' }} />
                  Why Trust Us?
                </h3>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Star size={32} style={{ color: '#f39c12', margin: '0 auto 0.5rem' }} />
                    <h4>10,000+ Happy Clients</h4>
                    <p style={{ fontSize: '0.9rem', color: '#6c757d' }}>Trusted worldwide</p>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <Shield size={32} style={{ color: '#27ae60', margin: '0 auto 0.5rem' }} />
                    <h4>98% Success Rate</h4>
                    <p style={{ fontSize: '0.9rem', color: '#6c757d' }}>Proven results</p>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <Clock size={32} style={{ color: '#3498db', margin: '0 auto 0.5rem' }} />
                    <h4>24 Hour Service</h4>
                    <p style={{ fontSize: '0.9rem', color: '#6c757d' }}>Fast processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setIsBookingModalOpen(false)}>
          <div className="modal">
            <div className="modal-header">
              <h3>Book Your Appointment</h3>
              <p style={{ color: '#6c757d', margin: 0 }}>{pageTitle}</p>
            </div>

            {submitMessage && (
              <div className={`alert ${submitMessage.includes('✅') ? 'alert-success' : submitMessage.includes('Please') ? 'alert-warning' : 'alert-info'}`} style={{ marginBottom: '1rem' }}>
                {isSubmitting && <span className="spinner"></span>}
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label className="form-label">
                  <User size={18} style={{ marginRight: '0.5rem' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Mail size={18} style={{ marginRight: '0.5rem' }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  className="form-input"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Phone size={18} style={{ marginRight: '0.5rem' }} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="form-input"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                  placeholder="Enter your phone number"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar size={18} style={{ marginRight: '0.5rem' }} />
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="form-input"
                  value={bookingForm.preferredDate}
                  onChange={(e) => setBookingForm({...bookingForm, preferredDate: e.target.value})}
                  min={getTomorrowDate()}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar size={18} style={{ marginRight: '0.5rem' }} />
                  Alternate Date
                </label>
                <input
                  type="date"
                  className="form-input"
                  value={bookingForm.alternateDate}
                  onChange={(e) => setBookingForm({...bookingForm, alternateDate: e.target.value})}
                  min={getTomorrowDate()}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FileText size={18} style={{ marginRight: '0.5rem' }} />
                  Additional Message
                </label>
                <textarea
                  className="form-textarea"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  placeholder="Any specific requirements or questions?"
                  rows={4}
                  disabled={isSubmitting}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsBookingModalOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar size={18} style={{ marginRight: '0.5rem' }} />
                      Submit Booking
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const parsed = parseSlug(params.slug);
  
  if (!parsed) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }

  const country = getCountryBySlug(parsed.countrySlug);
  const visa = getVisaTypeBySlug(parsed.visaSlug);
  const city = getCityBySlug(parsed.citySlug);

  if (!country || !visa || !city) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }

  const pageTitle = `${country.name} ${visa.name} Appointment from ${city.name}`;
  const description = `Book your ${country.name} ${visa.name} appointment from ${city.name}. Fast, reliable visa appointment booking service with 98% success rate. Expert guidance and 24/7 support.`;

  return {
    title: pageTitle,
    description,
    keywords: [
      `${country.name} visa appointment`,
      `${visa.name} ${country.name}`,
      `VFS appointment ${city.name}`,
      `visa booking ${country.name}`,
      `${country.name} visa from ${city.name}`,
      'visa appointment booking',
      'VFS Global appointment'
    ].join(', '),
    openGraph: {
      title: pageTitle,
      description,
      url: `/${params.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
    alternates: {
      canonical: `/${params.slug}`,
    },
  };
}

// Helper function to parse slug (duplicate for metadata generation)
function parseSlug(slug: string) {
  const parts = slug.split('-');
  if (parts.length < 4 || parts[parts.length - 2] !== 'appointment') {
    return null;
  }

  const appointmentIndex = parts.findIndex(part => part === 'appointment');
  if (appointmentIndex === -1) return null;

  const countryParts = parts.slice(0, appointmentIndex - 1);
  const visaPart = parts[appointmentIndex - 1];
  const cityParts = parts.slice(appointmentIndex + 1);

  const countrySlug = countryParts.join('-');
  const visaSlug = visaPart;
  const citySlug = cityParts.join('-');

  return { countrySlug, visaSlug, citySlug };
}
