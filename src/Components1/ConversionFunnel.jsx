import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function ConversionFunnel() {
  const [series, setSeries] = useState([]);


  const getConversionFunnel = async () => {
    try {
      const url = process.env.REACT_APP_API_URL;
      const conversionRes = await axios.get(`${url}/api/conversion`);
      const total = conversionRes.data.length;

      console.log(conversionRes)

      console.log(conversionRes.data.length)

      const leadsRes = await axios.get(`${url}/api/leads`);
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
    labels: series?.map(i => i.label),
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
        series={series?.map(i => i.value)}
        options={options}
        type="pie"
        height={300}
      />
    </div>
  );
}
