import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

const Subscription = ({ sub, selectSubscription }) => {

  function renderItems() {
    return sub.plan.map(p => {
      return (
        <Item
          key={p.item._id}
          plan={p}
          frequency={sub.billingFrequency}
        />
      );
    });
  }

  function renderDescription() {
    if (sub.description) {
      return (
        <div className="Sub-description">
          {sub.description}
        </div>
      );
    }
  }

  return (
    <div className="Sub">
      <div className="Sub-header">
        <span>{sub.name}</span>
        <span>${sub.price} {sub.billingFrequency}</span>
      </div>
      <div className="Sub-content">
        {renderItems()}
      </div>
      {renderDescription()}
      <div className="Sub-link">
        <span onClick={() => selectSubscription(sub)}>
          Subscribe
        </span>
      </div>
    </div>
  );
};

export default Subscription;
