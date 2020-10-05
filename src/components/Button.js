import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ text, className }) => (
  <button id="button" type="button" className={className}>
    { text }
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'common',
};

export default Button;
