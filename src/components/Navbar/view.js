import React, { useEffect, useState } from 'react';
import ToggleButton from '../SideDrawer/components/ToggleButton';

const Navbar = ({ drawerClickHandler, isLoggedIn }) => {
  function displayAccountOrLogin() {
    if (!isLoggedIn) {
      return <a href="/login">Login</a>;
    }
    return <a href="/account">Account</a>;
  }

  return (
    <header className="Navbar">
      <nav className="Navbar-navigation">
        <div className="Navbar-toggle">
          <ToggleButton click={drawerClickHandler} />
        </div>
        <div className="Navbar-logo"><a to="/">Galactic</a></div>
        <div className="Navbar-spacer" />
        <div className="Navbar-items">
          <ul>
            <li><a href="/spots">Find Subscriptions</a></li>
            <li className="Navbar-login-button">{displayAccountOrLogin()}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
