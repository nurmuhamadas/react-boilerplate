import React from 'react';
import PropTypes from 'prop-types';
import './HeroPitch.css';
import { Button } from '../../atoms';

const HeroPitch = ({ textHeading, textDetail, actionFunction, buttonLabel, align, className, ...props }) => {
  return (
    <div className={['pitch', align, className].join(' ')} {...props} >
      <h1 className="pitch_heading">{textHeading}</h1>
      <p className="pitch_desc">{textDetail}</p>
      <Button label={buttonLabel} onClick={actionFunction} />
    </div>
  );
};

HeroPitch.propTypes = {
  textHeading: PropTypes.string.isRequired,
  textDetail: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  align: PropTypes.oneOf(['right', 'center', 'left']),
  className: PropTypes.string,
  actionFunction: PropTypes.func,
};

HeroPitch.defaultProps = {
  buttonLabel: 'Get Started',
  align: 'left',
  className: '',
  actionFunction: undefined,
};

export default HeroPitch;
