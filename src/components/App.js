import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';
import './App.css';

const Display = props => {
  return (
    <div>
      { props.display }
    </div>
  );
};

Display.defaultProps = {
  display: '0',
};

Display.propTypes = {
  display: PropTypes.string,
};

const Button = props => {
  return (
    <span>
      { props.button }
    </span>
  );
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
};

const ButtonPanel = props => {
  return (
    <div>
      <div>
        <Button button='1' />
        <Button button='2' />
        <Button button='3' />
        <Button button='4' />
      </div>
    </div>
  );
};

const App = () => {
  const x = new Big(123.4567);
  const y = Big('123456.7e-3');
  const z = new Big(x);
  return (
    <div className="app">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
