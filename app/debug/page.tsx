'use client';

import { useState, useEffect } from 'react';

export default function DebugPage() {
  const [mounted, setMounted] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [jsWorking, setJsWorking] = useState(false);

  useEffect(() => {
    setMounted(true);
    setJsWorking(true);
    console.log('Debug page mounted successfully');
  }, []);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    console.log('Button clicked:', clickCount + 1);
    alert('JavaScript is working! Click count: ' + (clickCount + 1));
  };

  const handleTest = () => {
    console.log('Test function called');
    console.log('Current state:', { mounted, clickCount, jsWorking });
    
    // Test basic JavaScript
    const testDiv = document.getElementById('test-output');
    if (testDiv) {
      testDiv.innerHTML = 'JavaScript DOM manipulation works!';
      testDiv.style.color = 'green';
    }
    
    // Test fetch (if available)
    try {
      fetch('/api/test').catch(() => console.log('API test failed (expected)'));
    } catch (error) {
      console.log('Fetch test error:', error);
    }
  };

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#333' }}>JavaScript Debug Page</h1>
      
      <div style={{ 
        background: jsWorking ? '#d4edda' : '#f8d7da',
        color: jsWorking ? '#155724' : '#721c24',
        padding: '15px',
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <strong>Status: {jsWorking ? '✅ JavaScript is working!' : '❌ JavaScript not working'}</strong>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Test Results:</h3>
        <ul>
          <li>React mounted: {mounted ? '✅' : '❌'}</li>
          <li>useState working: {clickCount > 0 ? '✅' : '❌ (click button to test)'}</li>
          <li>useEffect working: {jsWorking ? '✅' : '❌'}</li>
          <li>Console logging: Check browser console</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleClick}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
            fontSize: '16px'
          }}
        >
          Test Click Handler ({clickCount})
        </button>

        <button 
          onClick={handleTest}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Run Full Test
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>DOM Test Output:</h3>
        <div 
          id="test-output" 
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f8f9fa'
          }}
        >
          Click "Run Full Test" to test DOM manipulation
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Page Info:</h3>
        <ul>
          <li>Page mounted: {mounted.toString()}</li>
          <li>Current URL: {typeof window !== 'undefined' ? window.location.href : 'Server-side'}</li>
          <li>User Agent: {typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) + '...' : 'N/A'}</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
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

      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('Inline script executed');
          window.debugPageLoaded = true;
        `
      }} />
    </div>
  );
}
