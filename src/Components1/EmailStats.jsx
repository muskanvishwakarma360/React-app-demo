import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function EmailStats() {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  const getEmailStat = async () => {
    try {
      const url = process.env.REACT_APP_API_URL;
      const res = await axios.get(`${url}/api/emailcampaigns`)
      const arr = res.data;
      console.log('res email', arr);
      setLabels(arr?.map(email => email.subject));
      setSeries(arr?.map(email => email.openRate));
    } catch (err) {
      console.error('err', err)
    }
  }


  useEffect(() => {
    getEmailStat();
  }, []);


  const options = {
    labels,
    chart: {
      type: 'donut'
    },
    title: {
      text: 'Email Stats donut Chart  '
    },
  }

  return (
    <div>

      <Chart
        series={series}
        options={options}
        type="donut"
        height={300}
      />

    </div>
  );
}
