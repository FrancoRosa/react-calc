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
      <span>
        Is Big working?:
        <strong>{ String(x.eq(y) && x.eq(z) && y.eq(z)) }</strong>
      </span>
    </div>
  );
}

export default App;
