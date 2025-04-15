// /src/components/MarketGrowthChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Реєстрація необхідних компонентів для Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MarketGrowthChart = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Зростання ринку стартапів (%)',
      data: [5, 3, 15, 12, 8],
      borderColor: '#4a6fa5',
      backgroundColor: 'rgba(74, 111, 165, 0.1)',
      tension: 0.3,
      fill: true
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h3>Графік зростання ринку стартапів</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default MarketGrowthChart;
