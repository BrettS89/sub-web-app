import React from 'react';
import { Modal, Icon, Input } from 'semantic-ui-react';
import './AddItem.css';

const AddItem = ({ open, close, createItem, onTextChange }) => {
  return (
    <Modal open={open} className="AIModal">
      <Modal.Content>
        <div className="AIModal-close">
          <Icon name="close" onClick={close} />
        </div>
        <div className="AIModal-content">
          Add an item
        </div>
        <div className="AIModalForm">
          <Input placeholder="Item name" onChange={onTextChange} />
        </div>
        <div className="AIModal-buttons">
          <button
            className="button lsbtn"
            onClick={createItem}
          >
            Add item
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default AddItem;
