import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from  '../redux';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import LoadingModal from '../shared/components/LoadingModal';
import Router from '../routing';
import './App.css';

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
    <Provider store={store()}>
      <div className="App">
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: 65, height: '100%' }}>
          <Router />
        </main>
        <LoadingModal />
      </div>
    </Provider>
  );
}

export default App;
