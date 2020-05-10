import React from 'react';

const SubscriptionCard = ({ spot, navigate }) => {
  function navigateToSubscription() {
    navigate('/spot/' + spot.company._id);
  }

  const subscriptionsText = spot.company.subscriptions === 1
    ? '1 subscription'
    : `${spot.company.subscriptions} subscriptions`;
  
  return (
    <div className="SpotCard">
      <img src={spot.company.photo} alt=""/>
      <div className="SpotCard-content">
        <h2>{spot.company.name}</h2>
        <span>{subscriptionsText}</span>
        <button className="button SpotCard-button" onClick={navigateToSubscription}>
          View subscriptions
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
