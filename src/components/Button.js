import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ text, wide, color }) => {
  let className = '';
  if (wide) className = 'double';

  const button = (
    <button
      id="button"
      type="button"
      className={className}
      style={{
        /* stylelint-disable-next-line */
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
  return button;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: '#f5913e',
};

export default Button;
