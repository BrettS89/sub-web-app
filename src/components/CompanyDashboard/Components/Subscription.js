import React from 'react';

const Subscription = ({ subscription }) => {
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
        <span className="Dash-sub-title">${subscription.price} per {subscription.billingFrequency}</span>
      </div>
      <div>
        <h4>Items:</h4>
        <div className="CompanyDashboard-subscription-items">
          {displayItems()}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
