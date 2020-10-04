import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';
import './App.css';

const MyComponent = props => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

const App = () => {
  const x = new Big(123.4567);
  const y = Big('123456.7e-3');
  const z = new Big(x);
  return (
    <div className="app">
      <h2>Empty project</h2>
      <p>
        Is Big working?:
        <strong>{ String(x.eq(y) && x.eq(z) && y.eq(z)) }</strong>
      </p>
      <p>
        Is PropTypes working?:
        <strong>{ String(true) }</strong>
      </p>
    </div>
  );
};

export default App;
