export default function Market() {
    return (
        <main>
            <section id="market">
                <h2>Аналіз ринку</h2>
                <div className="content">

                    <div className="market-overview">
                        <h3>Огляд ринку</h3>
                        <div className="chart-container">
                            <canvas id="market-growth-chart"></canvas>
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
                                <canvas id="forecast-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
