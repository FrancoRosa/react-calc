import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';
import './App.css';

const Display = props => {
  return (
    <p className="display">
      { props.text }
    </p>
  )
};

Display.defaultProps = {
  text: '0',
};

Display.propTypes = {
  text: PropTypes.string,
};

const Button = props => {
  return (
    <button type="button">
      { props.button }
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.string.isRequired,
};

const ButtonPanel = props => {
  return (
    <div>
      <div>
        <Button button='AC' />
        <Button button='+/-' />
        <Button button='%' />
        <Button button='÷' />
      </div>
      <div>
        <Button button='7' />
        <Button button='8' />
        <Button button='9' />
        <Button button='X' />
      </div>
      <div>
        <Button button='4' />
        <Button button='5' />
        <Button button='6' />
        <Button button='-' />
      </div>
      <div>
        <Button button='0' />
        <Button button='.' />
        <Button button='=' />
        <Button button='?' />
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
