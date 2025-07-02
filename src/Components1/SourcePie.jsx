import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import axios from 'axios';

export default function SourcePie() {
    const [series, setSeries] = useState([]);
    const [labels, setLabels] = useState([]);

    const getSourcePie = () => {
        const url = process.env.REACT_APP_API_URL;
        axios.get(`${url}/api/leads`).then(res => {
            const counts = {};
            console.log('source', res.data)
            res.data?.forEach(lead => counts[lead.source] = (counts[lead.source] || 0) + 1);
            setLabels(Object.keys(counts));
            setSeries(Object.values(counts));
        });
    };

    useEffect(() => {
        getSourcePie();
    }, []);

    return (
        <div>
      
            <Chart options={{ labels }} series={series} type="pie" height={300} width={500} />
        </div>
    );
}
