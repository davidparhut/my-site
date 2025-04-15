// /src/components/ForecastChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Реєстрація необхідних компонентів для Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ForecastChart = () => {
  const data = {
    labels: ['SaaS', 'Кібербезпека', 'AI/ML', 'Фінтех', 'HealthTech'],
    datasets: [{
      label: 'Прогноз зростання у 2024 (%)',
      data: [20, 35, 25, 18, 22],
      backgroundColor: [
        '#4a6fa5',
        '#4fc3f7',
        '#166088',
        '#4caf50',
        '#ff9800'
      ]
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
      <h3>Прогноз зростання на 2024 рік</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ForecastChart;
