import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from  '../redux';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import LoadingModal from '../shared/components/LoadingModal';
import Router from '../routing';
import './App.css';

import LoginSignupModal from './_modals/LoginSignup';
import AddCreditCardModal from './_modals/AddCreditCard';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function drawerToggleClickHandler() {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  function backdropClickHandler() {
    setSideDrawerOpen(false);
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} close={backdropClickHandler} />
        {backdrop}
        <main style={{ marginTop: 65, height: '100%' }}>
          <Router />
        </main>
        <LoadingModal />
      </div>
      <LoginSignupModal />
      <AddCreditCardModal />
    </BrowserRouter>
  );
}

export default App;
