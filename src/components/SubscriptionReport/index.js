import React, { useEffect, useState } from 'react';
import { getCompanySubscriptionReport } from '../../lib/api';
import './SubscriptionReport.css';
import View from './view';

const SubscriptionReport = props => {
  const [subData, setSubData] = useState(null);

  useEffect(() => {
    async function getSubData() {
      const { subscriptionData } = await getCompanySubscriptionReport();
      setSubData(subscriptionData);
    }
    getSubData();
  }, []);

  return !subData
    ? <div>Loading...</div>
    : (
      <View
        subData={subData}
      />
    );
};

export default SubscriptionReport;
