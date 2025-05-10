import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import '/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/App.css';

function Market() {
  const marketChartRef = useRef(null);
  const forecastChartRef = useRef(null);

  useEffect(() => {
    // Market Growth Chart
    new Chart(marketChartRef.current, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Зростання ринку (%)',
          data: [10, 15, 20, 25],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
      },
    });

    // Forecast Chart
    new Chart(forecastChartRef.current, {
      type: 'bar',
      data: {
        labels: ['SaaS', 'Кібербезпека', 'Web3', 'Low-code'],
        datasets: [{
          label: 'Прогноз зростання (%)',
          data: [20, 35, 10, 25],
          backgroundColor: [
            '#36a2eb',
            '#4bc0c0',
            '#ffcd56',
            '#ff6384'
          ],
        }],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

  return (
    <>
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
                <canvas ref={marketChartRef}></canvas>
              </div>
              <p>
                Ринок стартапів у 2023 році продовжує зростати, незважаючи на економічні складнощі.
                Найбільш динамічними є сектори фінтеху, штучного інтелекту та екологічних технологій.
              </p>
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
                  <p>
                    Штучний інтелект дозволяє створювати індивідуальні рішення для кожного клієнта.
                    Вкладення в AI-технології дають до 40% зростання конверсії.
                  </p>
                </div>
                <div className="trend-card">
                  <h4>🌱 Сталий розвиток</h4>
                  <p>
                    Споживачі віддають перевагу екологічно відповідальним брендам.
                    Стартапи з "зеленими" рішеннями отримують на 30% більше інвестицій.
                  </p>
                </div>
                <div className="trend-card">
                  <h4>📱 Супер-додатки</h4>
                  <p>
                    Поєднання соціальних функцій, електронної комерції та фінансових послуг
                    в одному додатку - новий тренд серед успішних стартапів.
                  </p>
                </div>
                <div className="trend-card">
                  <h4>🏥 Віддалена медицина</h4>
                  <p>
                    Телемедицина зростає на 22% щорічно.
                    Стартапи у цій ніші отримують державну підтримку в багатьох країнах.
                  </p>
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
                  <canvas ref={forecastChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Симулятор управління стартапом. Всі права захищені.</p>
      </footer>
    </>
  );
}

export default Market;
