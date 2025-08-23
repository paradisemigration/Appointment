'use client';

import { useState } from 'react';

interface PageProps {
  params: {
    country: string;
    visa: string;
    city: string;
  };
}

export default function AppointmentPage({ params }: PageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setMessage('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setMessage('Booking your appointment...');

    // Simulate booking process
    setTimeout(() => {
      setMessage('✅ Appointment booked successfully! We will contact you within 24 hours.');
      setIsSubmitting(false);
      
      // WhatsApp redirect
      const whatsappMessage = `New Appointment Request:
Name: ${formData.name}
Email: ${formData.email}  
Phone: ${formData.phone}
Country: ${params.country}
Visa: ${params.visa}
City: ${params.city}
Preferred Date: ${formData.preferredDate}`;
      
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                🌍 VFS Portal
              </h1>
            </div>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>← Back to Home</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Appointment Details */}
            <div className="card" style={{ marginBottom: '30px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>
                Appointment Details
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: '#e3f2fd',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>🗺️</div>
                  <div style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{params.country}</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Country</div>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: '#f3e5f5',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>📋</div>
                  <div style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{params.visa}</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Visa Type</div>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: '#e8f5e8',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>🏙️</div>
                  <div style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{params.city}</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Your City</div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="card">
              <h3 style={{ marginBottom: '30px', fontSize: '24px' }}>
                Complete Your Booking
              </h3>

              {message && (
                <div style={{
                  padding: '15px',
                  borderRadius: '6px',
                  marginBottom: '20px',
                  textAlign: 'center',
                  backgroundColor: message.includes('Success') ? '#d4edda' : 
                                  message.includes('Please') ? '#fff3cd' : '#e7f3ff',
                  color: message.includes('Success') ? '#155724' : 
                         message.includes('Please') ? '#856404' : '#004085'
                }}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                  marginBottom: '30px'
                }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-select"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-select"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-select"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      className="form-select"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ fontSize: '18px', padding: '15px 40px' }}
                  >
                    {isSubmitting ? '🔄 Booking...' : '📅 Book Appointment'}
                  </button>
                </div>

                <div style={{
                  marginTop: '20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  * Required fields. We'll contact you within 24 hours.
                </div>
              </form>
            </div>

            {/* Information */}
            <div className="card">
              <h3 style={{ marginBottom: '20px' }}>What happens next?</h3>
              <ol style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Document Review:</strong> Our experts will review your requirements
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Slot Confirmation:</strong> We'll find the best available appointment slot
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Payment:</strong> Secure payment processing for booking fees
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Confirmation:</strong> Receive appointment details via email and WhatsApp
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
