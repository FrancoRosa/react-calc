import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ text }) => (
  <p id="display">
    { text }
  </p>
);

Display.defaultProps = {
  text: '0',
};

Display.propTypes = {
  text: PropTypes.string,
};

export default Display;
