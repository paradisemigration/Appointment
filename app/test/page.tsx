'use client';

import { useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setCount(count + 1);
    console.log('Test button clicked:', count + 1);
    alert(`Button clicked ${count + 1} times!`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log('Input changed:', e.target.value);
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '100px auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#333' }}>JavaScript Functionality Test</h1>
      <p style={{ fontSize: '18px' }}>Current count: <strong>{count}</strong></p>
      
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Click me! ({count})
      </button>
      
      <br />
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something to test input..."
        style={{
          padding: '12px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '300px',
          fontSize: '16px'
        }}
      />
      
      <p style={{ marginTop: '10px' }}>Input value: <strong>{inputValue}</strong></p>
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px',
        backgroundColor: '#e9ecef',
        borderRadius: '5px'
      }}>
        <h3 style={{ color: '#333' }}>Test Results:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0', fontSize: '16px' }}>
            React State Working: {count > 0 ? '✅ YES' : '❌ NO (click button to test)'}
          </li>
          <li style={{ margin: '10px 0', fontSize: '16px' }}>
            Click Events Working: {count > 0 ? '✅ YES' : '❌ NO (click button to test)'}
          </li>
          <li style={{ margin: '10px 0', fontSize: '16px' }}>
            Input Events Working: {inputValue ? '✅ YES' : '❌ NO (type in input to test)'}
          </li>
          <li style={{ margin: '10px 0', fontSize: '16px' }}>
            Console Logging: Check browser console for messages
          </li>
        </ul>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <a 
          href="/" 
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '16px'
          }}
        >
          ← Back to Homepage
        </a>
      </div>
    </div>
  );
}
