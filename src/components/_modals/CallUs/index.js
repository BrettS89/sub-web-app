import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import './CallUs.css';

const CallUsModal = ({ isOpen, setCallUsModal }) => {
  return (
    <Modal open={isOpen} className="CallUs">
      <Modal.Content className="CallUs-main">
        <div className="CallUs-close">
          <Icon name="close" onClick={() => setCallUsModal(false)} />
        </div>
        <div className="CallUs-content">
          Give us a call
        </div>
        <div className="CallUs-buttons">
          <Icon name="phone square" size="big" style={{ color: '#026FD2' }} /><span>(609) 213-1708</span>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default CallUsModal;
