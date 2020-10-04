import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Display = ({ text }) => (
  <p className="display">
    { text }
  </p>
);

Display.defaultProps = {
  text: '0',
};

Display.propTypes = {
  text: PropTypes.string,
};

const Button = ({ text }) => (
  <button type="button">
    { text }
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

const ButtonPanel = () => (
  <div>
    <div>
      <Button text="AC" />
      <Button text="+/-" />
      <Button text="%" />
      <Button text="÷" />
    </div>
    <div>
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      <Button text="X" />
    </div>
    <div>
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      <Button text="-" />
    </div>
    <div>
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="+" />
    </div>
    <div>
      <Button text="0" />
      <Button text="." />
      <Button text="=" />
      <Button text="?" />
    </div>

  </div>
);

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
