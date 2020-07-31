import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import './UseCredit.css';

const UseCreditModal = ({ modalOpen, closeModal, useCredit, itemName }) => {
  return (
    <Modal open={modalOpen} className="UCModal">
      <Modal.Content>
        <div className="UCModal-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="UCModal-content">
          Redeem one {itemName}
        </div>
        <div className="UCModal-message">
          The store must see you tap redeem in order recieve your purchase
        </div>
        <div className="UCModal-buttons">
          <button
            className="button lsbtn"
            onClick={useCredit}
          >
            Redeem
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default UseCreditModal;
