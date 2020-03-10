import React from 'react';

const View = ({ sub, confirmSubscription }) => {
  return (
    <div className="Confirm">
      <h1>Confirm your subscription</h1>
      <img src={sub.company.photo} alt=""/>
      <h3>{sub.company.name}</h3>
      <h3 style={{ marginTop: 0 }}>{sub.name} subscription</h3>
      <h3 style={{ margin: 0 }}>${sub.price} / {sub.billingFrequency}</h3>

      <button className="button" onClick={confirmSubscription}>
        Subscribe
      </button>
    </div>
  );
};

export default View;
