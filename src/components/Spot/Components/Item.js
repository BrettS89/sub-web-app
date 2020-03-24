import React from 'react';

const Item = ({ plan: { item, quantity }, frequency }) => {
  return (
    <div className="Sub-item">
      <span>{item.name}:</span>
      <span>{quantity} per {frequency}</span>
    </div>
  );
};

export default Item;
