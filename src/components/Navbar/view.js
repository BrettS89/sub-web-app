import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideDrawer/components/ToggleButton';

const Navbar = ({ drawerClickHandler, isLoggedIn }) => {
  function displayUseOrLogin() {
    if (!isLoggedIn) {
      return <Link to="/login">Login</Link>;
    }
    return <Link to="/usecredits">Use Subscriptions</Link>;
  }

  function displayUseOrFind() {
    if (!isLoggedIn) {
      return <Link to="/spots">Find Subscriptions</Link>;
    }
    return <Link to="/usecredits">Use Subscriptions</Link>;
  }

  function displayAccount() {
    if (isLoggedIn) {
      return <Link to="/account">Account</Link>;
    }
  }

  return (
    <header className="Navbar">
      <nav className="Navbar-navigation">
        <div className="Navbar-toggle">
          <ToggleButton click={drawerClickHandler} />
        </div>
        <div className="Navbar-logo"><a to="/">Paradyse</a></div>
        <div className="Navbar-spacer" />
        <div className="Navbar-items">
          <ul>
            <li><Link to="/spots">Find Subscriptions</Link></li>
            <li>{displayAccount()}</li>
            <li className="Navbar-login-button">{displayUseOrLogin()}</li>
          </ul>
        </div>
        <div className="Navbar-items2">
          <ul>
            <li className="button Navbar-responsive-button">{displayUseOrFind()}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
