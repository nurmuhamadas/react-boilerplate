import React from 'react';
import PropTypes from 'prop-types';
import { HeroPicth } from '../../molecules';
import './HeroSection.css';

const HeroSection = ({
  imageSrc, imgAlt, imgPosition, className, textDetail, textHeading, actionFunction, ...props
}) => {
  return (
    <section className={['hero_section', `img_${imgPosition}`, className].join(' ')} {...props}>
      {
        imageSrc && <img alt={imgAlt} src={imageSrc} className="hero_img" />
      }
      <HeroPicth
        textHeading={textHeading}
        textDetail={textDetail}
        actionFunction={actionFunction}
        align={imageSrc ? imgPosition : 'center'}
        className="hero_section-pitch"
      />
    </section>
  )
};

export default HeroSection;

HeroSection.propTypes = {
  imageSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  textDetail: PropTypes.string.isRequired,
  textHeading: PropTypes.string.isRequired,
  actionFunction: PropTypes.func,
};

HeroSection.defaultProps = {
  imageSrc: null,
  imgAlt: '',
  imgPosition: 'left',
  actionFunction: null,
  className: '',
}
