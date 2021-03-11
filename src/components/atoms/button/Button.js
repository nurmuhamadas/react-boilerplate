import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ variant, size, label, className, ...props }) => {
  return (
    <button
      type="button"
      className={['button', `button-${variant}`, `button-${size}`, className ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  className: '',
  onClick: undefined,
};

export default Button;
