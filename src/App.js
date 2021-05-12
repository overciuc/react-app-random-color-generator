/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React, { useState } from 'react';

const randomColor = require('randomcolor');

// style the button
const buttonStyle = css`
  border-radius: 15px;
  margin: 5px;
  border-color: #6f7de0;
  background-color: #f3e3f1;
`;

// Function for custom color change (includes hue input, light input, and submit button)
function CustomColorChange(props) {
  const [customHue, setCustomHue] = useState('');
  const [customLight, setCustomLight] = useState('');

  // What to do when something was typed into the field for hue
  function onChangeCustomHue(event) {
    setCustomHue(event.currentTarget.value);
  }

  // What to do when something was typed into the field for light
  function onChangeCustomLight(event) {
    setCustomLight(event.currentTarget.value);
  }

  return (
    <div>
      <h6>Please enter a color name and lightness.</h6>

      {/* Input field to get hue */}
      <div>
        <input
          htmlFor="customHue"
          text="customHue"
          type="text"
          id="customHue"
          placeholder="eg. red, blue"
          value={customHue}
          onChange={onChangeCustomHue}
        />
      </div>

      {/* Input field to get luminosity */}
      <div>
        <input
          htmlFor="customLight"
          text="customLight"
          type="text"
          id="customLight"
          placeholder="eg. dark, light"
          value={customLight}
          onChange={onChangeCustomLight}
        />
      </div>

      {/* Submit button */}
      <div>
        <button
          css={buttonStyle}
          /* After the submit button is pressed transfer the input color and light to the hex code on the main page */
          onClick={() => {
            const newColor = randomColor({
              luminosity: customLight,
              hue: customHue,
            });
            props.setHex(newColor);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

const RandomColorGenerator = () => {
  const [hex, setHex] = useState('#ffffff');
  const [showInput, setShowInput] = useState(false);
  // Getting the random color
  const randomHexColor = () => {
    const randomColor1 =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor1);
  };

  return (
    /* div that contains the box */
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      {/* Style the box */}
      <div
        style={{
          boxSizing: 'content-box',
          maxWidth: '300px',
          maxHeight: '300px',
          boxShadow: '1px 1px 15px 2px #000000',
          padding: '20px',
          margin: '50px auto',
          backgroundColor: '#f2f3f4',
          borderRadius: '20px',
        }}
      >
        {/* Show the title */}
        <h3>Random Color Generator</h3>

        {/* Add the input fields after the Cutom color button is pressed */}
        {showInput && <CustomColorChange setHex={setHex} />}

        {/* Show the color code */}
        <h1
          style={{
            color: `${hex}`,
            textShadow: '2px 2px 2px #888888',
          }}
        >
          {hex}
        </h1>

        {/* Custom color button */}
        <button
          css={buttonStyle}
          /* When the button is pressed show the input fields */
          onClick={() => {
            setShowInput(true);
          }}
        >
          Custom color
        </button>

        {/* Random color button */}
        <button css={buttonStyle} onClick={randomHexColor}>
          Random color
        </button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
