'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, Phone, Menu, X } from 'lucide-react';

export default function FunctionalityTestPage() {
  const router = useRouter();
  const [testResults, setTestResults] = useState({
    useState: false,
    onClick: false,
    onChange: false,
    router: false,
    links: false
  });

  const [formData, setFormData] = useState({
    country: '',
    visa: '',
    city: ''
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const updateTestResult = (test: keyof typeof testResults, result: boolean) => {
    setTestResults(prev => ({ ...prev, [test]: result }));
  };

  const testStateUpdate = () => {
    updateTestResult('useState', true);
  };

  const testClickHandler = () => {
    updateTestResult('onClick', true);
    alert('Click handler working! ✅');
  };

  const testChangeHandler = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    updateTestResult('onChange', true);
  };

  const testRouter = () => {
    updateTestResult('router', true);
    router.push('/test');
  };

  const testLink = () => {
    updateTestResult('links', true);
  };

  const countries = ['France', 'Germany', 'Italy', 'Spain'];
  const visaTypes = ['Visit', 'Work', 'Study'];
  const cities = ['Delhi', 'Mumbai', 'Bangalore'];

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>VFS Portal - Functionality Test</h1>
      
      {/* Test Results Dashboard */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        border: '1px solid #dee2e6'
      }}>
        <h2 style={{ marginTop: 0 }}>Test Results Dashboard</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {Object.entries(testResults).map(([test, passed]) => (
            <div key={test} style={{
              padding: '10px',
              backgroundColor: passed ? '#d4edda' : '#f8d7da',
              color: passed ? '#155724' : '#721c24',
              borderRadius: '5px',
              textAlign: 'center',
              border: `1px solid ${passed ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              {passed ? '✅' : '❌'} {test.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Test 1: useState */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Test 1: React useState Hook</h3>
        <button 
          onClick={testStateUpdate}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test State Update
        </button>
      </div>

      {/* Test 2: onClick Events */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Test 2: Click Event Handlers</h3>
        <button 
          onClick={testClickHandler}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Test Click Handler
        </button>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {menuOpen ? <X style={{ width: '16px', height: '16px' }} /> : <Menu style={{ width: '16px', height: '16px' }} />}
          Toggle Menu
        </button>
        
        {menuOpen && (
          <div style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#e9ecef',
            borderRadius: '5px'
          }}>
            Menu is open! Click toggle again to close.
          </div>
        )}
      </div>

      {/* Test 3: onChange Events */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Test 3: Form Change Handlers</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Country:</label>
            <select 
              value={formData.country}
              onChange={(e) => testChangeHandler('country', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Visa Type:</label>
            <select 
              value={formData.visa}
              onChange={(e) => testChangeHandler('visa', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="">Select Visa</option>
              {visaTypes.map(visa => (
                <option key={visa} value={visa}>{visa}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>City:</label>
            <select 
              value={formData.city}
              onChange={(e) => testChangeHandler('city', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="">Select City</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
          Selected: {formData.country} - {formData.visa} - {formData.city}
        </div>
      </div>

      {/* Test 4: Next.js Router */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Test 4: Next.js Router Navigation</h3>
        <button 
          onClick={testRouter}
          style={{
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test Router Navigation
        </button>
        <p style={{ fontSize: '14px', color: '#6c757d', marginTop: '10px' }}>
          This will navigate to /test page (which should exist)
        </p>
      </div>

      {/* Test 5: Next.js Links */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Test 5: Next.js Link Component</h3>
        <Link 
          href="/"
          onClick={testLink}
          style={{
            backgroundColor: '#6f42c1',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Test Link to Homepage
        </Link>
      </div>

      {/* Summary */}
      <div style={{
        backgroundColor: '#e9ecef',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '30px'
      }}>
        <h3>Summary</h3>
        <p>
          Tests Passed: {Object.values(testResults).filter(Boolean).length} / {Object.keys(testResults).length}
        </p>
        <p style={{ 
          color: Object.values(testResults).every(Boolean) ? '#155724' : '#721c24',
          fontWeight: 'bold'
        }}>
          Status: {Object.values(testResults).every(Boolean) ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link 
          href="/"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '18px'
          }}
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
