import React from "react";
import { Link } from "react-router-dom";
export default function Home() {

    return (
        <main>
            <section className="hero">
                <h2>Створіть свій віртуальний бізнес!</h2>
                <p>Навчіться керувати стартапом у безпечному середовищі нашого симулятора.</p>
              <Link to="/auth" className="cta-button">Почати</Link>
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
    );
}
