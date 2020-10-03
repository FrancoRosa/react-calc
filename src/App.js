import React from 'react';
import Big from 'big.js';
import './App.css';

function App() {
  const x = new Big(123.4567);
  const y = Big('123456.7e-3');
  const z = new Big(x);
  return (
    <div className="app">
      <h2>Empty project</h2>
      <p>Is Big working?</p>
      <p>{ String(x.eq(y) && x.eq(z) && y.eq(z)) }</p>
    </div>
  );
}

export default App;
