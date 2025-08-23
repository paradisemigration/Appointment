'use client';

import { useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setCount(count + 1);
    console.log('Test button clicked:', count + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log('Input changed:', e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '100px auto' }}>
      <h1>JavaScript Test Page</h1>
      <p>Current count: {count}</p>
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0'
        }}
      >
        Click me! ({count})
      </button>
      
      <br />
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '200px'
        }}
      />
      
      <p>Input value: {inputValue}</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Test Results:</h3>
        <ul>
          <li>React State Working: {count > 0 ? '✅ YES' : '❌ NO'}</li>
          <li>Click Events Working: {count > 0 ? '✅ YES' : '❌ NO'}</li>
          <li>Input Events Working: {inputValue ? '✅ YES' : '❌ NO'}</li>
        </ul>
      </div>
    </div>
  );
}
