import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CREDITS, USE_CREDIT } from '../../redux/actions/types';
import './UseCredits.css';
import View from './view'

const UseCredits = props => {
  const credits = useSelector(state => state.subscription.credits);

  function renderCredits() {

  }

  function useCredit() {

  }
  
  return (
    <View />
  );
};

export default UseCredits;
