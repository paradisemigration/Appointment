'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WorkingFormTest() {
  const router = useRouter();
  const [country, setCountry] = useState('');
  const [visa, setVisa] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('Form ready - select options to test');

  const countries = [
    { value: 'france', label: '🇫🇷 France' },
    { value: 'germany', label: '🇩🇪 Germany' },
    { value: 'italy', label: '🇮🇹 Italy' },
    { value: 'spain', label: '🇪🇸 Spain' }
  ];

  const visaTypes = [
    { value: 'visit', label: 'Visit/Tourist Visa' },
    { value: 'work', label: 'Work Permit' },
    { value: 'study', label: 'Study Visa' }
  ];

  const cities = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' }
  ];

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
    setMessage(`✅ Country selected: ${value}`);
    console.log('Country changed:', value);
  };

  const handleVisaChange = (e) => {
    const value = e.target.value;
    setVisa(value);
    setMessage(`✅ Visa type selected: ${value}`);
    console.log('Visa changed:', value);
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setMessage(`✅ City selected: ${value}`);
    console.log('City changed:', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { country, visa, city });
    
    if (!country || !visa || !city) {
      setMessage('❌ Please select all fields');
      alert('Please select all fields');
      return;
    }

    setMessage(`🚀 Submitting: ${country} - ${visa} - ${city}`);
    alert(`Form submitted successfully!\nCountry: ${country}\nVisa: ${visa}\nCity: ${city}`);
    
    // Test navigation
    try {
      const url = `/${country}/appointment/${visa}/${city}`;
      console.log('Navigating to:', url);
      setMessage(`🔄 Navigating to: ${url}`);
      
      setTimeout(() => {
        router.push(url);
      }, 1000);
    } catch (error) {
      console.error('Navigation error:', error);
      setMessage(`❌ Navigation error: ${error.message}`);
    }
  };

  const testJavaScript = () => {
    console.log('JavaScript test button clicked');
    alert('JavaScript is working perfectly!');
    setMessage('✅ JavaScript test passed!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '40px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: '#333',
          marginBottom: '30px',
          fontSize: '32px'
        }}>
          VFS Portal - Working Form Test
        </h1>

        <div style={{
          backgroundColor: '#e9ecef',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <strong>Status: {message}</strong>
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <button
            onClick={testJavaScript}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '15px'
            }}
          >
            Test JavaScript
          </button>
          <button
            onClick={() => {
              setCountry('');
              setVisa('');
              setCity('');
              setMessage('Form reset');
            }}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reset Form
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Select Country:
              </label>
              <select
                value={country}
                onChange={handleCountryChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  border: '2px solid #ced4da',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">-- Choose Country --</option>
                {countries.map(c => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Select Visa Type:
              </label>
              <select
                value={visa}
                onChange={handleVisaChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  border: '2px solid #ced4da',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">-- Choose Visa Type --</option>
                {visaTypes.map(v => (
                  <option key={v.value} value={v.value}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Select City:
              </label>
              <select
                value={city}
                onChange={handleCityChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  border: '2px solid #ced4da',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">-- Choose City --</option>
                {cities.map(c => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              disabled={!country || !visa || !city}
              style={{
                backgroundColor: country && visa && city ? '#007bff' : '#6c757d',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                fontSize: '18px',
                borderRadius: '5px',
                cursor: country && visa && city ? 'pointer' : 'not-allowed',
                opacity: country && visa && city ? 1 : 0.6
              }}
            >
              Submit Form
            </button>
          </div>
        </form>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '5px',
          border: '1px solid #dee2e6'
        }}>
          <h3>Current Selections:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}>
              <strong>Country:</strong> {country || 'Not selected'}
            </li>
            <li style={{ margin: '10px 0' }}>
              <strong>Visa Type:</strong> {visa || 'Not selected'}
            </li>
            <li style={{ margin: '10px 0' }}>
              <strong>City:</strong> {city || 'Not selected'}
            </li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a 
            href="/"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '18px'
            }}
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
