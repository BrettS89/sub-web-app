import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../SideDrawer.css';

const ToggleButton = ({ click }) => {
  return (
    <button className="toggle-button" onClick={click}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default ToggleButton;
