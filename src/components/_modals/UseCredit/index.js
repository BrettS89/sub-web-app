import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon } from 'semantic-ui-react';
import './UseCredit.css';
import {  } from '../../../redux/actions/types';

const UseCreditModal = ({ modalOpen, closeModal, useCredit }) => {
  return (
    <Modal open={modalOpen} className="UCModal">
      <Modal.Content>
        <div className="UCModal-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="UCModal-content">
          Are you sure you want to redeem one credit?
        </div>
        <div className="UCModal-buttons">
          <button
            className="button lsbtn"
            onClick={useCredit}
          >
            Yes
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default UseCreditModal;
