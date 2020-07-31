import React from 'react';
import '../Landing.css';

const SpotCard = ({ name, address1, address2, image }) => {
  return (
    <div className="Landing-spot-card">
      <img src={image} alt="" className="Landing-spot-card-image" style={{ borderRadius: 3 }} />
      <div>
        <h3>{name}</h3>
        <p>{address1}</p>
        <p>{address2}</p>
      </div>
    </div>
  );
};

export default SpotCard;
