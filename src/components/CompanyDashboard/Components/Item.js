import React from 'react';
import { Icon } from 'semantic-ui-react';

const Item = ({ item }) => {
  return (
    <div className="CompanyDashboard-item">
      <div>
        <h4>{item.name}</h4>
      </div>
      <div className="CompanyDashboard-trashcan">
        <Icon name="trash alternate" />
      </div>
    </div>
  );
};

export default Item;
