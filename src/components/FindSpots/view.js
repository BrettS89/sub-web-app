import React from 'react';

const View = ({ renderSpots }) => {
  return (
    <div className="FindSpots">
      {renderSpots()}
    </div>
  );
};

export default View;
