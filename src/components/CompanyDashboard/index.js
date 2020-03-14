import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_COMPANY_DATA, CREATE_ITEM, CREATE_SUBSCRIPTION, ADD_LOCATION } from '../../redux/actions/types';
import './CompanyDashboard.css';
import View from './view';
import Subscription from './Components/Subscription';
import Item from './Components/Item';
import Location from './Components/Location';

const CompanyDashboard = () => {
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);
  const [addSubscriptionModalOpen, setAddSubscriptionModalOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [itemText, itemTextChange] = useState(null);

  const dispatch = useDispatch();
  const company = useSelector(state => state.company.company);

  useEffect(() => {
    dispatch({ type: GET_COMPANY_DATA });
  }, []);

  function renderItems() {
    return company.items.map(i => {
      return (
        <Item key={i._id} item={i} />
      );
    });
  }

  function renderSubscriptions() {
    return company.subscriptions.map(s => {
      return (
        <Subscription key={s._id} subscription={s} />
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
    if (form.plan.length > 0) {
      dispatch({ type: CREATE_SUBSCRIPTION, payload: form });
    } else {
      alert('You must include items in your subscription');
    }
  }

  function addLocation(form) {
    console.log(form);
    if (form.address && form.city && form.state && form.zip) {
      dispatch({ type: ADD_LOCATION, payload: form });
    } else {
      alert('You must include an address, city, state, and zip');
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
      />
    )
    : <div>Loading...</div>
};

export default CompanyDashboard;
