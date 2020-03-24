import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './view';
import './SideDrawer.css';

const SideDrawer = ({ show, history, close }) => {
  const user = useSelector(state => state.user.userData);

  function nav(path) {
    close();
    history.push(path);
  }

  return (
    <View
      show={show}
      isLoggedIn={user._id}
      nav={nav}
    />
  );
};

export default withRouter(SideDrawer);
