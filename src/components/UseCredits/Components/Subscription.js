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
          userSubscriptionId={subscription.userSubscriptionId}
        />
      );
    });
  }

  function renderCancelledBySpot() {
    if (subscription.cancelledBySpot) {
      return (
        <span className="UseCredits-cancelled">
          This subscription has been cancelled by the local business and will be removed once all credits are used.
        </span>
      )
    }
  }

  return (
    <div className="UseCredits-subscription">
      <h2>{subscription.name}</h2>
      {renderItemCredits()}
      {renderCancelledBySpot()}
    </div>
  );
};

export default Subscription;
