export default function MyStartup() {
    return (
        <main>
            <section id="startup-management">
                <h2>Мій стартап</h2>
                <div className="content">
                    <form action="market.html" id="startup-form">

                        <div className="form-group">
                            <label htmlFor="company-name">Назва компанії:</label>
                            <input type="text" id="company-name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="industry">Сфера діяльності:</label>
                            <select id="industry" required>
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
                            <input type="number" id="employees" min="1" defaultValue="1" />
                        </div>

                        <button type="submit">Створити стартап</button>
                    </form>

                    <div className="startup-dashboard hidden">
                        <h3>Панель управління</h3>
                        <div className="metrics">
                            <div className="metric">
                                <span className="metric-label">Прибуток:</span>
                                <span className="metric-value" id="profit">0</span>
                            </div>
                            <div className="metric">
                                <span className="metric-label">Витрати:</span>
                                <span className="metric-value" id="expenses">0</span>
                            </div>
                        </div>

                        <h4>Ринки збуту</h4>
                        <div id="markets"></div>

                        <h4>Офіси</h4>
                        <div id="offices"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
