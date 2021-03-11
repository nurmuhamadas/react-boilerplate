import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import { Button } from '../../atoms';

const Header = ({ user, onLogin, onLogout, onCreateAccount, logo, className }) => (
  <header>
    <div className="wrapper">
      <div className="brand">
        <img src={logo} className="brand_logo" alt="Branded logo company" />
        <h1>nurmuhamadas</h1>
      </div>
      <div>
        {user ? (
          <Button variant="outlined" size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button variant="outlined" size="small" onClick={onLogin} label="Log in" />
            <Button variant="contained" size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
  className: '',
};
