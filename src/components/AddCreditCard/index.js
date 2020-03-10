import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CREDIT_CARD, SET_SPOT_ID } from '../../redux/actions/types';
import View from './view';
import './AddCreditCard.css';

const AddCreditCard = props => {
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const spotId = useSelector(state => state.spots.spotId);

  function addEditCreditCard() {
    const form = {
      cardNumber,
      date,
      cvc,
    };

    dispatch({ type: ADD_CREDIT_CARD, payload: { form, navigate } });
  }

  function navigate() {
    if (spotId) {
      props.history.push('/spot/' + spotId);
      dispatch({ type: SET_SPOT_ID, payload: null });
    } else {
      props.history.push('account');
    }
  }

  function onInputChange(type, e) {
    const val = e.target.value;
    if (type === 'cardNumber') {
      setCardNumber(val);
    } else if (type === 'date') {
      setDate(val)
    } else if (type === 'cvc') {
      setCvc(val);
    }
  }

  return (
    <View
      user={user}
      onInputChange={onInputChange}
      onFormSubmit={addEditCreditCard}
    />
  );
};

export default AddCreditCard;
