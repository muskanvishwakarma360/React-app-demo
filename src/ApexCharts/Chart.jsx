import React from "react";
import Chart from "react-apexcharts";


export default function ChartComponent() {
    const options = {
        chart: {
            id: "donut",
            height: 400,
            type: 'line',
            zoom: {
                enabled: true
            }
        },
        title: {
            text: 'Sales Overview', 
            align: 'left',
        },
      
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    };

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "series-2",
            data: [13, 24, 34, 45, 59, 65, 67, 91]
        }
    ]


    return (
        <div className="">

            <Chart options={options} series={series} type="bar" width={500} />

        </div>
    )
}
