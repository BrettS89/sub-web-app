import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CREDITS, USE_CREDIT } from '../../redux/actions/types';
import './UseCredits.css';
import View from './view';
import Subscription from './Components/Subscription';

const UseCredits = props => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [subscriptionName, setSubscriptionName] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [credits, setCredits] = useState(null);
  const creditsState = useSelector(state => state.subscription.credits);

  function renderSubscriptions() {
    return creditsState.map(s => {
      return (
        <Subscription
          key={s.name}
          subscription={s}
          openModal={openModal}
        />
      );
    });
  }

  function openModal(subName, itmId, creds) {
    setItemId(itmId);
    setSubscriptionName(subName);
    setCredits(creds);
    setModalOpen(true);
  }

  function closeModal() {
    setItemId(null);
    setSubscriptionName(null);
    setCredits(null);
    setModalOpen(false);
  }

  function useCredit() {
    if (credits > 0) {
      dispatch({ type: USE_CREDIT, payload: { subscriptionName, itemId } });
      closeModal();
    }
  }

  return (
    <View
      renderSubscriptions={renderSubscriptions}
      closeModal={closeModal}
      modalOpen={modalOpen}
      useCredit={useCredit}
    />
  );
};

export default UseCredits;
