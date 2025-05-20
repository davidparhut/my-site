import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Market() {
  const marketGrowthRef = useRef(null);
  const forecastRef = useRef(null);
  // Store Chart.js instances
  const marketGrowthChartRef = useRef(null);
  const forecastChartRef = useRef(null);

  useEffect(() => {
    // Destroy old chart if exists
    if (marketGrowthChartRef.current) {
      marketGrowthChartRef.current.destroy();
    }
    // Market Growth Chart
    const marketGrowthCtx = marketGrowthRef.current.getContext("2d");
    marketGrowthChartRef.current = new Chart(marketGrowthCtx, {
      type: "line",
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Зростання ринку (%)",
            data: [12, 15, 22, 28, 33],
            borderColor: "#4a6fa5",
            backgroundColor: "rgba(74,111,165,0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Destroy old chart if exists
    if (forecastChartRef.current) {
      forecastChartRef.current.destroy();
    }
    // Forecast Chart
    const forecastCtx = forecastRef.current.getContext("2d");
    forecastChartRef.current = new Chart(forecastCtx, {
      type: "bar",
      data: {
        labels: ["SaaS", "Кібербезпека", "Web3", "Low-code/No-code"],
        datasets: [
          {
            label: "Прогноз зростання (%)",
            data: [20, 35, 12, 17],
            backgroundColor: [
              "#4fc3f7",
              "#4caf50",
              "#ff9800",
              "#166088",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Clean up on unmount
    return () => {
      if (marketGrowthChartRef.current) {
        marketGrowthChartRef.current.destroy();
        marketGrowthChartRef.current = null;
      }
      if (forecastChartRef.current) {
        forecastChartRef.current.destroy();
        forecastChartRef.current = null;
      }
    };
  }, []);

  return (
    <main>
      <section id="market">
        <h2>Аналіз ринку</h2>
        <div className="content">
          <div className="market-overview">
            <h3>Огляд ринку</h3>
            <div className="chart-container">
              <canvas id="market-growth-chart" ref={marketGrowthRef}></canvas>
            </div>
            <p>
              Ринок стартапів у 2023 році продовжує зростати, незважаючи на економічні складнощі.
              Найбільш динамічними є сектори фінтеху, штучного інтелекту та екологічних технологій.
            </p>
          </div>
          {/* ... (other sections stay unchanged) ... */}
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
                <canvas id="forecast-chart" ref={forecastRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
