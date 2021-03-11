import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HomeTemplate } from '../../templates';
import logo from '../../../assets/images/logo.png';
import './Home.css';

const Home = () => {
  const [user, setUser] = useState(null);
  
  const onLogin = () => {
    setUser('nurmuhamadas');
  }

  const onLogout = () => {
    setUser(null);
  }

  return (
    <HomeTemplate
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onLogin}
      actionFunction={() => console.log('Action CTA')}
      heroTextHeading="Learn to Code"
      brandLogo={logo}
      heroTextDetail="Easy ways to learn code with any videos provided here. Learn and grow with us."
    />
  );
};

export default Home;

Home.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};
