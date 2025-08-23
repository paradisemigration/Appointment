'use client';

import { useState } from 'react';

export default function TestInteractivity() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Click the button below');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(`Button clicked ${count + 1} times!`);
    console.log('Test button clicked!', count + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(`Input value: ${e.target.value}`);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'white',
      border: '2px solid red',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 9999,
      minWidth: '200px'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: 'red' }}>JS Test</h3>
      <p style={{ margin: '5px 0', fontSize: '14px' }}>{message}</p>
      <button 
        onClick={handleClick}
        style={{
          background: 'blue',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '3px',
          cursor: 'pointer',
          margin: '5px 0',
          display: 'block',
          width: '100%'
        }}
      >
        Test Click ({count})
      </button>
      <input 
        type="text"
        placeholder="Test input"
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '3px'
        }}
      />
    </div>
  );
}
