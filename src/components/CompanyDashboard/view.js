import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import AddItem from '../_modals/AddItem';
import AddSubscription from '../_modals/AddSubscription';
import AddLocation from '../_modals/AddLocation';
import CancelSubscription from '../_modals/CompanyCancelSubscription';
import { redirectURI, strpieClientId, stripeState } from '../../config';

const View = ({
  company,
  renderItems,
  renderSubscriptions,
  renderLocations,
  openItemModal,
  closeItemModal,
  addItemModalOpen,
  onItemTextChange,
  createItem,
  addSubscriptionModalOpen,
  openSubscriptionModal,
  closeSubscriptionModal,
  items,
  createSubscription,
  locationModalOpen,
  openLocationModal,
  closeLocationModal,
  addLocation,
  publishCompany,
  unpublishCompany,
  cancelSubscriptionModalOpen,
  closeCancelSubscriptionModal,
  cancelSubscription,
}) => {

  function renderPublish() {
    if (company.published) {
      return <button className="button" onClick={unpublishCompany}>Unpublish</button>
    }
    return <button className="button" onClick={publishCompany}>Publish</button>
  }

  function renderAddBankAccount() {
    if (!company.stripeId) {
      return <button
              className="button"
              // onClick={()=> window.open(`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${strpieClientId}&scope=read_write`, "_blank")}
              onClick={()=> window.open(`https://connect.stripe.com/express/oauth/authorize?client_id=${strpieClientId}&state=${'stonecold'}`)}
            >
              Add Bank account
            </button>
    }
    return (
      <span className="bankaccount-added"><Icon name="check circle" size="big" /> Bank account added</span>
    )
  }

  return (
    <div className="CompanyDashboard">
      <div className="CompanyDashboard-header">
        <div className="CompanyDashboard-header-left">
          <h1>{company.name}</h1>
          <Link to="/company/subscriptionreport">Subscription report</Link>
        </div>
        <div className="CompanyDashboard-header-right">
          {renderAddBankAccount()}
          {renderPublish()}
        </div>
      </div>
      <div className="CompanyDashboard-main">
        <div className="CompanyDashboard-panel">
          <div className="CompanyDashboard-section">
            <h2>Items</h2>
            <div
              className="CompanyDashboard-add"
              onClick={openItemModal}
            >
              Add item <Icon name="plus circle" />
            </div>
            {renderItems()}
          </div>
          <div>
            <h2>Subscriptions</h2>
            <div
              className="CompanyDashboard-add"
              style={{ marginBottom: 0 }}
              onClick={openSubscriptionModal}
            >
              Create subscription <Icon name="plus circle" />
            </div>
            {renderSubscriptions()}
          </div>
        </div>
        <div className="CompanyDashboard-panel">
          <h2>Locations</h2>
          <div 
            className="CompanyDashboard-add"
            onClick={openLocationModal}>
            Add location <Icon name="plus circle" />
          </div>
          {renderLocations()}
        </div>
      </div>
      <AddItem
        open={addItemModalOpen}
        close={closeItemModal}
        onTextChange={onItemTextChange}
        createItem={createItem}
      />
      <AddSubscription
        open={addSubscriptionModalOpen}
        close={closeSubscriptionModal}
        items={items}
        createSubscription={createSubscription}
      />
      <AddLocation
        open={locationModalOpen}
        close={closeLocationModal}
        addLocation={addLocation}
      />
      <CancelSubscription
        open={cancelSubscriptionModalOpen}
        closeModal={closeCancelSubscriptionModal}
        cancelSubscription={cancelSubscription}
      />
    </div>
  );
};

export default View;
