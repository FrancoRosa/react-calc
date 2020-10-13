import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  clickHandler, text, wide, color,
}) => {
  let className = '';
  if (wide) className = 'double';

  const styles = {
    /* stylelint-disable-next-line */
    backgroundColor: color,
  };

  const handleClick = (e, text) => clickHandler(text);

  return (
    <button
      id="button"
      type="button"
      className={className}
      style={styles}
      onClick={e => handleClick(e, text)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#f5913e',
};

export default Button;
