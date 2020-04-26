import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import '../CancelSubscription/Cancel.css';

const CancelModal = ({ open, closeModal, cancelSubscription }) => {
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
            onClick={cancelSubscription}
          >
            Yes
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default CancelModal;
