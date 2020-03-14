import React from 'react';
import { Icon } from 'semantic-ui-react';
import AddItem from '../_modals/AddItem';
import AddSubscription from '../_modals/AddSubscription';

const View = ({
  company,
  renderItems,
  renderSubscriptions,
  openItemModal,
  closeItemModal,
  addItemModalOpen,
  onItemTextChange,
  createItem,
  addSubscriptionModalOpen,
  openSubscriptionModal,
  closeSubscriptionModal,
  items,
  createSubscription
}) => {

  return (
    <div className="CompanyDashboard">
      <h1>{company.name}</h1>
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
          <div className="CompanyDashboard-add">Add location <Icon name="plus circle" /></div>
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
    </div>
  );
};

export default View;
