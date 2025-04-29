// src/pages/Market.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/App.css';

const Market = () => {
  const marketGrowthChartRef = useRef(null);
  const forecastChartRef = useRef(null);

  useEffect(() => {
    // Ініціалізація графіка росту ринку
    const marketGrowthCtx = marketGrowthChartRef.current.getContext('2d');
    new Chart(marketGrowthCtx, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Ріст ринку стартапів (%)',
          data: [12, 18, 15, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1,
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

    // Ініціалізація графіка прогнозу
    const forecastCtx = forecastChartRef.current.getContext('2d');
    new Chart(forecastCtx, {
      type: 'bar',
      data: {
        labels: ['SaaS', 'Кібербезпека', 'Web3', 'Low-code'],
        datasets: [{
          label: 'Прогноз зростання у 2024 (%)',
          data: [20, 35, 15, 25],
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
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
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Симулятор управління стартапом</h1>
        <nav>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/my-startup">Мій стартап</Link></li>
            <li><Link to="/market" className="active">Ринок</Link></li>
            <li><Link to="/investors">Інвестори</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="market">
          <h2>Аналіз ринку</h2>
          <div className="content">

            <div className="market-overview">
              <h3>Огляд ринку</h3>
              <div className="chart-container">
                <canvas ref={marketGrowthChartRef} id="market-growth-chart"></canvas>
              </div>
              <p>Ринок стартапів у 2023 році продовжує зростати, незважаючи на економічні складнощі.
                Найбільш динамічними є сектори фінтеху, штучного інтелекту та екологічних технологій.</p>
            </div>

            <div className="competitors-analysis">
              <h3>Аналіз конкурентів</h3>
              <table id="competitors-table">
                <thead>
                <tr>
                  <th>Компанія</th>
                  <th>Сфера</th>
                  <th>Розмір</th>
                  <th>Ринки збуту</th>
                  <th>Дохід (млн $)</th>
                  <th>Ріст</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>TechNova</td>
                  <td>Хмарні технології</td>
                  <td>Великий</td>
                  <td>Європа, Північна Америка</td>
                  <td>450</td>
                  <td className="growth-positive">+12%</td>
                </tr>
                <tr>
                  <td>GreenSolutions</td>
                  <td>Еко-технології</td>
                  <td>Середній</td>
                  <td>Європа, Азія</td>
                  <td>120</td>
                  <td className="growth-positive">+25%</td>
                </tr>
                <tr>
                  <td>PayFast</td>
                  <td>Фінтех</td>
                  <td>Великий</td>
                  <td>Глобальний</td>
                  <td>780</td>
                  <td className="growth-positive">+18%</td>
                </tr>
                <tr>
                  <td>HealthGuard</td>
                  <td>Медичні технології</td>
                  <td>Середній</td>
                  <td>Північна Америка</td>
                  <td>95</td>
                  <td className="growth-negative">-5%</td>
                </tr>
                <tr>
                  <td>EduFuture</td>
                  <td>Освітні технології</td>
                  <td>Малий</td>
                  <td>Європа</td>
                  <td>32</td>
                  <td className="growth-positive">+8%</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="trends-section">
              <h3>Ключові тренди та можливості</h3>
              <div className="trends-grid">
                <div className="trend-card">
                  <h4>🔄 Персоналізація через AI</h4>
                  <p>Штучний інтелект дозволяє створювати індивідуальні рішення для кожного клієнта.
                    Вкладення в AI-технології дають до 40% зростання конверсії.</p>
                </div>
                <div className="trend-card">
                  <h4>🌱 Сталий розвиток</h4>
                  <p>Споживачі віддають перевагу екологічно відповідальним брендам.
                    Стартапи з "зеленими" рішеннями отримують на 30% більше інвестицій.</p>
                </div>
                <div className="trend-card">
                  <h4>📱 Супер-додатки</h4>
                  <p>Поєднання соціальних функцій, електронної комерції та фінансових послуг
                    в одному додатку - новий тренд серед успішних стартапів.</p>
                </div>
                <div className="trend-card">
                  <h4>🏥 Віддалена медицина</h4>
                  <p>Телемедицина зростає на 22% щорічно.
                    Стартапи у цій ніші отримують державну підтримку в багатьох країнах.</p>
                </div>
              </div>
            </div>

            <div className="market-forecast">
              <h3>Прогноз розвитку ринку</h3>
              <div className="forecast-container">
                <div className="forecast-text">
                  <p>На основі аналізу поточних тенденцій, очікується наступне:</p>
                  <ul>
                    <li>Зростання ринку SaaS на 18-22% у 2024 році</li>
                    <li>Збільшення інвестицій у кібербезпеку на 35%</li>
                    <li>Розвиток Web3 та метавсесвітів, попри тимчасовий спад інтересу</li>
                    <li>Зростання попиту на low-code/no-code рішення</li>
                  </ul>
                </div>
                <div className="forecast-chart">
                  <canvas ref={forecastChartRef} id="forecast-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Симулятор управління стартапом. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default Market;
