'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Globe,
  Users,
  Award,
  Shield
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/constants';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import MobileHeader from '@/components/MobileHeader';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  visaType: string;
  message: string;
  urgency: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    message: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitMessage('Please fill in all required fields');
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('Sending your message...');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('✅ Message sent successfully! We will contact you within 2 hours.');
      
      // WhatsApp notification
      const message = encodeURIComponent(`New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Visa Type: ${formData.visaType}
Urgency: ${formData.urgency}
Message: ${formData.message}`);
      
      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
      }, 2000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        visaType: '',
        message: '',
        urgency: ''
      });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I found your contact page and would like to discuss visa appointment services.');
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <MobileHeader currentPage="/contact" />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
              Get In Touch With Us
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', marginBottom: '2rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2rem' }}>
              Expert visa consultation and appointment booking services available 24/7.
              Contact our certified visa consultants for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        {/* Contact Methods */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Multiple Ways to Reach Us</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Choose your preferred method of communication for instant assistance
            </p>
          </div>

          <div className="grid grid-3">
            {/* WhatsApp Contact */}
            <div className="card text-center">
              <div style={{
                backgroundColor: '#25d366',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Phone size={36} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>WhatsApp Support</h3>
              <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
                Instant messaging with our visa experts
              </p>
              <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{BUSINESS_INFO.phone}</p>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.5rem' }}>
                Available 24/7 • Response within 2 minutes
              </p>
              <button
                className="whatsapp-btn"
                onClick={openWhatsApp}
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                Chat Now
              </button>
            </div>

            {/* Email Contact */}
            <div className="card text-center">
              <div style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Mail size={36} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Email Support</h3>
              <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
                Detailed queries and document sharing
              </p>
              <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{BUSINESS_INFO.email}</p>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.5rem' }}>
                Response within 2 hours • Secure document transfer
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Mail size={18} style={{ marginRight: '0.5rem' }} />
                Send Email
              </a>
            </div>

            {/* Office Location */}
            <div className="card text-center">
              <div style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <MapPin size={36} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Office Location</h3>
              <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
                Main office and consultation center
              </p>
              <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{BUSINESS_INFO.address}</p>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.5rem' }}>
                Sunday to Thursday • 9:00 AM to 6:00 PM
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => window.open('https://maps.google.com/?q=Dubai,UAE', '_blank')}
                style={{ width: '100%' }}
              >
                <MapPin size={18} style={{ marginRight: '0.5rem' }} />
                View on Map
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Form */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Send Us a Message</h2>
              <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
                Fill out the form below and our visa experts will contact you within 2 hours with personalized assistance.
              </p>

              {submitMessage && (
                <div className={`alert ${submitMessage.includes('✅') ? 'alert-success' : submitMessage.includes('Please') ? 'alert-warning' : 'alert-info'}`} style={{ marginBottom: '2rem' }}>
                  {isSubmitting && <span className="spinner"></span>}
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-2" style={{ marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-2" style={{ marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Destination Country</label>
                    <select
                      className="form-select"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Country</option>
                      <option value="france">🇫🇷 France</option>
                      <option value="germany">🇩🇪 Germany</option>
                      <option value="italy">🇮🇹 Italy</option>
                      <option value="spain">🇪🇸 Spain</option>
                      <option value="netherlands">🇳🇱 Netherlands</option>
                      <option value="switzerland">🇨🇭 Switzerland</option>
                      <option value="usa">🇺🇸 USA</option>
                      <option value="uk">🇬🇧 United Kingdom</option>
                      <option value="canada">🇨🇦 Canada</option>
                      <option value="australia">🇦🇺 Australia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-2" style={{ marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Visa Type</label>
                    <select
                      className="form-select"
                      value={formData.visaType}
                      onChange={(e) => setFormData({...formData, visaType: e.target.value})}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Visa Type</option>
                      <option value="visit">Visit/Tourist Visa</option>
                      <option value="work">Work Permit</option>
                      <option value="study">Study Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Urgency Level</label>
                    <select
                      className="form-select"
                      value={formData.urgency}
                      onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Urgency</option>
                      <option value="standard">Standard (2-4 weeks)</option>
                      <option value="express">Express (1-2 weeks)</option>
                      <option value="urgent">Urgent (3-7 days)</option>
                      <option value="emergency">Emergency (24-48 hours)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your travel plans, specific requirements, or any questions you have..."
                    rows={5}
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} style={{ marginRight: '0.5rem' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Information</h2>
              <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
                Our expert team is available round-the-clock to assist you with all your visa appointment needs.
              </p>

              {/* Business Hours */}
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Clock size={24} style={{ color: '#3498db' }} />
                  Business Hours
                </h3>
                
                <div style={{ lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>WhatsApp Support:</span>
                    <strong>24/7 Available</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Email Support:</span>
                    <strong>24/7 Available</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Office Hours:</span>
                    <strong>9:00 AM - 6:00 PM</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Working Days:</span>
                    <strong>Sunday - Thursday</strong>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Globe size={24} style={{ color: '#27ae60' }} />
                  Service Areas
                </h3>
                
                <div>
                  <p style={{ marginBottom: '1rem' }}>We provide visa appointment services for clients from:</p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li>🇮🇳 India (Top 25 cities)</li>
                    <li>🇵🇰 Pakistan (Major cities)</li>
                    <li>🏴󠁧󠁢󠁥󠁮󠁧󠁿 Gulf Countries (UAE, Saudi, Qatar, Kuwait, Bahrain, Oman)</li>
                    <li>🇳🇵 Nepal (All major cities)</li>
                    <li>🇧🇩 Bangladesh (All major cities)</li>
                  </ul>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="card">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Award size={24} style={{ color: '#f39c12' }} />
                  Why Contact Us?
                </h3>
                
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#27ae60' }} />
                    <span>98% visa approval success rate</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#27ae60' }} />
                    <span>24-hour appointment booking</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#27ae60' }} />
                    <span>Expert document review</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#27ae60' }} />
                    <span>Transparent pricing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#27ae60' }} />
                    <span>Money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: '4rem', backgroundColor: '#f8f9fa', padding: '3rem', borderRadius: '12px' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.125rem', color: '#6c757d' }}>
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {[
              {
                question: "How quickly can you book a visa appointment?",
                answer: "We can typically book appointments within 24 hours, depending on availability at the VFS center. For urgent cases, we offer express services."
              },
              {
                question: "What is your success rate for visa approvals?",
                answer: "We maintain a 98% success rate for visa approvals through expert document review and proper application guidance."
              },
              {
                question: "Do you provide document review services?",
                answer: "Yes, we provide complimentary document review for all clients to ensure your application meets embassy requirements."
              },
              {
                question: "Can you help with urgent visa applications?",
                answer: "Absolutely! We offer express services for urgent travel requirements with same-day consultation and priority booking."
              },
              {
                question: "What countries do you serve?",
                answer: "We provide visa appointment services for 35+ countries including all Schengen countries, USA, UK, Canada, and Australia."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Yes, we offer a money-back guarantee if we cannot secure your appointment within the committed timeframe."
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h4 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>{faq.question}</h4>
                <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* WhatsApp Widget */}
      <WhatsAppWidget customMessage="Hi! I found your contact page and would like to discuss visa appointment services." />

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
