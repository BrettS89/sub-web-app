import React from 'react';
import CancelSubscriptionModal from '../_modals/CancelSubscription';

const View = ({ renderUserSubs, user, navigateToAddCard, modalOpen, closeModal, cancelUserSubscription }) => {
  function renderPaymentText() {
    if (user.stripeId) {
      return (
        <div>
          <h3 className="Account-cardtext">Your card on file:</h3>
          <h4 className="Account-cardtext-sub">{user.cardType} ending in {user.cardLast4}</h4>
        </div>
      );
    }
    return <h3 className="Account-cardtext">You don't have a card on file</h3>
  }

  function renderButtonText() {
    return user.stripeId
      ? 'Replace card'
      : 'Add card'
  }

  return (
    <div className="Account">
      <h1>Payment Method</h1>
      <div className="Account-payment">
        {renderPaymentText()}
        <button
          className="button Account-payment-button"
          onClick={navigateToAddCard}
        >
          {renderButtonText()}
        </button>
      </div>
      
      <h1>Your Subscriptions</h1>
      {renderUserSubs()}
      <CancelSubscriptionModal
        open={modalOpen}
        closeModal={closeModal}
        cancelUserSubscription={cancelUserSubscription}
      />
    </div>
  );
}

export default View;
