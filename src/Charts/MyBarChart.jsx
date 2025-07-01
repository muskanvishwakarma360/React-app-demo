import React from 'react'
import { Bar, Line, Doughnut, Bubble } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, plugins, scales, beginAtZero } from 'chart.js';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [10, 20, 30, 40, 50],
      borderColor: 'red',
      backgroundColor: 'blue',
      tension: 0.4
    },
    {
      label: 'order',
      // data: [14,25,34,20,56],
      data: [1, 2, 3, 4, 5],
      borderColor: 'green',
      backgroundColor: 'greenyellow',
      tension: 0.4
    },
    {
      label: 'order',
      // data: [10, 49, 43, 23,56],
      data: [6, 15, 25, 30, 40],
      borderColor: 'pink',
      backgroundColor: 'yellow',
      tension: 0.4
    }
  ]
}

const options = {
  resposive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Monthly Sales'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }

  }
}

export default function MyBarChart() {
  return ( 
  <div style={{display:"flex", flexWrap:'wrap' , justifyContent:'space-around'}}>
    <div style={{ height: "400px", width: "600px" }}>
      <Line type={Line} data={data} options={options} />
    </div>

     <div style={{ height: "400px", width: "600px" }}>
      <Bar type={Line} data={data} options={options} />
    </div>

     <div style={{ height: "400px", width: "600px" }}>
      <Doughnut type={Line} data={data} options={options} />
    </div>
  </div>

  )
}

