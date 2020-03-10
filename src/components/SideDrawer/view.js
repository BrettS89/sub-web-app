import React from 'react';

const View = ({ show }) => {
  let drawerClasses = show
    ? 'SideDrawer open'
    : 'SideDrawer'

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a>Find Subscriptions</a></li>
        <li><a>Login</a></li>
      </ul>
    </nav>
  );
};

export default View;
