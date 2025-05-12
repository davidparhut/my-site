import { Link } from "react-router-dom";

export default function Header() {
    return (
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
    );
};