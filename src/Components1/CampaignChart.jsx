import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function CampaignChart() {
  const [series, setSeries] = useState([]);
  const [cats, setCats] = useState([]);

  const getCampaigns = async () => {
    try {
      const url = process.env.REACT_APP_API_URL;
      const response = await axios.get(`${url}/api/campaigns`);
      const data = response.data;
      console.log('Campaigns data:', data);
      const campaignNames = data.map(item => item.campaignName);
      setCats(campaignNames);

      const clicksData = data.map(item => item.clicks);
      const costData = data.map(item => item.cost);

      setSeries([
        { name: 'Clicks', data: clicksData },
        { name: 'Cost', data: costData }
      ]);

    } catch (err) {
      console.error('failed to fetch campaigns:', err);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);


  const options = {
    chart: {
      id: 'campigns'
    },
    xaxis: {
      categories: cats
    },
    title: {
      text: "Campaigns Chart Cost and CTR"
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%'
      }
    },
  }

  return (
    <div>
      <Chart
        series={series}
        options={options}
        type="bar"
        height={350}
      />
    </div>
  );
}
