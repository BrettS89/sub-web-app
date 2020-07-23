import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../components/Landing';
import Login from '../components/Login';
import Register from '../components/Register';
import FindSpots from '../components/FindSpots';
import Spot from '../components/Spot';
import ConfirmSubscription from '../components/ConfirmSubscription';
import Account from '../components/Account';
import AddCreditCard from '../components/AddCreditCard';
import UseCredits from '../components/UseCredits';
import CompanyDashboard from '../components/CompanyDashboard';
import AddCompany from '../components/AddCompany';
import Contact from '../components/Contact';
import SubscriptionReport from '../components/SubscriptionReport';
import TermsAndConditions from '../components/TermsAndConditions';
import PrivacyPolicy from '../components/PrivacyPolicy';
import PhoneInput from '../components/PhoneInput';
import Activate from '../components/Activate';

export default () => {
  return (
    <Switch>
      <Route exact path="/activate" component={Activate} />
      <Route exact path="/phoneinput" component={PhoneInput} />
      <Route exact path="/privacypolicy" component={PrivacyPolicy} />
      <Route exact path="/user/termsandconditions" component={TermsAndConditions} />
      <Route exact path="/company/subscriptionreport" component={SubscriptionReport} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/company/add" component={AddCompany} />
      <Route exact path="/company/dashboard" component={CompanyDashboard} />
      <Route exact path="/usecredits" component={UseCredits} />
      <Route exact path="/addcreditcard" component={AddCreditCard} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/confirmsubscription/:id" component={ConfirmSubscription} />
      <Route exact path="/spot/:id" component={Spot} />
      <Route exact path="/spots" component={FindSpots} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};
