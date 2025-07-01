import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default function TrafficChart() {
    const [data, setData] = useState({ categories: [], visitors: [] });
    console.log('date t', data)
    const getTrafficChartData = () => {
        axios.get('http://localhost:3001/api/traffic').then(res => {
            const arr = res.data;
            console.log('data', res.data)
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
