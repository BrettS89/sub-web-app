import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideDrawer/components/ToggleButton';

const Navbar = ({ drawerClickHandler, isLoggedIn, hasCompany }) => {
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
      return <li><Link to="/account">Account</Link></li>;
    }
  }

  function renderDashboardLink() {
    if (hasCompany) {
      return <li><Link to="/company/dashboard">Company Dashboard</Link></li>
    }
  }

  return (
    <header className="Navbar">
      <nav className="Navbar-navigation">
        <div className="Navbar-toggle">
          <ToggleButton click={drawerClickHandler} />
        </div>
        <div className="Navbar-logo"><Link to="/">Paradyse</Link></div>
        <div className="Navbar-spacer" />
        <div className="Navbar-items">
          <ul>
            {renderDashboardLink()}
            <li><Link to="/spots">Find Subscriptions</Link></li>
            {displayAccount()}
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
