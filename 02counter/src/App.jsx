import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(60);

  const min = 50;
  const max = 70;

  function increaseCounter() {
    setCounter(prev => Math.min(prev + 1, max));
  }

  function decreaseCounter() {
    setCounter(prev => Math.max(prev - 1, min));
  }

  let message = "";
  if(counter === max) message = "Maximum Value Reached";
  if(counter === min) message = "Minimum Value Reached";

  return (
    <div className="app-container">
      <h1>Welcome to Alex McDominey's React journey</h1>
      <h3>Here's a counter, you can add or decrease values in it</h3>

      <div className="counter-value">Count: {counter}</div>

      <button 
        onClick={increaseCounter} 
        disabled={counter === 70}
      >
        Increase value
      </button>

      <button 
        onClick={decreaseCounter}
        disabled={counter === 50}
      >
        Decrease value
      </button>

      <div className="message">{message}</div>
    </div>
  );

}

export default App
