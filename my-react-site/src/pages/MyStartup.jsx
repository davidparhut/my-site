// src/pages/MyStartup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/App.css';

const MyStartup = () => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [employees, setEmployees] = useState(1);
  const [isCreated, setIsCreated] = useState(false);
  const [profit, setProfit] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати логіку збереження даних
    setIsCreated(true);
    // Приклад обчислення метрик (можна змінити)
    setProfit(employees * 1000);
    setExpenses(employees * 500);
  };

  return (
    <div className="App">
      <header>
        <h1>Симулятор управління стартапом</h1>
        <nav>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/my-startup" className="active">Мій стартап</Link></li>
            <li><Link to="/market">Ринок</Link></li>
            <li><Link to="/investors">Інвестори</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="startup-management">
          <h2>Мій стартап</h2>
          <div className="content">
            {!isCreated ? (
              <form onSubmit={handleSubmit} id="startup-form">
                <div className="form-group">
                  <label htmlFor="company-name">Назва компанії:</label>
                  <input
                    type="text"
                    id="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Сфера діяльності:</label>
                  <select
                    id="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  >
                    <option value="">Оберіть сферу</option>
                    <option value="it">IT та програмне забезпечення</option>
                    <option value="ecommerce">Електронна комерція</option>
                    <option value="finance">Фінансові послуги</option>
                    <option value="healthcare">Охорона здоров'я</option>
                    <option value="education">Освітні технології</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="employees">Кількість працівників:</label>
                  <input
                    type="number"
                    id="employees"
                    min="1"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                  />
                </div>

                <button type="submit">Створити стартап</button>
              </form>
            ) : (
              <div className="startup-dashboard">
                <h3>Панель управління</h3>
                <div className="company-info">
                  <h4>{companyName}</h4>
                  <p>Сфера: {industry}</p>
                  <p>Працівників: {employees}</p>
                </div>

                <div className="metrics">
                  <div className="metric">
                    <span className="metric-label">Прибуток:</span>
                    <span className="metric-value" id="profit">{profit}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Витрати:</span>
                    <span className="metric-value" id="expenses">{expenses}</span>
                  </div>
                </div>

                <h4>Ринки збуту</h4>
                <div id="markets">
                  {/* Тут можна додати список ринків */}
                  <p>Поки що немає ринків збуту</p>
                </div>

                <h4>Офіси</h4>
                <div id="offices">
                  {/* Тут можна додати список офісів */}
                  <p>Поки що немає офісів</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Симулятор управління стартапом. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default MyStartup;
