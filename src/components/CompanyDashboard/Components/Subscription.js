import React from 'react';

const Subscription = ({ subscription, cancelSubscription }) => {
  function displayItems() {
    return subscription.plan.map(i => {
      return (
        <div key={i._id} className="CompanyDashboard-subscription-item">
          <span>
            {i.name}
          </span>
          <span>
            {i.quantity} per {subscription.billingFrequency}
          </span>
        </div>
      );
    });
  }

  return (
    <div className="CompanyDashboard-subscription">
      <div className="name-price">
        <span className="Dash-sub-title">{subscription.name}</span>
        <span className="Dash-sub-title">${subscription.price.toFixed(2)} per {subscription.billingFrequency}</span>
      </div>
      <div>
        <h4>Items:</h4>
        <div className="CompanyDashboard-subscription-items">
          {displayItems()}
        </div>
      </div>
      <span
        className="CompanyDashboard-cancelsubscription-text"
        onClick={() => cancelSubscription(subscription._id)}
      >
        Cancel subscription
      </span>
    </div>
  );
};

export default Subscription;
