import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import LoadingModal from '../shared/components/LoadingModal';
import Router from '../routing';
import './App.css';

import LoginSignupModal from './_modals/LoginSignup';
import AddCreditCardModal from './_modals/AddCreditCard';
import FreeBanner from './FreeBanner';

function App() {
  const showFreeBanner = useSelector(state => state.app.showFreeBanner);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function drawerToggleClickHandler() {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  function backdropClickHandler() {
    setSideDrawerOpen(false);
  }

  function displayFreeBanner() {
    console.log(showFreeBanner, showFreeBanner);
    if (showFreeBanner & showFreeBanner !== null) {
      return <FreeBanner />;
    }
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        {displayFreeBanner()}
        <SideDrawer show={sideDrawerOpen} close={backdropClickHandler} />
        {backdrop}
        <main style={{ marginTop: showFreeBanner ? 104 : 65, height: '100%' }}>
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
