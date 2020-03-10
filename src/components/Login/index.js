import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_LOGIN, SET_SPOT_ID } from '../../redux/actions/types';
import View from './view';
import './Login.css';

const Login = props => {
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.user.loginError);
  const spotId = useSelector(state => state.spots.spotId);

  function handleSubmit(e) {
    e.preventDefault();
    const form = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch({ type: ON_LOGIN, payload: { form, navigate } });
  }

  function goToRegister() {
    props.history.push('/register');
  }

  function navigate() {
    if (spotId) {
      props.history.push('spot/' + spotId);
      dispatch({ type: SET_SPOT_ID, payload: null });
    } else {
      props.history.push('/account');
    }
  }

  return (
    <View
      submit={handleSubmit}
      loginError={loginError}
      goToRegister={goToRegister}
    />
  );
};

export default Login;
