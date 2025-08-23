'use client';

import { useState } from 'react';

export default function SimpleTest() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Simple JavaScript Test</h1>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <button 
        onClick={() => {
          console.log('Button clicked!');
          setCount(count + 1);
          alert('Button works! Count: ' + (count + 1));
        }}
        style={{
          fontSize: '20px',
          padding: '15px 30px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>
      <br />
      <br />
      <a href="/" style={{ fontSize: '18px' }}>Back to Home</a>
    </div>
  );
}
