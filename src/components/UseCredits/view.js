import React from 'react';
import UseCreditModal from '../_modals/UseCredit';

const View = ({ renderSubscriptions, closeModal, useCredit, modalOpen }) => {
  return (
    <div className="UseCredits">
      <h1>Use Your Subscriptions</h1>
      <p>Use your phone to show this screen when you are at the store and they will tap redeem</p>
      <div className="UseCredits-active">
        {renderSubscriptions()}
      </div>
      <UseCreditModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        useCredit={useCredit}
      />
    </div>
  );
};

export default View;
