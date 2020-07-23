import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SUBSCRIPTION, OPEN_LOGIN_MODAL, SET_SPOT_ID, OPEN_CREDIT_CARD_MODAL,  } from '../../redux/actions/types';
import View from './view';
import './Spot.css';
import { getOneSpot } from '../../lib/api';

const Subscription = props => {
  const [spot, setOneSpot] = useState(null);
  const user = useSelector(state => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function setSpot() {
      const id = props.match.params.id;
      const { company } = await getOneSpot(id);
      setOneSpot(company);
    }
    setSpot();
  }, []);

  function goBack() {
    props.history.goBack();
  }

  function selectSubscription(subscription) {
    if (!user._id) {
      dispatch({ type: OPEN_LOGIN_MODAL });
      dispatch({ type: SET_SPOT_ID, payload: spot._id });
    } else if (!user.stripeId) {
      dispatch({ type: OPEN_CREDIT_CARD_MODAL });
      dispatch({ type: SET_SPOT_ID, payload: spot._id });
    } else {
      subscription.company = { _id: subscription.company, photo: spot.photo };
      dispatch({ type: SET_SUBSCRIPTION, payload: subscription });
      props.history.push(`/confirmsubscription/${subscription._id}`);
    }
  }

  function renderView() {
    return spot
      ? <View spot={spot} selectSubscription={selectSubscription} goBack={goBack} />
      : <div />
  }

  return renderView();
};

export default Subscription;
