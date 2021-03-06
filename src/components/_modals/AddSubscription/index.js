import React, { useState } from 'react';
import { Modal, Icon, Input, Dropdown, Form, TextArea } from 'semantic-ui-react';
import './AddSubscription.css';

const AddSubscription = ({ open, close, items, createSubscription }) => {
  const [itemsToAdd, setItemsToAdd] = useState([]);
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const frequencyOptions = [
    {
      key: 'month',
      text: 'Monthly',
      value: 'month',
    },
    {
      key: 'weekly',
      text: 'Weekly',
      value: 'week',
    },
  ];

  const itemList = items.map(i => {
    return {
      key: i._id,
      text: i.name,
      value: i._id,
    };
  });

  function closeModal() {
    setItemsToAdd([]);
    setItem(null);
    setQuantity(null);
    setFrequency(null);
    close();
  }

  function addItem() {
    const exists = itemsToAdd.find(i => i.name === item);
    if (exists) {
      alert('A subscription cannot contain 2 of the same item');
      return;
    }
    if (item && quantity) {
      setItemsToAdd([...itemsToAdd, { key: item.key, name: item, quantity }]);
    }
  }

  function renderItems() {
    return itemsToAdd.map(i => {
      return (
        <div
          className="ASModal-addedItem"
          key={i.name}
        >
          <span>
            {i.name}
          </span>
          <span>
            Qty: {i.quantity}
          </span>
        </div>
      );
    });
  }

  function renderCreateSubscriptionButton() {
    if (!itemsToAdd.length) {
      return (
        <div
          className="button ASbtn-disabled"
        >
          Create subscription
        </div>
      )
    } else {
      return (
        <button
          className="button ASbtn"
        >
          Create subscription
        </button>
      )
    }
  }

  function onCreateSubscription(e) {
    e.preventDefault();
    const plan = itemsToAdd.map(i => {
      const itm = items.find(it => it.name === i.name);
      return {
        item: itm._id,
        quantity: i.quantity,
      };
    });
    const form = {
      name: e.target.name.value,
      price: e.target.price.value,
      billingFrequency: frequency === 'monthly' ? 'month' : 'week',
      plan,
      description: e.target.description.value,
    };
    createSubscription(form);
    closeModal();
  }

  return (
    <Modal open={open} className="ASModal">
      <Modal.Content>
        <div className="ASModal-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="ASModal-content">
          Create a subscription
        </div>
        <Form className="ASModalForm" onSubmit={onCreateSubscription}>
          <Input
            iconPosition='left'
            name="name"
            placeholder="Name"
            type="text"
            className="ASModal-input"
          >
            <Icon name='tag' />
            <input maxLength="17" />
          </Input>
          <Input
            iconPosition='left'
            name="price"
            placeholder="Price"
            type="number"
            className="ASModal-input"
          >
            <Icon name='dollar sign' />
            <input step="0.01" />
          </Input>
          <Dropdown
            name="frequency"
            placeholder='Frequency'
            onChange={e => setFrequency(e.target.textContent.toLowerCase())}
            fluid
            control={Dropdown}
            selection
            options={frequencyOptions}
            className="ASModal-input"
          />
          <TextArea
            className="ASModal-input"
            rows={3}
            name="description"
            placeholder="Description / notes (optional)"
            style={{ marginBottom: 10 }}
          />
          <div className="ASModal-item-picker">
            <Dropdown
              placeholder='Item'
              fluid
              selection
              options={itemList}
              className="ASModal-input2"
              style={{ width: 140 }}
              onChange={e => setItem(e.target.textContent)}
            />
            <Input
              placeholder="Qty"
              type="number"
              className="ASModal-input2"
              onChange={e => setQuantity(e.target.value)}
            />
            <Icon className="ASModal-add-item" name="plus circle" onClick={addItem} />
          </div>
          <div className="ASModal-addedItems">
            {renderItems()}
          </div>
          <div className="ASModal-buttons">
            {renderCreateSubscriptionButton()}
          </div>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddSubscription;
