import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMPANY } from '../../redux/actions/types';
import './AddCompany.css';
import View from './view';

const AddCompany = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const isLoggedIn = !!user._id;

  function addCompany(form) {
    dispatch({ type: ADD_COMPANY, payload: { form, navigate } });
  }

  function navigate() {
    props.history.push('/company/dashboard');
  }

  return (
    <View
      isLoggedIn={isLoggedIn}
      addCompany={addCompany}
    />
  );
};

export default AddCompany;
