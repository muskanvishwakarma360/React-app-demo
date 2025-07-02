import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function TopMetrics() {
  const [metrics, setMetrics] = useState({});
  console.log('metrics series', Object.entries(metrics))

  const metricsData = async () => {
    try {
      const url = process.env.REACT_APP_API_URL;
      const res = await axios.get(`${url}/api/overview`);
      setMetrics(res.data); 
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    metricsData();
  }, []);

  return (
    <div className="flex space-x-4 mb-6">
      {Object.entries(metrics)?.map(([key, value]) => (
        <div key={key} className="bg-white rounded shadow p-4 w-1/4 ">
          <h3 className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}
