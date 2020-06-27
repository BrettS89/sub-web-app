import React from 'react';

const SubCard = ({ sub, cancel }) => {
  return (
    <div className="SubCard">
      <img src={sub.company.photo} alt=""/>
      <h3 className="SubCard-name">
        {sub.company.name}
      </h3>
      <h4 className="SubCard-name">{sub.subscription.name} subscription ${sub.subscription.price.toFixed(2)}/{sub.subscription.billingFrequency}</h4>
      <span 
        className="SubCard-cancel"
        onClick={() => cancel(sub._id)}
      >
        Cancel subscription
      </span>
    </div>
  );
};

export default SubCard;
