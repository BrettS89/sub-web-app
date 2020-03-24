import React from 'react';

const View = ({ show, isLoggedIn, nav }) => {
  let drawerClasses = show
    ? 'SideDrawer open'
    : 'SideDrawer'

    function renderNav() {
    if (isLoggedIn) {
      return (
        <React.Fragment>
          <li><span onClick={() => nav('/usecredits')}>Use Subscriptions</span></li>
          <li><span onClick={() => nav('/spots')}>Find Subscriptions</span></li>
          <li><span onClick={() => nav('/account')}>Account</span></li>
          <li><span onClick={() => nav('/contact')}>Contact</span></li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <li><span onClick={() => nav('/spots')}>Find Subscriptions</span></li>
        <li><span onClick={() => nav('/login')}>Login</span></li>
        <li><span onClick={() => nav('/contact')}>Contact</span></li>
      </React.Fragment>
    );
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li className="SideDrawer-logo"><a>Paradyse</a></li>
        {renderNav()}
      </ul>
    </nav>
  );
};

export default View;
