import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ text }) => (
  <button id="button" type="button">
    { text }
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
