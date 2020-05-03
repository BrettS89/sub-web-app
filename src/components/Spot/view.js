import React from 'react';
import { Icon } from 'semantic-ui-react'
import Subscription from './Components/Subscription';

const View = ({ spot, selectSubscription, goBack }) => {
  function renderSubscriptions() {
    return spot.subscriptions.map(s => {
      return (
        <Subscription
          key={s._id}
          sub={s}
          selectSubscription={selectSubscription}
        />
      );
    });
  }

  return (
    <div className="Subscription">
      <section className="Subscription-content">
        <img src={spot.photo} alt=""/>
        <div className="Spot-backbutton">
          <div onClick={goBack}>
            <Icon name="chevron left" />
            <span>Back</span>
          </div>
        </div>
        <div className="Subscription-content-content">
          <h1>{spot.name}</h1>
        </div>
      </section>

      <section className="Subscription-subscriptions">
        <h3>Subscriptions</h3>
        {renderSubscriptions()}
      </section>
    </div>
  );
};

export default View;
