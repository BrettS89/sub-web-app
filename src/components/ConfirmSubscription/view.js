import React from 'react';
import { Icon } from 'semantic-ui-react'


const View = ({ sub, confirmSubscription, goBack }) => {
  return (
    <div className="Confirm">
      <h1>Confirm your subscription</h1>
      <img src={sub.company.photo} alt=""/>
      <div className="Confirm-backbutton">
        <div onClick={goBack}>
          <Icon name="chevron left" />
          <span>Back</span>
        </div>
      </div>
      <h3>{sub.company.name}</h3>
      <h3 style={{ marginTop: 0 }}>{sub.name} subscription</h3>
      <h3 style={{ margin: 0 }}>${sub.price.toFixed(2)} / {sub.billingFrequency}</h3>

      <button className="button" onClick={confirmSubscription}>
        Subscribe
      </button>
    </div>
  );
};

export default View;
