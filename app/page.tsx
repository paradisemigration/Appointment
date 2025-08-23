'use client';

import { useState } from 'react';

export default function HomePage() {
  const [country, setCountry] = useState('');
  const [visaType, setVisaType] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const countries = [
    { value: 'france', label: '🇫🇷 France' },
    { value: 'germany', label: '🇩🇪 Germany' },
    { value: 'italy', label: '🇮🇹 Italy' },
    { value: 'spain', label: '🇪🇸 Spain' },
    { value: 'netherlands', label: '🇳🇱 Netherlands' },
    { value: 'switzerland', label: '🇨🇭 Switzerland' }
  ];

  const visaTypes = [
    { value: 'tourist', label: 'Tourist Visa' },
    { value: 'business', label: 'Business Visa' },
    { value: 'student', label: 'Student Visa' },
    { value: 'work', label: 'Work Visa' }
  ];

  const cities = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!country || !visaType || !city) {
      setMessage('Please select all fields');
      return;
    }

    setIsSubmitting(true);
    setMessage('Processing your request...');

    // Simulate form processing
    setTimeout(() => {
      setMessage(`✅ Success! Appointment search for ${country} ${visaType} from ${city}`);
      setIsSubmitting(false);
      
      // Navigate to appointment page
      const appointmentUrl = `/appointment/${country}/${visaType}/${city}`;
      window.location.href = appointmentUrl;
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                🌍 VFS Portal
              </h1>
              <p style={{ margin: 0, opacity: 0.9 }}>Professional Visa Services</p>
            </div>
            <nav>
              <a href="/" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Home</a>
              <a href="/services" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Services</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
            Professional Visa Services
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>
            Book appointments for 30+ countries with expert guidance and 98% success rate
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#f1c40f' }}>98%</div>
              <div>Success Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#f1c40f' }}>30+</div>
              <div>Countries</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#f1c40f' }}>24h</div>
              <div>Booking Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>
              Find Your Appointment
            </h2>

            {message && (
              <div style={{
                padding: '15px',
                borderRadius: '6px',
                marginBottom: '20px',
                textAlign: 'center',
                backgroundColor: message.includes('Success') ? '#d4edda' : 
                                message.includes('Please') ? '#fff3cd' : '#e7f3ff',
                color: message.includes('Success') ? '#155724' : 
                       message.includes('Please') ? '#856404' : '#004085',
                border: `1px solid ${message.includes('Success') ? '#c3e6cb' : 
                                   message.includes('Please') ? '#ffeaa7' : '#b6d4fe'}`
              }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-3">
                <div className="form-group">
                  <label className="form-label">Select Country</label>
                  <select 
                    className="form-select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Choose Country</option>
                    {countries.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Visa Type</label>
                  <select 
                    className="form-select"
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                  >
                    <option value="">Choose Visa Type</option>
                    {visaTypes.map(v => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Your City</label>
                  <select 
                    className="form-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Choose City</option>
                    {cities.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!country || !visaType || !city || isSubmitting}
                  style={{ fontSize: '18px', padding: '15px 40px' }}
                >
                  {isSubmitting ? '🔄 Searching...' : '🔍 Find Appointments'}
                </button>
              </div>

              <div style={{ 
                marginTop: '20px', 
                textAlign: 'center', 
                fontSize: '14px', 
                color: '#6c757d' 
              }}>
                Selected: {country || 'None'} | {visaType || 'None'} | {city || 'None'}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '36px' }}>
            Why Choose Our Service?
          </h2>

          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ marginBottom: '15px' }}>Fast Processing</h3>
              <p>Get your appointment booked within 24 hours with our automated system.</p>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🛡️</div>
              <h3 style={{ marginBottom: '15px' }}>98% Success Rate</h3>
              <p>Proven track record with expert document review and guidance.</p>
            </div>

            <div className="card text-center">
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ marginBottom: '15px' }}>Expert Support</h3>
              <p>24/7 WhatsApp support from certified visa consultants.</p>
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
          <p style={{ marginTop: '10px', opacity: 0.8 }}>
            Professional visa appointment booking services
          </p>
        </div>
      </footer>
    </div>
  );
}
