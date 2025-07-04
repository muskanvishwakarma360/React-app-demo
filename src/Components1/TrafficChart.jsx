import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function TrafficChart() {
    const [data, setData] = useState({ categories: [], visitors: [] });

    const getTrafficChartData = () => {
        const url = process.env.REACT_APP_API_URL;
        axios.get(`${url}/api/traffic`).then(res => {
            const arr = res.data;
            setData({
                categories: arr?.map(d => new Date(d.date).toLocaleDateString()),
                visitors: arr?.map(d => d.visitors),
            });
        });
    };

    useEffect(() => {
        getTrafficChartData();
    }, []);


    const series = [
        {
            name: 'Visitors',
            data: data.visitors   
        }
    ]

    const options = {
        chart: { 
            id: 'traffic'
         },
        xaxis: { 
            categories: data.categories           
         },
        title: {
            text: 'Traffic Chart '
        }
    }



    return (
        <div>
            <Chart
                series={series}
                options={options}
                type="line"
                height={300}
            />
        </div>
    );
}
