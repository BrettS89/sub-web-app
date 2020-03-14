import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon } from 'semantic-ui-react';
import './UseCredit.css';

const UseCreditModal = ({ modalOpen, closeModal, useCredit }) => {
  return (
    <Modal open={modalOpen} className="AIModal">
      <Modal.Content>
        <div className="AIModal-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="AIModal-content">
          Are you sure you want to redeem one credit?
        </div>
        <div className="AIModal-buttons">
          <button
            className="button lsbtn"
          >
            Create item
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default UseCreditModal;
