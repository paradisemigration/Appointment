'use client';

import { useState } from 'react';
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
import { Country, City, VisaType } from '@/types';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  alternateDate: string;
  message: string;
}

interface AppointmentPageClientProps {
  country: Country;
  visa: VisaType;
  city: City;
  pageTitle: string;
}

export default function AppointmentPageClient({ 
  country, 
  visa, 
  city, 
  pageTitle 
}: AppointmentPageClientProps) {
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
      {/* Hero Section */}
      <div className="card" style={{ marginBottom: '3rem', background: 'linear-gradient(135deg, var(--primary-color) 0%, #34495e 100%)', color: 'white' }}>
        <div className="text-center">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{country.flag}</div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'white' }}>
            {pageTitle}
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, marginBottom: '2rem' }}>
            Professional visa appointment booking service with 98% success rate
          </p>
          
          <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary btn-lg"
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
              <FileText size={24} style={{ color: 'var(--accent-color)' }} />
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
              <MapPin size={24} style={{ color: 'var(--success-color)' }} />
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
              <Shield size={24} style={{ color: 'var(--primary-color)' }} />
              Service Features
            </h3>
          </div>
          <div style={{ lineHeight: '1.8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle size={16} style={{ color: 'var(--success-color)' }} />
              <span>24 Hour Booking</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle size={16} style={{ color: 'var(--success-color)' }} />
              <span>Document Review</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle size={16} style={{ color: 'var(--success-color)' }} />
              <span>WhatsApp Support</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle size={16} style={{ color: 'var(--success-color)' }} />
              <span>Money Back Guarantee</span>
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
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>{pageTitle}</p>
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
    </>
  );
}
