'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SimpleSearchForm() {
  const router = useRouter();
  const [country, setCountry] = useState('');
  const [visa, setVisa] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search form submitted:', { country, visa, city });
    
    if (!country || !visa || !city) {
      alert('Please select all fields: Country, Visa Type, and City');
      return;
    }

    // Simple navigation
    const url = `/${country}/appointment/${visa}/${city}`;
    console.log('Navigating to:', url);
    
    try {
      window.location.href = url;
    } catch (error) {
      console.error('Navigation error:', error);
      alert('Navigation error: ' + error.message);
    }
  };

  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h3 style={{
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '25px'
      }}>
        Find Your Perfect Appointment
      </h3>

      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '25px'
        }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              🗺️ Destination Country
            </label>
            <select
              value={country}
              onChange={(e) => {
                console.log('Country changed:', e.target.value);
                setCountry(e.target.value);
              }}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select Country</option>
              <option value="france">🇫🇷 France</option>
              <option value="germany">🇩🇪 Germany</option>
              <option value="italy">🇮🇹 Italy</option>
              <option value="spain">��🇸 Spain</option>
              <option value="netherlands">🇳🇱 Netherlands</option>
              <option value="switzerland">🇨🇭 Switzerland</option>
            </select>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              📋 Visa Type
            </label>
            <select
              value={visa}
              onChange={(e) => {
                console.log('Visa changed:', e.target.value);
                setVisa(e.target.value);
              }}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select Visa Type</option>
              <option value="visit">Visit/Tourist Visa</option>
              <option value="work">Work Permit</option>
              <option value="study">Study Visa</option>
            </select>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              🏙️ Your City
            </label>
            <select
              value={city}
              onChange={(e) => {
                console.log('City changed:', e.target.value);
                setCity(e.target.value);
              }}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select City</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="pune">Pune</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'end' }}>
            <button
              type="submit"
              disabled={!country || !visa || !city}
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: country && visa && city ? '#1f2937' : '#9ca3af',
                backgroundColor: country && visa && city ? '#f59e0b' : '#e5e7eb',
                border: 'none',
                borderRadius: '8px',
                cursor: country && visa && city ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s'
              }}
            >
              🔍 Search
            </button>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          Selected: {country || 'None'} | {visa || 'None'} | {city || 'None'}
        </div>
      </form>
    </div>
  );
}
