import React, { useState, useEffect } from "react";
import { db } from "/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/assets/files/firebase.js";
import { collection, getDocs } from "firebase/firestore";

export default function Investors() {
  const [industry, setIndustry] = useState("all");
  const [amount, setAmount] = useState("all");
  const [allInvestors, setAllInvestors] = useState([]);
  const [filteredInvestors, setFilteredInvestors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Завантажуємо дані з Firestore один раз при монтуванні
  useEffect(() => {
    async function fetchInvestors() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "investors"));
        const investors = [];
        querySnapshot.forEach((doc) => {
          investors.push({ id: doc.id, ...doc.data() });
        });
        setAllInvestors(investors);
        setFilteredInvestors(investors);
      } catch (e) {
        setAllInvestors([]);
        setFilteredInvestors([]);
      }
      setLoading(false);
    }
    fetchInvestors();
  }, []);

  // Фільтрація
  const handleFilter = (e) => {
    e.preventDefault();
    setFilteredInvestors(
      allInvestors.filter(inv => {
        const industryMatch = industry === "all" || inv.industry === industry;
        const amountMatch = amount === "all" || inv.amountRange === amount;
        return industryMatch && amountMatch;
      })
    );
  };

  // Controlled filter changes
  const handleIndustryChange = (e) => setIndustry(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  return (
    <main>
      <section id="investors">
        <div className="investors-header">
          <h2>Інвестиційні можливості</h2>
          <p>Знайдіть потенційних інвесторів для свого стартапу</p>
        </div>

        <div className="content">
          <form className="investor-filters" onSubmit={handleFilter}>
            <div className="filter-group">
              <label htmlFor="industry-filter"><i className="fas fa-filter"></i> Сфера:</label>
              <select id="industry-filter" value={industry} onChange={handleIndustryChange}>
                <option value="all">Всі сфери</option>
                <option value="tech">Технології</option>
                <option value="fintech">Фінтех</option>
                <option value="healthcare">Охорона здоров'я</option>
                <option value="ecommerce">E-commerce</option>
                <option value="education">Освіта</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="amount-filter"><i className="fas fa-dollar-sign"></i> Сума:</label>
              <select id="amount-filter" value={amount} onChange={handleAmountChange}>
                <option value="all">Будь-яка</option>
                <option value="small">До $100k</option>
                <option value="medium">$100k-$1M</option>
                <option value="large">Понад $1M</option>
              </select>
            </div>
            <button className="search-btn" type="submit">
              <i className="fas fa-search"></i> Пошук
            </button>
          </form>

          <div className="investor-stats">
            <div className="stat-card">
              <i className="fas fa-users"></i>
              <div>
                <h3>{loading ? "…" : allInvestors.length}</h3>
                <p>Активних інвесторів</p>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-hand-holding-usd"></i>
              <div>
                <h3>$87M</h3>
                <p>Загальний об'єм інвестицій</p>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-rocket"></i>
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
              {loading ? (
                <tr>
                  <td colSpan={6} style={{textAlign: "center", color: "#999"}}>
                    Завантаження інвесторів...
                  </td>
                </tr>
              ) : filteredInvestors.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{textAlign: "center", color: "#999"}}>
                    Інвесторів не знайдено за вибраними критеріями.
                  </td>
                </tr>
              ) : (
                filteredInvestors.map((inv) => (
                  <tr key={inv.id}>
                    <td>
                      <div className="investor-profile">
                        <img src={inv.logo} alt={inv.name} className="investor-logo" />
                        <span>{inv.name}</span>
                      </div>
                    </td>
                    <td>{inv.interests}</td>
                    <td>{inv.type}</td>
                    <td>{inv.amount}</td>
                    <td>{inv.stages}</td>
                    <td>
                      <button className="contact-btn">
                        <i className="fas fa-envelope"></i> Контакт
                      </button>
                    </td>
                  </tr>
                ))
              )}
              </tbody>
            </table>
          </div>

          <div className="investment-tips">
            <h3><i className="fas fa-lightbulb"></i> Поради щодо пошуку інвестицій</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <i className="fas fa-bullseye"></i>
                <h4>Чіткий фокус</h4>
                <p>Чітко формулюйте свою пропозицію та унікальні переваги вашого продукту</p>
              </div>
              <div className="tip-card">
                <i className="fas fa-chart-line"></i>
                <h4>Показники</h4>
                <p>Готуйте зрозумілі фінансові прогнози та показники росту</p>
              </div>
              <div className="tip-card">
                <i className="fas fa-network-wired"></i>
                <h4>Мережа</h4>
                <p>Використовуйте професійні мережі для знайомства з інвесторами</p>
              </div>
              <div className="tip-card">
                <i className="fas fa-file-alt"></i>
                <h4>Документи</h4>
                <p>Підготуйте всі необхідні документи та презентації заздалегідь</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
