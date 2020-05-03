import React from 'react';
import UseCreditModal from '../_modals/UseCredit';

const View = ({ renderSubscriptions, closeModal, useCredit, modalOpen, credits, navigateToSpots }) => {
  function renderNoCredits() {
    if (!credits.length) {
      return (
        <div className="UseCredits-none">
          <div>
            <div className="UseCredits-none-title">
              You don't have any subscriptions
            </div>
            <button className="button" onClick={navigateToSpots}>
              Find subscriptions
            </button>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="UseCredits">
      <h1>Use Your Subscriptions</h1>
      <p>Use your phone to show this screen when you are at the store and they will tap redeem</p>
      <div className="UseCredits-active">
        {renderSubscriptions()}
      </div>
      {renderNoCredits()}
      <UseCreditModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        useCredit={useCredit}
      />
    </div>
  );
};

export default View;
