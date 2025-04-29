// src/pages/Investors.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faDollarSign,
  faSearch,
  faUsers,
  faHandHoldingUsd,
  faRocket,
  faEnvelope,
  faLightbulb,
  faBullseye,
  faChartLine,
  faNetworkWired,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/App.css';

const Investors = () => {
  const [industryFilter, setIndustryFilter] = useState('all');
  const [amountFilter, setAmountFilter] = useState('all');

  const investorsData = [
    {
      id: 1,
      name: 'Horizon Ventures',
      logo: 'https://via.placeholder.com/40',
      interests: 'Технології, AI, Блокчейн',
      type: 'Венчурний фонд',
      amount: '$500k - $5M',
      stages: 'Seed, Series A'
    },
    {
      id: 2,
      name: 'Green Angel',
      logo: 'https://via.placeholder.com/40',
      interests: 'Еко-технології, Відновлювана енергетика',
      type: 'Ангельський інвестор',
      amount: '$50k - $250k',
      stages: 'Pre-seed, Seed'
    },
    {
      id: 3,
      name: 'FinTech Capital',
      logo: 'https://via.placeholder.com/40',
      interests: 'Фінтех, Банкінг, Платежі',
      type: 'Венчурний фонд',
      amount: '$1M - $10M',
      stages: 'Series A, B'
    },
    {
      id: 4,
      name: 'MedVentures',
      logo: 'https://via.placeholder.com/40',
      interests: 'Медицина, Біотех, HealthTech',
      type: 'Корпоративний фонд',
      amount: '$250k - $2M',
      stages: 'Seed, Series A'
    },
    {
      id: 5,
      name: 'EduGrowth',
      logo: 'https://via.placeholder.com/40',
      interests: 'Освітні технології, EdTech',
      type: 'Інкубатор',
      amount: '$25k - $100k',
      stages: 'Pre-seed'
    }
  ];

  const handleContact = (investorId) => {
    // Тут можна додати логіку для контакту з інвестором
    console.log(`Contacting investor with ID: ${investorId}`);
    alert(`Запит на контакт з інвестором ${investorId} відправлено!`);
  };

  const filteredInvestors = investorsData.filter(investor => {
    const industryMatch = industryFilter === 'all' ||
      investor.interests.toLowerCase().includes(industryFilter);

    let amountMatch = true;
    if (amountFilter !== 'all') {
      const [min, max] = investor.amount
        .replace(/\$/g, '')
        .replace(/k/g, '000')
        .replace(/M/g, '000000')
        .split(' - ')
        .map(Number);

      if (amountFilter === 'small') {
        amountMatch = max <= 100000;
      } else if (amountFilter === 'medium') {
        amountMatch = min >= 100000 && max <= 1000000;
      } else if (amountFilter === 'large') {
        amountMatch = min >= 1000000;
      }
    }

    return industryMatch && amountMatch;
  });

  return (
    <div className="App">
      <header>
        <h1>Симулятор управління стартапом</h1>
        <nav>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/my-startup">Мій стартап</Link></li>
            <li><Link to="/market">Ринок</Link></li>
            <li><Link to="/investors" className="active">Інвестори</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="investors">
          <div className="investors-header">
            <h2>Інвестиційні можливості</h2>
            <p>Знайдіть потенційних інвесторів для свого стартапу</p>
          </div>

          <div className="content">
            <div className="investor-filters">
              <div className="filter-group">
                <label htmlFor="industry-filter">
                  <FontAwesomeIcon icon={faFilter} /> Сфера:
                </label>
                <select
                  id="industry-filter"
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="all">Всі сфери</option>
                  <option value="tech">Технології</option>
                  <option value="fintech">Фінтех</option>
                  <option value="healthcare">Охорона здоров'я</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="education">Освіта</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="amount-filter">
                  <FontAwesomeIcon icon={faDollarSign} /> Сума:
                </label>
                <select
                  id="amount-filter"
                  value={amountFilter}
                  onChange={(e) => setAmountFilter(e.target.value)}
                >
                  <option value="all">Будь-яка</option>
                  <option value="small">До $100k</option>
                  <option value="medium">$100k-$1M</option>
                  <option value="large">Понад $1M</option>
                </select>
              </div>
              <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} /> Пошук
              </button>
            </div>

            <div className="investor-stats">
              <div className="stat-card">
                <FontAwesomeIcon icon={faUsers} />
                <div>
                  <h3>142</h3>
                  <p>Активних інвесторів</p>
                </div>
              </div>
              <div className="stat-card">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <div>
                  <h3>$87M</h3>
                  <p>Загальний об'єм інвестицій</p>
                </div>
              </div>
              <div className="stat-card">
                <FontAwesomeIcon icon={faRocket} />
                <div>
                  <h3>63</h3>
                  <p>Профінансованих стартапів</p>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table id="investors-table">
                <thead>
                <tr>
                  <th>Назва</th>
                  <th>Сфера інтересів</th>
                  <th>Тип інвестора</th>
                  <th>Об'єм інвестицій</th>
                  <th>Стадії</th>
                  <th>Дія</th>
                </tr>
                </thead>
                <tbody>
                {filteredInvestors.map(investor => (
                  <tr key={investor.id}>
                    <td>
                      <div className="investor-profile">
                        <img src={investor.logo} alt={investor.name} className="investor-logo" />
                        <span>{investor.name}</span>
                      </div>
                    </td>
                    <td>{investor.interests}</td>
                    <td>{investor.type}</td>
                    <td>{investor.amount}</td>
                    <td>{investor.stages}</td>
                    <td>
                      <button
                        className="contact-btn"
                        onClick={() => handleContact(investor.id)}
                      >
                        <FontAwesomeIcon icon={faEnvelope} /> Контакт
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>

            <div className="investment-tips">
              <h3><FontAwesomeIcon icon={faLightbulb} /> Поради щодо пошуку інвестицій</h3>
              <div className="tips-grid">
                <div className="tip-card">
                  <FontAwesomeIcon icon={faBullseye} />
                  <h4>Чіткий фокус</h4>
                  <p>Чітко формулюйте свою пропозицію та унікальні переваги вашого продукту</p>
                </div>
                <div className="tip-card">
                  <FontAwesomeIcon icon={faChartLine} />
                  <h4>Показники</h4>
                  <p>Готуйте зрозумілі фінансові прогнози та показники росту</p>
                </div>
                <div className="tip-card">
                  <FontAwesomeIcon icon={faNetworkWired} />
                  <h4>Мережа</h4>
                  <p>Використовуйте професійні мережі для знайомства з інвесторами</p>
                </div>
                <div className="tip-card">
                  <FontAwesomeIcon icon={faFileAlt} />
                  <h4>Документи</h4>
                  <p>Підготуйте всі необхідні документи та презентації заздалегідь</p>
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

export default Investors;
