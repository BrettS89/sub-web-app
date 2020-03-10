import React from 'react';
import './Backdrop.css';

const Backdrop = ({ click }) => {
  return (
    <div
      className="Backdrop"
      onClick={click}
    />
  );
};

export default Backdrop;
