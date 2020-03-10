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

  return (
    <div className="Sub">
      <div className="Sub-header">
        <span>{sub.name}</span>
        <span>${sub.price} {sub.billingFrequency}</span>
      </div>
      <div className="Sub-content">
        {renderItems()}
        {/* <div className="Sub-item">
          <span>Coffee:</span>
          <span>5 per week</span>
        </div>
        <div className="Sub-item">
          <span>Coffee:</span>
          <span>5 per week</span>
        </div> */}
      </div>
      <div className="Sub-link">
        <span onClick={() => selectSubscription(sub)}>
          Subscribe
          <FontAwesomeIcon style={{ fontSize: 26, marginLeft: 6 }} icon={faChevronCircleRight} />
        </span>
      </div>
    </div>
  );
};

export default Subscription;
