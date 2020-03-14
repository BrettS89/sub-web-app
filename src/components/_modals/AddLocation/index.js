import React, { useState } from 'react';
import { Modal, Icon, Input } from 'semantic-ui-react';
import './AddLocation.css';

const AddSubscription = ({ open, close, addLocation }) => {
  function onAddLocation(e) {
    e.preventDefault();
    console.log(e.target.address);
    const form = {
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value,
    }
    addLocation(form);
    close();
  }

  return (
    <Modal open={open} className="ALModal">
      <Modal.Content>
        <div className="ALModal-close">
          <Icon name="close" onClick={close} />
        </div>
        <div className="ALModal-content">
          Add a location
        </div>
        <form className="ALModalForm" onSubmit={onAddLocation}>
          <Input
            iconPosition='left'
            name="address"
            placeholder="Address"
            type="text"
            className="ALModal-input"
          >
            <Icon name='point' />
            <input name="address" maxLength="17" />
          </Input>
          <Input
            iconPosition='left'
            name="city"
            placeholder="City"
            type="text"
            className="ALModal-input"
          >
            <Icon name='building' />
            <input name="city" />
          </Input>
          <Input
            iconPosition='left'
            name="state"
            placeholder="State NJ, NY, etc"
            type="text"
            className="ALModal-input"
          >
            <Icon name='globe' />
            <input name="state" />
          </Input>
          <Input
            iconPosition='left'
            name="zip"
            placeholder="Zip Code"
            type="text"
            className="ALModal-input"
          >
            <Icon name='map' />
            <input name="zip" />
          </Input>
          <div className="ALModal-buttons">
            <button
              className="button ALbtn"
            >
              Add location
            </button>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
};

export default AddSubscription;
