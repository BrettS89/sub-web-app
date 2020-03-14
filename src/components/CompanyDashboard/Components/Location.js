import React from 'react';

const Location = ({ location: { address, city, state, zip } }) => {
  return (
    <div className="CompanyDashboard-Location">
      <span>{address}</span>
      <span>{city}</span>
      <span>{state}</span>
    </div>
  );
};

export default Location;
