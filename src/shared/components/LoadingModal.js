  
import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';
import { useSelector } from "react-redux";
import './LoadingModal.css';

const LoadingModal = props => {
  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <Dimmer page={true} active={isLoading} style={{ opacity: 0.8, zIndex: 100000 }}>
      <Loader size="medium" style={{ opacity: 1 }}>Loading</Loader>
    </Dimmer>
  );
}

export default LoadingModal;
