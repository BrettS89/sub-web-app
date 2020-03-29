import React from 'react';
import { Icon } from 'semantic-ui-react';

const Item = ({ item, deleteItem }) => {
  return (
    <div className="CompanyDashboard-item">
      <div>
        <h4>{item.name}</h4>
      </div>
      <div className="CompanyDashboard-trashcan">
        <Icon name="trash alternate" onClick={() => deleteItem(item._id)} />
      </div>
    </div>
  );
};

export default Item;
