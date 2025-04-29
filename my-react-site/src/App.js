// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/App.css'; // Підключення вашого CSS

// Імпорт інших сторінок (вони мають бути створені окремо)
import MyStartup from '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/pages/MyStartup.jsx';
import Market from '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/pages/Market.jsx';
import Investors from '/Users/apple/Desktop/ВЕБ/my_proj/my-react-site/src/pages/Investors.jsx';

const HomePage = () => {
  return (
    <div className="App">
      <header>
        <h1>Симулятор управління стартапом</h1>
        <nav>
          <ul>
            <li><Link to="/" className="active">Головна</Link></li>
            <li><Link to="/my-startup">Мій стартап</Link></li>
            <li><Link to="/market">Ринок</Link></li>
            <li><Link to="/investors">Інвестори</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Створіть свій віртуальний бізнес!</h2>
          <p>Навчіться керувати стартапом у безпечному середовищі нашого симулятора.</p>
          <Link to="/my-startup" className="cta-button">Почати</Link>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>🛠️ Мій стартап</h3>
            <p>Створюйте та керуйте власним бізнесом, від найму персоналу до розширення офісів</p>
          </div>

          <div className="feature-card">
            <h3>📈 Ринок</h3>
            <p>Аналізуйте конкурентів, вивчайте тренди та знаходьте нові ринки збуту</p>
          </div>

          <div className="feature-card">
            <h3>💼 Інвестори</h3>
            <p>Знаходьте інвесторів, отримуйте фінансування та розвивайте свій бізнес</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Симулятор управління стартапом. Всі права захищені.</p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-startup" element={<MyStartup />} />
        <Route path="/market" element={<Market />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </Router>
  );
};

export default App;
