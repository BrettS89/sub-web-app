import React from 'react';
import { useDispatch } from 'react-redux';
import { CLOSE_FREE_BANNER } from '../../redux/actions/types';
import View from './view';
import './FreeBanner.css';

const FreeBanner = props => {
  const dispatch = useDispatch();

  function closeFreeBanner() {
    localStorage.setItem('showFreeBanner', 'false');
    dispatch({ type: CLOSE_FREE_BANNER });
  }

  return (
    <View
      closeFreeBanner={closeFreeBanner}
    />
  );
};

export default FreeBanner;
