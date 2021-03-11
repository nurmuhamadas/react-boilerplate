import React from 'react';
import PropTypes from 'prop-types';
import { Header, HeroSection } from '../../organisms';
import heroImage from '../../../assets/images/hero_img.svg';
import './Home.css';

const HomeTemplate = ({
  user, onLogin, onLogout, onCreateAccount, brandLogo,
  actionFunction, heroTextDetail, heroTextHeading, 
}) => (
  <article id="home">
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
      logo={brandLogo}
      className="home_header"
    />
    <HeroSection
      actionFunction={actionFunction}
      imageSrc={heroImage}
      textDetail={heroTextDetail}
      textHeading={heroTextHeading}
      imgPosition="left"
      imgAlt="Hero image"
      className="home_hero"
    />
  </article>
);
HomeTemplate.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  heroTextDetail: PropTypes.string.isRequired,
  heroTextHeading: PropTypes.string.isRequired,
  actionFunction: PropTypes.func.isRequired,
};
HomeTemplate.defaultProps = {
  user: null,
};

export default HomeTemplate;
