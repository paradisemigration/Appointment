'use client';

import { useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Page loaded');

  // Test function that runs on component mount
  useState(() => {
    console.log('Component mounted');
    setMessage('✅ React is working');
  });

  const handleClick = () => {
    console.log('Button clicked, count:', count);
    setCount(count + 1);
    setMessage(`Button clicked ${count + 1} times`);
    
    // Also test alert
    alert(`Button clicked! New count: ${count + 1}`);
  };

  const handleInputChange = (e) => {
    console.log('Input changed:', e.target.value);
    setMessage(`Input value: ${e.target.value}`);
  };

  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>
        VFS Portal - JavaScript Test
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>
          Status: {message}
        </h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3>Count: {count}</h3>
          <button 
            onClick={handleClick}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '10px'
            }}
          >
            Click Me! ({count})
          </button>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3>Input Test:</h3>
          <input 
            type="text"
            placeholder="Type something..."
            onChange={handleInputChange}
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '300px'
            }}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3>Links Test:</h3>
          <a 
            href="/debug"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '18px',
              padding: '10px 20px',
              border: '2px solid #007bff',
              borderRadius: '5px',
              display: 'inline-block',
              margin: '10px'
            }}
          >
            Go to Debug Page
          </a>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '5px',
          marginTop: '30px'
        }}>
          <h4>Debug Info:</h4>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>React State: {count > 0 ? '✅ Working' : '❌ Click button to test'}</li>
            <li>JavaScript: {typeof window !== 'undefined' ? '✅ Client-side' : '❌ Server-side'}</li>
            <li>Console: Check browser console for log messages</li>
          </ul>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('=== VFS Portal Debug ===');
          console.log('Page loaded at:', new Date().toISOString());
          console.log('User agent:', navigator.userAgent);
          console.log('JavaScript enabled: YES');
          
          // Test basic DOM interaction
          setTimeout(() => {
            console.log('DOM ready test');
            const testElement = document.createElement('div');
            testElement.id = 'js-test';
            testElement.textContent = 'JavaScript DOM test passed';
            console.log('DOM manipulation test passed');
          }, 1000);
        `
      }} />
    </div>
  );
}
