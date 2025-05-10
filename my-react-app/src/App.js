import '/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/App.css'; // Підключення стилів

import { Link } from 'react-router-dom';

function App() {
  return (
    <>
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
          <a href="my-startup.html" className="cta-button">Почати</a>
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
    </>
  );
}

export default App;
