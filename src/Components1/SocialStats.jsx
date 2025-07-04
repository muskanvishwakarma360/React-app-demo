import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';

export default function SocialStats() {

    const [series, setSeries] = useState([]);
    const [categories, setCategories] = useState([]);

    const getSocialStat = async () => {
        try {
            const url = process.env.REACT_APP_API_URL;
            const res = await axios.get(`${url}/api/socialstat`);
            const arr = res.data;

            const dates = [...new Set(arr?.map(d => new Date(d.date).toLocaleDateString()))].sort();
            const plateform = [...new Set(arr?.map(s => s.plateform))];
            
            const plateformData = plateform?.map(plateform => ({
                name: plateform,
                data: dates.map(day => {
                    const match = arr?.find(social =>
                        social.plateform === plateform && new Date(social.date).toLocaleDateString() === day
                    );
                    return match ? match.followers : 0;
                }),
            }));

            setCategories(dates);
            setSeries(plateformData)
        } catch (err) {
            console.log('err', err);
        }
    };

    useEffect(() => {
        getSocialStat();
    }, [])

    const options = {
        chart: {
            type: 'line'
        },
        xaxis: {
            categories
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Social Media Stats'
        },
    };


    return (
        <div>
            <Chart
                series={series}
                options={options}
                type="line"
                height={300}
            />
        </div>
    )
}




