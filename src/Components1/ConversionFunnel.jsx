import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function ConversionFunnel() {
  const [series, setSeries] = useState([]);


  const getConversionFunnel = async () => {
    try {
      const url = process.env.REACT_APP_API_URL;
      const conversionRes = await axios.get(`{${url}/api/conversion`);
      const total = conversionRes.data.length;

      const leadsRes = await axios.get('http://localhost:3001/api/leads');
      const leads = leadsRes.data.length;

      setSeries([
        { label: 'Leads', value: leads },
        { label: 'Converted', value: total }
      ]);
    } catch (err) {
      console.error('error fetching conversion funnel:', err);
    }
  };

  const options = {
    labels: series?.map(d => d.label),
    chart: { type: 'pie' },
    title: {
      text: 'Conversion Funnel Pie Chart  '
    },
  };


  useEffect(() => {
    getConversionFunnel()
  }, []);

  return (
    <div>

      <Chart
        series={series?.map(d => d.value)}
        options={options}
        type="pie"
        height={300}
      />
    </div>
  );
}
