  
import React from 'react';
import { Modal, Loader } from 'semantic-ui-react';
import { useSelector } from "react-redux";
import './LoadingModal.css';

const LoadingModal = props => {
  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <Modal className="loading-modal" open={isLoading}>
      <Loader>Loading</Loader>
    </Modal>
  );
}

export default LoadingModal;
