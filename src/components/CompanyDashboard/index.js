import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_COMPANY_DATA, CREATE_ITEM } from '../../redux/actions/types';
import './CompanyDashboard.css';
import View from './view';
import Subscription from './Components/Subscription';
import Item from './Components/Item';

const CompanyDashboard = () => {
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);
  const [addSubscriptionModalOpen, setAddSubscriptionModalOpen] = useState(false);
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
    console.log(form);
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
      />
    )
    : <div>Loading...</div>
};

export default CompanyDashboard;
