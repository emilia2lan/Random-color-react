import randomColor from 'randomcolor';
import React, { useState } from 'react';
import BoxContainer from './BoxContainer.js';

// Provides a random color with each click

export default function App() {
  const [emiliaColor, setEmiliaColor] = useState('#150a77');
   return (
    <div className="App">
      <h1>Random color generator</h1>

      <BoxContainer background={emiliaColor} />

      <button
        onClick={() => {
          setEmiliaColor(randomColor());
        }}
      >
        Click me!
      </button>
      <p>Here is the hex name of the random color {emiliaColor}</p>
    </div>
  );
}
