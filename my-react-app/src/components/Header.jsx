import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/assets/files/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Слідкуємо за зміною стану авторизації
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header>
      <h1 style={{marginBottom: "var(--space-sm)"}}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Симулятор управління стартапом
        </Link>
      </h1>
      <nav>
        <ul>
          {/* Якщо НЕ залогінений — показуємо "Вхід" */}
          {!isAuth && (
            <li>
              <Link
                to="/auth"
                className={location.pathname === "/auth" ? "active" : ""}
              >
                Вхід
              </Link>
            </li>
          )}
          {/* Якщо залогінений — показуємо "Мій аккаунт" */}
          {isAuth && (
            <li>
              <Link
                to="/my.account"
                className={location.pathname === "/my.account" ? "active" : ""}
              >
                Мій аккаунт
              </Link>
            </li>
          )}
          {/* Мій стартап */}
          <li>
            <Link
              to="/my-startup"
              className={location.pathname === "/my-startup" ? "active" : ""}
            >
              Мій стартап
            </Link>
          </li>
          {/* Ринок */}
          <li>
            <Link
              to="/market"
              className={location.pathname === "/market" ? "active" : ""}
            >
              Ринок
            </Link>
          </li>
          {/* Інвестори */}
          <li>
            <Link
              to="/investors"
              className={location.pathname === "/investors" ? "active" : ""}
            >
              Інвестори
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
