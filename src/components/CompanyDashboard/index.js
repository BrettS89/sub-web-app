import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { GET_COMPANY_DATA, CREATE_ITEM, CREATE_SUBSCRIPTION, ADD_LOCATION, PUBLISH_COMPANY, UNPUBLISH_COMPANY, APP_IS_LOADING, DELETE_ITEM, CANCEL_SUBSCRIPTION } from '../../redux/actions/types';
import { addBankAccount, getStripeDashboardLink } from '../../lib/api';
import './CompanyDashboard.css';
import View from './view';
import Subscription from './Components/Subscription';
import Item from './Components/Item';
import Location from './Components/Location';

const CompanyDashboard = props => {
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);
  const [addSubscriptionModalOpen, setAddSubscriptionModalOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [cancelSubscriptionModalOpen, setCancelSubscriptionModalOpen] = useState(false);
  const [subscriptionToCancel, setSubscriptionToCancel] = useState(null);
  const [itemText, itemTextChange] = useState(null);

  const dispatch = useDispatch();
  const company = useSelector(state => state.company.company);

  useEffect(() => {
    dispatch({ type: APP_IS_LOADING });
    async function saveStripeId() {
      const authCode = qs.parse(props.location.search, { ignoreQueryPrefix: true }).code;
      if (authCode) {
        try {
          await addBankAccount({ authCode });
        } catch(e) {
          console.log(e);
        }
      }
      dispatch({ type: GET_COMPANY_DATA });
    }
    saveStripeId();
  }, []);

  function renderItems() {
    return company.items.map(i => {
      return (
        <Item key={i._id} item={i} deleteItem={deleteItem} />
      );
    });
  }

  function renderSubscriptions() {
    return company.subscriptions.map(s => {
      return (
        <Subscription
          key={s._id}
          subscription={s}
          cancelSubscription={openCancelSubscriptionModal}
        />
      );
    });
  }

  function renderLocations() {
    return company.locations.map(l => {
      return (
        <Location key={l._id} location={l} />
      );
    });
  }

  function openItemModal() {
    setAddItemModalOpen(true);
  }

  function closeItemModal() {
    setAddItemModalOpen(false);
  }

  function openSubscriptionModal() {
    setAddSubscriptionModalOpen(true);
  }

  function closeSubscriptionModal() {
    setAddSubscriptionModalOpen(false);
  }

  function openLocationModal() {
    setLocationModalOpen(true);
  }

  function closeLocationModal() {
    setLocationModalOpen(false);
  }

  function openCancelSubscriptionModal(subscriptionId) {
    setSubscriptionToCancel(subscriptionId);
    setCancelSubscriptionModalOpen(true);
  }

  function closeCancelSubscriptionModal() {
    setSubscriptionToCancel(null);
    setCancelSubscriptionModalOpen(false);
  }

  function onItemTextChange(e) {
    itemTextChange(e.target.value);
  }

  function createItem() {
    if (itemText && itemText.length > 1) {
      closeItemModal();
      dispatch({ type: CREATE_ITEM, payload: { name: itemText } });
      itemTextChange(null);
    } else {
      alert('Item name must be longer');
    }
  }

  function createSubscription(form) {
    form.company = company.company._id;
    if (form.price < 1) {
      alert('Subscription must be at least one dollar');
    } else if (form.price > 50 && form.billingFrequency === 'week') {
      alert('Weekly subscriptions cannot exceed $50')
    } else if (form.price > 100 && form.billingFrequency === 'month') {
      alert('Monthly subscriptions cannot exceed $100');
    } else if (form.plan.length === 0) {
      alert('You must include items in your subscription');
    } else {
      dispatch({ type: CREATE_SUBSCRIPTION, payload: form });
    }
  }

  function addLocation(form) {
    if (form.address && form.city && form.state && form.zip) {
      dispatch({ type: ADD_LOCATION, payload: form });
    } else {
      alert('You must include an address, city, state, and zip');
    }
  }

  function deleteItem(item) {
    dispatch({ type: DELETE_ITEM, payload: item });
  }

  function publishCompany() {
    dispatch({ type: PUBLISH_COMPANY });
  }

  function unpublishCompany() {
    dispatch({ type: UNPUBLISH_COMPANY });
  }

  function cancelSubscription() {
    dispatch({ type: CANCEL_SUBSCRIPTION, payload: { subscriptionToCancel, closeCancelSubscriptionModal } });
  }

  async function openStripeDashboard() {
    try {
      const { url } = await getStripeDashboardLink();
      window.open(url);
    } catch(e) {
      alert(e.message);
    }
  }

  return Object.keys(company).length
    ? (
      <View
        company={company.company}
        renderItems={renderItems}
        renderSubscriptions={renderSubscriptions}
        openItemModal={openItemModal}
        closeItemModal={closeItemModal}
        openSubscriptionModal={openSubscriptionModal}
        closeSubscriptionModal={closeSubscriptionModal}
        addItemModalOpen={addItemModalOpen}
        addSubscriptionModalOpen={addSubscriptionModalOpen}
        onItemTextChange={onItemTextChange}
        createItem={createItem}
        items={company.items}
        createSubscription={createSubscription}
        renderLocations={renderLocations}
        locationModalOpen={locationModalOpen}
        openLocationModal={openLocationModal}
        closeLocationModal={closeLocationModal}
        addLocation={addLocation}
        publishCompany={publishCompany}
        unpublishCompany={unpublishCompany}
        cancelSubscriptionModalOpen={cancelSubscriptionModalOpen}
        closeCancelSubscriptionModal={closeCancelSubscriptionModal}
        cancelSubscription={cancelSubscription}
        openStripeDashboard={openStripeDashboard}
      />
    )
    : <div>Loading...</div>
};

export default CompanyDashboard;
