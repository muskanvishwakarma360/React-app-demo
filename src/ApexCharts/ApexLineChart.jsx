
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

export default function ApexLineChart() {
      const [data1, setData1] = useState([]);
        const [data2, setData2] = useState([]);
    
    
        const getData = async () => {
            try {
                let res = await axios.get('http://localhost:3001/api')
                console.log('res', res.data.dummyData2);
                setData1(res.data.dummyData1)
                setData2(res.data.dummyData2)
    
            } catch (err) {
                console.log('err', err)
            }
    
        };
    
        const categories = data1.map((item) => item.month);
        console.log(categories)
    
        const values1 = data1.map((item) => item.value)
        console.log(values1)
    
    
        const values2 = data2.map((item) => item.value)
        console.log(values2)
    
    
    
        const options = {
            chart: {
                id: "basic-line",
                height: 400,
                type: 'line'
            },
            xaxis: {
                categories: categories
            }
        }
    
        const series = [
            {
                name: 'series-1',
                data: values1,
            },
              {
                name: 'series-2',
                data: values2,
            }
        ]
    
        useEffect(() => {
            getData()
        }, [])
  return (
    <div>
        <Chart options={options} series={series} type='line' width={600} />
    </div>
  )
}
