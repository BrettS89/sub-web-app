import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/types';
import './FindSubscriptions.css';
import View from './view';
import SpotCard from './Components/SpotCard';

const FindSpots = props => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.spots);
  useEffect(() => {
    dispatch({ type: actions.GET_SPOTS });
  }, []);

  function navigate(path) {
    props.history.push(path);
  }

  function renderSpots() {
    return spots.map(s => {
      return (
        <SpotCard
          spot={s}
          key={s._id}
          navigate={navigate}
        />
      )
    })
  }

  return (
    <View
      renderSpots={renderSpots}
    />
  );
};

export default FindSpots;
