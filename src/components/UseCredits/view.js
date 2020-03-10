import React from 'react';
import UseCreditModal from '../_modals/UseCredit';

const View = props => {
  return (
    <div className="UseCredits">
      <h1>Use Your Subscriptions</h1>
      <div className="UseCredits-active">
        <h2>Active Subscriptions</h2>
      </div>
      <UseCreditModal />
    </div>
  );
};

export default View;