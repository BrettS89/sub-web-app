import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon } from 'semantic-ui-react';
import './UseCredit.css';
import {  } from '../../../redux/actions/types';

const LoginSignupModal = props => {
  const dispatch = useDispatch();

  function closeModal() {

  }

  return (
    <Modal open={false} className="UCModal">
      <Modal.Content>
        <div className="UCModal-close">
          <Icon name="close" />
        </div>
        <div className="UCModal-content">
          Are you sure you want to redeem this credit?
        </div>
        <div className="UCModal-buttons">
          <button
            className="button lsbtn"
          >
            Yes
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default LoginSignupModal;
