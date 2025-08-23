'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    // Simulate form submission
    setTimeout(() => {
      setStatusMessage('✅ Message sent successfully! We will get back to you within 24 hours.');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // WhatsApp integration
      const whatsappMessage = `Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ minHeight: '100vh' }}>
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
            <nav>
              <a href="/" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Home</a>
              <a href="/services" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Services</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>
            Get in touch with our visa experts for personalized assistance
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            
            {/* Contact Information */}
            <div>
              <h2 style={{ marginBottom: '30px', fontSize: '28px' }}>Get In Touch</h2>
              
              <div style={{ marginBottom: '40px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '24px', marginRight: '15px' }}>📞</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Phone</div>
                    <div style={{ color: '#666' }}>+1 (555) 123-4567</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '24px', marginRight: '15px' }}>✉️</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Email</div>
                    <div style={{ color: '#666' }}>support@vfsportal.com</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '24px', marginRight: '15px' }}>💬</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>WhatsApp</div>
                    <div style={{ color: '#666' }}>+1 (555) 123-4567</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '24px', marginRight: '15px' }}>🕒</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Business Hours</div>
                    <div style={{ color: '#666' }}>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 style={{ marginBottom: '30px', fontSize: '24px' }}>Send us a Message</h3>

              {statusMessage && (
                <div style={{
                  padding: '15px',
                  borderRadius: '6px',
                  marginBottom: '20px',
                  textAlign: 'center',
                  backgroundColor: statusMessage.includes('success') ? '#d4edda' : 
                                  statusMessage.includes('Please') ? '#fff3cd' : '#e7f3ff',
                  color: statusMessage.includes('success') ? '#155724' : 
                         statusMessage.includes('Please') ? '#856404' : '#004085'
                }}>
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-select"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Appointment Booking</option>
                    <option value="documents">Document Review</option>
                    <option value="status">Application Status</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-select"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here..."
                    rows={5}
                    required
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ fontSize: '16px', padding: '12px 30px' }}
                  >
                    {isSubmitting ? '🔄 Sending...' : '📧 Send Message'}
                  </button>
                </div>

                <div style={{
                  marginTop: '15px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  * Required fields. We typically respond within 24 hours.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p>&copy; 2024 VFS Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
