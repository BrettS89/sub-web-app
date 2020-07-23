import React from 'react';
import { Icon } from 'semantic-ui-react'


const View = ({ sub, confirmSubscription, goBack, firstSubscription, activated, verify }) => {
  function renderFreeSubscription() {
    if (firstSubscription && activated) {
      return (
        <span className="Confirm-freesub">
          The first {sub.billingFrequency} of this subscription is free. You can cancel this subscription at any time before the next billing cycle.
        </span>
      );
    } else if (firstSubscription && !activated) {
      return (
        <React.Fragment className="Confirm-freeactivate">
          <span className="Confirm-freesub">
            The first {sub.billingFrequency} of this subscription will be free if you verify your mobile number before confirming your subscription.
          </span>
          <span className="Confirm-verify" onClick={verify}>
            Verify mobile number
          </span>
        </React.Fragment>
      );
      
    }
  }

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
      <h3 className="Confirm-companyname">{sub.company.name}</h3>
      <h3 style={{ marginTop: 0 }}>{sub.name} subscription</h3>
      <h3 style={{ margin: 0 }}>${sub.price.toFixed(2)} / {sub.billingFrequency}</h3>

      {renderFreeSubscription()}

      <button className="button" onClick={confirmSubscription}>
        Subscribe
      </button>
    </div>
  );
};

export default View;
