import React from 'react';

const SubscriptionCard = ({ spot, navigate }) => {
  function navigateToSubscription() {
    navigate('/spot/' + spot.company._id);
  }
  
  return (
    <div className="SpotCard">
      <img src={spot.company.photo} alt=""/>
      <div className="SpotCard-content">
        <h2>{spot.company.name}</h2>
        <button className="button SpotCard-button" onClick={navigateToSubscription}>
          View subscriptions
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
