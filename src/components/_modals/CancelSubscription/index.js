import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import './Cancel.css';

const CancelModal = ({ open, closeModal, cancelUserSubscription }) => {
  return (
    <Modal open={open} className="Cancel">
      <Modal.Content>
        <div className="Cancel-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="Cancel-content">
          Are you sure you want to cancel this subscription?
        </div>
        <div className="Cancel-buttons">
          <button
            className="button lsbtn"
            onClick={cancelUserSubscription}
          >
            Yes
          </button>
          <button
            className="button lsbtn"
            onClick={closeModal}
          >
            No
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default CancelModal;
