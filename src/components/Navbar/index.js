import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_IS_LOGGED_IN, GET_CREDITS } from '../../redux/actions/types';
import './Navbar.css';
import View from './view';

const Navbar = ({ drawerClickHandler, history }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.userData);

  useEffect(() => {
    dispatch({ type: CHECK_IS_LOGGED_IN });
    dispatch({ type: GET_CREDITS });
  }, []);

  return (
    <View
      drawerClickHandler={drawerClickHandler}
      isLoggedIn={isLoggedIn._id}
      hasCompany={isLoggedIn.company}
    />
  );
};

export default Navbar;
