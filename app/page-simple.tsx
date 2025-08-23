'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SimpleHome() {
  const router = useRouter();
  const [country, setCountry] = useState('');
  const [testMessage, setTestMessage] = useState('Click a button to test');

  const handleTestClick = () => {
    setTestMessage('✅ JavaScript is working!');
    console.log('Test button clicked');
    alert('JavaScript is working!');
  };

  const handleNavigation = () => {
    console.log('Navigation test');
    router.push('/test');
  };

  const handleFormChange = (value: string) => {
    setCountry(value);
    setTestMessage(`Form changed to: ${value}`);
    console.log('Form changed:', value);
  };

  return (
    <div style={{ 
      padding: '50px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>VFS Portal - Minimal Test</h1>
      
      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h2>JavaScript Test Status</h2>
        <p style={{ fontSize: '18px', margin: '20px 0' }}>{testMessage}</p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Test 1: Basic Click Handler</h3>
        <button 
          onClick={handleTestClick}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Test Click Event
        </button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Test 2: Form Input</h3>
        <select 
          value={country}
          onChange={(e) => handleFormChange(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '200px'
          }}
        >
          <option value="">Select Country</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="italy">Italy</option>
        </select>
        <p>Selected: {country || 'None'}</p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Test 3: Navigation</h3>
        <button 
          onClick={handleNavigation}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Test Router Navigation
        </button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Test 4: Regular Link</h3>
        <a 
          href="/debug"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '18px',
            display: 'inline-block',
            padding: '10px 20px',
            border: '1px solid #007bff',
            borderRadius: '5px'
          }}
        >
          Go to Debug Page
        </a>
      </div>

      <div style={{
        marginTop: '50px',
        padding: '20px',
        background: '#e9ecef',
        borderRadius: '5px'
      }}>
        <h3>Debug Info:</h3>
        <ul>
          <li>React State: {country ? '✅ Working' : '❌ Not tested'}</li>
          <li>Console: Check browser console for messages</li>
          <li>URL: {typeof window !== 'undefined' ? window.location.href : 'Server-side'}</li>
        </ul>
      </div>
    </div>
  );
}
