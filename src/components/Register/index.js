import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_REGISTER, SET_SPOT_ID } from '../../redux/actions/types';
import View from './view';
import './Register.css';

const Register = props => {
  const dispatch = useDispatch();
  const registrationError  = useSelector(state => state.user.registrationError);
  const spotId = useSelector(state => state.spots.spotId);

  function submitForm(e) {
    e.preventDefault();
    const form = {
      // firstName: e.target.firstName.value,
      // lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch({ type: ON_REGISTER, payload: { form, navigate } });
  }

  function navigate() {
    if (spotId) {
      props.history.push('spot/' + spotId);
      dispatch({ type: SET_SPOT_ID, payload: null });
    } else {
      props.history.push('/spots');
    }
  }

  return (
    <View
      registrationError={registrationError}
      submit={submitForm}
    />
  );
};

export default Register;
