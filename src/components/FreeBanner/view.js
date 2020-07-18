import React from 'react';
import { Icon } from 'semantic-ui-react';

const View = ({ closeFreeBanner }) => {
  return (
    <div className="FreeBanner">
      <span>
        The first week/month of your first subscription is on us!
      </span>
      <span
        className="FreeBanner-close"
        onClick={closeFreeBanner}
      >
        <Icon name="close"/>
      </span>
    </div>
  );
};

export default View;
