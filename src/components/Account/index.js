import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_SUBSCRIPTIONS, CANCEL_USER_SUBSCRIPTION } from '../../redux/actions/types';
import View from './view';
import SubCard from './Components/SubCard';
import './Account.css';

const Account = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userSubscriptionId, setUserSubscriptionId] = useState(null);
  const dispatch = useDispatch();
  const userSubscriptions = useSelector(state => state.subscription.userSubscriptions);
  const user = useSelector(state => state.user.userData);

  useEffect(() => {
    if (!userSubscriptions.length) {
      dispatch({ type: GET_USER_SUBSCRIPTIONS });
    }
  },[]);

  function navigateToAddCard() {
    props.history.push('/addcreditcard');
  }

  function renderUserSubs() {
    return userSubscriptions.map(s => {
      return (
        <SubCard key={s._id} sub={s} cancel={openCancelModal} />
      );
    });
  }

  function cancelUserSubscription() {
    dispatch({ type: CANCEL_USER_SUBSCRIPTION, payload: userSubscriptionId });
    closeModal();
  }

  function openCancelModal(id) {
    setModalOpen(true);
    setUserSubscriptionId(id);
  }

  function closeModal() {
    setModalOpen(false);
    setUserSubscriptionId(null);
  }

  function logout() {
    localStorage.clear();
    window.location = "/";
  }

  return (
    <View
      renderUserSubs={renderUserSubs}
      user={user}
      navigateToAddCard={navigateToAddCard}
      modalOpen={modalOpen}
      closeModal={closeModal}
      cancelUserSubscription={cancelUserSubscription}
      logout={logout}
    />
  );
};

export default Account;
 