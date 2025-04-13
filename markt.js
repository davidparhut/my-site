
  document.addEventListener('DOMContentLoaded', function() {
  // Графік зростання ринку
  const marketCtx = document.getElementById('market-growth-chart').getContext('2d');
  new Chart(marketCtx, {
  type: 'line',
  data: {
  labels: ['2019', '2020', '2021', '2022', '2023'],
  datasets: [{
  label: 'Зростання ринку стартапів (%)',
  data: [5, 3, 15, 12, 8],
  borderColor: '#4a6fa5',
  backgroundColor: 'rgba(74, 111, 165, 0.1)',
  tension: 0.3,
  fill: true
}]
},
  options: {
  responsive: true,
  scales: {
  y: {
  beginAtZero: true
}
}
}
});

  // Графік прогнозу
  const forecastCtx = document.getElementById('forecast-chart').getContext('2d');
  new Chart(forecastCtx, {
  type: 'bar',
  data: {
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
},
  options: {
  responsive: true,
  scales: {
  y: {
  beginAtZero: true
}
}
}
});
});
