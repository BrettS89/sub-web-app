import React from 'react';

const View = ({ subData: { monthlySubs, monthlyAmount, weeklySubs, weeklyAmount } }) => {
  return (
    <div className="SubscriptionReport">
      <h1>Subscription Report</h1>
      <div className="SubscriptionReport-content">
        <div className="Subscription-content-subsection">
          <div className="Subscription-content-report">
            <span>Monthly subscribers:</span>
            <span className="Subscription-content-amount">{monthlySubs}</span>
          </div>
          <div className="Subscription-content-report">
            <span>Monthly subscription revenue:</span>
            <span className="Subscription-content-amount">${monthlyAmount}</span>
          </div>
        </div>
        <div className="Subscription-content-subsection">
          <div className="Subscription-content-report">
            <span>Weekly subscribers:</span>
            <span className="Subscription-content-amount">{weeklySubs}</span>
          </div>
          <div className="Subscription-content-report">
            <span>Weekly subscription revenue:</span>
            <span className="Subscription-content-amount">${weeklyAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
