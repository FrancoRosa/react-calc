import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ text }) => (
  <div id="display">
    <p>{ text }</p>
  </div>
);

Display.defaultProps = {
  text: '0.',
};

Display.propTypes = {
  text: PropTypes.string,
};

export default Display;
