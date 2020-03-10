import React from 'react';
import Subscription from './Components/Subscription';

const View = ({ spot, selectSubscription }) => {
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
