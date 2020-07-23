import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { getSubscription } from '../../lib/api';
import { SUBSCRIBE, SET_SUBSCRIPTION } from '../../redux/actions/types';
import './Confirm.css';

const ConfirmSubscription = props => {
  const [subscription, setSubscription] = useState(null);
  const dispatch = useDispatch();
  const sub = useSelector(state => state.subscription.subscription);
  const user = useSelector(state => state.user.userData);
  const firstSubscription = user.firstSubscription;

  useEffect(() => {
    async function setSub() {
      const id = props.match.params.id;
      let selectedSubscription = sub

      if (!sub || id !== sub._id) {
        dispatch({ type: SET_SUBSCRIPTION, payload: null });
        selectedSubscription = await getSubscription(id);
      }

      setSubscription(selectedSubscription);

    }
    setSub();
  }, []);

  function goBack() {
    props.history.goBack();
  }

  function navigate() {
    props.history.push('/usecredits');
  }

  function confirmSubscription() {
    const data = {
      subscriptionId: subscription._id,
    };
    dispatch({ type: SUBSCRIBE, payload: { data, navigate } });
  }

  function verify() {
    props.history.push('/phoneinput');
  }

  return subscription
    ? <View 
        sub={subscription} 
        confirmSubscription={confirmSubscription} 
        goBack={goBack} 
        firstSubscription={firstSubscription}
        activated={user.activated}
        verify={verify}
      />
    : <div />
};

export default ConfirmSubscription;
