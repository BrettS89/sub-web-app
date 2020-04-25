import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ItemCredit = ({ item, openModal, subscriptionName, userSubscriptionId }) => {
  return (
    <div className="ItemCredit">
      <h3>{item.name}</h3>
      <h4>{item.credits} remaining</h4>
      <div className="ItemCredit-redeem">
        <FontAwesomeIcon icon={faCheckCircle} onClick={() => openModal(subscriptionName, item._id, item.credits, userSubscriptionId)} />
        <span>Redeem</span>
      </div>
    </div>
  );
};

export default ItemCredit;
