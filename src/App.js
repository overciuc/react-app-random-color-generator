import './App.css';
import React, { useState } from 'react';

const RandomColorGenerator = () => {
  const [hex, setHex] = useState('#ffffff');
  const randomHexColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      <div
        style={{
          boxSizing: 'content-box',
          maxWidth: '200px',
          maxHeight: '200px',
          boxShadow: '1px 1px 15px 2px #000000',
          padding: '20px',
          margin: '50px auto',
          backgroundColor: '#f2f3f4',
          borderRadius: '20px',
        }}
      >
        <h3>Random Color Generator</h3>
        <h1
          style={{
            color: `${hex}`,
            textShadow: '2px 2px 2px #888888',
          }}
        >
          {hex}
        </h1>
        <button
          style={{
            backgroundColor: 'peachpuff',
            borderRadius: '8px',
            borderColor: 'sienna',
            //border: 'none',
          }}
          onClick={randomHexColor}
        >
          Press here!
        </button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
