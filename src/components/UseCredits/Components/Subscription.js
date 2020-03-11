import React from 'react';
import ItemCredit from './ItemCredit';

const Subscription = ({ subscription, openModal }) => {
  function renderItemCredits() {
    return subscription.items.map(i => {
      return (
        <ItemCredit
          key={i._id}
          item={i}
          openModal={openModal}
          subscriptionName={subscription.name}
        />
      );
    });
  }

  return (
    <div className="UseCredits-subscription">
      <h2>{subscription.name}</h2>
      {renderItemCredits()}
    </div>
  );
};

export default Subscription;
